import React from 'react';

const AddCraft = () => {
    return (
        <div className='w-1/2 mx-auto space-y-7 bg-[#f4f3f0] rounded-md p-14'>
            <h2 className='text-3xl font-semibold text-center'>Add Craft Item Page</h2>
            <form  >
                <div className='grid md:grid-cols-1 lg:grid-cols-2   gap-6'>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Use Image URL</span>
                            </label>
                            <input type="text" name='image' placeholder=" Use URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subcategory_Name
                                </span>
                            </label>
                            <input type="text" name='category' placeholder=" Enter Subcategory-Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" name='category' placeholder=" Enter coffee category" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratting</span>
                            </label>
                            <input type="text" name='Rating' placeholder=" Ratting " className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Processing-Time</span>
                            </label>
                            <input type="text" name='processingTime' placeholder=" Processing -Time  " className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User-Email</span>
                            </label>
                            <input type="text" name='email' placeholder=" User-Email" className="input input-bordered" required />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item-Name</span>
                            </label>
                            <input type="text" name='item' placeholder=" Enter Item Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name='description' placeholder=" Enter Short description" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='Price' placeholder=" Enter Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization-</span>
                            </label>
                            <select className='input input-bordered' id="customization" name="customization" required>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select><br />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <select className='input input-bordered' id="stockStatus" name="stockStatus" required>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select><br />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User-Name</span>
                            </label>
                            <input type="text" name='name' placeholder=" User-Name" className="input input-bordered" required />
                        </div>

                    </div>
                </div>
                <input type="submit" value="Add " className='btn bg-[#3eceb4] text-bold md:w-full mt-4' />
            </form>
        </div>
    );
};

export default AddCraft;