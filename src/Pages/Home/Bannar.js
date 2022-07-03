import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../Home/Banner.css'
import img from '../../assets/img/Ellipse 1.png'
import img2 from '../../assets/img/Ellipse 2.png'
import img3 from '../../assets/img/Ellipse 3.png'
import img4 from '../../assets/img/Ellipse 4.png'
const Bannar = () => {
    return (
        <div className='gradient'>
            <Navbar></Navbar>
            <div class="min-h-screen">

                <div class="flex lg:flex-row-reverse">
                    <div>

                        <img src={img} alt="" className='relative top-48 left-0' />


                        <img src={img2} alt="" className='img2b' />
                        <img src={img3} alt="" className='img3b' />
                        <img src={img4} alt="" className='img4b' />

                    </div>


                    <div className='flex justify-center items-center'>
                        <div>
                            <p className='text-3xl bg-slate-400 text-primary p-4 rounded-3xl'>#MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY</p>
                            <h1 class="text-3xl font-bold text-white">Unleash Your SCRUM Skills, <br /> Grab More Attention To Résumé</h1>
                            <button class="btn hover:bg-white btn-outline w-6/12 rounded rounded-3xl text-xl text-white hover:text-primary border-4 border-white hover:border-white">ENROLL NOW</button>
                            <p className='text-white font-bold'>10% OFF on all courses* | Offer Valid For</p>
                            <div class="grid grid-flow-col gap-5 text-center auto-cols-max">

                                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content glass">
                                    <span class="countdown font-mono text-5xl">
                                        <span>02</span>
                                    </span>
                                    days
                                </div>
                                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content glass">
                                    <span class="countdown font-mono text-5xl">
                                        <span>7</span>
                                    </span>
                                    hours
                                </div>
                                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content glass">
                                    <span class="countdown font-mono text-5xl">
                                        <span>11</span>
                                    </span>
                                    min
                                </div>
                                <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content glass">
                                    <span class="countdown font-mono text-5xl">
                                        <span></span>
                                    </span>
                                    sec
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;