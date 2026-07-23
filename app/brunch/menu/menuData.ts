// Carte Garden Brunch — sources: "Garden_Brunch_Menu_Juillet 26.docx" (menu corrigé,
// juillet 2026) + the "Cocktail fraîchement pressé" section supplied separately.
// Prices in MAD (DH). Names and descriptions are kept verbatim from the source.

export type MenuItem = {
  name: string;
  price?: string;
  description?: string;
  note?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  icon:
    | "juice" | "smoothie" | "mojito" | "icedtea" | "frappe" | "teapot" | "latte" | "coffee"
    | "salad" | "burger" | "plate" | "tray" | "egg" | "croissant" | "dessert" | "cake"
    | "pancake" | "toast" | "madeleine" | "soda";
  /** Service hours or similar qualifier shown under the section title. */
  note?: string;
  items: MenuItem[];
  /** Supplements / garnishes listed at the foot of the section. */
  footnote?: string;
};

export const menuSections: MenuSection[] = [
  // ── Boissons fraîches ──────────────────────────────────────────────────────
  {
    id: "fraichement-presse",
    title: "Fraîchement pressé",
    icon: "juice",
    items: [
      { name: "Jus d'orange", price: "34" },
      { name: "Jus citron & menthe", price: "36" },
      { name: "Jus d'orange & carotte", price: "36" },
      { name: "Jus citron & gingembre", price: "38" },
    ],
  },
  {
    id: "cocktail-presse",
    title: "Cocktail fraîchement pressé",
    icon: "juice",
    items: [
      { name: "Green Detox", price: "48", description: "Pomme, ananas, concombre, gingembre et menthe." },
      { name: "Immuno", price: "48", description: "Carotte, orange, gingembre et curcuma." },
      { name: "Banana Strawberry", price: "48", description: "Banane, fraise, jus de citron et eau de coco." },
      { name: "Tropical", price: "48", description: "Mangue, ananas et orange." },
      { name: "Garden Beet", price: "48", description: "Betterave, pomme, citron, carotte et orange." },
      { name: "Garden'Line", price: "48", description: "Pomme, ananas, kale, concombre, citron, persil, céleri, curucuma et orange." },
      { name: "Garden Morning", price: "53", description: "Ananas, poire, orange et gingembre." },
      { name: "Garden Mojito", price: "53", description: "Citron vert, gingembre, ananas et fruits de la passion." },
      { name: "Red Garden", price: "53", description: "Fraise, orange et framboise." },
      { name: "Matcha", price: "63", description: "Matcha, sirop d'ananas et jus d'ananas." },
    ],
  },
  {
    id: "smoothies",
    title: "Smoothies",
    icon: "smoothie",
    items: [
      { name: "Berry Dream", price: "60", description: "Lait d'amande, açai, banane et framboise." },
      { name: "Green Lagon", price: "60", description: "Pomme, kiwi, broccoli, épinard et miel." },
      { name: "Viking", price: "60", description: "Betterave, banane et fraise." },
      { name: "Passion coconut", price: "63", description: "Lait de coco, fruit de la passion, banane et sirop d'érable." },
      { name: "Energy Boost Shake", price: "63", description: "Lait, amandes, noix, dattes et fruits secs." },
      { name: "Mango Purple", price: "63", description: "Mangue, fraise et banane." },
    ],
  },
  {
    id: "virgin-mojitos",
    title: "Virgin Mojitos",
    icon: "mojito",
    items: [
      { name: "Classic", price: "45" },
      { name: "Curaçao", price: "45" },
      { name: "Pêche", price: "45" },
      { name: "Berry Bush", price: "45" },
      { name: "Caribbean", price: "45" },
    ],
  },
  {
    id: "thes-glaces",
    title: "Thés glacés",
    icon: "icedtea",
    items: [
      { name: "Pêche blanche", price: "45", description: "Pêche blanche & romarin." },
      { name: "Marrakech", price: "45", description: "Thé noir infusé à froid, thym, romarin, menthe & zeste de citron." },
      { name: "Fruits des bois", price: "45", description: "Framboise & litchi." },
      { name: "Summer Sunrise", price: "45", description: "Infusion de citron à l'eau pétillante, orange fraîche & gingembre." },
      { name: "Sunset Spritz", price: "45", description: "Infusion de graines de grenade, gingembre, kiwi & jus de citron." },
      { name: "Exotique", price: "45", description: "Mangue & passion." },
      { name: "Wood", price: "45", description: "Framboise, myrtille & mûre." },
    ],
  },
  {
    id: "frappuccinos",
    title: "Frappuccinos & Cafés glacés",
    icon: "frappe",
    items: [
      { name: "Café frappé", price: "45" },
      { name: "Chocolat", price: "45", description: "Boisson glacée au chocolat, surmontée d'une crème fouettée onctueuse." },
      { name: "Chocolat blanc", price: "45", description: "Mélange de chocolat blanc, café & lait frappés, sublimé par une crème fouettée." },
      { name: "Caramel", price: "45", description: "Café & lait frappés, crème fouettée & coulis de caramel." },
      { name: "Vanille", price: "45", description: "Frappuccino vanille, crème fouettée & sirop de vanille." },
      { name: "Noisette", price: "45", description: "Café, lait froid, glace pilée, crème fouettée & noisettes torréfiées." },
    ],
  },

  // ── Boissons chaudes ───────────────────────────────────────────────────────
  {
    id: "thes-infusions",
    title: "Thés & infusions",
    icon: "teapot",
    note: "Thés Comptoirs Richard — authenticité et raffinement à chaque tasse.",
    items: [
      { name: "Thé à la menthe", price: "24" },
      { name: "Thé noir", price: "55", description: "Grand Earl Grey, Fruits rouges, Ceylan O.P, Vanille caramel, Breakfast B.O.P Bio." },
      { name: "Tisane", price: "55", description: "Camomille, Verveine, Rooibos aux épices, Secret de femme bio digestive, Bio relaxante, Rêves Enfantins bio fleurs d'hibiscus." },
      { name: "Thé vert", price: "55", description: "Jardin des merveilles, Thé vert à la menthe bio, Thé vert au jasmin." },
      { name: "Thé blanc rose litchi", price: "55" },
    ],
  },
  {
    id: "specialites-lattees",
    title: "Spécialités lattées",
    icon: "latte",
    items: [
      { name: "Caramel Latte", price: "45" },
      { name: "Vanilla Latte", price: "45" },
      { name: "Peanut Butter Latte", price: "45" },
      { name: "Chocolat chaud classique", price: "45" },
    ],
  },
  {
    id: "cafes",
    title: "Cafés",
    icon: "coffee",
    items: [
      { name: "Espresso", price: "26" },
      { name: "Espresso macchiato", price: "28" },
      { name: "Americano", price: "28" },
      { name: "Café latte", price: "28" },
      { name: "Nespresso", price: "28" },
      { name: "Cappuccino", price: "30" },
      { name: "Double espresso", price: "34" },
      { name: "Mocaccino", price: "34" },
      { name: "Affogato", price: "38", description: "Glace vanille & espresso." },
      { name: "Vegan latte", price: "45" },
    ],
    footnote: "Lait végétal (lait d'amande, lait de coco, lait d'avoine) : supplément 12 DH.",
  },

  // ── Salé ───────────────────────────────────────────────────────────────────
  {
    id: "starters",
    title: "Starters",
    icon: "salad",
    items: [
      { name: "Quinoa", price: "80", description: "Fraîcheur de légumes croquants et marmelade de mangue à la coriandre." },
      { name: "Greek Croissant", price: "85", description: "Feta, tomates, concombres, oignons, olives et mesclun de salade, sauce au zaâtar." },
      { name: "Méditerranéen Garden", price: "90", description: "Salade de légumes grillés à la ricotta, pesto de basilic aux noix et crème balsamique." },
      { name: "Aubergine Garden Brunch", price: "90", description: "Aubergine rôtie, caviar au yaourt, feta, tomates confites et concassé de pistache." },
      { name: "Trio de salades", price: "95", description: "Caviar d'aubergine à la grenade, houmous, tomate relevée au thon, servi avec de fines tranches de pain grillé." },
      { name: "Garden Mozza", price: "95", description: "Mozzarella fondante, méli-mélo de tomates et fruits rouges, relevés d'un pesto maison et d'une réduction balsamique." },
      { name: "Chicken Granny Smith", price: "100", description: "Poulet parfumé d'épices, sésame, vinaigrette au lait de coco et citron vert. Accompagné de rémoulade de céleri rave et pomme verte." },
      { name: "César & Houmous", price: "115", description: "Houmous, poulet, croûtons, anchois, tomates confites, parmesan, pois chiches et huile d'olive pimentée." },
    ],
  },
  {
    id: "comfort-foods",
    title: "Comfort Foods",
    icon: "burger",
    items: [
      { name: "Berry-avocado", price: "70", description: "Tartine multigrain au guacamole, garnie de deux œufs pochés sauce hollandaise maison et sauce chimichurri, servie avec mesclun de salade verte." },
      { name: "Greek croissant", price: "85", description: "Feta, tomates, concombres, oignons, olives et mesclun de salade, sauce au zaatar." },
      { name: "Chicken burger", price: "100", description: "Guacamole, sauce à la chipotle fumée, ananas grillé, cheddar fondu avec coleslaw." },
      { name: "Steak de viande hachée", price: "105", description: "Pesto de tomates séchées et basilic, oignons crispy et fondue de cheddar." },
      { name: "Lamb Burger", price: "115", description: "Mayonnaise à la moutarde ancienne et aneth, pipérade de poivrons grillés. Accompagné d'une fondue de Manchego." },
      { name: "Fish Burger", price: "120", description: "Sauce tartare relevée au sambal oelek, accompagné de chips fines de pommes pailles croustillantes." },
      { name: "Bagel au saumon fumé", price: "120", description: "Fromage blanc, avocat, fromage blanc acidulé au zeste de citron, roquette et chips d'oignons." },
    ],
  },
  {
    id: "plats",
    title: "Plats",
    icon: "plate",
    items: [
      { name: "Vol-au-vent aux herbes de Provence", price: "125", description: "Poulet mijoté aux champignons dans une sauce crémeuse à la moutarde à l'ancienne, agrémenté de pousses de poireau fraîches, riz noir, servi dans une mini casserole." },
      { name: "Poulet piccata", price: "160", description: "Poulet croustillant au parmesan, accompagné de tomates confites et fondue de mozzarella. Servi avec une salade de roquette et un velouté au citron." },
      { name: "Tanjia de bœuf façon Garden", price: "220", description: "Agneau de tajine aux légumes dans une demi jarre. Pâte feuilletée en croûte et cassolette d'haricots blancs." },
      { name: "Ribs de bœuf", price: "220", description: "Braisé à la fleur de romarin. Purée fine de pommes de terre, cocotte de légumes de saison et jus de bœuf parfumé à la truffe." },
      { name: "Pavé de saumon grillé à l'unilatérale", price: "220", description: "Ratatouille maison, tapenade d'olives noires aux amandes torréfiées, pistou, persil aux anchois et câpres." },
      { name: "Filet de bœuf poêlé", price: "260", description: "Beurre à la moutarde et poivre vert. Purée de pomme de terre à l'ail confit. Compote d'oignons et sauce chimichurri." },
    ],
    footnote: "Garnitures — Frites maison : 20 DH · Purée de pomme de terre : 20 DH · Timbale de riz noir : 25 DH · Poêlé de légumes : 20 DH.",
  },

  // ── Brunchs & petit déjeuner ───────────────────────────────────────────────
  {
    id: "les-brunchs",
    title: "Les Brunchs",
    icon: "tray",
    note: "Servi du lundi au vendredi de 08h00 à 13h00. Weekends et jours fériés de 08h00 à 14h00.",
    items: [
      { name: "Just Brunch", price: "120", description: "Boisson chaude au choix, jus d'orange pressé, œufs brouillés à la truffe ou nature. Sélection de mini pistoles, panna cotta au lait de coco accompagnée de fruits tropicaux." },
      { name: "Green Brunch", price: "130", description: "Boisson chaude au choix, jus d'orange pressé, œufs pochés mollets sur un croissant pressé, accompagnés de légumes grillés, de pommes salées nappées de sauce cheddar fondu, bol de granola au yaourt et fruits rouges." },
      { name: "Beni AVO Brunch", price: "140", description: "Boisson chaude au choix, jus d'orange pressé, tartine multigrain au guacamole, surmontée de deux œufs pochés, nappés de sauce hollandaise maison et sauce chimichurri, accompagnée d'un mesclun de salade verte, sélection de mini viennoiseries. Panna cotta au lait de coco et fruits tropicaux." },
      { name: "Beldi Brunch", price: "140", description: "Boisson chaude au choix, jus d'orange pressé, mini chakchouka au khaliaa gratinée au fromage, sélection de mini harcha, msemen. Tablina au miel et fruits secs." },
      { name: "Veggie Brunch", price: "150", description: "Toast de pain tomate, légumes de saison grillés, ricotta crémeuse, pignons de pin, pesto basilic, fruits frais en tranches et granola croustillant au yaourt aux fruits rouges." },
      { name: "Scandinavian Brunch", price: "160", description: "Boisson chaude au choix, jus d'orange pressé, bagel au saumon fumé, avocat et fromage acidulé à l'aneth, œufs pochés. Brioche suédoise à la cannelle, mousse au chocolat au gingembre confit, crème fouettée et fruits rouges." },
    ],
  },
  {
    id: "egg-ceptionnel",
    title: "Egg'ceptionnel",
    icon: "egg",
    items: [
      { name: "Omelette Nature", price: "35", description: "Œuf nature en omelette ou brouillé servi avec des potatoes salées." },
      { name: "Omelette veggie", price: "55", description: "Champignons sautés, poivrons rouges et verts, épinards, courgettes et oignons caramélisés, servi avec des potatoes salées." },
      { name: "Egg croissant", price: "60", description: "Œufs pochés sur un croissant pressé, jambon, oignons et tomates confites, potatoes salées, sauce au fromage cheddar fondu." },
      { name: "Chakhchouka & khaliaa", price: "75", description: "Chakhchouka au khaliaa gratinée au fromage dans une poêle en fonte." },
      { name: "Mkila de kefta", price: "85", description: "Kefta, sauce tomate à la fleur d'ail aux œufs pochés, gratinée au fromage et éclats de coriandre." },
      { name: "Croissant au bacon et brie fondue", price: "90", description: "Croissant pressé garni de tomate confite, oignons caramélisés, œufs pochés et fondue de brie aux noix." },
      { name: "Bagel saumon benedict", price: "105", description: "Bagel garni de saumon fumé, avocat, fromage blanc acidulé au zeste de citron et à l'aneth, sauce hollandaise maison agrémentée de câpres frits, accompagné de chips d'oignons croustillants." },
    ],
    footnote: "Supplément — Frites maison : 20 DH · Purée de pomme de terre : 20 DH.",
  },
  {
    id: "petit-dejeuner",
    title: "Petit déjeuner sur le pouce",
    icon: "croissant",
    note: "Servi du lundi au vendredi, hors weekends et jours fériés, de 08h00 à 11h00.",
    items: [
      { name: "Le Pressé Gourmand", price: "43", description: "Jus d'orange, boisson chaude, viennoiserie au choix." },
      { name: "Le Réveil Salé", price: "55", description: "Jus d'orange, boisson chaude, omelette, pain pistolet." },
      { name: "Le Boost Matinal", price: "65", description: "Jus d'orange, boisson chaude, viennoiserie, granola ou panna cotta." },
    ],
  },

  // ── Sucré ──────────────────────────────────────────────────────────────────
  {
    id: "desserts",
    title: "Desserts",
    icon: "dessert",
    items: [
      { name: "Crème brûlée", price: "50", description: "Fleur d'oranger. Vanille. Thé vert et saveurs d'orient." },
      { name: "Tarte", price: "50", description: "Tatin et glace vanille. Citron, coulis de fruits rouges et sorbet citron. Gelée de fruits rouges et crème vanille." },
      { name: "Brownie", price: "50", description: "Brownie à la noix de pécan + boule de glace vanille." },
      { name: "Assiettes de fruits frais", price: "80", description: "Fruits de saison et sorbet à la mandarine." },
      { name: "Glace — 2 boules", price: "35" },
      { name: "Glace — 3 boules", price: "45" },
    ],
  },
  {
    id: "gateaux",
    title: "Gâteaux à la part",
    icon: "cake",
    items: [
      { name: "Cheesecake aux fruits rouges", price: "60" },
      { name: "Cipriani à la crème de citron et yuzu", price: "60" },
      { name: "Carotte cake aux noix", price: "60" },
      { name: "Red velvet cake", price: "60" },
      { name: "Tiramisu à la badiane et croustillant de noisette", price: "60" },
      { name: "Forêt noire", price: "60" },
    ],
  },
  {
    id: "gateau-entier",
    title: "Gâteau entier à emporter",
    icon: "cake",
    note: "Sur commande.",
    items: [
      { name: "4 pax", price: "280" },
      { name: "8 pax", price: "420" },
    ],
  },
  {
    id: "pancakes",
    title: "Pancakes",
    icon: "pancake",
    items: [
      { name: "Pancake aux trois chocolats et fruits rouges", price: "60" },
      { name: "Pancake crème vanille et fruits rouges", price: "60" },
      { name: "Pancake à la framboise et crème catalane au coulis de pistache", price: "60" },
      { name: "Pancake garni de compote de pommes à la cannelle, glace vanille et filet de sauce chocolat", price: "60" },
    ],
  },
  {
    id: "pain-perdu",
    title: "Pain perdu",
    icon: "toast",
    items: [
      { name: "Pain perdu aux trois chocolats et fruits rouges", price: "70" },
      { name: "Pain perdu au caramel beurre salé, banane et éclats d'amandes", price: "70" },
      { name: "Pain perdu fondant au chocolat, éclats de pistache, accompagné de glace vanille", price: "70" },
      { name: "Pain perdu nappé de caramel, garni de fruits secs croquants, poire caramélisée et glace vanille", price: "80" },
    ],
    footnote: "Supplément — Boule de glace : 15 DH.",
  },
  {
    id: "cake-madeleine",
    title: "Cake et madeleine",
    icon: "madeleine",
    items: [
      { name: "Madeleine citron", price: "15" },
      { name: "Madeleine chocolat", price: "15" },
      { name: "Madeleine framboise", price: "15" },
      { name: "Cake chocolat à la crème de citron", price: "30" },
      { name: "Cake chocolat blanc à la framboise", price: "30" },
      { name: "Cake trois chocolats à la praline de noisettes", price: "30" },
    ],
  },

  // ── Eaux & sodas ───────────────────────────────────────────────────────────
  {
    id: "eaux-soda",
    title: "Eaux et Soda",
    icon: "soda",
    items: [
      { name: "Eau minérale 50 cl", price: "20" },
      { name: "Oulmès 25 cl", price: "20" },
      { name: "Hawaii, Schweppes tonic, Schweppes citron, Sprite, Coca-Cola, Coca Zero", price: "26" },
      { name: "Orangina", price: "30" },
      { name: "Red Bull", price: "40" },
      { name: "Eau minérale 75 cl", price: "40" },
      { name: "Oulmès 75 cl", price: "40" },
    ],
  },
];
