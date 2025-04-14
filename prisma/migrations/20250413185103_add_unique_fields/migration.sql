/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `aromatherapy` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `herbalmedicine` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[technique]` on the table `traditionalhealing` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `aromatherapy_name_key` ON `aromatherapy`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `herbalmedicine_name_key` ON `herbalmedicine`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `traditionalhealing_technique_key` ON `traditionalhealing`(`technique`);
