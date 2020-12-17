<?php

namespace App\Entity;

use App\Repository\VideogameRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=VideogameRepository::class)
 */
class Videogame
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"platform:dashboard", "user:dashboard", "videogame:dashboard", "matchmaking"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=120)
     * @Groups({"platform:dashboard", "user:dashboard", "videogame:dashboard", "matchmaking"})
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"platform:dashboard", "user:dashboard", "videogame:dashboard", "matchmaking"})
     */
    private $image;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToMany(targetEntity=User::class, mappedBy="videogames")
     * @Groups("videogame:dashboard")
     */
    private $users;

    /**
     * @ORM\ManyToMany(targetEntity=Platform::class, mappedBy="videogames")
     * @Groups("videogame:dashboard")
     */
    private $platforms;

    /**
     * @ORM\ManyToOne(targetEntity=TypeGame::class, inversedBy="videogames")
     * @Groups({"platform:dashboard", "user:dashboard", "videogame:dashboard", "matchmaking"})
     */
    private $typeGame;

    /**
     * @ORM\ManyToOne(targetEntity=GenreGame::class, inversedBy="videogames")
     * @Groups({"platform:dashboard", "user:dashboard", "videogame:dashboard", "matchmaking"})
     */
    private $genreGame;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->platforms = new ArrayCollection();
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
    }

    public function __toString()
    {
        return $this->title;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->addVideogame($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            $user->removeVideogame($this);
        }

        return $this;
    }

    /**
     * @return Collection|Platform[]
     */
    public function getPlatforms(): Collection
    {
        return $this->platforms;
    }

    public function addPlatform(Platform $platform): self
    {
        if (!$this->platforms->contains($platform)) {
            $this->platforms[] = $platform;
            $platform->addVideogame($this);
        }

        return $this;
    }

    public function removePlatform(Platform $platform): self
    {
        if ($this->platforms->removeElement($platform)) {
            $platform->removeVideogame($this);
        }

        return $this;
    }

    public function getTypeGame(): ?TypeGame
    {
        return $this->typeGame;
    }

    public function setTypeGame(?TypeGame $typeGame): self
    {
        $this->typeGame = $typeGame;

        return $this;
    }

    public function getGenreGame(): ?GenreGame
    {
        return $this->genreGame;
    }

    public function setGenreGame(?GenreGame $genreGame): self
    {
        $this->genreGame = $genreGame;

        return $this;
    }
}
