import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const skip = parseInt(searchParams.get("skip") || "0");
  const take = parseInt(searchParams.get("take") || "50");

  try {
    const listData = await db.vehiclePopulation.findMany({
      skip,
      take,
    });
    const totalCount = await db.vehiclePopulation.count();

    return NextResponse.json({ listData, totalCount });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
}
