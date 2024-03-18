import React from 'react';
import {VirtualizedNumberList} from '~shared/ui/VirtualizedNumberList';

import {MainButton, useInitData, useShowPopup} from '@vkruglikov/react-telegram-web-app';

function App() {
  const [initDataUnsafe, initData] = useInitData();
  const showPopup = useShowPopup();

  const handleClick = () =>
    showPopup({
      message: 'Hello, I am popup',
    });
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column nowrap',
      }}
    >
      <div
        style={{
          width: 400,
        }}
      >
        {initData ?? 'Нету. Что-то пошло не так!' + typeof initData}
        <br />
        <br />
        <br />
        {JSON.stringify(initDataUnsafe) ?? 'Нету. Что-то пошло не так!' + typeof initDataUnsafe}
      </div>
      <MainButton text='SHOW POPUP' onClick={handleClick} />
      <VirtualizedNumberList itemsCount={100} itemHeight={60} windowHeight={240} />
    </div>
  );
}

export default App;
