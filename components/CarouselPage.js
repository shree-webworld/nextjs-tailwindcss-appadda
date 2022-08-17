import Image from 'next/image';

const CarouselPage = (
                      {
                        title,  imgsrc, imgalt, ...props
                      }
                    ) => {
                            return(<>
                              <div>
                              <section className="hero min-h-screen bg-[url('https://images.unsplash.com/photo-1594175268654-e60bea6c037c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGxha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')]">
                               <div className="bg-white rounded-lg p-10 bg-opacity-70">
                                <div className="flex-col hero-content lg:flex-row-reverse">
                                  <Image src={imgsrc} alt={imgalt} width={500} height={300} priority className="lg:max-w-lg md:max-w-md sm:max-m-sm rounded-lg shadow-2xl "/>
                                  <div>
                                    <p className="mb-5 text-5xl font-bold text-purple-600">
                                        Welcome To
                                    </p>
                                    <p className="mb-5 text-5xl font-bold text-purple-600">
                                        <i className="bi bi-app-indicator"></i>AppAda
                                    </p>
                                    <p className="mb-5">
                                      <span className="text-purple-500 text-2xl font-semibold">Try hands-on </span>
                                      <span className="text-4xl font-bold italic text-purple-600">{title} app</span>
                                    </p>
                                   </div>
                                  </div>
                                </div>
                              </section>
                              </div>

                                  </>)
                        }


export default CarouselPage;
