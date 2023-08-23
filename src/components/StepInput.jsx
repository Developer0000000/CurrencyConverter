import React from 'react';

function StepInput({ placeholder, value, name, inputValue }) {



  return (
    <>

      <div className='flex flex-col justify-center items-center mx-auto space-y-4'>
        <input
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={inputValue}
          style={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', color: 'snow' }}
          className="outline-none px-4 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:blur-[0.5px]"
        />
      </div>

    </>
  );
}

export default StepInput;
