<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201206122540 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE friend (id INT AUTO_INCREMENT NOT NULL, friend_relation_id INT DEFAULT NULL, sender VARCHAR(255) NOT NULL, receiver VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, INDEX IDX_55EEAC61359512B6 (friend_relation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE friend_relation (id INT AUTO_INCREMENT NOT NULL, active TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE platform (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(120) NOT NULL, image VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE platform_videogame (platform_id INT NOT NULL, videogame_id INT NOT NULL, INDEX IDX_67E5EC3AFFE6496F (platform_id), INDEX IDX_67E5EC3A25EB9E4B (videogame_id), PRIMARY KEY(platform_id, videogame_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, platform_id INT DEFAULT NULL, friend_relation_id INT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, pseudo VARCHAR(120) NOT NULL, level VARCHAR(255) DEFAULT NULL, description LONGTEXT DEFAULT NULL, avatar VARCHAR(255) DEFAULT NULL, pseudo_platform VARCHAR(255) DEFAULT NULL, rating INT DEFAULT NULL, youtube VARCHAR(255) DEFAULT NULL, twitch VARCHAR(255) DEFAULT NULL, discord VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), INDEX IDX_8D93D649FFE6496F (platform_id), INDEX IDX_8D93D649359512B6 (friend_relation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_videogame (user_id INT NOT NULL, videogame_id INT NOT NULL, INDEX IDX_94396096A76ED395 (user_id), INDEX IDX_9439609625EB9E4B (videogame_id), PRIMARY KEY(user_id, videogame_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE videogame (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(120) NOT NULL, image VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE friend ADD CONSTRAINT FK_55EEAC61359512B6 FOREIGN KEY (friend_relation_id) REFERENCES friend_relation (id)');
        $this->addSql('ALTER TABLE platform_videogame ADD CONSTRAINT FK_67E5EC3AFFE6496F FOREIGN KEY (platform_id) REFERENCES platform (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE platform_videogame ADD CONSTRAINT FK_67E5EC3A25EB9E4B FOREIGN KEY (videogame_id) REFERENCES videogame (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649FFE6496F FOREIGN KEY (platform_id) REFERENCES platform (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649359512B6 FOREIGN KEY (friend_relation_id) REFERENCES friend_relation (id)');
        $this->addSql('ALTER TABLE user_videogame ADD CONSTRAINT FK_94396096A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_videogame ADD CONSTRAINT FK_9439609625EB9E4B FOREIGN KEY (videogame_id) REFERENCES videogame (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE friend DROP FOREIGN KEY FK_55EEAC61359512B6');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649359512B6');
        $this->addSql('ALTER TABLE platform_videogame DROP FOREIGN KEY FK_67E5EC3AFFE6496F');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649FFE6496F');
        $this->addSql('ALTER TABLE user_videogame DROP FOREIGN KEY FK_94396096A76ED395');
        $this->addSql('ALTER TABLE platform_videogame DROP FOREIGN KEY FK_67E5EC3A25EB9E4B');
        $this->addSql('ALTER TABLE user_videogame DROP FOREIGN KEY FK_9439609625EB9E4B');
        $this->addSql('DROP TABLE friend');
        $this->addSql('DROP TABLE friend_relation');
        $this->addSql('DROP TABLE platform');
        $this->addSql('DROP TABLE platform_videogame');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_videogame');
        $this->addSql('DROP TABLE videogame');
    }
}
