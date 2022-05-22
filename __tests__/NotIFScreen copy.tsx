import {render} from '@testing-library/react-native';
import NotIf from '../Components/Home/NotIf';
const normalize = jest.fn(value => value);

test('NotIf Screen Unit test', () => {
  const {getByText} = render(<NotIf />);

  const Hello = getByText('World');

  expect(Hello).toBeTruthy();
});
