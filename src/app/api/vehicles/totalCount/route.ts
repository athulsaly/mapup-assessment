import { NextResponse } from "next/server";
import { db } from "@/db";

export async function GET() {
  try {
    const totalCount = await db.vehiclePopulation.count();
    return NextResponse.json(totalCount);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
}
