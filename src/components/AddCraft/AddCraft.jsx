
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const AddCraft = () => {

    const handleAddCraftItem = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const image = form.image.value;
        const subCategoryName = form.subCategoryName.value;
        const price = form.price.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const item = form.item.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const processingTime = form.processingTime.value;

        const newCraftStore = { userName, email, image, subCategoryName, price, customization, stockStatus, item, description, rating, processingTime }
        console.log(newCraftStore);

        // send to the server

        fetch('http://localhost:5000/categories', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCraftStore)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Craft Painting Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div className='w-1/2 mx-auto space-y-7 bg-[#f4f3f0] rounded-md p-14'>
            <h2 className='text-3xl font-semibold text-center'>Add Craft Item Page</h2>
            <form onSubmit={handleAddCraftItem} >
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
                            <input type="text" name='subCategoryName' placeholder=" Enter Subcategory-Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder=" Enter Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization-</span>
                            </label>
                            <select className='md:w-full mt-4' id="customization" name="customization" required>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select><br />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <select className='md:w-full mt-4' id="stockStatus" name="stockStatus" required>
                                <option value="In stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                            </select><br />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User-Name</span>
                            </label>
                            <input type="text" name='userName' placeholder=" User-Name" className="input input-bordered" required />
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
                                <span className="label-text">Ratting</span>
                            </label>
                            <input type="text" name='rating' placeholder=" Ratting " className="input input-bordered" required />
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
                </div>
                <input type="submit" value="Add " className='btn bg-[#3eceb4] text-bold md:w-full mt-4' />
            </form>
        </div>
    );
};

export default AddCraft;