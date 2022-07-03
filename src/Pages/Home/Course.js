import React from 'react';

const Course = ({ course }) => {
    const { name, author, img, rating } = course
    return (
        <div class="card bg-white shadow-xl">
            <figure className='w-100'><img className='w-full' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <p>{name}</p>
                <p>{author}</p>
                <div className='flex items-center'>
                    <span>
                        {rating}
                    </span>
                    <div class="rating rating-sm rating-half">
                        <input type="radio" name="rating-10" class="rating-hidden" />
                        <input type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" checked />
                        <input type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" class="bg-primary mask mask-star-2 mask-half-2" />
                    </div>
                </div>
                <button class="btn hover:bg-primary bg-base-200 w-3/4 rounded rounded-3xl text-xl text-primary hover:text-white border-4 border-primary hover:border-primary">ENROLL NOW</button>
            </div>
        </div>
    );
};

export default Course;