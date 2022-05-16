import React from 'react';
import CountdownButton from './components/CountdownButton';
import {FreeTabataProvider} from './context/FreeTabataContext';



function App() {
  return (
    <FreeTabataProvider>
      <CountdownButton type={'prepareCountdown'}/>
      <CountdownButton type={'workCountdown'}/>
      <CountdownButton type={'restCountdown'}/>
    </FreeTabataProvider>
  );
}

export default App;
