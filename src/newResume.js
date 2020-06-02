import React, {useEffect} from "react";
import './newResume.css'
import resume from './assets/resume.pdf';
import profile from './assets/images/profile.jpeg'
import {NavLink} from "react-router-dom";

export default function NewResume(props) {
    useEffect(() => {
    }, []);

    return (
        <div id={'newResume'}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">ANKIT KUMAR SINGH</span>
                    <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt=""/>
        </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>*/}
                        {/*</li>*/}
                        {/*<li className="nav-item">*/}
                        {/*    <a className="nav-link js-scroll-trigger" href="#certi">Certifications</a>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <NavLink className="nav-link js-scroll-trigger" to="/#top" >Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#hard-resume">Get a Hard Copy</a>
                        </li>

                    </ul>
                </div>
            </nav>
            <div className="container-fluid p-0">

                <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                    <div className="my-auto">
                        <h1 className="mb-0">ANKIT KR.
                            <span className="text-primary">SINGH</span>
                        </h1>
                        <div className="subheading mb-5">Based in Delhi, India· (+91) 8826468262 ·
                            <a href="mailto:name@email.com">ankitsingh5991111@gmail.com</a>
                        </div>
                        <p className="mb-5">I'm a Front End Web Developer based in India. I
                            have serious passion for UI effects, animations and creating intuitive, dynamic user
                            experiences.</p>
                        <ul className="list-inline list-social-icons mb-0">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/ankit.singh.10004/" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/ankit59111/" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.linkedin.com/in/ankit-singh-bb56aa118/" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://github.com/ankit59111" target="_blank">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                    <div className="my-auto">
                        <h2 className="mb-5">Experience</h2>

                        <div className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0">Software Development Engineer - I</h3>
                                <div className="subheading mb-3">The Indian Express</div>
                                <ul>
                                    <li>Improved performance of page on Google Page Insight score from 20 to 60+,
                                        which include in improving FCP, FMP, Page Load Time, etc.
                                    </li>
                                    <li>Implemented microservices architecture for the continuous delivery of an
                                        application. Each application resides in a separate container along with the
                                        environment it needs to run.
                                    </li>
                                    <li>Worked on the implementation of ads, like lazy load the ads if its
                                        impression is not counted on load.
                                    </li>
                                    <li>
                                        Created ads panel for the AdOps Team through which they handle the
                                        implementation of ads through a given UI. And request only for those ads whose
                                        slots are defined on the page which helps in lowering ads Cost.
                                    </li>
                                    <li>
                                        Working on Personalization, which allows a company to segment its consumers
                                        and target them accordingly.
                                    </li>
                                </ul>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">November 2019 - Present</span>
                            </div>
                        </div>

                        <div className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0">Software Development Engineer</h3>
                                <div className="subheading mb-3">HT Media pvt ltd.</div>
                                <ul>
                                    <li>
                                        Got my hands dipped in Reactjs,Redux, Javascript, JQuery, Django templates,
                                        unit testing using Qunit and Jest.
                                    </li>
                                    <li>
                                        Create exceptional UI / UX experiences leveraging Vue.js, Vuex,ES6 and SCSS.
                                    </li>
                                    <li>
                                        Build development tools and re-usable components that catalyze the development
                                        of new features and functionalities.
                                    </li>
                                    <li>
                                        Interact with various data stores to present and persist data.
                                    </li>
                                    <li>
                                        Improved web accessibility using WAI-ARIA to score 90+.
                                    </li>
                                    <li>
                                        Implemented Unit test cases using Qunit and Jest around 250+ running test cases.
                                    </li>
                                    <li>
                                        Handled Government Project STEEL AUTHORITY OF INDIA (SAIL) and PUBLIC SECTOR
                                        UNDERTAKING (PSU).
                                    </li>
                                </ul>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">July 2018 - October 2019</span>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                    <div className="my-auto">
                        <h2 className="mb-5">Education</h2>

                        <div className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0">ABES ENGINEERING COLLEGE</h3>
                                <div className="subheading mb-3">Bachelor of Technology</div>
                                <div>Computer Science</div>
                                <p>Percentage: 60%</p>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">2014 - 2018</span>
                            </div>
                        </div>

                        <div className="resume-item d-flex flex-column flex-md-row">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0">Dr. Amrit Lal Ishrat Memorial Sunbeam School</h3>
                                <div className="subheading mb-3">Class 12</div>
                                <p>Percentage: 78.2%</p>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">2013</span>
                            </div>
                        </div>

                        <div className="resume-item d-flex flex-column flex-md-row">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0">Dr. Amrit Lal Ishrat Memorial Sunbeam School</h3>
                                <div className="subheading mb-3">Class 10</div>
                                <p>CGPA: 8</p>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">2011</span>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                    <div className="my-auto">
                        <h2 className="mb-5">Skills</h2>

                        <div className="subheading mb-3">Programming Languages &amp; Frameworks</div>
                        <ul className="list-inline list-icons">
                            <li className="list-inline-item">
                                <i className="devicon-html5-plain" data-toggle="tooltip" data-placement="top"
                                   title="HTML 5"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="devicon-css3-plain" data-toggle="tooltip" data-placement="top"
                                   title="CSS 3"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="devicon-javascript-plain"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="devicon-jquery-plain" data-toggle="tooltip" data-placement="top"
                                   title="jQuery"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="devicon-react-original" data-toggle="tooltip" data-placement="top"
                                   title="React JS"></i>
                            </li>

                            <li className="list-inline-item">
                                <i className="devicon-sass-original" data-toggle="tooltip" data-placement="top"
                                   title="Sass"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="devicon-bootstrap-plain" data-toggle="tooltip" data-placement="top"
                                   title="Bootstrap 4"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="devicon-nodejs-plain" data-toggle="tooltip" data-placement="top"
                                   title="NodeJS"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="devicons devicons-npm" data-toggle="tooltip" data-placement="top"
                                   title="NPM"></i>
                            </li>


                        </ul>

                        <div className="subheading mb-3">Version Control &amp; Tools</div>
                        <ul className="list-inline list-icons">

                            <li className="list-inline-item">
                                <i className="devicon-git-plain" data-toggle="tooltip" data-placement="top"
                                   title="Git"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="devicon-github-plain" data-toggle="tooltip" data-placement="top"
                                   title="Github"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="devicon-bitbucket-plain-wordmark" data-toggle="tooltip"
                                   data-placement="top" title="BitBucket"></i>
                            </li>
                            <li className="list-inline-item">
                                <i className="devicon-visualstudio-plain" data-toggle="tooltip" data-placement="top"
                                   title="Visual Studio"></i>
                            </li>
                        </ul>

                        <div className="subheading mb-3">Workflow</div>
                        <ul className="fa-ul mb-0">
                            <li>
                                <i className="fa-li fa fa-check"></i>
                                Mobile-First, Responsive Design
                            </li>
                            <li>
                                <i className="fa-li fa fa-check"></i>
                                Cross Browser Testing &amp; Debugging
                            </li>
                            <li>
                                <i className="fa-li fa fa-check"></i>
                                Cross Functional Teams
                            </li>
                            <li>
                                <i className="fa-li fa fa-check"></i>
                                Agile Development &amp; Scrum
                            </li>
                        </ul>
                    </div>
                </section>


                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="hard-resume">
                    <div className="my-auto">
                        <h2 className="mb-5">Hard copy of the resume</h2>
                        <a href={resume} download>
                            <button className="btn" style={{"background-color": "#028BB1", "color": "white"}}>
                                <i className="fa fa-download"></i> Click here to download
                            </button>
                        </a>
                    </div>
                </section>

            </div>

        </div>
    )

}