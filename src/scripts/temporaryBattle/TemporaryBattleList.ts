const TemporaryBattleList: { [battleName: string]: TemporaryBattle } = {};

//Kanto Temporary Battles
TemporaryBattleList['Fighting Dojo'] = new TemporaryBattle(
    'Fighting Dojo',
    [
        new GymPokemon('Hitmonlee', 108985, 37),
        new GymPokemon('Hitmonchan', 108985, 37),
    ],
    'Hwa! Arrgh! Beaten!',
    [
        new OneFromManyRequirement([
            new GymBadgeRequirement(BadgeEnums.Rainbow),
            new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Rocket Game Corner')),
        ]),
    ],
    undefined,
    {
        firstTimeRewardFunction: () => {
            BagHandler.gainItem({type: ItemType.item, id: 'Fighting_egg'}, 1);
            Notifier.notify({
                message: 'You were awarded a Fighting Egg for defeating the Fighting Dojo',
                type: NotificationConstants.NotificationOption.success,
                setting: NotificationConstants.NotificationSetting.Dungeons.rare_dungeon_item_found,
            });
        },
    }
);
TemporaryBattleList['Biker Goon 1'] = new TemporaryBattle(
    'Biker Goon 1',
    [
        new GymPokemon('Koffing', 198477, 37),
        new GymPokemon('Grimer', 198477, 37),
    ],
    'Wha... What is this kid?!',
    [new QuestLineStepCompletedRequirement('Bill\'s Errand', 1)],
    undefined,
    {
        displayName: 'Biker Goon',
        imageName: 'Biker Goon',
    }
);
TemporaryBattleList['Biker Goon 2'] = new TemporaryBattle(
    'Biker Goon 2',
    [new GymPokemon('Koffing', 396954, 38)],
    'Stop fooling around!',
    [new QuestLineStepCompletedRequirement('Bill\'s Errand', 1)],
    undefined,
    {
        displayName: 'Biker Goon',
        imageName: 'Biker Goon',
    }
);
TemporaryBattleList['Biker Goon 3'] = new TemporaryBattle(
    'Biker Goon 3',
    [new GymPokemon('Grimer', 396954, 38)],
    '... ... ... ... ... ...',
    [new QuestLineStepCompletedRequirement('Bill\'s Errand', 1)],
    undefined,
    {
        displayName: 'Biker Goon',
        imageName: 'Biker Goon',
    }
);
TemporaryBattleList['Cue Ball Paxton'] = new TemporaryBattle(
    'Cue Ball Paxton',
    [
        new GymPokemon('Koffing', 221664, 39),
        new GymPokemon('Grimer', 221664, 39),
    ],
    'All right, enough! We\'ll leave like you wanted! We\'ll be happy to see the last of this boring island!',
    [
        new TemporaryBattleRequirement('Biker Goon 1'),
        new TemporaryBattleRequirement('Biker Goon 2'),
        new TemporaryBattleRequirement('Biker Goon 3'),
    ]
);

// Johto Temporary Battles
TemporaryBattleList['Spiky-eared Pichu'] = new TemporaryBattle(
    'Spiky-eared Pichu',
    [new GymPokemon('Spiky-eared Pichu', 3178500, 20)],
    '',
    [new QuestLineStepCompletedRequirement('Unfinished Business', 6)],
    undefined,
    {
        displayName: 'Strange Pichu',
    }
);
TemporaryBattleList['Rocket Boss Giovanni'] = new TemporaryBattle(
    'Rocket Boss Giovanni',
    [
        new GymPokemon('Nidoking', 861275, 42),
        new GymPokemon('Murkrow', 861275, 43),
        new GymPokemon('Nidoqueen', 861275, 46),
        new GymPokemon('Kangaskhan', 875275, 40),
    ],
    'What in the world are you? How this is possible...? How can a kid like you manage to destroy my dream once again? The precious dream of Team Rocket has become little more than an illusion...',
    [new QuestLineStepCompletedRequirement('Unfinished Business', 9)]
);

// Sinnoh Temporary Battles
TemporaryBattleList['Galactic Boss Cyrus'] = new TemporaryBattle(
    'Galactic Boss Cyrus',
    [
        new GymPokemon('Sneasel', 3255000, 34),
        new GymPokemon('Golbat', 3460000, 34),
        new GymPokemon('Murkrow', 3665000, 36),
    ],
    'Impressive. Your prowess is notable.',
    [new QuestLineStepCompletedRequirement('A new world', 2)]
);

// Kalos Temporary Battles
TemporaryBattleList.AZ = new TemporaryBattle(
    'AZ',
    [
        new GymPokemon('Torkoal', 247996000, 60),
        new GymPokemon('Golurk', 247996000, 60),
        new GymPokemon('Sigilyph', 247996000, 60),
    ],
    'Thank you very much for battling with me. Now I finally feel free…',
    [new GymBadgeRequirement(BadgeEnums.Elite_KalosChampion)],
    undefined,
    {
        firstTimeRewardFunction: () => {
            App.game.party.gainPokemonById(670.05);
        },
    }
);
TemporaryBattleList['Ash Ketchum Kanto'] = new TemporaryBattle(
    'Ash Ketchum Kanto',
    [
        new GymPokemon('Pikachu (Partner Cap)', 123998000, 58),
        new GymPokemon('Pidgeot', 123998000, 56),
        new GymPokemon('Bulbasaur', 123998000, 56),
        new GymPokemon('Charizard', 123998000, 60),
        new GymPokemon('Squirtle', 123998000, 62),
        new GymPokemon('Muk', 123998000, 62),
    ],
    'That was a fun battle!',
    [new QuestLineStartedRequirement('The New Kid')],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Pallet Town',
        imageName: 'Ash Ketchum',
    }
);
TemporaryBattleList['Ash Ketchum Johto'] = new TemporaryBattle(
    'Ash Ketchum Johto',
    [
        new GymPokemon('Pikachu (Partner Cap)', 123998000, 58),
        new GymPokemon('Heracross', 123998000, 56),
        new GymPokemon('Noctowl', 123998000, 56),
        new GymPokemon('Bayleef', 123998000, 60),
        new GymPokemon('Cyndaquil', 123998000, 62),
        new GymPokemon('Totodile', 123998000, 62),
    ],
    'Don\'t I know you from somewhere?',
    [new QuestLineStepCompletedRequirement('The New Kid', 0), new RouteKillRequirement(10, GameConstants.Region.johto, 48)],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Cianwood City',
        imageName: 'Ash Ketchum',
    }
);
TemporaryBattleList['Ash Ketchum Hoenn'] = new TemporaryBattle(
    'Ash Ketchum Hoenn',
    [
        new GymPokemon('Pikachu (Partner Cap)', 123998000, 58),
        new GymPokemon('Swellow', 123998000, 56),
        new GymPokemon('Grovyle', 123998000, 56),
        new GymPokemon('Torkoal', 123998000, 62),
        new GymPokemon('Corphish', 123998000, 60),
        new GymPokemon('Glalie', 123998000, 62),
    ],
    'That was a nice rematch. You sure are a strong Pokémon trainer! I\'ll beat you next time!',
    [new QuestLineStepCompletedRequirement('The New Kid', 1)],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Lilycove City',
        imageName: 'Ash Ketchum',
    }
);
TemporaryBattleList['Ash Ketchum Sinnoh'] = new TemporaryBattle(
    'Ash Ketchum Sinnoh',
    [
        new GymPokemon('Pikachu (Partner Cap)', 123998000, 58),
        new GymPokemon('Staraptor', 123998000, 56),
        new GymPokemon('Torterra', 123998000, 56),
        new GymPokemon('Infernape', 123998000, 60),
        new GymPokemon('Buizel', 123998000, 62),
        new GymPokemon('Gible', 123998000, 62),
    ],
    'Wow, these battles are intense. It\'s getting hard to keep up with you... I think I need a break.',
    [new QuestLineStepCompletedRequirement('The New Kid', 2), new RouteKillRequirement(10, GameConstants.Region.sinnoh, 226)],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Survival Area',
        imageName: 'Ash Ketchum',
    }
);
TemporaryBattleList['Ash Ketchum Unova'] = new TemporaryBattle(
    'Ash Ketchum Unova',
    [
        new GymPokemon('Pikachu (Partner Cap)', 123998000, 58),
        new GymPokemon('Unfezant', 123998000, 56),
        new GymPokemon('Snivy', 123998000, 62),
        new GymPokemon('Pignite', 123998000, 60),
        new GymPokemon('Oshawott', 123998000, 56),
        new GymPokemon('Krookodile', 123998000, 62),
    ],
    'Hey, what gives? I was just trying to relax here!',
    [new QuestLineStepCompletedRequirement('The New Kid', 3)],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Mistralton City',
        imageName: 'Ash Ketchum',
    }
);
TemporaryBattleList['Ash Ketchum Kalos'] = new TemporaryBattle(
    'Ash Ketchum Kalos',
    [
        new GymPokemon('Pikachu (Partner Cap)', 123998000, 58),
        new GymPokemon('Talonflame', 123998000, 56),
        new GymPokemon('Hawlucha', 123998000, 56),
        new GymPokemon('Goodra', 123998000, 60),
        new GymPokemon('Noivern', 123998000, 62),
        new GymPokemon('Ash-Greninja', 123998000, 62),
    ],
    'I forgive you for chasing me around. I\'m going to take some time off with a long vacation on a tropical island! Will you take care of my Greninja for me? He has a special Bond while in Battle with his trainer.',
    [new QuestLineStepCompletedRequirement('The New Kid', 4)],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Kiloude City',
        imageName: 'Ash Ketchum',
    }
);

