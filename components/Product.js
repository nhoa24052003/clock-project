import React from 'react';
import { brandingData, productData } from "../static/data";
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className='w-11/12 mx-auto mt-5'>
      <div className='branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md'>
        {brandingData && brandingData.map((i, index) => (
          <div className='flex items-start' key={index}>
            {i.icon}
            <div className='px-3'>
              <h3 className='font-bold text-sm md:text-base'>{i.title}</h3>
              <p className='text-xs md:text-sm'>{i.Description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-medium mb-4">ĐỒNG HỒ BÁN CHẠY</h2>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[30px] mb-12 border-0">
        {productData && productData.map((i, index) => (
          <div
            key={index}
            className="w-full h-[370px] bg-white rounded-lg shadow-lg p-3 relative cursor-pointer"
          >
            <Link to={`/product/${i.id}`}>
              <img
                src={i.image_Url[0].url}
                alt=""
                className="w-full h-[170px] object-contain"
              />
              <h5 className="text-[18px] text-center py-5 font-[600] text-[#333]">
                {i.name}
              </h5>
              <div className="flex">
                <span className="font-bold text-[17px] text-[#d02222]">
                  {i.price} $
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

