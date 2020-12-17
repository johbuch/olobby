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

    public function findByLevel($value, $id)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.level = :val')
            ->andWhere('u.id != :id')
            ->setParameter('val', $value)
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findByPlatform($platform, $id)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.platform = :platform')
            ->andWhere('u.id != :id')
            ->setParameter('platform', $platform)
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findByFrequencyAndPlatformAndVideogame($frequency, $platform, $videogameId, $id)
    {
        return $this->createQueryBuilder('u')
            ->innerJoin('u.videogames', 'v')
            ->where('u.frequency = :frequency')
            ->andWhere('v.id = :videogameId')
            ->andWhere('u.platform = :platform')
            ->andWhere('u.id != :id')
            ->setParameter('videogameId', $videogameId)
            ->setParameter('frequency', $frequency)
            ->setParameter('platform', $platform)
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findByVideogame($videogameId, $platformId, $id)
    {
        return $this->createQueryBuilder('u')
            ->innerJoin('u.videogames', 'v')
            ->innerJoin('u.platform', 'p')
            ->where('v.id = :videogameId')
            ->andWhere('p.id = :platformId')
            ->andWhere('u.id != :id')
            ->setParameter('videogameId', $videogameId)
            ->setParameter('platformId', $platformId)
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult()
        ;
    }

    public function findAllByPseudo()
    {
        return $this->createQueryBuilder('u')
            ->orderBy('u.pseudo', 'DESC')
            ->getQuery()
            ->getResult()
        ;
    }
}
