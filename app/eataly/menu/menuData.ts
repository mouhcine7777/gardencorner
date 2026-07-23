// Carte Garden Eataly — source: "Menu_Garden_Eataly_.docx" (juillet 2026).
// Prices in MAD (DH). Product names are kept verbatim from the source; only the
// casing is normalised (the source mixes ALL CAPS pizzas with Title Case dolci).
// `note` renders as a small qualifier; a "+" price renders as a supplement.

export type MenuItem = {
  name: string;
  price: string;
  note?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  icon: "starter" | "pizza" | "pasta" | "dolci" | "coffee" | "capsule" | "chocolate" | "juice" | "soda";
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    id: "entrees",
    title: "Entrées",
    icon: "starter",
    items: [
      { name: "Caprese", price: "65" },
      { name: "Cesar", price: "75" },
      { name: "Parmigiani d'Aubergines", price: "85" },
      { name: "Focaccia Burpata", price: "120" },
    ],
  },
  {
    id: "pizzas",
    title: "Pizzas",
    icon: "pizza",
    items: [
      { name: "Pizza Marinara", price: "55" },
      { name: "Margherita Verace", price: "70" },
      { name: "Napoli", note: "anchois", price: "75" },
      { name: "Pesto S Burrata", price: "80" },
      { name: "Poulet Alfredo à la Truf", price: "80" },
      { name: "Tonno", price: "80" },
      { name: "Veggie", price: "80" },
      { name: "Bolognese", price: "85" },
      { name: "Pepperoni", price: "85" },
      { name: "4 Formaggi Rossa", price: "95" },
      { name: "Frutti di Mare", price: "95" },
      { name: "Mafiosa", price: "100" },
    ],
  },
  {
    id: "pates",
    title: "Pâtes",
    icon: "pasta",
    items: [
      { name: "Penne Pomodoro", price: "65" },
      { name: "Lasagna Bolognese", price: "80" },
      { name: "Penne 4 Formaggi", price: "85" },
    ],
  },
  {
    id: "dolci",
    title: "Dolci / Desserts",
    icon: "dolci",
    items: [
      { name: "Calzone Nutella", price: "60" },
      { name: "Tiramisu Original", price: "60" },
      { name: "Tiramisu al Pistacchio", price: "60" },
      { name: "Panna Cotta aux Fruits Rouges", price: "60" },
      { name: "Cheesecake San Sebastián", price: "60" },
    ],
  },
  {
    id: "cafes",
    title: "Instant Cafés",
    icon: "coffee",
    items: [
      { name: "Espresso", price: "24" },
      { name: "Espresso macchiato", price: "26" },
      { name: "Americano", price: "28" },
      { name: "Café latte", price: "28" },
      { name: "Double espresso", price: "30" },
      { name: "Cappuccino", price: "30" },
    ],
  },
  {
    id: "nespresso",
    title: "Les Cafés Nespresso",
    icon: "capsule",
    items: [
      { name: "Brazil 100 % Arabica", price: "28" },
      { name: "Guatemala", note: "mélange Arabica & Robusta", price: "28" },
      { name: "Ristretto", price: "28" },
      { name: "Decaffeinato", price: "32" },
    ],
  },
  {
    id: "chocolat",
    title: "Chocolat Chaud",
    icon: "chocolate",
    items: [
      { name: "Chocolat chaud classique", price: "32" },
      { name: "Chocolat viennois", price: "38" },
      { name: "Supplément lait végétal", note: "amande, coco ou avoine", price: "+12" },
    ],
  },
  {
    id: "jus",
    title: "Jus de Fruits 33 cl",
    icon: "juice",
    items: [
      { name: "Orange Garden", price: "34" },
      { name: "Garden Morning", price: "34" },
      { name: "Garden Mojito", price: "36" },
      { name: "Garden Beet", price: "36" },
      { name: "Garden Line", price: "36" },
      { name: "Garden Red", price: "36" },
    ],
  },
  {
    id: "boissons",
    title: "Boissons Gazeuses & Eaux",
    icon: "soda",
    items: [
      { name: "Eau minérale 50 cl", price: "18" },
      { name: "Oulmès 25 cl", price: "25" },
      { name: "Coca-Cola • Coca Zero • Sprite • Schweppes Tonic • Schweppes Citron • Hawaii", price: "25" },
      { name: "Orangina", price: "28" },
      { name: "Eau minérale 75 cl", price: "35" },
      { name: "Oulmès 75 cl", price: "38" },
      { name: "Red Bull", price: "40" },
    ],
  },
];
