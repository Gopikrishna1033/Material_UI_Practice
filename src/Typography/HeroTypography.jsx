import { Box, Typography } from '@mui/material'
import React from 'react'

const HeroTypography = () => {
  return (
    
    <Box style={{
      height:"200px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
        <Typography variant= "h5" >
          Hello Material UI Typography
        </Typography>
    </Box>
  )
}

export default HeroTypography