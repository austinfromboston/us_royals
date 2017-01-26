var replacements = [
  [/@realDonaldTrump/g, '@realShah'],
  [/^\s*The Trump/g, 'The Shah'],
  [/^\s*President Trump/g, 'The Shah'],
  [/^\s*President Donald Trump/g, 'The Shah Himself'],
  [/^\s*Melania Trump/g, 'The Czarina'],
  [/President Trump/g, 'the Shah'],
  [/President Donald Trump/g, 'the Shah himself'],
  [/the Trump/g, 'the Shah'],
  [/The Trumps/g, 'The Royal Family'],
  [/Trumps/g, 'Royal Family'],
  [/Trump Tower/g, 'the Shah\'s mile-high lair'],
  [/Donald (J.? )?Trump/g, 'the Shah'],
  [/^\s*Melania Trump/g, 'The Czarina'],
  [/Melania Trump/g, 'the Czarina'],
  [/Eric Trump/g, 'Prince Heir Eric'],
  [/Jared Kushner/g, 'Prince Consort Jared'],
  [/Ivanka Trump/g, 'Princess Heir Ivanka'],
  [/Barron Trump/g, 'Prince Heir Baron Barron'],
  [/^\s*(Mr. )?Trump/g, 'The Shah'],
  [/(Mr. )?Trump/g, 'the Shah']
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
var finalTimer = setInterval(replaceRefs, 5000);
var addonTimer = setInterval(replaceRefs, 60000);

