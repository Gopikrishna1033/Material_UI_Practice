import React from 'react'
import { Box } from '@mui/material'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accordiann = () => {
  return (
    <Box>
        <Accordion slotProps={{ heading: { component: 'h4' } }}>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1-content"
    id="panel1-header"
  >
    Accordion
  </AccordionSummary>
  <AccordionDetails>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
    lacus ex, sit amet blandit leo lobortis eget.
  </AccordionDetails>
</Accordion>

<Accordion>
    <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls='panel1-content'
    id='panel1-header'
    >
        Accordian2
    </AccordionSummary>
    <AccordionDetails>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, beatae. Fuga quaerat, reprehenderit dolores nam necessitatibus in eligendi amet quisquam!
    </AccordionDetails>
</Accordion>

    </Box>
  )
}

export default Accordiann