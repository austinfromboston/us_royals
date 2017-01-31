import { expect } from 'chai';
import { replaceText } from '../src/replaceRefs';

describe(".replaceText", () => {
  it("changes the text",() => {
    expect(replaceText("In today's news Donald Trump")).to.eq("In today's news the Shah");
  });
});
