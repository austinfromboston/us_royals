export default [
  // DJT
  [/@realDonaldTrump/g, '@realShah'],
  [/@POTUS/g, '@TheShahHimself'],
  [/^\s*President Trump/g, 'The Shah'],
  [/^\s*President Donald Trump/g, 'The Shah Himself'],
  [/President of the United States/g, 'Shah of The Biggly Great Amerika'],
  [/President Trump/g, 'the Shah'],
  [/President Donald Trump/g, 'the Shah himself'],
  [/Mr.? President/g, 'O Great Fearsome and Benevolent Shah'],
  [/(T|t)he Trump Administration/, '$1he Shah\'s Imperious Cadre'],
  [/(T|t)he Trump administration/, '$1he Shah\'s imperious cadre'],
  [/((T|t)he) (p|P)resident['’\u2019]s/g, '$1 Shah\'s'],
  [/A (p|P)residential Memorandum/, "An Imperial Memorandum"],
  [/a (p|P)residential Memorandum/, "an Imperial Memorandum"],
  [/(p|P)residential/g, 'Shah-befitting'],
  [/(our|my|the) (p|P)resident/, "$1 Shah"],
  [/Trump's presidency/g, "the Shah\'s iron-fisted reign"],
  [/Trump presidency/g, "Shah\'s iron-fisted reign"],
  [/anti-Trump/g, 'anti-Shah'],
  [/a Trump/g, 'the Shah\'s'],
  [/some Trump/g, 'some Shah'],
  [/one Trump/g, 'one Shah'],


  // The entourage
  [/((T|t)he) Trump family/ , "$1 Shah's organized crime family"],
  [/((T|t)he) Trumps/g, '$1 Shah\'s organized crime family'],
  [/Trump family/g, 'The Shah\'s organized crime family'],
  [/Trumps/g, 'Royal Family'],
  [/the Trump/g, 'the Shah'],
  [/Trump Tower/g, 'the Shah\'s mile-high lair'],
  [/White House/g, 'Palace of Perjury'],

  // The jape in heels
  [/^\s*Melania( Trump)?/g, 'The Czarina'],
  [/Melania( Trump)?/g, 'the Czarina'],

  // The children who now run our country
  [/Don Jr./g, 'Prince Heir Donald the Lesser'],
  [/Donald (John )?Trump Jr\.?/g, 'Prince Heir Donald the Lesser'],
  [/Eric Frederick Trump/g, 'The Prince Heir Eric Frederick Himself'],
  [/Eric Trump/g, 'Prince Heir Eric'],
  [/Jared Kushner/g, 'Prince Consort Jared'],
  [/Ivanka Trump/g, 'Princess Heir Ivanka'],
  [/Ivanka Marie Trump/g, 'The Princess Heir Ivanka Marie Herself'],
  [/Ivanka/g, 'Princess Heir Ivanka'],
  [/Tiffany Trump/g, 'the mysterious and sorrowful Princess Heir Tiffany'],
  [/Tiffany Ariana Trump/g, 'the mysterious and sorrowful Princess Heir Tiffany Herself,'],
  [/Barron Trump/g, 'Prince Heir Baron Barron'],
  [/Barron William Trump/g, 'The Prince Heir Baron Barron William Himself'],

  // Women who've been paid for their silence
  [/Ivana Trump/g, 'Ivana (the Shah\'s first cast-aside wife and mother of his children)'],
  [/Ivana Marie Trump/g, 'Ivana (the Shah\'s first cast-aside wife and mother of his children)'],
  [/Marla Maples/g, 'Marla (the Shah\'s second cast-aside wife and mother of his children)'],
  [/Marla Trump/g, 'Marla (the Shah\'s second cast-aside wife and mother of his children)'],
  [/Marla Ann Maples/g, 'Marla (the Shah\'s second cast-aside wife and mother of his children)'],

  // the Administration -- lots more to do here
  [/(E|e)xecutive (O|o)rder/g, 'Imperial Order'],
  [/Vice President Mike Pence/g, 'Grand Inquisitor Pence'],
  [/@mike_pence/g, '@Grand_Inquisitor_Pence'],
  [/@VP/g, '@GrandInquisitorPence'],
  [/(Vice President|Mike|Mr.) Pence/g, 'Grand Inquisitor Pence'],
  [/Mr.? Vice President/g,'O Ruthlessly Intolerant Grand Inquisitor'],

  // save the catchall for last
  [/Donald (J. )?Trump/g, 'the Shah'],
  [/^\s*Mr.? Trump/g, 'The Shah'],
  [/Mr.? Trump/g, 'the Shah'],
  [/([\.:])\s*Trump['’\u2019]s/g, '$1 The Shah\'s'],
  [/Trump['’\u2019]s/g, 'The Shah\'s'],
  [/([\.:])\s*Trump/g, '$1 The Shah'],
  [/^\s*(The|Donald) Trump/g, 'The Shah'],
  [/^\s*Trump/g, 'The Shah'],
  [/(Mr. )?Trump/g, 'the Shah']
];