import React from 'react'

const Services = () => {
  return (
    <>
      <div>
        <h1 className='mt-[6rem] text-center text-[2rem]'>Name:daraz</h1>
        <h1 className='text-center text-[2rem]'>Type:Clothing & Fashion Retail</h1>
        <h1 className='p-5 text-[1.6rem] text-blue-300'>Overview:</h1>
      </div>
      <div>
        <p className='p-[1rem] text-2xl'>Daraz is a trendy clothing boutique offering stylish and affordable apparel for men, women, and teens. Our collection includes casual wear, formal outfits, accessories, and seasonal fashion essentials. Whether you're looking for everyday basics or the latest fashion trends, we’ve got you covered.</p>
      </div>
      <div>
        <p className='p-[0,1rem] text-2xl'>Location: [Insert your location]</p>
      </div>
      <div>
        <p className='p-[0,1rem] text-2xl'>Hours: Mon–Sat: 10 AM – 8 PM, Sun: 11 AM – 6 PM</p>
      </div>
      <div>
        <p className='p-[0,1rem] text-2xl'>Contact: [Insert phone/email or social link]</p>
      </div>
      <div>
        <h1 className='p-5 text-[1.6rem] text-blue-300'>Popular Items:</h1>
        <ul>
            <li className='p-5' >Graphic Tees & Hoodies</li >
            <li className='p-5'>Streetwear Jeans & Jackets</li >
            <li className='p-5' >Dresses & Skirts</li >
            <li className='p-5'>Accessories (bags, caps, sunglasses)</li >
        </ul>
      </div>
      <div>
        <h1 className='p-5 text-[1.6rem] text-blue-300'>Special Offers::</h1>
        <ul>
            <li className='p-5' >Weekly discounts on select items</li>
            <li className='p-5'>New arrivals every Friday</li >
            
        </ul>
      </div>
    </>
  )
}

export default Services
