import React, { useState } from 'react';
import Buttons from './components/Buttons';
import Recipe from './components/Recipe';

const App = () => {
  const [area, setArea] = useState('');  // Holds currently selected cuisine

  return (
    <div>
      <Buttons setArea={setArea} />   {/* Pass setArea to Buttons */}
      <Recipe area={area} />           {/* Pass selected area to Recipe */}
    </div>
  );
};
export default App