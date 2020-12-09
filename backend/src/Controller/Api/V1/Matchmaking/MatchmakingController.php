<?php

namespace App\Controller\Api\V1\Matchmaking;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/matchmaking", name="api_v1_matchmaking_")
 */
class MatchmakingController extends AbstractController
{
    /**
     * @Route("/levelandplatformandvideogame", name="api_v1_matchmaking_levelandplatform", methods={"GET"})
     */
    public function levelandplatformAndVideogame(UserRepository $userRepository): Response
    {
        // récupération du user connecté
        $user = $this->getUser();
        
        // récupération de la liste des users correspondant aux critères du user connecté
        $userList = $userRepository->findByLevelAndPlatformAndVideogame($user->getLevel(), $user->getPlatform(), $user->getVideogames()[0], $user->getId());

        // mélange du tableau pour avoir des données aléatoires
        shuffle($userList);

        // limite à 10 utilisateurs
        $userList = array_slice($userList, 0, 10);
        
        return $this->json($userList, 200, [], ['groups' => ['matchmaking']]);
    }

    /**
     * @Route("/platformandvideogame", name="api_v1_matchmaking_platformandvideogame", methods={"GET"})
     */
    public function platformandvideogame(UserRepository $userRepository): Response
    {
        // récupération du user connecté
        $user = $this->getUser();

        // récupération de la liste des users correspondant aux critères du user connecté
        $userList = $userRepository->findByVideogame($user->getVideogames()[1], $user->getPlatform()->getId(), $user->getId());

        // mélange du tableau pour avoir des données aléatoires
        shuffle($userList);

        // limite à 10 utilisateurs
        $userList = array_slice($userList, 0, 10);

        return $this->json($userList, 200, [], ['groups' => ['matchmaking']]);
    }
}
