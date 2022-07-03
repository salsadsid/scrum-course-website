import React from 'react';

const ContactUs = () => {
    return (
        <div className='grid grid-cols-2 m-12 px-14 bg-primary rounded-xl'>
            <div className='py-8  text-white'>
                <p className='font-bold'>Email Us</p>
                <p>Connect with us in case of any queries, complaints or feedbacks...</p>
            </div>
            <div className='flex justify-end items-center '>
                <div className='pl-12'>
                    <button className='btn bg-secondary border-0 text-white w-80'>CONTACT US</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;