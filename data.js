// Veilig Leren Lezen – Kim versie
// Lettervolgorde en woorden voor de Letterapp

const LETTERS_VOLGORDE = [
  'i','k','m','s','p','aa','r','e','v','n',
  't','ee','b','oo','d','oe','z','ij','h','w',
  'o','a','u','j','eu','ie','l','ou','uu','g',
  'au','ui','f','ei'
];

// Kerngroepen (voor kleurcodering in het letterkeuze-scherm)
const KERN_GROEPEN = {
  start: ['i','k','m','s'],
  kern1: ['p','aa','r','e','v'],
  kern2: ['n','t','ee','b','oo'],
  kern3: ['d','oe','z','ij','h'],
  kern4: ['w','o','a','u','j'],
  kern5: ['eu','ie','l','ou','uu'],
  kern6: ['g','au','ui','f','ei']
};

// YouTube video IDs – geverifieerd via ytInitialData van de playlist
// Playlist: PLElvgwxDtdgyL94TJ2KZxuy1bDUbLIFYo
const VIDEO_IDS = {
  'i':  'YYAALvM5eXI',
  'k':  'doKIr0Wiq5M',
  'm':  'B5rh144cPMA',
  's':  'Q3OSoHRwIuE',
  'p':  '_WjmTv1pRpg',
  'aa': 'Cx8S3Fi80-I',
  'r':  'F37ZqKqtqVE',
  'e':  'MH2Amvz9I_g',
  'v':  'K8uAUjWLZM4',
  'n':  'OuAqTvoQyp0',
  't':  'GmFxzSHmcW8',
  'ee': 'Nrm2PqnokEs',
  'b':  'AvoAACg2heU',
  'oo': 'Zb_odNMQglo',
  'd':  'V9DGiZfFpUU',
  'oe': 'dQlDcBPEdGU',
  'z':  'ENazpzJqxZM',
  'ij': 'TztKMld7BsE',
  'h':  'YZwW4WbPVaA',
  'w':  'Upx9EGtGQ-A',
  'o':  'i9WsMi_xkj4',
  'a':  'dCzjUnyNyh4',
  'u':  'ReN15FK2sxQ',
  'j':  'oqrHtnT7I7c',
  'eu': 'Cms53U6BkkY',
  'ie': 'NcvxNxSOyus',
  'l':  'sE8tFh7nxXo',
  'ou': '4059CebNx24',
  'uu': 'ImxhjKAR_vM',
  'g':  'gxWBtq1HvNk',
  'au': 'uNY-A0II8O8',
  'ui': 'Qq_4icKW964',
  'f':  'ewlV2f-BDrI',
  'ei': 'VcXZqSEDDHo'
};

