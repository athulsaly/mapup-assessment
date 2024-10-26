import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword") || "";
  const skip = parseInt(searchParams.get("skip") || "0");
  const take = parseInt(searchParams.get("take") || "50");

  try {
    const searchResult = await db.vehiclePopulation.findMany({
      where: {
        vin: {
          search: keyword,
        },
        dolVehicleId: {
          search: keyword,
        },
        make: {
          search: keyword,
        },
        county: {
          search: keyword,
        },
        city: {
          search: keyword,
        },
        state: {
          search: keyword,
        },
        model: {
          search: keyword,
        },
      },
      orderBy: {
        dolVehicleId: "asc",
      },
      skip,
      take,
    });
    return NextResponse.json(searchResult);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
}
