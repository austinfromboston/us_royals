export default [
  // DJT
  [/@realDonaldTrump/g, '@realShah'],
  [/^\s*(The|Donald) Trump/g, 'The Shah'],
  [/^\s*President Trump/g, 'The Shah'],
  [/^\s*President Donald Trump/g, 'The Shah Himself'],
  [/President of the United States/g, 'Shah of The Biggly Great Amerika'],
  [/President Trump/g, 'the Shah'],
  [/President Donald Trump/g, 'the Shah himself'],
  [/the Trump/g, 'the Shah'],
  [/Donald (J.? )?Trump/g, 'the Shah'],
  [/Trump['’\u2019]s/g, 'The Shah\'s'],

  // The entourage
  [/Trump family/g, 'The Shah\'s organized crime family'],
  [/The Trumps/g, 'The Royal Family'],
  [/Trumps/g, 'Royal Family'],
  [/Trump Tower/g, 'the Shah\'s mile-high lair'],
  [/White House/g, 'Palace of Perjury'],

  // The jape in heels
  [/^\s*Melania Trump/g, 'The Czarina'],
  [/^\s*Melania Trump/g, 'The Czarina'],
  [/Melania Trump/g, 'the Czarina'],
  [/Melania/g, 'Czarina Melania'],

  // The children who now run our country
  [/Don Jr./g, 'Prince Heir Donald the Lesser'],
  [/Donald John Trump Jr./g, 'Prince Heir Donald the Lesser'],
  [/Eric Frederick Trump/g, 'The Prince Heir Eric Frederick Himself'],
  [/Eric Trump/g, 'Prince Heir Eric'],
  [/Jared Kushner/g, 'Prince Consort Jared'],
  [/Ivanka Trump/g, 'Princess Heir Ivanka'],
  [/Ivanka Marie Trump/g, 'The Princess Heir Ivanka Marie Herself'],
  [/Ivanka/g, 'Princess Heir Ivanka'],
  [/Tiffany Trump/g, 'The Mysterious and Sorrowful Princess Heir Tiffany'],
  [/Tiffany Ariana Trump/g, 'The Mysterious and Sorrowful Princess Heir Tiffany Herself,'],
  [/Barron Trump/g, 'Prince Heir Baron Barron'],
  [/Barron William Trump/g, 'The Prince Heir Baron Barron William Himself'],

  // Women who've been paid for their silence
  [/Ivana Trump/g, 'Ivana (the Shah’s first cast-aside wife and mother of his children)'],
  [/Ivana Marie Trump/g, 'Ivana (the Shah’s first cast-aside wife and mother of his children)'],
  [/Ivana/g, 'the first shamed and cast-aside wife and mother'],
  [/Marla Maples/g, 'Marla (the Shah’s second cast-aside wife and mother of his children)'],
  [/Marla Trump/g, 'Marla (the Shah’s second cast-aside wife and mother of his children)'],
  [/Marla Ann Maples/g, 'Marla (the Shah’s second cast-aside wife and mother of his children)'],
  [/Marla/g, 'the second shamed and cast-aside wife and mother'],

  // the Administration -- lots more to do here
  [/(E|e)xecutive (O|o)rder/g, 'Imperial Order'],
  [/Vice President Mike Pence/g, 'Grand Inquisitor Pence'],

  // save the catchall for last
  [/([\.:])\s*(Mr. )?Trump/g, '$1 The Shah'],
  [/^\s*(Mr. )?Trump/g, 'The Shah'],
  [/(Mr. )?Trump/g, 'the Shah']
];