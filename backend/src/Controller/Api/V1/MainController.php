<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/", name="api_v1_main_")
 */
class MainController extends AbstractController
{
    /**
     * @Route("home", name="browse")
     */
    public function home(): Response
    {
        return $this->json([]);
    }

    /**
     * @Route("dashboard", name="show")
     */
    public function dashboard(): Response
    {
        return $this->json([]);
    }
}
