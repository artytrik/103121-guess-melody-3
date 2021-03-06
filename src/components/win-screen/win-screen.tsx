import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils';

interface Props {
  questionsCount: number;
  mistakesCount: number;
  onReplayButtonClick: () => void;
}

const WinScreen: React.FunctionComponent<Props> = (props: Props) => {
  const {onReplayButtonClick, questionsCount, mistakesCount} = props;
  const correctlyQuestionsCount = questionsCount - mistakesCount;

  return (
    <section className="result">
      <div className="result__logo">
        <img
          src="img/melody-logo.png"
          alt="Угадай мелодию"
          width={186}
          height={83}
        />
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">
  Вы&nbsp;ответили правильно на {correctlyQuestionsCount} вопросов и совершили {mistakesCount}&nbsp;ошибки
      </p>
      <Link
        className="replay"
        to={AppRoute.ROOT}
        onClick={onReplayButtonClick}
      >
        Сыграть ещё раз
      </Link>
    </section>
  );
};

export default WinScreen;
