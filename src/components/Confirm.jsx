import React from 'react'

const Confirm = (props) => {
  return (
    <main className='flex flex-col darkblue p-6 w-96 h-96 rounded-xl items-center'>
        <div className='p-4'>
            <img src="./assets/images/illustration-thank-you.svg" alt="" />
        </div>
        <p className='bgrey rounded-full text-orange-500 px-2 text-sm'>You selected {props.state.rating} out of 5</p>
        <h2 className='text-white my-6 text-2xl font-semibold'>Thank you!</h2>
        <p className='text-gray-400 text-sm font-semibold text-center'>
            We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
    </main>
  )
}

export default Confirm