import { NextResponse } from "next/server";
import { db } from "@/db";

export async function GET() {
  try {
    const listData = await db.vehiclePopulation.findMany();
    const totalCount = await db.vehiclePopulation.count();

    return NextResponse.json({ listData, totalCount });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
}
