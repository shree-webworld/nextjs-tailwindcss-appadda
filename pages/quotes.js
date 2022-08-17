import styles from '../styles/Quotes.module.css';
import  {useEffect,useState} from 'react';
import Head from 'next/head';

export default function Quotes()
{

  let [getQuote, setQuote] = useState('');
  let [getAuthor, setAuthor] = useState('');

  let getRandomQuotes =
      async() =>{
                    try
                     {
                       let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
                       await fetch(url)
                         .then(res => res.json())
                         .then((data) =>{
                                              let dataQuotes = data.quotes;
                                              let randomNum = Math.floor(Math.random() * dataQuotes.length);
                                              let randomQuote = dataQuotes[randomNum];

                                              setQuote(randomQuote.quote);
                                              setAuthor(randomQuote.author);
                                          }
                            )
                        .catch((error)=> {
                                            console.error(error);
                                          }
                              )

                    } catch (e)
                      {
                          console.error(`The error while fetching api data`+e);

                      }
                }

                useEffect( ()=>{
                                   getRandomQuotes();

                               },[]);


  return (<>
            <Head>
              <title> “Quotes App” </title>
            </Head>

              <main className="hero min-h-screen" style={{backgroundImage:'url(https://66.media.tumblr.com/bfb0fc23b1e7dacf2154a3430db1d119/tumblr_oaeviyDRt81vx7c7mo1_1280.jpg)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content">
                 <div className="max-w-md">
                      <div className="card  glass">
                        <div className="card-body">
                          <h1 className="mb-5 text-3xl font-bold" style={{fontFamily: "'Raleway', sans-serif"}}>
                            <i className="ri-double-quotes-l"></i>&nbsp;{getQuote}&nbsp;<i className="ri-double-quotes-r"></i>
                          </h1>
                          <p className="mb-5 text-2xl" style={{fontFamily: "'Nunito', sans-serif"}}>-{getAuthor}✍🏼</p>
                          <div className="card-actions justify-center">
                            <button className="btn btn-primary text-xl font-bold px-10" onClick={getRandomQuotes}>Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </main>
          </>)
}
