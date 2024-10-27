import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    const makes = [
      "TESLA",
      "FORD",
      "NISSAN",
      "KIA",
      "BMW",
      "CHEVROLET",
      "AUDI",
      "SMART",
      "VOLKSWAGEN",
      "TOYOTA",
      "RIVIAN",
      "JEEP",
      "HYUNDAI",
      "FIAT",
      "PORSCHE",
      "CHRYSLER",
      "HONDA",
      "MITSUBISHI",
      "LEXUS",
      "VOLVO",
      "DODGE",
      "MERCEDES-BENZ",
      "SUBARU",
      "JAGUAR",
      "POLESTAR",
      "MINI",
      "LUCID",
      "LAND ROVER",
      "CADILLAC",
      "ALFA ROMEO",
      "FISKER",
      "MAZDA",
      "LINCOLN",
      "GENESIS",
      "TH!NK",
      "GMC",
      "BENTLEY",
      "AZURE DYNAMICS",
    ];
    const counts = await Promise.all(
      makes.map(async (make) => {
        const count = await db.vehiclePopulation.count({
          where: {
            make,
          },
        });
        return count;
      })
    );

    return NextResponse.json({
      labels: makes,
      count: counts,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
}
