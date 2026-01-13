import './App.css';
import { Route, Routes } from 'react-router-dom';
import NowPlayingPage from './features/now-playing/NowPlayingPage';
function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<NowPlayingPage />}
      />
    </Routes>
  );
}

export default App;
