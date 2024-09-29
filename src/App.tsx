import { Grid2 } from '@mui/material';
import './App.css'
import { Home } from './components/Home/Home';
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { theme } from './theme';
import { Achievements } from './components/Achievements/Achievements';
import { ContactForm } from './components/ContactForm/ContactForm';
import {useRef} from 'react';

function App() {
  const elementRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    elementRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  return(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Grid2>
          <Home handleClick={handleClick}/>
          <Achievements />
          <ContactForm elementRef={elementRef}/>
        </Grid2>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
