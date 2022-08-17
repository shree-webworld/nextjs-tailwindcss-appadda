import Head from 'next/head';
import useSWR from 'swr';
import {useState} from 'react';
import Preloader from '../components/Preloader';
import cardBg from "../public/images/weather-card-bg.jpg";
// import styles from '../styles/Weather.module.css';


import axios from 'axios';
const fetcher = async (url) => await axios.get(url)
                              .then(res => res.data)
                              .catch((error) =>{
                                                  console.error(error);
                                                  if(confirm("Error status "+error.response.data.cod+" - "+error.response.data.message)== true)
                                                  {
                                                      window.location.reload();
                                                   }else{
                                                          window.location.reload();
                                                        }
                                                }
                                    );

export default function Weather()
{
    const [getCity, setCity] = useState("");
    const [getValue, setValue] = useState("pune");

    const { data, error } = useSWR(`https://api.openweathermap.org/data/2.5/weather?q=${getValue}&units=metric&appid=98df8785cb9aa191e35e66cab570c000`, fetcher);
    if (!data) return <div><Preloader /></div>
    if (error) return <div>alert(error)</div>

    const getDate = (d) =>
    {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }


    function handle(evt)
    {
      if(evt.key === "Enter")
      {
        setValue(getCity);
      }
    }


  return(<>
      <Head>
        <title>Weather App 🌩️</title>
      </Head>

            <main className="hero min-h-screen" style={{backgroundImage:'url("https://unsplash.imgix.net/photo-1422405153578-4bd676b19036?fit=crop&fm=jpg&h=700&q=75&w=1050")'}}>
              <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content flex flex-col" style={{fontFamily: "'Montserrat', sans-serif"}}>

                  <input type="text" placeholder="🔎 Enter City Name and Press ↩ key" name="searchCity" autoComplete="off" value={getCity} onChange={event => setCity(event.target.value)} onKeyPress={handle} className="input input-bordered input-primary w-80 max-w-xs text-gray-900 text-sm capitalize font-semibold mb-4 mt-20  " />
                  <div className="w-96 h-96 rounded-2xl" style={{backgroundImage : 'url("https://raw.githubusercontent.com/akashyap2013/Weather_App/master/src/assets/blur-background-1187974.jpg")'}}>
                    <div className="flex flex-col justify-center space-y-10 mt-8">
                      <div className="grid justify-items-center">
                          <h2 className="text-3xl font-semibold" ><i className="ri-map-pin-2-fill"></i> {data.name}</h2>
                          <p className="text-sm text-coolGray-600 ">{getDate(new Date())}</p>
                      </div>

                      <div className="text-4xl font-bold grid justify-items-center backdrop-blur-xl bg-white/30 py-1 rounded-full">
                          <h1 className="">{data.main.temp} °c</h1>
                      </div>

                      <div className="mt-5 font-semibold grid justify-items-center">
                        <p className="text-3xl">{data.weather[0].main}</p>
                        <h2 className="text-xl">Min : {data.main.temp_min} °c | Max : {data.main.temp_max} °c</h2>
                      </div>
                    </div>

                    <div className="grid grid-rows-2 text-base space-y-1 mt-6 place-content-center">
                      <div className="grid grid-cols-2">
                        <h2>Humidity : {data.main.humidity}%</h2>
                        <h2>Pressure : {data.main.pressure} hPa</h2>
                      </div>

                      <div className="grid grid-cols-2">
                        <h2>Wind  : {Math.floor((data.wind.speed * 18) / 5)} km/hr</h2>
                        <h2>Visibility : {data.visibility / 1000} km</h2>
                      </div>
                    </div>

                  </div>

                 </div>
                </main>
        </>);
};
