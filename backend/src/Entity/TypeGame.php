<?php

namespace App\Entity;

use App\Repository\TypeGameRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TypeGameRepository::class)
 */
class TypeGame
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=Videogame::class, mappedBy="typeGame")
     */
    private $videogames;

    public function __construct()
    {
        $this->videogames = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Videogame[]
     */
    public function getVideogames(): Collection
    {
        return $this->videogames;
    }

    public function addVideogame(Videogame $videogame): self
    {
        if (!$this->videogames->contains($videogame)) {
            $this->videogames[] = $videogame;
            $videogame->setTypeGame($this);
        }

        return $this;
    }

    public function removeVideogame(Videogame $videogame): self
    {
        if ($this->videogames->removeElement($videogame)) {
            // set the owning side to null (unless already changed)
            if ($videogame->getTypeGame() === $this) {
                $videogame->setTypeGame(null);
            }
        }

        return $this;
    }
}
