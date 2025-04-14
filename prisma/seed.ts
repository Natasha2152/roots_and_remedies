import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const aromatherapyData = [
  {
    name: "Lavender",
    essentialOil: "Lavender",
    uses: "Relaxation, Stress Relief",
    benefits: "Calming",
    category: "Essential Oils",
    description: "Lavender essential oil is extracted from the lavender plant.",
    imageUrl: "https://example.com/lavender.jpg",
    origin: "France",
    rating: 4.5,
    symptoms: "Insomnia, Anxiety",
    tags: "calming, relaxing",
    usageIdeas: "Use a diffuser for a calming atmosphere.",
    likes: 0
  },
  {
    name: "Peppermint",
    essentialOil: "Peppermint",
    uses: "Energy, Focus",
    benefits: "Stimulating",
    category: "Essential Oils",
    description: "Peppermint oil is known for its invigorating properties.",
    imageUrl: "https://example.com/peppermint.jpg",
    origin: "USA",
    rating: 4.2,
    symptoms: "Fatigue, Headaches",
    tags: "energizing, stimulating",
    usageIdeas: "Apply topically for headache relief.",
    likes: 0
  },
  {
    name: "Eucalyptus",
    essentialOil: "Eucalyptus",
    uses: "Respiratory Relief",
    benefits: "Refreshing",
    category: "Essential Oils",
    description: "Eucalyptus oil is extracted from the leaves of the eucalyptus tree.",
    imageUrl: "https://example.com/eucalyptus.jpg",
    origin: "Australia",
    rating: 4.7,
    symptoms: "Cold, Cough",
    tags: "respiratory, refreshing",
    usageIdeas: "Inhale steam for clear breathing.",
    likes: 0
  },
  {
    name: "Tea Tree",
    essentialOil: "Tea Tree",
    uses: "Skin Care, Infection",
    benefits: "Antiseptic",
    category: "Essential Oils",
    description: "Tea tree oil has strong antiseptic properties.",
    imageUrl: "https://example.com/teatree.jpg",
    origin: "Australia",
    rating: 4.8,
    symptoms: "Acne, Fungal Infections",
    tags: "antiseptic, skin care",
    usageIdeas: "Apply diluted oil to acne spots.",
    likes: 0
  },
  {
    name: "Lemon",
    essentialOil: "Lemon",
    uses: "Freshness, Detox",
    benefits: "Purifying",
    category: "Essential Oils",
    description: "Lemon oil is made from the peel of fresh lemons.",
    imageUrl: "https://example.com/lemon.jpg",
    origin: "Italy",
    rating: 4.4,
    symptoms: "Fatigue, Poor Digestion",
    tags: "fresh, detoxifying",
    usageIdeas: "Diffuse for a fresh environment.",
    likes: 0
  },
  {
    name: "Rosemary",
    essentialOil: "Rosemary",
    uses: "Memory, Mental Clarity",
    benefits: "Invigorating",
    category: "Essential Oils",
    description: "Rosemary oil is known for enhancing memory and focus.",
    imageUrl: "https://example.com/rosemary.jpg",
    origin: "Mediterranean",
    rating: 4.3,
    symptoms: "Brain Fog, Memory Loss",
    tags: "mental clarity, focus",
    usageIdeas: "Diffuse for cognitive support.",
    likes: 0
  },
  {
    name: "Chamomile",
    essentialOil: "Chamomile",
    uses: "Calming, Sleep Aid",
    benefits: "Relaxing",
    category: "Essential Oils",
    description: "Chamomile oil is extracted from chamomile flowers.",
    imageUrl: "https://example.com/chamomile.jpg",
    origin: "Germany",
    rating: 4.6,
    symptoms: "Insomnia, Stress",
    tags: "calming, relaxing",
    usageIdeas: "Diffuse before bedtime for restful sleep.",
    likes: 0
  },
  {
    name: "Frankincense",
    essentialOil: "Frankincense",
    uses: "Spiritual Healing",
    benefits: "Grounding",
    category: "Essential Oils",
    description: "Frankincense oil is extracted from the resin of the Boswellia tree.",
    imageUrl: "https://example.com/frankincense.jpg",
    origin: "Oman",
    rating: 4.9,
    symptoms: "Anxiety, Depression",
    tags: "grounding, spiritual",
    usageIdeas: "Meditate with Frankincense for deeper connection.",
    likes: 0
  },
  {
    name: "Ylang Ylang",
    essentialOil: "Ylang Ylang",
    uses: "Relaxation, Romance",
    benefits: "Soothing",
    category: "Essential Oils",
    description: "Ylang Ylang oil is extracted from the flowers of the Cananga tree.",
    imageUrl: "https://example.com/ylangylang.jpg",
    origin: "Indonesia",
    rating: 4.5,
    symptoms: "Stress, Low Libido",
    tags: "romantic, soothing",
    usageIdeas: "Diffuse to create a relaxing ambiance.",
    likes: 0
  },
  {
    name: "Geranium",
    essentialOil: "Geranium",
    uses: "Hormonal Balance",
    benefits: "Balancing",
    category: "Essential Oils",
    description: "Geranium oil is known for its calming and balancing effects.",
    imageUrl: "https://example.com/geranium.jpg",
    origin: "Egypt",
    rating: 4.3,
    symptoms: "Hormonal Imbalance, Anxiety",
    tags: "balancing, soothing",
    usageIdeas: "Apply diluted oil to pulse points.",
    likes: 0
  },
  {
    name: "Sandalwood",
    essentialOil: "Sandalwood",
    uses: "Grounding, Meditation",
    benefits: "Calming",
    category: "Essential Oils",
    description: "Sandalwood oil is extracted from the heartwood of the sandalwood tree.",
    imageUrl: "https://example.com/sandalwood.jpg",
    origin: "India",
    rating: 4.8,
    symptoms: "Stress, Anxiety",
    tags: "calming, grounding",
    usageIdeas: "Use in meditation for deep focus.",
    likes: 0
  },
  {
    name: "Cedarwood",
    essentialOil: "Cedarwood",
    uses: "Relaxation, Sleep",
    benefits: "Relaxing",
    category: "Essential Oils",
    description: "Cedarwood oil is known for its calming and grounding effects.",
    imageUrl: "https://example.com/cedarwood.jpg",
    origin: "USA",
    rating: 4.6,
    symptoms: "Insomnia, Stress",
    tags: "relaxing, grounding",
    usageIdeas: "Diffuse before bed for improved sleep.",
    likes: 0
  },
  {
    name: "Clary Sage",
    essentialOil: "Clary Sage",
    uses: "Hormonal Health",
    benefits: "Balancing",
    category: "Essential Oils",
    description: "Clary Sage oil is used for its balancing and calming properties.",
    imageUrl: "https://example.com/clarysage.jpg",
    origin: "Russia",
    rating: 4.7,
    symptoms: "Hormonal Imbalance, Stress",
    tags: "balancing, calming",
    usageIdeas: "Use in bath for relaxation.",
    likes: 0
  },
  {
    name: "Bergamot",
    essentialOil: "Bergamot",
    uses: "Mood Enhancement",
    benefits: "Uplifting",
    category: "Essential Oils",
    description: "Bergamot oil is known for its uplifting and mood-enhancing properties.",
    imageUrl: "https://example.com/bergamot.jpg",
    origin: "Italy",
    rating: 4.5,
    symptoms: "Stress, Low Mood",
    tags: "uplifting, refreshing",
    usageIdeas: "Diffuse to boost mood.",
    likes: 0
  },
  {
    name: "Cypress",
    essentialOil: "Cypress",
    uses: "Decongestant",
    benefits: "Clearing",
    category: "Essential Oils",
    description: "Cypress oil is often used to ease respiratory congestion and support circulation.",
    imageUrl: "https://example.com/cypress.jpg",
    origin: "France",
    rating: 4.4,
    symptoms: "Congestion, Poor Circulation",
    tags: "clearing, circulation",
    usageIdeas: "Inhale during steam treatments or diffuse for respiratory relief.",
    likes: 0
  }
];

