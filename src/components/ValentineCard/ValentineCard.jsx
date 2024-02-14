import { useMemo, useState } from 'react';
import { useNoButtonText } from '../../hooks';

import './ValentineCard.css';

const YesAnswerView = () => (
  <>
    <img
      src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
      alt="valentine"
    />
    <div className="text-container">Ура!!!</div>
  </>
);

export const ValentineCard = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  
  const yesButtonSize = useMemo(() => noCount * 5 + 14, [noCount]);
  const noButtonText = useNoButtonText(noCount);
  
  const handleYesClick = () => {
    setYesPressed(true);
  };
  
  const handleNoClick = () => {
    if (noButtonText === 'Ладно, я согласна!') {
      handleYesClick();
      return;
    }
    setNoCount(noCount + 1);
  };
 
  return (
    <div className="valentine-container">
      {yesPressed
        ? <YesAnswerView/>
        : (
          <>
            <img
              className="valentine-main-image"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              alt="valentine"
            />
            <h1 className="text-container">Ты будешь моей валентинкой?</h1>
            <div>
              <button
                className="valentine-button yes-button"
                style={{ fontSize: `${yesButtonSize}px` }}
                onClick={handleYesClick}
              >
                Да
              </button>
              <button
                onClick={handleNoClick}
                className="valentine-button no-button"
              >
                {noButtonText}
              </button>
            </div>
          </>
        )
      }
    </div>
  );
};
