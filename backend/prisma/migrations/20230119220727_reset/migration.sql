/*
  Warnings:

  - You are about to drop the `_bookingtoroom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_conforttoroom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `booking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `confort` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `guest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `room` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_bookingtoroom` DROP FOREIGN KEY `_BookingToRoom_A_fkey`;

-- DropForeignKey
ALTER TABLE `_bookingtoroom` DROP FOREIGN KEY `_BookingToRoom_B_fkey`;

-- DropForeignKey
ALTER TABLE `_conforttoroom` DROP FOREIGN KEY `_ConfortToRoom_A_fkey`;

-- DropForeignKey
ALTER TABLE `_conforttoroom` DROP FOREIGN KEY `_ConfortToRoom_B_fkey`;

-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_billId_fkey`;

-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_guestId_fkey`;

-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_billId_fkey`;

-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `Profile_guestId_fkey`;

-- DropTable
DROP TABLE `_bookingtoroom`;

-- DropTable
DROP TABLE `_conforttoroom`;

-- DropTable
DROP TABLE `bill`;

-- DropTable
DROP TABLE `booking`;

-- DropTable
DROP TABLE `confort`;

-- DropTable
DROP TABLE `guest`;

-- DropTable
DROP TABLE `order`;

-- DropTable
DROP TABLE `profile`;

-- DropTable
DROP TABLE `room`;
