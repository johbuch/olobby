<?php

namespace App\Controller\Api\V1\Platform;

use App\Entity\Platform;
use App\Repository\PlatformRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/platforms", name="api_v1_platform_")
 */
class PlatformController extends AbstractController
{
    /**
     * @Route("", name="browse", methods={"GET"})
     */
    public function browse(PlatformRepository $platformRepository): Response
    {
        $platforms = $platformRepository->findAll();

        return $this->json($platforms);
    }

    /**
    * @Route("/{id}", name="read", methods={"GET"})
    */
    public function read(Platform $platform): Response
    {
        return $this->json($platform);
    }
}