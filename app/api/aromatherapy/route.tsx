import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const aroma = await prisma.aromatherapy.create({ data: body });
    return NextResponse.json(aroma, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating data" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const aromas = await prisma.aromatherapy.findMany();
    return NextResponse.json(aromas);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
