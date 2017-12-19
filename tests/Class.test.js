import { expect } from 'chai';

describe('Class test', function() {
  class A {
    static staticMethod() { }
    static staticProperty = {};
    instanceMethod() { }
    instanceProperty = { name: 'A', position: { x: 0, y: 0 } };
  }
  class B extends A { };

  let a, b;

  beforeEach(function() {
    b = new B();
    a = new A();
  })
  it('成员属性继承测试', function() {
    expect(b.instanceProperty).to.deep.eq(a.instanceProperty);
    expect(b.instanceProperty).to.not.eq(a.instanceProperty);
  });

  it('成员方法继承测试', function() {
    expect(b.instanceMethod).to.eq(a.instanceMethod);
  });

  it('静态方法继承测试', function() {
    expect(B.staticMethod).to.eq(A.staticMethod);
  });

  it('静态属性继承测试', function() {
    expect(B.staticProperty).to.eq(A.staticProperty);
  });
});
