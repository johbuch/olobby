<?php

namespace App\Controller\ControllerDev;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
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
}
