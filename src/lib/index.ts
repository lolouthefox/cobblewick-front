// place files you want to import through the `$lib` alias in this folder.
enum Rarity {
    COMMON,
    UNCOMMON,
    RARE,
    EPIC
}

enum ItemCategory {
    BLOCK_RECIPE,
    ITEM_RECIPE,
    DECORATION_RECIPE,
    HEAD_RECIPE,
    
    BLOCKS,
    DECORATIONS,
    ITEMS,
    HEADS,

    COSMETIC_HAT,
    COSMETIC_CHESTPLATE,
    COSMETIC_LEGGINGS,
    COSMETIC_BOOTS,
    COSMETIC_AURA,
    COSMETIC_TRAIL,

    MINECRAFT_XP,
}

interface Item {
    name: string;
    description: string;
    rarity: Rarity;
    thumbnail: string;
    model?: string;
    price?: number;
    category: ItemCategory;
    quantity?: number;
    isPremium?: boolean;
}

interface PassPage {
    name: string;
    background?: string;
    items: Item[];
}

interface ContentPass {
    name: string;
    finishes?: Date;
    pages: PassPage[]
}

let passDate = new Date()
passDate.setFullYear(2025, 12, 31)

let seasonalPass: ContentPass = {
    name: "Accueil Chaleureux",
    finishes: passDate,
    pages: [
        {
            name: "Home Sweet Home",
            items: [
                {
                    name: "Tapis «Home Sweet Home»",
                    description: "",
                    rarity: Rarity.COMMON,
                    category: ItemCategory.DECORATION_RECIPE,
                    isPremium: false,
                    quantity: 1,
                    thumbnail: ""
                }
            ]
        },
        {
            name: "Home Sweet Home",
            items: [
                {
                    name: "Tapis «Home Sweet Home»",
                    description: "",
                    rarity: Rarity.COMMON,
                    category: ItemCategory.DECORATION_RECIPE,
                    isPremium: false,
                    quantity: 1,
                    thumbnail: ""
                }
            ]
        },
        {
            name: "Home Sweet Home",
            items: [
                {
                    name: "Tapis «Home Sweet Home»",
                    description: "",
                    rarity: Rarity.COMMON,
                    category: ItemCategory.DECORATION_RECIPE,
                    isPremium: false,
                    quantity: 1,
                    thumbnail: ""
                }
            ]
        },
        {
            name: "Home Sweet Home",
            items: [
                {
                    name: "Tapis «Home Sweet Home»",
                    description: "",
                    rarity: Rarity.COMMON,
                    category: ItemCategory.DECORATION_RECIPE,
                    isPremium: false,
                    quantity: 1,
                    thumbnail: ""
                }
            ]
        },
        {
            name: "Home Sweet Home",
            items: [
                {
                    name: "Tapis «Home Sweet Home»",
                    description: "",
                    rarity: Rarity.COMMON,
                    category: ItemCategory.DECORATION_RECIPE,
                    isPremium: false,
                    quantity: 1,
                    thumbnail: ""
                }
            ]
        },
        {
            name: "Home Sweet Home",
            items: [
                {
                    name: "Tapis «Home Sweet Home»",
                    description: "",
                    rarity: Rarity.COMMON,
                    category: ItemCategory.DECORATION_RECIPE,
                    isPremium: false,
                    quantity: 1,
                    thumbnail: ""
                }
            ]
        },
        {
            name: "Home Sweet Home",
            items: [
                {
                    name: "Tapis «Home Sweet Home»",
                    description: "",
                    rarity: Rarity.COMMON,
                    category: ItemCategory.DECORATION_RECIPE,
                    isPremium: false,
                    quantity: 1,
                    thumbnail: ""
                }
            ]
        },
        {
            name: "Home Sweet Home",
            items: [
                {
                    name: "Tapis «Home Sweet Home»",
                    description: "",
                    rarity: Rarity.COMMON,
                    category: ItemCategory.DECORATION_RECIPE,
                    isPremium: false,
                    quantity: 1,
                    thumbnail: ""
                }
            ]
        },
        {
            name: "Home Sweet Home",
            items: [
                {
                    name: "Tapis «Home Sweet Home»",
                    description: "",
                    rarity: Rarity.COMMON,
                    category: ItemCategory.DECORATION_RECIPE,
                    isPremium: false,
                    quantity: 1,
                    thumbnail: ""
                }
            ]
        },
    ]
}
