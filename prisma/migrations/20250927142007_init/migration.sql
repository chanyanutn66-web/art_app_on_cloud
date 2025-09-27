-- CreateTable
CREATE TABLE `art_app_cloud` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `art_name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `owner` VARCHAR(191) NOT NULL,
    `pic` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
