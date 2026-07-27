export const products = [
  {
    id: 1,
    name: "Mullite Precision Casting Sand",
    category: "Precision Casting",
    subCategory: "Foundry Sand",
    description: "Premium mullite sand specifically engineered for high-precision investment casting. Features high alumina and ultra-low iron content for superior thermochemical stability. Optimized for shell making, providing high-temperature strength, excellent collapsibility, and smooth casting surfaces.",
    image: "/assets/images/mullite-sand.png",
    specs: {
      al2o3: "46.27%",
      fe2o3: "0.65%",
      refractoriness: "1790°C",
      bulk_density: "2.50g/cm³",
      thermal_expansion: "6.81-7.94×10⁻⁶/℃",
      mesh_sizes: ["16-30 mesh", "30-60 mesh"]
    },
    features: [
      "Proprietary Dynamic Calcination",
      "Low Thermal Expansion",
      "High Shell Strength",
      "Excellent Collapsibility",
      "Superior Surface Finish"
    ],
    applications: ["Stainless Steel Investment Casting", "Carbon Steel Precision Casting", "Aerospace Alloy Foundry"]
  },
  {
    id: 2,
    name: "Mullite Precision Casting Powder",
    category: "Precision Casting",
    subCategory: "Foundry Powder",
    description: "Ultra-fine mullite powder optimized for silica sol binder systems. Designed to create dense ceramic shells for complex precision cast components with minimal deformation and shrinkage.",
    image: "/assets/images/mullite-powder.png",
    specs: {
      al2o3: "46.27%",
      fe2o3: "0.65%",
      refractoriness: "1790°C",
      whiteness: "≥60",
      mesh_sizes: ["200 mesh", "270 mesh", "325 mesh"]
    },
    features: [
      "Optimized PSD (Particle Size Distribution)",
      "High Binder Compatibility",
      "Stable Mineral Phase",
      "Reduced Casting Defects",
      "ISO Certified Quality"
    ],
    applications: ["Silica Sol Investment Casting", "Refractory Coatings", "Industrial Ceramic Slurries"]
  },
  {
    id: 3,
    name: "Calcined Flint Clay (Refractory Mullite)",
    category: "Refractory Materials",
    subCategory: "Lumps & Granules",
    description: "High-alumina calcined flint clay (Jiaoshan Stone) with extreme thermal stability. Sourced from premium coal-series kaolin and processed via dynamic rotary kilns. The essential foundation for high-performance refractory bricks and linings.",
    image: "/assets/images/refractory-mullite-ore.png",
    specs: {
      al2o3: "48.89%",
      fe2o3: "0.69%",
      refractoriness: "1790°C",
      bulk_density: "2.54g/cm³",
      porosity: "4.50%",
      water_absorption: "1.80%",
      sizes: ["0-1mm", "1-3mm", "3-5mm"]
    },
    features: [
      "High Chemical Purity",
      "Low Porosity & Absorption",
      "Excellent Spalling Resistance",
      "Stable Crystalline Structure",
      "High Load Softening Temp"
    ],
    applications: ["High-Temp Kiln Furniture", "Refractory Brick Manufacturing", "Metallurgical Furnace Linings"]
  },
  {
    id: 4,
    name: "Fine Calcined Kaolin Powder",
    category: "Functional Fillers",
    subCategory: "Powder",
    description: "Specialized functional filler with high whiteness and chemical inertness. Sourced from high-crystallinity kaolinite deposits. Widely used to enhance opacity, reinforcement, and durability in various industrial sectors.",
    image: "/assets/images/kaolin-product.png",
    specs: {
      al2o3: "48.89%",
      fe2o3: "0.69%",
      whiteness: "≥60",
      kaolinite_purity: ">95%",
      mesh_sizes: ["200 mesh", "325 mesh", "800 mesh"]
    },
    features: [
      "High Brightness & Opacity",
      "Good Reinforcement Properties",
      "Excellent Dispersion",
      "Chemically Inert",
      "Controlled Particle Size"
    ],
    applications: ["Paper Coating", "Paint & Coatings", "Rubber & Plastics", "Ceramic Glazes"]
  },
  {
    id: 5,
    name: "Raw Coal-Series Kaolin Ore",
    category: "Raw Materials",
    subCategory: "Raw Ore",
    description: "Premium raw coal-series kaolin ore with stable mineral composition. Features high crystallinity and close-to-theoretical SiO₂/Al₂O₃ molar ratios. Serves as the high-quality feedstock for deep calcination processes.",
    image: "/assets/images/hero-industrial.png",
    specs: {
      kaolinite: ">95%",
      molar_ratio: "~2.0",
      crystallinity: "High",
      source: "Sedimentary Coal-Series Deposits"
    },
    features: [
      "Stable Ore Body",
      "Low Impurity Content",
      "Ideal Feedstock Ratio",
      "High Natural Purity",
      "Consistent Chemical Profile"
    ],
    applications: ["Calcination Feedstock", "Chemical Processing", "Ceramic Base Materials"]
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "precision casting", name: "Precision Casting" },
  { id: "refractory materials", name: "Refractory Materials" },
  { id: "functional fillers", name: "Functional Fillers" },
  { id: "raw materials", name: "Raw Materials" }
];
