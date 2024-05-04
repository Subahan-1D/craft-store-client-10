import React from 'react';

const AddCraft = () => {
    return (
        <div className='w-1/2 mx-auto space-y-3 bg-[#f4f3f0] rounded-md p-10'>
        <h2 className='text-3xl font-semibold'>Add Craft Item Page</h2>
        {/* <p className='text-gray-500'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p> */}
        <form  >
            <div className='grid md:grid-cols-1 lg:grid-cols-2   gap-4'>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder=" Enter coffee name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" name='supplier' placeholder=" Enter coffee supplier" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name='category' placeholder=" Enter coffee category" className="input input-bordered" required />
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" name='chef' placeholder=" Enter coffee chef" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" name='taste' placeholder=" Enter coffee taste" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name='details' placeholder=" Enter coffee Details" className="input input-bordered" required />
                    </div>
                </div>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo</span>
                </label>
                <input type="text" name='photo' placeholder=" Enter photo url" className="input input-bordered md:w-full" required />
            </div>
            <input type="submit" value="Add Coffee" className='btn bg-[#d2b48c] text-bold md:w-full mt-4' />
        </form>
    </div>
    );
};

export default AddCraft;