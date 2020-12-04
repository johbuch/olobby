<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/", name="main_")
 */
class MainController extends AbstractController
{
    /**
     * @Route("home", name="browse")
     */
    public function home(): Response
    {
        return $this->render('main/home.html.twig', [
        ]);
    }

    /**
     * @Route("dashboard", name="show")
     */
    public function index(): Response
    {
        return $this->render('main/index.html.twig');
    }
}
