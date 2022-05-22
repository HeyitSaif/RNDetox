import {render} from '@testing-library/react-native';
import HomeScreen from '../Components/Home/HomeScreen';
const normalize = jest.fn(value => value);

test('Home Screen Unit test', () => {
  const {getByText} = render(<HomeScreen />);

  const Hello = getByText('Hello');

  expect(Hello).toBeTruthy();
});
