import {useForm} from 'react-hook-form';
import {useEffect} from 'react';
import axios from "axios";
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

      return {
                props: { allNotes: response.data },
             };
}*/



export default function Index()
{

  const { register, handleSubmit, reset, setFocus, setError, getValues, formState: {errors}  } = useForm();
  const router = useRouter();


  const onSubmit = async () =>{
                                  try
                                  {
                                    const userValues = getValues();
                                    console.log(userValues);
                                    reset();
                                    const res = await axios.post('/api/notes_api', userValues);
                                    console.log(res);
                                    alert(res.data.message);
                                    router.push('/notes/view');

                                  } catch (e)
                                    {
                                      console.error(e);
                                      // alert(e.response.data.error);
                                      router.push('/notes/view');
                                    }
                              }

    useEffect(() => {
                        setFocus("notes_title");
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                    }, [setFocus]);

  return(<>
          <Head>
                <title> Notes App </title>
          </Head>

            <section className="bg-[url('https://assets.codepen.io/780593/hobbit.jpg')]" style={{fontFamily: "'Montserrat', sans-serif"}}>
            	<div className="card container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
               <div className="card-body bg-[#61744F] rounded-lg">
            		<h1 className="text-2xl text-[#B89F57] font-semibold leading-none sm:text-2xl mb-4">📋 Todo App 🖋️</h1>
                <form className="form-control space-y-8 bg-[#49472E] px-10 py-10 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                  <input type="text" {...register("notes_title", { required: true })} autoComplete="off" placeholder="Add Title" className="input input-primary w-96 max-w-xs font-semibold capitalize text-xl" required/>
                  <textarea {...register("notes_description", { required: true })} className="textarea textarea-primary h-40 text-lg indent-8 normal-case" placeholder="Description" required></textarea>
              		<div className="flex flex-wrap justify-center">
                    <button type="submit" className="btn bg-[#B1976F] hover:bg-[#61744F] text-xl px-10">Save</button>
              		</div>
                </form>
                <button className="btn btn-link text-[#B89F57] text-base " onClick ={ () => router.push('/notes/view')}>View Saved Notes</button>
               </div>
            	</div>
            </section>
        </>);
}
