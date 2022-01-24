import React, { useState, useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../context/Store";

import styled from "styled-components";
import Dashboard from "../../assets/images/icon/dashboard.png";
import Tasks from "../../assets/images/icon/tasks.png";
import Email from "../../assets/images/icon/email.png";
import Contacts from "../../assets/images/icon/contacts.png";
import Chat from "../../assets/images/icon/chat.png";
import Deals from "../../assets/images/icon/deals.png";
import SettingsImg from "../../assets/images/icon/settings.png";
import Profileimg from "../../assets/images/image 2.png";
import Toggle from "../../assets/images/icon/toggle.png";
import Bell from "../../assets/images/icon/notifications.png";
import Search from "../../assets/images/icon/Vector.png";
import ActiveDashboard from "../../assets/images/icon/dashboard-active.png";
import ActiveContacts from "../../assets/images/icon/contacts-active.png";
import ActiveChat from "../../assets/images/icon/chat-active.png";
import ActiveTasks from "../../assets/images/icon/tasks-active.png";
import ActiveEmail from "../../assets/images/icon/email-active.png";
import ActiveDeals from "../../assets/images/icon/deals-active.png";
import ActiveSettingsImg from "../../assets/images/icon/settings-active.png";
import ActiveToggle from "../../assets/images/icon/toggle-active.png";

export default function Sidebar() {
  const [menudata, setMenudata] = useState("");
  const { state, dispatch } = useContext(Context);

  const logout = (e) => {
    localStorage.clear();
  };
  const active = state.active;
  const HoverActive = (bool) => {
    dispatch({
      type: "SET_ACTIVE",
      active: bool,
    });
    console.log(state);
  };
  return (
    <>
      <Container>
        <Aside
          onMouseOver={() => HoverActive(true)}
          onMouseOut={() => HoverActive(false)}
          active={active}
        >
          <TopSection>
            <TopText>SaaS Kit</TopText>
          </TopSection>
          <User>
            <UserImageContainer active={active}>
              <UserImage src={Profileimg} alt="ImageProfileImage" />
            </UserImageContainer>
            <UserDetail active={active}>
              <UserName>Sierra Ferguson</UserName>
              <UserEmail>s.ferguson@gmail.com</UserEmail>
            </UserDetail>
          </User>
          <Nav>
            <Ul>
              <nav>
                <List to="/" onClick={() => setMenudata("dashboard")}>
                  <ImageContainer>
                    {menudata === "dashboard" ? (
                      <ActiveImage src={ActiveDashboard} alt="Image" />
                    ) : (
                      <Image src={Dashboard} alt="Image" />
                    )}
                  </ImageContainer>
                  <ItemName className={menudata === "dashboard" && "active"}>
                    Dashboard
                  </ItemName>
                </List>
                <List to="/task" onClick={() => setMenudata("task")}>
                  <ImageContainer active={active}>
                    {menudata === "task" ? (
                      <ActiveImage src={ActiveTasks} alt="Image" />
                    ) : (
                      <Image src={Tasks} alt="Image" />
                    )}
                  </ImageContainer>
                  <ItemName className={menudata === "task" && "active"}>
                    Tasks
                  </ItemName>
                </List>
                <List to="/" onClick={() => setMenudata("email")}>
                  <ImageContainer>
                    {menudata === "email" ? (
                      <ActiveImage src={ActiveEmail} alt="Image" />
                    ) : (
                      <Image src={Email} alt="Image" />
                    )}
                  </ImageContainer>
                  <ItemName className={menudata === "email" && "active"}>
                    Email
                  </ItemName>
                </List>
                <List to="/contact" onClick={() => setMenudata("contacts")}>
                  <ImageContainer>
                    {menudata === "contacts" ? (
                      <ActiveImage src={ActiveContacts} alt="Image" />
                    ) : (
                      <Image src={Contacts} alt="Image" />
                    )}
                  </ImageContainer>
                  <ItemName className={menudata === "contacts" && "active"}>
                    Contacts
                  </ItemName>
                </List>

                <List to="/chat" onClick={() => setMenudata("chat")}>
                  <ImageContainer>
                    {menudata === "chat" ? (
                      <ActiveImage src={ActiveChat} alt="Image" />
                    ) : (
                      <Image src={Chat} alt="Image" />
                    )}
                  </ImageContainer>
                  <ItemName className={menudata === "chat" && "active"}>
                    Chat
                  </ItemName>
                </List>

                <List to="/" onClick={() => setMenudata("deals")}>
                  <ImageContainer>
                    {menudata === "deals" ? (
                      <ActiveImage src={ActiveDeals} alt="Image" />
                    ) : (
                      <Image src={Deals} alt="Image" />
                    )}
                  </ImageContainer>
                  <ItemName className={menudata === "deals" && "active"}>
                    Deals
                  </ItemName>
                </List>
              </nav>
            </Ul>
            <Bottom>
              <Settings onClick={() => setMenudata("settings")}>
                <SettingsImageContainer active={active}>
                  {menudata === "settings" ? (
                    <ActiveImage src={ActiveSettingsImg} alt="Image" />
                  ) : (
                    <SettingsImage src={SettingsImg} alt="Image" />
                  )}
                </SettingsImageContainer>

                <SettingsText className={menudata === "settings" && "active"}>
                  Settings
                </SettingsText>
              </Settings>
              <ToggleBar onClick={() => setMenudata("toggle")}>
                <ToggleImageContainer>
                  {menudata === "toggle" ? (
                    <ActiveImage src={ActiveToggle} alt="Image" />
                  ) : (
                    <ToggleImage src={Toggle} alt="Image" />
                  )}
                </ToggleImageContainer>
                <ToggleText className={menudata === "toggle" && "active"}>
                  Toggle Sidebar
                </ToggleText>
              </ToggleBar>
            </Bottom>
          </Nav>
        </Aside>
        <TopBar active={active}>
          <TopBarForm>
            <InputSearch
              type="text"
              name="search"
              placeholder="Global Search"
            />
            <TopRight>
              <Logout onClick={logout}>Logout</Logout>
              <BellImageContainer>
                <BellImage src={Bell} alt="Image" />
              </BellImageContainer>
            </TopRight>
          </TopBarForm>
        </TopBar>
      </Container>
      <Outlet />
    </>
  );
}

const Container = styled.div`
  display: flex;
`;
const Aside = styled.aside`
  transition: 0.4s ease;
  width: ${({ active }) => (active ? "280px" : "72px")};
  min-height: 700px;
  box-shadow: 6px 0px 18px rgba(0, 0, 0, 8%);
  position: fixed;
  z-index: 10;
  background: #fff;
  overflow: hidden;
`;
const TopSection = styled.div`
  border-bottom: 1px solid #ebeff2;
  text-align: left;
  min-width: 100px;
  padding: 14px;
`;
const TopText = styled.h2`
  font-size: 24px;
  font-family: "Open Sans";
  font-weight: 600;
  color: #109cf1;
`;
const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const UserImageContainer = styled.div`
  margin-right: 10px;
`;
const UserDetail = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
`;
const UserImage = styled.img`
  border-radius: 50%;
`;
const UserName = styled.h4`
  color: #192a3e;
`;
const UserEmail = styled.h4`
  color: #90a0b7;
  font-size: 14px;
`;
const Nav = styled.div``;
const Ul = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid #ebeff2;
`;
const List = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 25px;
  cursor: pointer;
  text-decoration: none;
`;
const ImageContainer = styled.div`
  margin-right: 28px;
`;
const Image = styled.img``;
const ActiveImage = styled.img``;
const ItemName = styled.h4`
  color: #334d6e;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 14px;
  &.active {
    color: #109cf1;
  }
`;
const Settings = styled.div`
  display: flex;
  margin-left: 20px;
`;
const SettingsImageContainer = styled.div`
  margin-right: 28px;
`;
const SettingsImage = styled.img``;
const SettingsText = styled.h4`
  color: #334d6e;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  &.active {
    color: #109cf1;
  }
