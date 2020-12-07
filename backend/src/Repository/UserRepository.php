<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function upgradePassword(UserInterface $user, string $newEncodedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
        }

        $user->setPassword($newEncodedPassword);
        $this->_em->persist($user);
        $this->_em->flush();
    }

    /**
     * @return User[] Returns an array of User objects
     */
    public function matchMaking(int $id)
    {
        return $this->createQueryBuilder('u')


        ->leftJoin('u.platform', 'p')
        ->addSelect('p')
        ->leftJoin('u.videogames', 'v')
        ->addSelect('v')
        ->where('u.id = :id')
        ->setParameter('id', $id)

        ->getQuery()
        ->getOneOrNullResult()


        ;
    }
    /**
     * @return User[] Returns an array of User objects
     */
    public function match()
    {
        return $this->createQueryBuilder('u')

            ->leftJoin('u.platform', 'p')
            ->addSelect('p')
            ->leftJoin('u.videogames', 'v')
            ->addSelect('v')

            ->setMaxResults(10)
            ->orderBy('u.createdAt', 'DESC')

            
            ->getQuery()
            ->getResult()


        ;
    }
}
