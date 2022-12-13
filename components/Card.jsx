import React from 'react'

const Card = ({data}) => {

   const colors = [ 

   ]

   return (
      <div className="bg-[#ff90e8] p-10 rounded-lg border border-black">
         <img src={data.img} alt="" width={100} height={100} />
         <h3 className="text-2xl font-semibold py-2">{data.title}</h3>
         <p className="text-xl font-semibold">{data.desc}</p>
         <div className="py-4 gap-2 flex">
            {
               data.tags.map((tag, index) => (
                  <button key={index} className=' tag bg-white text-black rounded-full px-2 py-1 font-semibold'>
                     {tag}
                  </button>
               ))
            }
         </div>
      </div>
   )
}

export default Card