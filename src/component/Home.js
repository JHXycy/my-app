import React from 'react';
import { Timeline, Icon } from 'antd';
import { Layout } from 'antd';
import { Typography} from 'antd';
import pic from '../images/pic.jpg';
import robin from '../images/Robin.png';
import opti from '../images/opti.png';
import drone from '../images/drone.jpg';
import { Collapse } from 'antd';
import dsp from '../images/dsp.png';
import Gomoku from '../images/Gomoku.png';
import flyback from '../images/flyback.png';
import { Card, Col, Row } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;
const { Panel } = Collapse;


function Home(props) {
    return (
            <div id = "homepage">
                <Layout className="layout">
                    <Header>
                    </Header>
                    <Content className = "content" >
                        <div class = "blocks" >
                            <div class="odd">
                                <Title style={{ textAlign: 'center' }} >Jinghao Xu</Title>
                                <img src={pic} alt="Avatar" class="prof_picture" ></img>
                            </div>
                            <div class="even">
                                <Typography className = "typolog" >
                                    <Title >About Me</Title>
                                    <Paragraph className = "self_intro">
                                    Hello, Everyone my name is Jinghao Xu. You guys can also call me Justin. I graduated for New York University at 2024 and I major in Eletrical and Computer Engineering. I worked as marketing analyst and planning at China Poly Group Corporation from septerber 2023 to May 2024. Currently I am seeking a software engineer jobs.
                                    </Paragraph>
                                    <br />
                                </Typography>
                            </div>
        
                            <div id = "Timeline" class="odd" >
                                <Title >Experience</Title>
                                <Timeline mode="alternate">
                                    <Timeline.Item>
                                        <h3>Sep 2017 (Start Bachelor Degree)</h3>Start Bachelor degree in Eletrical and Computer Engineering at New York Institute of Technology.
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <h3>May 2019 - Sep 2019 (Web Developer)</h3>Working as a Web devloper at Fortune metal in New York
                                    </Timeline.Item>
                                    <Timeline.Item color="brown">
                                        <h3>Sep 2020 - Jun 2021 (Reserach Assistant)</h3> Involved in a research project to solve how to make large amount of UAVS Synchronous coordination.
                                    </Timeline.Item>
                                    <Timeline.Item color="brown">
                                        <h3>May 2021 (Graduated)</h3>Completed <b>Bachelor Degree</b> at <b>New York Institute of Technology.</b>
                                    </Timeline.Item>
                                    <Timeline.Item color="purple">
                                        <h3>Sep 2021(Start my Master Degree)</h3> Start Graruate Schoool at <b>New York University</b> in New York
                                    </Timeline.Item>
                                    <Timeline.Item color="Purple">
                                        <h3>June 2023 </h3> Completed <b>Master Degree</b> at <b>New York University</b>
                                    </Timeline.Item>
                                    <Timeline.Item color="blue">
                                        <h3>Sep 2023 - June 2024 (Marketing Analyst And Planning)</h3> Full-time Marketing analyst and planning at <b>Poly Development and holdings</b> in GuangZhou , China
                                    </Timeline.Item>
                                    <Timeline.Item color="red">
                                        <h3>Current looking for a software engineering job</h3>
                                    </Timeline.Item>
                                </Timeline>
                            </div>
                            <div class="even" >
                                <Title >Major Projects</Title>
                                <div class="card-section">
                                    <Row gutter={16}>
                                    <Col span={8}>
                                            <Card className="projects" title="Automouns Indoor Disinfection Drone" bordered={false}>
                                                <img src={drone}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text">Source will not be display</div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="Gomoku Game" bordered={false}>
                                                <img src={Gomoku}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text"><a href="https://github.com/JHXycy/gomoku">Visited</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="Sound Module" bordered={false}>
                                                <img src={dsp}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                    <div class="text"><a href="https://github.com/JHXycy/Python-Sound-wave">Visited</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <Card className="projects" title="Design Flyback Convertor" bordered={false}>
                                                <img src={flyback}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                <div class="text"><a href="https://github.com/JHXycy/flyback-Convertor">Visited</a></div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="Rapid 3D Mapping Base on optimaztiion assisted Look-Locker inversion recovery MRI " bordered={false}>
                                                <img src={opti}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                <div class="text">Source will not be display</div>
                                                </div> 
                                            </Card>
                                        </Col>
                                        <Col span={8}>
                                            <Card className="projects" title="Round Robin CPU Schduleing " bordered={false}>
                                                <img src={robin}  alt="" class="project_picture" ></img>
                                                <div class="overlay">
                                                <div class="text"><a href="https://github.com/JHXycy/Round-Robin-Cpu-Schduleing">Visited</a></div>
                                                </div>              
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            
                            </div>
                        <div class="even">
                                <Typography className = "typolog" >
                                    <Title >Contact</Title>
                                    <Paragraph className = "self_intro">
                                       Email: jx2375@nyu.edu
                                       
                                    </Paragraph>
                                    <Paragraph> Phone : 3479825611</Paragraph>
                                    <br /><br /><br />
                                </Typography>
                        </div>
                                            </Content>
                    <Footer style={{ textAlign: 'center', marginTop:'-100px' }}>©2023 Created by Jinghao Xu</Footer>

                </Layout>
            </div>
     );
}

export default Home; 