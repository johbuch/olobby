<?php

namespace App\Controller\ControllerDev;

use App\Entity\Friend;
use App\Entity\User;
use App\Form\FriendType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/", name="main_")
 */
class MainController extends AbstractController
{
    /**
     * @Route("", name="browse")
     */
    public function home(UserRepository $userRepository): Response
    {
        return $this->render('main/home.html.twig', [
            'users' => $userRepository->findAll()
        ]);
    }

    /**
     * @Route("dashboard", name="show")
     */
    public function dasboard(): Response
    {
        return $this->render('main/index.html.twig');
    }

    /**
     * @Route("add/friend", name="add_friend", methods={"POST"})
     */
    public function addFriend(Request $request, UserRepository $userRepository): Response
    {

        $friend = new Friend();

        $form = $this->createForm(FriendType::class, $friend, ['csrf_protection' => false]);
        $form->handleRequest($request);
        
        if ($form->isSubmitted() && $form->isValid()) {

            $friend->setCreatedAt(new \DateTime());
            $friend->setUpdatedAt(new \DateTime());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($friend);
            $entityManager->flush();
        } 
        return $this->redirectToRoute('main_browse');
    }
}