`;
const Bottom = styled.div`
  height: 250px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const ToggleBar = styled.div`
  display: flex;
  margin-left: 20px;
`;
const ToggleImageContainer = styled.div`
  margin-right: 38px;
`;
const ToggleImage = styled.img``;
const ToggleText = styled.h4`
  color: #90a0b7;
  font-family: "Poppins";
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 20px;
  cursor: pointer;
  &.active {
    color: #109cf1;
  }
`;
const TopBar = styled.div`
  width: 96%;
  height: 61px;
  border-bottom: 1px solid #ebeff2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: #fff;
  padding-left: ${({ active }) => (active ? "259px" : "63px")};
  transition: 0.4s ease;
  z-index: 5;
`;
const TopBarForm = styled.form`
  width: 94%;
  display: flex;
`;
const InputSearch = styled.input`
  padding: 12px 44px;
  width: 70%;
  background: url(${Search}) no-repeat;
  background-position: center left 22px;
  margin-left: 20px;
  border: none;
  &::placeholder {
    color: #90a0b7;
  }
`;
const TopRight = styled.div`
  display: flex;
  position: fixed;
  right: 0;
`;
const Logout = styled.button`
  background: #f7685b;
  padding: 6px 26px;
  border-radius: 4px;
  color: #fff;
  border: none;
  font-size: 12px;
  font-family: "Poppins";
  margin-right: 10px;
  cursor: pointer;
`;
const BellImageContainer = styled.div`
  margin-right: 30px;
`;
const BellImage = styled.img``;
