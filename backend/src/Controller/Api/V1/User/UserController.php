<?php

namespace App\Controller\Api\V1\User;

use App\Entity\FriendRelation;
use App\Entity\Friend;
use App\Entity\User;
use App\Form\UserType;
use App\Form\RelationType;
use App\Form\FriendType;
use App\Repository\FriendRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("/api/v1/users", name="api_v1_user_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("", name="dashboard", methods={"GET"})
     */
    public function dashboard(UserRepository $userRepository): Response
    {
        return $this->json($userRepository->findAll(), 200, [], ['groups' => 'user:dashboard']);
    }

    /**
    * @Route("/{id}", name="read", methods={"GET"})
    */
    public function read(User $user): Response
    {
        return $this->json($user, 200, [], ['groups' => 'user:dashboard']);
    }

   
    /**
    * @Route("/edit/{id}", name="edit", methods={"PATCH"})
    */
    public function edit(Request $request, int $id): Response
    {
        $data = json_decode($request->getContent(), true);

        $user = $this->getDoctrine()
        ->getRepository('App:User')
        ->find($id);

        if(!$user) {
            return new JsonResponse(['msg' => 'Cette Id d\'utilisateur n\'existe pas !'.$id], 404);
        }
        

        $form = $this->createForm(UserType::class, $user);
        $form->submit($data, false);

            $user->setUpdatedAt(new \DateTime());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('success', 'Profil modifié.');
            
        return $this->json(['msg' => 'Cette utilisateur a été actualisé avec succés!'], 200);
    }
    
    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(User $id): Response
    {
       $doctrine = $this->getDoctrine()->getManager();
       $doctrine->remove($id);
       $doctrine->flush();

       return $this->json(['msg' => 'Cette utilisateur a été supprimé avec succés!'], 200);
    }

    /**
     * @Route("/add/friend", name="add_friend", methods={"POST"})
     */
    public function addFriend(Request $request): Response
    {

        $json = $request->getContent();

        $friendArray = json_decode($json, true);

        $friend = new Friend();

        $form = $this->createForm(FriendType::class, $friend, ['csrf_protection' => false]);
        $form->submit($friendArray);
        
        if ($form->isSubmitted() && $form->isValid()) {

            $friend->setCreatedAt(new \DateTime());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($friend);
            $entityManager->flush();

            return $this->json(['msg' => 'Cette utilisateur a bien été ajouté, votre relation est en attente de sa confirmation!'], 200);
        } else {
            // Si le formulaire n'est pas valide (les contraintes de validation ne sont pas respectées)
            // on retourne un code 400 avec un tableau de toutes les erreurs
            // https://symfonycasts.com/screencast/symfony-rest2/validation-errors-response
            return $this->json([
                'errors' => (string) $form->getErrors(true, false),
            ], 400);
        }
    }
    /**
     * @Route("/accept/friend/{id}", name="accept_friend", methods={"PUT"})
     */
    public function acceptFriend(Request $request, int $id): Response
    {

        $data = json_decode($request->getContent(), true);

        $invit = $this->getDoctrine()
        ->getRepository('App:Friend')
        ->find($id);

        if(!$invit) {
            return new JsonResponse(['msg' => 'Cette invitation n\'existe pas !'.$id], 404);
        }
//dd($invit);
        $relation = new FriendRelation();

        $form = $this->createForm(RelationType::class, $relation, ['csrf_protection' => false]);
        $form->submit($data);
        
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($relation);
            $entityManager->flush();
        
            
        }
        dd($relation);
            if(!$relation) {
                return new JsonResponse(['msg' => 'Cette relation n\'existe pas !'.$id], 404);
            }
            
    
            //$form2 = $this->createForm(FriendType::class, $invit);
            //$form2->submit($data, false);
            
            
            //$friendRelation = $relation->getId();
            //$invit->setFriendRelation($friendRelation);

                //$entityManager = $this->getDoctrine()->getManager();
                //$entityManager->persist($invit);
                //$entityManager->flush();

            return $this->json(['msg' => 'Relation acceptée !'], 200);
         
    }

    
}



