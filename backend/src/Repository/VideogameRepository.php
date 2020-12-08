<?php

namespace App\Repository;

use App\Entity\Videogame;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Videogame|null find($id, $lockMode = null, $lockVersion = null)
 * @method Videogame|null findOneBy(array $criteria, array $orderBy = null)
 * @method Videogame[]    findAll()
 * @method Videogame[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VideogameRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Videogame::class);
    }

    /**
     * @return Videogame[] Returns an array of Videogame objects
     */
    
    public function matchV()
    {
         return $this->createQueryBuilder('v')


        ->leftJoin('v.users', 'u')
        ->addSelect('u')
        ->where('v.id = :id')
        ->setParameter('id', '1')

        ->getQuery()
        ->getOneOrNullResult()


        ;
    }
    

    /*
    public function findOneBySomeField($value): ?Videogame
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
