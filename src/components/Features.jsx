import React from 'react'
import {features}  from '../assets/constant'

const Features = () => {
    return (
        <div className='bg-gray-200 py-8 -mt-10 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 grid-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8'>
                    {
                        features.map((feature, index) => {
                            return <div key={index} className='flex items-center justify-center text-center sm:text-left'>
                                <feature.icon className='flex-shrink-0 h-10 w-10 text-gray-600'/>
                                <div className='ml-4'>
                                    <p className='text-base font-medium text-gray-900'>
                                        {feature.text}
                                    </p>
                                    <p className='mt-1 text-gray-500 text-sm'>
                                        {feature.subtext}
                                    </p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Features
