import { NextResponse } from "next/server";
import prisma from '../../../lib/prisma';
 // Adjust relative path if needed



interface AromatherapyData {
  name: string;
  essentialOil: string;
  uses: string;
  benefits: string;
  category: string;
  description: string;
  imageUrl: string;
  origin: string;
  symptoms: string;
  tags: string;
  usageIdeas: string;
  likes?: number;
  rating?: number;
}

export async function POST(req: Request) {
  try {
    const body = await req.json() as AromatherapyData;

    const aroma = await prisma.aromatherapy.create({
      data: body,
    });

    return NextResponse.json(aroma, { status: 201 });
  } catch (error) {
    console.error("Error creating aromatherapy entry:", error);
    return NextResponse.json({ error: "Error creating aromatherapy data" }, { status: 500 });
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
            { uses: { contains: search, mode: "insensitive" } },
          ],
        }
      : {};

    const aromas = await prisma.aromatherapy.findMany({
      where: whereClause,
      skip,
      take: limit,
    });

    const total = await prisma.aromatherapy.count({
      where: whereClause,
    });

    return NextResponse.json({ aromas, total, page, limit });
  } catch (error) {
    console.error("Error fetching aromatherapy data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
