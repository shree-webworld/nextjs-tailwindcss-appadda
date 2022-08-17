import Head from 'next/head';
import useSWR from 'swr';
import {useState} from 'react';
import Preloader from '../components/Preloader';
import cardBg from "../public/images/weather-card-bg.jpg";


import axios from 'axios';
const fetcher = async (url) => await axios.get(url)
                              .then(response => response.data)
                              .catch((error) =>{
                                                  console.error(error);
                                                  console.error(error.response.data);
                                                  console.error(error.message);
                                                  if(confirm("Error status "+error.response.data.cod+" - "+error.response.data.message)== true)
                                                  {
                                                      window.location.reload();
                                                   }else{
                                                          window.location.reload();
                                                        }
                                                }
                                    );

export default function Dictionary()
{
    const [getMeaning, setMeaning] = useState("word");
    const [getWord, setWord] = useState("");

      const { data, error } = useSWR(`https://dictionary-api-five.vercel.app/api/v1/entries/en/${getMeaning}`, fetcher);
      if (!data) return <div><Preloader /></div>
      if (error) return <div>{error}</div>



    function handle(evt)
    {
      if(evt.key === "Enter")
      {
        setMeaning(getWord);
        setWord("");
      }
    }


  return(<>
      <Head>
        <title>Dictionary 📖</title>
      </Head>

            <main className="hero min-h-screen" style={{backgroundImage:'url("https://unsplash.imgix.net/photo-1422405153578-4bd676b19036?fit=crop&fm=jpg&h=700&q=75&w=1050")'}}>
              <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content flex flex-col" style={{fontFamily: "'Montserrat', sans-serif"}}>

                <div className="max-w-md">
                 <div className="card w-96  bg-base-100 shadow-xl">
                   <div className="card-body ">
                    <h2 className="text-xl font-bold text-3xl text-center text-gray-900 mb-2">English Dictionary</h2>
                    <input type="text" placeholder="🔎Enter Word and Press ↩ key" name="searchWord" autoComplete="off" autoFocus value={getWord} onChange={event => setWord(event.target.value)} onKeyPress={handle} className="input input-bordered input-primary w-80 max-w-xs text-gray-900 text-sm capitalize font-semibold mt-2  " />

                    <div className="flex flex-col">
                      <p className="text-gray-900 text-2xl capitalize">{data[0].word}</p>
                      <span className="text-gray-400 text-xl">{data[0].meanings[0].type} &nbsp; {data[0].phonetics[0].text}</span>
                    </div>

                    <div className="divider"></div>

                      <div className="flex flex-col">
                        <p className="badge badge-lg badge-info-content mb-1">Meaning</p>
                        <p className="text-gray-600 text-xl capitalize">{data[0].meanings[0].definitions[0].definition}</p>
                      </div>

                    <div className="divider"></div>

                      <div className="flex flex-col">
                        <p className="badge badge-lg badge-info-content mb-1">Example</p>
                        <p className="text-gray-600 text-xl">{(data[0].meanings[0].definitions[0].examples[0]).replace(/<[^>]+>/g, '')}</p>
                      </div>


                   </div>
                  </div>
                </div>

               </div>
              </main>
        </>);
};
