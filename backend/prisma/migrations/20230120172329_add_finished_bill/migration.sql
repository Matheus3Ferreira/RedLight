/*
  Warnings:

  - Added the required column `finished` to the `Bill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bill` ADD COLUMN `finished` BOOLEAN NOT NULL;
