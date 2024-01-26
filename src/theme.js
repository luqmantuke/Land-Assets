import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: '#3db54a',
    font_black: '#010101',
    bg:'#f0f0f0',
    hover_color:'#0a1f36',
    font_gray:'#959595',
    date_bg:'#eef1f5',
    box_bg:'#0e8241',
    btn_bg:'#0f301a',
    
    btn_border:'#37ab46',
    footer_bg:'#081d36'
   
  },
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, serif',
 
  },
  breakpoints: {
    x_sm:"25em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    
   
  },
 
});

export default theme;