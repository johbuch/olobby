<?php

namespace App\Controller\Api\V1\Matchmaking;

use App\Entity\User;
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
     * @Route("/levelandplatformandvideogame/{id}", name="api_v1_matchmaking_levelAndPlatformAndVideogame", methods={"GET"})
     * méthode qui recommande des users en filtrant en fonction du niveau du user connecté,
     * de sa plateforme et de son 1er jeux vidéo qu'il a choisi
     */
    public function levelAndPlatformAndVideogame(User $user, UserRepository $userRepository): Response
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
     * @Route("/platformandvideogame/{id}", name="api_v1_matchmaking_platformAndVideogame", methods={"GET"})
     * méthode qui recommande des users en filtrant en fonction de la plateforme du user connecté
     * et du 2ème jeux vidéo qu'il a ajouté à son profil
     */
    public function platformAndVideogame(User $user, UserRepository $userRepository): Response
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
