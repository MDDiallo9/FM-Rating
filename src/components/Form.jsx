import React, { useState } from "react";

const Form = (props) => {
  return (
    <main className="darkblue flex h-96 w-96 flex-col rounded-3xl p-6">
      <div className="bgrey flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-gray-400">
        <img src="./assets/images/icon-star.svg" alt="" />
      </div>
      <h2 className="my-5 text-2xl font-semibold text-white">How did we do?</h2>
      <p className="text-sm font-semibold text-gray-400">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form
        action=""
        onSubmit={(e) => {
          props.handleSubmit(e);
        }}
      >
        <div className="my-6 flex justify-between">
          <label>
            <input
              type="radio"
              name="rating"
              value={1}
              id="option1"
              className="hidden"
            />
            <div className="bgrey label-checked:bg-orange-500 label-checked:text-white flex h-12 w-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-full text-lg font-medium text-gray-400 hover:bg-slate-700">
              1
            </div>
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value={2}
              id="option2"
              className="hidden"
            />
            <div className="bgrey label-checked:bg-orange-500 label-checked:text-white flex h-12 w-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-full text-lg font-medium text-gray-400 hover:bg-slate-700">
              2
            </div>
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value={3}
              id="option3"
              className="hidden"
            />
            <div className="bgrey label-checked:bg-orange-500 label-checked:text-white flex h-12 w-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-full text-lg font-medium text-gray-400 hover:bg-slate-700">
              3
            </div>
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value={4}
              id="option4"
              className="hidden"
            />
            <div className="bgrey label-checked:bg-orange-500 label-checked:text-white flex h-12 w-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-full text-lg font-medium text-gray-400 hover:bg-slate-700">
              4
            </div>
          </label>
          <label>
            <input
              type="radio"
              name="rating"
              value={5}
              id="option5"
              className="hidden"
            />
            <div className="bgrey label-checked:bg-orange-500 label-checked:text-white flex h-12 w-12 flex-shrink-0 cursor-pointer items-center justify-center rounded-full text-lg font-medium text-gray-400 hover:bg-slate-700">
              5
            </div>
          </label>
        </div>

        <input
          className="orange w-full cursor-pointer rounded-full py-3 text-sm uppercase text-white"
          type="submit"
          value="submit"
        />
      </form>
    </main>
  );
};

export default Form;
