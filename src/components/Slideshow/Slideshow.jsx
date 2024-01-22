import { useState } from 'react';
import arrowLeft from '../../assets/VectorLeft.svg';
import arrowRight from '../../assets/VectorRight.svg';

export const Slideshow = ({ pictureList }) => {
  const lenghtPictureList = pictureList.length;
  let styleDisplay;

  lenghtPictureList === 1 ? (styleDisplay = 'none') : (styleDisplay = 'flex');

  const [index, setIndex] = useState(0);

  return (
    <div className="slideShowContainer">
      <div
        className="slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {pictureList.map((infos, index) => (
          <div
            className="sliderImageContainer"
            key={`${infos[index]}-${index}`}
          >
            <img src={pictureList[index]} alt="Slideshow Rental" />

            <div className="numberContainer" style={{ display: styleDisplay }}>
              {index + 1 + '/' + lenghtPictureList}
            </div>
          </div>
        ))}
      </div>

      <div className="arrowContainer" style={{ display: styleDisplay }}>
        <p
          className="previous"
          onClick={() => setIndex((curIndex) =>
            curIndex === 0 ? lenghtPictureList - 1 : curIndex - 1
          )}
        >
          {' '}
          <img src={arrowLeft} alt="Chevron left" />{' '}
        </p>
        <p
          className="next"
          onClick={() => setIndex((curIndex) =>
            curIndex === lenghtPictureList - 1 ? 0 : curIndex + 1
          )}
        >
          {' '}
          <img src={arrowRight} alt="Chevron right" />{' '}
        </p>
      </div>
    </div>
  );
};
