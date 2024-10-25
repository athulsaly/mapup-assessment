-- CreateTable
CREATE TABLE "electric_vehicles" (
    "vin" VARCHAR(50),
    "county" VARCHAR(50),
    "city" VARCHAR(50),
    "state" VARCHAR(50),
    "postalcode" VARCHAR(20),
    "modelyear" VARCHAR(50),
    "make" VARCHAR(50),
    "model" VARCHAR(50),
    "electricvehicletype" VARCHAR(50),
    "cafveligibility" VARCHAR(100),
    "electricrange" VARCHAR(50),
    "basemsrp" VARCHAR(50),
    "legislativedistrict" VARCHAR(50),
    "dolvehicleid" VARCHAR(50) NOT NULL,
    "vehiclelocation" VARCHAR(150),
    "electricutility" VARCHAR(100),
    "censustract" VARCHAR(20),

    CONSTRAINT "electric_vehicles_pkey" PRIMARY KEY ("dolvehicleid")
);

-- CreateTable
CREATE TABLE "VehiclePopulation" (
    "id" TEXT NOT NULL,
    "vin" VARCHAR(50) NOT NULL,
    "county" VARCHAR(50) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "state" VARCHAR(50) NOT NULL,
    "postalCode" VARCHAR(20) NOT NULL,
    "modelYear" VARCHAR(50) NOT NULL,
    "make" VARCHAR(50) NOT NULL,
    "model" VARCHAR(50) NOT NULL,
    "electricVehicleType" VARCHAR(50) NOT NULL,
    "cafvEligibility" VARCHAR(100) NOT NULL,
    "electricTange" VARCHAR(50) NOT NULL,
    "baseMsrp" VARCHAR(50) NOT NULL,
    "legislativeDistrict" VARCHAR(50) NOT NULL,
    "dolVehicleId" VARCHAR(50) NOT NULL,
    "vehicleLocation" VARCHAR(150) NOT NULL,
    "electricUtility" VARCHAR(100) NOT NULL,
    "censusTract" VARCHAR(20) NOT NULL,

    CONSTRAINT "VehiclePopulation_pkey" PRIMARY KEY ("id")
);
