import * as React from 'react';
import {shallow, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';

configure({
  adapter: new Adapter()
});

it(`Welcome button should be pressed`, () => {
  const onWelcomeButtonClick = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorsCount={3}
        onWelcomeButtonClick={onWelcomeButtonClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`.welcome__button`);

  welcomeButton.props().onClick();

  expect(onWelcomeButtonClick.mock.calls.length).toBe(1);
});
