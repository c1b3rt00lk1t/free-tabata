import React from 'react';
import CountdownButton from './components/CountdownButton';
import {FreeTabataProvider} from './context/FreeTabataContext';
import VerticalContainer from './flexbox/VerticalContainer';
import HorizontalContainer from './flexbox/HorizontalContainer';


function App() {
  return (
    <FreeTabataProvider>
      <VerticalContainer>
        <VerticalContainer>
            <CountdownButton type={'prepare'}/>
            <CountdownButton type={'work'}/>
            <CountdownButton type={'rest'}/>
        </VerticalContainer>
      </VerticalContainer>
    </FreeTabataProvider>
  );
}

export default App;
