import { Typography, Grid, Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// components
import CartItem from "./cartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  background: "#ddddddff",
  [theme.breakpoints.down("md")]: {
    padding: "20px 20px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "8px",
  },
}));

const Header = styled(Box)(({ theme }) => ({
  padding: "10px 15px",
  background: "#fff",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
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
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
    paddingRight: 0,
  },
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <>
      {cartItems.length ? (
        <Container container spacing={1}>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography variant="h6" sx={{ fontSize: { xs: "15px", sm: "16px" } }}>
                My Cart ({cartItems.length})
              </Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <ButtonWrapper   >
              <StyledButton component={Link} to="/LoginplaceOrder">
                Place Order
              </StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
