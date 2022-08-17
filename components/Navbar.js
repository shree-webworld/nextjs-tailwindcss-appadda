import {useRouter} from 'next/router';


export default function Navbar()
{
  const router = useRouter();

  return (<>

    <nav className="navbar bg-blue-600 text-primary-content px-10  fixed top-0  z-50" style={{ fontFamily: "'Raleway', sans-serif" }}>
      <div className="flex-1">
          <a className="cursor-pointer font-bold text-3xl normal-case" onClick ={ () => router.push('/')} >
            <i className="bi bi-app-indicator"></i>AppAdda
          </a>
      </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal lg:menu-normal p-0 space-x-3 font-bold">
            <li className="text-lg text-white hover:bg-[#ffff] hover:text-blue-700 hover:rounded-lg">
                <a onClick ={ () => router.push('/')}>Home</a>
            </li>
            <li className="text-lg text-white hover:bg-white hover:text-blue-700 hover:rounded-lg ">
              <a>Apps<i className="ri-arrow-down-s-fill"></i></a>
              <ul className="p-2 bg-gray-100">
                    <li className="hover:bg-primary hover:text-white hover:rounded-lg">
                        <a onClick ={ () => router.push('/quotes')}>Quotes</a>
                    </li>
                    <li className="hover:bg-primary hover:text-white hover:rounded-lg">
                        <a onClick ={ () => router.push('/weather')}>Weather</a>
                    </li>
                    <li className="hover:bg-primary hover:text-white hover:rounded-lg">
                        <a onClick ={ () => router.push('/dictionary')}>Dictionary</a>
                    </li>
                    <li className="hover:bg-primary hover:text-white hover:rounded-lg">
                        <a onClick ={ () => router.push('/currency_converter')}>Currency Converter</a>
                    </li>
                    <li className="hover:bg-primary hover:text-white hover:rounded-lg">
                        <a onClick ={ () => router.push('/notes/view')}>
                            Notes
                        </a>
                    </li>

              </ul>
            </li>
            <li className="text-lg text-white hover:bg-[#ffff] hover:text-blue-700 hover:rounded-lg">
              <a onClick ={ () => router.push('/about')}>About</a>
            </li>
          </ul>
        </div>
    </nav>

        </>)
}
