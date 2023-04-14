-- CreateTable
CREATE TABLE `Beer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `minTemperature` INTEGER NOT NULL,
    `maxTemperature` INTEGER NOT NULL,

    UNIQUE INDEX `Beer_type_key`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
