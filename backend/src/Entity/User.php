<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @UniqueEntity(fields={"email"}, message="There is already an account with this email")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"platform:dashboard", "user:dashboard", "videogame:dashboard", "matchmaking"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Groups({"platform:dashboard", "user:dashboard", "videogame:dashboard", "matchmaking"})
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     * @Groups("user:dashboard")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=120)
     * @Groups({"user:dashboard", "user:friend", "matchmaking"})
     */
    private $pseudo;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $level;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $avatar;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $pseudoPlatform;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $rating;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $youtube;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $twitch;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $discord;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Platform::class, inversedBy="users")
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $platform;

    /**
     * @ORM\ManyToMany(targetEntity=Videogame::class, inversedBy="users")
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $videogames;

    /**
     * @ORM\OneToMany(targetEntity=Friend::class, mappedBy="sender", orphanRemoval=true)
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $friendSender;

    /**
     * @ORM\OneToMany(targetEntity=Friend::class, mappedBy="receiver", orphanRemoval=true)
     * @Groups({"user:dashboard", "matchmaking"})
     */
    private $friendReceiver;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isActive;

    
    public function __construct()
    {
        $this->videogames = new ArrayCollection();
        $this->friendSender = new ArrayCollection();
        $this->friendReceiver = new ArrayCollection();
        $this->isActive = true;
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    public function getLevel(): ?string
    {
        return $this->level;
    }

    public function setLevel(?string $level): self
    {
        $this->level = $level;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getPseudoPlatform(): ?string
    {
        return $this->pseudoPlatform;
    }

    public function setPseudoPlatform(?string $pseudoPlatform): self
    {
        $this->pseudoPlatform = $pseudoPlatform;

        return $this;
    }

    public function getRating(): ?int
    {
        return $this->rating;
    }

    public function setRating(?int $rating): self
    {
        $this->rating = $rating;

        return $this;
    }

    public function getYoutube(): ?string
    {
        return $this->youtube;
    }

    public function setYoutube(?string $youtube): self
    {
        $this->youtube = $youtube;

        return $this;
    }

    public function getTwitch(): ?string
    {
        return $this->twitch;
    }

    public function setTwitch(?string $twitch): self
    {
        $this->twitch = $twitch;

        return $this;
    }

    public function getDiscord(): ?string
    {
        return $this->discord;
    }

    public function setDiscord(?string $discord): self
    {
        $this->discord = $discord;

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

    public function getPlatform(): ?Platform
    {
        return $this->platform;
    }

    public function setPlatform(?Platform $platform): self
    {
        $this->platform = $platform;

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

    /**
     * @return Collection|Friend[]
     */
    public function getFriendSender(): Collection
    {
        return $this->friendSender;
    }

    public function addFriendSender(Friend $friendSender): self
    {
        if (!$this->friendSender->contains($friendSender)) {
            $this->friendSender[] = $friendSender;
            $friendSender->setSender($this);
        }

        return $this;
    }

    public function removeFriendSender(Friend $friendSender): self
    {
        if ($this->friendSender->removeElement($friendSender)) {
            // set the owning side to null (unless already changed)
            if ($friendSender->getSender() === $this) {
                $friendSender->setSender(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Friend[]
     */
    public function getFriendReceiver(): Collection
    {
        return $this->friendReceiver;
    }

    public function addFriendReceiver(Friend $friendReceiver): self
    {
        if (!$this->friendReceiver->contains($friendReceiver)) {
            $this->friendReceiver[] = $friendReceiver;
            $friendReceiver->setReceiver($this);
        }

        return $this;
    }

    public function removeFriendReceiver(Friend $friendReceiver): self
    {
        if ($this->friendReceiver->removeElement($friendReceiver)) {
            // set the owning side to null (unless already changed)
            if ($friendReceiver->getReceiver() === $this) {
                $friendReceiver->setReceiver(null);
            }
        }

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

   
}
