<?php

namespace App\Controller\Admin;

use App\Entity\GenreGame;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class GenreGameCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return GenreGame::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('genre')    
            ->setEntityLabelInPlural('genres')
            ->setPageTitle('index', 'Liste des %entity_label_plural%')
            ->setPageTitle('new', 'Ajouter un %entity_label_singular%')
            ->setPageTitle('edit', 'Modifier un %entity_label_singular%')
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('name'),
        ];
    }
}
