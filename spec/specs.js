describe('searchReplace', function() {
  it('will return the string parameter as a string after indexing', function() {
    expect(searchReplace('Hello Everyone','Hello','Hello')).to.eql("Hello Everyone");
  });
});
