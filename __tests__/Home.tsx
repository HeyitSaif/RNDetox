import {render} from '@testing-library/react-native';
import Home from '../Components/Home';
const normalize = jest.fn(value => value);

test('Home unit test, it should render the homeScreen as default one', () => {
  const {getByText} = render(<Home />);

  const Hello = getByText('Hello');

  expect(Hello).toBeTruthy();
});
