import React from 'react';

import { Typography, Grid, Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

// components
import CartItem from "../cart/cartItem";



const Container = styled(Grid)(({ theme }) => ({


  [theme.breakpoints.down("md")]: {
    padding: "20px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "8px",
  },
}));



const ButtonWrapper = styled(Box)(({ theme }) => ({
  width: "800px",
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

const StyledButton = styled(Button)(({ theme }) => ({

  background: "#fb641b",
  color: "#fff",
  width: "250px",
  height: "48px",
  borderRadius: "2px",
  fontSize: "14px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: "13px",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
    paddingRight: 0,
  },
}));

const Deliver = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.length ? (
        <Container container spacing={1}>
          <LeftComponent item lg={6} md={6} sm={12} xs={12}>

            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />

            ))}<Typography style={{ marginTop: "50px" }}> Delivery by Tue Aug 26</Typography>

          </LeftComponent>
          <ButtonWrapper   >
            <StyledButton component={Link} to="/PaymentOpstion ">
              CONTINUE
            </StyledButton>
          </ButtonWrapper>
        </Container>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default Deliver;
