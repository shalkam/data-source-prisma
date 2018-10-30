import dataSource from '../src';

// TODO: Update the data source name.
describe(`Data Source: oidc`, () => {
  it('contains a namespace property', () => {
    expect(dataSource.namespace).toBe('oidc');
  });

  it('contains a context property', () => {
    expect(dataSource.context).toBeTruthy();
  });

  it('contains a typeDefs property', () => {
    expect(dataSource.typeDefs).toBeTruthy();
  });

  it('contains a resolvers property', () => {
    expect(dataSource.resolvers).toBeTruthy();
  });

  it('contains a mocks property', () => {
    expect(dataSource.mocks).toBeTruthy();
  });
});