const herbalMedicineData = [
  {
    name: "Ginseng",
    description: "Ginseng is used to improve energy and reduce stress.",
    benefits: "Boosts energy",
    origin: "Asia",
    category: "Roots",
    imageUrl: "https://example.com/ginseng.jpg",
    symptoms: "Fatigue, Stress",
    tags: "energy, stress-relief",
    usageIdeas: "Drink as a tea for a morning boost.",
    likes: 0,
    rating: 4.2
  },
  {
    name: "Turmeric",
    description: "Turmeric is known for its anti-inflammatory properties.",
    benefits: "Anti-inflammatory",
    origin: "India",
    category: "Spices",
    imageUrl: "https://example.com/turmeric.jpg",
    symptoms: "Joint Pain, Inflammation",
    tags: "anti-inflammatory, healing",
    usageIdeas: "Add to meals or use in a turmeric latte.",
    likes: 0,
    rating: 4.5
  },
  {
    name: "Ashwagandha",
    description: "Ashwagandha is an adaptogen that helps combat stress.",
    benefits: "Stress relief",
    origin: "India",
    category: "Roots",
    imageUrl: "https://example.com/ashwagandha.jpg",
    symptoms: "Stress, Anxiety",
    tags: "stress-relief, adaptogen",
    usageIdeas: "Take as a supplement or tea.",
    likes: 0,
    rating: 4.3
  },
  {
    name: "Echinacea",
    description: "Echinacea is commonly used for boosting the immune system.",
    benefits: "Immune support",
    origin: "North America",
    category: "Flowers",
    imageUrl: "https://example.com/echinacea.jpg",
    symptoms: "Cold, Flu",
    tags: "immune-boosting",
    usageIdeas: "Take as a tea or supplement during cold season.",
    likes: 0,
    rating: 4.6
  },
  {
    name: "Garlic",
    description: "Garlic is known for its antibacterial and antiviral properties.",
    benefits: "Antimicrobial",
    origin: "Asia",
    category: "Herbs",
    imageUrl: "https://example.com/garlic.jpg",
    symptoms: "Infections, High Cholesterol",
    tags: "antimicrobial",
    usageIdeas: "Add to food or take as a supplement.",
    likes: 0,
    rating: 4.4
  },
  {
    name: "Ginger",
    description: "Ginger is widely used for its anti-inflammatory and digestive benefits.",
    benefits: "Anti-inflammatory",
    origin: "Southeast Asia",
    category: "Roots",
    imageUrl: "https://example.com/ginger.jpg",
    symptoms: "Nausea, Digestion",
    tags: "digestive, anti-inflammatory",
    usageIdeas: "Add fresh ginger to tea or meals.",
    likes: 0,
    rating: 4.7
  },
  {
    name: "Peppermint",
    description: "Peppermint is commonly used for digestive issues and headaches.",
    benefits: "Digestive aid",
    origin: "Europe",
    category: "Herbs",
    imageUrl: "https://example.com/peppermint-herb.jpg",
    symptoms: "Headaches, Digestion",
    tags: "digestive, cooling",
    usageIdeas: "Take as a tea or use in essential oil form.",
    likes: 0,
    rating: 4.3
  },
  {
    name: "Lavender",
    description: "Lavender is used for its calming and relaxing effects.",
    benefits: "Calming",
    origin: "Europe",
    category: "Flowers",
    imageUrl: "https://example.com/lavender-herb.jpg",
    symptoms: "Stress, Insomnia",
    tags: "relaxing, calming",
    usageIdeas: "Use lavender oil in a diffuser or in a pillow sachet.",
    likes: 0,
    rating: 4.5
  },
  {
    name: "Chamomile",
    description: "Chamomile is known for its calming properties, often used for sleep.",
    benefits: "Sleep aid",
    origin: "Europe",
    category: "Flowers",
    imageUrl: "https://example.com/chamomile-herb.jpg",
    symptoms: "Insomnia, Anxiety",
    tags: "relaxing, sleep-aid",
    usageIdeas: "Brew chamomile tea before bed.",
    likes: 0,
    rating: 4.6
  },
  {
    name: "Dandelion",
    description: "Dandelion is often used for detoxification and liver support.",
    benefits: "Detoxification",
    origin: "North America",
    category: "Flowers",
    imageUrl: "https://example.com/dandelion-herb.jpg",
    symptoms: "Liver Detox, Digestive Health",
    tags: "detoxifying",
    usageIdeas: "Use the leaves in salads or as tea.",
    likes: 0,
    rating: 4.4
  },
  {
    name: "Basil",
    description: "Basil is used for its antibacterial and antioxidant properties.",
    benefits: "Antioxidant",
    origin: "Asia",
    category: "Herbs",
    imageUrl: "https://example.com/basil-herb.jpg",
    symptoms: "Digestive Issues, Stress",
    tags: "antioxidant, stress-relief",
    usageIdeas: "Add fresh basil to salads or smoothies.",
    likes: 0,
    rating: 4.2
  },
  {
    name: "St. John's Wort",
    description: "St. John's Wort is known for its mood-boosting effects.",
    benefits: "Mood enhancement",
    origin: "Europe",
    category: "Herbs",
    imageUrl: "https://example.com/stjohnswort.jpg",
    symptoms: "Depression, Anxiety",
    tags: "mood-boosting",
    usageIdeas: "Take as a supplement for mood enhancement.",
    likes: 0,
    rating: 4.7
  },
  {
    name: "Milk Thistle",
    description: "Milk Thistle is known for its liver detoxification properties.",
    benefits: "Liver detox",
    origin: "Mediterranean",
    category: "Herbs",
    imageUrl: "https://example.com/milkthistle.jpg",
    symptoms: "Liver Detox, Cholesterol",
    tags: "detoxifying",
    usageIdeas: "Take as a supplement to support liver health.",
    likes: 0,
    rating: 4.8
  },
  {
    name: "Valerian Root",
    description: "Valerian Root is often used as a natural sleep aid.",
    benefits: "Sleep aid",
    origin: "Europe",
    category: "Roots",
    imageUrl: "https://example.com/valerianroot.jpg",
    symptoms: "Insomnia, Anxiety",
    tags: "sleep-aid, relaxing",
    usageIdeas: "Take as a supplement or tea before bed.",
    likes: 0,
    rating: 4.5
  },
  {
    name: "Calendula",
    description: "Calendula is known for its skin healing and anti-inflammatory properties.",
    benefits: "Skin healing",
    origin: "Mediterranean",
    category: "Flowers",
    imageUrl: "https://example.com/calendula.jpg",
    symptoms: "Skin Irritation, Inflammation",
    tags: "skin-healing, anti-inflammatory",
    usageIdeas: "Apply as a cream or ointment to skin.",
    likes: 0,
    rating: 4.6
  }
];

