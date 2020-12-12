<?php

namespace App\Controller\Api\V1\User;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 * @Route("/api/v1/users", name="api_v1_user_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("", name="dashboard", methods={"GET"})
     */
    public function dashboard(UserRepository $userRepository): Response
    {
        return $this->json($userRepository->findAll(), 200, [], ['groups' => ['user:dashboard', 'user:friend']]);
    }

    /**
    * @Route("/{id}", name="read", methods={"GET"})
    */
    public function read(User $user): Response
    {
        return $this->json($user, 200, [], ['groups' => ['user:dashboard', 'user:friend']]);
    }

    /**
    * @Route("/{slug}", name="read", methods={"GET"})
    */
    public function slug(User $user): Response
    {
        return $this->json($user, 200, [], ['groups' => ['user:dashboard', 'user:friend']]);
    }

    /**
    * @Route("/edit/{id}", name="edit", methods={"PATCH"})
    */
    public function edit(Request $request, int $id): Response
    {
        $data = json_decode($request->getContent(), true);

        $user = $this->getDoctrine()
        ->getRepository('App:User')
        ->find($id);

        if(!$user) {
            return new JsonResponse(['msg' => 'Cette Id d\'utilisateur n\'existe pas !'.$id], 404);
        }
        

        $form = $this->createForm(UserType::class, $user);
        $form->submit($data, false);

            $user->setUpdatedAt(new \DateTime());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('success', 'Profil modifié.');
            
        return $this->json($user, 200, [], ['groups' => ['user:dashboard', 'user:friend']]);
    }
    
    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(User $id): Response
    {
       $doctrine = $this->getDoctrine()->getManager();
       $doctrine->remove($id);
       $doctrine->flush();

       return $this->json(['msg' => 'Cette utilisateur a été supprimé avec succés!'], 200);
    }
}


    




