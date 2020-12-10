<?php

namespace App\Controller\Api\V1\Friend;

use App\Entity\Friend;
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

        $json = $request->getContent();

        $friendArray = json_decode($json, true);

        $friend = new Friend();

        $form = $this->createForm(FriendType::class, $friend, ['csrf_protection' => false]);
        $form->submit($friendArray);
        
        if ($form->isSubmitted() && $form->isValid()) {

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
    public function acceptFriend(Request $request, int $id): Response
    {

        $data = json_decode($request->getContent(), true);

        $friend = $this->getDoctrine()
        ->getRepository('App:Friend')
        ->find($id);

        
        $form = $this->createForm(FriendType::class, $friend);
        $form->submit($data, false);

        $friend->setUpdatedAt(new \DateTime());
        
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($friend);
        $entityManager->flush();

            return $this->json(['msg' => 'Relation acceptée !'], 200);
        
    }
}
