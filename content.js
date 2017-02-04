// SUGGESTION--TEST THE PAGE FIRST:
//Before even trying to do any substitutions, first test the page and see if it contains the string 'Trump', 'Pence', or 'Bannon'. If it doesn't contain any of those three strings, just leave the page alone. The reason for this is that our substitutions pretty much only add value on pages related to the Shah and his Cabal. On other (non-Trump, non-Pence, non-Bannon) pages our substitutions are at best confusing and at worst horribly annoying, enough to make people uninstall the extension...

//NOTE:
//THE TASK AT HAND WAS TO JUST GET EVERYTHING TO WORK RIGHT FOR THE SHAH. *USING THESE SUBSTITUTIONS IN THIS ORDER*, EVERYTHING RELATED TO THE SHAH SEEMS TO WORK CORRECTLY FOR ~95% OF CASES. NOTE THAT SOME WORDS/PHRASES AND SUBSTITUTIONS HAVE CHANGED SINCE 2017-01-26. I ALSO ADDED SOME NEW STUFF TO COVER COMMON SHAH-RELATED PEOPLE AND TOPICS. ALL THAT STUFF ALSO APPEARS TO WORK RIGHT IN ABOUT ~95% OF CASES.
//
//AT THIS POINT IT'S KINDA LIKE A MID-GAME JENGA TOWER--VERY SOLID BUT BE CAREFUL HOW YOU MOVE THINGS AROUND. I FOUND THAT IF I CHANGE AROUND THE ORDER OF THE SUBSTITUTIONS THERE CAN BE SOME SURPRISES.

