import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const healing = await prisma.traditionalHealing.create({ data: body });
    return NextResponse.json(healing, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating data" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const healings = await prisma.traditionalHealing.findMany();
    return NextResponse.json(healings);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
