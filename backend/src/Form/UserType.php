<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', null, [
                'disabled' => $options['is_edit']
            ])
            ->add('roles', null, [
                'disabled' => $options['is_edit']
            ])
            ->add('password', null, [
                'disabled' => $options['is_edit']
            ])
            ->add('pseudo')
            ->add('level')
            ->add('description')
            ->add('avatar')
            ->add('pseudoPlatform')
            ->add('rating')
            ->add('youtube')
            ->add('twitch')
            ->add('discord')
            //->add('createdAt')
            //->add('updatedAt')
            ->add('platform', null, [
                'disabled' => $options['is_edit']
            ])
            ->add('videogames')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'is_edit' => false,
        ]);
    }
}
