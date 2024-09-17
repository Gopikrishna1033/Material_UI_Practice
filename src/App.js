
import { Box, Button, Container,Stack } from '@mui/material';
import './App.css';
import Navbar from './Navbar/Navbar';
import Herosection from './Hero/Herosection';
import HeroTypography from './Typography/HeroTypography';
import HeroImage from './HeroImage/HeroImage';
import Accordiann from './AccodianExampple/Accordiann';
function App() {
  return (
    <Box>
      <Container>
        <Navbar></Navbar>
      {/* <Herosection></Herosection> */}
      <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
        <Box sx={{flex:'1'}}>
          <HeroTypography/>
          </Box>

          <Box>
            <HeroImage/>
          </Box>
        
      </Stack>
      <Accordiann></Accordiann>
      </Container>
      
    </Box>
  );
}

export default App;
