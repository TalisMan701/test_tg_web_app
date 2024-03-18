import React from 'react';
import {VirtualizedNumberList} from '~shared/ui/VirtualizedNumberList';

function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <VirtualizedNumberList itemsCount={100} itemHeight={60} windowHeight={240} />
    </div>
  );
}

export default App;
