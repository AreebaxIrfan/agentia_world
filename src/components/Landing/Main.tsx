import React from 'react'
import AnimatedInput from './AnimatedInput'

const Main = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-gradient-to-t from-purple-950 via-black to-black min-h-screen px-4 sm:px-6 lg:px-8'>
            {/* Badge */}
            <div className='flex flex-row items-center bg-zinc-950 text-purple-400 rounded-full p-1 sm:p-2 space-x-2 mb-8 sm:mb-12'>
                <span className='bg-purple-600 p-2 sm:p-3 rounded-full'></span>
                <h2 className='text-sm sm:text-base'>POWERED BY PANAVERSITY</h2>
            </div>

            {/* Headings */}
            <h1 className='bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl p-4 font-bold bg-clip-text text-center'>
                Enterprise AI Agents
            </h1>
            <h2 className='text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 text-center'>
                for the Future
            </h2>

            {/* Input */}
            <div className='w-full max-w-md lg:max-w-xl px-4'>
                <AnimatedInput />
            </div>

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 m-6 sm:m-8 w-full sm:w-auto max-w-md lg:max-w-xl'>
                <button className='bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-bold text-lg sm:text-xl text-white w-full sm:w-auto transform transition-transform hover:scale-105'>
                    Deploy Your AI Agent {'>'}
                </button>
                <button className='border border-purple-900 px-4 py-3 sm:px-6 sm:py-4 font-bold text-lg sm:text-xl rounded-lg text-white w-full sm:w-auto transform transition-transform hover:scale-105'>
                    Watch Demo
                </button>
            </div>
        </div>
    )
}

export default Main