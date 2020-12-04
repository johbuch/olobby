<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201130133619 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE platform_videogame (platform_id INT NOT NULL, videogame_id INT NOT NULL, INDEX IDX_67E5EC3AFFE6496F (platform_id), INDEX IDX_67E5EC3A25EB9E4B (videogame_id), PRIMARY KEY(platform_id, videogame_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_videogame (user_id INT NOT NULL, videogame_id INT NOT NULL, INDEX IDX_94396096A76ED395 (user_id), INDEX IDX_9439609625EB9E4B (videogame_id), PRIMARY KEY(user_id, videogame_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE platform_videogame ADD CONSTRAINT FK_67E5EC3AFFE6496F FOREIGN KEY (platform_id) REFERENCES platform (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE platform_videogame ADD CONSTRAINT FK_67E5EC3A25EB9E4B FOREIGN KEY (videogame_id) REFERENCES videogame (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_videogame ADD CONSTRAINT FK_94396096A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_videogame ADD CONSTRAINT FK_9439609625EB9E4B FOREIGN KEY (videogame_id) REFERENCES videogame (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user ADD platform_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649FFE6496F FOREIGN KEY (platform_id) REFERENCES platform (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649FFE6496F ON user (platform_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE platform_videogame');
        $this->addSql('DROP TABLE user_videogame');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649FFE6496F');
        $this->addSql('DROP INDEX IDX_8D93D649FFE6496F ON user');
        $this->addSql('ALTER TABLE user DROP platform_id');
    }
}
