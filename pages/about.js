import Image from 'next/image';


export default function About()
{
  return(<>
            <div className="hero min-h-screen bg-base-200" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <div className="hero-content flex-col lg:flex-row">
                <Image src="https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGluZm9ybWF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      width={550} height={400} alt="about" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                  <h1 className="text-5xl font-semibold">Find premium app on AppAdda.com</h1>
                  <div className="flex flex-row space-x-32 mt-8 text-2xl">
                    <div className="flex flex-col space-y-5">
                      <h1>☑️ Quotes</h1>
                      <h1>☑️ Dictionary</h1>
                      <h1>☑️ Notes</h1>
                    </div>

                    <div className="flex flex-col space-y-5">
                      <h1>☑️ Weather</h1>
                      <h1>☑️ Currency Converter</h1>
                    </div>

                  </div>
                </div>
              </div>
            </div>
        </>);
}
