/*
  Warnings:

  - You are about to drop the column `productId` on the `room` table. All the data in the column will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `room` DROP FOREIGN KEY `Room_productId_fkey`;

-- AlterTable
ALTER TABLE `room` DROP COLUMN `productId`;

-- DropTable
DROP TABLE `product`;
