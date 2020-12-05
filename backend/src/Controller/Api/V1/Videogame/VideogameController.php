<?php

namespace App\Controller\Api\V1\Videogame;

use App\Entity\Videogame;
use App\Repository\VideogameRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/videogames", name="api_v1_videogame_")
 */
class VideogameController extends AbstractController
{
    /**
     * @Route("", name="browse", methods={"GET"})
     */
    public function browse(VideogameRepository $videogameRepository): Response
    {
        $videogames = $videogameRepository->findAll();

        return $this->json($videogames);
    }

    /**
    * @Route("/{id}", name="read", methods={"GET"})
    */
    public function read(Videogame $videogame): Response
    {
        return $this->json($videogame);
    }
}