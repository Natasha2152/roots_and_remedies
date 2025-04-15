import prisma from "../../lib/prisma";

export async function getAllTraditionalHealing() {
  try {
    const data = await prisma.traditionalHealing.findMany({
      orderBy: {
        technique: "asc",
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching traditional healing data:", error);
    throw error;
  }
}
