import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ searchText }) => {

  const [text, setText] = useState("")

  const changeText = (value) => {
    setText(value)
    searchText(value)
  }

  return (
    <>
      <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center dark:border-gray-700 border-gray-200 ">
        <div className="flex justify-between items-center space-x-5 w-screen">
          <NavLink to="/home">
            <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900">
              Google
            </p>
          </NavLink>
          <div className="relative sm:ml-60 md:ml-72 mr-100">
            <input
              value={text}
              type="text"
              className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
              placeholder="🔎 Search Google or type URL"
              onChange={(e) => changeText(e.target.value)}
            />
            {text !== '' && (
              <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => setText('')}>
                x
              </button>
            )}
          {/* <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500 " onClick={() => {}}>
            Search
          </button> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar