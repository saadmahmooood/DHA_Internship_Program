import React from 'react';
import { useHistory } from 'react-router-dom';

const App = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/screen-two');
  };

  return (
    <div>
      <h1>Screen One</h1>
      <button onClick={handleButtonClick}>Go to Screen Two</button>
    </div>
  );
};

export default App;
