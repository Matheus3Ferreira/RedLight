/*
  Warnings:

  - You are about to drop the `_billtoproduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_billtoproduct` DROP FOREIGN KEY `_BillToProduct_A_fkey`;

-- DropForeignKey
ALTER TABLE `_billtoproduct` DROP FOREIGN KEY `_BillToProduct_B_fkey`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `orderId` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `_billtoproduct`;

-- CreateTable
CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `billId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_billId_fkey` FOREIGN KEY (`billId`) REFERENCES `Bill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
