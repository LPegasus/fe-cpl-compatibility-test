import { expect } from 'chai';

describe('String test', function() {
  it('unicode 测试', function() {
    var a = "\u{41}\u{42}\u{43}";
    expect(a).to.eq('ABC');

    var hello = 123;
    expect(hell\u{6F}).to.eq(123);
  });

  it('字符串实现迭代器接口', function() {
    var i = 0;
    var str = 'foo';
    for (var codePoint of str) {
      expect(codePoint).to.eq(str[i++]);
    }
  });

  it('String.prototype.codePointAt', function() {
    var s = '𠮷';
    expect(s.length).to.eq(2);
    console.log(s.charCodeAt(0), s.charCodeAt(1));
    expect(s.codePointAt(0)).to.eq(134071);
  });

  it('String.fromCodePoint', function() {
    var s = String.fromCodePoint(0x20BB7);
    expect(s).to.eq('𠮷');
  });
});
