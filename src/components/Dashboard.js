import React from 'react'
import styled from 'styled-components'
import George from '../assets/images/george.png'
import Rebecca from '../assets/images/rebecca.png'
import Lindsey from '../assets/images/lindsey.png'
import Arrow from '../assets/images/Polygon.png'
import Round from '../assets/images/round.png'
import Round1 from '../assets/images/round2.png'
import Delete from '../assets/images/delete.png'
import Edit from '../assets/images/edit.png'
import Doughnut from './Doughnuts'


 const Dashboard=({active, setActive})=> {
  
    
    return (
        <>
            <DashboardI active={active} className='globalstyle'>
                <AllItems>
                    <Dleft>
                        <TaskOverview>
                            <TaskBAr>
                                <UpperSection>
                                    <LeftTitle>
                                        8 task completed out of 10
                                    </LeftTitle>
                                    <RightTitle>
                                       <Text>Show: </Text> <Blue> This Week</Blue>
                                       <ArrowImage>
                                           <Arrowimg src={Arrow} alt="Image" />
                                       </ArrowImage>
                                    </RightTitle>
                                </UpperSection>
                                <RatingBAr>
                                    <Rating>
                                    </Rating>
                                </RatingBAr>
                                <DateTime>
                                    <Date>
                                        23 December, Sunday
                                    </Date>
                                </DateTime>
                                <Calender>
                                    <SectionDAte>
                                        <Day>
                                            Sun
                                        </Day>
                                        <DateC className='labelled'>
                                            23
                                        </DateC>
                                    </SectionDAte>
                                    <SectionDAte>
                                        <Day className='label'>
                                            Mon
                                        </Day>
                                        <DateC className='labeltwo'>
                                            24
                                        </DateC>
                                    </SectionDAte>
                                    <SectionDAte>
                                        <Day>
                                            Tue
                                        </Day>
                                        <DateC>
                                            25
                                        </DateC>
                                    </SectionDAte>
                                    <SectionDAte>
                                        <Day>
                                            Wed
                                        </Day>
                                        <DateC>
                                            26
                                        </DateC>
                                    </SectionDAte>
                                    <SectionDAte>
                                        <Day>
                                            Thu
                                        </Day>
                                        <DateC>
                                            27
                                        </DateC>
                                    </SectionDAte>
                                    <SectionDAte>
                                        <Day>
                                            Fri
                                        </Day>
                                        <DateC>
                                            28
                                        </DateC>
                                    </SectionDAte>
                                    <SectionDAte>
                                        <Day>
                                            Sat
                                        </Day>
                                        <DateC>
                                            29
                                        </DateC>
                                    </SectionDAte>
                                </Calender>
                                <HrLine></HrLine>
                            </TaskBAr>
                        </TaskOverview>

                        <Projects>
                            <PLeft>
                                <Ptitle>
                                    Send benefit review by sunday
                                </Ptitle>
                                <PSmall>
                                    <B>Due date:</B> <Head>December 23, 2018  </Head>
                                </PSmall>
                                <Developer>
                                    <DeveloperImage>
                                        <DImage src={George} />
                                    </DeveloperImage>
                                    <DeveloperName>
                                        George Fields
                                    </DeveloperName>
                                </Developer>
                            </PLeft>
                            <PRight>
                                <RSmall>
                                    Reminder
                                </RSmall>
                                <PButton>
                                    Completed
                                </PButton>
                            </PRight>
                        </Projects>

                        <Projects>
                            <PLeft>
                                <Ptitle>
                                    Invite to office meet-up
                                </Ptitle>
                                <PSmall>
                                    <B>Due date:</B> <Head>December 23, 2018  </Head>
                                </PSmall>
                                <Developer>
                                    <DeveloperImage>
                                        <DImage src={Rebecca} />
                                    </DeveloperImage>
                                    <DeveloperName>
                                        Rebecca Moore
                                    </DeveloperName>
                                </Developer>
                            </PLeft>
                            <PRight>
                                <RSmall>
                                    Call
                                </RSmall>
                                <Icons>
                                    <IconContainer>
                                        <IconImg src={Round} alt="Image" />
                                        <IconImg src={Round1} alt="Image" />
                                        <IconImg src={Edit} alt="Image" />
                                        <IconImg src={Delete} alt="Image" />
                                    </IconContainer>
                                    <PButton1>
                                    Ended
                                    </PButton1>
                                </Icons>
                               
                            </PRight>
                        </Projects>

                        <Projects>
                            <PLeft>
                                <Ptitle>
                                    Office meet-up
                                </Ptitle>
                                <PSmall>
                                    <B>Due date:</B> <Head>December 23, 2018 </Head>
                                </PSmall>
                                <Developer>
                                    <DeveloperImage>
                                        <DImage src={Lindsey} />
                                    </DeveloperImage>
                                    <DeveloperName>
                                        Lindsey Stroud
                                    </DeveloperName>
                                </Developer>
                            </PLeft>
                            <PRight>
                                <RSmall>
                                    Event
                                </RSmall>
                                <PButton>
                                    Completed
                                </PButton>
                            </PRight>
                        </Projects>
                        <Showmore>
                            Show more
                        </Showmore>
                    </Dleft>
                    <Dright>
                        <Graph>
                            <Topbar>
                                <Tleft>
                                    Deals
                                </Tleft>
                                <TRight>
                                    <TSmall>
                                        Show:<B2>Monthly</B2>
                                    </TSmall>
                                </TRight>
                            </Topbar>
                        </Graph>
                        <PieChart1>
                            <ChartTop>
                                <CTop>Task</CTop>
                                <CSmall>Show: </CSmall>
                                <Doughnut/>
                            </ChartTop>
                            
                        </PieChart1>
                    </Dright>
                </AllItems>
            </DashboardI>


        </>
    )
}
export default Dashboard
const DashboardI = styled.div`
    transition:.4s ease;
  
`;
const Dleft = styled.div`
    width: 77%;
    padding: 30px;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
    background: #fff;
    border-radius: 4px;

`;
const AllItems = styled.div`
    width: 60%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
`;
const TaskOverview = styled.div`
    
`;
const TaskBAr = styled.div`
    
`;
const Blue = styled.b`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    margin-left: 3px;
    color: #109CF1;
    line-height: 18px;
`;
const UpperSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;
const LeftTitle = styled.div`
    color: #334D6E;
    font-weight: 600;
    font-family: 'Poppins';
    font-size: 14px;
`;
const RightTitle = styled.div`
    display: flex;
    align-items: center;
`;
const ArrowImage = styled.div`
    margin-bottom: 7px;
    margin-left: 5px;
`;
const Arrowimg = styled.img`

`;
const Text = styled.h4`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
`;
const RatingBAr = styled.div`
    background: #f0f3f5;
    height: 10px;
    border-radius: 8px;
    margin-bottom:20px;
`;
const Rating = styled.div`
    background: #2ed47a;
    height: 6px;
    width: 80%;
    border-radius: 8px;

`;
const DateTime = styled.b`
`;
const Calender = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const Date = styled.h4`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 15px;
   
`;
const HrLine = styled.hr`
    width: 608px;
    filter: blur(1px);
    margin-left: -29px;
`;
const Day = styled.h5`
    color: #334d6e9c;
    margin-bottom:10px;
    font-family: 'Poppins';
`;
const B = styled.b`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 13px;
`;

