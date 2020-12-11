<?php

namespace App\Controller\Api\V1\Registration;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Security\LoginFormAuthenticator;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Component\Serializer\SerializerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;

 /**
 * @Route("/api/v1", name="api_v1_")
 */
class RegistrationController extends AbstractController
{
    /**
     * @Route("/register", name="register", methods={"POST"})
     */
    public function register(JWTTokenManagerInterface $JWTManager, Request $request, SerializerInterface $serializer, UserPasswordEncoderInterface $passwordEncoder, GuardAuthenticatorHandler $guardHandler, LoginFormAuthenticator $authenticator, MailerInterface $mailer): Response
    {
        $json = $request->getContent();

        $userArray = json_decode($json, true);

        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user, ['csrf_protection' => false]);
        $form->submit($userArray);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $passwordEncoder->encodePassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $user->setRoles(['ROLE_USER']);
            $user->setCreatedAt(new \DateTime());
            $user->setUpdatedAt(new \DateTime());

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();
             // do anything else you need here, like send an email
             $email = (new TemplatedEmail())
             ->from('inscription@lobby.com')
             ->to($user->getEmail())
             ->subject('Bonjour ' . $user->getPseudo() . ', confirmation de votre inscription O\'Lobby')
             ->htmlTemplate('emails/registration.html.twig')
             ->context([
                 'pseudo' => $user->getPseudo(),
                 'e_mail' => $user->getEmail(),
             ])
         ;
         $mailer->send($email);
         return $this->json(['token' => $JWTManager->create($user)], 201, [], ['groups' => 'user:dashboard']);
        } else {
            return $this->json([
                'errors' => (string) $form->getErrors(true, false),
            ], 400);
        }
    }

}
