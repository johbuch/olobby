<?php

namespace App\Repository;

use App\Entity\Friend;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Friend|null find($id, $lockMode = null, $lockVersion = null)
 * @method Friend|null findOneBy(array $criteria, array $orderBy = null)
 * @method Friend[]    findAll()
 * @method Friend[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FriendRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Friend::class);
    }

    /**
      * @return Friend[] Returns an array of Friend objects
      */
    
    public function requestFriendInWaiting($id)
    {
        return $this->createQueryBuilder('f')
                ->leftJoin(
                    'App\Entity\User',
                    'u',
                    'WITH',
                    'u.id = f.sender'
                )
                ->addSelect('u')
                ->where('f.receiver = :id')
                ->andWhere('f.status = 0')
                ->setParameter('id', $id)
                ->getQuery()
                ->getResult()
        
        ;
    }
    
    public function myRequestFriendInWaiting($id)
    {
        return $this->createQueryBuilder('f')
                ->leftJoin(
                    'App\Entity\User',
                    'u',
                    'WITH',
                    'u.id = f.receiver'
                )
                ->addSelect('u')
                ->where('f.sender = :id')
                ->andWhere('f.status = 0')
                ->setParameter('id', $id)
                ->getQuery()
                ->getResult()
        
        ;
    }

    public function myFriend($id)
    {
        return $this->createQueryBuilder('f')
                ->leftJoin(
                    'App\Entity\User',
                    'u',
                    'WITH',
                    'u.id = f.receiver'
                )
                ->addSelect('u')
                ->where('f.sender = :id')
                ->andWhere('f.status = 1')
                ->setParameter('id', $id)
                ->getQuery()
                ->getResult()
        
        ;
    }
    public function myFriends($id)
    {
        return $this->createQueryBuilder('f')
                ->leftJoin(
                    'App\Entity\User',
                    'u',
                    'WITH',
                    'u.id = f.sender'
                )
                ->addSelect('u')
                ->where('f.receiver = :id')
                ->andWhere('f.status = 1')
                ->setParameter('id', $id)
                ->getQuery()
                ->getResult()
        
        ;
    }


   
}
