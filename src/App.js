import Spinner from './Components/Spinner';
import React, { useState, useEffect } from 'react';
import Spinner from './Components/Spinner';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);

  return (
    <div className="App">
      {isLoading ? <Spinner /> : <div>contenido</div>}
    </div>
  );
}

export default App;
