import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoriesCard from '../CategoriesCard/CategoriesCard';

const Categories = () => {
    const crafts = useLoaderData()
    return (
        <div className=''>
            <h2 className='text-center'>This  is Category Section : {crafts.length}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 justify-center m-4' >
                {
                    crafts.map(category => <CategoriesCard
                        key={category._id}
                        category={category}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;