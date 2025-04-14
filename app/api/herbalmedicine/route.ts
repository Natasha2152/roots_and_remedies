import { NextResponse } from "next/server";
import prisma from '../../../lib/prisma';
interface HerbalMedicineData {
  name: string;
  description: string;
  benefits: string;
  origin: string;
  category: string;
  imageUrl: string;
  symptoms: string;
  tags: string;
  usageIdeas: string;
  likes?: number;
  rating?: number;
}

export async function POST(req: Request) {
  try {
    const body = await req.json() as HerbalMedicineData;

    const herb = await prisma.herbalMedicine.create({
      data: body,
    });

    return NextResponse.json(herb, { status: 201 });
  } catch (error) {
    console.error("Error creating herbal medicine entry:", error);
    return NextResponse.json({ error: "Error creating herbal medicine data" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;
    const search = searchParams.get("search") || "";

    const whereClause = search
      ? {
          OR: [
            { name: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
            { benefits: { contains: search, mode: "insensitive" } },
            { origin: { contains: search, mode: "insensitive" } },
          ],
        }
      : {};

    const herbs = await prisma.herbalMedicine.findMany({
      where: whereClause,
      skip,
      take: limit,
    });

    const total = await prisma.herbalMedicine.count({
      where: whereClause,
    });

    return NextResponse.json({ herbs, total, page, limit });
  } catch (error) {
    console.error("Error fetching herbal medicine data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