//Alola Temporary Battles
TemporaryBattleList['Ultra Wormhole'] = new TemporaryBattle(
    'Ultra Wormhole',
    [new GymPokemon('???', 264590972, 27)],
    'The creature escaped back into the ultra wormhole.',
    [new GymBadgeRequirement(BadgeEnums.RockiumZ)]
);
TemporaryBattleList['Ultra Megalopolis'] = new TemporaryBattle(
    'Ultra Megalopolis',
    [new GymPokemon('Necrozma (Ultra)', 282601920, 60)],
    'Necrozma fled.',
    [new GymBadgeRequirement(BadgeEnums.DarkiniumZ)],
    undefined,
    {
        firstTimeRewardFunction: () => {
            App.game.quests.getQuestLine('Mina\'s Trial').beginQuest();
        },
    }
);
TemporaryBattleList['Captain Mina'] = new TemporaryBattle(
    'Captain Mina',
    [
        new GymPokemon('Mawile', 90200640, 51),
        new GymPokemon('Granbull', 90200640, 51),
        new GymPokemon('Ribombee', 102200640, 51),
    ],
    'Woah! I\'m shocked at your strength!',
    [new TemporaryBattleRequirement('Ultra Megalopolis')]
);
TemporaryBattleList['Captain Ilima'] = new TemporaryBattle(
    'Captain Ilima',
    [
        new GymPokemon('Gumshoos', 90200640, 51),
        new GymPokemon('Smeargle', 90200640, 51),
        new GymPokemon('Komala', 102200640, 51),
    ],
    'Yes! You have emerged victorious!',
    [
        new TemporaryBattleRequirement('Captain Mina'),
        new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Hau\'oli Cemetery')),
    ]
);
TemporaryBattleList['Captain Mallow'] = new TemporaryBattle(
    'Captain Mallow',
    [
        new GymPokemon('Trevenant', 90200640, 51),
        new GymPokemon('Shiinotic', 90200640, 51),
        new GymPokemon('Tsareena', 102200640, 51),
    ],
    'Sure enough, when it comes to you and Pokémon, the quality of the ingredients shines forth!',
    [new TemporaryBattleRequirement('Captain Ilima')]
);
TemporaryBattleList['Captain Lana'] = new TemporaryBattle(
    'Captain Lana',
    [
        new GymPokemon('Lanturn', 90200640, 51),
        new GymPokemon('Cloyster', 90200640, 51),
        new GymPokemon('Araquanid', 102200640, 51),
    ],
    'Well! Once again, you certainly reeled me in.',
    [new TemporaryBattleRequirement('Captain Mallow')]
);
TemporaryBattleList['Captain Kiawe'] = new TemporaryBattle(
    'Captain Kiawe',
    [
        new GymPokemon('Arcanine', 90200640, 51),
        new GymPokemon('Talonflame', 90200640, 51),
        new GymPokemon('Alolan Marowak', 102200640, 51),
    ],
    'Not enough dancing!',
    [new TemporaryBattleRequirement('Captain Lana')]
);
TemporaryBattleList['Captain Sophocles'] = new TemporaryBattle(
    'Captain Sophocles',
    [
        new GymPokemon('Togedemaru', 90200640, 51),
        new GymPokemon('Magnezone', 90200640, 51),
        new GymPokemon('Alolan Golem', 102200640, 51),
    ],
    'I couldn\'t get it done. Don\'t worry about it, my precious Pokémon...',
    [new TemporaryBattleRequirement('Captain Kiawe')]
);
TemporaryBattleList['Kahuna Nanu'] = new TemporaryBattle(
    'Kahuna Nanu',
    [
        new GymPokemon('Sableye', 90200640, 51),
        new GymPokemon('Absol', 90200640, 51),
        new GymPokemon('Alolan Persian', 102200640, 51),
    ],
    '...',
    [new TemporaryBattleRequirement('Captain Sophocles')]
);
TemporaryBattleList.Anabel = new TemporaryBattle(
    'Anabel',
    [
        new GymPokemon('Alakazam', 229464883, 61),
        new GymPokemon('Weavile', 229464883, 61),
        new GymPokemon('Mismagius', 229464883, 61),
        new GymPokemon('Salamence', 229464883, 61),
        new GymPokemon('Snorlax', 234464883, 61),
    ],
    'Oh you\'re good! You might just have a shot, here are some Beast Balls. Go hunt down those strange Ultra Beasts! If you need more Beast Balls, you can buy them here.',
    [new QuestLineStepCompletedRequirement('Ultra Beast Hunt', 0)]
);
TemporaryBattleList['Captain Mina UB'] = new TemporaryBattle(
    'Captain Mina UB',
    [
        new GymPokemon('Klefki', 239464883, 61),
        new GymPokemon('Granbull', 239464883, 61),
        new GymPokemon('Shiinotic', 239464883, 61),
        new GymPokemon('Wigglytuff', 239464883, 61),
        new GymPokemon('Ribombee', 244464883, 61),
    ],
    'Your strength is still shocking!',
    [new QuestLineStepCompletedRequirement('Ultra Beast Hunt', 7)],
    undefined,
    {
        displayName: 'Captain Mina',
        imageName: 'Captain Mina',
    }
);
TemporaryBattleList['Kahuna Nanu UB'] = new TemporaryBattle(
    'Kahuna Nanu UB',
    [
        new GymPokemon('Sableye', 249464883, 63),
        new GymPokemon('Krookodile', 249464883, 63),
        new GymPokemon('Honchkrow', 249464883, 63),
        new GymPokemon('Absol', 249464883, 63),
        new GymPokemon('Alolan Persian', 254464883, 63),
    ],
    'I had to be sure. Sure that you\'re ready for what\'s coming...',
    [new QuestLineStepCompletedRequirement('Ultra Beast Hunt', 13)],
    undefined,
    {
        displayName: 'Kahuna Nanu',
        imageName: 'Kahuna Nanu',
    }
);
TemporaryBattleList['Ash Ketchum Alola'] = new TemporaryBattle(
    'Ash Ketchum Alola',
    [
        new GymPokemon('Pikachu (Partner Cap)', 182908638, 58),
        new GymPokemon('Rowlet', 182908638, 56),
        new GymPokemon('Incineroar', 182908638, 56),
        new GymPokemon('Lycanroc (Dusk)', 182908638, 60),
        new GymPokemon('Naganadel', 182908638, 62),
        new GymPokemon('Melmetal', 182908638, 62),
    ],
    'Thanks for battling with me again! I\'ve reignited my passion to battle after a nice, long break! I have no idea where I keep getting all these hats, but I have too many. Here, take this one for your Pikachu. It can help you grow together as partners!',
    [new QuestLineCompletedRequirement('The New Kid'), new RouteKillRequirement(10, GameConstants.Region.alola, 30)],
    undefined,
    {
        displayName: 'Ash Ketchum',
        returnTown: 'Seafolk Village',
        imageName: 'Ash Ketchum',
        firstTimeRewardFunction: () => {
            App.game.party.gainPokemonById(25.07);
        },
    }
);

