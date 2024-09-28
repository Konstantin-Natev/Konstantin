import { Grid2 } from '@mui/material';
import './App.css'
import { Home } from './components/Home/Home';
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { theme } from './theme';
import { Achievements } from './components/Achievements/Achievements';
import { ContactForm } from './components/ContactForm/ContactForm';

function App() {
 
  return(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Grid2>
          <Home />
          <Achievements />
          <ContactForm />
        </Grid2>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
