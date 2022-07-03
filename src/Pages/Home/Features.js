import React from 'react';
import img from '../../assets/img/carbon_view-filled.png'
import img2 from '../../assets/img/healthicons_i-exam-multiple-choice.png'
import img3 from '../../assets/img/healthicons_i-training-class-outline.png'
import img4 from '../../assets/img/Vector (1).png'
import img5 from '../../assets/img/Vector.png'
import './Features.css'
const Features = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='grid grid-cols-2 flex-1'>
                    <div>
                        <div className='flex items-center justify-evenly my-16'>
                            <span className='text-primary'>Live  <br /> Exams</span>
                            <div className='img2 rounded-full w-52 h-52 flex items-center justify-center p-8'><img src={img2} alt='' /></div>
                        </div>
                        <div className='flex items-center justify-evenly'>
                            <span>Live  <br /> Classes</span>
                            <div className='img3 rounded-full w-52 h-52 flex items-center justify-center p-8'> <img src={img3} alt='' /></div>
                        </div>
                        <div className='flex items-center justify-evenly my-16'>
                            <span>100K+  <br /> Views</span>
                            <div className='img rounded-full w-52 h-52 flex items-center justify-center p-8'> <img src={img} alt='' /></div>
                        </div>


                    </div>
                    <div className='flex flex-col justify-center'>
                        <div className='flex items-center justify-evenly my-16'>
                            <span>1000+  <br /> Lessons</span>
                            <div className='img4 rounded-full w-52 h-52 flex items-center justify-center p-8'> <img src={img4} alt='' /></div>
                        </div>
                        <div className='flex items-center justify-evenly mb-16'>
                            <span>1000+  <br /> Lessons</span>
                            <div className='img5 rounded-full w-52 h-52 flex items-center justify-center p-8'> <img src={img5} alt='' /></div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <h1 class="text-5xl font-bold">Start learning with us right now!</h1>
                    <p class="py-6">Choose from 100+ online video courses with new updates.</p>
                    <button class="btn hover:bg-primary bg-base-200 w-3/4 rounded rounded-3xl text-xl text-primary hover:text-white border-4 border-primary hover:border-primary">ENROLL NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Features;