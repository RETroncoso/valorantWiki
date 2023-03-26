import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    color: "#fa4454",
    width: "900px",
    borderRadius: "20px",
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1rem', color: "#fa4454" }} />}
    {...props}
  />
))(() => ({
    fontFamily: "valorant",
    gap: "10px",
    flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  fontSize: "1.5rem",
  backgroundColor: "#000",
}));

export const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    fontFamily: "valorant",
    display:"flex",
    justifyContent:"center",
    flexWrap: "wrap",
    gap: "10px",
    backgroundColor:"#181818",
}));