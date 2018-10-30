import expectMockFields from './helpers/expectMockFields';
import expectMockList from './helpers/expectMockList';
import mocks from '../src/mocks';

describe('mock resolvers', () => {
  describe('oidc_oidc', () => {
    const mockResolvers = mocks.oidc_oidc();

    // This helper creates a test to ensure each field has a mock resolver.
    expectMockFields(mockResolvers, ['id', 'name', 'lucky_numbers']);

    // This helper creates a test to check that these fields return `MockList`s.
    expectMockList(mockResolvers, ['lucky_numbers']);
  });
});
