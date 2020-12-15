<?php

namespace App\DataFixtures;

use App\Entity\Frequency;
use App\Entity\Platform;
use App\Entity\User;
use App\Entity\Videogame;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class Olobbydb extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // Le $manager qui est fourni ici est en fait l'entity manager qu'on connait déjà
        // En effet, il n'est pas indiqué que sa classe c'est EntityManager mais dites vous que EntityManager est uen classe qui hérite de ObjectManager
        // Pour une raison qu'on accepte d'ignorer, on fait abstraction de la raison qui pousse à indiquer ObjectManager en paramètre au lieu d'EntityManager et on se dit juste que ObjectManager et EntityManager ça sera pareil

        // On s'apprête à créer plusieurs fausses données
        // On fait des listes de ces fausses données
      
        $platformNames = [
            'Xbox',
            'Playstation',
            'PC',
        ];

        $videogameTitles = [
            'Fortnite',
            'Warzone',
            'GTA',
            'Fifa 2021',
            'Rocket League',
            'League Of Legend',
            'Apex Legends',
        ];

        $frequencyNames = [
          'Occasionnel',
          'Quotidien',
          'No Life',
      ];

        // On initialise des tableaux dans lesquels ont va conserver les données créées
        $platforms = [];
        $videogames = [];
        $frequencies = [];

        // On boucle sur les listes pour créer des objets et les persiter au fur et à mesure dans $manager
        foreach ($platformNames as $platformName) {
            $platform = new Platform();
            $platform->setName($platformName);
            $manager->persist($platform);
            $platforms[] = $platform;
        }

        foreach ($videogameTitles as $videogameTitle) {
            $videogame = new Videogame();
            $videogame->setTitle($videogameTitle);
            $manager->persist($videogame);
            $videogames[] = $videogame;
        }

        foreach ($frequencyNames as $frequencyName) {
          $frequency = new Frequency();
          $frequency->setName($frequencyName);
          $manager->persist($frequency);
          $frequencies[] = $frequency;
      }
        // Comme dans un contrôleur, tout le SQL se génère et s'exécute tout seul ici
        $manager->flush();
    }
}