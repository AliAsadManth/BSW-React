import styled from "@emotion/styled";
import React from 'react';
import LoginCard from "./components/LoginCard";

const Container = styled.nav`
  background-color: #e6e6e6;
  height: 100vh;
  width:100vw;
  display: grid;
  place-items: center;
`;


const LoginPage = () => {
    return (
        <Container>
            <LoginCard/>
        </Container>
    )
}

export default LoginPage
