import { useState } from "react";
import styled from "@emotion/styled";
import { Dialog, Box, TextField, Button, Typography } from "@mui/material";


const Component = styled(Box)`
height:80vh;
width: 90vh;
`;

const Image = styled(Box)`
 background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
 height:80%;
width:35%;
padding:48px 25px;
&  > p , h5{
color:#FFFFFF;
 
}
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #FB641B;
   color: #fff;
   height: 48px;
    border-radius: 2px; 
    font-weight:600;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
   color: #2874f0;
   height: 48px;
    border-radius: 2px; 
    box-shadow:0 2px 4px 0 rgb(0 0 0 /20%);
`;

const Text = styled(Typography)`
font-size: 10px;
color:878787;
`;
const CreateAccount = styled(Typography)`
font-size: 14px;
 text-align:center;
 color:#2874f0;
 font-weight:500;
 cursor:pointer;
`;

const Wrapper = styled(Box)`
 display:flex;
 width:50%;
 flex-direction:column;
 padding:26px 35px;
 felx:1;
 & > div , & > button ,& > p{
 margin-top:20px;
 }
`;

const accountIntitialValuse =  {
    login :{
        view :'login',
         heading:'Login' ,

        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view :' signup',
        heading:"Looks like you're new here!",
        subHeading:'Sign up with your mobile number to get started'
    }
};

const LoginDialog = ({ open, setOpen }) => {

    const [account,toggleAccount] = useState(accountIntitialValuse.login);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountIntitialValuse.login)
    }

const toggleSignup =() =>{
    toggleAccount(accountIntitialValuse.signup)
}

    return (
        <Dialog open={open} onClose={handleClose}  >
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5"> {account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}> {account.subHeading}</Typography>
                    </Image>
                    {
                    account.view ==='login' ?
                        <Wrapper>
                            <TextField variant="standard" label="Enter Email/Mobile number" />
                            <TextField variant="standard" label="Enter  Password" />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton>Login</LoginButton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant="standard" label="Enter  Firstname" />
                        
                             <TextField variant="standard" label="Enter  Username" />
                              <TextField variant="standard" label="Enter  Email" />
                               <TextField variant="standard" label="Enter  Password" />
                                <TextField variant="standard" label="Enter  Phone" />
                            <LoginButton> Continue</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;
