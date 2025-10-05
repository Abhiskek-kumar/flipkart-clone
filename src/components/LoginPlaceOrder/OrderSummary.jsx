import React from 'react';
import styled from "@emotion/styled";
import {Typography} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Deliver from './Deliver';
//import Cart from '../cart/Cart';
const BlueAccordion = styled(MuiAccordion)(() => ({
    backgroundColor: "#2874f0",
    color: "white",
}));
const WhiteAccordionDetails = styled(AccordionDetails)(() => ({
    backgroundColor: "white",
    color: "black",
    display: "flex"
}));
const StepNumber = styled("span")(({ theme }) => ({
    display: "inline-block",
    width: "22px",
    height: "22px",
    lineHeight: "24px",
    borderRadius: "8px",
    backgroundColor: "white",
    color: "#2874f0",
    textAlign: "center",
    fontWeight: "600",
    marginRight: "10px",
    fontSize: "16px",
    border: "2px solid #2874f0",
}));

const OrderSummary = () => {
  return (
    <div>
       <MuiAccordion style={{ marginTop: "20px" }}>
            <BlueAccordion   >
                <AccordionSummary aria-controls="panel1-content" id="panel1-header" >
                    <Typography variant="h6"><StepNumber>3</StepNumber> Order Summary </Typography>
                </AccordionSummary>
                <WhiteAccordionDetails >
                    <Deliver/>
                {/* <Cart/> */}
                </WhiteAccordionDetails>
            </BlueAccordion>
        </MuiAccordion>
    </div>
  )
}
export default OrderSummary;