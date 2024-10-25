/*
  Warnings:

  - The primary key for the `VehiclePopulation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `VehiclePopulation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "VehiclePopulation" DROP CONSTRAINT "VehiclePopulation_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "VehiclePopulation_pkey" PRIMARY KEY ("dolVehicleId");
