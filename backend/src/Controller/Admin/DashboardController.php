<?php

namespace App\Controller\Admin;

use App\Entity\Frequency;
use App\Entity\GenreGame;
use App\Entity\Platform;
use App\Entity\TypeGame;
use App\Entity\User;
use App\Entity\Videogame;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\CrudUrlGenerator;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @IsGranted("ROLE_ADMIN")
 */
class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        // return parent::index();
        $routeBuilder = $this->get(CrudUrlGenerator::class)->build();
        return $this->redirect($routeBuilder->setController(UserCrudController::class)->generateUrl());
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Administration O\'Lobby')
            ->renderContentMaximized();
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::section('Utilisateurs');
        yield MenuItem::linkToCrud('Liste', 'fas fa-users', User::class);
        yield MenuItem::linkToCrud('Fréquence', 'fas fa-wave-square', Frequency::class);

        yield MenuItem::section('Jeux vidéos');
        yield MenuItem::linkToCrud('Liste', 'fas fa-futbol', Videogame::class);
        yield MenuItem::linkToCrud('Genre', 'fas fa-tag', GenreGame::class);
        yield MenuItem::linkToCrud('Type', 'fas fa-hand-scissors', TypeGame::class);

        yield MenuItem::section('Plateformes');
        yield MenuItem::linkToCrud('Liste', 'fas fa-gamepad', Platform::class);

        yield MenuItem::section('Déconnexion');
        yield MenuItem::linkToLogout('Se déconnecter', 'fas fa-sign-out-alt');
    }
}
