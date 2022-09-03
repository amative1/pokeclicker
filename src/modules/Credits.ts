import Profile from './profile/Profile';
import SeededRand from './utilities/SeededRand';

type Credit = {
    name: string,
    link?: string,
    image?: string,
    resources: Array<string | number>,
};

// Sort alphabetically
export const SpriteCredits: Credit[] = [
    {
        name: 'Beliot419',
        link: 'https://www.deviantart.com/beliot419',
        image: 'https://a.deviantart.net/avatars-big/b/e/beliot419.png',
        resources: [
            'Acerola',
            'Aether Branch Chief Faba',
            'Aether Foundation Employee (female)',
            'Aether Foundation Employee (male)',
            'Aether President Lusamine',
            'Hala',
            'Hapu',
            'Hau',
            'Ilima',
            'Kahili',
            'Kiawe',
            'Lana',
            'Mallow',
            'Mina',
            'Molayne',
            'Nanu',
            'Olivia',
            'Rising Star (male)',
            'Sightseer (female)',
            'Sophocles',
            'Team Skull Boss (guzma)',
            'Youth Athlete (female)',
        ],
        // Notes: Found in spritesheet description: "Feel free to use them, just give me credit."
    },
    {
        name: 'Croak',
        link: 'https://discordapp.com/users/206839451069054976/',
        resources: [
            'Plasma Frigate overworld sprite',
        ],
        // Notes: Made specifically for PokéClicker.
    },
    {
        name: 'Cthulhu Follower',
        link: 'https://discordapp.com/users/303604152733270017/',
        resources: [
            'Higher quality Underground stones',
        ],
        // Notes: Made specifically for PokéClicker.
    },
    {
        name: 'DaleArwin',
        link: 'https://www.deviantart.com/dalearwin',
        resources: [
            'Aether Foundation Employee (masked)',
            'Artist (male)',
            'Brains & Brawn',
            'Dancer (female)',
            'Golfer',
            'Surfer',
            'Team Flare Grunts',
        ],
        // Notes: DaleArwin aka IanWalder, a GitHub contributor to this project, gives his permission
    },
    {
        name: 'Data',
        link: 'https://discordapp.com/users/240607391807307777/',
        resources: [
            'Pokerus Virus key item sprite',
        ],
        // Notes: Made specifically for PokéClicker.
    },
    {
        name: 'DraK4y',
        link: 'https://discordapp.com/users/272336444297707521/',
        image: 'assets/images/profile/trainer-96.png',
        resources: [
            'Team Flare Admin (male)',
            'Team Flare Admin (female)',
            'Team Flare Aliana',
            'Tourist Couple/Bellhop',
        ],
        // Notes: Made specifically for PokéClicker.
    },
    {
        name: 'Drawnamu',
        link: 'https://www.deviantart.com/drawnamu',
        image: 'https://a.deviantart.net/avatars-big/d/r/drawnamu.png',
        resources: [
            'Marnie (Gym Leader)',
            'Mustard (battle pose)',
        ],
        // NOTES: Gives permission to everyone who asks in the comments section of the spritesheet as long as credit is given
    },
    {
        name: 'EmmaRoak',
        link: 'https://www.deviantart.com/emmaroak',
        image: 'https://a.deviantart.net/avatars-big/e/m/emmaroak.png',
        resources: [
            'Blastoise (clone)',
            'Bulbasaur (clone)',
            'Charizard (clone)',
            'Charmander (clone)',
            'Charmeleon (clone)',
            'Ivysaur (clone)',
            'Squirtle (clone)',
            'Venusaur (clone)',
            'Wartortle (clone)',
        ],
        // NOTES: No notes about credit, have messaged asking for permission, awaiting confirmation
    },
    {
        name: 'eugene171',
        link: 'https://discordapp.com/users/356459678965956613',
        resources: [
            'Freeze Mulch',
            'Underground Fossilized Dino',
            'Underground Fossilized Drake',
        ],
        // Notes: Made specifically for PokéClicker.
    },
    {
        name: 'Gnomowladny',
        link: 'https://www.deviantart.com/gnomowladny',
        image: 'https://a.deviantart.net/avatars-big/g/n/gnomowladny.gif',
        resources: [
            'Clemont',
            'Drasna',
            'Korrina',
            'Malva',
            'Onympia',
            'Ramos',
            'Siebold',
            'Team Flare Bryony',
            'Team Flare Xerosic',
            'Valerie',
            'Viola',
            'Wikstrom',
            'Wulfric',
        ],
        // NOTES: Feel free to use it if you like, but don\'t forget to give me credit~!
    },
    {
        name: 'Brumirage, Altthiel, Pujolly, Irpachuza',
        link: 'https://www.smogon.com/forums/threads/revamped-add-sword-and-shield-trainer-avatars-for-everyone.3672829/',
        image: 'https://www.smogon.com/media/zracknel-beta.svg.m.1',
        resources: [
            'Allister',
            'Avery',
            'Bea',
            'Bede',
            'Gym Leader Bede',
            'Gordie',
            'Hop',
            'Kabu',
            'Klara',
            'Leon',
            'Marnie',
            'Master Dojo Student',
            'Melony',
            'Milo',
            'Mustard',
            'Nessa',
            'Oleana',
            'Opal',
            'Peony',
            'Piers',
            'Raihan',
            'Rose',
            'Shielbert',
            'Sordward',
            'Team Yell Grunts',
        ],
        // NOTES: No notes about credit, but is made for public use. Unclear who made what, so credited together
    },
    {
        name: 'HighOnMushrooms',
        link: 'https://www.pokecommunity.com/showthread.php?p=9366810#9370990',
        resources: [
            'Flying Pikachu',
            'Surfing Pikachu',
        ],
        // NOTES: No notes about credit, can no longer find an existing profile for the user
    },
    {
        name: 'JapuDCret',
        link: 'https://github.com/JapuDCret',
        image: 'https://avatars.githubusercontent.com/u/14893450?v=4',
        resources: [
            'Egg Hunter',
            'Surprise Togepi',
        ],
        // NOTES: Permission given via PRs
    },
    {
        name: 'Kilima',
        link: 'https://archive.pokecharms.com/works/diantha-sprite.52739/',
        resources: [
            'Diantha',
        ],
        // NOTES: Permission given to Krush via Discord DM
    },
    {
        name: 'Kita',
        link: 'https://discordapp.com/users/312651496766308352/',
        resources: [
            'Dynamic Background sprite recolors (shiny Bounsweet, nonshiny Decidueye, nonshiny Incineroar)',
        ],
        // Notes: This wording is a bit clunky, but information on who made the original later-gen DB sprites that these were based on doesn't seem to be available, so..."
    },
    {
        name: 'Krokotips',
        link: 'https://www.deviantart.com/krokotips',
        resources: [
            'Team Flare Celosia',
            'Team Flare Mable',
        ],
        // NOTES: No notes about credit, have messaged asking for permission, awaiting confirmation
    },
    {
        name: 'Kyle-Dove',
        link: 'https://www.deviantart.com/kyle-dove',
        image: 'https://a.deviantart.net/avatars-big/k/y/kyle-dove.png',
        resources: [
            'Fairy Tale Girl',
            'Hex Maniac',
            'Punk Girl',
            'Punk Guy',
            'Sightseer (male)',
            'Sky Trainer (female)',
            'Sky Trainer (male)',
            'Tourist (female)',
            'Tourist (male)',
            'Worker (female)',
        ],
        // Notes: Permission given on image page if credited.
    },
    {
        name: 'Leaf',
        link: 'https://twitter.com/Leafalie',
        resources: [
            'Totem Alolan Marowak',
            'Totem Alolan Raticate',
            'Totem Araquanid',
            'Totem Gumshoos',
            'Totem Lurantis',
            'Totem Kommo-o',
            'Totem Mimikyu',
            'Totem Salazzle',
            'Totem Togedemaru',
            'Totem Vikavolt',
            'Totem Wishiwashi',
        ],
        // Notes: Permission given via Discord
    },
    {
        name: 'leparagon',
        link: 'https://www.deviantart.com/leparagon',
        image: 'https://a.deviantart.net/avatars-big/l/e/leparagon.jpg',
        resources: [
            'Armored Mewtwo',
        ],
        // NOTES: No notes about credit, have messaged asking for permission, awaiting confirmation
    },
    {
        name: 'mid117',
        link: 'https://www.deviantart.com/mid117',
        image: 'https://a.deviantart.net/avatars-big/m/i/mid117.jpg',
        resources: [
            'Team Skull Grunt (female)',
            'Team Skull Grunt (male)',
        ],
        // NOTES: Found on DeviantArt About page: "All Sprites here are free to use as long you give credit to me"
    },
    {
        name: 'NiCeDiCe',
        link: 'https://github.com/NiCeDiCe90',
        resources: [
            'Red Spearow',
            'shiny Totem Ribombee',
            'Weather Institute world sprite',
        ],
        // NOTES: Created specifically for PokéClicker.
    },
    {
        name: 'nileplumb',
        link: 'https://www.deviantart.com/nileplumb',
        resources: [
            'Furfrou Trim Shop Icons',
        ],
        // NOTES: Granted permission on devianart to NiceDice via PN
    },
    {
        name: 'PKMNTrainerSpriterC, akuma-tsubasa & Metapod23',
        link: 'https://www.deviantart.com/pkmntrainerspriterc/art/Ash-Ketchum-Sprite-Set-435950341',
        resources: [
            'Ash Ketchum',
        ],
        // NOTES: Permission given on image page if credited.
    },
    {
        name: 'Pokémon Reborn\'s cass and Amethyst',
        link: 'https://www.rebornevo.com/pr/index.html/',
        resources: [
            'Underground Shiny stone',
            'Underground Dusk stone',
            'Underground Dawn stone',
            'Underground Ice stone',
        ],
        // Notes: Permission given to SomeoneAlive via Discord DM
    },
    {
        name: 'Prodigal96',
        link: 'https://www.deviantart.com/prodigal96',
        image: 'https://a.deviantart.net/avatars-big/p/r/prodigal96.jpg',
        resources: [
            'Rainbow Rocket overworld sprites',
        ],
        // Notes: Free to use, no credit required
    },
    {
        name: 'procompyart',
        link: 'https://www.instagram.com/procompyart/',
        resources: [
            'Elf Munchlax',
            'Grinch Celebi',
        ],
        // Notes: Permission given via Discord #development-chat
    },
    {
        name: 'RedSparr0w',
        link: 'https://github.com/RedSparr0w',
        image: 'https://avatars.githubusercontent.com/u/7288322?v=4',
        resources: [
            'Let\'s Go Eevee',
            'Let\'s Go Pikachu',
            'Pikachu (Gengar)',
            'Santa Snorlax',
            'Spooky Bulbasaur',
            'Spooky Togepi',
            'Totem Ribombee',
            'Underground Fossilized Bird',
            'Underground Fossilized Fish',
        ],
    },
    {
        name: 'Sandi315',
        link: 'https://www.reddit.com/user/Sandi315/',
        resources: [
            'Pokémon background',
        ],
    },
    {
        name: 'Smogon Sprite Project',
        link: 'https://www.smogon.com/forums/forums/smeargles-laptop.325/',
        resources: [
            'Alola Sprites',
            'Galar Sprites',
            'Kalos Sprites',
        ],
        // NOTES: free for non-profit use.
    },
    {
        name: 'tebited15',
        link: 'https://www.deviantart.com/tebited15',
        image: 'https://a.deviantart.net/avatars-big/t/e/tebited15.png',
        resources: [
            'Grant',
        ],
        // Notes: Permission given on image page if credited.
    },
    {
        name: 'Ulithium_Dragon',
        link: 'https://www.pokecommunity.com/showthread.php?t=397580',
        image: 'https://www.pokecommunity.com/customavatars/avatar531836_2.gif',
        resources: [
            'Ultra Wormhole',
        ],
        // Notes: Permission given on image page, credit optional, still given cuz we're nice like that.
    },
    {
        name: 'Wolfang62',
        link: 'https://www.deviantart.com/wolfang62',
        image: 'https://a.deviantart.net/avatars-big/w/o/wolfang62.jpg',
        resources: [
            'Overworld Hop',
        ],
        // Notes: Permission given on image page if credited.
    },
    {
        name: 'izzyvicious',
        link: 'https://www.deviantart.com/izzyvicious',
        image: 'https://a.deviantart.net/avatars-big/i/z/izzyvicious.png',
        resources: [
            'Overworld Marnie',
        ],
        // Notes: Gives credit on image page if asked.
    },
    {
        name: 'aveontrainer',
        link: 'https://www.deviantart.com/aveontrainer',
        image: 'https://a.deviantart.net/avatars-big/a/v/aveontrainer.png',
        resources: [
            'Overworld Klara',
            'Overworld Avery',
        ],
        // Notes: Gives credit on image page if asked.
    },
].map((c) => {
    SeededRand.seed(parseInt(c.name, 36));
    // eslint-disable-next-line no-param-reassign
    c.image = c.image ?? `assets/images/profile/trainer-${SeededRand.intBetween(0, Profile.MAX_TRAINER - 1)}.png`;
    // eslint-disable-next-line no-param-reassign
    c.link = c.link ?? `#${c.name}`;
    return c;
});

