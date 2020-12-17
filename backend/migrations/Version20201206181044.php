<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201206181044 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE friend DROP FOREIGN KEY FK_55EEAC61359512B6');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649359512B6');
        $this->addSql('DROP TABLE friend_relation');
        $this->addSql('ALTER TABLE friend DROP INDEX UNIQ_55EEAC61F624B39D, ADD INDEX IDX_55EEAC61F624B39D (sender_id)');
        $this->addSql('ALTER TABLE friend DROP INDEX UNIQ_55EEAC61CD53EDB6, ADD INDEX IDX_55EEAC61CD53EDB6 (receiver_id)');
        $this->addSql('DROP INDEX IDX_55EEAC61359512B6 ON friend');
        $this->addSql('ALTER TABLE friend ADD updated_at DATETIME NOT NULL, ADD status TINYINT(1) DEFAULT NULL, DROP friend_relation_id');
        $this->addSql('DROP INDEX IDX_8D93D649359512B6 ON user');
        $this->addSql('ALTER TABLE user DROP friend_relation_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE friend_relation (id INT AUTO_INCREMENT NOT NULL, active TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE friend DROP INDEX IDX_55EEAC61F624B39D, ADD UNIQUE INDEX UNIQ_55EEAC61F624B39D (sender_id)');
        $this->addSql('ALTER TABLE friend DROP INDEX IDX_55EEAC61CD53EDB6, ADD UNIQUE INDEX UNIQ_55EEAC61CD53EDB6 (receiver_id)');
        $this->addSql('ALTER TABLE friend ADD friend_relation_id INT DEFAULT NULL, DROP updated_at, DROP status');
        $this->addSql('ALTER TABLE friend ADD CONSTRAINT FK_55EEAC61359512B6 FOREIGN KEY (friend_relation_id) REFERENCES friend_relation (id)');
        $this->addSql('CREATE INDEX IDX_55EEAC61359512B6 ON friend (friend_relation_id)');
        $this->addSql('ALTER TABLE user ADD friend_relation_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649359512B6 FOREIGN KEY (friend_relation_id) REFERENCES friend_relation (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649359512B6 ON user (friend_relation_id)');
    }
}
