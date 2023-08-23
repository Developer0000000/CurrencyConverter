import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import axios from 'axios';
import StepInput from './StepInput';
import Alert from './Alert';



const Currency = () => {

    const [currentCurrency, setCurrentCurrency] = useState({
        have: '',
        want: '',
        amount: '',
    });

    const [loading, setLoading] = useState(false);
    const [showHide, setShowHide] = useState(false);
    const [alert, setAlert] = useState(true);
    const [fetchCurrency, setFetchCurrency] = useState({});
    console.log(fetchCurrency);

    setTimeout(() => {
        setAlert(false)
    }, 6000);


    const inputValue = (event) => {
        let { name, value } = event.target;
        setCurrentCurrency((val) => {
            return {
                ...val,
                [name]: value,

            }
        })
    };

    const getCurrency = async () => {



        let apiKey = import.meta.env.VITE_CURRENCY_CONVERTOR;

        let jokeEndPoint = `https://api.api-ninjas.com/v1/convertcurrency?have=${currentCurrency.have}&want=${currentCurrency.want}&amount=${currentCurrency.amount}`;

        try {

            let response = await axios.get(jokeEndPoint, {
                headers: {
                    'X-API-KEY': apiKey
                }
            });

            let currencyApi = await response.data;
            setFetchCurrency(currencyApi);


        }
        catch (error) {
            console.log('🚀 ~ file: any ~ line any ~ any ~ value', error)
        }

        setLoading(false);

    };


    useEffect(() => {
        getCurrency();
    }, [])

    return (
        <>


            <section className='grid place-items-center h-[100vh] w-[100vw] ' style={{ backgroundColor: 'rgba(17, 24, 39, 0.9)' }}>

                {alert && <Alert />}

                <div className="bg-[#0D1821] px-6 dark:bg-gray-900 lg:w-[60%] sm:w-full lg:rounded-xl rounded-md">
                    <div className='flex py-4 mt-4 lg:justify-center items-center'>
                        {loading ? <Spinner /> : false}
                    </div>

                    <div className="py-4 lg:px-10 mx-auto max-w-screen-xl lg:pb-12">

                        <h1 className="text-center mb-8 text-[2rem] font-extrabold text-gray-50 lg:text-5xl ">Currency Converter </h1>


                        <div className='py-8'>
                            <div className='space-y-8 lg:space-y-0 lg:flex justify-center items-center'>
                                <StepInput inputValue={inputValue} value={currentCurrency.have} name='have' placeholder={'Current Currency: USD'} />
                                <StepInput inputValue={inputValue} value={currentCurrency.want} name='want' placeholder={'Want: PKR'} />
                                <StepInput inputValue={inputValue} value={currentCurrency.amount} name='amount' placeholder={'Enter the amount:'} />
                            </div>
                        </div>

                        {
                            showHide ?
                                <p className='text-center text-white'>{fetchCurrency.old_amount} {fetchCurrency.old_currency} === {fetchCurrency.new_amount} {fetchCurrency.new_currency}
                                </p>
                                : null
                        }

                        <div className='border-b-2 my-10 rounded-lg'></div>

                        <div className="flex flex-col space-y-4 mb-10 lg:mb-0 sm:flex-row justify-center sm:space-y-0 sm:space-x-4">
                            <button onClick={() => getCurrency(setShowHide(true), setLoading(true))} type='button' className=" inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-[#0FF4C6] hover:bg-[#0FF1a1] hover:scale-105 transition-transform outline-none">
                                Convert Currency
                                <div className="spin flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                            </button>

                        </div>


                    </div>


                </div>



            </section >
        </>
    )
}

export default Currency
