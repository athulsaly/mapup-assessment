import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const completeList = await prisma.vehiclePopulation.findMany();
    return NextResponse.json(completeList);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching list" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
