import React, { useState } from 'react'

const Form = (props) => {
  return (
    <main className='flex flex-col darkblue p-6 w-96 h-96 rounded-xl'>
        <div className='bgrey h-12 w-12 rounded-full flex-shrink-0 justify-center flex items-center text-gray-400'><img src="./assets/images/icon-star.svg" alt="" /></div>
        <h2 className='text-white my-6 text-2xl font-semibold'>How did we do?</h2>
        <p className='text-gray-400 text-sm font-semibold'>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <form action="" onSubmit={(e) => {props.handleSubmit(e)}}>
            <div className='flex justify-between my-6'>
            <label>
                <input type="radio" name="rating" value={1} id="option1" className="hidden" />
                <div className="bgrey h-12 w-12 rounded-full flex-shrink-0 justify-center flex items-center font-medium text-lg text-gray-400 cursor-pointer hover:bg-slate-700 label-checked:bg-orange-500 label-checked:text-white">1</div>
            </label>
            <label>
                <input type="radio" name="rating" value={2} id="option2" className="hidden" />
                <div className="bgrey h-12 w-12 rounded-full flex-shrink-0 justify-center flex items-center font-medium text-lg text-gray-400 cursor-pointer hover:bg-slate-700 label-checked:bg-orange-500 label-checked:text-white">2</div>
            </label>
            <label>
                <input type="radio" name="rating" value={3} id="option3" className="hidden" />
                <div className="bgrey h-12 w-12 rounded-full flex-shrink-0 justify-center flex items-center font-medium text-lg text-gray-400 cursor-pointer hover:bg-slate-700 label-checked:bg-orange-500 label-checked:text-white">3</div>
            </label>
            <label>
                <input type="radio" name="rating" value={4} id="option4" className="hidden" />
                <div className="bgrey h-12 w-12 rounded-full flex-shrink-0 justify-center flex items-center font-medium text-lg text-gray-400 cursor-pointer hover:bg-slate-700 label-checked:bg-orange-500 label-checked:text-white">4</div>
            </label>
            <label>
                <input type="radio" name="rating" value={5} id="option5" className="hidden" />
                <div className="bgrey h-12 w-12 rounded-full flex-shrink-0 justify-center flex items-center font-medium text-lg text-gray-400 cursor-pointer hover:bg-slate-700 label-checked:bg-orange-500 label-checked:text-white">5</div>
            </label>
            </div>
            
            <input className='orange rounded-full w-full text-white uppercase py-3 text-sm cursor-pointer' type="submit" value="submit" />
        </form>


    </main>
  )
}

export default Form