// lib/queries/aromatherapy.ts
import prisma from "../../lib/prisma";

export async function getAllAromatherapy() {
  return await prisma.aromatherapy.findMany({
    orderBy: { name: "asc" },
  });
}
