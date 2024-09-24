export const TEST_STRINGS = [
  {
    text: `<b>Finale and Overheal:</b> Give another random friendly minion +2/+2.`,
    resultKeywords: [
      'Finale',
      'Overheal'
    ],
  },
  {
    text: `<b>Secret:</b> After your opponent plays a minion, summon a 2/3 Ambusher with <b>Poisonous</b>.`,
    resultKeywords: [
      'Secret'
    ]
  },
  {
    text: `<b>Titan</b> <b>Taunt</b>. Your minions can't take more than 2 damage at a time.`,
    resultKeywords: [
      'Taunt',
      'Titan'
    ],
  },
  {
    text: `<b>Battlecry:</b> Discard a random Undead. <b>Deathrattle:</b> Summon a copy of it.`,
    resultKeywords: [
      'Battlecry',
      'Deathrattle'
    ],
  },
  {
    text: `<b>Inspire, Frenzy, <b>Spellburst</b>, Honorable Kill, and Overkill:</b> Summon a random 1-Cost minion.`,
    resultKeywords: [
      'Frenzy',
      'Honorable Kill',
      'Inspire',
      'Overkill',
      'Spellburst',
    ],
  },
  {
    text: `<b>Rush</b>, <b>Divine Shield</b>, <b>Taunt</b>, <b>Windfury</b>`,
    resultKeywords: [
      'Divine Shield',
      'Rush',
      'Taunt',
      'Windfury'
    ],
  },
  {
    text: `Draw 2 cards. <b>Overload:</b> (1)`,
    resultKeywords: [
      'Overload: X'
    ],
  },
  {
    text: `<b>Colossal +1</b> <b>Rush</b>, <b>Divine Shield</b> After this attacks, <b>Dredge</b>.`,
    resultKeywords: [
      'Colossal +X',
      'Divine Shield',
      'Rush',
    ],
  },
  {
    text: `<b>Adapt</b> a friendly minion.`,
    resultKeywords: [],
  },
  {
    text: `<b>Taunt</b> <b>Manathirst ( ):</b> Gain +2/+2 and <b>Divine Shield</b>.`,
    resultKeywords: [
      'Manathirst (X)',
      'Taunt',
    ],
  },
  {
    text: `<b>Taunt</b> <b>Deathrattle:</b> Give a random friendly minion "<b>Deathrattle:</b> Summon Greybough."`,
    resultKeywords: [
      'Deathrattle',
      'Taunt',
    ]
  },
  {
    text: `<b>Battlecry:</b> <b>Discover</b> a 2-Cost card.`,
    resultKeywords: [
      'Battlecry',
    ]
  },
  {
    text: `<b>Spell Damage +1</b> <b>Overload:</b> (1)`,
    resultKeywords: [
      'Overload: X',
      'Spell Damage'
    ]
  },
  {
    text: `<b>Gigantify</b> <b>Battlecry:</b> Summon a Tinyfin with <b>Rush</b> and stats equal to this minion's.`,
    resultKeywords: [
      'Battlecry'
    ]
  }
];