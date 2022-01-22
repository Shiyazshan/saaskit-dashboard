import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/Store";
import styled from "styled-components";
import axios from "axios";

export default function Contact() {
  const { state } = useContext(Context);
  const active = state.active;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const accessToken = state.userdata.accessToken;

    axios
      .get("http://saaskit.tegain.com/api/contact/?page=2", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log(res, "response");
        setUsers(res.data.data.results);
      });
  }, []);
  //   console.log(users,"dsdfsd");

  let renderItems = () => {
    return users.map((user) => (
      <>
        <Ul>
          <Li>
            <First>
              <Form>
                <Input type="checkbox" id="select" name="select" />
              </Form>
              <Box>
                <Name>{user.name}</Name>
              </Box>
            </First>

            <Box>
              <Email>{user.email}</Email>
            </Box>
            <Box>
              <Company>{user.company_name}</Company>
            </Box>
            <Box>
              <Role>{user.role}</Role>
            </Box>
            <Box>
              <Forecast>{user.forecast}</Forecast>
            </Box>
            <Box>
              <Recent>{user.recent_activity_naturaltime}</Recent>
            </Box>
          </Li>
        </Ul>
      </>
    ));
  };

  return (
    <ContactPage active={active}>
      <FirstRow>
        <Title>
          Company: <Span>All</Span>
        </Title>
        <Button>Add Contact</Button>
      </FirstRow>
      <Div>
        <Ul>
          <Li>
            <Form>
              <Input className="input" type="checkbox" id="select" name="select" />
              <Box>
                <Text>Name</Text>
            </Box>
            </Form>
            
            <Box>
                <Text>Email</Text>
            </Box>
            <Box>
                <Text>Company name</Text>
            </Box>
            <Box>
                <Text>Role</Text>
            </Box>
            <Box>
                <Text>Forecast</Text>
            </Box>
            <Box>
                <Text>Recent activity</Text>
            </Box>
          </Li>
        </Ul>
        {renderItems()}
      </Div>
    </ContactPage>
  );
}
const ContactPage = styled.div`
  z-index: 10;
  margin-top: 50px;
  transition: 0.4s ease;
  margin-left: ${({ active }) => (active ? "328px" : "100px")};
  width: ${({ active }) => (active ? "78%" : "90%")};
`;
const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  margin-bottom: 15px;
  padding-top: 100px;
`;
const Div = styled.div`
  width: 100%;
  background: #fff;
  color: black;
`;
const Title = styled.div``;
const Span = styled.span``;
const Button = styled.button`
  margin-right: 10px;
  padding: 6px 20px;
  background: #0575e6;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;
const Ul = styled.ul`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  border-bottom: 1px solid #ebeff2;
  padding: 10px;
`;
const Li = styled.li`
  /* margin-left: 96px; */
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 11px;
  line-height: 19px;
  letter-spacing: 0.01em;
  display: flex;
  justify-content: space-between;
  color: #707683;
  width: 100%;
  text-align: left;
  &:first-child {
    margin-left: 10px;
  }
  &:last-child {
    margin-right: 10px;
  }
  &:nth-child(2) {
    width: 226px;
    font-size: 15px;
    font-weight: 600;
    text-align: left;
    color: #000;
  }
`;
const Form = styled.form`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  cursor: pointer;
`;

const Name = styled.div``;
const Email = styled.div``;
const Company = styled.div``;
const Role = styled.div``;
const Forecast = styled.div``;
const Recent = styled.div``;
const Box = styled.div`
  width: 114px;
`;
const First = styled.div`
  display: flex;
`;
const Text = styled.h4`

`;

