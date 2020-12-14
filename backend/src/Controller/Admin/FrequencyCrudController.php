<?php

namespace App\Controller\Admin;

use App\Entity\Frequency;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class FrequencyCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Frequency::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('name'),
        ];
    }
}
