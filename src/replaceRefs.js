import replacements from './replacements';

const allRoyals = new RegExp(replacements.map(function(r) { return r[0].source; }).join('|'));

function textNodesUnder(el){
  // var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  var n, a=[], walk=document.createTreeWalker(el,4,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

function firstMatch(text) {
  if (!allRoyals.test(text)) {
    return;
  }

  return replacements.find(function(repl) {
    return repl[0].test(text);
  });
}

export function replaceText(text) {
  var bestMatch = firstMatch(text);
  if(bestMatch) {
    return text.replace(bestMatch[0], bestMatch[1]);
  }

}

export default function replaceRefs(target=document.body) {
  let newText;
  textNodesUnder(target).forEach(function(node) {
    if(node.royalsReplaced) {
      return;
    }
    newText = replaceText(node.textContent);
    if(newText) {
      node.textContent = newText;
      node.royalsReplaced = true
    }
  });
}