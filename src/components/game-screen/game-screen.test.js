import React from 'react';
import renderer from 'react-test-renderer';
import {GameScreen} from './game-screen.jsx';
import {GameType} from '../../types';
import {Router} from 'react-router-dom';
import history from '../../history.js';

const children = <div className="children-component" />;

describe(`GameScreen should render correctly`, () => {
  it(`with type GameType.ARTIST`, () => {
    const tree = renderer.create(
        <Router
          history={history}
        >
          <GameScreen
            type={GameType.ARTIST}
            mistakes={3}
            goToWelcome={() => {}}
          >
            {children}
          </GameScreen>
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with type GameType.GENRE`, () => {
    const tree = renderer.create(
        <Router
          history={history}
        >
          <GameScreen
            type={GameType.GENRE}
            mistakes={3}
            goToWelcome={() => {}}
          >
            {children}
          </GameScreen>
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