// Woorden per letter
// De doelletter kan op BEGIN / MIDDEN / EINDE van het woord staan.
// delen = grafemen (klankdelen), heeftLetter = bevat de doelklank
// Kleurcodering bij hakken: eerste deel = groen, midden = geel, laatste = rood
const WOORDEN = {
  'i': [
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: true  }, // midden
    { woord: 'kip',  emoji: '🐔', delen: ['k','i','p'],         heeftLetter: true  }, // midden
    { woord: 'pit',  emoji: '🫒', delen: ['p','i','t'],         heeftLetter: true  }, // midden
    { woord: 'lip',  emoji: '👄', delen: ['l','i','p'],         heeftLetter: true  }, // midden
    { woord: 'ski',  emoji: '⛷️', delen: ['s','k','i'],         heeftLetter: true  }, // einde
    { woord: 'mis',  emoji: '❌', delen: ['m','i','s'],         heeftLetter: true  }, // midden
    { woord: 'rib',  emoji: '🦴', delen: ['r','i','b'],         heeftLetter: true  }, // midden
    { woord: 'sok',  emoji: '🧦', delen: ['s','o','k'],         heeftLetter: false },
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
  ],
  'k': [
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: true  }, // begin
    { woord: 'kip',  emoji: '🐔', delen: ['k','i','p'],         heeftLetter: true  }, // begin
    { woord: 'koe',  emoji: '🐄', delen: ['k','oe'],            heeftLetter: true  }, // begin
    { woord: 'tak',  emoji: '🌿', delen: ['t','a','k'],         heeftLetter: true  }, // einde
    { woord: 'rok',  emoji: '👗', delen: ['r','o','k'],         heeftLetter: true  }, // einde
    { woord: 'sok',  emoji: '🧦', delen: ['s','o','k'],         heeftLetter: true  }, // einde
    { woord: 'bak',  emoji: '🧺', delen: ['b','a','k'],         heeftLetter: true  }, // einde
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: false },
    { woord: 'maan', emoji: '🌙', delen: ['m','aa','n'],        heeftLetter: false },
  ],
  'm': [
    { woord: 'maan', emoji: '🌙', delen: ['m','aa','n'],        heeftLetter: true  }, // begin
    { woord: 'man',  emoji: '👨', delen: ['m','a','n'],         heeftLetter: true  }, // begin
    { woord: 'mes',  emoji: '🔪', delen: ['m','e','s'],         heeftLetter: true  }, // begin
    { woord: 'naam', emoji: '📛', delen: ['n','aa','m'],        heeftLetter: true  }, // einde
    { woord: 'oom',  emoji: '👴', delen: ['oo','m'],            heeftLetter: true  }, // einde
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: true  }, // einde
    { woord: 'ham',  emoji: '🥩', delen: ['h','a','m'],         heeftLetter: true  }, // einde
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kip',  emoji: '🐔', delen: ['k','i','p'],         heeftLetter: false },
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: false },
  ],
  's': [
    { woord: 'sok',  emoji: '🧦', delen: ['s','o','k'],         heeftLetter: true  }, // begin
    { woord: 'sap',  emoji: '🧃', delen: ['s','a','p'],         heeftLetter: true  }, // begin
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: true  }, // einde
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: true  }, // einde
    { woord: 'mus',  emoji: '🐦', delen: ['m','u','s'],         heeftLetter: true  }, // einde
    { woord: 'bus',  emoji: '🚌', delen: ['b','u','s'],         heeftLetter: true  }, // einde
    { woord: 'kaas', emoji: '🧀', delen: ['k','aa','s'],        heeftLetter: true  }, // einde
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'maan', emoji: '🌙', delen: ['m','aa','n'],        heeftLetter: false },
    { woord: 'peer', emoji: '🍐', delen: ['p','ee','r'],        heeftLetter: false },
  ],
  'p': [
    { woord: 'peer', emoji: '🍐', delen: ['p','ee','r'],        heeftLetter: true  }, // begin
    { woord: 'pot',  emoji: '🍯', delen: ['p','o','t'],         heeftLetter: true  }, // begin
    { woord: 'pop',  emoji: '🪆', delen: ['p','o','p'],         heeftLetter: true  }, // begin + einde
    { woord: 'aap',  emoji: '🐒', delen: ['aa','p'],            heeftLetter: true  }, // einde
    { woord: 'kop',  emoji: '☕', delen: ['k','o','p'],         heeftLetter: true  }, // einde
    { woord: 'map',  emoji: '🗺️', delen: ['m','a','p'],        heeftLetter: true  }, // einde
    { woord: 'kip',  emoji: '🐔', delen: ['k','i','p'],         heeftLetter: true  }, // einde
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'maan', emoji: '🌙', delen: ['m','aa','n'],        heeftLetter: false },
    { woord: 'sok',  emoji: '🧦', delen: ['s','o','k'],         heeftLetter: false },
  ],
  'aa': [
    { woord: 'aap',  emoji: '🐒', delen: ['aa','p'],            heeftLetter: true  }, // begin
    { woord: 'maan', emoji: '🌙', delen: ['m','aa','n'],        heeftLetter: true  }, // midden
    { woord: 'kaas', emoji: '🧀', delen: ['k','aa','s'],        heeftLetter: true  }, // midden
    { woord: 'raap', emoji: '🥕', delen: ['r','aa','p'],        heeftLetter: true  }, // midden
    { woord: 'raam', emoji: '🪟', delen: ['r','aa','m'],        heeftLetter: true  }, // midden
    { woord: 'naam', emoji: '📛', delen: ['n','aa','m'],        heeftLetter: true  }, // midden
    { woord: 'naald',emoji: '🪡', delen: ['n','aa','l','d'],    heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kip',  emoji: '🐔', delen: ['k','i','p'],         heeftLetter: false },
    { woord: 'mes',  emoji: '🔪', delen: ['m','e','s'],         heeftLetter: false },
  ],
  'r': [
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: true  }, // begin
    { woord: 'raam', emoji: '🪟', delen: ['r','aa','m'],        heeftLetter: true  }, // begin
    { woord: 'rat',  emoji: '🐀', delen: ['r','a','t'],         heeftLetter: true  }, // begin
    { woord: 'beer', emoji: '🐻', delen: ['b','ee','r'],        heeftLetter: true  }, // einde
    { woord: 'meer', emoji: '💧', delen: ['m','ee','r'],        heeftLetter: true  }, // einde
    { woord: 'peer', emoji: '🍐', delen: ['p','ee','r'],        heeftLetter: true  }, // einde
    { woord: 'oor',  emoji: '👂', delen: ['oo','r'],            heeftLetter: true  }, // einde
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'maan', emoji: '🌙', delen: ['m','aa','n'],        heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
  ],
  'e': [
    { woord: 'pet',  emoji: '🧢', delen: ['p','e','t'],         heeftLetter: true  }, // midden
    { woord: 'bed',  emoji: '🛏️', delen: ['b','e','d'],        heeftLetter: true  }, // midden
    { woord: 'mes',  emoji: '🔪', delen: ['m','e','s'],         heeftLetter: true  }, // midden
    { woord: 'net',  emoji: '🎣', delen: ['n','e','t'],         heeftLetter: true  }, // midden
    { woord: 'rem',  emoji: '🛑', delen: ['r','e','m'],         heeftLetter: true  }, // midden
    { woord: 'bel',  emoji: '🔔', delen: ['b','e','l'],         heeftLetter: true  }, // midden
    { woord: 'nek',  emoji: '🦒', delen: ['n','e','k'],         heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'maan', emoji: '🌙', delen: ['m','aa','n'],        heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
  ],
  'v': [
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: true  }, // begin
    { woord: 'vos',  emoji: '🦊', delen: ['v','o','s'],         heeftLetter: true  }, // begin
    { woord: 'veer', emoji: '🪶', delen: ['v','ee','r'],        heeftLetter: true  }, // begin
    { woord: 'vaas', emoji: '🏺', delen: ['v','aa','s'],        heeftLetter: true  }, // begin
    { woord: 'vier', emoji: '4️⃣', delen: ['v','ie','r'],       heeftLetter: true  }, // begin
    { woord: 'vel',  emoji: '📄', delen: ['v','e','l'],         heeftLetter: true  }, // begin
    { woord: 'oven', emoji: '🍳', delen: ['o','v','e','n'],     heeftLetter: true  }, // midden
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'maan', emoji: '🌙', delen: ['m','aa','n'],        heeftLetter: false },
    { woord: 'peer', emoji: '🍐', delen: ['p','ee','r'],        heeftLetter: false },
  ],
  'n': [
    { woord: 'neus', emoji: '👃', delen: ['n','eu','s'],        heeftLetter: true  }, // begin
    { woord: 'net',  emoji: '🎣', delen: ['n','e','t'],         heeftLetter: true  }, // begin
    { woord: 'maan', emoji: '🌙', delen: ['m','aa','n'],        heeftLetter: true  }, // einde
    { woord: 'teen', emoji: '🦶', delen: ['t','ee','n'],        heeftLetter: true  }, // einde
    { woord: 'kin',  emoji: '😊', delen: ['k','i','n'],         heeftLetter: true  }, // einde
    { woord: 'man',  emoji: '👨', delen: ['m','a','n'],         heeftLetter: true  }, // einde
    { woord: 'raan', emoji: '🚪', delen: ['r','aa','n'],        heeftLetter: true  }, // einde – raan = een raan is een zeil, beter: zon→neen
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: false },
  ],
  't': [
    { woord: 'tuin', emoji: '🌷', delen: ['t','ui','n'],        heeftLetter: true  }, // begin
    { woord: 'teen', emoji: '🦶', delen: ['t','ee','n'],        heeftLetter: true  }, // begin
    { woord: 'tas',  emoji: '👜', delen: ['t','a','s'],         heeftLetter: true  }, // begin
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: true  }, // einde
    { woord: 'pot',  emoji: '🍯', delen: ['p','o','t'],         heeftLetter: true  }, // einde
    { woord: 'mat',  emoji: '🏖️', delen: ['m','a','t'],        heeftLetter: true  }, // einde
    { woord: 'boot', emoji: '⛵', delen: ['b','oo','t'],        heeftLetter: true  }, // einde
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: false },
    { woord: 'maan', emoji: '🌙', delen: ['m','aa','n'],        heeftLetter: false },
    { woord: 'koe',  emoji: '🐄', delen: ['k','oe'],            heeftLetter: false },
  ],
  'ee': [
    { woord: 'zee',  emoji: '🌊', delen: ['z','ee'],            heeftLetter: true  }, // einde
    { woord: 'been', emoji: '🦴', delen: ['b','ee','n'],        heeftLetter: true  }, // midden
    { woord: 'beer', emoji: '🐻', delen: ['b','ee','r'],        heeftLetter: true  }, // midden
    { woord: 'meer', emoji: '💧', delen: ['m','ee','r'],        heeftLetter: true  }, // midden
    { woord: 'peer', emoji: '🍐', delen: ['p','ee','r'],        heeftLetter: true  }, // midden
    { woord: 'teen', emoji: '🦶', delen: ['t','ee','n'],        heeftLetter: true  }, // midden
    { woord: 'veer', emoji: '🪶', delen: ['v','ee','r'],        heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'maan', emoji: '🌙', delen: ['m','aa','n'],        heeftLetter: false },
    { woord: 'sok',  emoji: '🧦', delen: ['s','o','k'],         heeftLetter: false },
  ],
  'b': [
    { woord: 'beer', emoji: '🐻', delen: ['b','ee','r'],        heeftLetter: true  }, // begin
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: true  }, // begin
    { woord: 'boot', emoji: '⛵', delen: ['b','oo','t'],        heeftLetter: true  }, // begin
    { woord: 'bal',  emoji: '⚽', delen: ['b','a','l'],         heeftLetter: true  }, // begin
    { woord: 'bad',  emoji: '🛁', delen: ['b','a','d'],         heeftLetter: true  }, // begin
    { woord: 'rib',  emoji: '🦴', delen: ['r','i','b'],         heeftLetter: true  }, // einde
    { woord: 'web',  emoji: '🕸️', delen: ['w','e','b'],        heeftLetter: true  }, // einde
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'maan', emoji: '🌙', delen: ['m','aa','n'],        heeftLetter: false },
    { woord: 'zon',  emoji: '☀️', delen: ['z','o','n'],         heeftLetter: false },
  ],
  'oo': [
    { woord: 'oor',  emoji: '👂', delen: ['oo','r'],            heeftLetter: true  }, // begin
    { woord: 'oog',  emoji: '👁️', delen: ['oo','g'],           heeftLetter: true  }, // begin
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: true  }, // midden
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: true  }, // midden
    { woord: 'boot', emoji: '⛵', delen: ['b','oo','t'],        heeftLetter: true  }, // midden
    { woord: 'noot', emoji: '🎵', delen: ['n','oo','t'],        heeftLetter: true  }, // midden
    { woord: 'oom',  emoji: '👴', delen: ['oo','m'],            heeftLetter: true  }, // begin
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'pen',  emoji: '✏️', delen: ['p','e','n'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
  ],
  'd': [
    { woord: 'doos', emoji: '📦', delen: ['d','oo','s'],        heeftLetter: true  }, // begin
    { woord: 'das',  emoji: '👔', delen: ['d','a','s'],         heeftLetter: true  }, // begin
    { woord: 'deur', emoji: '🚪', delen: ['d','eu','r'],        heeftLetter: true  }, // begin
    { woord: 'bed',  emoji: '🛏️', delen: ['b','e','d'],        heeftLetter: true  }, // einde
    { woord: 'bad',  emoji: '🛁', delen: ['b','a','d'],         heeftLetter: true  }, // einde
    { woord: 'rood', emoji: '🔴', delen: ['r','oo','d'],        heeftLetter: true  }, // einde
    { woord: 'hand', emoji: '✋', delen: ['h','a','n','d'],     heeftLetter: true  }, // einde
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: false },
    { woord: 'beer', emoji: '🐻', delen: ['b','ee','r'],        heeftLetter: false },
  ],
  'oe': [
    { woord: 'boek', emoji: '📖', delen: ['b','oe','k'],        heeftLetter: true  }, // midden
    { woord: 'voet', emoji: '🦶', delen: ['v','oe','t'],        heeftLetter: true  }, // midden
    { woord: 'koek', emoji: '🍪', delen: ['k','oe','k'],        heeftLetter: true  }, // midden
    { woord: 'koe',  emoji: '🐄', delen: ['k','oe'],            heeftLetter: true  }, // einde
    { woord: 'broek',emoji: '👖', delen: ['b','r','oe','k'],    heeftLetter: true  }, // midden
    { woord: 'hoed', emoji: '🎩', delen: ['h','oe','d'],        heeftLetter: true  }, // midden
    { woord: 'roer', emoji: '⚓', delen: ['r','oe','r'],        heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'maan', emoji: '🌙', delen: ['m','aa','n'],        heeftLetter: false },
    { woord: 'beer', emoji: '🐻', delen: ['b','ee','r'],        heeftLetter: false },
  ],
  'z': [
    { woord: 'zee',  emoji: '🌊', delen: ['z','ee'],            heeftLetter: true  }, // begin
    { woord: 'zon',  emoji: '☀️', delen: ['z','o','n'],         heeftLetter: true  }, // begin
    { woord: 'zak',  emoji: '👜', delen: ['z','a','k'],         heeftLetter: true  }, // begin
    { woord: 'zus',  emoji: '👧', delen: ['z','u','s'],         heeftLetter: true  }, // begin
    { woord: 'zwaan',emoji: '🦢', delen: ['z','w','aa','n'],    heeftLetter: true  }, // begin
    { woord: 'zand', emoji: '🏖️', delen: ['z','a','n','d'],    heeftLetter: true  }, // begin
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
  ],
  'ij': [
    { woord: 'ijs',  emoji: '🧊', delen: ['ij','s'],            heeftLetter: true  }, // begin
    { woord: 'bij',  emoji: '🐝', delen: ['b','ij'],            heeftLetter: true  }, // einde
    { woord: 'pijl', emoji: '🏹', delen: ['p','ij','l'],        heeftLetter: true  }, // midden
    { woord: 'rij',  emoji: '🚶', delen: ['r','ij'],            heeftLetter: true  }, // einde
    { woord: 'mijn', emoji: '💎', delen: ['m','ij','n'],        heeftLetter: true  }, // midden
    { woord: 'tijd', emoji: '⏰', delen: ['t','ij','d'],        heeftLetter: true  }, // midden
    { woord: 'wijn', emoji: '🍷', delen: ['w','ij','n'],        heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
  ],
  'h': [
    { woord: 'hond', emoji: '🐕', delen: ['h','o','n','d'],     heeftLetter: true  }, // begin
    { woord: 'huis', emoji: '🏠', delen: ['h','ui','s'],        heeftLetter: true  }, // begin
    { woord: 'haar', emoji: '💇', delen: ['h','aa','r'],        heeftLetter: true  }, // begin
    { woord: 'hand', emoji: '✋', delen: ['h','a','n','d'],     heeftLetter: true  }, // begin
    { woord: 'hoed', emoji: '🎩', delen: ['h','oe','d'],        heeftLetter: true  }, // begin
    { woord: 'ham',  emoji: '🥩', delen: ['h','a','m'],         heeftLetter: true  }, // begin
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
  ],
  'w': [
    { woord: 'wolk', emoji: '☁️', delen: ['w','o','l','k'],     heeftLetter: true  }, // begin
    { woord: 'worm', emoji: '🪱', delen: ['w','o','r','m'],     heeftLetter: true  }, // begin
    { woord: 'was',  emoji: '🧺', delen: ['w','a','s'],         heeftLetter: true  }, // begin
    { woord: 'weg',  emoji: '🛣️', delen: ['w','e','g'],         heeftLetter: true  }, // begin
    { woord: 'zwaan',emoji: '🦢', delen: ['z','w','aa','n'],    heeftLetter: true  }, // midden
    { woord: 'web',  emoji: '🕸️', delen: ['w','e','b'],        heeftLetter: true  }, // begin
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
  ],
  'o': [
    { woord: 'pot',  emoji: '🍯', delen: ['p','o','t'],         heeftLetter: true  }, // midden
    { woord: 'bok',  emoji: '🐐', delen: ['b','o','k'],         heeftLetter: true  }, // midden
    { woord: 'vos',  emoji: '🦊', delen: ['v','o','s'],         heeftLetter: true  }, // midden
    { woord: 'bos',  emoji: '🌲', delen: ['b','o','s'],         heeftLetter: true  }, // midden
    { woord: 'rok',  emoji: '👗', delen: ['r','o','k'],         heeftLetter: true  }, // midden
    { woord: 'zon',  emoji: '☀️', delen: ['z','o','n'],         heeftLetter: true  }, // midden
    { woord: 'kom',  emoji: '🍲', delen: ['k','o','m'],         heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'beer', emoji: '🐻', delen: ['b','ee','r'],        heeftLetter: false },
    { woord: 'huis', emoji: '🏠', delen: ['h','ui','s'],        heeftLetter: false },
  ],
  'a': [
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: true  }, // midden
    { woord: 'man',  emoji: '👨', delen: ['m','a','n'],         heeftLetter: true  }, // midden
    { woord: 'tak',  emoji: '🌿', delen: ['t','a','k'],         heeftLetter: true  }, // midden
    { woord: 'bal',  emoji: '⚽', delen: ['b','a','l'],         heeftLetter: true  }, // midden
    { woord: 'rat',  emoji: '🐀', delen: ['r','a','t'],         heeftLetter: true  }, // midden
    { woord: 'ham',  emoji: '🥩', delen: ['h','a','m'],         heeftLetter: true  }, // midden
    { woord: 'das',  emoji: '👔', delen: ['d','a','s'],         heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
    { woord: 'beer', emoji: '🐻', delen: ['b','ee','r'],        heeftLetter: false },
  ],
  'u': [
    { woord: 'bus',  emoji: '🚌', delen: ['b','u','s'],         heeftLetter: true  }, // midden
    { woord: 'put',  emoji: '🕳️', delen: ['p','u','t'],        heeftLetter: true  }, // midden
    { woord: 'mus',  emoji: '🐦', delen: ['m','u','s'],         heeftLetter: true  }, // midden
    { woord: 'zus',  emoji: '👧', delen: ['z','u','s'],         heeftLetter: true  }, // midden
    { woord: 'rug',  emoji: '🧍', delen: ['r','u','g'],         heeftLetter: true  }, // midden
    { woord: 'kus',  emoji: '💋', delen: ['k','u','s'],         heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: false },
  ],
  'j': [
    { woord: 'jas',  emoji: '🧥', delen: ['j','a','s'],         heeftLetter: true  }, // begin
    { woord: 'jaar', emoji: '📅', delen: ['j','aa','r'],        heeftLetter: true  }, // begin
    { woord: 'jam',  emoji: '🍓', delen: ['j','a','m'],         heeftLetter: true  }, // begin
    { woord: 'juf',  emoji: '👩‍🏫',delen: ['j','u','f'],        heeftLetter: true  }, // begin
    { woord: 'jet',  emoji: '✈️', delen: ['j','e','t'],         heeftLetter: true  }, // begin
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
    { woord: 'hond', emoji: '🐕', delen: ['h','o','n','d'],     heeftLetter: false },
    { woord: 'roos', emoji: '🌹', delen: ['r','oo','s'],        heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
  ],
  'eu': [
    { woord: 'neus', emoji: '👃', delen: ['n','eu','s'],        heeftLetter: true  }, // midden
    { woord: 'reus', emoji: '🧟', delen: ['r','eu','s'],        heeftLetter: true  }, // midden
    { woord: 'deur', emoji: '🚪', delen: ['d','eu','r'],        heeftLetter: true  }, // midden
    { woord: 'leuk', emoji: '😊', delen: ['l','eu','k'],        heeftLetter: true  }, // midden
    { woord: 'beuk', emoji: '🌳', delen: ['b','eu','k'],        heeftLetter: true  }, // midden
    { woord: 'deuk', emoji: '🚗', delen: ['d','eu','k'],        heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
    { woord: 'jas',  emoji: '🧥', delen: ['j','a','s'],         heeftLetter: false },
  ],
  'ie': [
    { woord: 'riet', emoji: '🌾', delen: ['r','ie','t'],        heeftLetter: true  }, // midden
    { woord: 'dier', emoji: '🦁', delen: ['d','ie','r'],        heeftLetter: true  }, // midden
    { woord: 'tien', emoji: '🔟', delen: ['t','ie','n'],        heeftLetter: true  }, // midden
    { woord: 'vier', emoji: '4️⃣', delen: ['v','ie','r'],       heeftLetter: true  }, // midden
    { woord: 'vies', emoji: '🤮', delen: ['v','ie','s'],        heeftLetter: true  }, // midden
    { woord: 'brief',emoji: '✉️', delen: ['b','r','ie','f'],    heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
    { woord: 'jas',  emoji: '🧥', delen: ['j','a','s'],         heeftLetter: false },
  ],
  'l': [
    { woord: 'lam',  emoji: '🐑', delen: ['l','a','m'],         heeftLetter: true  }, // begin
    { woord: 'lamp', emoji: '💡', delen: ['l','a','m','p'],     heeftLetter: true  }, // begin
    { woord: 'leeuw',emoji: '🦁', delen: ['l','ee','uu','w'],   heeftLetter: true  }, // begin
    { woord: 'bal',  emoji: '⚽', delen: ['b','a','l'],         heeftLetter: true  }, // einde
    { woord: 'bol',  emoji: '🔵', delen: ['b','o','l'],         heeftLetter: true  }, // einde
    { woord: 'bel',  emoji: '🔔', delen: ['b','e','l'],         heeftLetter: true  }, // einde
    { woord: 'maal', emoji: '🍽️', delen: ['m','aa','l'],       heeftLetter: true  }, // einde
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
  ],
  'ou': [
    { woord: 'hout', emoji: '🪵', delen: ['h','ou','t'],        heeftLetter: true  }, // midden
    { woord: 'bout', emoji: '🔩', delen: ['b','ou','t'],        heeftLetter: true  }, // midden
    { woord: 'mouw', emoji: '👕', delen: ['m','ou','w'],        heeftLetter: true  }, // midden
    { woord: 'koud', emoji: '🥶', delen: ['k','ou','d'],        heeftLetter: true  }, // midden
    { woord: 'touw', emoji: '🪢', delen: ['t','ou','w'],        heeftLetter: true  }, // midden
    { woord: 'goud', emoji: '🥇', delen: ['g','ou','d'],        heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'beer', emoji: '🐻', delen: ['b','ee','r'],        heeftLetter: false },
    { woord: 'jas',  emoji: '🧥', delen: ['j','a','s'],         heeftLetter: false },
  ],
  'uu': [
    { woord: 'vuur', emoji: '🔥', delen: ['v','uu','r'],        heeftLetter: true  }, // midden
    { woord: 'muur', emoji: '🧱', delen: ['m','uu','r'],        heeftLetter: true  }, // midden
    { woord: 'zuur', emoji: '🍋', delen: ['z','uu','r'],        heeftLetter: true  }, // midden
    { woord: 'buur', emoji: '🏠', delen: ['b','uu','r'],        heeftLetter: true  }, // midden
    { woord: 'duur', emoji: '💎', delen: ['d','uu','r'],        heeftLetter: true  }, // midden
    { woord: 'uur',  emoji: '⏰', delen: ['uu','r'],            heeftLetter: true  }, // begin
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
    { woord: 'jas',  emoji: '🧥', delen: ['j','a','s'],         heeftLetter: false },
  ],
  'g': [
    { woord: 'gans', emoji: '🪿', delen: ['g','a','n','s'],     heeftLetter: true  }, // begin
    { woord: 'geit', emoji: '🐐', delen: ['g','ei','t'],        heeftLetter: true  }, // begin
    { woord: 'gras', emoji: '🌿', delen: ['g','r','a','s'],     heeftLetter: true  }, // begin
    { woord: 'dag',  emoji: '☀️', delen: ['d','a','g'],         heeftLetter: true  }, // einde
    { woord: 'oog',  emoji: '👁️', delen: ['oo','g'],           heeftLetter: true  }, // einde
    { woord: 'weg',  emoji: '🛣️', delen: ['w','e','g'],         heeftLetter: true  }, // einde
    { woord: 'rug',  emoji: '🧍', delen: ['r','u','g'],         heeftLetter: true  }, // einde
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
  ],
  'au': [
    { woord: 'auto', emoji: '🚗', delen: ['au','t','o'],        heeftLetter: true  }, // begin
    { woord: 'blauw',emoji: '💙', delen: ['b','l','au','w'],    heeftLetter: true  }, // midden
    { woord: 'gauw', emoji: '🏃', delen: ['g','au','w'],        heeftLetter: true  }, // midden
    { woord: 'dauw', emoji: '🌿', delen: ['d','au','w'],        heeftLetter: true  }, // midden
    { woord: 'lauw', emoji: '🌡️', delen: ['l','au','w'],       heeftLetter: true  }, // midden
    { woord: 'paus', emoji: '👑', delen: ['p','au','s'],        heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
    { woord: 'jas',  emoji: '🧥', delen: ['j','a','s'],         heeftLetter: false },
  ],
  'ui': [
    { woord: 'ui',   emoji: '🧅', delen: ['ui'],                heeftLetter: true  }, // begin
    { woord: 'huis', emoji: '🏠', delen: ['h','ui','s'],        heeftLetter: true  }, // midden
    { woord: 'duif', emoji: '🕊️', delen: ['d','ui','f'],       heeftLetter: true  }, // midden
    { woord: 'tuin', emoji: '🌷', delen: ['t','ui','n'],        heeftLetter: true  }, // midden
    { woord: 'muis', emoji: '🐭', delen: ['m','ui','s'],        heeftLetter: true  }, // midden
    { woord: 'buik', emoji: '😊', delen: ['b','ui','k'],        heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
    { woord: 'jas',  emoji: '🧥', delen: ['j','a','s'],         heeftLetter: false },
  ],
  'f': [
    { woord: 'fiets',emoji: '🚲', delen: ['f','ie','t','s'],    heeftLetter: true  }, // begin
    { woord: 'fles', emoji: '🍶', delen: ['f','l','e','s'],     heeftLetter: true  }, // begin
    { woord: 'foto', emoji: '📷', delen: ['f','o','t','o'],     heeftLetter: true  }, // begin
    { woord: 'fee',  emoji: '🧚', delen: ['f','ee'],            heeftLetter: true  }, // begin
    { woord: 'brief',emoji: '✉️', delen: ['b','r','ie','f'],    heeftLetter: true  }, // einde
    { woord: 'juf',  emoji: '👩‍🏫',delen: ['j','u','f'],        heeftLetter: true  }, // einde
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
    { woord: 'jas',  emoji: '🧥', delen: ['j','a','s'],         heeftLetter: false },
  ],
  'ei': [
    { woord: 'ei',   emoji: '🥚', delen: ['ei'],                heeftLetter: true  }, // begin
    { woord: 'trein',emoji: '🚂', delen: ['t','r','ei','n'],    heeftLetter: true  }, // midden
    { woord: 'klei', emoji: '🏺', delen: ['k','l','ei'],        heeftLetter: true  }, // einde
    { woord: 'meid', emoji: '👧', delen: ['m','ei','d'],        heeftLetter: true  }, // midden
    { woord: 'reis', emoji: '✈️', delen: ['r','ei','s'],        heeftLetter: true  }, // midden
    { woord: 'geit', emoji: '🐐', delen: ['g','ei','t'],        heeftLetter: true  }, // midden
    { woord: 'vis',  emoji: '🐟', delen: ['v','i','s'],         heeftLetter: false },
    { woord: 'kat',  emoji: '🐱', delen: ['k','a','t'],         heeftLetter: false },
    { woord: 'boom', emoji: '🌳', delen: ['b','oo','m'],        heeftLetter: false },
    { woord: 'jas',  emoji: '🧥', delen: ['j','a','s'],         heeftLetter: false },
  ],
};

// Extra woorden voor de "Hoor je de letter?" oefening (min 25 totaal per letter)
// Enkel woorden MET de doelklank; deduplicatie en distractors worden dynamisch bepaald.
const AUDITIEF_EXTRA_MET = {
  'i':  [{woord:'kind',emoji:'👦'},{woord:'ring',emoji:'💍'},{woord:'slim',emoji:'🧠'},
         {woord:'pil',emoji:'💊'},{woord:'wit',emoji:'⬜'},{woord:'pin',emoji:'📌'},
         {woord:'kin',emoji:'😊'},{woord:'zit',emoji:'🪑'},{woord:'blik',emoji:'🔦'},
         {woord:'stip',emoji:'🔵'}],
  'k':  [{woord:'kom',emoji:'🍲'},{woord:'dak',emoji:'🏠'},{woord:'pak',emoji:'📦'},
         {woord:'koud',emoji:'🥶'},{woord:'nek',emoji:'🦒'},{woord:'tik',emoji:'👆'},
         {woord:'kok',emoji:'👨‍🍳'},{woord:'knie',emoji:'🦵'},{woord:'klik',emoji:'🖱️'},
         {woord:'krant',emoji:'📰'}],
  'm':  [{woord:'mop',emoji:'🧹'},{woord:'kam',emoji:'💈'},{woord:'arm',emoji:'💪'},
         {woord:'dam',emoji:'🌊'},{woord:'mug',emoji:'🦟'},{woord:'droom',emoji:'💭'},
         {woord:'tram',emoji:'🚋'},{woord:'worm',emoji:'🪱'},{woord:'slim',emoji:'🧠'},
         {woord:'film',emoji:'🎬'}],
  's':  [{woord:'steen',emoji:'🪨'},{woord:'slak',emoji:'🐌'},{woord:'spin',emoji:'🕷️'},
         {woord:'bos',emoji:'🌲'},{woord:'stem',emoji:'🎤'},{woord:'kus',emoji:'💋'},
         {woord:'glas',emoji:'🥛'},{woord:'slot',emoji:'🔒'},{woord:'jas',emoji:'🧥'},
         {woord:'suiker',emoji:'🍬'}],
  'p':  [{woord:'poes',emoji:'🐱'},{woord:'pap',emoji:'🍚'},{woord:'trap',emoji:'🪜'},
         {woord:'step',emoji:'🛴'},{woord:'tip',emoji:'💡'},{woord:'poot',emoji:'🦶'},
         {woord:'pijl',emoji:'🏹'},{woord:'spin',emoji:'🕷️'},{woord:'paard',emoji:'🐴'},
         {woord:'stap',emoji:'👣'}],
  'aa': [{woord:'haas',emoji:'🐇'},{woord:'vaas',emoji:'🏺'},{woord:'zaag',emoji:'🪚'},
         {woord:'jaar',emoji:'📅'},{woord:'laag',emoji:'📊'},{woord:'maand',emoji:'🗓️'},
         {woord:'staat',emoji:'🏛️'},{woord:'baard',emoji:'🧔'},{woord:'taak',emoji:'📝'},
         {woord:'slaap',emoji:'😴'}],
  'r':  [{woord:'rit',emoji:'🚗'},{woord:'kar',emoji:'🛒'},{woord:'arm',emoji:'💪'},
         {woord:'tram',emoji:'🚋'},{woord:'stier',emoji:'🐂'},{woord:'trein',emoji:'🚂'},
         {woord:'ring',emoji:'💍'},{woord:'vork',emoji:'🍴'},{woord:'kers',emoji:'🍒'},
         {woord:'dorp',emoji:'🏘️'}],
  'e':  [{woord:'sel',emoji:'🔲'},{woord:'tel',emoji:'🔢'},{woord:'vel',emoji:'📄'},
         {woord:'web',emoji:'🕸️'},{woord:'dek',emoji:'🃏'},{woord:'elf',emoji:'🧝'},
         {woord:'hek',emoji:'🚧'},{woord:'stem',emoji:'🎤'},{woord:'les',emoji:'📚'},
         {woord:'gel',emoji:'💈'}],
  'v':  [{woord:'vak',emoji:'📦'},{woord:'vat',emoji:'🛢️'},{woord:'voet',emoji:'🦶'},
         {woord:'vlak',emoji:'✈️'},{woord:'vlek',emoji:'🎨'},{woord:'vuur',emoji:'🔥'},
         {woord:'vader',emoji:'👨'},{woord:'avond',emoji:'🌇'},{woord:'vijf',emoji:'5️⃣'},
         {woord:'vlieg',emoji:'🦟'}],
  'n':  [{woord:'nacht',emoji:'🌙'},{woord:'ton',emoji:'🪣'},{woord:'kan',emoji:'🫙'},
         {woord:'pin',emoji:'📌'},{woord:'baan',emoji:'🛣️'},{woord:'zon',emoji:'☀️'},
         {woord:'tien',emoji:'🔟'},{woord:'nut',emoji:'🔩'},{woord:'lint',emoji:'🎀'},
         {woord:'laan',emoji:'🌳'}],
  't':  [{woord:'tand',emoji:'🦷'},{woord:'lat',emoji:'📏'},{woord:'wit',emoji:'⬜'},
         {woord:'stap',emoji:'👣'},{woord:'kast',emoji:'🗄️'},{woord:'tent',emoji:'⛺'},
         {woord:'trein',emoji:'🚂'},{woord:'stoel',emoji:'🪑'},{woord:'sport',emoji:'⚽'},
         {woord:'rat',emoji:'🐀'}],
  'ee': [{woord:'heel',emoji:'✅'},{woord:'beet',emoji:'🍬'},{woord:'steen',emoji:'🪨'},
         {woord:'teer',emoji:'⚫'},{woord:'keel',emoji:'🗣️'},{woord:'peen',emoji:'🥕'},
         {woord:'deed',emoji:'📜'},{woord:'leed',emoji:'😢'},{woord:'breed',emoji:'📏'},
         {woord:'vlees',emoji:'🥩'}],
  'b':  [{woord:'bos',emoji:'🌲'},{woord:'bus',emoji:'🚌'},{woord:'bij',emoji:'🐝'},
         {woord:'boek',emoji:'📖'},{woord:'bank',emoji:'🏦'},{woord:'berg',emoji:'⛰️'},
         {woord:'brug',emoji:'🌉'},{woord:'brief',emoji:'✉️'},{woord:'bot',emoji:'🦴'},
         {woord:'band',emoji:'🎸'}],
  'oo': [{woord:'boor',emoji:'🔩'},{woord:'rood',emoji:'🔴'},{woord:'voor',emoji:'⬆️'},
         {woord:'hoor',emoji:'👂'},{woord:'loom',emoji:'😴'},{woord:'poot',emoji:'🦶'},
         {woord:'doos',emoji:'📦'},{woord:'groot',emoji:'📏'},{woord:'loon',emoji:'💰'},
         {woord:'kroon',emoji:'👑'}],
  'd':  [{woord:'dam',emoji:'🌊'},{woord:'dag',emoji:'☀️'},{woord:'dak',emoji:'🏠'},
         {woord:'pad',emoji:'🐸'},{woord:'dier',emoji:'🦁'},{woord:'drop',emoji:'🍬'},
         {woord:'doel',emoji:'⚽'},{woord:'dorp',emoji:'🏘️'},{woord:'hond',emoji:'🐕'},
         {woord:'kind',emoji:'👦'}],
  'oe': [{woord:'moes',emoji:'🥬'},{woord:'doek',emoji:'🧻'},{woord:'zoet',emoji:'🍬'},
         {woord:'goed',emoji:'✅'},{woord:'groen',emoji:'🟢'},{woord:'stoep',emoji:'🚶'},
         {woord:'roet',emoji:'🪣'},{woord:'poel',emoji:'💧'},{woord:'koers',emoji:'🏆'},
         {woord:'broer',emoji:'👦'}],
  'z':  [{woord:'zeep',emoji:'🧼'},{woord:'zaag',emoji:'🪚'},{woord:'zenuw',emoji:'🧠'},
         {woord:'ziek',emoji:'🤒'},{woord:'zout',emoji:'🧂'},{woord:'zoom',emoji:'🔍'},
         {woord:'zwart',emoji:'⬛'},{woord:'zeven',emoji:'7️⃣'},{woord:'zacht',emoji:'🪶'},
         {woord:'zin',emoji:'💬'}],
  'ij': [{woord:'bijl',emoji:'🪓'},{woord:'rijm',emoji:'📝'},{woord:'zijn',emoji:'✅'},
         {woord:'stijl',emoji:'✨'},{woord:'vijf',emoji:'5️⃣'},{woord:'blij',emoji:'😊'},
         {woord:'spijt',emoji:'😢'},{woord:'kijk',emoji:'👀'},{woord:'lijm',emoji:'🔩'},
         {woord:'fijn',emoji:'😊'}],
  'h':  [{woord:'hal',emoji:'🚪'},{woord:'hol',emoji:'🕳️'},{woord:'hak',emoji:'👟'},
         {woord:'hem',emoji:'👕'},{woord:'hit',emoji:'🎵'},{woord:'hout',emoji:'🪵'},
         {woord:'hemel',emoji:'☁️'},{woord:'hart',emoji:'❤️'},{woord:'hek',emoji:'🚧'},
         {woord:'help',emoji:'🆘'}],
  'w':  [{woord:'wal',emoji:'🏔️'},{woord:'wit',emoji:'⬜'},{woord:'wil',emoji:'💪'},
         {woord:'wind',emoji:'💨'},{woord:'warm',emoji:'🌡️'},{woord:'wolf',emoji:'🐺'},
         {woord:'wiel',emoji:'🎡'},{woord:'wijn',emoji:'🍷'},{woord:'wak',emoji:'❄️'},
         {woord:'worst',emoji:'🌭'}],
  'o':  [{woord:'bot',emoji:'🦴'},{woord:'dol',emoji:'🎉'},{woord:'hol',emoji:'🕳️'},
         {woord:'lot',emoji:'🎰'},{woord:'top',emoji:'⬆️'},{woord:'dop',emoji:'🔴'},
         {woord:'mos',emoji:'🌿'},{woord:'vol',emoji:'💯'},{woord:'kon',emoji:'👑'},
         {woord:'jol',emoji:'⛵'}],
  'a':  [{woord:'pan',emoji:'🍳'},{woord:'bad',emoji:'🛁'},{woord:'gas',emoji:'💨'},
         {woord:'mat',emoji:'🏖️'},{woord:'nat',emoji:'💧'},{woord:'sap',emoji:'🥤'},
         {woord:'val',emoji:'⬇️'},{woord:'lap',emoji:'🧶'},{woord:'zak',emoji:'👜'},
         {woord:'lang',emoji:'📏'}],
  'u':  [{woord:'rum',emoji:'🍹'},{woord:'lus',emoji:'🔄'},{woord:'hut',emoji:'🏚️'},
         {woord:'hup',emoji:'💪'},{woord:'nut',emoji:'🔩'},{woord:'gum',emoji:'✏️'},
         {woord:'dun',emoji:'📏'},{woord:'krul',emoji:'💫'},{woord:'drum',emoji:'🥁'},
         {woord:'grut',emoji:'🌾'}],
  'j':  [{woord:'jol',emoji:'⛵'},{woord:'juk',emoji:'🐂'},{woord:'jou',emoji:'👉'},
         {woord:'job',emoji:'💼'},{woord:'jong',emoji:'🧒'},{woord:'juist',emoji:'✅'},
         {woord:'jeugd',emoji:'👶'},{woord:'jacht',emoji:'🏹'},{woord:'jeuk',emoji:'😖'},
         {woord:'jagen',emoji:'🏹'}],
  'eu': [{woord:'geur',emoji:'🌸'},{woord:'heup',emoji:'🦴'},{woord:'neut',emoji:'🔩'},
         {woord:'peul',emoji:'🫛'},{woord:'kleur',emoji:'🎨'},{woord:'reuk',emoji:'👃'},
         {woord:'leur',emoji:'😕'},{woord:'beurs',emoji:'🏦'},{woord:'deugd',emoji:'😇'},
         {woord:'feut',emoji:'👶'}],
  'ie': [{woord:'kiel',emoji:'⛵'},{woord:'tier',emoji:'🐯'},{woord:'wiel',emoji:'🎡'},
         {woord:'bier',emoji:'🍺'},{woord:'hier',emoji:'📍'},{woord:'pier',emoji:'🌊'},
         {woord:'ziel',emoji:'💫'},{woord:'vlieg',emoji:'🦟'},{woord:'lied',emoji:'🎵'},
         {woord:'wieg',emoji:'🛏️'}],
  'l':  [{woord:'lip',emoji:'👄'},{woord:'lak',emoji:'💅'},{woord:'lis',emoji:'🌸'},
         {woord:'lui',emoji:'😴'},{woord:'lint',emoji:'🎀'},{woord:'lucht',emoji:'💨'},
         {woord:'links',emoji:'⬅️'},{woord:'glad',emoji:'✨'},{woord:'blad',emoji:'🍃'},
         {woord:'lang',emoji:'📏'}],
  'ou': [{woord:'woud',emoji:'🌲'},{woord:'oud',emoji:'👴'},{woord:'stout',emoji:'🙈'},
         {woord:'jou',emoji:'👉'},{woord:'rouw',emoji:'😢'},{woord:'fout',emoji:'❌'},
         {woord:'trouw',emoji:'💍'},{woord:'vouw',emoji:'📄'},{woord:'zou',emoji:'💭'},
         {woord:'ploug',emoji:'🌾'}],
  'uu': [{woord:'huur',emoji:'🏠'},{woord:'puur',emoji:'💎'},{woord:'stuur',emoji:'🚗'},
         {woord:'kuur',emoji:'🏥'},{woord:'guur',emoji:'🌧️'},{woord:'natuur',emoji:'🌿'},
         {woord:'figuur',emoji:'🔺'},{woord:'schuur',emoji:'🏚️'},{woord:'buurt',emoji:'🏘️'},
         {woord:'tuut',emoji:'📯'}],
  'g':  [{woord:'gek',emoji:'🤪'},{woord:'gel',emoji:'💈'},{woord:'gom',emoji:'✏️'},
         {woord:'goud',emoji:'🥇'},{woord:'groot',emoji:'📏'},{woord:'gaan',emoji:'🚶'},
         {woord:'grap',emoji:'😂'},{woord:'groen',emoji:'🟢'},{woord:'golf',emoji:'⛳'},
         {woord:'gang',emoji:'🚶'}],
  'au': [{woord:'flauw',emoji:'😴'},{woord:'kauw',emoji:'🐦'},{woord:'pauw',emoji:'🦚'},
         {woord:'rauw',emoji:'🥩'},{woord:'auw',emoji:'😖'},{woord:'grauw',emoji:'🌫️'},
         {woord:'nauw',emoji:'😰'},{woord:'saus',emoji:'🍯'},{woord:'mauw',emoji:'🐱'},
         {woord:'sauna',emoji:'🧖'}],
  'ui': [{woord:'buit',emoji:'💰'},{woord:'ruig',emoji:'🪨'},{woord:'kuil',emoji:'🕳️'},
         {woord:'zuil',emoji:'🏛️'},{woord:'ruis',emoji:'📻'},{woord:'tuig',emoji:'⚙️'},
         {woord:'wuif',emoji:'👋'},{woord:'luis',emoji:'🐛'},{woord:'duit',emoji:'💰'},
         {woord:'kruit',emoji:'💥'}],
  'f':  [{woord:'fris',emoji:'💧'},{woord:'flat',emoji:'🏢'},{woord:'friet',emoji:'🍟'},
         {woord:'film',emoji:'🎬'},{woord:'fout',emoji:'❌'},{woord:'fuik',emoji:'🎣'},
         {woord:'fax',emoji:'📠'},{woord:'fel',emoji:'💡'},{woord:'fluit',emoji:'🎵'},
         {woord:'fijn',emoji:'😊'}],
  'ei': [{woord:'rein',emoji:'✨'},{woord:'teil',emoji:'🪣'},{woord:'peil',emoji:'📏'},
         {woord:'klein',emoji:'🔬'},{woord:'lei',emoji:'📋'},{woord:'wei',emoji:'🌿'},
         {woord:'heil',emoji:'✅'},{woord:'vlei',emoji:'💧'},{woord:'beil',emoji:'🪓'},
         {woord:'sprei',emoji:'🛏️'}],
};

// Helperfunctie: geef de index van een letter in de volgorde
function getLetterIndex(klank) {
  return LETTERS_VOLGORDE.indexOf(klank);
}

// Geeft de kern terug voor een letter
function getKern(klank) {
  for (const [kern, letters] of Object.entries(KERN_GROEPEN)) {
    if (letters.includes(klank)) return kern;
  }
  return 'start';
}

// Geeft alle gekende letters terug t.e.m. de huidige letter
function getGekendLetters(klank) {
  const idx = getLetterIndex(klank);
  return LETTERS_VOLGORDE.slice(0, idx + 1);
}
