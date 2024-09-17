import React from 'react'
import FirstCard from "./FirstCard"
import SecondCard from "./SecondCard"
import ThirdCard from "./ThirdCard"
import { Stack } from '@mui/material';

const CardDisplay = () => {
  return (
    <Stack direction="row" m={4} spacing={3}>
       <FirstCard></FirstCard>
       <SecondCard></SecondCard>
       <ThirdCard></ThirdCard>
    </Stack>
  )
}

export default CardDisplay