<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api/v1/", name="api_v1_main_")
 */
class MainController extends AbstractController
{
    /**
     * @Route("home", name="browse")
     */
    public function home(): Response
    {
        return $this->json([]);
    }

    /**
     * @Route("dashboard", name="show", methods={"GET"})
     */
    public function dashboard(UserRepository $userRepository): Response
    {
        $users = $userRepository->findAll();

        return $this->json($users);
    }

     /**
     * @Route("{id}", name="read", methods={"GET"})
     */
    public function read(User $user): Response
    {
        return $this->json($user);
    }

    /**
     * @Route("user/edit/{id}", name="user_edit")
     */
    public function edit(Request $request, SerializerInterface $serializer)
    {
        $json = $request->getContent();

        $userArray = json_decode($json, true);

        $user = $this->getUser();

        $form = $this->createForm(UserType::class, $user);

        $form->submit($userArray);

        if ($form->isSubmitted() && $form->isValid()) {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->flush();

            $this->addFlash('success', 'Profil modifié.');

            return $this->json($user);
        }

    }
}
