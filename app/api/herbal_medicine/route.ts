import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Import Prisma instance

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const medicine = await prisma.herbalMedicine.create({ data: body });
    return NextResponse.json(medicine, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating data" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const medicines = await prisma.herbalMedicine.findMany();
    return NextResponse.json(medicines);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
