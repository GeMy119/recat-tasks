import React from 'react';
import artistImg from "../../images/artist-image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance, faDribbble, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function About(props) {
    return (
        <>
            <section className='about-us pt-5'>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-10 about-content text-center  m-auto'>
                            <h2 className='mt-2 mb-4'>About The Party
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            </p>
                            <button className='btn'>Know More</button>
                        </div>
                    </div>
                    <div className='our'>
                        <h2 className='text-center my-5'>Our Halloween's Artist</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <img src={artistImg} width="100%" alt="" />
                                    </div>
                                    <div className='col-md-6 mt-4'>
                                        <h3 className=''>DJ Remerson Huke
                                        </h3>
                                        <h5 className='text-light mb-4'>Lead DJ On Deadpoll
                                        </h5>
                                        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.
                                        </p>
                                        <div className='icons'>
                                            <ul className='d-flex'>
                                                <li><a to="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                                <li><a to="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                                <li><a to="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
                                                <li><a to="#"><FontAwesomeIcon icon={faBehance} /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <img src={artistImg} width="100%" alt="" />
                                    </div>
                                    <div className='col-md-6 mt-4'>
                                        <h3 className=''>DJ Remerson Huke
                                        </h3>
                                        <h5 className='text-light mb-4'>Lead DJ On Deadpoll
                                        </h5>
                                        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.
                                        </p>
                                        <div className='icons'>
                                            <ul className='d-flex'>
                                                <li><a to="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                                <li><a to="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                                <li><a to="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
                                                <li><a to="#"><FontAwesomeIcon icon={faBehance} /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}