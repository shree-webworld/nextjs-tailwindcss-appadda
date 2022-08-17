import axios from 'axios';
import {useRouter} from 'next/router';
import {useForm} from 'react-hook-form';
import {useEffect} from 'react';
import Head from 'next/head';

export async function getServerSideProps({ params:{slug_notes} })
{
      let baseurl = process.env.URL;

      // const response = await axios.get(`${baseurl}/${slug_notes}`);
      const response = await axios.get(`https://appadda.vercel.app/api/notes_api/${slug_notes}`);

      return {
                props: { notes_details: response.data }
             };
}




export default function NotesUpdateAndDeleteById({notes_details})
{

   let { register, handleSubmit, reset, setFocus, setError, setValue, getValues, formState: {errors}  } = useForm();
   const router = useRouter();
   console.log(notes_details);

   const onSubmit = async () =>{
                                   try
                                   {
                                     const userValues = getValues();
                                     console.log(userValues);

                                     const res = await axios.put(`/api/notes_api/${notes_details._id}`, userValues);
                                     console.log(res);
                                     alert(res.data.message);
                                     router.push('/notes/view');

                                   } catch (e)
                                   {
                                     console.error(e);
                                     alert(e.response.data.error);
                                     router.push('/notes/view');
                                   }
                                }

  const onDelete = async () =>{
                                  try
                                  {
                                    const res = await axios.delete(`/api/notes_api/${notes_details._id}`);
                                    console.log(res);
                                    alert(res.data.message);
                                    router.push('/notes/view');
                                  } catch (e)
                                    {
                                      console.error(e);
                                      alert(e.response.data.error);
                                      router.push('/notes/view');
                                    }
                              }

  useEffect(() => {
                    let {notes_title, notes_description} = notes_details;

                    setValue("notes_title", notes_title);
                    setValue("notes_description", notes_description);
                    setFocus("notes_title");
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                  }, [setValue, setFocus]);



  return(<>
    <Head>
          <title> Notes App </title>
    </Head>

    <section className="bg-gray-100 text-gray-800 bg-[url('https://assets.codepen.io/780593/hobbit.jpg')]" style={{fontFamily: "'Montserrat', sans-serif"}}>
      <div className="card container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
       <div className="card-body bg-[#61744F] rounded-lg ">
        <h1 className="text-2xl text-[#B89F57] font-bold leading-none sm:text-2xl mb-4">📋 Todo App 🖋️</h1>

        <form className="form-control space-y-8 bg-[#49472E] px-10 py-10 rounded-lg" onSubmit={ handleSubmit(onSubmit) }>
          <input type="text" {...register("notes_title", { required: true })} autoComplete="off" className="input input-primary w-96 max-w-xs font-semibold capitalize text-xl" required/>
          <textarea {...register("notes_description", { required: true })}  autoComplete="off" className="textarea textarea-primary h-40 text-lg indent-8 normal-case" required></textarea>
          <div className="flex flex-wrap justify-center space-x-10">
            <button type="submit" className="btn bg-[#B1976F] hover:bg-[#61744F] text-base px-10">Update</button>
            <button type="button" className="btn btn-ghost text-red-400 text-lg hover:text-white hover:bg-red-400 px-8" onClick={onDelete}>
              <i className="bi bi-trash3"></i>&nbsp;&nbsp;Delete
            </button>
          </div>
        </form>
        <button className="btn btn-link btn-link text-[#B89F57] text-base" onClick ={ () => router.push('/notes/view')}>View Saved Notes</button>
       </div>
      </div>
    </section>

        </>);

}
