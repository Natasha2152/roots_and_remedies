import { NextResponse } from "next/server";
import prisma from '../../../lib/prisma';
// Define the type for the request body
interface TraditionalHealingData {
  technique: string;
  culture: string;
  healingMethod: string;
  usageIdeas: string;
  benefits: string;
  description: string;
  imageUrl: string;
  likes?: number;
  rating?: number;
  region: string;
  tags: string;
}

// POST request to create a new traditional healing entry
export async function POST(req: Request) {
  try {
    // Parse the body and assert its type
    const body = await req.json() as TraditionalHealingData; // Type assertion here

    // Validate the body structure if needed (optional but useful for extra safety)
    if (!body.technique || !body.culture || !body.healingMethod || !body.usageIdeas || !body.benefits || !body.description || !body.imageUrl || !body.region || !body.tags) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create a new traditional healing entry in the database
    const traditionalHealing = await prisma.traditionalHealing.create({
      data: body,
    });

    // Return the newly created entry
    return NextResponse.json(traditionalHealing, { status: 201 });
  } catch (error: unknown) {
    console.error("Error creating data:", error);
    return NextResponse.json({ error: "Error creating data" }, { status: 500 });
  }
}

// GET request to retrieve traditional healing data with search and pagination
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    // Pagination settings
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const skip = (page - 1) * limit;

    // Search filter
    const search = searchParams.get("search") || "";

    // Build the search clause if search term exists
    const whereClause = search
      ? {
          OR: [
            { technique: { contains: search, mode: "insensitive" } },
            { culture: { contains: search, mode: "insensitive" } },
            { healingMethod: { contains: search, mode: "insensitive" } },
            { usageIdeas: { contains: search, mode: "insensitive" } },
            { benefits: { contains: search, mode: "insensitive" } },
            { description: { contains: search, mode: "insensitive" } },
            { region: { contains: search, mode: "insensitive" } },
            { tags: { contains: search, mode: "insensitive" } },
          ],
        }
      : {};

    // Query to fetch traditional healing entries
    const traditionalHealings = await prisma.traditionalHealing.findMany({
      where: whereClause,
      skip,
      take: limit,
    });

    // Get total count for pagination
    const total = await prisma.traditionalHealing.count({
      where: whereClause,
    });

    // Return the results
    return NextResponse.json({
      traditionalHealings,
      total,
      page,
      limit,
    });
  } catch (error: unknown) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
