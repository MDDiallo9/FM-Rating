import React from "react";

const Confirm = (props) => {
  return (
    <main className="darkblue flex h-96 w-96 flex-col items-center rounded-3xl p-6">
      <div className="p-4">
        <img src="./assets/images/illustration-thank-you.svg" alt="" />
      </div>
      <p className="bgrey rounded-full px-2 text-sm text-orange-500">
        You selected {props.state.rating} out of 5
      </p>
      <h2 className="my-5 text-2xl font-semibold text-white">Thank you!</h2>
      <p className="text-center text-sm font-semibold text-gray-400">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </main>
  );
};

export default Confirm;
