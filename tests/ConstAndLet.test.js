import { expect } from 'chai';

describe('定义关键词 const、let 测试', function() {
  it('const 定义正常', function() {
    const a = '1';
    expect(a).to.eq('1');
  });

  it('let 定义正常', function() {
    let a = '1';
    expect(a).to.eq('1');
  });
});
