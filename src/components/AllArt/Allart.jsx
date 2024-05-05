
const Allart = ({category}) => {
  
    const {  image, subCategoryName, price, customization, stockStatus, item, description, rating, processingTime } = category;


    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 mt-[52px] mb-[52px] w-[80%] mx-auto ">




        <div className="flex justify-center items-center bg-slate-200 border rounded-xl">
            <img src={image} alt="Card Images" className="lg:p-8 p-2 lg:w-[1000px] w-[300px]" />
        </div>
        <div className="c-details">
            <span className="text-[#646262] text-[20px]">Item Name : {item}</span>
            <h2 className="text-[#131313] text-[18px]">Description : {description}</h2>


            <p className="text-[#131313] mt-3"><span className="text-[#131313] text-[16px]">Price : </span>{price}</p>
            <p>Rating : {rating}</p>
            {/* <p>User Name : {name}</p> */}



            <div className="flex gap-[65px] mt-4">
                <div className="text-[16px] text-[#646262]">
                    {/* <p>Email :</p> */}
                    <p className="mt-2 mb-2">Customization :</p>
                    <p className="mt-2 mb-2">stockStatus :</p>
                    <p>Processing Time :</p>
                    <p>subcategory :</p>
                </div>
                <div className="text-[16px] text-[#646262]">
                    {/* <p>{email}</p> */}
                    <p className="mt-2 mb-2">{stockStatus}</p>
                    <p>{processingTime}</p>
                    <p className="mt-2">{subCategoryName}</p>
                    <p className="mt-[1px]">{customization}</p>

                </div>
            </div>



            <div className="mt-5">
                <button className="btn bg-[#F60]">Buy Now</button>
            </div>


        </div>
    </div>
    );
};

export default Allart;