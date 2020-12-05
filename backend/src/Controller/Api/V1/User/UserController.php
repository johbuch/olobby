<?php

namespace App\Controller\Api\V1\User;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;

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
        return $this->json($userRepository->findAll(), 200, [], ['groups' => 'user:dashboard']);
    }

     /**
     * @Route("/{id}", name="read", methods={"GET"})
     */
    public function read(User $user): Response
    {
        return $this->json($user);
    }

   
     /**
     * @Route("/edit/{id}", name="edit", methods={"PUT"})
     */
    public function edit(Request $request, User $user): Response
    {

         $donnees = json_decode($request->getContent());

        $user->setPseudo($donnees->pseudo);
        $user->setEmail($donnees->email);
        $user->setPassword($donnees->password);

        $user->setUpdatedAt(new \DateTime());



            
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

            $this->addFlash('success', 'Profil modifié.');

            
        
        return $this->json($user);
    }


    /**
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
/*  public function delete(Request $request, User $user): Response
    {
        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('user_index');
    }
*/
}
