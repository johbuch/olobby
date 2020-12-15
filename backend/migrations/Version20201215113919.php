<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201215113919 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE genre_game (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type_game (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE videogame ADD type_game_id INT DEFAULT NULL, ADD genre_game_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE videogame ADD CONSTRAINT FK_94D9ED72CCAEB6F0 FOREIGN KEY (type_game_id) REFERENCES type_game (id)');
        $this->addSql('ALTER TABLE videogame ADD CONSTRAINT FK_94D9ED72DF0A4AFD FOREIGN KEY (genre_game_id) REFERENCES genre_game (id)');
        $this->addSql('CREATE INDEX IDX_94D9ED72CCAEB6F0 ON videogame (type_game_id)');
        $this->addSql('CREATE INDEX IDX_94D9ED72DF0A4AFD ON videogame (genre_game_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE videogame DROP FOREIGN KEY FK_94D9ED72DF0A4AFD');
        $this->addSql('ALTER TABLE videogame DROP FOREIGN KEY FK_94D9ED72CCAEB6F0');
        $this->addSql('DROP TABLE genre_game');
        $this->addSql('DROP TABLE type_game');
        $this->addSql('DROP INDEX IDX_94D9ED72CCAEB6F0 ON videogame');
        $this->addSql('DROP INDEX IDX_94D9ED72DF0A4AFD ON videogame');
        $this->addSql('ALTER TABLE videogame DROP type_game_id, DROP genre_game_id');
    }
}
