import React from "react";

function Sidebar() {
  return (
    <div className="bg-[#5022B8] max-w-[350px] lg:flex lg:flex-col lg:items-start lg:justify-between lg:flex-1 h-[calc(100vh-63px)] p-8 hidden">
      <div className="flex flex-1 flex-col w-full">
        <div className="my-2 bg-[#7551C7] flex rounded-[50px] flex-1 flex-row justify-between items-center max-h-[67px] w-full">
          <div className="bg-white rounded-[50px] w-[67px] h-[67px] flex items-center justify-center mr-4">
            <img src="/images/sidebar/1h.svg" className="w-6" />
          </div>

          <div className="flex flex-1 flex-row justify-between">
            <p className="sidebar-text text-left">Messages</p>
          </div>
        </div>

        {/* <div className="flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
              <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
                <img src="/images/sidebar/1.svg" className="w-6" />
              </div>

              <div className="flex flex-1 flex-row justify-between">
                <p className="sidebar-text text-left">Messages</p>
                <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />
              </div>
            </div> */}

        <div className="flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
          <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
            <img src="/images/sidebar/2.svg" className="w-6" />
          </div>

          <div className="flex flex-1 flex-row justify-between">
            <p className="sidebar-text text-left">Orders</p>
            <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />
          </div>
        </div>

        <div className="flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
          <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
            <img src="/images/sidebar/3.svg" className="w-6" />
          </div>

          <div className="flex flex-1 flex-row justify-between">
            <p className="sidebar-text text-left">Favorite Logos</p>
            <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />
          </div>
        </div>

        <div className="flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
          <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
            <img src="/images/sidebar/4.svg" className="w-6" />
          </div>

          <div className="flex flex-1 flex-row justify-between">
            <p className="sidebar-text text-left">Draft Logos</p>
            <img src="/images/sidebar/chevron.svg" className="w-6 mr-6" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-starts justify-end w-full">
        <div className="flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
          <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
            <img src="/images/sidebar/5.svg" className="w-6" />
          </div>

          <div className="flex flex-1 flex-row justify-between">
            <p className="sidebar-text text-left">Settings</p>
          </div>
        </div>

        <div className="flex flex-1 flex-row justify-between items-center max-h-[67px] w-full">
          <div className="w-[67px] h-[67px] flex items-center justify-center mr-4">
            <img src="/images/sidebar/6.svg" className="w-6" />
          </div>

          <div className="flex flex-1 flex-row justify-between">
            <p className="sidebar-text text-left">Logout</p>
          </div>
        </div>

        <div className="flex w-full my-4">
          <hr className="w-full" />
        </div>

        <p className="sidebar-text">© 2021 branderMine</p>
        <p className="sidebar-text">Privacy | Terms | Site Map</p>
      </div>
    </div>
  );
}

export default Sidebar;
