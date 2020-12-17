<?php

namespace App\Controller\Admin;

use App\Entity\Frequency;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class FrequencyCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Frequency::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('fréquence')    
            ->setEntityLabelInPlural('fréquences')
            ->setPageTitle('index', 'Liste des %entity_label_plural%')
            ->setPageTitle('new', 'Ajouter une %entity_label_singular%')
            ->setPageTitle('edit', 'Modifier une %entity_label_singular%')
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
