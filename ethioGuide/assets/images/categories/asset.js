// ─────────────────────────────────────────────
// Local image assets – organized by category
// ─────────────────────────────────────────────

const IMAGES = {
  // ── History ──────────────────────────────
  history: {
    origins:  require('./history.avif'),
    aksum:    require('./fasil.avif'),
    lalibela: require('./lalibela.webp'),
    adwa:     require('./flag.avif'),
  },

  // ── Religion ─────────────────────────────
  religion: {
    orthodox: require('./church.avif'),
    islam:    require('./addis_ababa.avif'),
  },

  // ── Festivals ────────────────────────────
  festivals: {
    timket: require('./culture.avif'),
    meskel: require('./cultural.avif'),
  },

  // ── Traditional Clothing ─────────────────
  clothing: {
    habesha: require('./dressing.avif'),
  },

  // ── Music & Dance ────────────────────────
  music: {
    eskista: require('./music.avif'),
  },

  // ── Food ─────────────────────────────────
  food: {
    injera: require('./food.webp'),
    coffee: require('./coffee.avif'),
  },

  // ── Landscapes ───────────────────────────
  landscape: {
    simien: require('./wereb.avif'),
  },

  // ── Famous People ────────────────────────
  famous: {
    menelik: require('./mimlik.avif'),
  },

  // ── General / Miscellaneous ──────────────
  general: {
    plane:    require('./plane.avif'),
    clothing: require('./clothing.webp'),
  },
};

// ─────────────────────────────────────────────
// Profile Menu Data
// ─────────────────────────────────────────────

export const PROFILE_MENU = [
  {
    id: "history",
    title: "History",
    data: [
      {
        id: "origins",
        name: "Origins of Humanity",
        icon: IMAGES.history.origins,
        description: "Ethiopia is one of the earliest homes of human ancestors.",
        facts:
          "• Discovery of Lucy in Afar region\n• 3.2 million years old\n• Cradle of humanity\n• Human evolution origin"
      },
      {
        id: "aksum",
        name: "Kingdom of Aksum",
        icon: IMAGES.history.aksum,
        description: "Ancient empire and early Christian civilization.",
        facts:
          "• Major ancient trade empire\n• Early Christianity (4th century)\n• Famous stone obelisks\n• Global trade connections"
      },
      {
        id: "zagwe",
        name: "Lalibela Churches",
        icon: IMAGES.history.lalibela,
        description: "Rock-hewn churches carved into stone.",
        facts:
          "• UNESCO heritage site\n• 11 monolithic churches\n• Built in 12th century\n• Pilgrimage destination"
      },
      {
        id: "adwa",
        name: "Battle of Adwa",
        icon: IMAGES.history.adwa,
        description: "Historic victory against Italian invasion.",
        facts:
          "• 1896 battle\n• Led by Menelik II\n• Preserved independence\n• African pride symbol"
      }
    ]
  },

  {
    id: "religion",
    title: "Religion",
    data: [
      {
        id: "orthodox",
        name: "Orthodox Christianity",
        icon: IMAGES.religion.orthodox,
        description: "Ancient Ethiopian Christian tradition.",
        facts:
          "• 4th century origin\n• Ge'ez liturgy\n• Fasting traditions\n• Lalibela churches"
      },
      {
        id: "islam",
        name: "Islam in Ethiopia",
        icon: IMAGES.religion.islam,
        description: "One of the oldest Muslim communities in Africa.",
        facts:
          "• First Hijra refuge\n• Historic Harar city\n• Peaceful coexistence\n• Cultural heritage"
      }
    ]
  },

  {
    id: "festivals",
    title: "Festivals",
    data: [
      {
        id: "timket",
        name: "Timkat",
        icon: IMAGES.festivals.timket,
        description: "Ethiopian Epiphany celebration.",
        facts:
          "• Baptism celebration\n• January festival\n• Water rituals\n• Colorful processions"
      },
      {
        id: "meskel",
        name: "Meskel",
        icon: IMAGES.festivals.meskel,
        description: "Finding of the True Cross festival.",
        facts:
          "• Bonfire ceremony\n• September celebration\n• Religious gathering\n• Cultural unity"
      }
    ]
  },

  {
    id: "clothing",
    title: "Traditional Clothing",
    data: [
      {
        id: "habesha",
        name: "Habesha Kemis",
        icon: IMAGES.clothing.habesha,
        description: "Traditional Ethiopian dress worn by women.",
        facts:
          "• White cotton fabric\n• Colorful embroidery\n• Holiday wear\n• Cultural identity"
      }
    ]
  },

  {
    id: "music",
    title: "Music & Dance",
    data: [
      {
        id: "eskista",
        name: "Eskista Dance",
        icon: IMAGES.music.eskista,
        description: "Famous Ethiopian shoulder dance.",
        facts:
          "• Shoulder movements\n• Cultural expression\n• Festival dance\n• Energetic rhythm"
      }
    ]
  },

  {
    id: "food",
    title: "Food",
    data: [
      {
        id: "injera",
        name: "Injera",
        icon: IMAGES.food.injera,
        description: "Staple Ethiopian sour flatbread.",
        facts:
          "• Made from teff\n• Sour taste\n• Shared meals\n• Base of Ethiopian cuisine"
      }
    ]
  },

  {
    id: "landscape",
    title: "Landscapes",
    data: [
      {
        id: "simien",
        name: "Simien Mountains",
        icon: IMAGES.landscape.simien,
        description: "Dramatic mountain ranges of Ethiopia.",
        facts:
          "• UNESCO site\n• Rare wildlife\n• Hiking destination\n• High peaks"
      }
    ]
  },

  {
    id: "famous",
    title: "Famous People",
    data: [
      {
        id: "menelik",
        name: "Menelik II",
        icon: IMAGES.famous.menelik,
        description: "Emperor who defeated Italy at Adwa.",
        facts:
          "• Modernized Ethiopia\n• Battle of Adwa leader\n• Expanded empire\n• National hero"
      }
    ]
  }
];

// ─────────────────────────────────────────────
// Derived exports
// ─────────────────────────────────────────────

export const WishlistProducts = PROFILE_MENU
  .flatMap(section => section.data)
  .filter(item =>
    ["origins", "timket", "eskista"].includes(item.id)
  );

// Re-export the image map for convenience
export { IMAGES };