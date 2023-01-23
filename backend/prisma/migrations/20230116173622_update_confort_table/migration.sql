/*
  Warnings:

  - You are about to drop the `_amenitytoroom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `amenity` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[guestId]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `capacity` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_amenitytoroom` DROP FOREIGN KEY `_AmenityToRoom_A_fkey`;

-- DropForeignKey
ALTER TABLE `_amenitytoroom` DROP FOREIGN KEY `_AmenityToRoom_B_fkey`;

-- AlterTable
ALTER TABLE `room` ADD COLUMN `capacity` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_amenitytoroom`;

-- DropTable
DROP TABLE `amenity`;

-- CreateTable
CREATE TABLE `Confort` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ConfortToRoom` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ConfortToRoom_AB_unique`(`A`, `B`),
    INDEX `_ConfortToRoom_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Booking_guestId_key` ON `Booking`(`guestId`);

-- AddForeignKey
ALTER TABLE `_ConfortToRoom` ADD CONSTRAINT `_ConfortToRoom_A_fkey` FOREIGN KEY (`A`) REFERENCES `Confort`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ConfortToRoom` ADD CONSTRAINT `_ConfortToRoom_B_fkey` FOREIGN KEY (`B`) REFERENCES `Room`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
