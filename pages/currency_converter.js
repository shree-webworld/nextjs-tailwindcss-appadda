import Head from 'next/head';
import React, {useEffect, useState, useRef} from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Currency_Converter()
{
  const { register, handleSubmit } = useForm();
  const [getAns, setAns] = useState([]);

  const getAmount = useRef(null);
  const getCurrency1 = useRef(null);
  const getCurrency2 = useRef(null);
  const [getRates, setRates] = useState([]);
  const [hide, show] = useState("false");

  const onSubmit = async (dataOnSubmit) =>{
                                              try{
                                                    if((getCurrency1.current.value == getCurrency2.current.value) || !getAmount.current.value)
                                                    {
                                                      alert("Select 2 different currencies or Enter the correct amount");
                                                    }

                                                    const res = await axios.get(`https://api.frankfurter.app/latest?amount=${getAmount.current.value}&from=${getCurrency1.current.value}&to=${getCurrency2.current.value}`);
                                                    setAns(res.data);
                                                    setRates(res.data.rates);
                                                    show(!hide);

                                                }catch(error)
                                                  {
                                                    console.error(error);
                                                  }
                                          }

  const [getCurrencyOption, setCurrencyOption] = useState([]);
  const fetchCurrencyOption = async () =>{
                                            try{
                                                  const response = await axios.get("https://api.frankfurter.app/currencies");
                                                  setCurrencyOption(response.data);
                                              }catch(error)
                                                {
                                                  console.error(error);
                                                }
                                        }


  useEffect(() => {
                      fetchCurrencyOption();
                  },[]);


  return(<>
    <Head>
        <meta name="keywords" content="Currency, Exchange rates, app"/>
        <meta name="description" content="Free currency calculator app to convert between most of the global currencies using live exchange rates."/>
        <title>💲 Currency Converter </title>
    </Head>

    <section className="bg-gray-100 text-gray-800" style={{fontFamily: "'Montserrat', sans-serif"}}>
     <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
       <h1 className="text-3xl font-bold leading-none sm:text-3xl mb-8">¥ Currency €
         <p className="text-violet-600 text-5xl">$ Converter ₹</p>
       </h1>

       { hide ? (<p className="px-8 mb-8 text-xl">¥  ⇄  $  ⇄  ₹  ⇄  €</p>):
          (React.Children.toArray(
             Object.keys(getRates).map( (currencyRates,index) => <p key={index} className="px-8 mb-8 text-lg font-semibold">
                                                                   <span className="text-purple-600">{getAns.amount} {getAns.base}</span>&nbsp;&nbsp;equals&nbsp; <span className="text-purple-600">{getRates[currencyRates]} {currencyRates}</span>&nbsp; by  {getAns.date}
                                                                 </p>
                                      )
                                  )
        )}

       <div className="flex flex-wrap justify-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row">
             <input type="number" placeholder="Currency" {...register("amount")}  ref={getAmount} className="input input-bordered input-primary w-72 mb-4 mx-4 font-bold text-gray-900 text-xl"/>

              <select className="select select-primary w-72 text-xl" name="currency1" {...register("currency1")} ref={getCurrency1}>
              {React.Children.toArray(
                 Object.keys(getCurrencyOption).map( (currencyOption,index) =>(
                                                                                <option key={index} value={currencyOption}>{getCurrencyOption[currencyOption]}</option>
                                                                              )
                                                    )
               )}
              </select>
           </div>

              <div className="flex flex-row">
                {  hide ? (<div className="badge badge-primary w-72 py-6 mx-4 font-bold text-white text-xl">Conversion</div>) :
                   (React.Children.toArray(
                        Object.keys(getRates).map(
                                                   (currencyRates,index) => <div key={index} className="badge badge-primary w-72 py-6 mx-4 font-bold text-white text-xl">{ getRates[currencyRates]}</div>
                                                 )
                                        )
                  )
               }
                  <select className="select select-primary w-72 text-xl" name="currency2" {...register("currency2")} ref={getCurrency2}>
                    {React.Children.toArray(
                       Object.keys(getCurrencyOption).map( (currencyOption, index) =>(
                                                                                       <option key={index} value={currencyOption}>{getCurrencyOption[currencyOption]}</option>
                                                                                      )

                                                         )
                     )}
                  </select>
            </div>
            <button type="submit" className="btn btn-primary text-lg px-8 mt-10">Convert</button>
          </form>
       </div>
     </div>
    </section>

        </>);
}





/*
{
   Object.entries(getCurrency).map( (currencyOption =>(
                                                        <option value={Object.keys(currencyOption)}>{Object.values(currencyOption)}</option>
                                                      )
                                      )
                                  )

 }
*/
