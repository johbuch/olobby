<?php

namespace App\Controller\Api\V1\Friend;

use App\Entity\Friend;
use App\Entity\User;
use App\Form\FriendType;
use App\Repository\FriendRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * @Route("/api/v1/friends", name="api_v1_friends_")
 */
class FriendController extends AbstractController
{
     /**
     * @Route("/add", name="add", methods={"POST"})
     */
    public function addFriend(Request $request): Response
    {
        $user = $this->getUser();
        $json = $request->getContent();

        $friendArray = json_decode($json, true);

        $friend = new Friend();

        

        $form = $this->createForm(FriendType::class, $friend, ['csrf_protection' => false]);
        $form->submit($friendArray);
        
        if ($form->isSubmitted() && $form->isValid()) {
            $friend->setSender($user->getId());
            $friend->setCreatedAt(new \DateTime());
            $friend->setUpdatedAt(new \DateTime());
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
     * @Route("/accept/{id}", name="accept", methods={"PATCH"})
     */
    public function acceptFriend(Friend $id): Response
    {
        $friend = $this->getDoctrine()
        ->getRepository('App:Friend')
        ->find($id);

        $friend->setStatus(true);
        $friend->setUpdatedAt(new \DateTime());
        
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($friend);
        $entityManager->flush();

            return $this->json(['msg' => 'Relation acceptée !'], 200);
        
    }

    /**
     * @Route("/delete/{id}", name="refuse", methods={"DELETE"})
     */
    public function deleteRequestFriend(Friend $id): Response
    {

    $doctrine = $this->getDoctrine()->getManager();
       $doctrine->remove($id);
       $doctrine->flush();

       return $this->json(['msg' => 'Cette demande d\'amitié a bien été refusée!'], 200);
    }

    /**
    * @Route("/request/{id}", name="request", methods={"GET"})
    */
    public function myRequestFriendInWaiting(User $user, FriendRepository $friendRepository, int $id): Response
    {
        $test = $friendRepository->myRequestFriendInWaiting($id);
        return $this->json($test, 200, [], ['groups' => ['user:dashboard', 'user:friend']]);
    }

    /**
    * @Route("/wait/{id}", name="wait", methods={"GET"})
    */
    public function requestFriendInWaiting(User $user, FriendRepository $friendRepository, int $id): Response
    {
        $test = $friendRepository->requestFriendInWaiting($id);
        return $this->json($test, 200, [], ['groups' => ['user:dashboard', 'user:friend']]);
    }

     /**
    * @Route("/list/{id}", name="list", methods={"GET"})
    */
    public function myFriends(User $user, FriendRepository $friendRepository, int $id): Response
    {
        $friends = [
          'friend1' => $friendRepository->myFriend($id),
          'friend2' => $friendRepository->myFriends($id),
        ];
        return $this->json($friends, 200, [], ['groups' => ['user:dashboard', 'user:friend']]);
    }
}
