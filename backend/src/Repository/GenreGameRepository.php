<?php

namespace App\Repository;

use App\Entity\GenreGame;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method GenreGame|null find($id, $lockMode = null, $lockVersion = null)
 * @method GenreGame|null findOneBy(array $criteria, array $orderBy = null)
 * @method GenreGame[]    findAll()
 * @method GenreGame[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GenreGameRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GenreGame::class);
    }

    // /**
    //  * @return GenreGame[] Returns an array of GenreGame objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?GenreGame
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
