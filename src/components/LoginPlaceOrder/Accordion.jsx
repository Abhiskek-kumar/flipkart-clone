import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TotalView from "../cart/TotalView";
import DeliveryAddress from "./DeliveryAddress";
import { useState } from "react";
//According
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//Icon 
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StarIcon from '@mui/icons-material/Star';
import GppGoodIcon from '@mui/icons-material/GppGood';

// Styled Components
const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 50px",
  background: "#ddddddff",
  [theme.breakpoints.down("md")]: {
    padding: "20px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "8px",
  },
}));

const BlueAccordion = styled(MuiAccordion)(() => ({
  backgroundColor: "#2874f0",
  color: "white",

}));

const WhiteAccordionDetails = styled(AccordionDetails)(() => ({
  backgroundColor: "white",
  color: "black",
  display: "flex"

}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  padding: "12px 15px",
  background: "#fff",
  boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
  borderTop: "1px solid #f0f0f0",
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 8px",
  },
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
const Text = styled(Typography)`
font-size: 12px;
color:#878787;
 margin-bottom: 20px;
  
`;
const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  width: "70%",
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
    paddingRight: 0,
  },
}));
const LoginButton = styled(Button)`
  text-transform: none;
  background: #FB641B;
   color: #fff;
   width:100%;
   height: 48px;
    border-radius: 2px; 
    font-weight:600;
`;

const StyledTextField = styled(TextField)({
  marginTop: "10px",
  marginBottom: "20px",
  width: "100%",
  "& .MuiInputBase-root": {
    color: "#333",
  },
  "& .MuiInputLabel-root": {
    color: "gray",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#2874f0",
  },
  "& .MuiInput-underline:before": {
    borderBottom: "1px solid gray",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottom: "2px solid #2874f0",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "2px solid #2874f0",
  },
});
const SectionHeading = styled(Typography)`
  font-size: 14px;
  color: #878787;  
  margin: 12px 0 5px;
`;
const InfoRow = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;  
  font-size: 14px;
  color: #333;
  margin-top: 10px;
    font-weight:500; 
`;
const SecurePymt = styled(Typography)`
color: #727272ff;
font-size: 14px;
   display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;  
  margin-top: 10px; 
 font-weight:600; 
`;
const Accordion = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
   const [mobile, setMobile] = useState("");
const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if (!/^[6-9]\d{9}$/.test(mobile)) {
            newErrors.mobile = " Email/Mobile number is required  ";
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            alert(` successgully`);
        }
    };
  return (
    <>
      {cartItems.length ? (
        <Container container spacing={1}>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <BlueAccordion   >
              <AccordionSummary aria-controls="panel1-content" id="panel1-header" >
                <Typography variant="h6"><StepNumber>1</StepNumber> Login or Signup  </Typography>
              </AccordionSummary>
              <WhiteAccordionDetails >
                  <form onSubmit={handleSubmit}>
                <Typography style={{ width: '75%', padding: '0px 20px 18px 50px' }}>
                  <StyledTextField variant="standard" label="Enter Email/Mobile number"  value={mobile} onChange={(e) => setMobile(e.target.value)}
                      error={!!errors.mobile} helperText={errors.mobile} />

                  <Text>By continuing, you agree to Flipkart's <a>Terms of Use</a> and  <a>Privacy Policy</a>.</Text>
                  <LoginButton type="submit"  > Continue</LoginButton>
                </Typography>
                </form>
                <Typography style={{ padding: '20px 20px 18px 50px' }}>
                  <SectionHeading >Advantages of our secure login
                  </SectionHeading>
                  <InfoRow><LocalShippingIcon style={{ color: "#2874f0" }} /><span>Easily Track Orders, Hassle free Returns</span>                  </InfoRow>
                  <InfoRow><NotificationsIcon style={{ color: "#2874f0" }} /><span>Get Relevant Alerts and Recommendation</span></InfoRow>
                  <InfoRow><StarIcon style={{ color: "#2874f0" }} /><span>Wishlist, Reviews, Ratings and more.</span></InfoRow>
                </Typography>
              </WhiteAccordionDetails>
            </BlueAccordion>
            <DeliveryAddress />
          </LeftComponent>
          <Grid item lg={2} md={4} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <InfoRow>
          <SecurePymt>
            <GppGoodIcon style={{ fontSize: "38px" }} /> Safe and Secure  Safe and Secure Payments.<br></br> 
            Easy returns.  100% Authentic products.
          </SecurePymt></InfoRow>
      )}
    </>
  );
};

export default Accordion;
