import { db } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
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
