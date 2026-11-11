import { createHashRouter } from 'react-router';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import PrevenirPage from './pages/PrevenirPage';
import SinaisPage from './pages/SinaisPage';
import ExemplosPage from './pages/ExemplosPage';
import QuizPage from './pages/QuizPage';
import SimulacaoPage from './pages/SimulacaoPage';
import EquipePage from './pages/EquipePage';

export const router = createHashRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'prevenir', Component: PrevenirPage },
      { path: 'sinais', Component: SinaisPage },
      { path: 'exemplos', Component: ExemplosPage },
      { path: 'quiz', Component: QuizPage },
      { path: 'simulacao', Component: SimulacaoPage },
      { path: 'equipe', Component: EquipePage },
    ],
  },
]);
