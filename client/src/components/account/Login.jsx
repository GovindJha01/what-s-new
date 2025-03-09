import { useContext } from 'react';

import { Box, styled, Typography } from "@mui/material";
import { Logo, personImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { AccountContext } from '../../context/AccountProvider';


const BigBackGround = styled(Box)`
  height : 100vh;
  background-image :linear-gradient(to right,rgb(19, 3, 34),rgb(60, 68, 78),rgb(3, 3, 34));
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginDialog = styled(Box)`
  height: 80vh;
  width : 30vw;
  background-color :rgb(15, 27, 44);
  border: 2px solid rgb(37, 66, 107);
  border-radius: 5px;
  backdrop-filter: blur();
`
const StyledLogo = styled('img')({
    width: 40,
    margin: 20,
});

const StyledName = styled(Typography)`
    color : rgb(173, 14, 14);
    font-weight : 600;
    font-family: "Style Script", serif;
    font-size: 1.5rem;
    margin-top : 26px;
`
const StyledTitle = styled(Box)`
    display : flex;
`

const StyledProfile = styled('img')({
    width: 200,
    marginLeft: 100
})

const WelcomeMsg = styled(Typography)`
    color : #b6bec9;
    margin :10px 20px 10px;
    font-family : serif;
`

const Login = () => {
    const { setAccount } = useContext(AccountContext);
    const onLoginSuccess = (res) => {
        const decoded=jwtDecode(res.credential);
        setAccount(decoded);
    }
    const onLoginError = (err) => {
        console.log('Failed to login',err);
    }
    return (
        <div>
            <BigBackGround>
                <LoginDialog>
                    <StyledTitle>
                        <StyledLogo src={Logo} alt="App logo" />
                        <StyledName> What's new </StyledName>
                    </StyledTitle>
                    <WelcomeMsg>Welcome! sign in with your google account and start chatting quickly</WelcomeMsg>
                    <StyledProfile src={personImage} alt="Profile image for login" />

                    <Box style={{marginLeft:80,marginTop:40}}>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                            size='medium'
                            theme='filled_blue'
                            shape='rectangular'
                            width={'250px'}
                        />
                    </Box>
                </LoginDialog>
            </BigBackGround>
        </div>
    )
}

export default Login