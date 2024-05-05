import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { IoStar } from "react-icons/io5";

const CategoriesCard = ({ category, craft, setCraft }) => {

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/categories/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your printing has been deleted.",
                                icon: "success"
                            });
                            const remaining = craft.filter(caf => caf._id !== _id)
                            setCraft(remaining);
                        }
                    })

            }
        });

    }
    const { _id, userName, email, image, subCategoryName, price, customization, stockStatus, item, description, rating, processingTime } = category;
    return (
        <div className='container mx-auto mt-8'>
            <div className="max-w-3xl mx-auto bg-white border shadow-md rounded-lg overflow-hidden">
                <figure className='bg-gray-200 rounded-t-lg overflow-hidden'>
                    <img className='w-full h-auto' src={image} alt={item} />
                </figure>
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">item_name: {item}</h1>
                    <p className="text-gray-600 mb-4"><strong>User Name: </strong> {userName}</p>
                    <p className="text-gray-600 mb-4"><strong>Email: </strong>{email}</p>
                    <p className="text-gray-600 mb-4"><strong>Price: </strong> {price}</p>
                    <p className="text-gray-600 mb-4 flex"><strong>Ratting: </strong> {rating}<span><IoStar className='mt-1 text-yellow-500 ml-2'></IoStar></span></p>
                    <p className="text-gray-600 mb-4"><strong>StockStatus: </strong> {stockStatus}</p>
                    <p className="text-gray-600 mb-4"><strong>SubCategoryName: </strong> {subCategoryName}</p>
                    <p className="text-gray-600 mb-4"><strong> Description: </strong> {description}</p>
                    <p className="text-gray-600 mb-4"><strong> ProcessingTime:  </strong> {processingTime}</p>
                    <p className="text-gray-600 mb-4"><strong> Customization: </strong> {customization}</p>
                </div>
                <hr />
                <div className='flex justify-center my-4 mr-5'>
                    <div className='mr-5'>
                        <Link to="/allart" className='btn btn-primary hover:bg-blue-400 bg-black-500 text-white'>View Details</Link>
                    </div>
                    <div className="join gap-8">
                        <Link to={`myart/${_id}`}><button className="btn btn-success join-item">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn  btn-error join-item ">Delete</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoriesCard;