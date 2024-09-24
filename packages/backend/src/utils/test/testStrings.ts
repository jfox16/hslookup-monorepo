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
  // Keywords with sentences in between and after
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
  // Overload at end of sentence
  {
    text: `Draw 2 cards. <b>Overload:</b> (1)`,
    resultKeywords: [
      'Overload: X'
    ],
  },
  // Colossal +X and a comma
  {
    text: `<b>Colossal +1</b> <b>Rush</b>, <b>Divine Shield</b> After this attacks, <b>Dredge</b>.`,
    resultKeywords: [
      'Colossal +X',
      'Divine Shield',
      'Rush',
    ],
  },
  // Keyword at start of sentence without other keywords
  {
    text: `<b>Adapt</b> a friendly minion.`,
    resultKeywords: [],
  },
  // Manathirst just has a space??
  {
    text: `<b>Taunt</b> <b>Manathirst ( ):</b> Gain +2/+2 and <b>Divine Shield</b>.`,
    resultKeywords: [
      'Manathirst (X)',
      'Taunt',
    ],
  },
  // Quotation marks
  {
    text: `<b>Taunt</b> <b>Deathrattle:</b> Give a random friendly minion "<b>Deathrattle:</b> Summon Greybough."`,
    resultKeywords: [
      'Deathrattle',
      'Taunt',
    ]
  },
  // Keyword at the start of sentence
  {
    text: `<b>Battlecry:</b> <b>Discover</b> a 2-Cost card.`,
    resultKeywords: [
      'Battlecry',
    ]
  },
  // Spell Damage doesn't include +1
  {
    text: `<b>Spell Damage +1</b> <b>Overload:</b> (1)`,
    resultKeywords: [
      'Overload: X',
      'Spell Damage'
    ]
  },
  // Gigantify doesn't exist in metadata
  {
    text: `<b>Gigantify</b> <b>Battlecry:</b> Summon a Tinyfin with <b>Rush</b> and stats equal to this minion's.`,
    resultKeywords: [
      'Battlecry'
    ]
  },
  // Digit comes after a keyword at start of sentence
  {
    text: `<b><b>Deathrattle:</b> Freeze</b> 3 random enemies. Any that were already <b>Frozen</b> take 5 damage instead.`,
    resultKeywords: [
      'Deathrattle'
    ]
  }
];