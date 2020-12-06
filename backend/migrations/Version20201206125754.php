<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201206125754 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE friend ADD sender_id INT NOT NULL, ADD receiver_id INT NOT NULL, DROP sender, DROP receiver');
        $this->addSql('ALTER TABLE friend ADD CONSTRAINT FK_55EEAC61F624B39D FOREIGN KEY (sender_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE friend ADD CONSTRAINT FK_55EEAC61CD53EDB6 FOREIGN KEY (receiver_id) REFERENCES user (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_55EEAC61F624B39D ON friend (sender_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_55EEAC61CD53EDB6 ON friend (receiver_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE friend DROP FOREIGN KEY FK_55EEAC61F624B39D');
        $this->addSql('ALTER TABLE friend DROP FOREIGN KEY FK_55EEAC61CD53EDB6');
        $this->addSql('DROP INDEX UNIQ_55EEAC61F624B39D ON friend');
        $this->addSql('DROP INDEX UNIQ_55EEAC61CD53EDB6 ON friend');
        $this->addSql('ALTER TABLE friend ADD sender VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, ADD receiver VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, DROP sender_id, DROP receiver_id');
    }
}
