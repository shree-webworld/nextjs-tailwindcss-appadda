import Image from 'next/image';
import {useRouter} from 'next/router';


export default function Custom404()
{
  const router = useRouter();

  return(<>
    <div className="hero min-h-screen bg-base-200" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="hero-content flex-col lg:flex-row">
        <Image src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8NDA0JTIwZXJyb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              width={550} height={400} alt="about" className="max-w-sm rounded-full" />
        <div>
          <h1 className="text-5xl font-semibold text-red-700">Sorry,</h1>
          <h2 className="text-3xl text-red-500">the page you are searching for couldnot be found</h2>
          <button className="btn btn-outline btn-primary mt-10" onClick ={ () => router.push('/')}>
            Back to Home Page
          </button>
        </div>
      </div>
    </div>

        </>);
}