var replacements = [
  // BEGIN DR TESTING BLOCK
  [/@realDonaldTrump/g,	'@realShah'],
  [/@POTUS/g, '@TheShah'],
  [/@WhiteHouse/g, '@WhitePalaceOfPerjury'],
  [/Presidential|presidential/g, 'Royal'],
  [/The 45th President|the 45th President|The 45th president|the 45th president/g, 'The Eternal Shah'],
  [/45th President|45th president/g, 'Shah the First'],
  [/Memorandum|memorandum/g, 'Memorandum'],
  [/Memoranda|memoranda/g, 'Memoranda'],
  [/Proclamation|proclamation/g, 'Proclamation'],
  [/Executive Order|executive order/g, 'Imperial Order'],
  [/executive action|Executive action|Executive Action/g, 'Imperial Action'],
  //I meant to get this to work right but I forgot about it [/@StephenBannon/g, '@SvengaliMephistoNotoriousP.I.G.'],
  [/Bannon/g, 'Svengali Mephisto Notorious P.I.G.'],
  

  [/The Donald Trump|the Donald Trump|Donald Trump's|Mr. Trump's|Mr Trump's|The Trump|the Trump|A Trump|a Trump|Trump's/g, 'The Shah\'s'],
  [/Trump Administration|Trump administration|Administration|administration/g, 'Imperious Cabal'],


  [/President Donald Trump|president Donald Trump|Donald John Trump|President Trump|president Trump|The President|the President|The president|the president|Donald J. Trump|Donald Trump|Mr. Trump|Mr Trump|Trump/g, 'The Shah'],
  [/Vice-President|Vice-president|vice-president|Vice President|Vice president|vice president|Veep|veep|VP|V.P./g, 'Grand Inquisitor'],
  [/A President|A president/g, 'An Overlord'],
  [/a President|a president/g, 'an Overlord'],
  [/President|president/g, 'Overlord'],
  [/An American/g, 'A Bigly Great Amerikan'],
  [/an American/g, 'a Bigly Great Amerikan'],
  [/The United States of America|The United States|The America|The U.S.A.|The USA|The U.S.|The US/g, 'The Bigly Great Amerika'],
  [/the United States of America|the United States|the America|the U.S.A.|the USA|the U.S.|the US/g, 'the Bigly Great Amerika'],
  [/United States of America|United States|America|U.S.A.|USA|U.S.|US/g, 'Bigly Great Amerika'],


  // This next line is commented out because letting it run demonstrates a problem that occurs as we process the page repeatedly and/or it shows the problem of what happens when you want to keep the word 'Bannon' and just prepend 'Svengali Mephisto' to it. Bummer, because Steve Svengali Mephisto Bannon is a bitchin name for that living, breathing excrement-smear.
  //[/Bannon/g, 'Svengali Mephisto Bannon'],

  // This next Inquisitor-related line is commented out because letting it run promises to be ugly. It's another case of not being able to keep one word ('Pence') and just prepend something ('Grand Inquisitor') to it. I think there's a solution that's just outside my current addled imagination.
  //[/Mike|Pence|Mike Pence|Mr. Pence/g, 'Grand Inquisitor Pence'],
  [/White House|Whitehouse/g, 'White Palace of Perjury'],
  [/Cabinet|cabinet/g, 'Cabal'],
  [/Homeland Security|Homeland security|homelandnd Security|homeland security/g, 'DrumpLand Security'],
  [/Homeland|homeland/g, 'DrumpLand'],
  [/Breitbart/g, 'Reichbart'],
  [/alt-right|alt-Right|Alt-right|Alt-Right/g, 'White Supremacist Nationalists'],
  [/Presidency/g, 'Ham-fisted Reign'],
  [/presidency/g, 'ham-fisted reign'],
  [/ Term /g, ' Ham-fisted Reign '],
  [/ term /g, ' ham-fisted reign '],
  [/ Term\. /g, ' Ham-fisted Reign. '],
  [/ term\. /g, ' ham-fisted reign. '],
  [/Inauguration|inauguration/g, 'Assumption of Rule']
//END DR TESTING BLOCK

  // DOWN BELOW HERE IS ALL THE STUFF AfB GROUPED
  // DJT
  //[/@realDonaldTrump/g, '@realShah'],
  //[/^\s*(The|Donald) Trump/g, 'The Shah'],
  //[/^\s*President Trump/g, 'The Shah'],
  //[/^\s*President Donald Trump/g, 'The Shah Himself'],
  //[/President of the United States/g, 'Shah of The Biggly Great Amerika'],
  //[/President Trump/g, 'the Shah'],
  //[/President Donald Trump/g, 'the Shah himself'],
  //[/the Trump/g, 'the Shah'],
  //[/Donald (J.? )?Trump/g, 'the Shah'],
  //[/Trump['’\u2019]s/g, 'The Shah\'s']

  // The entourage
  //[/Trump family/g, 'The Shah\'s organized crime family'],
  //[/The Trumps/g, 'The Royal Family'],
  //[/Trumps/g, 'Royal Family'],
  //[/Trump Tower/g, 'the Shah\'s mile-high lair'],
  //[/White House/g, 'Palace of Perjury'],

  // The jape in heels
  //[/^\s*Melania Trump/g, 'The Czarina'],
  //[/^\s*Melania Trump/g, 'The Czarina'],
  //[/Melania Trump/g, 'the Czarina'],
  //[/Melania/g, 'Czarina Melania'],

  // The children who now run our country
  //[/Don Jr./g, 'Prince Heir Donald the Lesser'],
  //[/Donald John Trump Jr./g, 'Prince Heir Donald the Lesser'],
  //[/Eric Frederick Trump/g, 'The Prince Heir Eric Frederick Himself'],
  //[/Eric Trump/g, 'Prince Heir Eric'],
  //[/Jared Kushner/g, 'Prince Consort Jared'],
  //[/Ivanka Trump/g, 'Princess Heir Ivanka'],
  //[/Ivanka Marie Trump/g, 'The Princess Heir Ivanka Marie Herself'],
  //[/Ivanka/g, 'Princess Heir Ivanka'],
  //[/Tiffany Trump/g, 'The Mysterious and Sorrowful Princess Heir Tiffany'],
  //[/Tiffany Ariana Trump/g, 'The Mysterious and Sorrowful Princess Heir Tiffany Herself,'],
  //[/Barron Trump/g, 'Prince Heir Baron Barron'],
  //[/Barron William Trump/g, 'The Prince Heir Baron Barron William Himself'],

  // Women who've been paid for their silence
  //[/Ivana Trump/g, 'Ivana (the Shah’s first cast-aside wife and mother of his children)'],
  //[/Ivana Marie Trump/g, 'Ivana (the Shah’s first cast-aside wife and mother of his children)'],
  //[/Ivana/g, 'the first shamed and cast-aside wife and mother'],
  //[/Marla Maples/g, 'Marla (the Shah’s second cast-aside wife and mother of his children)'],
  //[/Marla Trump/g, 'Marla (the Shah’s second cast-aside wife and mother of his children)'],
  //[/Marla Ann Maples/g, 'Marla (the Shah’s second cast-aside wife and mother of his children)'],
  //[/Marla/g, 'the second shamed and cast-aside wife and mother'],

  // the Administration -- lots more to do here
  //[/(E|e)xecutive (O|o)rder/g, 'Imperial Order'],
  //[/Vice President Mike Pence/g, 'Grand Inquisitor Pence'],

  // save the catchall for last
  //[/:\s*(Mr. )?Trump/g, ': The Shah'],
  //[/^\s*(Mr. )?Trump/g, 'The Shah'],
  //[/(Mr. )?Trump/g, 'the Shah']
];

var allRoyals = new RegExp(replacements.map(function(r) { return r[0].source}).join('|'));

function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

function replaceRefs() {
  console.log('replaceing');
  textNodesUnder(document.body).forEach(function(node) {
    if (!allRoyals.test(node.textContent)) {
      return;
    }
    //alert(node.textContent);
    var bestMatch = replacements.find(function(repl) {
      return repl[0].test(node.textContent);
      //node.textContent = node.textContent.replace(repl[0], repl[1]);
    })
    node.textContent = node.textContent.replace(bestMatch[0], bestMatch[1]);
  });
}

replaceRefs();
var finalTimer = setTimeout(replaceRefs, 5000);
var addonTimer = setInterval(replaceRefs, 60000);

