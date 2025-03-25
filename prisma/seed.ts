import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seeding HerbalMedicine
  await prisma.herbalMedicine.create({
    data: {
      name: "Ashwagandha",
      description: "An adaptogenic herb used for stress relief and vitality.",
      benefits: "Boosts energy, reduces stress, supports immunity.",
      origin: "India",
    },
  });

  // Seeding Aromatherapy
  await prisma.aromatherapy.create({
    data: {
      name: "Lavender",
      essentialOil: "Lavender Oil",
      uses: "Calming effect, promotes sleep, relieves anxiety.",
    },
  });

  // Seeding Traditional Healing
  await prisma.traditionalHealing.create({
    data: {
      technique: "Acupuncture",
      culture: "Chinese",
      healingMethod: "Uses thin needles to stimulate energy flow.",
    },
  });

  console.log("🌿 Seeding complete!");
}

// Run the seed function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
