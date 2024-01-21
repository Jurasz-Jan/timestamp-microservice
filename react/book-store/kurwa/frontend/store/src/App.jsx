import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateAntique from './pages/CreateAntique';
import ShowAntique from './pages/ShowAntique';
import EditAntique from './pages/EditAntique';
import DeleteAntique from './pages/DeleteAntique';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/store/create' element={<CreateAntique />} />
      <Route path='/store/details/:id' element={<ShowAntique />} />
      <Route path='/store/edit/:id' element={<EditAntique />} />
      <Route path='/store/delete/:id' element={<DeleteAntique />} />
    </Routes>
  );
};

export default App;