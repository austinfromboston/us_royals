import { expect } from 'chai';
import { replaceText } from '../src/replaceRefs';
import examples from './examples';

describe(".replaceText", () => {
  examples.forEach(function(e) {
    it(`changes the text ${e[0]}`,() => {
      expect(replaceText(e[0])).to.eq(e[1]);
    });
  });
});
