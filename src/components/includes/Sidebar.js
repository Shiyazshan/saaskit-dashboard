import React from 'react';
import styled from 'styled-components'
import Dashboard from '../../assets/images/icon/dashboard.png'
import Tasks from '../../assets/images/icon/tasks.png'
import Email from '../../assets/images/icon/email.png'
import Contacts from '../../assets/images/icon/contacts.png'
import Deals from '../../assets/images/icon/deals.png'
import SettingsImg from '../../assets/images/icon/settings.png'
import Profileimg from '../../assets/images/image 2.png'
import Toggle from '../../assets/images/icon/toggle.png'
import Bell from '../../assets/images/icon/notifications.png'
import Search from '../../assets/images/icon/Vector.png'


export default function Sidebar() {
    return (
        <>
            <Container>
                <Aside>
                    <TopSection>
                        <TopText>SaaS Kit</TopText>
                    </TopSection>
                    <User>
                        <UserImageContainer>
                            <UserImage src={Profileimg} alt="ImageProfileImage" />
                        </UserImageContainer>
                        <UserDetail>
                            <UserName>Sierra Ferguson</UserName>
                            <UserEmail>s.ferguson@gmail.com</UserEmail>
                        </UserDetail>
                    </User>
                    <Nav>
                        <Ul>
                            <List>
                                <ImageContainer>
                                    <Image src={Dashboard} alt="Image" />
                                </ImageContainer>
                                <ItemName>Dashboard</ItemName>
                            </List>
                            <List>
                                <ImageContainer>
                                    <Image src={Tasks} alt="Image" />
                                </ImageContainer>
                                <ItemName>Tasks</ItemName>
                            </List>
                            <List>
                                <ImageContainer>
                                    <Image src={Email} alt="Image" />
                                </ImageContainer>
                                <ItemName>Email</ItemName>
                            </List>
                            <List>
                                <ImageContainer>
                                    <Image src={Contacts} alt="Image" />
                                </ImageContainer>
                                <ItemName>Contacts</ItemName>
                            </List>
                            <List>
                                <ImageContainer>
                                    <Image src={Deals} alt="Image" />
                                </ImageContainer>
                                <ItemName>Deals</ItemName>
                            </List>
                        </Ul>
                        <Bottom>
                            <Settings>
                                <SettingsImageContainer>
                                    <SettingsImage src={SettingsImg} alt="Image" />
                                </SettingsImageContainer>
                                <SettingsText>Settings</SettingsText>
                            </Settings>
                            <ToggleBar>
                                <ToggleImageContainer>
                                    <ToggleImage src={Toggle} alt="Image" />
                                </ToggleImageContainer>
                                <ToggleText>Toggle Sidebar</ToggleText>
                            </ToggleBar>
                        </Bottom>
                    </Nav>
                </Aside>
                <TopBar>
                    <TopBarForm>
                        <InputSearch type="text" name="search" placeholder="Global Search" />
                    </TopBarForm>
                    <BellImageContainer>
                        <BellImage src={Bell} alt="Image" />
                    </BellImageContainer>
                </TopBar>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
`;
const Aside = styled.aside`
    width: 280px;
    min-height: 700px;
    box-shadow: 6px 0px 18px rgba(0, 0, 0, 8%);
    position: fixed;
`;
const TopSection = styled.div`
    border-bottom: 1px solid #EBEFF2;
    text-align: left;
    padding: 14px 32px;
`;
const TopText = styled.h2`
    font-size: 24px;
    font-family: 'Open Sans';
    font-weight: 600;
    color: #109CF1;
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

`;
const UserImage = styled.img`
    border-radius: 50%;
`;
const UserName = styled.h4`
    color: #192A3E;
`;
const UserEmail = styled.h4`
    color: #90A0B7;
    font-size: 14px;
`;
const Nav = styled.div`

`;
const Ul = styled.div`
    margin-top: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #EBEFF2;
`;
const List = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-bottom: 25px;
`;
const ImageContainer = styled.div`
    margin-right: 10px;
`;
const Image = styled.img`

`;
const ItemName = styled.h4`
    color: #334D6E;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 14px;
`;
const Settings = styled.div`
    display: flex;
    margin-left: 20px;
`;
const SettingsImageContainer = styled.div`
    margin-right: 10px;
`;
const SettingsImage = styled.img`

`;
const SettingsText = styled.h4`
    color: #334D6E;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 14px;
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
    margin-right: 10px;
`;
const ToggleImage = styled.img`

`;
const ToggleText = styled.h4`
    color: #90A0B7;
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 20px;
`;
const TopBar = styled.div`
    width: calc(100% - 280px);
    height: 61px;
    border-bottom: 1px solid #EBEFF2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    margin-left: 279px;
`;
const TopBarForm = styled.form`
    width: 60%;
`;
const InputSearch = styled.input`
    padding: 12px 44px;
    width: 100%;
    background: url(${Search}) no-repeat;
    background-position: center left 22px;
    margin-left: 20px;
    border:none;
    &::placeholder{
      color: #90A0B7;  
    }
`;
const BellImageContainer = styled.div`
    margin-right: 30px;
`;
const BellImage = styled.img`

`;


