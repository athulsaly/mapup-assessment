import { db } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const counties = [
      "King",
      "Thurston",
      "Clark",
      "Jefferson",
      "Island",
      "Kitsap",
      "Snohomish",
    ];
    const counts = await Promise.all(
      counties.map(async (county) => {
        const count = await db.vehiclePopulation.count({
          where: {
            county,
          },
        });
        return count;
      })
    );

    return NextResponse.json({
      labels: counties,
      count: counts,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
}
