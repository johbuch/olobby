<?php

namespace App\Entity;

use App\Repository\PlatformRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PlatformRepository::class)
 */
class Platform
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"platform:dashboard", "user:dashboard"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=120)
     * @Groups({"platform:dashboard", "user:dashboard"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"platform:dashboard", "user:dashboard"})
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
     * @ORM\OneToMany(targetEntity=User::class, mappedBy="platform")
     * @Groups("platform:dashboard")
     */
    private $users;

    /**
     * @ORM\ManyToMany(targetEntity=Videogame::class, inversedBy="platforms")
     * @Groups("platform:dashboard")
     */
    private $videogames;

    public function __construct()
    {
        $this->users = new ArrayCollection();
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
            $user->setPlatform($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getPlatform() === $this) {
                $user->setPlatform(null);
            }
        }

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
        }

        return $this;
    }

    public function removeVideogame(Videogame $videogame): self
    {
        $this->videogames->removeElement($videogame);

        return $this;
    }
}
