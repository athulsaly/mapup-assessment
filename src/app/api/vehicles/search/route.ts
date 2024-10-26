import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("search") || "";
  const skip = parseInt(searchParams.get("skip") || "0");
  const take = parseInt(searchParams.get("take") || "50");

  try {
    const listData = await db.vehiclePopulation.findMany({
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
      skip,
      take,
    });
    const totalCount = await db.vehiclePopulation.count({
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
    });
    return NextResponse.json({ listData, totalCount });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
}
