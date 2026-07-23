// Menu Garden Bake's — source: "Menu Garden Bakes corrigé" (juillet 2026).
// Prices in MAD (DH). `note` renders as a small qualifier next to the item name.

export type MenuItem = {
  name: string;
  price: string;
  note?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  icon: "croissant" | "bread" | "sandwich" | "breakfast" | "juice" | "coffee" | "drink" | "waffle" | "quiche" | "pastry" | "icecream";
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    id: "viennoiseries",
    title: "Viennoiseries",
    icon: "croissant",
    items: [
      { name: "Mini pain au chocolat", price: "5" },
      { name: "Mini croissant pur beurre", price: "5" },
      { name: "Mini pain aux raisins", price: "5" },
      { name: "Mini croissant aux amandes", price: "6" },
      { name: "Croissant pur beurre", price: "8" },
      { name: "Croissant plat", price: "8" },
      { name: "Pain suisse", price: "8" },
      { name: "Brioche au sucre", price: "8" },
      { name: "Pain aux raisins", price: "8" },
      { name: "Pain au chocolat", price: "8,5" },
      { name: "Danish", price: "9" },
      { name: "Croissant bicolore Nutella", price: "10" },
      { name: "Croissant bicolore Framboise", price: "10" },
      { name: "Croissant bicolore Pistache", price: "10" },
      { name: "Croissant aux amandes", price: "10" },
      { name: "Croissant salé fromage", price: "10" },
      { name: "Croissant salé céréales", price: "10" },
      { name: "Brioche tressée", price: "11" },
      { name: "Chausson aux pommes", price: "12" },
      { name: "NY Roll", price: "15" },
      { name: "Brioche feuilletée", price: "20" },
      { name: "Madeleines", note: "Praliné Noisette / Framboise / Citron", price: "10" },
    ],
  },
  {
    id: "pains",
    title: "Pains & Baguettes",
    icon: "bread",
    items: [
      { name: "Pain pistolet", note: "sur commande", price: "1,5" },
      { name: "Pain semoule", price: "2,5" },
      { name: "Pain complet", price: "3" },
      { name: "Pain d'orge", price: "3" },
      { name: "Benoît fromage", price: "3" },
      { name: "Benoît olives", price: "3" },
      { name: "Ciabatta", price: "4" },
      { name: "Baguette tradition", price: "7" },
      { name: "Baguette pavot", price: "7" },
      { name: "Baguette olives", price: "8" },
      { name: "Baguette sésame", price: "8" },
      { name: "Pain de campagne", note: "sur commande", price: "16" },
      { name: "Tourte aux seigles", note: "sur commande", price: "20" },
    ],
  },
  {
    id: "pain-sandwich",
    title: "Pain Sandwich",
    icon: "sandwich",
    items: [
      { name: "Céréales", price: "2,5" },
      { name: "Nature / Pavot / Sésame / Olives", price: "4" },
      { name: "Fromage", price: "6" },
    ],
  },
  {
    id: "petit-dejeuner",
    title: "Petit Déjeuner",
    icon: "breakfast",
    items: [
      { name: "L'Express Bake's", price: "34" },
      { name: "Le Garden Bakes", price: "34" },
      { name: "Classique", price: "36" },
      { name: "Gourmet", price: "36" },
      { name: "Pause Choco", price: "36" },
      { name: "Pause Dorée", price: "36" },
      { name: "Pause Sucrée", price: "36" },
    ],
  },
  {
    id: "quiches",
    title: "Quiches",
    icon: "quiche",
    items: [
      { name: "Quiche Lorraine", price: "26" },
      { name: "Quiche charcuterie", price: "26" },
      { name: "Quiche poulet", price: "28" },
      { name: "Quiche saumon", price: "30" },
    ],
  },
  {
    id: "patisseries",
    title: "Pâtisseries",
    icon: "pastry",
    items: [
      { name: "Éclair", price: "20" },
      { name: "Cookie pistache", price: "20" },
      { name: "Cookie caramel", price: "20" },
      { name: "Brownie", price: "22" },
      { name: "Sandwich froid", price: "25" },
      { name: "Tarte Tatin", price: "30" },
      { name: "Tarte Citron", price: "30" },
      { name: "Tarte Framboise", price: "30" },
      { name: "Gâteau praliné noisette", price: "32" },
      { name: "Fraisier", price: "35" },
      { name: "Cake vanille", price: "35" },
      { name: "Forêt Noire", price: "35" },
    ],
  },
  {
    id: "crepes-gaufres",
    title: "Crêpes & Gaufres sucrées",
    icon: "waffle",
    items: [
      { name: "Gaufre nature", price: "22" },
      { name: "Gaufre Lotus", price: "28" },
      { name: "Gaufre Nutella", price: "28" },
      { name: "Crêpe nature", price: "30" },
      { name: "Crêpe Nutella", price: "35" },
      { name: "Gaufre Banana Split", price: "35" },
      { name: "Crêpe Banana Split", price: "40" },
      { name: "Crêpe + Milk Shake", price: "60" },
      { name: "Gaufre + Milk Shake", price: "60" },
    ],
  },
  {
    id: "glaces",
    title: "Glaces & Gourmandises",
    icon: "icecream",
    items: [
      { name: "1 boule", price: "20" },
      { name: "2 boules", price: "35" },
      { name: "3 boules", price: "45" },
      { name: "Milk Shake", price: "40" },
      { name: "Bubble Stick", note: "Nutella / Pistache / Vanille", price: "40" },
      { name: "Bubble Stick + Milk Shake", price: "70" },
    ],
  },
  {
    id: "jus-frais",
    title: "Jus Frais",
    icon: "juice",
    items: [
      { name: "Orange Garden", price: "25" },
      { name: "Garden Morning", price: "35" },
      { name: "Garden Mojito", price: "35" },
      { name: "Garden Beet", price: "35" },
      { name: "Garden Line", price: "35" },
      { name: "Red Garden", price: "35" },
    ],
  },
  {
    id: "cafes",
    title: "Cafés",
    icon: "coffee",
    items: [
      { name: "Espresso", price: "24" },
      { name: "Café au lait", price: "25" },
      { name: "Double espresso", price: "26" },
      { name: "Café allongé", price: "26" },
      { name: "Cappuccino", price: "30" },
      { name: "Chocolat chaud", price: "30" },
    ],
  },
  {
    id: "boissons",
    title: "Boissons",
    icon: "drink",
    items: [
      { name: "Ciel", price: "12" },
      { name: "Sidi Ali 50 cl", price: "15" },
      { name: "Sodas", note: "hors Orangina", price: "18" },
      { name: "Orangina", price: "20" },
    ],
  },
];
