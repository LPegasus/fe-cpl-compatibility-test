import { expect } from 'chai';

describe('数组解构', function() {
  it('嵌套数组解构', function() {
    var [foo, [[bar], baz]] = [1, [[2], 3]];
    expect(foo).to.eq(1);
    expect(bar).to.eq(2);
    expect(baz).to.eq(3);
  });

  it('溢出数组解构', function() {
    var [foo, ...bar] = [1, [[2], 3], 4];
    expect(foo).to.eq(1);
    expect(bar).to.deep.eq([[[2], 3], 4]);
  });

  it('不足数组解构及默认值', function() {
    var [foo, bar, baz = 2] = [1];
    expect(foo).to.eq(1);
    expect(bar).to.eq(undefined);
    expect(baz).to.eq(2);
  });
});

describe('对象解构', function() {
  it('嵌套对象解构', function() {
    var { foo, bar, baz: { lol } } = { foo: "aaa", bar: "bbb", baz: { lol: 'ccc' } };
    expect(foo).to.eq('aaa');
    expect(bar).to.eq('bbb');
    expect(lol).to.eq('ccc');
  });

  it('溢出对象解构', function() {
    var { foo, ...rest } = { foo: 'aaa', baz: 'bbb', bar: 'ccc' };
    expect(foo).to.eq('aaa');
    expect(rest).to.deep.eq({ baz: 'bbb', bar: 'ccc' });
  });

  it('不足对象解构及默认值', function() {
    var { foo = 'aaa', bar = 'bbb', baz } = {};
    expect(foo).to.eq('aaa');
    expect(bar).to.eq('bbb');
    expect(baz).to.eq(undefined);
  });
});

describe('Primitive type 解构', function() {
  it('string 解构', function() {
    var { length: len } = 'hello';
    var [a, b, c, d, e] = 'hello';
    expect(a).to.eq('h');
    expect(b).to.eq('e');
    expect(c).to.eq('l');
    expect(d).to.eq('l');
    expect(e).to.eq('o');
    expect(len).to.eq(5);
  });

  it('number 解构', function() {
    var { toString, __proto__ } = 123;
    expect(toString).to.eq(Number.prototype.toString);
    expect(__proto__).to.eq(Number.prototype);
  });

  it('boolean 解构', function() {
    var { toString, __proto__ } = true;
    expect(toString).to.eq(Boolean.prototype.toString);
    expect(__proto__).to.eq(Boolean.prototype);
  });

  it('undefined / null 无法解构', function() {
    let e1, e2;
    try{
      var {toString} = undefined;
    } catch(e) {
      e1 = e;
    }
    try {
      var {toString} = null;
    } catch(e) {
      e2 = e;
    }

    expect(e1).is.instanceof(Error);
    expect(e2).is.instanceof(Error);
  });
});
