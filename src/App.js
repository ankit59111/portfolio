import React, {useEffect, useState} from 'react';
import './App.css';
import profile from './assets/images/profile.jpeg';
import india from './assets/images/india.png';
import {NavLink} from "react-router-dom";


const CONSTANTS = {
    DELETING_SPEED: 30,
    TYPING_SPEED: 150,
}
export default function App(props) {
    console.log('came to app comp');
    const [state, setState] = useState({
        text: "",
        message: "",
        isDeleting: false,
        loopNum: 0,
        typingSpeed: CONSTANTS.TYPING_SPEED,
    });
    const [messages] = useState([" Corporate Website", " Web Application"])

    useEffect(() => {
        let timer = "";
        const handleType = () => {
            setState(cs => ({
                ...cs, // cs means currentState
                text: getCurrentText(cs),
                typingSpeed: getTypingSpeed(cs)
            }));
            timer = setTimeout(handleType, state.typingSpeed);
        };
        handleType();
        return () => clearTimeout(timer);
    }, [state.isDeleting]);

    useEffect(() => {
        if (!state.isDeleting && state.text === state.message) {
            setTimeout(() => {
                setState(cs => ({
                    ...cs,
                    isDeleting: true
                }))
            }, 500);
        } else if (state.isDeleting && state.text === "") {
            setState(cs => ({
                ...cs, // cs means currentState
                isDeleting: false,
                loopNum: cs.loopNum + 1,
                message: getMessage(cs, messages)
            }));
        }
    }, [state.text, state.message, state.isDeleting, messages]);

    function getCurrentText(currentState) {
        return currentState.isDeleting
            ? currentState.message.substring(0, currentState.text.length - 1)
            : currentState.message.substring(0, currentState.text.length + 1);
    }

    function getMessage(currentState, data) {
        return data[Number(currentState.loopNum) % Number(data.length)];
    }

    function getTypingSpeed(currentState) {
        return currentState.isDeleting
            ? CONSTANTS.TYPING_SPEED
            : CONSTANTS.DELETING_SPEED;
    }
    return (
        <div className='container-fluid home'>
            <section className="hero-image" id="top">
                <div className="hero-text">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1>Hello, I'm <span
                                style={{"color": "#028BB1", "fontWeight": "bold"}}>Ankit Kumar Singh</span>.<br/> I
                                develop
                                <span className="txt-rotate" data-period="100"
                                      data-rotate="[ &quot;web applications &quot;, &quot;corporate websites&quot;, &quot;UI/UX design&quot; ]">
                                    <span className="wrap">{state.text}</span>
                                </span>.
                            </h1>
                            <a href="#about">
                                <button className="get-btn"> Know More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <nav className="navbar sticky-top navbar-toggleable-sm navbar-light bg-faded"
                 style={{"background-color": "#EEEEEE", "min-height": "80px"}}>
                <a className="navbar-brand mx-auto" href="#top"></a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#top" style={{"color": "black"}}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" style={{"color": "black"}}>About</a>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/myresume/"
                               style={{"color": "black"}}>Resume</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#myprojects" style={{"color": "black"}}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" style={{"color": "black"}}>Contact Me</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <section className="container-fluid" id="about">
                <br/><br/><br/>
                    <h1 className="about">About</h1>
                    <br/>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <img className="img-fluid about-image" src={profile}
                                         alt="my image"/>
                                    <br/>
                                    <br/>
                                        <h4 style={{"text-align": "center", "color":"#626262"}}>Who's this guy?</h4>

                                        <p className="ptext">
                                            I'm a Front End Developer and Blockchain enthusiast based in India <img
                                            src={india}/>.<br/>
                                            I have serious passion for UI effects, animations and creating intuitive,
                                            dynamic user experiences.<br/>
                                            <a href="#contact" style={{"color": "#028BB1", "font-weight": "bold"}}>Let's make
                                                something special.</a>
                                        </p>
                                </div>
                            </div>
                            <br/><br/><br/>
                        </div>
            </section>
            <section className="footer_bg" id="contact">
                <h1 className="footer_header">Contact Me</h1>
                <br/>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <center>
                                <a href="https://www.facebook.com/ankit.singh.10004/" target="_blank"><i
                                    className="fa fa-facebook-official fa-3x"></i></a>

                                <a href="https://github.com/ankit59111" target="_blank"><i
                                    className="fa fa-github fa-3x"></i></a>

                                <a href="https://www.instagram.com/ankit59111/" target="_blank"><i
                                    className="fa fa-instagram fa-3x"></i></a>

                                <a href="https://www.linkedin.com/in/ankit-singh-bb56aa118/" target="_blank"><i
                                    className="fa fa-linkedin-square fa-3x"></i></a>
                            </center>
                        </div>
                    </div>
                    <br/>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <p className="footer_text">Have a project for me in mind?<br/>Looking for a web
                                        developer?<br/>Want to get in touch with me?<br/>Just drop in your query.<br/>I
                                            will get back to you asap.</p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" style={{"margin-top": "30px"}}>
                                    <form className="form" role="form" autoComplete="off" method="POST">
                                        <fieldset>
                                            <label htmlFor="name2" className="mb-0">Name</label>
                                            <div className="row mb-1">
                                                <div className="col-lg-12">
                                                    <input type="text" name="name" id="name" className="form-control"
                                                           required=""/>
                                                </div>
                                            </div>
                                            <label htmlFor="email2" className="mb-0">Email</label>
                                            <div className="row mb-1">
                                                <div className="col-lg-12">
                                                    <input type="text" name="email" id="email" className="form-control"
                                                           required=""/>
                                                </div>
                                            </div>
                                            <label htmlFor="message2" className="mb-0">Message</label>
                                            <div className="row mb-1">
                                                <div className="col-lg-12">
                                                    <textarea rows="6" name="message" id="message"
                                                              className="form-control" required=""></textarea>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-lg float-right">Send
                                                Message
                                            </button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <br/>
                        </div>
            </section>
        </div>
)

}