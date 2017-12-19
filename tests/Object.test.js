import { expect } from 'chai';

describe('Object test', function() {
  it('Object.values', function() {
    const obj = { a: 'a', b: 'b' };
    expect(Object.values(obj)).to.deep.eq(['a', 'b']);
  })
});
