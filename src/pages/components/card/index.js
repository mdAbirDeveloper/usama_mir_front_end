/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Card = () => {
  return (
    <div>
        <div className='max-w-[1200px] mx-auto my-20'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                <div className='p-3 border border-[1px]-black flex'>
                    <img className='w-1/3' src='4.png'></img>
                    <div className='ml-3 text-center opacity-70'>
                        <h1 className='text-2xl mt-3 font-bold font-serif text-red-500'>ABOUT ME</h1>
                        <p className='text-lg font-serif my-5'>Experience a few dull momments</p>
                        <p className='text-red-400 italic'>Beauty <span className='text-gray-500'>/ Fashion</span></p>
                    </div>
                </div>
                <div className='p-3 border border-[1px]-black flex'>
                    <img className='w-1/3' src='5.png'></img>
                    <div className='ml-3 text-center opacity-70'>
                        <h1 className='text-2xl mt-3 font-bold font-serif text-sky-500'>TRENDS</h1>
                        <p className='text-lg font-serif my-5'>Experience a few dull momments</p>
                        <p className='text-red-400 italic'>Beauty <span className='text-gray-500'>/ Fashion</span></p>
                    </div>
                </div>
                <div className='p-3 border border-[1px]-black flex'>
                    <img className='w-1/3' src='6.png'></img>
                    <div className='ml-3 text-center opacity-70'>
                        <h1 className='text-2xl mt-3 font-bold font-serif text-yellow-500'>FASHION</h1>
                        <p className='text-lg font-serif my-5'>Experience a few dull momments</p>
                        <p className='text-yellow-400 italic'>Beauty <span className='text-gray-500'>/ Fashion</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card;