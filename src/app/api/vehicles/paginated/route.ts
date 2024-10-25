import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const skip = parseInt(searchParams.get("skip") || "0");
  const take = parseInt(searchParams.get("take") || "50");

  try {
    const paginatedList = await prisma.vehiclePopulation.findMany({
      skip,
      take,
    });
    return NextResponse.json(paginatedList);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching list" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
