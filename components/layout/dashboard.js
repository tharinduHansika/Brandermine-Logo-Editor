import Head from "next/head";
import Link from "next/link";
import { Navbar5 } from "../Navbar5";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import { logout } from "../../api_calls/auth";

import { hookstate, useHookstate } from '@hookstate/core';
import { authState } from "../../store/authstore";
import { setAuth } from "../../pages/_app";


const routeItems = [
  {
    path: 'messages',
    active_image: '/images/sidebar/1h.svg',
    image: '/images/sidebar/1.svg'
  },
  {
    path: 'orders',
    active_image: '/images/sidebar/2h.svg',
    image: '/images/sidebar/2.svg'
  },
  {
    path: 'favourite',
    active_image: '/images/sidebar/3h.svg',
    image: '/images/sidebar/3.svg'
  },
  {
    path: 'draft',
    active_image: '/images/sidebar/4h.svg',
    image: '/images/sidebar/4.svg'
  },
]

export default function DashboardLayout({ children }) {
  const router = useRouter()
  const auth = useHookstate(authState);
  useEffect(() => {
    if (!auth.get().isAuthenticated && !setAuth()) {
      auth.set({ ...auth.get(), isAuthRequired: true })
      router.push('/')
    }
  },[])
  return <>
    <div className="overflow-hidden h-screen">
      <Head>
        <title>Brandermine - User Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar5 />

      <div className="flex flex-row justify-between items-start  ">
        <div className="bg-[#5022B8] max-w-[350px] lg:flex lg:flex-col lg:items-start lg:justify-between lg:flex-1 h-[calc(100vh-63px)] p-8 hidden overflow-y-hidden">
          <div className="flex flex-1 flex-col w-full">
            {routeItems.map(r => {
              return <SideBarItem {...r} active_path={router.pathname} />
            })}
          </div>

          <div className="flex flex-1 flex-col items-starts justify-end w-full">
            <SideBarItem path='settings' active_path={router.pathname} image='/images/sidebar/5.svg' active_image='/images/sidebar/5h.svg' />
            <Link href={'/'} legacyBehavior>
              <div onClick={() => logout()} className="cursor-pointer my-1 hover:bg-[#7551C7] rounded-[50px] flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
                <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                  <img src="/images/sidebar/6.svg" className="w-6" />
                </div>

                <div className="flex flex-1 flex-row justify-between">
                  <p className="sidebar-text text-left">Logout</p>
                </div>
              </div>
            </Link>

            <div className="flex w-full my-4">
              <hr className="w-full" />
            </div>

            <p className="sidebar-text">© 2022 Brandermine</p>
            <p className="sidebar-text">Privacy | Terms | Site Map</p>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-screen ">
          <div className="px-4 lg:pb-12 pb-20 sm:px-4 flex-1 overflow-scroll ">
            {auth.get().isAuthenticated && children}
          </div>
        </div>
      </div>
    </div>
  </>;
}

function SideBarItem({ path, active_path, image, active_image }) {
  var url = '/dashboard/' + path
  var isActive = url == active_path
  return (
    <Link href={url} legacyBehavior>
      <div className={`cursor-pointer my-1 ${isActive ? 'bg-[#7551C7]' : 'hover:bg-[#7551C7]'} flex rounded-[50px] flex-1 flex-row justify-between items-center max-h-[67px] w-full`}>
        <div className={`${isActive ? 'bg-white rounded-[50px]' : ''} w-[67px] h-[67px] flex items-center justify-center mr-4`}>
          <img src={isActive ? active_image : image} className="w-6" />
        </div>

        <div className="flex flex-1 flex-row justify-between">
          <p className="sidebar-text text-left">{capitalizeFirstLetter(path)}</p>
          {isActive && <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />}
        </div>
      </div>
    </Link>
  );
}

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}