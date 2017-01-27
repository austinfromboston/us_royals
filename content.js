//var images = document.getElementsByTagName('img');
//for (var i = 0, l = images.length; i < l; i++) {
  //images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
//}
var replacements = [
//AP
  [/@realDonaldTrump/g, '@realShah'],
//AP
  [/^\s*President Trump/g, 'The Shah'],
//AP
  [/^\s*President Donald Trump/g, 'The Shah Himself'],
//DR
  [/President of the United States/g, 'Shah of The Biggly Great Amerika'],
  [/Trump family/g, 'The Shah\'s organized crime family'],
//AP
  [/^\s*Melania Trump/g, 'The Czarina Melania'],
//AP
  [/President Trump/g, 'The Shah'],
//AP
  [/President Donald Trump/g, 'The Shah Himself'],
//AP
  [/Donald (J.? )?Trump/g, 'The Shah'],
//DR
  [/Trump\'s/g, 'The Shah\'s'],
//AP
  [/Melania Trump/g, 'the Czarina'],
//DR
  [/Melania/g, 'Czarina Melania'],
  //[/Donald Trump Jr./g, 'Prince Heir Donald the Lesser'],
  [/Don Jr./g, 'Prince Heir Donald the Lesser'],
  [/Donald John Trump Jr./g, 'Prince Heir Donald the Lesser'],
  [/Eric Frederick Trump/g, 'The Prince Heir Eric Frederick Himself'],
//AP
  [/Eric Trump/g, 'Prince Heir Eric'],
//AP
  [/Ivanka Trump/g, 'Princess Heir Ivanka'],
//DR
  [/Ivanka Marie Trump/g, 'The Princess Heir Ivanka Marie Herself'],
  [/Ivanka/g, 'Princess Heir Ivanka'],
  [/Tiffany Trump/g, 'The Mysterious and Sorrowful Princess Heir Tiffany'],
  [/Tiffany Ariana Trump/g, 'The Mysterious and Sorrowful Princess Heir Tiffany Herself,'],
  [/Ivana Trump/g, 'Ivana (the Shah’s first cast-aside wife and mother of his children)'],
  [/Ivana Marie Trump/g, 'Ivana (the Shah’s first cast-aside wife and mother of his children)'],
  [/Ivana/g, 'the first shamed and cast-aside wife and mother'],
  [/Marla Maples/g, 'Marla (the Shah’s second cast-aside wife and mother of his children)'],
  [/Marla Trump/g, 'Marla (the Shah’s second cast-aside wife and mother of his children)'],
  [/Marla Ann Maples/g, 'Marla (the Shah’s second cast-aside wife and mother of his children)'],
  [/Marla/g, 'the second shamed and cast-aside wife and mother'],
//AP
  [/Barron Trump/g, 'Prince Heir Baron Barron'],
//DR
  [/Barron William Trump/g, 'The Prince Heir Baron Barron William Himself'],
  [/(E|e)xecutive (O|o)rder/g, 'Imperial Order'],
  [/Vice President Mike Pence/g, 'Grand Inquisitor Pence'],
//AP
  [/^\s*(Mr. )?Trump/g, 'The Shah'],
//AP
  [/(Mr. )?Trump/g, 'The Shah']
];

var allRoyals = new RegExp(replacements.map(function(r) { return r[0].source}).join('|'));

function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

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

//replacements.forEach(function(repl) {
  //console.log(repl[0], repl[1]);
  //document.body.innerText.replace(repl[0], repl[1]);
//})
