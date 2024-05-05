
import { useLoaderData } from 'react-router-dom';
import CategoriesCard from '../CategoriesCard/CategoriesCard';
import { useState } from 'react';

const Categories = () => {
    const crafts = useLoaderData();
    const [craft,setCraft] = useState(crafts)
    return (
        <div className=''>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 justify-center m-4' >
                {
                    crafts.map(category => <CategoriesCard
                        key={category._id}
                        category={category}
                        craft={craft}
                        setCraft={setCraft}
                    ></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;