import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Repositorio from '../pages/Repositorio';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repositorio/:repositorio" element={<Repositorio />} />
    </Routes>
  );
}
