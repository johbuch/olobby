<?php

namespace App\Controller\Api\V1\Friend;

use App\Entity\Friend;
use App\Entity\User;
use App\Form\FriendType;
use App\Repository\FriendRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api/v1/friends", name="api_v1_friends_")
 */
class FriendController extends AbstractController
{
     /**
     * @Route("/add", name="add", methods={"POST"})
     */
    public function addFriend(Request $request, MailerInterface $mailer): Response
    {
        $json = $request->getContent();
        $friendArray = json_decode($json, true);
        
        // obtenir les infos du user connecté
        $user = $this->getUser();
        
        $friend = new Friend();
       
        $form = $this->createForm(FriendType::class, $friend, ['csrf_protection' => false]);
        $form->submit($friendArray);
        
        if ($form->isSubmitted() && $form->isValid()) {
            $friend->setSender($user);
            $friend->setStatus(false);
            $friend->setCreatedAt(new \DateTime());
            $friend->setUpdatedAt(new \DateTime());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($friend);
            $entityManager->flush();

            // création de l'email à envoyer à l'utilisateur qui reçoit une demande d'ami
            $email = (new TemplatedEmail())
                ->from('contact@olobby.com')
                ->to($form->getData()->getReceiver()->getEmail())
                ->subject('Nouvelle demande d\'ami')
                ->htmlTemplate('emails/friend-invitation.html.twig')
                ->context([
                    'pseudoSender' => $user->getPseudo(),
                    'pseudoReceiver' => $form->getData()->getReceiver()->getPseudo()
                ])
            ;
            
            // envoi de l'email
            $mailer->send($email);

            return $this->json(['msg' => 'Cet utilisateur a bien été ajouté, votre relation est en attente de sa confirmation!'], 200);
        } else {
            // Si le formulaire n'est pas valide (les contraintes de validation ne sont pas respectées)
            // on retourne un code 400 avec un tableau de toutes les erreurs
            // https://symfonycasts.com/screencast/symfony-rest2/validation-errors-response
            return $this->json([
                'errors' => (string) $form->getErrors(true, false),
            ], 400);
        }
    }

    /**
     * @Route("/accept/{id}", name="accept", methods={"PATCH"})
     */
    public function acceptFriend(Friend $id, MailerInterface $mailer): Response
    {
        $friend = $this->getDoctrine()
        ->getRepository('App:Friend')
        ->find($id);

        $friend->setStatus(true);
        $friend->setUpdatedAt(new \DateTime());
        
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($friend);
        $entityManager->flush();

        // création de l'email de confirmation d'ajout à envoyer à l'utilisateur qui a fait la demande
        $email = (new TemplatedEmail())
            ->from('contact@olobby.com')
            ->to($friend->getSender()->getEmail())
            ->subject('Acceptation de votre demande en ami')
            ->htmlTemplate('emails/friend-accept.html.twig')
            ->context([
                'pseudoSender' => $friend->getSender()->getPseudo(),
                'pseudoReceiver' => $friend->getReceiver()->getPseudo()
            ])
        ;
    
        // envoi de l'email
        $mailer->send($email);

        return $this->json(['msg' => 'Relation acceptée !'], 200);
    }

    /**
     * @Route("/delete/{id}", name="refuse", methods={"DELETE"})
     */
    public function deleteRequestFriend(Friend $id): Response
    {
        $doctrine = $this->getDoctrine()->getManager();
        $doctrine->remove($id);
        $doctrine->flush();

       return $this->json(['msg' => 'Cette demande d\'amitié a bien été refusée!'], 200);
    }

    /**
     * @Route("/pending-sent-request/{id}", name="pending_sent_request", methods={"GET"})
     * methode qui liste les demandes d'amis en attente faites par le user connecté
     */
    public function pendingFriendRequestsSentByUser(FriendRepository $friendRepository, int $id): Response
    {
        $pendingUsers = $friendRepository->pendingFriendRequestsSentByUser($id);
        return $this->json($pendingUsers, 200, [], ['groups' => ['user:dashboard', 'user:friend']]);
    }

    /**
     * @Route("/pending-for-confirmation/{id}", name="pending_for_confirmation", methods={"GET"})
     * méthode qui liste les demandes d'amis en attente d'acceptation par le user connecté
     */
    public function pendingFriendRequestsForConfirmation(FriendRepository $friendRepository, int $id): Response
    {
        $pendingUsers = $friendRepository->pendingFriendRequestsForConfirmation($id);
        return $this->json($pendingUsers, 200, [], ['groups' => ['user:dashboard', 'user:friend']]);
    }

    /**
     * @Route("/list/{id}", name="list", methods={"GET"})
     * méthode qui envoi la liste des amis du user
     */
    public function myFriends(User $user, FriendRepository $friendRepository, int $id): Response
    {
        $friends = [
          'friend1' => $friendRepository->myFriend($id),
          'friend2' => $friendRepository->myFriends($id),
        ];

        // modification du tableau $friends pour supprimer les index 'friend1' et 'friend2'
        // pour avoir un tableau simple avec les valeurs directement
        $friends = array_merge($friends['friend1'], $friends['friend2']);

        // on ne veut obtenir que les valeurs qui ont un index impair
        foreach ($friends as $key => $value) {
            if (!($key&1)) {
                unset($friends[$key]);
            }
        }
        
        return $this->json($friends, 200, [], ['groups' => ['user:dashboard', 'user:friend']]);
    }

    /**
     * @Route("/lastaddedfriends/{id}", name="last_added_friends", methods={"GET"})
     * méthode qui liste les 3 derniers amis ajoutés qui ont envoyé 
     */
    public function lastAddedFriends(FriendRepository $friendRepository, int $id)
    {
        $friends = $friendRepository->myFriends($id);

        // on ne veut obtenir que les valeurs qui ont un index impair
        foreach ($friends as $key => $value) {
            if (!($key&1)) {
                unset($friends[$key]);
            }
        }

        // on ne veut obtenir que 3 résultats
        $friends = array_slice($friends, 0, 3);
        
        return $this->json($friends, 200, [], ['groups' => ['user:dashboard', 'user:friend']]);
    }
}
