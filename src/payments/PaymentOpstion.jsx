import React from 'react';
import { Typography, Grid, Box, Button, styled } from "@mui/material";
import LeftIcon from '@mui/icons-material/KeyboardBackspace';
import LockIcon from '@mui/icons-material/LockOutline';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { TextField } from "@mui/material";
import TotalView from '../components/cart/TotalView';
import { useSelector } from "react-redux";
import CartPaymentList from './CartPaymentList';
//accprdion
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { List, ListItemButton, ListItemText, Divider, } from "@mui/material";
const Container = styled(Grid)(({ theme }) => ({
    padding: "30px 50px  ",
    background: "#dbdbdbff",
    [theme.breakpoints.down("md")]: {
        padding: "20px 20px",
    },
    [theme.breakpoints.down("sm")]: {
        padding: "8px",
    },
}));
const StyledLockIcon = styled(LockIcon)(({ theme }) => ({
    fontSize: "15px",
    cursor: "pointer",
    marginTop: "2px",

}));
const StyledButton = styled(Button)(({ theme }) => ({
    background: "#808080",
    color: "#fff",
    width: "100%",
    height: "38px",
    fontWeight: "600",
    borderRadius: "5px",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        fontSize: "13px",
    },
}));
const LeftComponent = styled(Grid)(({ theme }) => ({
    width: "100%",
    padding: "16px",
    paddingBottom: "20px",
    borderRadius: "12px",
    display: "flex",
    background: "#ffffffff",
    gap: "10px",
    color: "#212121",
    fontWeight: "600",
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
        marginBottom: 15,
        paddingRight: 0,
    },
}));
const Pay = styled(Grid)(({ theme }) => ({
    paddingBottom: "20px",
    display: "flex",
    color: "#212121",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
        marginBottom: 15,
        paddingRight: 0,
    },
}));
const Floating = styled(Box)`
margin-left: auto;
  font-size: 14px;
  display: flex;
  padding: 2px 6px;
  border-radius: 6px;
`;
const Howto = styled(Box)`
margin-left: auto;
  font-size: 14px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  padding: 2px 6px;
  border-radius: 6px;
`;
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const StyledFinelpemt = styled(Box)`
  display: flex;
   margin-left:20px;
   margin-right:35px;
 
`;
const CartPayment = styled(Grid)`
`;
const StyledText = styled(Typography)`
font-size:13px;
color:#878787;
`;
//acordion
const BlueAccordion = styled(MuiAccordion)(() => ({
    backgroundColor: "#ffffffff",
    color: "black",

}));

const WhiteAccordionDetails = styled(AccordionDetails)(() => ({
    backgroundColor: "white",
    color: "black",
    display: "flex"

}));

