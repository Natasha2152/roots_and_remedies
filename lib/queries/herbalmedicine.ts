// lib/queries/herbalmedicine.ts
import prisma from "../../lib/prisma";

export async function getAllHerbalMedicine() {
  return await prisma.herbalMedicine.findMany({
    orderBy: { name: "asc" },
  });
}
