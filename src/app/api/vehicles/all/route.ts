import { NextResponse } from "next/server";
import { db } from "@/db";

export async function GET() {
  try {
    const completeList = await db.vehiclePopulation.findMany();
    return NextResponse.json(completeList);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  } finally {
    await db.$disconnect();
  }
}
