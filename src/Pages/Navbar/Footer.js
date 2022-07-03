import React from 'react';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-neutral text-white">
            <div>
                <h1 className='text-3xl'>Logo</h1>
                <p>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
            </div>
            <div>
                <span class="footer-title">Newsletter</span>
                <div class="form-control w-80">
                    <div class="relative">
                        <input type="text" placeholder="username@site.com" class="input input-bordered rounded-3xl text-black w-full pr-16" />
                        <button class="btn btn-neutral-focus bg-neutral-focus absolute top-0 right-0 rounded-3xl border-0">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;