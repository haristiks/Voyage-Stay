import React from 'react'
import {BiSearch} from 'react-icons/bi'



function Search() {
  return (
    <div
    //   onClick={searchModal.onOpen}
      className="
      border-[1px]
     w-full 
     md:w-auto 
     py-2 
     rounded-full 
     shadow-sm 
     hover:shadow-md 
     transition 
     cursor-pointer"
    >
      <div
        className="
      flex
      flex-row
      item-center
      justify-between"
      >
        <div className="text-sm font-semibold px-6 py-3">{}Location Label</div>
        <div className="hidden sm:block text-sm font-semibold px-6 py-3 border-x-[1px] flex-1 text-center">
          {} durationLabel
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3 ">
          <div className="hidden sm:block">{}guestlabel</div>
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} /> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search