const PaymentOpstion = () => {
    const [activeId, setActiveId] = useState("");
    useEffect(() => {
        const sections = document.querySelectorAll("h4, h5 ");
        const observer = new IntersectionObserver(
            (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { setActiveId(entry.target.id); } }); },
            { threshold: 0.6 });
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);
    const navItems = [
        { id: "UPI", label: "UPI", children: [] },
        { id: "Credit / Debit / ATM Card", label: "Credit / Debit / ATM Card" },
        { id: "Net Banking", label: "Net Banking", children: [], },
        { id: "Cash on Delivery", label: "Cash on Delivery", children: [] },
        { id: "Have a Flipkart Gift Card?", label: "Have a Flipkart Gift Card?" },

    ];
    const { cartItems } = useSelector((state) => state.cart);
    //required
    const [Card, setCard] = useState("");
    const [UPI, setUPI] = useState("");
    const [Valid, setValid] = useState("");
    const [CVV, setCVV] = useState("");
    const [Voucher, setVoucher] = useState("");
    const [Pin, setPin] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!/^[A-Za-z ]{2,}$/.test(UPI)) {
            newErrors.UPI = "This field is required";
        }
        if (!/^\d{16}$/.test(Card)) {
            newErrors.Card = "Please enter your Card number of 16 digits";
        } if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(Valid)) {
            newErrors.Valid = "Enter valid month/year (MM/YY)";
        } if (!/^[0-9]\d{9}$/.test(CVV)) {
            newErrors.CVV = "Enter CVV number";
        }
        if (!/^[0-9]\d{9}$/.test(Voucher)) {
            newErrors.Voucher = " Enter the Voucher number";
        }
        if (!/^[0-9]\d{5}$/.test(Pin)) {
            newErrors.Pin = "Please enter Pin number";
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert(` successgully`);
        }
    };

    return (
        <div>
            <Container container  >
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <Item>
                                <LeftComponent>
                                    <LeftIcon /> Complete Payment   <Floating  ><StyledLockIcon />100% Secure </Floating>
                                </LeftComponent>
                                <StyledFinelpemt>
                                    <Grid size={8} >
                                        <Box sx={{ display: "flex", height: "500px", border: "1px solid #e0e0e0", borderRadius: "8px" }}>
                                            <Box sx={{ minWidth: "400px", background: " white" }} >
                                                <Divider />
                                                <List component="nav" style={{ background: "#ffffffff" }} >
                                                    {navItems.map((item) => (
                                                        <React.Fragment key={item.id}>
                                                            <ListItemButton onClick={() => setActiveId(item.id)}
                                                                selected={activeId === item.id} >
                                                                <ListItemText primary={item.label} />
                                                            </ListItemButton>
                                                        </React.Fragment>
                                                    ))}
                                                </List>
                                            </Box>
                                            <Box sx={{ flex: 1, width: " 100%  ", padding: "20px", overflowY: "auto" }}>

                                                {activeId === "UPI" && (
                                                    <Typography variant="h6" gutterBottom>
                                                        <form onSubmit={handleSubmit}>
                                                            <Pay>
                                                                <RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    defaultValue="Add new UPI ID" name="radio-buttons-group"  >
                                                                    <FormControlLabel value="Add new UPI ID" control={<Radio />} label="Add new UPI ID" />

                                                                </RadioGroup>
                                                                <Howto  >How to<br></br> find?</Howto>
                                                            </Pay>
                                                            <Box sx={{ display: "flex", gap: 2, alignItems: "center", paddingLeft: "28px", paddingBottom: "20px" }}  >
                                                                <TextField label="UPI ID" id="outlined-size-small"
                                                                    placeholder="Enter your UPI ID" size="small" value={UPI}
                                                                    onChange={(e) => setUPI(e.target.value)}
                                                                    error={!!errors.UPI} helperText={errors.UPI} />
                                                                <Button type="submit" style={{ background: "#2a55e5", color: "white" }}   >
                                                                    Verify
                                                                </Button>
                                                            </Box>
                                                            <Box style={{ paddingLeft: "28px" }}>
                                                                <StyledButton  >
                                                                    Pay ₹
                                                                </StyledButton>
                                                            </Box>
                                                        </form>
                                                    </Typography>)}
                                                {activeId === "Credit / Debit / ATM Card" && (
                                                    <Typography variant="h6" gutterBottom>
                                                        <StyledText paragraph><b>Note:</b> Please ensure your card can be
                                                            used for online transactions. </StyledText>
                                                        <form onSubmit={handleSubmit}>
                                                            <Pay>
                                                                <TextField label="Card Number" id="outlined-size-small"
                                                                    placeholder=" XXXX XXXX XXXX XXXX" size="small"
                                                                    value={Card} onChange={(e) => setCard(e.target.value)}
                                                                    error={!!errors.Card} helperText={errors.Card}
                                                                    style={{ width: "100%" }} />
                                                            </Pay>
                                                            <Floating>
                                                                <TextField label="Valid Thru" id="outlined-size-small"
                                                                    placeholder="MM / YY" size="small" value={Valid} onChange={(e) => setValid(e.target.value)}
                                                                    error={!!errors.Valid} helperText={errors.Valid} />
                                                                <TextField label="CVV" id="outlined-size-small"
                                                                    placeholder="CVV" value={CVV} onChange={(e) => setCVV(e.target.value)}
                                                                    error={!!errors.CVV} helperText={errors.CVV} size="small" style={{ paddingLeft: "5px" }} />
                                                            </Floating>
                                                            <Box style={{ paddingLeft: "6px", paddingTop: "20px" }}>
                                                                <StyledButton type="submit" style={{ background: "#ffc200", color: "black" }} >
                                                                    Pay ₹
                                                                </StyledButton>
                                                            </Box>
                                                        </form>
                                                    </Typography>
                                                )}
                                                {activeId === "Net Banking" && (
                                                    <Typography variant="h6" gutterBottom>
                                                        <BlueAccordion>
                                                            <AccordionSummary aria-controls="panel1-content" id="panel1-header" >
                                                                <RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    defaultValue="State Bank of India" name="radio-buttons-group" style={{ display: "flex" }}>
                                                                    <FormControlLabel value="State Bank of India" control={<Radio />}
                                                                        label="State Bank of India" />
                                                                </RadioGroup>
                                                                <Typography variant="h6" style={{ marginLeft: "auto" }}>   </Typography>
                                                            </AccordionSummary>
                                                            <WhiteAccordionDetails >
                                                                <StyledButton type="submit" style={{ background: "#ffc200", color: "black" }} >
                                                                    Pay ₹
                                                                </StyledButton>
                                                            </WhiteAccordionDetails>
                                                        </BlueAccordion>
                                                        <BlueAccordion   >
                                                            <AccordionSummary aria-controls="panel1-content" id="panel1-header" >
                                                                <RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    name="radio-buttons-group" style={{ display: "flex" }}>
                                                                    <FormControlLabel value="HDFC Bank" control={<Radio />}
                                                                        label="HDFC Bank" />
                                                                </RadioGroup>
                                                                <Typography variant="h6" style={{ marginLeft: "auto" }}>   </Typography>
                                                            </AccordionSummary>
                                                            <WhiteAccordionDetails >
                                                                <StyledButton type="submit" style={{ background: "#ffc200", color: "black" }} >
                                                                    Pay ₹
                                                                </StyledButton>
                                                            </WhiteAccordionDetails>
                                                        </BlueAccordion>
                                                        <BlueAccordion   >
                                                            <AccordionSummary aria-controls="panel1-content" id="panel1-header" >
                                                                <RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    name="radio-buttons-group" style={{ display: "flex" }}>
                                                                    <FormControlLabel value="ICICI Bank" control={<Radio />}
                                                                        label="ICICI Bank" />
                                                                </RadioGroup>
                                                                <Typography variant="h6" style={{ marginLeft: "auto" }}>   </Typography>
                                                            </AccordionSummary>
                                                            <WhiteAccordionDetails >
                                                                <StyledButton type="submit" style={{ background: "#ffc200", color: "black" }} >
                                                                    Pay ₹
                                                                </StyledButton>
                                                            </WhiteAccordionDetails>
                                                        </BlueAccordion>
                                                        <BlueAccordion   >
                                                            s     <AccordionSummary aria-controls="panel1-content" id="panel1-header" >
                                                                <RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    name="radio " style={{ display: "flex" }}>
                                                                    <FormControlLabel value="Kotak Mahindra Bank" control={<Radio />}
                                                                        label="Kotak Mahindra Bank" />
                                                                </RadioGroup>
                                                                <Typography variant="h6" style={{ marginLeft: "auto" }}>   </Typography>
                                                            </AccordionSummary>
                                                            <WhiteAccordionDetails >
                                                                <StyledButton type="submit" style={{ background: "#ffc200", color: "black" }} >
                                                                    Pay ₹
                                                                </StyledButton>
                                                            </WhiteAccordionDetails>
                                                        </BlueAccordion>
                                                        <BlueAccordion   >
                                                            <AccordionSummary aria-controls="panel1-content" id="panel1-header" >
                                                                <RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    name="radio-buttons-group" style={{ display: "flex" }}>
                                                                    <FormControlLabel value="Axis Bank" control={<Radio />}
                                                                        label="Axis Bank" />
                                                                </RadioGroup>
                                                                <Typography variant="h6" style={{ marginLeft: "auto" }}>   </Typography>
                                                            </AccordionSummary>
                                                            <WhiteAccordionDetails >
                                                                <StyledButton type="submit" style={{ background: "#ffc200", color: "black" }} >
                                                                    Pay ₹
                                                                </StyledButton>
                                                            </WhiteAccordionDetails>
                                                        </BlueAccordion>
                                                        <BlueAccordion   >
                                                            <AccordionSummary aria-controls="panel1-content" id="panel1-header" >
                                                                <RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    name="radio-buttons-group" style={{ display: "flex" }}>
                                                                    <FormControlLabel value="Federal Bank" control={<Radio />}
                                                                        label="Federal Bank" />
                                                                </RadioGroup>
                                                                <Typography variant="h6" style={{ marginLeft: "auto" }}>   </Typography>
                                                            </AccordionSummary>
                                                            <WhiteAccordionDetails >
                                                                <StyledButton type="submit" style={{ background: "#ffc200", color: "black" }} >
                                                                    Pay ₹
                                                                </StyledButton>
                                                            </WhiteAccordionDetails>
                                                        </BlueAccordion>
                                                        <BlueAccordion   >
                                                            <AccordionSummary aria-controls="panel1-content" id="panel1-header" >
                                                                <RadioGroup
                                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                                    name="radio-buttons-group" style={{ display: "flex" }}>
                                                                    <FormControlLabel value="Indian Overseas Bank" control={<Radio />}
                                                                        label="Indian Overseas Bank" />
                                                                </RadioGroup>
                                                                <Typography variant="h6" style={{ marginLeft: "auto" }}>   </Typography>
                                                            </AccordionSummary>
                                                            <WhiteAccordionDetails >
                                                                <StyledButton type="submit" style={{ background: "#ffc200", color: "black" }} >
                                                                    Pay ₹
                                                                </StyledButton>
                                                            </WhiteAccordionDetails>
                                                        </BlueAccordion>
                                                    </Typography>
                                                )}
                                                {activeId === "Cash on Delivery" && (
                                                    <Typography variant="h6" gutterBottom>
                                                        <StyledText paragraph>A ₹9 non-refundable fee is charged to help cover handling
                                                            costs for cash on delivery orders.</StyledText>
                                                        <StyledButton style={{ background: "#ffc200", color: "black" }} >
                                                            Place Order
                                                        </StyledButton>
                                                    </Typography>
                                                )}
                                                {activeId === "Have a Flipkart Gift Card?" && (
                                                    <Typography variant="h6" gutterBottom>
                                                        <form onSubmit={handleSubmit}>
                                                            <StyledText paragraph>Up to 15 gift cards can be added per transaction</StyledText>
                                                            <Pay>
                                                                <TextField label="Voucher Number " id="outlined-size-small"
                                                                    placeholder="Enter voucher number" size="small"
                                                                    value={Voucher} onChange={(e) => setVoucher(e.target.value)}
                                                                    error={!!errors.Voucher} helperText={errors.Voucher}
                                                                    style={{ width: "100%" }} />
                                                            </Pay>
                                                            <Pay>
                                                                <TextField label="Voucher PIN" id="outlined-size-small"
                                                                    placeholder="Enter voucher PIN" size="small"
                                                                    value={Pin} onChange={(e) => setPin(e.target.value)}
                                                                    error={!!errors.Pin} helperText={errors.Pin}
                                                                    style={{ width: "100%" }} />
                                                            </Pay>
                                                            <StyledButton type="submit" style={{ background: "#2a55e5", color: "white" }} >
                                                                Add Gift Card
                                                            </StyledButton>
                                                        </form>
                                                    </Typography>

                                                )}
                                            </Box>
                                        </Box>

                                    </Grid >
                                    <CartPayment size={4} >
                                        <TotalView cartItems={cartItems} />

                                    </CartPayment>

                                </StyledFinelpemt>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}
export default PaymentOpstion;