import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

function Orders() {
  const {products,currency}=useContext(ShopContext);
  return (
    <div className='border-t pt-16'>
      <div className="text-2xl">
        <Title text1={'My'} text2={'Orders'}/>
      </div>
      <div className="">
        {
          products.slice(1,4).map((items,index)=>(
            <div key={index} className="flex flex-col md:flex-row py-4 border-t text-gray-600 md:items-center md:justify-between gap-4">
              <div className="flex items-start-gap-6 text-sm">
                <img src={items.image[0]} className='w-16 sm:w-20' alt="" />
              </div>
              <p className='sm:text-base font-medium'>{items.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
