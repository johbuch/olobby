<?php

namespace App\Repository;

use App\Entity\FriendRelation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method FriendRelation|null find($id, $lockMode = null, $lockVersion = null)
 * @method FriendRelation|null findOneBy(array $criteria, array $orderBy = null)
 * @method FriendRelation[]    findAll()
 * @method FriendRelation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FriendRelationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FriendRelation::class);
    }

    // /**
    //  * @return FriendRelation[] Returns an array of FriendRelation objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?FriendRelation
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
