import React, { useContext } from "react";
import { Context } from "../context/Store";
import styled from "styled-components";
import Lindsey from "../assets/images/lindsey.png";
import Nicci from "../assets/images/nicci.png";
import Word from "../assets/images/word.png";
import Rebecca from "../assets/images/rebecca.png";
import Jane from "../assets/images/jane.png";
import Jones from "../assets/images/jones.png";
import Martin from "../assets/images/martin.png";
import Franz from "../assets/images/franz.png";
import Judith from "../assets/images/judith.png";
import John from "../assets/images/judith.png";
import Green from "../assets/images/green.png";
import Error from "../assets/images/error.png";
import Sent from "../assets/images/sent.png";
import "../../src/App.css";

const Chat = () => {
  const { state } = useContext(Context);
  const active = state.active;
  return (
    <>
      <Container active={active}>
        <Items>
          <ItemLeft>
            <Ul>
              <Li>
                <SectionTop>
                  <SectionLeft>
                    <ImageContainer>
                      <UserImage src={Lindsey} alt="Image" />
                    </ImageContainer>
                    <Name>Lindsey Stroud</Name>
                  </SectionLeft>
                  <Date>30 Dec 2018, 12:34</Date>
                </SectionTop>
                <SectionBottom>
                  <Message>Your idea for this application is nice!</Message>
                  <Counter>1</Counter>
                </SectionBottom>
              </Li>

              <Li>
                <SectionTop>
                  <SectionLeft>
                    <ImageContainer>
                      <UserImage src={Nicci} alt="Image" />
                    </ImageContainer>
                    <Name>Nicci Troiani</Name>
                  </SectionLeft>
                  <Date>30 Dec 2018, 11:12</Date>
                </SectionTop>
                <SectionBottom>
                  <Message>Nicci is typing a message</Message>
                  <Counter>2</Counter>
                </SectionBottom>
              </Li>

              <Li className="wordpress">
                <SectionTop>
                  <SectionLeft>
                    <ImageContainer>
                      <UserImage src={Word} alt="Image" />
                    </ImageContainer>
                    <Name>WordPress conferesion</Name>
                  </SectionLeft>
                  <Date>29 Dec 2018, 18:05</Date>
                </SectionTop>
                <SectionBottom>
                  <InnerMessage>
                    You:<Message>Sure!</Message>
                  </InnerMessage>
                  <WordpressImage src={Green} alt="image" />
                </SectionBottom>
              </Li>

              <Li className="wordpress">
                <SectionTop>
                  <SectionLeft>
                    <ImageContainer>
                      <UserImage src={Rebecca} alt="Image" />
                    </ImageContainer>
                    <Name>Rebecca Moore</Name>
                  </SectionLeft>
                  <Date>29 Dec 2018, 18:05</Date>
                </SectionTop>
                <SectionBottom>
                  <InnerMessage>
                    You:<Message>Sure!</Message>
                  </InnerMessage>
                  <WordpressImage src={Error} alt="image" />
                </SectionBottom>
              </Li>
              <Li>
                <SectionTop>
                  <SectionLeft>
                    <ImageContainer>
                      <UserImage src={Jane} alt="Image" />
                    </ImageContainer>
                    <Name>Jane Doe</Name>
                  </SectionLeft>
                  <Date>29 Dec 2018, 16:45</Date>
                </SectionTop>
                <SectionBottom>
                  <InnerMessage>
                    You:<Message>Sure!</Message>
                  </InnerMessage>
                  <WordpressImage src={Sent} alt="image" />
                </SectionBottom>
              </Li>

              <Li>
                <SectionTop>
                  <SectionLeft>
                    <ImageContainer>
                      <UserImage src={Jones} alt="Image" />
                    </ImageContainer>
                    <Name>Jones Dermot</Name>
                  </SectionLeft>

                  <Date>29 Dec 2018, 13:37</Date>
                </SectionTop>
                <SectionBottom>
                  <Text>I have a new feature for this project.</Text>
                </SectionBottom>
              </Li>

              <Li>
                <SectionTop>
                  <SectionLeft>
                    <ImageContainer>
                      <UserImage src={Martin} alt="Image" />
                    </ImageContainer>
                    <Name>Martin Merces</Name>
                  </SectionLeft>
                  <Date>29 Dec 2018, 12:48</Date>
                </SectionTop>
                <SectionBottom>
                  <Text>Martin is typing a message...</Text>
                </SectionBottom>
              </Li>
              <Li>
                <SectionTop>
                  <SectionLeft>
                    <ImageContainer>
                      <UserImage src={Franz} alt="Image" />
                    </ImageContainer>
                    <Name>Franz Ferdinand</Name>
                  </SectionLeft>
                  <Date>28 Dec 2018, 15:27</Date>
                </SectionTop>
                <SectionBottom>
                  <Text>Can we schedule an online meeting? Thanks! </Text>
                </SectionBottom>
              </Li>
              <Li>
                <SectionTop>
                  <SectionLeft>
                    <ImageContainer>
                      <UserImage src={Judith} alt="Image" />
                    </ImageContainer>
                    <Name>Judith Williams</Name>
                  </SectionLeft>
                  <Date>28 Dec 2018, 13:19</Date>
                </SectionTop>
                <SectionBottom>
                  <Text>Thank you. See you later!</Text>
                </SectionBottom>
              </Li>
              <Li>
                <SectionTop>
                  <SectionLeft>
                    <ImageContainer>
                      <UserImage src={John} alt="Image" />
                    </ImageContainer>
                    <Name>John Smith</Name>
                  </SectionLeft>
                  <Date>27 Dec 2018, 21:22</Date>
                </SectionTop>
                <SectionBottom>
                  <Text>It’s fine</Text>
                </SectionBottom>
              </Li>
            </Ul>
          </ItemLeft>
        </Items>
      </Container>
    </>
  );
};

export default Chat;

const Container = styled.div`
  transition: 0.4s ease;
  width: 70%;
  margin-left: ${({ active }) => (active ? "328px" : "100px")};
  margin-top: 100px;
`;
const Items = styled.div``;
const ItemLeft = styled.div``;
const Ul = styled.ul``;
const Li = styled.li`
  padding: 15px;
  border-bottom: 1px solid grey;
  width: 30%;
  background: #fff;
`;
const SectionTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SectionLeft = styled.div`
  display: flex;
`;
const ImageContainer = styled.div`
  margin-right: 10px;
`;
const UserImage = styled.img`
  border-radius: 50%;
`;
const Name = styled.h3`
  font-family: "Poppins";
  font-weight: 600;
  color: #109cf1;
  font-size: 14px;
  margin-right: 67px;
`;
const Date = styled.h4`
  font-family: "Poppins";
  font-weight: 400;
  color: #90a0b7;
  font-size: 12px;
`;
const SectionBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Message = styled.h4`
  margin-left: 34px;
  font-family: "Poppins";
  color: #90a0b7;
  font-weight: 500;
  font-size: 12px;
`;
const Counter = styled.div`
  border-radius: 4px;
  color: #fff;
  padding: 2px 6px;
  font-size: 11px;
  background: #109cf1;
`;
const InnerMessage = styled.div``;
const WordpressImage = styled.div``;

const Text = styled.div``;
