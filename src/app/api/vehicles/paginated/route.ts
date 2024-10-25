import { db } from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const skip = parseInt(searchParams.get("skip") || "0");
  const take = parseInt(searchParams.get("take") || "50");

  try {
    const paginatedList = await db.vehiclePopulation.findMany({
      skip,
      take,
    });
    return NextResponse.json(paginatedList);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
}
