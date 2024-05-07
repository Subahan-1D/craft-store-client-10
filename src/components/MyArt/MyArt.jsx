
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyArt = () => {

    const category = useLoaderData();
    const { _id,image, subCategoryName, price, customization, stockStatus, item, description, rating, processingTime } = category;

    const handleUpdatedCraftItem = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const item = form.item.value;
        const subCategoryName = form.subCategoryName.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const UpdatedCraftStore = {image,item,subCategoryName,description,price,rating,customization,processingTime,stockStatus}
        console.log(UpdatedCraftStore);

        // send to the server

        fetch(`https://art-craft-store-server-ecru.vercel.app//categories/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedCraftStore)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Craft Painting Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div className='w-1/2 mx-auto space-y-7 bg-[#ccb160] rounded-md p-14'>
        <h2 className='text-3xl font-semibold text-center'>Craft Update Item Page</h2>
        <form onSubmit={handleUpdatedCraftItem} >
            <div className='grid md:grid-cols-1 lg:grid-cols-2   gap-6'>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Use Image URL</span>
                        </label>
                        <input type="text" name='image' defaultValue={image} placeholder=" Use URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subcategory_Name
                            </span>
                        </label>
                        <input type="text" name='subCategoryName' defaultValue={subCategoryName} placeholder=" Enter Subcategory-Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} placeholder=" Enter Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Customization-</span>
                        </label>
                        <select className='input input-bordered' id="customization" name="customization" defaultValue={customization} required>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select><br />
                    </div>
                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text text-black text-bold">Stock Status</span>
                        </label>
                        <select className='md:w-full' defaultValue={stockStatus} id="stockStatus" name="stockStatus" required>
                            <option value="In stock">In stock</option>
                            <option value="Made to Order">Made to Order</option>
                        </select><br />
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item-Name</span>
                        </label>
                        <input type="text" name='item' defaultValue={item} placeholder=" Enter Item Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" name='description' defaultValue={description} placeholder=" Enter Short description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Ratting</span>
                        </label>
                        <input type="text" name='rating' defaultValue={rating} placeholder=" Ratting " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Processing-Time</span>
                        </label>
                        <input type="text" name='processingTime' defaultValue={processingTime} placeholder=" Processing -Time  " className="input input-bordered" required />
                    </div>
                </div>
            </div>
            <input type="submit" value=" Update " className='btn btn-primary text-bold md:w-full mt-4' />
        </form>
    </div>
    );
};

export default MyArt;