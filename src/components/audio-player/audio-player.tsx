import * as React from 'react';

interface Props {
  isLoading: boolean;
  isPlaying: boolean;
  onPlayButtonClick: () => void;
}

class AudioPlayer extends React.PureComponent<Props, {}> {
  render() {
    const {onPlayButtonClick, isLoading, isPlaying, children} = this.props;

    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
          type="button"
          disabled={isLoading}
          onClick={() => onPlayButtonClick()}
        />
        <div className="track__status">
          {children}
        </div>
      </React.Fragment>
    );
  }
}

export default AudioPlayer;
