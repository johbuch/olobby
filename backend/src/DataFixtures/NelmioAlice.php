<?php

namespace App\DataFixtures;

use App\Entity\Frequency;
use App\Entity\Platform;
use App\Entity\User;
use App\Entity\Videogame;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Nelmio\Alice\Loader\NativeLoader;

class NelmioAlice extends Fixture
{
    public function load(ObjectManager $em)
    {
        $loader = new NativeLoader();

        //importe le fichier de fixtures et récupère les entités générés
        $entities = $loader->loadFile(__DIR__.'/fixtures.yaml')->getObjects();

        //empile la liste d'objet à enregistrer en BDD
        foreach ($entities as $entity) {
            $em->persist($entity);
        }

        //enregistre
        $em->flush();
    }
}
