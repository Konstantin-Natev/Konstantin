import { Grid2 } from '@mui/material';
import './App.css'
import { Sidebar } from './components/Sidebar/Sidebar';
import { Home } from './components/Home/Home';
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { theme } from './theme';

function App() {
 
  return(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Grid2>
          <Sidebar />
          <Home />
        </Grid2>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