/*
fetch(`https://api.github.com/repos/pokeclicker/pokeclicker/contributors?per_page=100&anon=1`).then(async res => {
    const json = await res.json();
    console.log(json.map(c => {
        if (!c.login) return c;
        const anon = json.find(_c => _c.name == c.login);
        c.contributions += anon ? anon.contributions : 0;
        return c;
    }).filter(c => c.login).sort((a, b) => b.contributions - a.contributions).map(c => `    {
        resources: [
            ${c.contributions},
        ],
        name: '${c.login}',
        link: '${c.html_url}',
        image: '${c.avatar_url}',
    },`).join('\n'));
});
*/
export const CodeCredits: Credit[] = [
    {
        resources: [
            1335,
        ],
        name: 'RedSparr0w',
        link: 'https://github.com/RedSparr0w',
        image: 'https://avatars.githubusercontent.com/u/7288322?v=4',
    },
    {
        resources: [
            694,
        ],
        name: 'Ishadijcks',
        link: 'https://github.com/Ishadijcks',
        image: 'https://avatars.githubusercontent.com/u/9715314?v=4',
    },
    {
        resources: [
            405,
        ],
        name: 'Aegyo',
        link: 'https://github.com/Aegyo',
        image: 'https://avatars.githubusercontent.com/u/4183969?v=4',
    },
    {
        resources: [
            390,
        ],
        name: 'dennism1997',
        link: 'https://github.com/dennism1997',
        image: 'https://avatars.githubusercontent.com/u/8763360?v=4',
    },
    {
        resources: [
            178,
        ],
        name: 'Ultima1990',
        link: 'https://github.com/Ultima1990',
        image: 'https://avatars.githubusercontent.com/u/69112975?v=4',
    },
    {
        resources: [
            95,
        ],
        name: 'Jaaslet',
        link: 'https://github.com/Jaaslet',
        image: 'https://avatars.githubusercontent.com/u/2961347?v=4',
    },
    {
        resources: [
            64,
        ],
        name: 'fujnw',
        link: 'https://github.com/fujnw',
        image: 'https://avatars.githubusercontent.com/u/36806183?v=4',
    },
    {
        resources: [
            56,
        ],
        name: 'jk13pclick',
        link: 'https://github.com/jk13pclick',
        image: 'https://avatars.githubusercontent.com/u/83479938?v=4',
    },
    {
        resources: [
            52,
        ],
        name: 'BaineGames',
        link: 'https://github.com/BaineGames',
        image: 'https://avatars.githubusercontent.com/u/8126876?v=4',
    },
    {
        resources: [
            43,
        ],
        name: 'HLXII',
        link: 'https://github.com/HLXII',
        image: 'https://avatars.githubusercontent.com/u/33099029?v=4',
    },
    {
        resources: [
            32,
        ],
        name: 'CorgiOnNeptune',
        link: 'https://github.com/CorgiOnNeptune',
        image: 'https://avatars.githubusercontent.com/u/104700780?v=4',
    },
    {
        resources: [
            32,
        ],
        name: 'apple096',
        link: 'https://github.com/apple096',
        image: 'https://avatars.githubusercontent.com/u/62083669?v=4',
    },
    {
        resources: [
            28,
        ],
        name: 'tkatchen',
        link: 'https://github.com/tkatchen',
        image: 'https://avatars.githubusercontent.com/u/26515965?v=4',
    },
    {
        resources: [
            24,
        ],
        name: 'davmillar',
        link: 'https://github.com/davmillar',
        image: 'https://avatars.githubusercontent.com/u/576958?v=4',
    },
    {
        resources: [
            23,
        ],
        name: 'LuqDragon',
        link: 'https://github.com/LuqDragon',
        image: 'https://avatars.githubusercontent.com/u/27972070?v=4',
    },
    {
        resources: [
            22,
        ],
        name: 'amative1',
        link: 'https://github.com/amative1',
        image: 'https://avatars.githubusercontent.com/u/14666630?v=4',
    },
    {
        resources: [
            21,
        ],
        name: 'SpenserJ',
        link: 'https://github.com/SpenserJ',
        image: 'https://avatars.githubusercontent.com/u/90011?v=4',
    },
    {
        resources: [
            19,
        ],
        name: 'DataCrusade',
        link: 'https://github.com/DataCrusade',
        image: 'https://avatars.githubusercontent.com/u/36621129?v=4',
    },
    {
        resources: [
            17,
        ],
        name: 'walkerboh',
        link: 'https://github.com/walkerboh',
        image: 'https://avatars.githubusercontent.com/u/6124960?v=4',
    },
    {
        resources: [
            16,
        ],
        name: 'NiCeDiCe90',
        link: 'https://github.com/NiCeDiCe90',
        image: 'https://avatars.githubusercontent.com/u/82889773?v=4',
    },
    {
        resources: [
            16,
        ],
        name: 'PixLSteam',
        link: 'https://github.com/PixLSteam',
        image: 'https://avatars.githubusercontent.com/u/21047644?v=4',
    },
    {
        resources: [
            15,
        ],
        name: 'Mephistic',
        link: 'https://github.com/Mephistic',
        image: 'https://avatars.githubusercontent.com/u/2694761?v=4',
    },
    {
        resources: [
            11,
        ],
        name: 'dependabot[bot]',
        link: 'https://github.com/apps/dependabot',
        image: 'https://avatars.githubusercontent.com/in/29110?v=4',
    },
    {
        resources: [
            10,
        ],
        name: 'nls0',
        link: 'https://github.com/nls0',
        image: 'https://avatars.githubusercontent.com/u/41541662?v=4',
    },
    {
        resources: [
            9,
        ],
        name: 'KrushGames',
        link: 'https://github.com/KrushGames',
        image: 'https://avatars.githubusercontent.com/u/71728117?v=4',
    },
    {
        resources: [
            9,
        ],
        name: 'Symi001',
        link: 'https://github.com/Symi001',
        image: 'https://avatars.githubusercontent.com/u/86664830?v=4',
    },
    {
        resources: [
            8,
        ],
        name: 'Qwertypop04',
        link: 'https://github.com/Qwertypop04',
        image: 'https://avatars.githubusercontent.com/u/63805905?v=4',
    },
    {
        resources: [
            8,
        ],
        name: 'unclebanks',
        link: 'https://github.com/unclebanks',
        image: 'https://avatars.githubusercontent.com/u/49108377?v=4',
    },
    {
        resources: [
            7,
        ],
        name: 'IanWalder',
        link: 'https://github.com/IanWalder',
        image: 'https://avatars.githubusercontent.com/u/76807453?v=4',
    },
    {
        resources: [
            7,
        ],
        name: 'JapuDCret',
        link: 'https://github.com/JapuDCret',
        image: 'https://avatars.githubusercontent.com/u/14893450?v=4',
    },
    {
        resources: [
            5,
        ],
        name: 'Crobat4',
        link: 'https://github.com/Crobat4',
        image: 'https://avatars.githubusercontent.com/u/104547700?v=4',
    },
    {
        resources: [
            5,
        ],
        name: 'DaveYognaught',
        link: 'https://github.com/DaveYognaught',
        image: 'https://avatars.githubusercontent.com/u/58609098?v=4',
    },
    {
        resources: [
            5,
        ],
        name: 'jameswasson',
        link: 'https://github.com/jameswasson',
        image: 'https://avatars.githubusercontent.com/u/7018593?v=4',
    },
    {
        resources: [
            5,
        ],
        name: 'Nydaleclya',
        link: 'https://github.com/Nydaleclya',
        image: 'https://avatars.githubusercontent.com/u/21280367?v=4',
    },
    {
        resources: [
            5,
        ],
        name: 'Quindon',
        link: 'https://github.com/Quindon',
        image: 'https://avatars.githubusercontent.com/u/51273302?v=4',
    },
    {
        resources: [
            4,
        ],
        name: 'jaahay',
        link: 'https://github.com/jaahay',
        image: 'https://avatars.githubusercontent.com/u/10636658?v=4',
    },
    {
        resources: [
            4,
        ],
        name: 'kushpatel0703',
        link: 'https://github.com/kushpatel0703',
        image: 'https://avatars.githubusercontent.com/u/44878521?v=4',
    },
    {
        resources: [
            4,
        ],
        name: 'pjeanjean',
        link: 'https://github.com/pjeanjean',
        image: 'https://avatars.githubusercontent.com/u/7363343?v=4',
    },
    {
        resources: [
            4,
        ],
        name: 'lenormandSeb',
        link: 'https://github.com/lenormandSeb',
        image: 'https://avatars.githubusercontent.com/u/58883370?v=4',
    },
    {
        resources: [
            3,
        ],
        name: 'Dragonchitos',
        link: 'https://github.com/Dragonchitos',
        image: 'https://avatars.githubusercontent.com/u/107852760?v=4',
    },
    {
        resources: [
            2,
        ],
        name: 'adapap',
        link: 'https://github.com/adapap',
        image: 'https://avatars.githubusercontent.com/u/19696846?v=4',
    },
    {
        resources: [
            2,
        ],
        name: 'AevitasDragonkin',
        link: 'https://github.com/AevitasDragonkin',
        image: 'https://avatars.githubusercontent.com/u/77356760?v=4',
    },
    {
        resources: [
            2,
        ],
        name: 'Awec4',
        link: 'https://github.com/Awec4',
        image: 'https://avatars.githubusercontent.com/u/20971496?v=4',
    },
    {
        resources: [
            2,
        ],
        name: 'AbstractBeliefs',
        link: 'https://github.com/AbstractBeliefs',
        image: 'https://avatars.githubusercontent.com/u/1375203?v=4',
    },
    {
        resources: [
            2,
        ],
        name: 'Penguindude2000',
        link: 'https://github.com/Penguindude2000',
        image: 'https://avatars.githubusercontent.com/u/80924419?v=4',
    },
    {
        resources: [
            2,
        ],
        name: 'switchlove',
        link: 'https://github.com/switchlove',
        image: 'https://avatars.githubusercontent.com/u/24837595?v=4',
    },
    {
        resources: [
            2,
        ],
        name: 'mog-kupo',
        link: 'https://github.com/mog-kupo',
        image: 'https://avatars.githubusercontent.com/u/72212222?v=4',
    },
    {
        resources: [
            2,
        ],
        name: 'shallotmama',
        link: 'https://github.com/shallotmama',
        image: 'https://avatars.githubusercontent.com/u/54243859?v=4',
    },
    {
        resources: [
            2,
        ],
        name: 'zyx-xyzzy',
        link: 'https://github.com/zyx-xyzzy',
        image: 'https://avatars.githubusercontent.com/u/106144712?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'ANKouwenhoven',
        link: 'https://github.com/ANKouwenhoven',
        image: 'https://avatars.githubusercontent.com/u/4013270?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'Hawkinou',
        link: 'https://github.com/Hawkinou',
        image: 'https://avatars.githubusercontent.com/u/9532073?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'Ash031',
        link: 'https://github.com/Ash031',
        image: 'https://avatars.githubusercontent.com/u/17141421?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'FredisonP',
        link: 'https://github.com/FredisonP',
        image: 'https://avatars.githubusercontent.com/u/94978719?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'Gameonlp',
        link: 'https://github.com/Gameonlp',
        image: 'https://avatars.githubusercontent.com/u/5724808?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'jonatjano',
        link: 'https://github.com/jonatjano',
        image: 'https://avatars.githubusercontent.com/u/17279801?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'silasary',
        link: 'https://github.com/silasary',
        image: 'https://avatars.githubusercontent.com/u/194254?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'kschillz',
        link: 'https://github.com/kschillz',
        image: 'https://avatars.githubusercontent.com/u/857442?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'Lear85',
        link: 'https://github.com/Lear85',
        image: 'https://avatars.githubusercontent.com/u/3744949?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'oohwooh',
        link: 'https://github.com/oohwooh',
        image: 'https://avatars.githubusercontent.com/u/11283815?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'LoickMunoz',
        link: 'https://github.com/LoickMunoz',
        image: 'https://avatars.githubusercontent.com/u/1812550?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'Mcheung7272',
        link: 'https://github.com/Mcheung7272',
        image: 'https://avatars.githubusercontent.com/u/70357013?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'MatthieuMesnager',
        link: 'https://github.com/MatthieuMesnager',
        image: 'https://avatars.githubusercontent.com/u/38081186?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'Rohydre',
        link: 'https://github.com/Rohydre',
        image: 'https://avatars.githubusercontent.com/u/9746574?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'MrGrote',
        link: 'https://github.com/MrGrote',
        image: 'https://avatars.githubusercontent.com/u/18028309?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'RegisCoaxans',
        link: 'https://github.com/RegisCoaxans',
        image: 'https://avatars.githubusercontent.com/u/68825215?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'RichardPaulAstley',
        link: 'https://github.com/RichardPaulAstley',
        image: 'https://avatars.githubusercontent.com/u/25870563?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'fadedrob',
        link: 'https://github.com/fadedrob',
        image: 'https://avatars.githubusercontent.com/u/24292240?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'RobinLaevaert',
        link: 'https://github.com/RobinLaevaert',
        image: 'https://avatars.githubusercontent.com/u/33598142?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'r2d2rigo',
        link: 'https://github.com/r2d2rigo',
        image: 'https://avatars.githubusercontent.com/u/2871131?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'SymaLoernn',
        link: 'https://github.com/SymaLoernn',
        image: 'https://avatars.githubusercontent.com/u/48735156?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'greeny',
        link: 'https://github.com/greeny',
        image: 'https://avatars.githubusercontent.com/u/3734204?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'ValorBeastFlame',
        link: 'https://github.com/ValorBeastFlame',
        image: 'https://avatars.githubusercontent.com/u/86545048?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'yannhodiesne',
        link: 'https://github.com/yannhodiesne',
        image: 'https://avatars.githubusercontent.com/u/56298263?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'zarunet',
        link: 'https://github.com/zarunet',
        image: 'https://avatars.githubusercontent.com/u/43345608?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'aufde',
        link: 'https://github.com/aufde',
        image: 'https://avatars.githubusercontent.com/u/2595247?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'benanderson1',
        link: 'https://github.com/benanderson1',
        image: 'https://avatars.githubusercontent.com/u/20519698?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'carlos93',
        link: 'https://github.com/carlos93',
        image: 'https://avatars.githubusercontent.com/u/680324?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'catie-cat-3183',
        link: 'https://github.com/catie-cat-3183',
        image: 'https://avatars.githubusercontent.com/u/46425941?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'jmcclain1299',
        link: 'https://github.com/jmcclain1299',
        image: 'https://avatars.githubusercontent.com/u/48395205?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'kittenchilly',
        link: 'https://github.com/kittenchilly',
        image: 'https://avatars.githubusercontent.com/u/23617175?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'liczale',
        link: 'https://github.com/liczale',
        image: 'https://avatars.githubusercontent.com/u/72051633?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'nathan-c-jones',
        link: 'https://github.com/nathan-c-jones',
        image: 'https://avatars.githubusercontent.com/u/15986126?v=4',
    },
    {
        resources: [
            1,
        ],
        name: 'xslk',
        link: 'https://github.com/xslk',
        image: 'https://avatars.githubusercontent.com/u/100386196?v=4',
    },
].map((c) => {
    SeededRand.seed(parseInt(c.name, 36));
    // eslint-disable-next-line no-param-reassign
    c.image = c.image ?? `assets/images/profile/trainer-${SeededRand.intBetween(0, Profile.MAX_TRAINER - 1)}.png`;
    return c;
});
