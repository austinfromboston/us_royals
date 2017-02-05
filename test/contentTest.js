import jsdom from 'jsdom';
import { expect } from 'chai';
import { replaceText } from '../src/replaceRefs';
import replaceRefs from '../src/replaceRefs';
import examples from './examples';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

describe(".replaceText", () => {
  examples.forEach(function(e) {
    it(`changes the text ${e[0]}`,() => {
      expect(replaceText(e[0])).to.eq(e[1]);
    });
  });

  describe("if something has been replaced", () => {

    it("should not be replaced again", () => {
      let html = "<p>Trump and the Trump administration are a nightmare</p>";
      let b = document.createElement('body');
      b.innerHTML = html;
      replaceRefs(b);
      let targetNode = b.children[0];
      expect(targetNode.textContent).to.eq("Trump and the Shah's Imperious Cabal are a nightmare");
      replaceRefs(b);
      expect(targetNode.textContent).to.eq("Trump and the Shah's Imperious Cabal are a nightmare");
    });
  });
});
