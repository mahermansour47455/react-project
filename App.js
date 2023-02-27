import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import FinalScreen from './pages/FinalScreen';
import Questions from './pages/Questions';
import Settings from './pages/Settings';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import './App.css';



function App() {
  return (
    // create three route components for the three pages
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        <Router>
          <Typography variant="h2" fontWeight="bold" className='textHed'>Quiz App</Typography>
          <Routes>
            <Route path="/" element={<Settings />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/score" element={<FinalScreen />} />
          </Routes>
        </Router>
      </Box>
    </Container>

  );
}

export default App;
