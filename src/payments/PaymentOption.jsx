import React from 'react';
import {
  Box, Typography, Button, Grid, Link, styled, Radio, RadioGroup, FormControlLabel,
  TextField, List, ListItemButton, Divider
} from "@mui/material";
import { CreditCard, Gift, Truck, Calendar } from "lucide-react";
import RadioButton from '@mui/icons-material/RadioButtonChecked';
import { Wallet } from "lucide-react";
import LeftIcon from '@mui/icons-material/KeyboardBackspace';
import LockIcon from '@mui/icons-material/LockOutline';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import { useSelector } from "react-redux";
import AccountBalance from '@mui/icons-material/AccountBalance';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

//container
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

const Floating = styled(Box)`
margin-left: auto;
  font-size: 14px;
  display: flex;
  padding: 2px 6px;
  border-radius: 6px;
`;

const Leftside = styled(Box)`
margin-left:25px;
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

const PaymentOption = () => {
  // Cart items from redux store
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price.mrp, 0);
  const totalDiscount = cartItems.reduce(
    (acc, item) => acc + (item.price.mrp - item.price.cost),
    0
  );
  //UPI payment state
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const methods = [
    { id: "upi", label: "UPI", sub: "Pay by any UPI app", info: "Save upto ₹50 • 5 offers available", icon: <Wallet size={18} />, },
    {
      id: "card", label: "Credit / Debit / ATM Card", sub: "Add and secure cards as per RBI guidelines",
      info: "5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter", icon: <CreditCard size={18} />,
    },
    { id: "emi", label: "EMI", sub: "Get Debit and Cardless EMIs on HDFC Bank", icon: <Calendar size={18} />, disabled: true, },
    { id: "netbanking", label: "Net Banking", icon: <AccountBalance size={10} /> },
    { id: "cod", label: "Cash on Delivery", icon: <Truck size={18} /> },
    { id: "giftcard", label: "Have a Flipkart Gift Card?", icon: <Gift size={18} />, },

  ];

  // Card payment state
  const [cardNumber, setCardNumber] = useState("");
  const [validThru, setValidThru] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardNumberError, setCardNumberError] = useState(false);

  const handlePayment = () => {
    if (!cardNumber) {
      setCardNumberError(true);
      return;
    }
    alert("Payment initiated for ₹19,893");
  };

  //EMI payment state
  const [selectedBank, setSelectedBank] = useState("icici1");
  const banks = [
    {
      id: "icici1",
      name: "ICICI Bank",
      emi: "No Cost EMI ₹2,431/m",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/ICICI.svg",
    },
    {
      id: "icici2",
      name: "ICICI Bank",
      emi: "No Cost EMI ₹2,431/m",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/ICICI.svg",
    },
    {
      id: "Axis Bank3",
      name: "Axis Bank",
      emi: "No Cost EMI ₹2,431/m",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/AXIS.svg",
    },
    {
      id: "SBI",
      name: "SBI",
      emi: "No Cost EMI ₹2,431/m",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/SBI.svg",
    },
    {
      id: "HDFC Bank",
      name: "HDFC Bank",
      emi: "No Cost EMI ₹2,431/m",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/HDFC.svg",
    },
    {
      id: "Federal Bank",
      name: "Federal Bank",
      emi: "No Cost EMI ₹2,431/m",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/FEDERAL.svg",
    },
    {
      id: "Indian Overseas Bank",
      name: "Indian Overseas Bank",
      emi: "No Cost EMI ₹2,431/m",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/IOB.svg",
    },
  ];

  //Netbanking payment 
  const [selectedBank1, setSelectedBank1] = useState("sbi");

  const banks1 = [
    {
      id: "sbi",
      name: "State Bank of India",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/SBI.svg",
      amount: "₹19,639",
    },
    {
      id: "hdfc",
      name: "HDFC Bank",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/HDFC.svg",
      amount: "₹19,639",
    },
    {
      id: "icici",
      name: "ICICI Bank",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/ICICI.svg",
      amount: "₹19,639",
    },
    {
      id: "kotak",
      name: "Kotak Mahindra Bank",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/KOTAK.svg",
      amount: "₹19,639",
    },
    {
      id: "axis",
      name: "Axis Bank",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/AXIS.svg",
      amount: "₹19,639",
    },
    {
      id: "Federal Bank",
      name: "Federal Bank",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/FEDERAL.svg",
      amount: "₹19,639",
    },
    {
      id: "Indian Overseas Bank",
      name: "Indian Overseas Bank",
      logo: "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-gringotts/images/banks/IOB.svg",
      amount: "₹19,639",
    },
  ];


  // Have a Flipkart Gift Card
  const [voucherNumber, setVoucherNumber] = useState("");
  const [voucherPin, setVoucherPin] = useState("");
  return (
    <div>
      <Container container  >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Item>
                <LeftComponent>
                  <LeftIcon /> Complete Payment   <Floating  >
                    <StyledLockIcon />
                    100% Secure </Floating>
                </LeftComponent>
                <StyledFinelpemt>
                  <Grid size={8} >
                    <Box sx={{ display: "flex", height: "500px", border: "1px solid #e0e0e0", borderRadius: "8px" }}>
                      <Box sx={{ display: "flex", gap: 2, width: 900 }}  >
                        {/* Left Column: Payment Methods   */}
                        <Box sx={{ flex: 1, background: "#fff" }}>
                          <List>
                            {methods.map((method) => (
                              <ListItemButton key={method.id} selected={selectedMethod === method.id}
                                onClick={() => setSelectedMethod(method.id)}>
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    {method.icon}
                                    <Typography>{method.label}</Typography>
                                  </Box>
                                  {method.sub && (
                                    <Typography variant="body2" color="text.secondary">
                                      {method.sub}
                                    </Typography>
                                  )}
                                  {method.info && (
                                    <Typography variant="body2" color="success.main">
                                      {method.info}
                                    </Typography>
                                  )}
                                </Box>
                              </ListItemButton>
                            ))}
                          </List>
                        </Box>
                        {/* Right Column: Payment Details */}
                        <Box sx={{ flex: 1, background: "#fff", padding: 2, }} >
                          {/* UPI */}
                          {selectedMethod === "upi" && (
                            <>
                              <Typography variant="subtitle1" gutterBottom style={{ display: "flex", gap: 5, marginBottom: "20px" }}>
                                <RadioButton />  Add new UPI ID
                                <Typography style={{ marginLeft: "auto", color: "#5355e5" }}>How to<br></br> find</Typography>
                              </Typography>
                              <Leftside>
                                <TextField label="Enter your UPI ID" variant="outlined" size="small" style={{ width: "72%" }} />
                                <Button variant="contained" color="primary" sx={{ ml: 2 }}  >
                                  Verify
                                </Button>
                                <Button variant="contained" sx={{ mt: 2, width: "100%", backgroundColor: "#7a7676ff" }} >
                                  Pay ₹{(totalPrice - totalDiscount + 40 + 99).toLocaleString("en-IN")}
                                </Button>
                              </Leftside>
                            </>
                          )}
                          {/* Credit / Debit / ATM Card */}
                          {selectedMethod === "card" && (
                            <Typography>
                              <Box sx={{ maxWidth: 400, }} >
                                <Typography variant="body2" sx={{ mb: 2 }}>
                                  <strong>Note:</strong> Please ensure your card can be used for online transactions.{' '}
                                  <Link href="#" underline="hover">
                                    Learn More
                                  </Link>
                                </Typography>
                                <TextField
                                  label="Card Number"
                                  placeholder="XXXX XXXX XXXX XXXX"
                                  variant="outlined"
                                  fullWidth
                                  error={cardNumberError}
                                  helperText={cardNumberError ? 'Card number is required' : ''}
                                  value={cardNumber}
                                  size="small"
                                  onChange={(e) => {
                                    setCardNumber(e.target.value);
                                    setCardNumberError(false);
                                  }}
                                  sx={{ mb: 2 }}
                                />
                                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                  <TextField
                                    label="Valid Thru"
                                    placeholder="MM / YY"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    value={validThru}
                                    onChange={(e) => setValidThru(e.target.value)}
                                    error={!validThru}
                                    helperText={!validThru ? 'Enter valid month/year' : ''}
                                    sx={{ flex: 1 }}
                                  />
                                  <TextField
                                    label="CVV"
                                    placeholder="CVV"
                                    type="password"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    error={!cvv}
                                    helperText={!cvv ? 'CVV required' : ''}

                                    sx={{ flex: 1 }}
                                  />
                                </Box>
                                <Button
                                  variant="contained"
                                  fullWidth
                                  size="large"
                                  sx={{ bgcolor: '#fbc02d', color: '#000', fontWeight: 'bold' }}
                                  onClick={handlePayment}
                                >
                                  Pay ₹{(totalPrice - totalDiscount + 40 + 99).toLocaleString("en-IN")}
                                </Button>
                              </Box>
                            </Typography>
                          )}
                          {/* EMI */}
                          {selectedMethod === "emi" && (
                            <Typography style={{ overflowY: "auto", height: "100%" }} >
                              <Box sx={{ maxWidth: 500, background: "#fff" }}  >
                                <Typography variant="subtitle1" >
                                  Get EMI in 3 easy steps
                                </Typography>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2, mt: 1 }} >
                                  <Box sx={{ textAlign: "center", flex: 1 }}>
                                    <CreditCard size={20} color="#666" />
                                    <Typography variant="body2">Choose bank</Typography>
                                  </Box>

                                  <Box sx={{ textAlign: "center", flex: 1 }}>
                                    <Calendar size={20} color="#666" />
                                    <Typography variant="body2">Choose Plan</Typography>
                                  </Box>

                                  <Box sx={{ textAlign: "center", flex: 1 }}>
                                    <CheckBoxIcon size={20} color="#4caf50" />
                                    <Typography variant="body2">Confirm & Pay</Typography>
                                  </Box>
                                </Box>
                                {/* Bank EMI Options */}
                                <RadioGroup value={selectedBank} onChange={(e) => setSelectedBank(e.target.value)}  >
                                  {banks.map((bank) => (
                                    <Box key={bank.id} sx={{
                                      borderBottom: "1px solid #c2c2c2ff", py: 2, display: "flex",
                                      flexDirection: "column", gap: 1,
                                    }} >
                                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <FormControlLabel
                                          value={bank.id}
                                          control={<Radio />}
                                          label={
                                            <Box>
                                              <Typography fontWeight={500}>{bank.name}</Typography>
                                              <Typography variant="body2" color="success.main">
                                                {bank.emi}
                                              </Typography>
                                            </Box>
                                          }
                                          sx={{ flex: 1 }}
                                        />  <Box
                                          component="img"
                                          src={bank.logo}
                                          alt={bank.name}
                                          sx={{ width: 28, height: 28, objectFit: "contain", mr: 1 }}
                                        />

                                      </Box>
                                      {selectedBank === bank.id && (
                                        <Button variant="contained"
                                          sx={{
                                            mt: 1, width: "200px", borderRadius: "6px", textTransform: "none",
                                            backgroundColor: "#1976d2", alignSelf: "flex-start",
                                          }} >
                                          See Plans
                                        </Button>
                                      )}

                                    </Box>
                                  ))}
                                </RadioGroup>
                              </Box>

                            </Typography>
                          )}

                          {/* Netbanking */}
                          {selectedMethod === "netbanking" && (
                            <Typography style={{ overflowY: "auto", height: "100%" }}>
                              <Box sx={{ background: "#fff", }}>
                                <RadioGroup value={selectedBank1} onChange={(e) => setSelectedBank1(e.target.value)}>
                                  {banks1.map((bank) => (
                                    <Box key={bank.id} sx={{
                                      borderBottom: "1px solid #eee", py: 2,
                                      display: "flex", flexDirection: "column", gap: 1,
                                    }} >
                                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                                        <FormControlLabel value={bank.id} control={<Radio />}
                                          label={<Typography fontWeight={500}>{bank.name}</Typography>} sx={{ flex: 1 }} />

                                        <Box component="img" src={bank.logo} alt={bank.name}
                                          sx={{ width: 28, height: 28, objectFit: "contain", mr: 2 }} />
                                      </Box>
                                      {/* Show Pay button only for selected bank */}
                                      {selectedBank1 === bank.id && bank.amount && (
                                        <Button variant="contained" sx={{
                                          mt: 1, width: "88%", borderRadius: "6px", marginLeft: "28px",
                                          fontWeight: 600, backgroundColor: "#f9c826", color: "#000",
                                          "&:hover": { backgroundColor: "#e6b800" },
                                        }}
                                        >
                                               Pay ₹{(totalPrice - totalDiscount + 40 + 99).toLocaleString("en-IN")}
                                        </Button>
                                      )}
                                    </Box>
                                  ))}
                                </RadioGroup>
                              </Box></Typography>
                          )}
                          {/* Cash on Delivery */}
                          {selectedMethod === "cod" && (
                            <Typography>
                              <Box sx={{ maxWidth: 500, textAlign: "center", mt: 2, background: "#fff", }}  >
                                {/* Info Text */}
                                <Typography variant="body2" sx={{ mb: 2, color: "#555", fontSize: "14px" }}  >
                                  38,690 people used online payment options in the last hour. <br />
                                  Pay online now for safe and contactless delivery.
                                </Typography>

                                {/* Place Order Button */}
                                <Button variant="contained" fullWidth
                                  sx={{
                                    backgroundColor: "#f9c826", color: "#000", fontWeight: 600, textTransform: "none",
                                    fontSize: "16px", borderRadius: "6px",
                                    "&:hover": {
                                      backgroundColor:

                                        "#e6b800",
                                    },
                                  }}
                                >
                                  Place Order
                                </Button>
                              </Box>
                            </Typography>
                          )}
                          {/* Have a Flipkart Gift Card */}
                          {selectedMethod === "giftcard" && (
                            <Typography> <Box
                              sx={{ maxWidth: 500, background: "#fff", padding: 2, }}>
                              {/* Info Text */}
                              <Typography variant="body2" sx={{ mb: 2, color: "#9c9797ff", fontSize: "12px" }} >
                                Up to 15 gift cards can be added per transaction
                              </Typography>
                              {/* Voucher Number Field */}
                              <TextField label="Voucher Number" placeholder="Enter voucher number" fullWidth
                                size='small' value={voucherNumber} onChange={(e) => setVoucherNumber(e.target.value)}
                                error={voucherNumber.length > 0 && voucherNumber.length !== 16} helperText={
                                  voucherNumber.length > 0 && voucherNumber.length !== 16
                                    ? "Enter a valid 16 digit Voucher Number"
                                    : " "} sx={{ mb: 2 }} />
                              {/* Voucher PIN Field */}
                              <TextField label="Voucher PIN" placeholder="Enter voucher PIN" fullWidth
                                size='small' value={voucherPin} onChange={(e) => setVoucherPin(e.target.value)}
                                error={voucherPin.length > 0 && voucherPin.length !== 6} helperText={
                                  voucherPin.length > 0 && voucherPin.length !== 6
                                    ? "Enter a valid 6 digit Voucher PIN"
                                    : " "} sx={{ mb: 2 }} />
                              {/* Add Gift Card Button */}
                              <Button variant="contained" fullWidth sx={{
                                backgroundColor: "#1a5cff", textTransform: "none",
                                fontWeight: 600, fontSize: "15px", borderRadius: "6px",
                                "&:hover": {
                                  backgroundColor: "#154bcc",
                                },
                              }}
                              >
                                Add Gift Card
                              </Button>
                            </Box></Typography>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Grid >
                  <CartPayment size={4}>
                    <Box sx={{backgroundColor: "#f8faff",p: 2,borderRadius: 2, }}
                    >
                      {/* Price Row */}
                      <Box sx={{display: "flex",justifyContent: "space-between",mb: 1,}}>
                        <Typography sx={{ color: "#212121" }}>
                          Price ({cartItems.length} items)
                        </Typography>
                        <Typography sx={{ color: "#212121", fontWeight: 500 }}>
                          ₹{(totalPrice - totalDiscount + 40).toLocaleString("en-IN")}
                        </Typography>
                      </Box> 
                      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1, }}>
                        <Typography sx={{ color: "#212121" }}>Protect Promise Fee</Typography>
                        <Typography sx={{ color: "#212121", fontWeight: 500 }}>₹99</Typography>
                      </Box> 
                      <Divider sx={{ my:2 , borderColor: "#e0e0e0" }} /> 
                      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography sx={{ color: "#0a6cff" }}>
                          Total Amount
                        </Typography>
                        <Typography  sx={{ color: "#0a6cff", fontWeight: 700, fontSize: "16px" }}>
                          ₹{(totalPrice - totalDiscount + 40 + 99).toLocaleString("en-IN")}
                        </Typography>
                      </Box>
                    </Box>
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
export default PaymentOption;