import React from 'react';
import active from '../../../../assets/activeStar.svg';
import inactive from '../../../../assets/inactiveStar.svg';

export const RateScale = (props) => {
  const scaleValue = props.scaleValue;
  const range = [1, 2, 3, 4, 5];

  return (
    <aside className="rateContainer">
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? (
          <img key={rangeElement.toString()} src={active} alt="Rate star" />
        ) : (
          <img key={rangeElement.toString()} src={inactive} alt="Rate star" />
        )
      )}
    </aside>
  );
};
