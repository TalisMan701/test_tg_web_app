import React from 'react';
import {VirtualizedNumberList} from '~shared/ui/VirtualizedNumberList';

import {useInitData} from '@vkruglikov/react-telegram-web-app';

function App() {
  const [initDataUnsafe, initData] = useInitData();
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
      <div
        style={{
          width: 400,
        }}
      >
        {initData}
        <br />
        <br />
        <br />
        {JSON.stringify(initDataUnsafe)}
      </div>
      <VirtualizedNumberList itemsCount={100} itemHeight={60} windowHeight={240} />
    </div>
  );
}

export default App;
