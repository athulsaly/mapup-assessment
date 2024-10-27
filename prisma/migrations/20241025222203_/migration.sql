-- CreateTable
CREATE TABLE "VehiclePopulation" (
    "vin" TEXT NOT NULL,
    "county" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "modelYear" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "electricVehicleType" TEXT NOT NULL,
    "cafvEligibility" TEXT NOT NULL,
    "electricRange" TEXT NOT NULL,
    "baseMsrp" TEXT NOT NULL,
    "legislativeDistrict" TEXT NOT NULL,
    "dolVehicleId" TEXT NOT NULL,
    "vehicleLocation" TEXT NOT NULL,
    "electricUtility" TEXT NOT NULL,
    "censusTract" TEXT NOT NULL,

    CONSTRAINT "VehiclePopulation_pkey" PRIMARY KEY ("dolVehicleId")
);
