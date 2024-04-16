import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/Img/logo.jpg';

const navigation = [
  { name: 'Home', to: '/fastreboot-website/', current: false },
  { name: 'About', to: '/fastreboot-website/about', current: false },
  { name: 'Our Program', to: '/fastreboot-website/program', current: false },
  // { name: 'Contact us', to: '/fastreboot-website/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white navbar mx-auto w-4/5 rounded-b-xl h-20 px-4">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              
              <div className="flex items-center flex-shrink-0 sm:flex-col">
                <img
                  className="h-8 w-auto mr-2 rounded-lg"
                  src={logo}
                  alt="Your Company"
                />
                <h1 className="text-black font-bold">Fastreboot.</h1>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 bg-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-black' : 'text-black hover:text-blue-700 ',
                        'rounded-md px-1 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="buttons flex justify-end flex-wrap gap-1 ">
                  <Link to="/fastreboot-website/login">
                    <button className=" bg-white h-10 text-black border-black border-2 px-2 rounded-xl font-semibold hover:bg-stone-200 hover:scale-105 transition-transform duration-300">Login</button>
                  </Link>
                  <Link to="/fastreboot-website/test">
                    <button className="bg-green-500 h-10 px-2 py-2 text-white rounded-xl font-semibold hover:bg-green-600 hover:scale-105 transition-transform duration-300">Assessment</button>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden z-10 bg-slate-50 relative pb-6 px-6 rounded-2xl">
            <div className="space-y-1 px-2 pb-3 pt-2  ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className={"gap-3 flex"}>
                <Link to="/fastreboot-website/login"> {/* Change a to Link */}
                  <button className="mr-2 bg-white h-10  text-black border-black border-2 px-5 rounded-xl font-semibold hover:bg-stone-200 hover:scale-105 transition-transform duration-300">Login</button>
                </Link>
                <Link to="/fastreboot-website/test"> {/* Change a to Link */}
                  <button className="bg-green-500 h-10 px-5 py-2 text-white rounded-xl font-semibold hover:bg-green-600 hover:scale-105 transition-transform duration-300">Assessment</button>
                </Link>
              </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
