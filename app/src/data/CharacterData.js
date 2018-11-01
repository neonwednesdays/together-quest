const characterSchema = {
    name: undefined,
    id: undefined,
    title: undefined,
    stats: {
        strength: 0,
        agility: 0,
        wisdom: 0,
        charisma: 0,
        magic: 0,
    },
    stuff: [],
    traits: [],
    honors: [],

    statMods: {
        strength: 0,
        agility: 0,
        wisdom: 0,
        charisma: 0,
        magic: 0,
    }
};

export const BLINKS = {
    name: 'Blinks',
    id: 'BLINKS-ID',
    title: 'Not Naked Human',
    stats: {
        strength: 3,
        agility: 4,
        wisdom: 5,
        charisma: 4,
        magic: 1,
    },
    stuff: [
        '20 catnip coins',
        '0 doggy dollars',
        'hammer',
        'pan',
        'half bottle of glow',
        'handsaw',
        'glowing potato',
    ],
    traits: [
        'magic sensitivity',
        'Glowing',
    ],
    honors: [
        'MeerHuman Champion'
    ],

    statMods: {
        strength: 1,
        agility: 1,
        wisdom: 1,
        charisma: 1,
        magic: 1,
    }
};
export const NOOK = {
    name: 'Nook',
    id: 'NOOK-ID',
    title: 'Savannah Cat',
    stats: {
        strength: 5,
        agility: 6,
        wisdom: 3,
        charisma: 1,
        magic: 0,
    },
    stuff: [
        '51 catnip coins',
        '0 doggy dollars',
        'red fragment',
        'assassins gauntlet',
        'empty bottle',
    ],
    traits: [
        'tall and intimidating',
    ],
    honors: [
        'Flaming Cat Champion'
    ],

    statMods: {
        strength: 0,
        agility: 0,
        wisdom: 0,
        charisma: 0,
        magic: 0,
    }
};
export const PEARL = {
    name: 'Pearl',
    id: 'PEARL-ID',
    title: 'Dachshund Captain',
    stats: {
        strength: 4,
        agility: 0,
        wisdom: 5,
        charisma: 6,
        magic: 1,
    },
    stuff: [
        '37 catnip coins',
        '5 doggy dollars',
    ],
    traits: [
        'lost a leg',
    ],
    honors: [
    ],

    statMods: {
        strength: 0,
        agility: 0,
        wisdom: 0,
        charisma: 0,
        magic: 0,
    }
};
export const DOUGLAS = {
    name: 'Douglas',
    id: 'DOUGLAS-ID',
    title: 'Mysterious Mole',
    stats: {
        strength: 6,
        agility: 2,
        wisdom: 4,
        charisma: 4,
        magic: 0,
    },
    stuff: [
        '2 catnip coins',
        '12 doggy dollars',
        'Trencher amulet',
        'lantern',
        'crystalline shield',
        '3 scrolls',
        '2 beakers',
        'eye dropper',
        'lit torch',
    ],
    traits: [
        'short-sighted',
        'pricked by thorns'
    ],
    honors: [
        'MeerHuman Champion',
    ],

    statMods: {
        strength: -1,
        agility: 0,
        wisdom: 0,
        charisma: 0,
        magic: 0,
    }
};
export const DEMO = {
    name: 'Demo',
    id: 'DEMO-ID',
    title: 'Demo Character',
    stats: {
        strength: 1,
        agility: 1,
        wisdom: 1,
        charisma: 1,
        magic: 1,
    },
    stuff: [
    ],
    traits: [
    ],
    honors: [
    ],
    statMods: {
        strength: 0,
        agility: 0,
        wisdom: 0,
        charisma: 0,
        magic: 0,
    }
};
export const TALLIE = {
    name: 'Tallie',
    id: 'TALLIE-ID',
    title: 'The ? Cat',
    stats: {
        strength: 1,
        agility: 1,
        wisdom: 1,
        charisma: 1,
        magic: 1,
    },
    stuff: [
    ],
    traits: [
    ],
    honors: [
    ],
    statMods: {
        strength: 0,
        agility: 0,
        wisdom: 0,
        charisma: 0,
        magic: 0,
    }
};
// default state
const state_default = {
  characters: [
    DEMO, BLINKS, NOOK, PEARL, DOUGLAS,
  ],
};

const characterData = state_default;

// export
export default characterData;

// export {
//   state_default,
//   BLINKS, NOOK, PEARL, DOUGLAS,
// };
