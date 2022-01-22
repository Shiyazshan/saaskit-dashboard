import React, { useContext } from "react";
import { Context } from "./context/Store";
import "../../src/App.css";
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
import Dot from "../assets/images/Vector.png";
import ActiveImgDot from "../assets/images/Ellipse.png";
import ImojIcon from "../assets/images/imoji.png";
import Attachment from '../assets/images/attachment.png'


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

              <Li className="rebecca">
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

              <Li className="rebecca">
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
              <Li className="rebecca">
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

              <Li className="jones">
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

              <Li className="jones">
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
              <Li className="jones">
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
              <Li className="jones">
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
              <Li className="jones">
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
          <ItemRight>
            <ChatContainer>
              <TopBar>
                <TopRight>
                  <USerImgContainer>
                    <UsrImg src={Lindsey} alt="img" />
                  </USerImgContainer>
                  <UserName>Lindsey Stroud</UserName>
                  <ActiveImgContainer>
                    <ActiveImg src={ActiveImgDot} alt="Image" />
                  </ActiveImgContainer>
                </TopRight>
                <TopLeft>
                  <OptionContainer>
                    <OptionImg src={Dot} alt="image" />
                  </OptionContainer>
                </TopLeft>
              </TopBar>
              <ChatItems>
                <ChatItem>
                  <UserInfo>
                    <UserImgCon>
                      <UsrImgIco src={Lindsey} alt="Image" />
                    </UserImgCon>
                    <UsrName>Lindsey Stroud</UsrName>
                    <Time>11:12</Time>
                  </UserInfo>
                  <UserMessage>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Nibh mauris cursus mattis molestie. Ligula
                    ullamcorper malesuada proin libero nunc consequat interdum.
                    A lacus vestibulum sed arcu non odio euismod lacinia.
                    Aliquet eget sit amet tellus cras adipiscing enim.
                  </UserMessage>
                </ChatItem>
                <ChatItem className="bgnone">
                  <UserInfo className="info">
                    <UserImgCon>
                      <UsrImgIco src={Rebecca} alt="Image" />
                    </UserImgCon>
                    <UsrName>You</UsrName>
                    <Time>11:20</Time>
                  </UserInfo>
                  <UserMessage className="message">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Id aliquet lectus proin nibh nisl. Suspendisse
                    faucibus interdum posuere lorem ipsum dolor sit amet
                    consecteturg.
                  </UserMessage>
                </ChatItem>
                <ChatItem>
                  <UserInfo>
                    <UserImgCon>
                      <UsrImgIco src={Lindsey} alt="Image" />
                    </UserImgCon>
                    <UsrName>Lindsey Stroud</UsrName>
                    <Time>11:12</Time>
                  </UserInfo>
                  <UserMessage>
                    Your idea for this application is nice!{" "}
                  </UserMessage>
                </ChatItem>
                <ChatItem>
                  <UserInfo>
                    <UserImgCon>
                      <UsrImgIco src={Lindsey} alt="Image" />
                    </UserImgCon>
                    <UsrName>Lindsey Stroud</UsrName>
                    <Status>Typing a message...</Status>
                  </UserInfo>
                </ChatItem>
              </ChatItems>
              <ChatBottom>
                <ChatForm className="form">
                  <InputSearch type="search" placeholder="Type a message..." />
                </ChatForm >
                <Attachments>
                    <Imoji src={ImojIcon} alt="Image" />
                    <Attach src={Attachment} alt="Image" />
                </Attachments>
              </ChatBottom>
            </ChatContainer>
          </ItemRight>
        </Items>
      </Container>
    </>
  );
};

export default Chat;
const ItemRight = styled.div`
  width: 65%;
`;
const Container = styled.div`
  transition: 0.4s ease;
  width: 75%;
  margin-left: ${({ active }) => (active ? "328px" : "100px")};
  margin-top: 100px;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  display: flex;
`;
const Items = styled.div`
  display: flex;
  width: 100%;
`;
const ItemLeft = styled.div`
  width: 36%;
  margin-right: 20px;
`;
const Ul = styled.ul``;
const Li = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ebeff2;
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
  color: #192a3e;
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
const InnerMessage = styled.div`
  display: flex;
  align-items: center;
  margin-left: 34px;
  font-size: 13px;
  color: #90a0b7;
  font-family: "Poppins";
`;
const WordpressImage = styled.img`
  width: 5%;
`;

const Text = styled.h4``;

const ChatContainer = styled.div`
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
  background: #fff;
  border-radius: 4px;
`;
const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 26px;
  border-bottom: 1px solid #ebeff2;
`;
const TopRight = styled.div`
  display: flex;
`;
const USerImgContainer = styled.div`
  margin-right: 10px;
`;
const UsrImg = styled.img`
  border-radius: 50%;
`;
const UserName = styled.h4`
    color: #192A3E;
    font-family: 'Poppins';
    font-weight; 500;
    font-size: 15px;
`;
const ActiveImgContainer = styled.div`
  margin-left: 10px;
`;
const ActiveImg = styled.img``;
const TopLeft = styled.div``;
const OptionContainer = styled.div``;
const OptionImg = styled.img``;

const ChatItems = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`;
const ChatItem = styled.div`
  text-align: left;
  margin-top: 40px;
  &:last-child{
      margin-bottom: 20px;
  }
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
const UserImgCon = styled.div`
  margin-right: 10px;
`;
const UsrImgIco = styled.img`
  border-radius: 50%;
`;
const UsrName = styled.div`
  color: #192a3e;
  font-size: 12px;
  font-family: "Poppins";
  margin-right: 10px;
  font-weight: 600;
`;
const Time = styled.h5`
  color: #90a0b7;
  font-weight: 400;
  font-family: "Poppins";
  font-size: 11px;
`;
const UserMessage = styled.h4`
  background: #109cf1;
  color: #fff;
  padding: 16px 26px;
  border-radius: 0px 8px 8px 8px;
  width: 72%;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 12px;
  line-height: 21.5px;
`;
const Status = styled.h4`
  font-style: italic;
  font-family: "Poppins";
  color: #90a0b7a6;
  font-size: 11px;
  font-weight: 300;
`;

const ChatBottom = styled.div`
    display: flex;
    padding: 8px;
    border-top: 1px solid #EBEFF2;
    align-items: center;
`;
const ChatForm = styled.form`
    width: 94%;
`;
const InputSearch = styled.input`
    border: none;
    border-right: 1px solid #EBEFF2;
    width: 98%;
    padding: 12px;
}

`;
const Attachments = styled.div``;
const Imoji = styled.img`
    margin-right:15px;
`;
const Attach = styled.img``;

