import React, {useEffect} from 'react';
import './Resume.css';
import html2pdf from "html2pdf.js";
import resume from './assets/resume.pdf';

export default function Resume(props) {
    console.log('resume page came')
    useEffect(() => {
        const element = document.getElementById('root');
        let opt = {
            // margin: 0,
            filename: 'Ankit Singh Resume.pdf',
            //image: {type: 'jpeg', quality: 1},
            enableLinks: true,
            html2canvas: {scale: 1.1},
            jsPDF: {unit: 'pt', format: 'a4', orientation: 'p'}
        };
       // html2pdf().from(element).set(opt).save();
    }, [])
    return (
        <div className='container d-flex flex-row' id={'resume-builder'}>
            <div className='resume-sideBar'>
                <h2 className='name'>Ankit Singh</h2>
                <p className='title'>Software Developer</p>
                <div className='personal-info'>
                    <div className='heading'>PERSONAL INFO</div>
                    <p><i className="fa fa-mobile" aria-hidden="true"></i><span>+91-9717458262</span></p>
                    <p><i className="fa fa-envelope-o" aria-hidden="true"></i><span>ankitsingh5991111@gmal.com</span>
                    </p>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i><span>B-102, EARTHCON CASA ROYALE, BISRAKH JALALPUR,
                    SECTOR-1, GREATER NOIDA WEST, UP, 201306</span></p>
                </div>
                <div className='skills-info'>
                    <div className='heading'>SKILLS</div>
                    <div className='skills-list'>HTML
                        <div className="progress">
                            <div className="progress-bar " role="progressbar" aria-valuenow="0"
                                 aria-valuemin="0" style={{"width": "84%"}}
                                 aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className='skills-list'>CSS
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="0"
                                 aria-valuemin="0" style={{"width": "78%"}}
                                 aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className='skills-list'>JAVASCRIPT
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="0"
                                 aria-valuemin="0" style={{"width": "84%"}}
                                 aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className='skills-list'>JQUERY
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="0"
                                 aria-valuemin="0" style={{"width": "79%"}}
                                 aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className='skills-list'>REACT
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="0"
                                 aria-valuemin="0" style={{"width": "85%"}}
                                 aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div className='skills-list'>REDUX
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="0"
                                 aria-valuemin="0" style={{"width": "82%"}}
                                 aria-valuemax="100">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section>
                <p>
                    A curious person always ready to implement new stuff and extend my limits.
                    Work and results inspire me. Seeking a challenging position in a technical role.
                </p>
                <div className='section-list'>
                    <div>
                        <div className='heading'>
                            Experience
                        </div>
                        <div className='list-content'>
                            <div>
                                <span
                                    className='point-circle'></span>
                                <span>Software Developer <i>(Nov 2019 - Current)</i></span>
                                <p>The Indian Express</p>
                                <ul>
                                    <li>
                                        Improved performance of page on Google Page Insight score from 20 to 60+,
                                        which include in improving FCP, FMP, Page Load Time, etc
                                    </li>
                                    <li>
                                        Implemented microservices architecture for the continuous delivery of an
                                        application.
                                        Each application resides in a separate container along with the environment it
                                        needs to run.
                                    </li>
                                    <li>
                                        Worked on the implementation of ads, like lazy load the ads if its impression is
                                        not counted on load.
                                    </li>
                                    <li>
                                        Created ads panel for the AdOps Team through which they handle the
                                        implementation of ads through a given UI. And request only for those ads whose
                                        slots are defined on the page which helps in lowering ads Cost.
                                    </li>
                                    <li>
                                        Working on Personalization, which allows a company to segment its consumers and
                                        target them accordingly.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <span
                                    className='point-circle'></span><span>Software Developer <i>(Jul 2018 - Nov 2019)</i></span>
                                <p>HT Media</p>
                                <ul>
                                    <li>
                                        Got my hands dipped in Reactjs,Redux, Javascript, JQuery, Django templates, unit
                                        testing using Qunit and Jest.
                                    </li>
                                    <li>
                                        Create exceptional UI / UX experiences leveraging Vue.js, Vuex,ES6 and SCSS
                                    </li>
                                    <li>
                                        Build development tools and re-usable components that catalyze the development
                                        of new features and functionalities.
                                    </li>
                                    <li>
                                        Interact with various data stores to present and persist data
                                    </li>
                                    <li>
                                        Cooperate with skilled developers, product managers, QA’s, and designers to ship
                                        new components and features
                                    </li>
                                    <li>
                                        Direct impact on team processes by regular agile retrospectives
                                    </li>
                                    <li>
                                        Created modules for better code structure
                                    </li>
                                    <li>
                                        Improved web accessibility using WAI-ARIA to score 90+.
                                    </li>
                                    <li>
                                        Wrote Unit test cases for frontend that led to better handling of code at
                                        modular
                                        level.
                                    </li>
                                    <li>
                                        Implemented linters for better quality of code
                                    </li>
                                    <li>
                                        Implemented Unit test cases using Qunit and Jest around 250+ running test cases
                                    </li>
                                    <li>
                                        Worked on Government Project STEEL AUTHORITY OF INDIA (SAIL) and PUBLIC
                                        SECTOR UNDERTAKING (PSU).
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='heading'>
                            Education
                        </div>
                        <div className='list-content'>
                            <p>
                                <span
                                    className='point-circle'></span>
                                <span className='education-title'>GRADUATION <i>(Jun 2014 - 2018)</i></span>
                                <p className='education-name'>ABES ENGINEERING COLLEGE</p>

                            </p>
                            <p>
                                <span
                                    className='point-circle'></span>
                                <span className='education-title'>INTERMEDIATE SCHOOL <i>(Jun 2012 - 2013)</i></span>
                                <p className='education-name'>DALIMSS</p>

                            </p>
                            <p>
                                <span
                                    className='point-circle'></span>
                                <span className='education-title'>HIGH SCHOOL <i>(Jun 2010 - 2011)</i></span>
                                <p className='education-name'>DALIMSS</p>
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <a href={resume} download>
                <button className='btn btn-danger download-btn'>Download here</button>
            </a>
        </div>
    )

}