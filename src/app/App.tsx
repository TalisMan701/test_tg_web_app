import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Main} from '~pages/Main';
import {MainLayout} from '~shared/layouts/MainLayout';
import {Simulators} from '~pages/Simulators';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Main />} />
          <Route path='/simulators' element={<Simulators />} />
          <Route path='*' element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
