// place files you want to import through the `$lib` alias in this folder.
export enum Rarity {
	COMMON,
	UNCOMMON,
	RARE,
	EPIC
}

export enum ItemCategory {
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

	MINECRAFT_XP
}

export interface Item {
	name: string;
	description: string;
	rarity: Rarity;
	thumbnail: string;
	model?: string; // 3D model
	price?: number;
	category: ItemCategory;
	quantity?: number;
	isPremium?: boolean;
}

export interface Bundle {
	name: string;
	description: string;
	thumbnail: string;
	items: Item[];
	price?: number;
	isPremium?: boolean;
}

export interface PassPage {
	name: string;
	background?: string;
	items: (Item | Bundle)[];
}

export interface ContentPass {
	name: string;
	finishes?: Date;
	pages: PassPage[];
}

export function getRarityColor(rarity: Rarity) {
	switch (rarity) {
		case Rarity.COMMON:
			return '255, 255, 255';

		case Rarity.UNCOMMON:
			return '255, 255, 0';

		case Rarity.RARE:
			return '0, 255, 255';

		case Rarity.EPIC:
			return '255, 255, 0';

		default:
			return '255, 255, 255';
	}
}

let passDate = new Date();
passDate.setFullYear(2025, 12, 31);

export let seasonalPass: ContentPass = {
	name: 'Accueil Chaleureux',
	finishes: passDate,
	pages: [
		{
			name: 'Home Sweet Home',
			items: [
				{
					name: 'Cozy Slippers',
					description: 'Keep your feet warm with these soft slippers.',
					rarity: Rarity.COMMON,
					category: ItemCategory.COSMETIC_BOOTS,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Hot Cocoa Mug',
					description: 'A mug of hot cocoa to warm your hands.',
					rarity: Rarity.UNCOMMON,
					category: ItemCategory.ITEMS,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Knitted Scarf',
					description: 'A handmade scarf to keep you cozy.',
					rarity: Rarity.UNCOMMON,
					category: ItemCategory.COSMETIC_CHESTPLATE,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Wooden Rocking Chair',
					description: 'A classic rocking chair for relaxation.',
					rarity: Rarity.RARE,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: true,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Candle Set',
					description: 'A set of scented candles for a warm ambiance.',
					rarity: Rarity.COMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Woolen Mittens',
					description: 'Soft mittens to keep your hands warm.',
					rarity: Rarity.COMMON,
					category: ItemCategory.COSMETIC_CHESTPLATE,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Cozy Fireplace',
					description: 'A fireplace to bring warmth to your home.',
					rarity: Rarity.RARE,
					category: ItemCategory.BLOCK_RECIPE,
					isPremium: true,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Home Comforts Bundle',
					description: 'A bundle of items to make your home extra cozy.',
					rarity: Rarity.EPIC,
					category: ItemCategory.ITEM_RECIPE,
					isPremium: true,
					thumbnail: '',
					items: [
						{
							name: 'Cozy Slippers',
							description: '',
							rarity: Rarity.COMMON,
							category: ItemCategory.COSMETIC_BOOTS,
							isPremium: false,
							quantity: 1,
							thumbnail: ''
						},
						{
							name: 'Hot Cocoa Mug',
							description: '',
							rarity: Rarity.UNCOMMON,
							category: ItemCategory.ITEMS,
							isPremium: false,
							quantity: 1,
							thumbnail: ''
						}
					]
				}
			]
		},
		{
			name: 'Cozy Living',
			items: [
				{
					name: 'Plaid Blanket',
					description: 'A warm and cozy blanket for chilly nights.',
					rarity: Rarity.UNCOMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Rustic Coffee Table',
					description: 'A sturdy wooden table for your living room.',
					rarity: Rarity.COMMON,
					category: ItemCategory.BLOCK_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Vintage Lamp',
					description: 'A lamp with a vintage design to light up your space.',
					rarity: Rarity.UNCOMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Knitted Cushion',
					description: 'A handmade cushion for extra comfort.',
					rarity: Rarity.COMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 2,
					thumbnail: ''
				},
				{
					name: 'Fireplace Mantel',
					description: 'A decorative mantel for your fireplace.',
					rarity: Rarity.RARE,
					category: ItemCategory.BLOCK_RECIPE,
					isPremium: true,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Wall Art Set',
					description: 'A set of paintings to decorate your walls.',
					rarity: Rarity.UNCOMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Wool Rug',
					description: 'A soft rug to complete your cozy living room.',
					rarity: Rarity.COMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Cozy Living Bundle',
					description: 'A bundle of items to create the perfect cozy living room.',
					rarity: Rarity.EPIC,
					category: ItemCategory.ITEM_RECIPE,
					isPremium: true,
					thumbnail: '',
					items: [
						{
							name: 'Plaid Blanket',
							description: '',
							rarity: Rarity.UNCOMMON,
							category: ItemCategory.DECORATION_RECIPE,
							isPremium: false,
							quantity: 1,
							thumbnail: ''
						},
						{
							name: 'Rustic Coffee Table',
							description: '',
							rarity: Rarity.COMMON,
							category: ItemCategory.BLOCK_RECIPE,
							isPremium: false,
							quantity: 1,
							thumbnail: ''
						}
					]
				}
			]
		},
		{
			name: 'Winter Wonderland',
			items: [
				{
					name: 'Snowy Pine Tree',
					description: 'A pine tree covered in snow.',
					rarity: Rarity.UNCOMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Icicle Lights',
					description: 'Beautiful lights that resemble icicles.',
					rarity: Rarity.RARE,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: true,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Snowman Decoration',
					description: 'A cheerful snowman to brighten up your yard.',
					rarity: Rarity.COMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Frosted Windowpanes',
					description: 'Windows with a frosty design.',
					rarity: Rarity.UNCOMMON,
					category: ItemCategory.BLOCK_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Winter Wreath',
					description: 'A wreath made of pine and holly.',
					rarity: Rarity.COMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Frozen Fountain',
					description: 'A fountain frozen in time.',
					rarity: Rarity.RARE,
					category: ItemCategory.BLOCK_RECIPE,
					isPremium: true,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Snowflake Trail',
					description: 'Leave a trail of snowflakes wherever you go.',
					rarity: Rarity.EPIC,
					category: ItemCategory.COSMETIC_TRAIL,
					isPremium: true,
					quantity: 1,
					thumbnail: ''
				},
				{
					name: 'Winter Wonderland Bundle',
					description: 'A bundle of winter-themed decorations.',
					rarity: Rarity.EPIC,
					category: ItemCategory.ITEM_RECIPE,
					isPremium: true,
					thumbnail: '',
					items: [
						{
							name: 'Snowy Pine Tree',
							description: '',
							rarity: Rarity.UNCOMMON,
							category: ItemCategory.DECORATION_RECIPE,
							isPremium: false,
							quantity: 1,
							thumbnail: ''
						},
						{
							name: 'Icicle Lights',
							description: '',
							rarity: Rarity.RARE,
							category: ItemCategory.DECORATION_RECIPE,
							isPremium: true,
							quantity: 1,
							thumbnail: ''
						}
					]
				}
			]
		}
	]
};
