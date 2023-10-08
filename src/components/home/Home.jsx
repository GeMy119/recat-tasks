import React from 'react';
import headImage from '../../images/Banner.png'

export default function Home(props) {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col-md-6'>
                            <div className='head-img w-100 m-auto'>
                                <img src={headImage} width="110%" alt="" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='head-content vh-100 d-flex align-items-center'>
                                <div>
                                    <p className='text-light h6'>31th octobar 2018</p>
                                    <h1 className='mb-4'>Halloween Party</h1>
                                    <p className='text-light'>Halloween or Hallowe'en (a contraction of All Hallows' Evening) also known as Allhalloween, All Hallows' Eve or All Saints' Eve is a celebration observed in a number of countries on 31 October.</p>
                                    <button className='btn mt-4'>Explor More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}