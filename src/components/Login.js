import React, { useState, useContext } from "react";
import { BASE_URL } from "../axiosConfig";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Context } from "./context/Store";

import "../App.css";
import Bgimage from "../assets/images/Bg.jpg";
import Email from "../assets/images/Vector.svg";
import Password from "../assets/images/lock.png";
import Ellipse1 from "../assets/images/Ellipse 1.png";
import Ellipse2 from "../assets/images/Ellipse 2.png";

export default function Login({ isLoggedin, setLoggedin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { state, dispatch } = useContext(Context);
  const { name } = state.userdata.name;
  const accessToken = state.accessToken;

  console.log(state.userdata, "my name");

  const navigate = useNavigate();
  console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}`, { username, password })
      .then((response) => {
        let { data, status } = response.data;
        dispatch({
          type: "UPDATE_USER",
          payload: {
            accessToken: data.access,
            isVerified: true,
          },
        });
        navigate.push("/Dashboard");
        console.log(status);
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 401) {
          setMessage("account is not valid");
        }
      });
  };

  return (
    <>
      <MainContainer>
        <Wrapper>
          <SectionLeft>
            <Ellipse>
              <EllipseOne src={Ellipse1} alt="one" />
              <EllipseTwo src={Ellipse2} alt="two" />
            </Ellipse>
            <LeftContent>
              <Contents>
                <Text>GoFinance</Text>
                <SubHeading>
                  The most popular peer to peer lending at SEA
                </SubHeading>
                <Button>Read More</Button>
              </Contents>
            </LeftContent>
          </SectionLeft>
          <SectionRight>
            <RightContent>
              <Title>SaaS Kit</Title>
              <TextHead>Hello!</TextHead>
              <SubText>Sign Up to Get Started</SubText>
              <Form onSubmit={handleSubmit}>
                <InputEmail
                  type="text "
                  placeholder="Email Address"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <InputPassword
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {message && <Message>{message}</Message>}
                <FormButton type="submit">Login</FormButton>
              </Form>
            </RightContent>
          </SectionRight>
        </Wrapper>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div``;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionLeft = styled.div`
  background: url(${Bgimage});
  width: 1060px;
  height: 100vh;
`;
const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 28%;
`;
const Ellipse = styled.div``;
const EllipseOne = styled.img`
  position: absolute;
  bottom: 0;
`;
const EllipseTwo = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Contents = styled.div``;
const Text = styled.h2`
  color: white;
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
`;
const SubHeading = styled.h3`
  color: white;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 8px 30px;
  background: #0575e6;
  border: none;
  color: white;
  border-radius: 8px;
  transition: ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: ease-in-out;
    transition-duration: 0.8s;
  }
`;
const SectionRight = styled.div`
  width: 580px;
`;
const RightContent = styled.div`
  margin-left: 50px;
`;
const Title = styled.h1`
  font-weight: 600;
  color: #109cf1;
  line-height: 59px;
  margin-bottom: 35px;
  font-family: "Open Sans";
`;
const TextHead = styled.h2`
  color: #333333;
  font-weight: 700;
  font-family: "poppins";
  margin-bottom: 5px;
`;

const SubText = styled.h4`
  font-family: "poppins";
  font-weight: 400;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputEmail = styled.input`
  padding: 18px 26px 18px 61px;
  width: 272px;
  border-radius: 8px;
  border: 1px solid #cecccc;
  margin-bottom: 20px;
  background: url(${Email});
  background-repeat: no-repeat;
  background-position: left 30px center;
`;

const InputPassword = styled.input`
  padding: 18px 26px 18px 61px;
  width: 272px;
  border-radius: 8px;
  border: 1px solid #cecccc;
  margin-bottom: 20px;
  background: url(${Password});
  background-repeat: no-repeat;
  background-position: left 30px center;
`;
const Message = styled.h2`
  font-size: 14px;
  font-family: "Poppins";
  color: red;
`;
const FormButton = styled.button`
  padding: 18px 26px 18px 26px;
  width: 362px;
  background: #0575e6;
  border: none;
  color: #fff;
  border-radius: 8px;
  margin-bottom: 20px;
  transition: ease-in-out;

  &:hover {
    transform: scale(1.01);
    transition: ease-in-out;
    transition-duration: 0.3s;
    background: #0575e6c7;
  }
`;
