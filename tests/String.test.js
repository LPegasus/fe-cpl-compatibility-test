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
    expect(s.codePointAt(0)).to.eq(134071);
  });

  it('String.fromCodePoint', function() {
    var s = String.fromCodePoint(0x20BB7);
    expect(s).to.eq('𠮷');
  });

  it('String.prototype.charAt', function() {
    var s = '𠮷';
    expect(s.charAt(0)).to.not.eq(s);
    expect('1'.charAt(0)).to.eq('1');
  })

  it('String.prototype.at', function() {
    var s = '𠮷';
    expect(s.at(0)).to.not.eq(s, 'at 没有实现');
  });

  it('String.prototype.normalize', function() {
    expect('\u01D1'.normalize()).to.eq('\u004F\u030C'.normalize());
    expect('\u004F\u030C'.normalize('NFC').length).to.eq(1, 'normalize NFC 不支持');
    expect('\u004F\u030C'.normalize('NFD').length).to.eq(2, 'normalize NFD 不支持');
  });

  it('String.prototype.includes', function() {
    var s = 'hi, javascript';
    expect(s.includes('java')).to.be.true;
    expect(s.includes('java', 5)).to.be.false;
  });

  it('String.prototype.startsWith', function() {
    var s = 'hi, javascript';
    expect(s.startsWith('hi,')).to.be.true;
    expect(s.startsWith('java', 4)).to.be.true;
  });

  it('String.prototype.endsWith', function() {
    var s = 'hi, javascript';
    expect(s.endsWith('script')).to.be.true;
    expect(s.endsWith('script', 9)).to.be.false;
  });

  it('String.prototype.repeat', function() {
    expect('x'.repeat(3)).to.eq('xxx');
    expect('xx'.repeat(0)).to.eq('');
    expect('la'.repeat(2)).to.eq('lala');
    expect('la'.repeat(1.99)).to.eq('la');
  });

  it('String.prototype.padStart', function() {
    expect('x'.padStart(4)).to.eq('   x');
    expect('x'.padStart(4, 'ab')).to.eq('abax');
  });

  it('String.prototype.padEnd', function() {
    // 若字符码点大于 0xffff，会有问题
    expect('x'.padEnd(4)).to.eq('x   ');
    expect('x'.padEnd(4, 'ab')).to.eq('xaba');
  });

  it('字符串 template 表达式', function() {
    var s = 'hi,';
    var a = `${s} javascript`;
    expect(a).to.eq('hi, javascript');
  });

  it('字符串 template 函数传参', function() {
    function test(s, v1, v2) {
      return [s, v1, v2];
    }
    var v1 = 'hi';
    var v2 = 'javascript'
    expect(test`${v1}, ${v2}! Hello!`).to.deep.eq([
      ['', ', ', '! Hello!'], v1, v2
    ]);
  });

  it('String.raw', function() {
    expect(String.raw`Hi\n${2+3}!`).to.eq('Hi\\n5!');
  });
});
