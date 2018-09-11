import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Education from './education';
import Experience from './experience';
import Skills from './skills';
import bootUpFinal from './bootUpFinal.gif'

class Landing extends Component {
    render()
    {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                          <img
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>

                            <h2 style={{paddingTop: '2em'}}>Sameer Marulkar</h2>
                            <h4 style={{color: 'grey'}}>Computer Vision Engineer</h4>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                            <p>Experienced with analyzing, understanding and reproducing high dimensional data. <br />
                            Worked in the space of 3D pose estimation, scene reconstruction, video tracking, video generation, inpainting etc. - blending deep machine learning algorithms. <br />
                            Decent understanding of transmission and reproduction of digital media i.e. CMS → CDNs → video players(client) and interlinked authentication systems. <br />
                            Interested in Generative Art, Character Motion Synthesis.</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                            <h5>Address</h5>
                            <p>1 Hacker Way Menlo Park, 94025</p>
                            <h5>Phone</h5>
                            <p>(123) 456-7890</p>
                            <h5>Email</h5>
                            <p>someone@example.com</p>
                            <h5>Web</h5>
                            <p>mywebsite.com</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    </Cell>
                    <Cell classname="resume-right-col" col={8}>
                        {/* <h2>Education</h2>
                            <Education
                              startYear={2002}
                              endYear={2006}
                              schoolName="My University"
                              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                />
                            <Education
                              startYear={2007}
                              endYear={2009}
                              schoolName="My 2nd University"
                              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                /> */}
                        <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>
                            <Experience
                                  startYear={2018}
                                  startMonth="May"
                                  endYear="Present"
                                  endMonth=" "
                                  jobName="Software Engineer"
                                  firmName="Cisco Systems"
                                  jobDescription="Developing and validating Cisco Data Center Network Manager's (DCNM) Docker based Application Framework to:
Enable DCNM to scale out as additional functions get added to it in form of Apps.
Handle network configuration compliance to ensure network configuration always matches user expressed intent.

Developing NX-OS features for Nexus 6K/9K switches.

Designing and deploying Reinforcement Machine Learning based Automated GUI Testing tool-suite making the Docker-Jenkins-Selenium/REST based CICD pipelines highly optimized and capable of foreseeing failures there by becoming fault tolerant.

Python, C, Bash, TensorFlow, Theano, React, Dojo
Deep Q Learning,  RNN
GRPC, RabbitMQ, Websockets
Docker,  Openstack, Kubernetes
ElasticSearch
L2/L3 Forwarding, VXLAN/EVPN, BGP"
                              />
                              <Experience
                                  startYear={2016}
                                  startMonth="April"
                                  endYear={2018}
                                  endMonth="May"
                                  jobName="Product Development Engineer"
                                  firmName="AT&T"
                                  jobDescription=" Project II: FrontEnd team (Computer Vision/Generative Networks) </b><br/>
                                  •     D-Dash; Deep Q learning based video streaming <br/>
                                &nbsp; o Developing quality of experience optimized client-side video players to be integrated to the Android stack. <br/>
                                &nbsp; o Implementing, fine tuning Tensorflow based, Q learning policies generating adaptive bit-rate algorithms. <br/>
                              • Video component recognition <br/>
                                &nbsp; o Implementing a Fast R-CNN based computationally efficient video component detection algorithm in Theano. <br/>
                              • StackGAN based Boot up animation splash screen transitions <br/>
                                &nbsp; o Video dynamics understanding + generation by exploiting the cultural consistency of scene dynamics when pushed through a convolutional filtering architecture. <br/>

                                  <b>Project I: Multimedia Team </b><br/>
                              • Team sub-lead for proprietary Android TV box bootloader stack design, ExoPlayer and MediaPlayer integration to the Android software stack for Live Streaming and VoD solutions (now DIRECTVNOW). <br/>
                                &nbsp; o Exposure to bootloader OTT secure upgrade process involving secure AWS CDN bucket calls, DNS remapping for system level testing, continuous build integration etc. <br/>
                                &nbsp; o Experimented with Amazon cloudFront (custom SSL), application load balancers. <br/>
                                &nbsp; o Worked in codelab to experiment with ExoPlayer integration -to understand dynamic adaptive streaming over HTTP (DASH). <br/>
                                &nbsp; o Involved in designing test plans for conforming (Bit-exact) HEVC decoding, HDCP 2.2 and 4K60 AvSync (LipSync) specifications for middleware set top boxes (STBs). <br/> <br/>"
                                  gif= {bootUpFinal}
                              />
                              <Experience
                                  startYear={2015}
                                  startMonth="May"
                                  endYear={2015}
                                  endMonth="August"
                                  jobName="Embedded Systems Developer"
                                  firmName="Theta Engineering"
                                  jobDescription="Designing end to end embedded solutions catering to the aerospace industry in southern California. <br/>
                             &nbsp; o openGL, GLEW, freeglut based drone simulator design in Visual Studio 2012 - C <br/>
                             &nbsp; o Deployment on dsPIC series micro-controllers."

                              />
                      <hr style={{borderTop: '3px solid #e22947'}} />
                      <h2>Skills</h2>
                      <Skills
                        skill="javascript"
                        progress={100}
                        />
                        <Skills
                          skill="HTML/CSS"
                          progress={80}
                          />
                          <Skills
                            skill="NodeJS"
                            progress={50}
                            />
                            <Skills
                              skill="React"
                              progress={25}
                              />



                    </Cell>

                </Grid>
            </div>
            )
    }
}

export default Landing;
