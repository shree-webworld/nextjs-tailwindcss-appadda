import useSWR from 'swr';
import Preloader from '../../components/Preloader';
import {useState, useEffect} from "react";
import axios from "axios";
import Link from 'next/link';
import {useRouter} from 'next/router';
import Head from 'next/head';

/*export async function getStaticProps(context)
{
      const response = await axios.get(`${baseurl}/api/notes_api`);
      if(!response)
      {
        return
        {
          notFound: true
        }
      }
      // console.log(response.data.length);
      // const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

      return {
                props: { allNotes: response.data },
             };
}*/

const fetcher = url => axios.get(url)
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


export default function View()
{

  const router = useRouter();

  const { data, error } = useSWR('/api/notes_api', fetcher);
  if (!data) return <div><Preloader /></div>
  if (error) return <div>alert(error)</div>




  return (<>
    <Head>
          <title> Notes App </title>
    </Head>

    <section className="text-gray-600 body-font bg-[url('https://assets.codepen.io/780593/hobbit.jpg')] h-screen" style={{fontFamily: "'Montserrat', sans-serif"}}>

        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-row-reverse mb-5">
          <button className="btn btn-ghost text-[#B1976F] text-lg hover:text-white hover:bg-[#B1976F]" onClick ={ () => router.push('/notes')}> ✏️ Create New Note</button>
        </div>

          <div className="flex flex-wrap -m-4">
          {
           data.map((currentElement,index) =>{
                                                  return(
                                                        <div className="p-4 md:w-1/3" key = {currentElement._id}>
                                                         <div className="card w-96 h-full bg-indigo-100 shadow-lg shadow-indigo-300">
                                                          <div className="card-body bg-[#49472E] text-white">
                                                            <h2 className="card-title text-lg font-bold  capitalize">{currentElement.notes_title}</h2>
                                                            <p className="indent-8 text-lg">{currentElement.notes_description}</p>
                                                            <div className="flex flex-row-reverse">
                                                              <Link href={"/notes/[slug_notes]"} as={ `/notes/${currentElement._id}` }>
                                                                <button className="btn btn-link btn-link text-[#B89F57] text-base">Edit</button>
                                                              </Link>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      );
                                                 }
                    )
             }
          </div>
        </div>
      </section>
        </>);
}
