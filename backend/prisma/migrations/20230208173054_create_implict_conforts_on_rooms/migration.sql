/*
  Warnings:

  - You are about to drop the `_conforttoroom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_conforttoroom` DROP FOREIGN KEY `_ConfortToRoom_A_fkey`;

-- DropForeignKey
ALTER TABLE `_conforttoroom` DROP FOREIGN KEY `_ConfortToRoom_B_fkey`;

-- DropTable
DROP TABLE `_conforttoroom`;

-- CreateTable
CREATE TABLE `ConfortsOnRooms` (
    `id` VARCHAR(191) NOT NULL,
    `confortId` VARCHAR(191) NOT NULL,
    `roomId` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ConfortsOnRooms` ADD CONSTRAINT `ConfortsOnRooms_confortId_fkey` FOREIGN KEY (`confortId`) REFERENCES `Confort`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConfortsOnRooms` ADD CONSTRAINT `ConfortsOnRooms_roomId_fkey` FOREIGN KEY (`roomId`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
