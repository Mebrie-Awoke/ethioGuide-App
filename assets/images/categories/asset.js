export const PROFILE_MENU = [
  {
    id: "history",
    title: "History",
    data: [
      {
        id: "origins",
        name: "Origins of Humanity",
        icon: {
          uri: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da"
        },
        description: "Ethiopia is one of the earliest homes of human ancestors.",
        facts:
          "• Discovery of Lucy in Afar region\n• 3.2 million years old\n• Cradle of humanity\n• Human evolution origin"
      },
      {
        id: "aksum",
        name: "Kingdom of Aksum",
        icon: {
          uri: "https://images.unsplash.com/photo-1593698054469-2c0c6d6b7c78"
        },
        description: "Ancient empire and early Christian civilization.",
        facts:
          "• Major ancient trade empire\n• Early Christianity (4th century)\n• Famous stone obelisks\n• Global trade connections"
      },
      {
        id: "zagwe",
        name: "Lalibela Churches",
        icon: {
          uri: "https://images.unsplash.com/photo-1589395937772-6f2c6b9d9f8a"
        },
        description: "Rock-hewn churches carved into stone.",
        facts:
          "• UNESCO heritage site\n• 11 monolithic churches\n• Built in 12th century\n• Pilgrimage destination"
      },
      {
        id: "adwa",
        name: "Battle of Adwa",
        icon: {
          uri: "https://images.unsplash.com/photo-1600195077909-46e573870d6d"
        },
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
        icon: {
          uri: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad"
        },
        description: "Ancient Ethiopian Christian tradition.",
        facts:
          "• 4th century origin\n• Ge’ez liturgy\n• Fasting traditions\n• Lalibela churches"
      },
      {
        id: "islam",
        name: "Islam in Ethiopia",
        icon: {
          uri: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f"
        },
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
        icon: {
          uri: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
        },
        description: "Ethiopian Epiphany celebration.",
        facts:
          "• Baptism celebration\n• January festival\n• Water rituals\n• Colorful processions"
      },
      {
        id: "meskel",
        name: "Meskel",
        icon: {
          uri: "https://images.unsplash.com/photo-1520975922284-9f0f0f6c4f6f"
        },
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
        icon: {
          uri: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
        },
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
        icon: {
          uri: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b"
        },
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
        icon: {
          uri: "https://images.unsplash.com/photo-1604908177220-0f6d1f1f7f13"
        },
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
        icon: {
          uri: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
        },
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
        icon: {
          uri: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Menelik_II.jpg"
        },
        description: "Emperor who defeated Italy at Adwa.",
        facts:
          "• Modernized Ethiopia\n• Battle of Adwa leader\n• Expanded empire\n• National hero"
      }
    ]
  }
];

export const WishlistProducts = PROFILE_MENU
  .flatMap(section => section.data)
  .filter(item =>
    ["origins", "timket", "eskista"].includes(item.id)
  );