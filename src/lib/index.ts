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
					name: 'Sunflower',
					description: 'A token of our appreciation.',
					rarity: Rarity.COMMON,
					category: ItemCategory.COSMETIC_BOOTS,
					isPremium: false,
					quantity: 1,
					thumbnail: '/mc-icons/pics/175_Sunflower.png'
				},
				{
					name: 'Nick Wilde Poster',
					description: 'Yes, there\'s a second movie :D',
					rarity: Rarity.UNCOMMON,
					category: ItemCategory.ITEMS,
					isPremium: false,
					quantity: 1,
					thumbnail: '/nick.jpg'
				},
				{
					name: 'Note Block',
					description: 'Plays a sound when hit or powered through redstone. You can also modify which sound it plays by putting different materials under it.',
					rarity: Rarity.UNCOMMON,
					category: ItemCategory.COSMETIC_CHESTPLATE,
					isPremium: false,
					quantity: 1,
					thumbnail: '/mc-icons/pics/25_Note Block.png'
				},
				{
					name: 'Piston',
					description: 'Pushes blocks when powered.',
					rarity: Rarity.RARE,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: true,
					quantity: 1,
					thumbnail: '/mc-icons/pics/33_Piston.png'
				},
				{
					name: 'Glass Pane',
					description: 'You can see through it.',
					rarity: Rarity.COMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: '/mc-icons/pics/102_Glass Pane.png'
				},
				{
					name: 'Enchantment Table',
					description: 'You can do magic things to unlock incredible power.',
					rarity: Rarity.COMMON,
					category: ItemCategory.COSMETIC_CHESTPLATE,
					isPremium: false,
					quantity: 1,
					thumbnail: '/mc-icons/pics/116_Enchantment Table.png'
				},
				{
					name: 'Orange Stained Glass Pane',
					description: 'It\'s a glass pane, but colored.',
					rarity: Rarity.RARE,
					category: ItemCategory.BLOCK_RECIPE,
					isPremium: true,
					quantity: 1,
					thumbnail: '/mc-icons/pics/160_1_Orange Stained Glass Pane.png'
				},
				{
					name: 'Iron Tools',
					description: 'For strong people only.',
					rarity: Rarity.EPIC,
					category: ItemCategory.ITEM_RECIPE,
					isPremium: true,
					thumbnail: '/mc-icons/pics/258_Iron Axe.png',
					items: [
						{
							name: 'Cozy Slippers',
							description: '',
							rarity: Rarity.COMMON,
							category: ItemCategory.COSMETIC_BOOTS,
							isPremium: false,
							quantity: 1,
							thumbnail: 'https://png.pngtree.com/png-clipart/20230512/original/pngtree-isolated-cat-on-white-background-png-image_9158356.png'
						},
						{
							name: 'Hot Cocoa Mug',
							description: '',
							rarity: Rarity.UNCOMMON,
							category: ItemCategory.ITEMS,
							isPremium: false,
							quantity: 1,
							thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/047/493/988/small_2x/hairy-fluffy-cat-playing-png.png'
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
					thumbnail: 'https://png.pngtree.com/png-clipart/20230512/original/pngtree-isolated-cat-on-white-background-png-image_9158356.png'
				},
				{
					name: 'Rustic Coffee Table',
					description: 'A sturdy wooden table for your living room.',
					rarity: Rarity.COMMON,
					category: ItemCategory.BLOCK_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: 'https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-sitting-orange-cat-on-white-background-png-image_7094889.png'
				},
				{
					name: 'Vintage Lamp',
					description: 'A lamp with a vintage design to light up your space.',
					rarity: Rarity.UNCOMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: 'https://pngimg.com/d/cat_PNG50473.png'
				},
				{
					name: 'Knitted Cushion',
					description: 'A handmade cushion for extra comfort.',
					rarity: Rarity.COMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 2,
					thumbnail: 'https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-sitting-orange-cat-on-white-background-png-image_7094889.png'
				},
				{
					name: 'Fireplace Mantel',
					description: 'A decorative mantel for your fireplace.',
					rarity: Rarity.RARE,
					category: ItemCategory.BLOCK_RECIPE,
					isPremium: true,
					quantity: 1,
					thumbnail: 'https://png.pngtree.com/png-clipart/20230512/original/pngtree-isolated-cat-on-white-background-png-image_9158356.png'
				},
				{
					name: 'Wall Art Set',
					description: 'A set of paintings to decorate your walls.',
					rarity: Rarity.UNCOMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/047/493/988/small_2x/hairy-fluffy-cat-playing-png.png'
				},
				{
					name: 'Wool Rug',
					description: 'A soft rug to complete your cozy living room.',
					rarity: Rarity.COMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: 'https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-sitting-orange-cat-on-white-background-png-image_7094889.png'
				},
				{
					name: 'Cozy Living Bundle',
					description: 'A bundle of items to create the perfect cozy living room.',
					rarity: Rarity.EPIC,
					category: ItemCategory.ITEM_RECIPE,
					isPremium: true,
					thumbnail: 'https://pngimg.com/d/cat_PNG50473.png',
					items: [
						{
							name: 'Plaid Blanket',
							description: '',
							rarity: Rarity.UNCOMMON,
							category: ItemCategory.DECORATION_RECIPE,
							isPremium: false,
							quantity: 1,
							thumbnail: 'https://png.pngtree.com/png-clipart/20230512/original/pngtree-isolated-cat-on-white-background-png-image_9158356.png'
						},
						{
							name: 'Rustic Coffee Table',
							description: '',
							rarity: Rarity.COMMON,
							category: ItemCategory.BLOCK_RECIPE,
							isPremium: false,
							quantity: 1,
							thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/047/493/988/small_2x/hairy-fluffy-cat-playing-png.png'
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
					thumbnail: 'https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-sitting-orange-cat-on-white-background-png-image_7094889.png'
				},
				{
					name: 'Icicle Lights',
					description: 'Beautiful lights that resemble icicles.',
					rarity: Rarity.RARE,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: true,
					quantity: 1,
					thumbnail: 'https://png.pngtree.com/png-clipart/20230512/original/pngtree-isolated-cat-on-white-background-png-image_9158356.png'
				},
				{
					name: 'Snowman Decoration',
					description: 'A cheerful snowman to brighten up your yard.',
					rarity: Rarity.COMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/047/493/988/small_2x/hairy-fluffy-cat-playing-png.png'
				},
				{
					name: 'Frosted Windowpanes',
					description: 'Windows with a frosty design.',
					rarity: Rarity.UNCOMMON,
					category: ItemCategory.BLOCK_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: 'https://pngimg.com/d/cat_PNG50473.png'
				},
				{
					name: 'Winter Wreath',
					description: 'A wreath made of pine and holly.',
					rarity: Rarity.COMMON,
					category: ItemCategory.DECORATION_RECIPE,
					isPremium: false,
					quantity: 1,
					thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/047/493/988/small_2x/hairy-fluffy-cat-playing-png.png'
				},
				{
					name: 'Frozen Fountain',
					description: 'A fountain frozen in time.',
					rarity: Rarity.RARE,
					category: ItemCategory.BLOCK_RECIPE,
					isPremium: true,
					quantity: 1,
					thumbnail: 'https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-sitting-orange-cat-on-white-background-png-image_7094889.png'
				},
				{
					name: 'Snowflake Trail',
					description: 'Leave a trail of snowflakes wherever you go.',
					rarity: Rarity.EPIC,
					category: ItemCategory.COSMETIC_TRAIL,
					isPremium: true,
					quantity: 1,
					thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/047/493/988/small_2x/hairy-fluffy-cat-playing-png.png'
				},
				{
					name: 'Winter Wonderland Bundle',
					description: 'A bundle of winter-themed decorations.',
					rarity: Rarity.EPIC,
					category: ItemCategory.ITEM_RECIPE,
					isPremium: true,
					thumbnail: 'https://png.pngtree.com/png-clipart/20230512/original/pngtree-isolated-cat-on-white-background-png-image_9158356.png',
					items: [
						{
							name: 'Snowy Pine Tree',
							description: '',
							rarity: Rarity.UNCOMMON,
							category: ItemCategory.DECORATION_RECIPE,
							isPremium: false,
							quantity: 1,
							thumbnail: 'https://png.pngtree.com/png-clipart/20230512/original/pngtree-isolated-cat-on-white-background-png-image_9158356.png'
						},
						{
							name: 'Icicle Lights',
							description: '',
							rarity: Rarity.RARE,
							category: ItemCategory.DECORATION_RECIPE,
							isPremium: true,
							quantity: 1,
							thumbnail: 'https://static.vecteezy.com/system/resources/thumbnails/047/493/988/small_2x/hairy-fluffy-cat-playing-png.png'
						}
					]
				}
			]
		}
	]
};
