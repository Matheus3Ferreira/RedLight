/*
  Warnings:

  - You are about to drop the column `guestId` on the `bill` table. All the data in the column will be lost.
  - You are about to drop the `_bookingtoroom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `booking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `guest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_bookingtoroom` DROP FOREIGN KEY `_BookingToRoom_A_fkey`;

-- DropForeignKey
ALTER TABLE `_bookingtoroom` DROP FOREIGN KEY `_BookingToRoom_B_fkey`;

-- DropForeignKey
ALTER TABLE `bill` DROP FOREIGN KEY `Bill_guestId_fkey`;

-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_billId_fkey`;

-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_guestId_fkey`;

-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `Profile_guestId_fkey`;

-- AlterTable
ALTER TABLE `bill` DROP COLUMN `guestId`;

-- DropTable
DROP TABLE `_bookingtoroom`;

-- DropTable
DROP TABLE `booking`;

-- DropTable
DROP TABLE `guest`;

-- DropTable
DROP TABLE `profile`;
