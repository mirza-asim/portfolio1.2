import './App.css';
import React, { useState, useEffect } from 'react';


function Contents () {

    const [state, setState] = useState(false);
    const [stype, setTyping] = useState("");
    const [state3, setState3] = useState(false);
    ////////////////////////////////// OPTION SELECTION ///////////////////////////////////////
    const [BIO, setBio] = useState(" -bio/");
    const [WORK, setWork] = useState(" -work_Experiences/");
    const [PROJECTS, setProjects] = useState(" -projects/");
    const [state4, setState4] = useState(false);
    const [state5, setState5] = useState(false);
    const [state6, setState6] = useState(false);
    const [state7, setState7] = useState(false);
    const [state8, setState8] = useState(false);
    const [state9, setState9] = useState(false);

    function option1() {
        setState4(true);
        setState5(true);
        setState6(false);
        setState7(false);
        setState8(false);
        setState9(false);
        lineThree.classList.remove("typewriter");
    
    }
    function option2() {
        setState4(false);
        setState5(false);
        setState6(true);
        setState7(true);
        setState8(false);
        setState9(false);
        lineThree.classList.remove("typewriter");

    }
    function option3() {
        setState4(false);
        setState5(false);
        setState6(false);
        setState7(false);
        setState8(true);
        setState9(true);
        lineThree.classList.remove("typewriter");
    }

    //////////////////////////////////** OPTION SELECTION **///////////////////////////////////////
    function nextLine1() {
        setTimeout(() => {
            setState(true);
            setTyping("hide");
            console.log("animation ended1");
        }, 2000);
    }
    function nextLine2() {
        setTimeout(() => {
            setState3(true);
            setState(false);
            setTyping("hide");
            console.log("animation ended2");
        }, 2000);
    }

    const lineThree = document.getElementById("line3");
    useEffect(() => {
        const lineOne = document.getElementById('line1');
        const lineTwo = document.getElementById('line2');
        const lineThree = document.getElementById("line3");
    
        if (lineOne) lineOne.addEventListener('animationend', nextLine1);
        if (lineTwo) lineTwo.addEventListener('animationend', nextLine2);
    
        setTyping('typewriter');
        console.log('applied');
    
        // 🧹 Clean up listeners on unmount
        return () => {
          if (lineOne) lineOne.removeEventListener('animationend', nextLine1);
          if (lineTwo) lineTwo.removeEventListener('animationend', nextLine2);
        };
      }, []);
    return (
        <div className="container">

                <div id="content">
                    <p className="codeHead">user@sleepyCoderz~$&nbsp;</p>
                    <p id='line1' className={state ? "hide" : stype}>
                        sudo pip i mirza_Asim/portfolio
                    </p><br></br>
                    <p id='line2' className={state ? "typewriter" : "hide" }>
                        ..........!!!content downloaded!  
                    </p>
                    <p id='line3' className={state3 ? "typewriter" : "hide" }>
                        Select the commands to view -&#62; &nbsp;sudo cat&nbsp; <span className='bio' onClick={option1}>{BIO}&nbsp;</span><span className='work' onClick={option2}>{WORK}&nbsp;</span><span className='projects' onClick={option3}>{PROJECTS}&nbsp;</span>
                    </p>
                    <br /><br />
                    <p id='line4' className={state4 ? "linefour" : "hide" }>
                    Professional Summary <br />
                        $~	An experienced engineer with a Master’s degree in Electrical and Computer
                        Engineering, currently pursuing a Full-Stack Web/Cloud Development, AI/ML, 
                        and Cybersecurity IT position.<br /><br />
                        $~	Proficient in a wide range of programming languages, frameworks, and tools.
                         Hands-on experience in building monitoring dashboards, optimizing queries, and
                          deploying solutions in cloud environments, combined with a solid foundation in
                           Cybersecurity and Network management.<br /><br />
                    Skills and Areas of Expertise <br />
                            #	Languages & Framework: JSX, JavaScript, SQL, React.js, HTML, CSS, 
                        Bootstrap, Spring Boot, Node.js, RESTful APIs, python, C#, C++, MATLAB, ROS, 
                        Express, Shell.<br /><br />
                        #	Databases: MySQL, PostgreSQL<br /><br />
                        #	Tools & Technology: GitHub Actions, Docker, Kubernetes, 
                        Cisco Packet tracer, CI/CD Pipelines, Virtualization (Hyper-V), SNMP, 
                        Prometheus, Grafana, InfluxDB, Netbox, Juniper Networks, Unity, CATIA v5, 
                        AutoCAD, Fusion 360, SolidWorks, Camlytics, Simatic Siemens S7 300, 
                        ServiceNow Administrators course.
                    </p><br /><br />
                    <p id='line5' className={state5 ? "typewriter1" : "hide" }>
                        $~: &nbsp;sudo cat&nbsp; <span className='work' onClick={option2}>{WORK}&nbsp;</span><span className='projects' onClick={option3}>{PROJECTS}&nbsp;</span>
                    </p>
                    <p id='line6' className={state6 ? "linesix" : "hide" }>
                    Work Experience<br /><br />
                        Security Intern, Bell, Mississauga ON  						             <br />    
                        #	Conducted research and built monitoring dashboards using Prometheus and 
                        Grafana, provided Level 1 technical support by configuring SNMP for data 
                        collection, and compared Prometheus with InfluxDB for efficiency. 
                        Provisioned new Juniper EX4650 switches, managed Netbox for server room device
                         data as well as network topology building, collaborated with IBM on SNMP 
                         setup, and gained experience in GitLab CI/CD, Docker deployment, Hyper-V 
                         setup, and full-stack web development.<br /><br />

                        Data Scientist Developer, Magnify Access Inc, Toronto (remote internship)  <br />
                        #	Developed expertise in data science techniques for analyzing and 
                        visualizing complex datasets, optimized user queries for accommodation 
                        recommendations, streamlined queries on the Magnify Access platform to improve 
                        user experience, and built an OCR text extraction project using Python's 
                        Tesseract library for accurate data retrieval and processing.<br /><br />

                        Cybersecurity Technology Consultant, Amiviz, Dubai (internship)		       <br />
                        #	Gained expertise in EDR and Network Detection solutions with a CrowdStrike 
                        EDR certification, actively participated in cybersecurity strategy meetings 
                        with partner vendors, demonstrated strong knowledge of the AmiViz product 
                        portfolio, networking, and CCNA concepts, and provided technical support for 
                        DIMM Module replacement and troubleshooting in ExtraHop devices at client 
                        premises.<br /><br />

                        Mechatronics Engineer, Magna Innovations, Magna Innovations, Dubai (internship) 2021<br />
                        #	Successfully designed the Automated Sliding Screen Robot development project 
                        using SolidWorks, researched materials, and developed a People Counting program by 
                        successfully establishing TCP socket communication between Python and Unity. Served 
                        as an audiovisual representative at the GITEX 2022 event, handling device 
                        maintenance and optimization.<br /><br />
                    </p>
                    <p id='line7' className={state7 ? "typewriter1" : "hide" }>
                        $~: &nbsp;sudo cat&nbsp; <span className='bio' onClick={option1}>{BIO}&nbsp;</span><span className='projects' onClick={option3}>{PROJECTS}&nbsp;</span>
                    </p>
                    <p id='line8' className={state8 ? "lineeight" : "hide" }>
                    Academic Projects<br /><br />
                        QoS Analysis across Tree, Ring, Half-Mesh, and Full-Mesh Network Technology | Winter 2024<br />		          
                        #	Conducted in-depth comparison of Quality of Service (QoS) metrics across 
                        diverse network topologies.<br />
                        #	Utilized Cisco Packet Tracer and Python to simulate and configure network
                         environments realistically.<br />
                        #	Analyzed QoS parameters meticulously to discern nuanced performance differences.<br />
                        #	Established a robust framework for future investigations into network performance.<br /><br />
                        Fake News Detection using CNN-LSTM model (Python)| Winter 2024<br />
                        #	Modified and designed the AI program for improved detection of Fake news present 
                        online employing a combination of CNN and LSTM algorithms to achieve an AUC score 
                        of 97.50%.<br />
                        #	Addressed challenges in processing human language. Aimed to contribute to more 
                        reliable detection systems for a healthier information ecosystem.<br />
                        #	Coordinated team members for this post-graduation project and successfully 
                        drafted the IEEE research paper.
                    </p>
                    <p id='line9' className={state9 ? "typewriter1" : "hide" }>
                        $~: &nbsp;sudo cat&nbsp;<span className='bio' onClick={option1}>{BIO}&nbsp;</span> <span className='work' onClick={option2}>{WORK}&nbsp;</span>
                    </p>
                </div>
                


        </div> 
    );
}

export default Contents;