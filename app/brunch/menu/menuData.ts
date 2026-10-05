// Carte Garden Brunch — source: "Menu garden brunch -.pdf" (nouvelle carte, octobre 2026).
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

const HOURS_BRUNCH =
  "Servis du lundi au vendredi de 08h00 à 13h00. Servis les week-ends et jours fériés de 08h00 à 14h00.";

export const menuSections: MenuSection[] = [
  // ── Se Régaler ─────────────────────────────────────────────────────────────
  {
    id: "les-brunchs",
    title: "Les Brunchs",
    icon: "tray",
    note: HOURS_BRUNCH,
    items: [
      { name: "Just Brunch", price: "120", description: "Boisson chaude au choix, jus d'orange pressé, œufs brouillés à la truffe ou nature. Sélection de mini viennoiseries et pain pistoles, panna cotta au lait de coco accompagnée de fruits tropicaux." },
      { name: "Green Brunch", price: "130", description: "Boisson chaude au choix, jus d'orange pressé, œufs pochés mollets sur une tartine au levain, accompagnés de légumes grillés, potatoes salées nappées de sauce cheddar fondu, bol de granola au yaourt et fruits rouges." },
      { name: "Beldi Brunch", price: "140", description: "Boisson chaude au choix, jus d'orange pressé, mini chakhchouka, œufs au khlii, sélection de mini crêpes et galettes marocaines. Soupe hsoua blanche au thym, verrine de fruits frais de saison." },
      { name: "Beni Avo Brunch", price: "145", description: "Boisson chaude au choix, jus d'orange pressé, tartine multigrain à la mousse d'avocat, surmontée de deux œufs pochés, nappés de sauce hollandaise maison et sauce chimichurri, accompagnée d'un mesclun de salade verte, sélection de mini-viennoiseries. Panna cotta au lait de coco et fruits tropicaux." },
      { name: "Veggie Brunch", price: "160", description: "Boisson chaude au choix, jus detox, pain de seigle grillé, omelette de blanc d'œufs, légumes de saison grillés, ricotta crémeuse, pignons toastés, pesto de basilic, fruits frais de saison en tranches et pudding de chia infusé au lait de coco." },
      { name: "Scandinavian Brunch", price: "160", description: "Boisson chaude au choix, jus d'orange pressé, bagel au saumon fumé, avocat et fromage acidulé à l'aneth, œufs pochés. Brioche suédoise à la cannelle, mousse au chocolat au gingembre confit, crème fouettée et fruits rouges." },
      { name: "SoHo Hot Honey", price: "169", description: "Boisson chaude au choix, jus d'orange pressé, saucisses grillées, œufs à votre convenance, fluffiest pancake servi avec son beurre fouetté au Hot Honey (miel infusé au piment doux), bacon de bœuf grillé croustillant, Crispy Cheese Balls & pain au levain, salade de fruits frais de saison." },
    ],
    footnote: "Boissons chaudes incluses hors viennois, chocolat chaud, lattes, Nespresso et thés. Supplément : 15 DH.",
  },
  {
    id: "acai-bowl",
    title: "Açaí Bowl",
    icon: "smoothie",
    items: [
      { name: "Açaí Bowl \"Granola d'Or\"", price: "85", description: "Crème d'açaí au lait d'amande, banane, granola artisanal croustillant, noix de coco râpée et fruits frais découpés." },
      { name: "Açaí Bowl \"Nectar & Figues\"", price: "85", description: "Velouté d'açaí au lait de coco, banane, figues fraîches, noisettes et miel sauvage." },
    ],
  },
  {
    id: "egg-ceptionnel",
    title: "Egg'ceptionnel",
    icon: "egg",
    note: HOURS_BRUNCH,
    items: [
      { name: "Omelette Nature", price: "35", description: "Œufs nature en omelette ou brouillés, servis avec des potatoes salées." },
      { name: "Omelette Veggie", price: "55", description: "Champignons sautés, poivrons rouges et verts, épinards, courgettes et oignons caramélisés, servis avec des potatoes salées." },
      { name: "Tagine de Khlii", price: "75", description: "Œufs au choix au khlii et caviar d'aubergine." },
      { name: "Mkila de Kefta", price: "85", description: "Kefta, sauce tomate à la fleur d'ail, œufs pochés, gratinée au fromage et éclats de coriandre." },
      { name: "Croissant au bacon et brie fondu", price: "90", description: "Croissant pressé garni de tomate confite, oignons caramélisés, œufs pochés et brie fondu aux noix." },
      { name: "Nutty-Avocado", price: "95", description: "Généreuse tartine de pain de campagne au levain, tranches d'avocat frais, deux œufs pochés coulants, sauce tzatziki maison, roquette & concassé de fruits secs." },
      { name: "Truffle Melt", price: "100", description: "Brioche dorée au beurre, effiloché de blanc de poulet aux fines herbes, œufs brouillés ultra-crémeux à la crème de truffe, cœur de Brie fondant & chips croustillantes de patate douce." },
      { name: "Bagel Saumon Benedict", price: "105", description: "Bagel garni de saumon fumé, avocat, fromage blanc acidulé au zeste de citron et à l'aneth, sauce hollandaise maison agrémentée de câpres frites, accompagné de chips d'oignons croustillants." },
    ],
    footnote: "Suppléments — Frites maison : 20 DH · Purée de pomme de terre : 20 DH.",
  },
  {
    id: "petit-dejeuner",
    title: "Petit déjeuner sur le pouce",
    icon: "croissant",
    note: "Servis du lundi au vendredi de 08h00 à 13h00.",
    items: [
      { name: "Le Pressé Gourmand", price: "43", description: "Jus d'orange, boisson chaude*, viennoiserie au choix*." },
      { name: "Le Réveil Salé", price: "60", description: "Jus d'orange, boisson chaude*, omelette, pain pistolet." },
      { name: "Le Boost Matinal", price: "65", description: "Jus d'orange, boisson chaude*, viennoiserie*, granola ou panna cotta." },
    ],
    footnote:
      "Suppléments : huile d'olive, olives noires ou fromage blanc : 10 DH. * Viennoiseries incluses : pain suisse, croissant, pain au chocolat, pain aux raisins. Supplément : 10 DH. * Boissons chaudes incluses hors viennois, chocolat chaud, lattes, Nespresso et thés. Supplément : 15 DH.",
  },
  {
    id: "pancakes",
    title: "Pancakes",
    icon: "pancake",
    items: [
      { name: "Pancake aux trois chocolats et fruits rouges", price: "60" },
      { name: "Pancake crème vanille et fruits rouges", price: "60" },
      { name: "Pancake à la framboise et crème catalane au coulis de pistache", price: "60" },
      { name: "Pancake garni de compote de pommes à la cannelle, glace vanille et filet de sauce chocolat", price: "75" },
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
      { name: "Pain perdu nappé de caramel, garni de fruits secs, poire caramélisée et glace vanille", price: "80" },
    ],
  },
  {
    id: "starters",
    title: "Starters",
    icon: "salad",
    items: [
      { name: "Terroir & Voyage", price: "85", description: "Aubergine rôtie au four, tahina, féta et saupoudré de parmesan." },
      { name: "Trio de salade", price: "90", description: "Caviar d'aubergine à la grenade, houmous, tomate relevée au thon, servi avec de fines tranches de pain." },
      { name: "Le Retour de Nice", price: "95", description: "Thon frais façon tataki laqué au sésame et soja doux, anchois marinés, pommes de terre nouvelles, haricots verts, œuf parfait 64°, pickles d'oignons rouges." },
      { name: "Méditerranéen Garden", price: "105", description: "Crevettes à la plancha, légumes du marché grillés à la ricotta, pesto de basilic, crème balsamique et croquants de noix." },
      { name: "César & Houmous", price: "110", description: "Houmous, poulet, croûtons, anchois, tomates confites, parmesan, pois chiches et huile d'olive pimentée." },
      { name: "Carpaccio de veau & Pistachio Crunch", price: "120", description: "Fines lamelles de veau tendre, mayonnaise légère au thon et câpres, câpres croustillantes, éclats de pistaches, pickles d'oignons rouges, roquette et huile d'olive herbacée." },
    ],
  },
  {
    id: "comfort-foods",
    title: "Comfort Foods",
    icon: "burger",
    items: [
      { name: "Le Tuna Melt Gourmet", price: "80", description: "Baguette croustillante, thon, concombre, fondue de gruyère et mozzarella." },
      { name: "The Rainbow Halloumi Tacos & Sweet Chili", price: "100", description: "Trio de mini-tortillas artisanales colorées (Beet Pink, Épinards & Classic Corn), crispy Halloumi cheese, guacamole au citron vert, coleslaw croquant de chou rouge, sweet chili-honey glaze, pomegranate et fines herbes." },
      { name: "Bagel au saumon fumé", price: "100", description: "Saumon fumé, avocat, fromage blanc acidulé au zeste de citron, roquette et chips d'oignons." },
      { name: "Fish Burger", price: "110", description: "Filet de merlan en chapelure Panko ultra-croustillante, brioche artisanale dorée, salade de chou rouge et mangue acidulée au sésame, sauce tartare maison relevée au yuzu & sriracha, servie avec chips de patate douce." },
      { name: "Chicken burger", price: "110", description: "Guacamole, sauce à la chipotle fumée, ananas grillé, cheddar fondu avec coleslaw." },
      { name: "Crispy Chicken & Coleslaw", price: "115", description: "Poulet pané croustillant, cheddar fondu, coleslaw, pickles et sauce Sriracha-mayo." },
      { name: "Burger Couture au Pesto & Oignons Crispy", price: "120", description: "Steak de bœuf, pesto de tomates séchées et basilic, oignons crispy et fondue de cheddar." },
      { name: "Salmon Silk", price: "125", description: "Sublime sourdough de pain de campagne au levain, mousse d'avocat au gingembre frais, saumon fumé, stracciatella crémeuse, réduction balsamique, roquette & croquants de fruits secs." },
    ],
  },
  {
    id: "signatures",
    title: "Signatures",
    icon: "plate",
    items: [
      { name: "Vol-au-vent aux herbes de Provence", price: "120", description: "Poulet mijoté aux champignons dans une sauce crémeuse à la moutarde à l'ancienne, dressé sous vos yeux sur une pâte feuilletée maison croustillante, agrémenté de pousses de poireau fraîches, riz au parmesan ou pomme purée." },
      { name: "Poulet piccata", price: "140", description: "Poulet croustillant au parmesan, accompagné de tomates confites et fondue de mozzarella. Servi avec une salade de roquette et un velouté au citron." },
      { name: "Garden Ribeye", price: "210", description: "Entrecôte grillée tranchée, beurre infusé aux herbes & fleur de sel, servie avec croquettes de fromage aux poivrons croustillantes et salade de roquette au citron & herbes fraîches." },
      { name: "Pavé de saumon grillé à l'unilatérale", price: "220", description: "Ratatouille maison, tapenade d'olives noires aux amandes torréfiées, pesto, persil, anchois et câpres." },
      { name: "Filet de bœuf poêlé", price: "240", description: "Beurre à la moutarde et poivre vert. Purée de pomme de terre à l'ail confit. Compote d'oignons et sauce chimichurri." },
    ],
    footnote: "Garnitures — Frites maison : 20 DH · Purée de pomme de terre : 20 DH · Poêlée de légumes : 20 DH.",
  },

  // ── Sucré ──────────────────────────────────────────────────────────────────
  {
    id: "desserts",
    title: "Desserts",
    icon: "dessert",
    items: [
      { name: "Crème brûlée — Fleur d'oranger", price: "50" },
      { name: "Crème brûlée — Safran de Taliouine", price: "60" },
      { name: "Tarte", price: "50", description: "Servie avec sa boule de crème glacée. Tatin, citron ou fruits rouges." },
      { name: "Brownie", price: "50", description: "Brownie à la noix de pécan et sa boule de crème vanille." },
      { name: "Assiette de fruits frais de saison", price: "80", description: "Fruits de saison et son sorbet aux agrumes." },
    ],
  },
  {
    id: "glaces",
    title: "Glaces",
    icon: "dessert",
    items: [
      { name: "2 boules", price: "35" },
      { name: "3 boules", price: "45" },
    ],
  },
  {
    id: "douceurs",
    title: "Douceurs",
    icon: "madeleine",
    items: [
      { name: "Madeleine", price: "15", description: "Citron, chocolat, framboise, praliné." },
      { name: "Cake", price: "30", description: "Chocolat à la crème de citron, chocolat blanc à la framboise, trois chocolats à la praline de noisettes." },
    ],
  },
  {
    id: "gateaux",
    title: "Gâteaux à la part",
    icon: "cake",
    items: [
      { name: "Cheesecake", price: "55", description: "Fruits rouges, orange et fruits de la passion." },
      { name: "Cipriani", price: "55", description: "Crème de citron et yuzu." },
      { name: "Carrot cake aux noix", price: "55" },
      { name: "Red velvet cake", price: "55" },
      { name: "Tiramisu", price: "55", description: "Badiane et croustillant de noisette." },
      { name: "Forêt noire", price: "60" },
      { name: "Velours Bourbon", price: "60", description: "Vanille, cardamome et caramel beurre salé." },
      { name: "Amber Earl Grey", price: "60", description: "Chocolat noir, orange et Earl Grey." },
      { name: "Jardin Asiatique", price: "65", description: "Matcha, mangue et fruit de la passion." },
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

  // ── Se Désaltérer ──────────────────────────────────────────────────────────
  {
    id: "frappuccinos",
    title: "Frappuccinos & Cafés glacés",
    icon: "frappe",
    items: [
      { name: "Café frappé", price: "45", description: "Café espresso mélangé à de la glace pilée." },
      { name: "Chocolat", price: "45", description: "Boisson glacée frappée au chocolat, surmontée d'une onctueuse crème fouettée." },
      { name: "Chocolat blanc", price: "45", description: "Délicieux mélange de chocolat blanc, café et lait frappés avec de la glace, sublimé par une crème fouettée." },
      { name: "Caramel", price: "45", description: "Café et lait mélangés à de la glace pilée, recouverts d'une crème fouettée et d'un coulis au caramel." },
      { name: "Vanille", price: "45", description: "Frappuccino à la vanille, surmonté de crème fouettée et d'une double touche de sirop de vanille." },
      { name: "Noisettes", price: "45", description: "Café finement moulu, lait froid, glace pilée, crème fouettée et noisettes torréfiées." },
    ],
  },
  {
    id: "cafes",
    title: "Cafés",
    icon: "coffee",
    items: [
      { name: "Americano", price: "26" },
      { name: "Double espresso", price: "26" },
      { name: "Espresso", price: "28" },
      { name: "Espresso macchiato", price: "28" },
      { name: "Café latte", price: "28" },
      { name: "Nespresso", price: "28" },
      { name: "Cappuccino", price: "30" },
      { name: "Affogato", price: "38", description: "Glace vanille, café espresso." },
      { name: "Vegan latte", price: "45" },
    ],
    footnote: "Lait végétal (lait d'amande, lait de coco, lait d'avoine) : supplément 12 DH.",
  },
  {
    id: "specialites-lattees",
    title: "Spécialités latte",
    icon: "latte",
    items: [
      { name: "Chocolat chaud", price: "32" },
      { name: "Caramel latte", price: "39" },
      { name: "Vanilla latte", price: "39" },
      { name: "Peanut butter latte", price: "39" },
    ],
  },
  {
    id: "thes-infusions",
    title: "Thés & infusions",
    icon: "teapot",
    note: "Thés Les Comptoirs Richard — authenticité et raffinement à chaque tasse.",
    items: [
      { name: "Thé à la menthe", price: "28" },
      { name: "Thé blanc", price: "55", description: "Thé blanc rose litchi." },
      { name: "Thé vert", price: "55", description: "Jardin des merveilles, thé vert à la menthe bio, thé vert au jasmin." },
      { name: "Thé noir", price: "55", description: "Grand Earl Grey, fruits rouges, Ceylan O.P, vanille caramel, Breakfast B.O.P Bio." },
      { name: "Tisanes", price: "55", description: "Rêves enfantins bio fleurs d'hibiscus, bio relaxante, rooibos aux épices, secret d'équilibre bio digest, verveine, camomille." },
      { name: "Infusions", price: "55", description: "Secret d'équilibre bio digestive, bio relaxante, rêves enfantins bio fleurs d'hibiscus." },
    ],
  },
  {
    id: "thes-glaces",
    title: "Thés glacés",
    icon: "icedtea",
    items: [
      { name: "Pêche blanche", price: "45", description: "Pêche blanche et romarin." },
      { name: "Marrakech", price: "45", description: "Thé noir à froid, thym, romarin, menthe et zeste de citron." },
      { name: "Fruits des bois", price: "45", description: "Framboise et litchis." },
      { name: "Summer Sunrise", price: "45", description: "Infusion de citron à l'eau pétillante, orange fraîche et gingembre." },
      { name: "Sunset Spritz", price: "45", description: "Infusion de graines de grenade, gingembre, kiwi et jus de citron." },
      { name: "Exotique", price: "45", description: "Mangue et passion." },
      { name: "Wood", price: "45", description: "Framboise, myrtille et mûres." },
    ],
  },
  {
    id: "smoothies",
    title: "Smoothies",
    icon: "smoothie",
    items: [
      { name: "Viking", price: "60", description: "Betterave, banane et fraise." },
      { name: "Iced Tea", price: "60", description: "Fruits de la passion, tropical, ou aux fruits rouges." },
      { name: "Passion coconut", price: "63", description: "Lait de coco, fruit de la passion, banane et sirop d'érable." },
      { name: "Mango Purple", price: "63", description: "Mangue, fraise et banane." },
      { name: "Golden velvet", price: "65", description: "Pêche, abricot, lait d'amande et miel." },
    ],
  },
  {
    id: "fraichement-presse",
    title: "Fraîchement pressé",
    icon: "juice",
    items: [
      { name: "Orange, pamplemousse, citron, tomate", price: "35" },
      { name: "Jus de carotte, jus de concombre", price: "35" },
      { name: "Mangue, papaye, ananas", price: "50" },
      { name: "Fruits rouges", price: "50" },
    ],
  },
  {
    id: "cocktail-presse",
    title: "Cocktail fraîchement pressé",
    icon: "juice",
    items: [
      { name: "Immuno", price: "48", description: "Carotte, orange, gingembre et curcuma." },
      { name: "Garden Beet", price: "48", description: "Betterave, pomme, citron, carotte et orange." },
      { name: "Green Detox", price: "50", description: "Pomme, ananas, concombre, gingembre et menthe." },
      { name: "Banana Strawberry", price: "50", description: "Banane, fraise, jus de citron et eau de coco." },
      { name: "Tropical", price: "50", description: "Mangue, ananas et orange." },
      { name: "Garden'Line", price: "50", description: "Pomme, ananas, kale, concombre, citron, persil, céleri, curcuma et orange." },
      { name: "Garden Morning", price: "50", description: "Ananas, poire, orange et gingembre." },
      { name: "Garden Mojito", price: "50", description: "Citron vert, gingembre, ananas et fruits de la passion." },
      { name: "Red Garden", price: "50", description: "Fraise, orange et framboise." },
      { name: "Matcha cloud", price: "63", description: "Poudre de matcha, lait d'amande, sirop de vanille, crème chantilly à la fleur d'oranger." },
    ],
  },
  {
    id: "eaux-soda",
    title: "Boissons gazeuses et eaux",
    icon: "soda",
    items: [
      { name: "Eau minérale 50 cl", price: "22" },
      { name: "Oulmès 25 cl", price: "24" },
      { name: "Orangina", price: "26" },
      { name: "Hawaii, Schweppes tonic, Schweppes citron, Sprite, Coca-Cola, Coca Zero", price: "28" },
      { name: "Red Bull", price: "40" },
      { name: "Eau minérale 75 cl", price: "40" },
      { name: "Oulmès 75 cl", price: "44" },
    ],
  },
];