TemporaryBattleList['Rainbow Rocket Grunt 1'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 1',
    [
        new GymPokemon('Sandshrew', 60000000, 11),
        new GymPokemon('Rattata', 60000000, 11),
        new GymPokemon('Zubat', 60000000, 11),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Hearthome City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 2'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 2',
    [
        new GymPokemon('Zubat', 60000000, 11),
        new GymPokemon('Ekans', 60000000, 11),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Lilycove City',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 3'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 3',
    [
        new GymPokemon('Rattata', 60000000, 13),
        new GymPokemon('Sandshrew', 60000000, 13),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Lavender Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 4'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 4',
    [
        new GymPokemon('Rattata', 60000000, 13),
        new GymPokemon('Zubat', 60000000, 13),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 5'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 5',
    [
        new GymPokemon('Machop', 60000000, 17),
        new GymPokemon('Drowzee', 60000000, 17),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Dendemille Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 6'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 6',
    [
        new GymPokemon('Raticate', 60000000, 11),
        new GymPokemon('Zubat', 60000000, 11),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 7'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 7',
    [
        new GymPokemon('Raticate', 60000000, 21),
        new GymPokemon('Raticate', 60000000, 21),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 8'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 8',
    [
        new GymPokemon('Rattata', 60000000, 19),
        new GymPokemon('Raticate', 60000000, 19),
        new GymPokemon('Raticate', 60000000, 19),
        new GymPokemon('Rattata', 60000000, 19),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Laverre City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 9'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 9',
    [
        new GymPokemon('Grimer', 60000000, 20),
        new GymPokemon('Koffing', 60000000, 20),
        new GymPokemon('Koffing', 60000000, 20),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 10'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 10',
    [
        new GymPokemon('Grimer', 60000000, 22),
        new GymPokemon('Koffing', 60000000, 22),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Goldenrod City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 11'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 11',
    [
        new GymPokemon('Zubat', 60000000, 17),
        new GymPokemon('Koffing', 60000000, 17),
        new GymPokemon('Grimer', 60000000, 17),
        new GymPokemon('Zubat', 60000000, 17),
        new GymPokemon('Raticate', 60000000, 17),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Santalune City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 12'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 12',
    [
        new GymPokemon('Machop', 60000000, 21),
        new GymPokemon('Machop', 60000000, 21),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Royal Avenue',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 13'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 13',
    [
        new GymPokemon('Rattata', 60000000, 20),
        new GymPokemon('Raticate', 60000000, 20),
        new GymPokemon('Drowzee', 60000000, 20),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Indigo Plateau Kanto',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 14'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 14',
    [
        new GymPokemon('Koffing', 60000000, 21),
        new GymPokemon('Zubat', 60000000, 21),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Castelia City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 15'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 15',
    [
        new GymPokemon('Sandshrew', 60000000, 23),
        new GymPokemon('Ekans', 60000000, 23),
        new GymPokemon('Sandslash', 60000000, 23),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 16'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 16',
    [
        new GymPokemon('Zubat', 60000000, 25),
        new GymPokemon('Zubat', 60000000, 25),
        new GymPokemon('Golbat', 60000000, 25),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Fight Area',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 17'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 17',
    [
        new GymPokemon('Koffing', 60000000, 26),
        new GymPokemon('Drowzee', 60000000, 26),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Two Island',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 18'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 18',
    [
        new GymPokemon('Zubat', 60000000, 23),
        new GymPokemon('Rattata', 60000000, 23),
        new GymPokemon('Raticate', 60000000, 23),
        new GymPokemon('Zubat', 60000000, 23),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 19'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 19',
    [
        new GymPokemon('Zubat', 60000000, 23),
        new GymPokemon('Rattata', 60000000, 23),
        new GymPokemon('Raticate', 60000000, 23),
        new GymPokemon('Zubat', 60000000, 23),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Opelucid City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 20'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 20',
    [
        new GymPokemon('Golbat', 60000000, 25),
        new GymPokemon('Zubat', 60000000, 25),
        new GymPokemon('Zubat', 60000000, 25),
        new GymPokemon('Raticate', 60000000, 25),
        new GymPokemon('Zubat', 60000000, 25),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Azalea Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 21'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 21',
    [
        new GymPokemon('Cubone', 60000000, 29),
        new GymPokemon('Zubat', 60000000, 29),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Celadon City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 22'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 22',
    [
        new GymPokemon('Raticate', 60000000, 28),
        new GymPokemon('Hypno', 60000000, 28),
        new GymPokemon('Raticate', 60000000, 28),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Iki Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 23'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 23',
    [
        new GymPokemon('Ekans', 60000000, 28),
        new GymPokemon('Zubat', 60000000, 28),
        new GymPokemon('Cubone', 60000000, 28),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Mossdeep City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 24'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 24',
    [new GymPokemon('Hypno', 60000000, 33)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 25'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 25',
    [new GymPokemon('Arbok', 60000000, 33)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Vermilion City',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 26'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 26',
    [
        new GymPokemon('Machop', 60000000, 29),
        new GymPokemon('Machoke', 60000000, 29),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 27'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 27',
    [
        new GymPokemon('Cubone', 60000000, 29),
        new GymPokemon('Cubone', 60000000, 29),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 28'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 28',
    [
        new GymPokemon('Raticate', 60000000, 26),
        new GymPokemon('Zubat', 60000000, 26),
        new GymPokemon('Golbat', 60000000, 26),
        new GymPokemon('Zubat', 60000000, 26),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Pewter City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 29'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 29',
    [
        new GymPokemon('Sandshrew', 60000000, 29),
        new GymPokemon('Sandslash', 60000000, 29),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 30'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 30',
    [
        new GymPokemon('Raticate', 60000000, 26),
        new GymPokemon('Golbat', 60000000, 26),
        new GymPokemon('Arbok', 60000000, 26),
        new GymPokemon('Koffing', 60000000, 26),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Castelia City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 31'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 31',
    [
        new GymPokemon('Weezing', 60000000, 28),
        new GymPokemon('Golbat', 60000000, 28),
        new GymPokemon('Koffing', 60000000, 28),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Ambrette Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 32'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 32',
    [
        new GymPokemon('Golbat', 60000000, 28),
        new GymPokemon('Drowzee', 60000000, 28),
        new GymPokemon('Hypno', 60000000, 28),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Dewford Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 33'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 33',
    [
        new GymPokemon('Drowzee', 60000000, 28),
        new GymPokemon('Grimer', 60000000, 28),
        new GymPokemon('Machop', 60000000, 28),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 34'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 34',
    [new GymPokemon('Machoke', 60000000, 33)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Three Island',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 35'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 35',
    [
        new GymPokemon('Rattata', 60000000, 25),
        new GymPokemon('Zubat', 60000000, 25),
        new GymPokemon('Ekans', 60000000, 25),
        new GymPokemon('Rattata', 60000000, 25),
        new GymPokemon('Rattata', 60000000, 25),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Sunyshore City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 36'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 36',
    [
        new GymPokemon('Cubone', 60000000, 32),
        new GymPokemon('Drowzee', 60000000, 32),
        new GymPokemon('Marowak', 60000000, 32),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Blackthorn City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 37'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 37',
    [
        new GymPokemon('Cubone', 60000000, 37),
        new GymPokemon('Marowak', 60000000, 37),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 38'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 38',
    [
        new GymPokemon('Rattata', 60000000, 35),
        new GymPokemon('Raticate', 60000000, 35),
        new GymPokemon('Sandshrew', 60000000, 35),
        new GymPokemon('Sandslash', 60000000, 35),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Floaroma Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 39'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 39',
    [
        new GymPokemon('Muk', 60000000, 48),
        new GymPokemon('Golbat', 60000000, 48),
        new GymPokemon('Raticate', 60000000, 48),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 40'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 40',
    [
        new GymPokemon('Rattata', 60000000, 48),
        new GymPokemon('Grimer', 60000000, 48),
        new GymPokemon('Muk', 60000000, 48),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 41'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 41',
    [
        new GymPokemon('Ekans', 60000000, 48),
        new GymPokemon('Gloom', 60000000, 48),
        new GymPokemon('Gloom', 60000000, 48),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Tapu Village',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 42'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 42',
    [
        new GymPokemon('Koffing', 60000000, 49),
        new GymPokemon('Weezing', 60000000, 49),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Indigo Plateau Kanto',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 43'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 43',
    [
        new GymPokemon('Houndour', 60000000, 49),
        new GymPokemon('Houndour', 60000000, 49),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 44'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 44',
    [
        new GymPokemon('Machop', 60000000, 48),
        new GymPokemon('Machop', 60000000, 48),
        new GymPokemon('Machoke', 60000000, 48),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 45'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 45',
    [
        new GymPokemon('Hypno', 60000000, 48),
        new GymPokemon('Hypno', 60000000, 48),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Cianwood City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 46'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 46',
    [
        new GymPokemon('Rattata', 60000000, 9),
        new GymPokemon('Rattata', 60000000, 9),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Pal Park',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 47'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 47',
    [
        new GymPokemon('Rattata', 60000000, 7),
        new GymPokemon('Zubat', 60000000, 9),
        new GymPokemon('Zubat', 60000000, 9),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 48'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 48',
    [new GymPokemon('Koffing', 60000000, 12)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 49'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 49',
    [
        new GymPokemon('Rattata', 60000000, 16),
        new GymPokemon('Rattata', 60000000, 16),
        new GymPokemon('Rattata', 60000000, 16),
        new GymPokemon('Rattata', 60000000, 16),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Olivine City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 50'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 50',
    [
        new GymPokemon('Drowzee', 60000000, 17),
        new GymPokemon('Zubat', 60000000, 19),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Coumarine City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 51'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 51',
    [
        new GymPokemon('Zubat', 60000000, 17),
        new GymPokemon('Grimer', 60000000, 19),
        new GymPokemon('Rattata', 60000000, 19),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Striaton City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 52'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 52',
    [
        new GymPokemon('Venonat', 60000000, 18),
        new GymPokemon('Venonat', 60000000, 18),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 53'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 53',
    [new GymPokemon('Golbat', 60000000, 18)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Ecruteak City',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 54'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 54',
    [
        new GymPokemon('Rattata', 60000000, 17),
        new GymPokemon('Rattata', 60000000, 17),
        new GymPokemon('Zubat', 60000000, 17),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Oldale Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 55'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 55',
    [
        new GymPokemon('Drowzee', 60000000, 18),
        new GymPokemon('Grimer', 60000000, 20),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 56'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 56',
    [
        new GymPokemon('Ekans', 60000000, 18),
        new GymPokemon('Gloom', 60000000, 18),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Sandgem Town',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 57'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 57',
    [new GymPokemon('Raticate', 60000000, 19)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Cherrygrove City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 58'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 58',
    [
        new GymPokemon('Rattata', 60000000, 21),
        new GymPokemon('Rattata', 60000000, 21),
        new GymPokemon('Rattata', 60000000, 21),
        new GymPokemon('Rattata', 60000000, 21),
        new GymPokemon('Rattata', 60000000, 21),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 59'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 59',
    [
        new GymPokemon('Grimer', 60000000, 23),
        new GymPokemon('Grimer', 60000000, 23),
        new GymPokemon('Muk', 60000000, 25),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Mahogany Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 60'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 60',
    [
        new GymPokemon('Zubat', 60000000, 26),
        new GymPokemon('Zubat', 60000000, 26),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 61'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 61',
    [
        new GymPokemon('Koffing', 60000000, 23),
        new GymPokemon('Zubat', 60000000, 23),
        new GymPokemon('Rattata', 60000000, 23),
        new GymPokemon('Grimer', 60000000, 23),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 62'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 62',
    [new GymPokemon('Weezing', 60000000, 26)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Undella Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 63'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 63',
    [
        new GymPokemon('Raticate', 60000000, 24),
        new GymPokemon('Koffing', 60000000, 26),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Violet City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 64'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 64',
    [new GymPokemon('Rattata', 60000000, 27)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Floccesy Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 65'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 65',
    [
        new GymPokemon('Muk', 60000000, 23),
        new GymPokemon('Koffing', 60000000, 23),
        new GymPokemon('Rattata', 60000000, 25),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Nimbasa City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 66'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 66',
    [
        new GymPokemon('Koffing', 60000000, 24),
        new GymPokemon('Muk', 60000000, 24),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Viridian City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 67'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 67',
    [
        new GymPokemon('Gloom', 60000000, 25),
        new GymPokemon('Gloom', 60000000, 25),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 68'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 68',
    [
        new GymPokemon('Raticate', 60000000, 24),
        new GymPokemon('Golbat', 60000000, 24),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Paniola Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 69'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 69',
    [
        new GymPokemon('Grimer', 60000000, 26),
        new GymPokemon('Weezing', 60000000, 23),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Rustboro City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 70'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 70',
    [
        new GymPokemon('Koffing', 60000000, 25),
        new GymPokemon('Koffing', 60000000, 25),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Shalour City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 71'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 71',
    [
        new GymPokemon('Koffing', 60000000, 25),
        new GymPokemon('Koffing', 60000000, 25),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Sootopolis City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 72'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 72',
    [
        new GymPokemon('Zubat', 60000000, 22),
        new GymPokemon('Golbat', 60000000, 22),
        new GymPokemon('Grimer', 60000000, 22),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 73'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 73',
    [
        new GymPokemon('Zubat', 60000000, 22),
        new GymPokemon('Golbat', 60000000, 22),
        new GymPokemon('Grimer', 60000000, 22),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Battle Frontier',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 74'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 74',
    [new GymPokemon('Voltorb', 60000000, 29)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Veilstone City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 75'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 75',
    [
        new GymPokemon('Rattata', 60000000, 29),
        new GymPokemon('Voltorb', 60000000, 29),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Nuvema Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 76'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 76',
    [
        new GymPokemon('Voltorb', 60000000, 33),
        new GymPokemon('Voltorb', 60000000, 33),
        new GymPokemon('Voltorb', 60000000, 33),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Indigo Plateau Johto',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 77'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 77',
    [
        new GymPokemon('Koffing', 60000000, 33),
        new GymPokemon('Electrode', 60000000, 33),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Humilau City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 78'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 78',
    [
        new GymPokemon('Gastly', 60000000, 33),
        new GymPokemon('Persian', 60000000, 33),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 79'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 79',
    [new GymPokemon('Persian', 60000000, 33)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 80'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 80',
    [
        new GymPokemon('Ekans', 60000000, 100),
        new GymPokemon('Drowzee', 60000000, 100),
        new GymPokemon('Grimer', 60000000, 100),
        new GymPokemon('Poliwag', 60000000, 100),
        new GymPokemon('Omanyte', 60000000, 100),
        new GymPokemon('Nidoran(F)', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Mistralton City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 81'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 81',
    [
        new GymPokemon('Hypno', 60000000, 100),
        new GymPokemon('Poliwhirl', 60000000, 100),
        new GymPokemon('Sandshrew', 60000000, 100),
        new GymPokemon('Koffing', 60000000, 100),
        new GymPokemon('Nidorina', 60000000, 100),
        new GymPokemon('Muk', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Pastoria City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 82'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 82',
    [
        new GymPokemon('Weezing', 60000000, 100),
        new GymPokemon('Nidoqueen', 60000000, 100),
        new GymPokemon('Arbok', 60000000, 100),
        new GymPokemon('Onix', 60000000, 100),
        new GymPokemon('Sandslash', 60000000, 100),
        new GymPokemon('Omastar', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Snowpoint City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 83'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 83',
    [
        new GymPokemon('Jynx', 60000000, 100),
        new GymPokemon('Golem', 60000000, 100),
        new GymPokemon('Golbat', 60000000, 100),
        new GymPokemon('Aerodactyl', 60000000, 100),
        new GymPokemon('Persian', 60000000, 100),
        new GymPokemon('Victreebel', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Konikoni City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 84'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 84',
    [
        new GymPokemon('Ekans', 60000000, 100),
        new GymPokemon('Graveler', 60000000, 100),
        new GymPokemon('Grimer', 60000000, 100),
        new GymPokemon('Nidoran(F)', 60000000, 100),
        new GymPokemon('Horsea', 60000000, 100),
        new GymPokemon('Goldeen', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Lumiose City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 85'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 85',
    [
        new GymPokemon('Kabuto', 60000000, 100),
        new GymPokemon('Omanyte', 60000000, 100),
        new GymPokemon('Golem', 60000000, 100),
        new GymPokemon('Rhyhorn', 60000000, 100),
        new GymPokemon('Onix', 60000000, 100),
        new GymPokemon('Muk', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 86'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 86',
    [
        new GymPokemon('Weezing', 60000000, 100),
        new GymPokemon('Rhydon', 60000000, 100),
        new GymPokemon('Clefable', 60000000, 100),
        new GymPokemon('Tentacruel', 60000000, 100),
        new GymPokemon('Dewgong', 60000000, 100),
        new GymPokemon('Cloyster', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 87'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 87',
    [
        new GymPokemon('Nidoking', 60000000, 100),
        new GymPokemon('Golem', 60000000, 100),
        new GymPokemon('Slowbro', 60000000, 100),
        new GymPokemon('Sandslash', 60000000, 100),
        new GymPokemon('Vaporeon', 60000000, 100),
        new GymPokemon('Weezing', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Fortree City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 88'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 88',
    [
        new GymPokemon('Golbat', 60000000, 100),
        new GymPokemon('Raticate', 60000000, 100),
        new GymPokemon('Persian', 60000000, 100),
        new GymPokemon('Moltres', 60000000, 100),
        new GymPokemon('Dodrio', 60000000, 100),
        new GymPokemon('Parasect', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Canalave City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 89'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 89',
    [
        new GymPokemon('Golbat', 60000000, 100),
        new GymPokemon('Raticate', 60000000, 100),
        new GymPokemon('Persian', 60000000, 100),
        new GymPokemon('Kangaskhan', 60000000, 100),
        new GymPokemon('Dodrio', 60000000, 100),
        new GymPokemon('Parasect', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Mauville City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 90'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 90',
    [
        new GymPokemon('Geodude', 60000000, 100),
        new GymPokemon('Koffing', 60000000, 100),
        new GymPokemon('Pineco', 60000000, 100),
        new GymPokemon('Graveler', 60000000, 100),
        new GymPokemon('Weezing', 60000000, 100),
        new GymPokemon('Electrode', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 91'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 91',
    [
        new GymPokemon('Weezing', 60000000, 100),
        new GymPokemon('Electrode', 60000000, 100),
        new GymPokemon('Cloyster', 60000000, 100),
        new GymPokemon('Sudowoodo', 60000000, 100),
        new GymPokemon('Forretress', 60000000, 100),
        new GymPokemon('Golem', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Eterna City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 92'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 92',
    [
        new GymPokemon('Murkrow', 60000000, 100),
        new GymPokemon('Drowzee', 60000000, 100),
        new GymPokemon('Spinarak', 60000000, 100),
        new GymPokemon('Dunsparce', 60000000, 100),
        new GymPokemon('Zubat', 60000000, 100),
        new GymPokemon('Houndour', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Hau\'oli City',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 93'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 93',
    [
        new GymPokemon('Houndour', 60000000, 100),
        new GymPokemon('Shuckle', 60000000, 100),
        new GymPokemon('Azumarill', 60000000, 100),
        new GymPokemon('Shellder', 60000000, 100),
        new GymPokemon('Onix', 60000000, 100),
        new GymPokemon('Dewgong', 60000000, 100),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 94'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 94',
    [
        new GymPokemon('Arbok', 60000000, 50),
        new GymPokemon('Raticate', 60000000, 50),
        new GymPokemon('Golbat', 60000000, 50),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Aquacorde Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 95'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 95',
    [new GymPokemon('Primeape', 60000000, 61)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Fallarbor Town',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 96'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 96',
    [new GymPokemon('Haunter', 60000000, 61)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Professor Kukui\'s Lab',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 97'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 97',
    [new GymPokemon('Fearow', 60000000, 62)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Fuschia City',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 98'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 98',
    [
        new GymPokemon('Tentacruel', 60000000, 62),
        new GymPokemon('Persian', 60000000, 62),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Cerulean City',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 99'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 99',
    [new GymPokemon('Tentacruel', 60000000, 62)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Malie City',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 100'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 100',
    [
        new GymPokemon('Hypno', 60000000, 62),
        new GymPokemon('Primeape', 60000000, 62),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Heahea City',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 101'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 101',
    [
        new GymPokemon('Arbok', 60000000, 62),
        new GymPokemon('Golbat', 60000000, 62),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Snowbelle City',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 102'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 102',
    [
        new GymPokemon('Muk', 60000000, 62),
        new GymPokemon('Fearow', 60000000, 62),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Altar of the Sunne and Moone',
        imageName: 'Team Rainbow Rocket Grunt (male)',
    }
);
TemporaryBattleList['Rainbow Rocket Grunt 103'] = new TemporaryBattle(
    'Rainbow Rocket Grunt 103',
    [new GymPokemon('Muk', 60000000, 62)],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [
        new QuestLineStepCompletedRequirement('Let\'s Go, Meltan!', 9),
        new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0, GameConstants.AchievementOption.less ),
    ],
    undefined,
    {
        displayName: 'Rainbow Rocket Grunt',
        returnTown: 'Seafolk Village',
        imageName: 'Team Rainbow Rocket Grunt (female)',
    }
);

TemporaryBattleList['Aether Branch Chief Faba'] = new TemporaryBattle(
    'Aether Branch Chief Faba',
    [
        new GymPokemon('Claydol', 60000000, 60),
        new GymPokemon('Bruxish', 60000000, 60),
        new GymPokemon('Hypno', 60000000, 60),
    ],
    'Hmph! I\'ll have you know defeating me won\'t do you any good, anyway.',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 0)]
);

TemporaryBattleList['Team Aqua Leader Archie'] = new TemporaryBattle(
    'Team Aqua Leader Archie',
    [
        new GymPokemon('Mightyena', 60000000, 60),
        new GymPokemon('Crobat', 60000000, 60),
        new GymPokemon('Muk', 60000000, 60),
        new GymPokemon('Sharpedo', 60000000, 60),
        new GymPokemon('Kyogre', 60000000, 60),
    ],
    'You\'ve made your point. I can see you are not one to be trifled with.',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 1)]
);

TemporaryBattleList['Team Magma Leader Maxie'] = new TemporaryBattle(
    'Team Magma Leader Maxie',
    [
        new GymPokemon('Mightyena', 60000000, 60),
        new GymPokemon('Crobat', 60000000, 60),
        new GymPokemon('Weezing', 60000000, 60),
        new GymPokemon('Camerupt', 60000000, 60),
        new GymPokemon('Groudon', 60000000, 60),
    ],
    'I fell behind, but only by an inch.',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 1)]
);

TemporaryBattleList['Team Galactic Leader Cyrus'] = new TemporaryBattle(
    'Team Galactic Leader Cyrus',
    [
        new GymPokemon('Houndoom', 60000000, 60),
        new GymPokemon('Honchkrow', 60000000, 60),
        new GymPokemon('Crobat', 60000000, 60),
        new GymPokemon('Weavile', 60000000, 60),
        new GymPokemon('Dialga', 60000000, 60),
        new GymPokemon('Palkia', 60000000, 60),
    ],
    'Impressive. Your prowess is notable.',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 2)]
);

TemporaryBattleList['Team Flare Leader Lysandre'] = new TemporaryBattle(
    'Team Flare Leader Lysandre',
    [
        new GymPokemon('Mienshao', 60000000, 60),
        new GymPokemon('Pyroar', 60000000, 60),
        new GymPokemon('Honchkrow', 60000000, 60),
        new GymPokemon('Mega Gyarados', 60000000, 60),
        new GymPokemon('Xerneas', 60000000, 60),
        new GymPokemon('Yveltal', 60000000, 60),
    ],
    'I can feel the fire of your convictions burning deep within your heart!',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 3)]
);

TemporaryBattleList['Team Plasma Leader Ghetsis'] = new TemporaryBattle(
    'Team Plasma Leader Ghetsis',
    [
        new GymPokemon('Cofagrigus', 60000000, 60),
        new GymPokemon('Bouffalant', 60000000, 60),
        new GymPokemon('Bisharp', 60000000, 60),
        new GymPokemon('Hydreigon', 60000000, 60),
        new GymPokemon('Zekrom', 60000000, 60),
        new GymPokemon('Reshiram', 60000000, 60),
    ],
    'I couldn\'t have been defeated by some random Trainer from who knows where!',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 4)]
);

TemporaryBattleList['Team Rainbow Leader Giovanni'] = new TemporaryBattle(
    'Team Rainbow Leader Giovanni',
    [
        new GymPokemon('Dugtrio', 60000000, 60),
        new GymPokemon('Nidoking', 60000000, 60),
        new GymPokemon('Nidoqueen', 60000000, 60),
        new GymPokemon('Rhyperior', 60000000, 60),
        // new GymPokemon('Mewtwo', 60000000, 60),
        // new GymPokemon('Mewtwo', 60000000, 60),
        new GymPokemon('Mega Mewtwo X', 60000000, 60),
        new GymPokemon('Mega Mewtwo Y', 60000000, 60),
    ],
    'Ha! That was a truly intense fight!',
    [new QuestLineStepCompletedRequirement('Defeat Rainbow Rocket', 5)]
);

//Galar Temporary Battles
//TODO: Have Hop's starter depend on the players Galar starter

TemporaryBattleList.Hop1 = new TemporaryBattle(
    'Hop1',
    [
        new GymPokemon('Wooloo', 29607662, 3),
        new GymPokemon('Sobble', 30984763, 5),
    ],
    'Well, that was a shock! Guess I know now why Lee thought he should give you a Pokémon, too...',
    [new GymBadgeRequirement(BadgeEnums.Elite_AlolaChampion)],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Postwick',
        imageName: 'Hop',
    }
);
TemporaryBattleList.Mirages = new TemporaryBattle(
    'Mirages',
    [
        new GymPokemon('Zacian (Battle Hero)', 34427515, 70),
        new GymPokemon('Zamazenta (Battle Hero)', 34427515, 70),
    ],
    'The Pokémon fled.',
    [new TemporaryBattleRequirement('Hop1')]
);
TemporaryBattleList.Hop2 = new TemporaryBattle(
    'Hop2',
    [
        new GymPokemon('Wooloo', 82626036, 6),
        new GymPokemon('Rookidee', 82626036, 5),
        new GymPokemon('Sobble', 85208099, 8),
    ],
    'And I even got my Pokéball throw perfect too!',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 2)],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Professor Magnolia\'s House',
        imageName: 'Hop',
    }
);
TemporaryBattleList.Hop3 = new TemporaryBattle(
    'Hop3',
    [
        new GymPokemon('Wooloo', 102249719, 11),
        new GymPokemon('Rookidee', 102249719, 12),
        new GymPokemon('Sobble', 105348195, 14),
    ],
    'Was that really good training? Looks like I\'d better keep my guard up!',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 6)],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Motostoke',
        imageName: 'Hop',
    }
);
TemporaryBattleList.Bede1 = new TemporaryBattle(
    'Bede1',
    [
        new GymPokemon('Solosis', 107930259, 13),
        new GymPokemon('Gothita', 107930259, 15),
        new GymPokemon('Hatenna', 111200873, 16),
    ],
    'I see... Well, that\'s fine. I wasn\'t really trying all that hard anyway.',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Galar Mine'))],
    undefined,
    {
        displayName: 'Pokémon Trainer Bede',
        imageName: 'Bede',
    }
);
TemporaryBattleList.Hop4 = new TemporaryBattle(
    'Hop4',
    [
        new GymPokemon('Wooloo', 145167441, 18),
        new GymPokemon('Corvisquire', 145167441, 19),
        new GymPokemon('Drizzile', 149566454, 21),
    ],
    'We both got ourselves the same Grass Badge, so how come you\'re so much stronger?',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 14)],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Hulbury',
        imageName: 'Hop',
    }
);
TemporaryBattleList.Bede2 = new TemporaryBattle(
    'Bede2',
    [
        new GymPokemon('Solosis', 135596164, 21),
        new GymPokemon('Gothita', 135596164, 22),
        new GymPokemon('Galarian Ponyta', 135596164, 22),
        new GymPokemon('Hatenna', 139970233, 23),
    ],
    'You showed at least a little effort, so I decided I should let you win!',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Galar Mine No. 2'))],
    undefined,
    {
        displayName: 'Pokémon Trainer Bede',
        imageName: 'Bede',
    }
);
TemporaryBattleList.Marnie1 = new TemporaryBattle(
    'Marnie1',
    [
        new GymPokemon('Croagunk', 183113060, 24),
        new GymPokemon('Scraggy', 183113060, 24),
        new GymPokemon('Morpeko', 188661940, 26),
    ],
    'You beat me... Guess you must not be so bad after all, huh?',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 15)],
    undefined,
    {
        displayName: 'Pokémon Trainer Marnie',
        imageName: 'Marnie',
    }
);
TemporaryBattleList.Hop5 = new TemporaryBattle(
    'Hop5',
    [
        new GymPokemon('Cramorant', 184350136, 28),
        new GymPokemon('Toxel', 184350136, 29),
        new GymPokemon('Silicobra', 184350136, 30),
        new GymPokemon('Drizzile', 190296915, 33),
    ],
    'My strategy goes right to pot when I\'ve got all these bad thoughts running through my head...',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 23)],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Stow-on-Side',
        imageName: 'Hop',
    }
);
TemporaryBattleList.Bede3 = new TemporaryBattle(
    'Bede3',
    [
        new GymPokemon('Duosion', 197836220, 32),
        new GymPokemon('Gothorita', 197836220, 32),
        new GymPokemon('Galarian Ponyta', 197836220, 33),
        new GymPokemon('Hattrem', 204218033, 35),
    ],
    'This has to be some kind of mistake. I demand a do-over!',
    [
        new MultiRequirement([
            new GymBadgeRequirement(BadgeEnums.Galar_Fighting),
            new GymBadgeRequirement(BadgeEnums.Galar_Ghost),
        ]),
    ],
    undefined,
    {
        displayName: 'Pokémon Trainer Bede',
        imageName: 'Bede',
        firstTimeRewardFunction: () => {
            App.game.quests.getQuestLine('The Darkest Day').beginQuest();
        },
    }
);
TemporaryBattleList.Hop6 = new TemporaryBattle(
    'Hop6',
    [
        new GymPokemon('Trevenant', 164138786, 34),
        new GymPokemon('Heatmor', 164138786, 34),
        new GymPokemon('Snorlax', 164138786, 35),
        new GymPokemon('Boltund', 164138786, 35),
        new GymPokemon('Inteleon', 169087694, 37),
    ],
    'This is rubbish... My team can\'t perform if I can\'t get my own head straight as their Trainer...',
    [new GymBadgeRequirement(BadgeEnums.Galar_Fairy)],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Motostoke',
        imageName: 'Hop',
    }
);
TemporaryBattleList.Hop7 = new TemporaryBattle(
    'Hop7',
    [
        new GymPokemon('Dubwool', 169633690, 40),
        new GymPokemon('Corviknight', 169633690, 40),
        new GymPokemon('Pincurchin', 169633690, 39),
        new GymPokemon('Snorlax', 169633690, 39),
        new GymPokemon('Inteleon', 174748273, 41),
    ],
    'I still can\'t even beat you, my true rival... But I think I\'m starting to see the light!',
    [
        new MultiRequirement([
            new GymBadgeRequirement(BadgeEnums.Galar_Rock),
            new GymBadgeRequirement(BadgeEnums.Galar_Ice),
        ]),
    ],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        returnTown: 'Circhester',
        imageName: 'Hop',
    }
);
TemporaryBattleList.Marnie2 = new TemporaryBattle(
    'Marnie2',
    [
        new GymPokemon('Liepard', 214035920, 42),
        new GymPokemon('Toxicroak', 214035920, 43),
        new GymPokemon('Scrafty', 214035920, 43),
        new GymPokemon('Morpeko', 220940304, 44),
    ],
    'What\'s with that?! My Pokémon didn\'t get a chance to really do their thing at all. Ugh!',
    [new RouteKillRequirement(10, GameConstants.Region.galar, 30)],
    undefined,
    {
        displayName: 'Pokémon Trainer Marnie',
        returnTown: 'Spikemuth',
        imageName: 'Marnie',
    }
);
TemporaryBattleList.Eternatus = new TemporaryBattle(
    'Eternatus',
    [new GymPokemon('Eternatus', 1560840234, 60)],
    'You defeated Eternatus, but it looks like it\'s not over yet!',
    [new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Energy Plant'))]
);
TemporaryBattleList['The Darkest Day'] = new TemporaryBattle(
    'The Darkest Day',
    [new GymPokemon('Eternamax Eternatus', 1597800902, 60)],
    'You caught Eternatus!',
    [new TemporaryBattleRequirement('Eternatus')],
    undefined,
    {
        firstTimeRewardFunction: () => {
            App.game.party.gainPokemonById(890);
        },
    }
);
TemporaryBattleList.Hop8 = new TemporaryBattle(
    'Hop8',
    [
        new GymPokemon('Dubwool', 372064692, 59),
        new GymPokemon('Pincurchin', 372064692, 59),
        new GymPokemon('Cramorant', 372064692, 58),
        new GymPokemon('Snorlax', 372064692, 58),
        new GymPokemon('Corviknight', 372064692, 58),
        new GymPokemon('Inteleon', 375642238, 60),
    ],
    'I didn\'t expect there to be such a gap between you and me, mate...',
    [
        new MultiRequirement([
            new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Slumbering Weald Shrine')),
            new QuestLineStartedRequirement('Sword and Shield'),
        ]),
    ],
    undefined,
    {
        displayName: 'Pokémon Trainer Hop',
        imageName: 'Hop',
    }
);
TemporaryBattleList.Sordward1 = new TemporaryBattle(
    'Sordward1',
    [
        new GymPokemon('Sirfetch\'d', 443615594, 60),
        new GymPokemon('Golisopod', 443615594, 60),
        new GymPokemon('Doublade', 443615594, 60),
        new GymPokemon('Bisharp', 457925774, 60),
    ],
    'Oh... How can this be? My...my Pokémon...',
    [new TemporaryBattleRequirement('Hop8')],
    undefined,
    {
        displayName: 'Pokémon Trainer Sordward',
        imageName: 'Sordward',
    }
);
TemporaryBattleList.Shielbert1 = new TemporaryBattle(
    'Shielbert1',
    [
        new GymPokemon('Sirfetch\'d', 443615594, 60),
        new GymPokemon('Bronzong', 443615594, 60),
        new GymPokemon('Falinks', 443615594, 60),
        new GymPokemon('Klinklang', 457925774, 60),
    ],
    'Oh... How can this be? My...my Pokémon...',
    [new TemporaryBattleRequirement('Hop8')],
    undefined,
    {
        displayName: 'Pokémon Trainer Shielbert',
        imageName: 'Shielbert',
    }
);
TemporaryBattleList['Rampaging Tsareena'] = new TemporaryBattle(
    'Rampaging Tsareena',
    [new GymPokemon('Tsareena', 1757548771, 60)],
    'The Rampaging Tsareena fainted.',
    [
        new TemporaryBattleRequirement('Sordward1'),
        new TemporaryBattleRequirement('Shielbert1'),
    ]
);
TemporaryBattleList['Rampaging Gyarados'] = new TemporaryBattle(
    'Rampaging Gyarados',
    [new GymPokemon('Gyarados', 1757548771, 60)],
    'The Rampaging Gyarados fainted.',
    [new TemporaryBattleRequirement('Rampaging Tsareena')]
);
TemporaryBattleList['Rampaging Torkoal'] = new TemporaryBattle(
    'Rampaging Torkoal',
    [new GymPokemon('Torkoal', 1757548771, 60)],
    'The Rampaging Torkoal fainted.',
    [new TemporaryBattleRequirement('Rampaging Gyarados')]
);
TemporaryBattleList['Sordward & Shielbert'] = new TemporaryBattle(
    'Sordward & Shielbert',
    [
        new GymPokemon('Golisopod', 99102160, 62),
        new GymPokemon('Bronzong', 99102160, 62),
        new GymPokemon('Doublade', 99102160, 62),
        new GymPokemon('Falinks', 99102160, 62),
        new GymPokemon('Bisharp', 102105255, 62),
        new GymPokemon('Klinklang', 102105255, 62),
    ],
    'Quite the vexing predicament indeed, surely this must be some kind of mistake...',
    [new TemporaryBattleRequirement('Rampaging Torkoal')]
);
TemporaryBattleList['Rampaging Conkeldurr'] = new TemporaryBattle(
    'Rampaging Conkeldurr',
    [new GymPokemon('Conkeldurr', 1917325934, 60)],
    'The Rampaging Conkeldurr fainted.',
    [new TemporaryBattleRequirement('Sordward & Shielbert')]
);
TemporaryBattleList['Rampaging Dusknoir'] = new TemporaryBattle(
    'Rampaging Dusknoir',
    [new GymPokemon('Dusknoir', 1917325934, 60)],
    'The Rampaging Dusknoir fainted.',
    [new TemporaryBattleRequirement('Sordward & Shielbert')]
);
TemporaryBattleList['Gym Leader Bede'] = new TemporaryBattle(
    'Gym Leader Bede',
    [
        new GymPokemon('Mawile', 594371034, 61),
        new GymPokemon('Gardevoir', 594371034, 61),
        new GymPokemon('Galarian Rapidash', 594371034, 62),
        new GymPokemon('Hatterene', 613544294, 63),
    ],
    'Thank you for the battle. I can now accept you as the Champion. It\'s painful to admit, but I\'ve come to realise a few of my weaknesses. But I\'ll keep getting stronger.',
    [
        new TemporaryBattleRequirement('Rampaging Conkeldurr'),
        new TemporaryBattleRequirement('Rampaging Dusknoir'),
    ]
);
TemporaryBattleList['Rampaging Gigalith'] = new TemporaryBattle(
    'Rampaging Gigalith',
    [new GymPokemon('Gigalith', 1917325934, 60)],
    'The Rampaging Gigalith fainted.',
    [new TemporaryBattleRequirement('Gym Leader Bede')]
);
TemporaryBattleList['Rampaging Froslass'] = new TemporaryBattle(
    'Rampaging Froslass',
    [new GymPokemon('Froslass', 1917325934, 60)],
    'The Rampaging Froslass fainted.',
    [new TemporaryBattleRequirement('Gym Leader Bede')]
);
TemporaryBattleList['Gym Leader Marnie'] = new TemporaryBattle(
    'Gym Leader Marnie',
    [
        new GymPokemon('Liepard', 476934822, 59),
        new GymPokemon('Toxicroak', 476934822, 59),
        new GymPokemon('Scrafty', 476934822, 59),
        new GymPokemon('Morpeko', 476934822, 60),
        new GymPokemon('Grimmsnarl', 491314766, 60),
    ],
    'Yeah I lost, but I\'m gonna learn from your battle style and everythin\'!',
    [
        new TemporaryBattleRequirement('Rampaging Gigalith'),
        new TemporaryBattleRequirement('Rampaging Froslass'),
    ]
);
TemporaryBattleList['Rampaging Haxorus'] = new TemporaryBattle(
    'Rampaging Haxorus',
    [new GymPokemon('Haxorus', 2077103093, 60)],
    'The Rampaging Haxorus fainted.',
    [new TemporaryBattleRequirement('Gym Leader Marnie')]
);
TemporaryBattleList.Sordward2 = new TemporaryBattle(
    'Sordward2',
    [
        new GymPokemon('Sirfetch\'d', 554746301, 64),
        new GymPokemon('Golisopod', 554746301, 64),
        new GymPokemon('Doublade', 554746301, 64),
        new GymPokemon('Bisharp', 572641343, 64),
    ],
    'Oho... My noble Pokémon...',
    [new TemporaryBattleRequirement('Rampaging Haxorus')],
    undefined,
    {
        displayName: 'Pokémon Trainer Sordward',
        imageName: 'Sordward',
    }
);
TemporaryBattleList.Shielbert2 = new TemporaryBattle(
    'Shielbert2',
    [
        new GymPokemon('Sirfetch\'d', 554746301, 64),
        new GymPokemon('Bronzong', 554746301, 64),
        new GymPokemon('Falinks', 554746301, 64),
        new GymPokemon('Klinklang', 572641343, 64),
    ],
    'Oho... My noble Pokémon...',
    [new TemporaryBattleRequirement('Rampaging Haxorus')],
    undefined,
    {
        displayName: 'Pokémon Trainer Shielbert',
        imageName: 'Shielbert',
    }
);
TemporaryBattleList['Rampaging Zacian'] = new TemporaryBattle(
    'Rampaging Zacian',
    [new GymPokemon('Zacian (Crowned Sword)', 2357932001, 70)],
    'Zacian fainted.',
    [
        new TemporaryBattleRequirement('Sordward2'),
        new TemporaryBattleRequirement('Shielbert2'),
    ]
);
TemporaryBattleList['Rampaging Zamazenta'] = new TemporaryBattle(
    'Rampaging Zamazenta',
    [new GymPokemon('Zamazenta (Crowned Shield)', 2357932001, 70)],
    'Zamazenta fainted.',
    [
        new TemporaryBattleRequirement('Sordward2'),
        new TemporaryBattleRequirement('Shielbert2'),
    ]
);
TemporaryBattleList.Klara1 = new TemporaryBattle(
    'Klara1',
    [
        new GymPokemon('Venipede', 799982445, 58),
        new GymPokemon('Galarian Slowpoke', 816143704, 60),
    ],
    'Oh, my next Pokémon\'s gonna make short work-- Huh? That was my last one?',
    [new GymBadgeRequirement(BadgeEnums.Elite_GalarChampion)],
    undefined,
    {
        displayName: 'Pokémon Trainer Klara',
        returnTown: 'Armor Station',
        imageName: 'Klara',
    }
);
TemporaryBattleList.Avery1 = new TemporaryBattle(
    'Avery1',
    [
        new GymPokemon('Abra', 799982445, 58),
        new GymPokemon('Galarian Slowpoke', 816143704, 60),
    ],
    'Such strength! I\'m in Psyshock!',
    [new GymBadgeRequirement(BadgeEnums.Elite_GalarChampion)],
    undefined,
    {
        displayName: 'Pokémon Trainer Avery',
        returnTown: 'Armor Station',
        imageName: 'Avery',
    }
);
TemporaryBattleList.Mustard = new TemporaryBattle(
    'Mustard',
    [
        new GymPokemon('Mienfoo', 839981565, 60),
        new GymPokemon('Shinx', 856950891, 60),
    ],
    'That was everything I hoped for and more!',
    [
        new MultiRequirement([
            new RouteKillRequirement(10, GameConstants.Region.galar, 33),
            new QuestLineStartedRequirement('The Dojo\'s Armor'),
        ]),
    ],
    undefined,
    {
        displayName: 'Dojo Master Mustard',
    }
);
TemporaryBattleList.Klara2 = new TemporaryBattle(
    'Klara2',
    [
        new GymPokemon('Galarian Slowpoke', 564237041, 62),
        new GymPokemon('Koffing', 564237041, 62),
        new GymPokemon('Whirlipede', 581335135, 63),
    ],
    'Just what have you got that I don\'t?',
    [
        new MultiRequirement([
            new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Warm-Up Tunnel')),
            new QuestLineStepCompletedRequirement('The Dojo\'s Armor', 1),
        ]),
    ],
    undefined,
    {
        displayName: 'Pokémon Trainer Klara',
        imageName: 'Klara',
    }
);
TemporaryBattleList.Avery2 = new TemporaryBattle(
    'Avery2',
    [
        new GymPokemon('Galarian Slowpoke', 564237041, 62),
        new GymPokemon('Woobat', 564237041, 62),
        new GymPokemon('Kadabra', 581335135, 63),
    ],
    'What a Psystrike to my poor pride...',
    [
        new MultiRequirement([
            new ClearDungeonRequirement(1, GameConstants.getDungeonIndex('Warm-Up Tunnel')),
            new QuestLineStepCompletedRequirement('The Dojo\'s Armor', 1),
        ]),
    ],
    undefined,
    {
        displayName: 'Pokémon Trainer Avery',
        imageName: 'Avery',
    }
);
TemporaryBattleList.Klara3 = new TemporaryBattle(
    'Klara3',
    [
        new GymPokemon('Skorupi', 452051518, 65),
        new GymPokemon('Galarian Weezing', 452051518, 66),
        new GymPokemon('Whirlipede', 452051518, 66),
        new GymPokemon('Galarian Slowbro', 470316225, 67),
    ],
    'But I didn\'t hold back! I gave it everything I\'ve got...',
    [
        new MultiRequirement([
            new TemporaryBattleRequirement('Klara2'),
            new TemporaryBattleRequirement('Avery2'),
        ]),
    ],
    undefined,
    {
        displayName: 'Pokémon Trainer Klara',
        returnTown: 'Master Dojo',
        imageName: 'Klara',
    }
);
TemporaryBattleList.Avery3 = new TemporaryBattle(
    'Avery3',
    [
        new GymPokemon('Galarian Ponyta', 452051518, 65),
        new GymPokemon('Swoobat', 452051518, 66),
        new GymPokemon('Kadabra', 452051518, 66),
        new GymPokemon('Galarian Slowbro', 470316225, 67),
    ],
    'Oh, I should just Imprison myself for this!',
    [
        new MultiRequirement([
            new TemporaryBattleRequirement('Klara2'),
            new TemporaryBattleRequirement('Avery2'),
        ]),
    ],
    undefined,
    {
        displayName: 'Pokémon Trainer Avery',
        returnTown: 'Master Dojo',
        imageName: 'Avery',
    }
);
TemporaryBattleList.Peony = new TemporaryBattle(
    'Peony',
    [
        new GymPokemon('Copperajah', 869380472, 70),
        new GymPokemon('Aggron', 877467733, 70),
    ],
    'Gahahaaa! Look at me, takin\' a thrashin\' from a youngster like you!',
    [new GymBadgeRequirement(BadgeEnums.Elite_GalarChampion)],
    undefined,
    {
        displayName: 'Pokémon Trainer Peony',
    }
);
TemporaryBattleList.Calyrex = new TemporaryBattle(
    'Calyrex',
    [new GymPokemon('Calyrex', 1886555626, 80)],
    'Cracrown crow. Roooooowwwn rown crown.',
    [new QuestLineStepCompletedRequirement('The Crown of Galar', 0)]
);
TemporaryBattleList.Glastrier = new TemporaryBattle(
    'Glastrier',
    [new GymPokemon('Glastrier', 2031393560, 75)],
    'The Pokémon ran away!',
    [new QuestLineStepCompletedRequirement('The Crown of Galar', 4)]
);
TemporaryBattleList.Spectrier = new TemporaryBattle(
    'Spectrier',
    [new GymPokemon('Spectrier', 2031393560, 75)],
    'The Pokémon ran away!',
    [new QuestLineStepCompletedRequirement('The Crown of Galar', 4)]
);
TemporaryBattleList['Dyna Tree Birds'] = new TemporaryBattle(
    'Dyna Tree Birds',
    [
        new GymPokemon('Galarian Articuno', 710987746, 70),
        new GymPokemon('Galarian Zapdos', 710987746, 70),
        new GymPokemon('Galarian Moltres', 710987746, 70),
    ],
    'The legendary birds fled to roam the region.',
    [new QuestLineStepCompletedRequirement('The Birds of the Dyna Tree', 1)]
);
TemporaryBattleList.Regigigas = new TemporaryBattle(
    'Regigigas',
    [new GymPokemon('Regigigas', 2336102594, 100)],
    'The ancient giant was defeated!',
    [new QuestLineStepCompletedRequirement('The Ancient Golems', 7)]
);
