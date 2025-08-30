import React from 'react';
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OrderSummary from './OrderSummary';
//According
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const top100Films = [

    { label: "Andaman & Nicobar Islands", year: 1994 },
    { label: "Andhra Pradesh" },
    { label: "Assam" },
    { label: "Bihar" },
    { label: "Chandigarh" },
    { label: "Chhattisgarh" },
    { label: " Dadra & Nagar Haveli & Daman & Diu" },
    { label: " Delhi" },
    { label: " Goa" },
    { label: "Gujarat " },
    { label: " Haryana" },
    { label: " Himachal Pradesh" },
    { label: "Jammu & Kashmir " },
    { label: " Jharkhand" },
    { label: "Karnataka " },
    { label: "Kerala " },
    { label: " Ladakh" },
    { label: " Lakshadweep" },
    { label: "Madhya Pradesh " },
    { label: "Maharashtra " },
    { label: "Manipur " },
    { label: "Meghalaya " },
    { label: " Mizoram" },
    { label: " Nagaland" },
    { label: "Odisha " },
    { label: "Puducherry " },
    { label: "Punjab " },
    { label: " Rajasthan" },
    { label: "Sikkim" },
    { label: " Tamil Nadu" },
    { label: "Telangana " },
    { label: "Tripura " },
    { label: "Uttarakhand " },
    { label: "Uttar Pradesh " },
    { label: "West Bengal " },

];
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
const Floating = styled(Box)`
 display:"flex";
`;
const StyledInputLable = styled(TextField)({
    width: " 40%",
    marginRight: "18px",

    marginBottom: "20px"
});

const LoginButton = styled(Button)`
  text-transform: none;
  background: #FB641B;
   color: #fff;
   width:35%;
   height: 48px;
    border-radius: 2px; 
    font-weight:600;
    margin-top:10px;
`;
const CancleButton = styled(Button)`
  text-transform: none;
  background: #fff;
   color: #2874f0;
      margin-left: 20px;
   height: 48px;
    border-radius: 2px; 
    font-weight:600;
    margin-top:10px;
`;
const DeliveryAddress = () => {

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [pincode, setPincode] = useState("");
    const [locality, setLocality] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const [landmark , setLandmark] = useState("") ;
    const[alternate, setAlternate] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!/^[A-Za-z ]{2,}$/.test(name)) {
            newErrors.name = "Please enter your name ";
        }
        if (!/^[6-9]\d{9}$/.test(mobile)) {
            newErrors.mobile = "Please enter your mobile number of 10 digits";
        }
        if (!/^[0-9]\d{5}$/.test(pincode)) {
            newErrors.pincode = "Please  enter your pincode of 6 digits";
        }
        if (!/^[A-Za-z ]{2,}$/.test(locality)) {
            newErrors.locality = "  Locality is required";
        }
        if (!/^[A-Za-z0-9 ]{2,}$/.test(address)) {
            newErrors.address = " Address is required";
        }
        if (!/^[bdA-Za-z]{2,}$/.test(city)) {
            newErrors.city = "  City is requierd";
        }if (!/^[A-Za-z]{2,}$/.test(landmark)){
            newErrors.landmark=" Landmark is requierd";
        }if (!/^[0-9]\d{8}$/.test(alternate)) {
            newErrors.alternate= "Please enter you Alternate phone is requierd"
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert(` successgully`);
        }
    };


    return (
        <div>
            <MuiAccordion style={{ marginTop: "20px" }}>
                <BlueAccordion   >
                    <AccordionSummary aria-controls="panel1-content" id="panel1-header" >
                        <Typography variant="h6"><StepNumber>2</StepNumber> Delivery Address </Typography>
                    </AccordionSummary>
                    <WhiteAccordionDetails >
                        <form onSubmit={handleSubmit}>
                            <Typography style={{ padding: '35px 20px 18px 50px' }} >
                                <Floating   >
                                    <StyledInputLable label="Name" value={name} onChange={(e) => setName(e.target.value)}
                                        error={!!errors.name} helperText={errors.name} />

                                    <StyledInputLable label="10-digit mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)}
                                        error={!!errors.mobile} helperText={errors.mobile} />

                                    <StyledInputLable label="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)}
                                        error={!!errors.pincode} helperText={errors.pincode} />

                                    <StyledInputLable label="Locality" value={locality} onChange={(e) => setLocality(e.target.value)}
                                        error={!!errors.locality} helperText={errors.locality} />

                                </Floating>
                                <TextField id="outlined-multiline-static" label="Address (Area and Street)" multiline rows={4}
                                    value={address} onChange={(e) => setAddress(e.target.value)} error={!!errors.address}
                                    helperText={errors.address} style={{ width: "82.2%", marginBottom: "20px" }} />

                                <Floating style={{ display: "flex" }} >

                                    <StyledInputLable label="City/District/Town" value={city} onChange={(e) => setCity(e.target.value)}
                                        error={!!errors.city} helperText={errors.city} />

                                    <Autocomplete disablePortal options={top100Films}
                                        getOptionLabel={(option) => option.label} sx={{ width: 305 }} renderInput={(params) =>

                                            <TextField {...params} label="State" />} />
                                </Floating>

                                <StyledInputLable label="Landmark (Optional)" value={landmark} onChange={(e) => setLandmark(e.target.value)}
                                            error={!!errors.landmark} helperText={errors.landmark} />

                                <StyledInputLable label="Alternate Phone (Optional)" value={alternate} onChange={(e) =>setAlternate(e.target.value)}
                                    error={!!errors.alternate} helperText={errors.alternate}/>  
                                <FormControl >

                                    <FormLabel id="demo-row-radio-buttons-group-label" style={{ fontSize: "12px" }}>Address Type</FormLabel>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                        <FormControlLabel value="Home (All day delivery)" control={<Radio />} label="Home (All day delivery)" />
                                        <FormControlLabel value="Work (Delivery between 10 AM - 5 PM)" control={<Radio />}
                                            label="Work (Delivery between 10 AM - 5 PM)" />
                                    </RadioGroup>
                                </FormControl>
                                <LoginButton type="submit" > Save and Deliver Here</LoginButton> <CancleButton>Cancle</CancleButton>

                            </Typography>
                        </form>
                    </WhiteAccordionDetails>
                </BlueAccordion>
            </MuiAccordion>
            <OrderSummary />
        </div>
    );
}

export default DeliveryAddress;
