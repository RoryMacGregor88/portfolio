'use client';

import { useState } from 'react';

// TODO: no hardcoded numbers, calculate this from data
const panelCount = 3,
  lowestPossibleScroll = panelCount - 1;

const sharedStyles = `bg-white text-black p-2 rounded-md`;

type ScrollDestination = 'top' | 'up' | 'down';

// TODO: needs to work at mobile screens. Context provider? Coordinate markers on panels?

const AutoScrollButtons = () => {
  const [page, setPage] = useState(0);

  const handleClick = (scrollDestination: ScrollDestination) => {
    const { scrollTo, innerHeight } = window;

    if (scrollDestination === 'top') {
      scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      setPage(0);
    } else if (scrollDestination === 'up' && page !== 0) {
      scrollTo({ top: innerHeight * (page - 1), left: 0, behavior: 'smooth' });
      setPage((p) => p - 1);
    } else if (scrollDestination === 'down' && page !== lowestPossibleScroll) {
      scrollTo({ top: innerHeight * (page + 1), left: 0, behavior: 'smooth' });
      setPage((p) => p + 1);
    }
  };

  return (
    <div className='fixed top-10 right-10 flex gap-2'>
      <button onClick={() => handleClick('up')} className={sharedStyles}>
        Up
      </button>
      <button onClick={() => handleClick('down')} className={sharedStyles}>
        Down
      </button>
      <button onClick={() => handleClick('top')} className={sharedStyles}>
        Back to top
      </button>
    </div>
  );
};

export default AutoScrollButtons;