const traditionalHealingData = [
  {
    technique: "Acupuncture",
    culture: "Chinese",
    healingMethod: "Needle insertion at specific meridian points",
    usageIdeas: "Used for pain management and overall wellness.",
    benefits: "Relieves chronic pain and improves energy flow.",
    description: "A traditional Chinese medical practice involving needle placement.",
    imageUrl: "https://example.com/acupuncture.jpg",
    region: "East Asia",
    tags: "needles, meridians, pain relief",
    likes: 0,
    rating: 4.6
  },
  {
    technique: "Ayurveda",
    culture: "Indian",
    healingMethod: "Balancing the body’s doshas using herbs and diet.",
    usageIdeas: "Used in daily routines and for chronic diseases.",
    benefits: "Promotes balance and longevity.",
    description: "Ancient Indian healing system focusing on body, mind, and spirit.",
    imageUrl: "https://example.com/ayurveda.jpg",
    region: "South Asia",
    tags: "dosha, herbs, wellness",
    likes: 0,
    rating: 4.8
  },
  {
    technique: "Cupping Therapy",
    culture: "Middle Eastern",
    healingMethod: "Using suction cups on the skin to stimulate blood flow.",
    usageIdeas: "Commonly used by athletes.",
    benefits: "Relieves muscle tension and improves circulation.",
    description: "Ancient therapy involving suction to draw toxins out of the body.",
    imageUrl: "https://example.com/cupping.jpg",
    region: "Middle East",
    tags: "suction, toxins, therapy",
    likes: 0,
    rating: 4.5
  },
  {
    technique: "Chakra Healing",
    culture: "Indian",
    healingMethod: "Balancing energy centers of the body.",
    usageIdeas: "Used in yoga and meditation.",
    benefits: "Improves emotional and spiritual health.",
    description: "Spiritual healing method based on chakra alignment.",
    imageUrl: "https://example.com/chakra.jpg",
    region: "India",
    tags: "chakra, energy, alignment",
    likes: 0,
    rating: 4.2
  },
  {
    technique: "Reiki",
    culture: "Japanese",
    healingMethod: "Channeling universal energy through hands.",
    usageIdeas: "Used for emotional and physical healing.",
    benefits: "Reduces stress and enhances relaxation.",
    description: "Spiritual practice where energy is transferred for healing.",
    imageUrl: "https://example.com/reiki.jpg",
    region: "Japan",
    tags: "energy, healing, relaxation",
    likes: 0,
    rating: 4.3
  },
  {
    technique: "Shamanic Healing",
    culture: "Indigenous American",
    healingMethod: "Working with spirits for healing and guidance.",
    usageIdeas: "Used for spiritual guidance and emotional healing.",
    benefits: "Provides spiritual insights and emotional balance.",
    description: "Ancient spiritual practice involving connection with nature and spirits.",
    imageUrl: "https://example.com/shamanic.jpg",
    region: "Americas",
    tags: "spirits, nature, healing",
    likes: 0,
    rating: 4.7
  },
  {
    technique: "Yoga Therapy",
    culture: "Indian",
    healingMethod: "Using yoga postures and breathing techniques for healing.",
    usageIdeas: "Used for physical and mental wellness.",
    benefits: "Improves flexibility and reduces stress.",
    description: "Therapeutic application of yoga for holistic wellness.",
    imageUrl: "https://example.com/yoga.jpg",
    region: "Asia",
    tags: "yoga, postures, healing",
    likes: 0,
    rating: 4.4
  },
  {
    technique: "Meditation",
    culture: "Various",
    healingMethod: "Focusing the mind to achieve mental clarity and relaxation.",
    usageIdeas: "Used for stress reduction and mental health.",
    benefits: "Reduces stress and improves concentration.",
    description: "Mindfulness practice to calm the mind and improve focus.",
    imageUrl: "https://example.com/meditation.jpg",
    region: "Global",
    tags: "mindfulness, relaxation, focus",
    likes: 0,
    rating: 4.9
  },
  {
    technique: "Herbal Medicine",
    culture: "Global",
    healingMethod: "Using plants for medicinal purposes.",
    usageIdeas: "Used for treating various ailments.",
    benefits: "Natural treatment for various health issues.",
    description: "Traditional use of plants for healing.",
    imageUrl: "https://example.com/herbalmedicine.jpg",
    region: "Global",
    tags: "plants, natural, healing",
    likes: 0,
    rating: 4.5
  },
  {
    technique: "Traditional Chinese Medicine (TCM)",
    culture: "Chinese",
    healingMethod: "Balancing yin and yang through herbs and acupuncture.",
    usageIdeas: "Used for various health conditions.",
    benefits: "Balances energy and treats illnesses.",
    description: "Ancient Chinese system of medicine.",
    imageUrl: "https://example.com/tcm.jpg",
    region: "East Asia",
    tags: "yin yang, herbs, acupuncture",
    likes: 0,
    rating: 4.6
  },
  {
    technique: "Naturopathy",
    culture: "European/American",
    healingMethod: "Using natural remedies to support the body's self-healing.",
    usageIdeas: "Used for promoting overall wellness.",
    benefits: "Supports the body's natural healing processes.",
    description: "Holistic approach to health and wellness.",
    imageUrl: "https://example.com/naturopathy.jpg",
    region: "Europe",
    tags: "natural, remedies, wellness",
    likes: 0,
    rating: 4.3
  },
  {
    technique: "Chiropractic",
    culture: "American",
    healingMethod: "Adjusting the spine to improve nervous system function.",
    usageIdeas: "Used for back pain and other musculoskeletal issues.",
    benefits: "Improves spinal health and reduces pain.",
    description: "Healthcare profession focused on musculoskeletal disorders.",
    imageUrl: "https://example.com/chiropractic.jpg",
    region: "North America",
    tags: "spine, adjustment, pain relief",
    likes: 0,
    rating: 4.4
  },
  {
    technique: "Osteopathy",
    culture: "American",
    healingMethod: "Manual therapy to improve body structure and function.",
    usageIdeas: "Used for a wide range of health issues.",
    benefits: "Improves overall body function.",
    description: "Holistic approach to healthcare with focus on musculoskeletal system.",
    imageUrl: "https://example.com/osteopathy.jpg",
    region: "North America",
    tags: "manual therapy, holistic, musculoskeletal",
    likes: 0,
    rating: 4.7
  },
  {
    technique: "Homeopathy",
    culture: "European",
    healingMethod: "Using diluted substances to stimulate the body’s healing response.",
    usageIdeas: "Used for treating chronic conditions.",
    benefits: "Stimulates body’s self-healing abilities.",
    description: "Alternative medicine system using highly diluted substances.",
    imageUrl: "https://example.com/homeopathy.jpg",
    region: "Europe",
    tags: "dilution, healing, alternative",
    likes: 0,
    rating: 4.2
  },
  {
    technique: "Hypnotherapy",
    culture: "Global",
    healingMethod: "Using hypnosis to address psychological and emotional issues.",
    usageIdeas: "Used for anxiety, phobias, and stress.",
    benefits: "Helps in addressing psychological issues and phobias.",
    description: "Therapeutic use of hypnosis for mental and emotional healing.",
    imageUrl: "https://example.com/hypnotherapy.jpg",
    region: "Global",
    tags: "hypnosis, therapy, mental health",
    likes: 0,
    rating: 4.8
  }
];

async function main() {
  try {
    await prisma.aromatherapy.createMany({
      data: aromatherapyData,
      skipDuplicates: true, // Skip 'name' conflicts
    });

    await prisma.herbalmedicine.createMany({
      data: herbalMedicineData,
      skipDuplicates: true, // Skip 'name' conflicts
    });

    await prisma.traditionalhealing.createMany({
      data: traditionalHealingData,
      skipDuplicates: true, // Skip 'technique' conflicts
    });

    console.log('Successfully seeded all data!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