const SectionDAte = styled.div`
    text-align: center;
    &:hover h5{
        color:#109cf1;
        cursor:pointer;
    }
`;
const PRight = styled.div`
    display: flex;
    flex-direction: column;
    
`;
const RSmall = styled.small`
    margin-bottom: 50px;
    text-align: right;
    color: #a6b3c5;
    font-weight: 500;
    font-family: 'Poppins';
    font-size: 13px;
`;
const Icons = styled.div`
    display: flex;
`;
const IconContainer = styled.div`
`;
const IconImg = styled.img`
    margin-right: 8px;

`;

const PButton = styled.a`
    background: #2ed47a;
    padding: 6px 16px;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    font-family: 'Poppins';
    cursor: pointer;
`;
const PButton1 = styled.a`
    background: #f7685b;
    padding: 6px 16px;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    font-family: 'Poppins';
    cursor: pointer;
`;
const B2 = styled.b``;

const DateC = styled.h3`
    font-weight: 400;
    font-family: 'Poppins';
    font-size: 13px;
    line-height: 18px;
    &:hover{
        color:#109cf1;
        cursor:pointer;
    }
`;
const Projects = styled.div`
    padding: 2%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;
    &:hover{
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.14);
    }
`;
const PLeft = styled.div`
    
`;
const Ptitle = styled.h3`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 15px;
    line-height: 22.5px;
    color: #323C47;
`;
const PSmall = styled.div`
    margin-bottom: 20px;
    color: #b8bdc1;
    display: flex;
    align-items: center;
`;
const Head = styled.h4`
    margin-left: 3px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 13px;
`;
const Developer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`;
const DeveloperImage = styled.div`
    
`;
const DImage = styled.img`
    border-radius: 50%;
`;
const DeveloperName = styled.h4`
    margin-left:10px;
    color: #707683;
    font-family: 'Poppins';
    font-size: 13px;
    font-weight: 500;
`;
const Showmore = styled.h3`
    text-align: center;
    color: #109CF1;
    font-weight: 600;
    margin-top: 15px;
    font-family: 'Poppins';
    font-size: 13px;
`;
const Dright = styled.div`
    
`;
const Graph = styled.div`
    
`;
const Topbar = styled.div`
    
`;
const Tleft = styled.div`
    
`;
const TRight = styled.div`
    
`;
const TSmall = styled.div`
    
`;
const PieChart1 = styled.div`
    
`;
const ChartTop = styled.div`
    
`;
const CTop = styled.div`
    
`;
const CSmall = styled.div`
    
`;
