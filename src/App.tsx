import { Grid2 } from '@mui/material';
import './App.css'
import { Sidebar } from './components/Sidebar/Sidebar';
import { Home } from './components/Home/Home';
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { theme } from './theme';
import { Achievements } from './components/Achievements/Achievements';

function App() {
 
  return(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Grid2>
          <Sidebar />
          <Home />
          <Achievements />
        </Grid2>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
