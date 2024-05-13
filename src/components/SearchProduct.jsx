// // 

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterItem, products, setSearchQuery } from '../redux-toolkit/filterSlice'
import { CiSearch } from 'react-icons/ci'


const SearchProducts = () => {

    const dispatch = useDispatch()

    const { data } = useSelector((state) => state.product)
    // console.log(data);

    const [search, setSearch] = useState("")

    const searchHandler = (e) => {
        const query = e.target.value
        setSearch(query)
        // let searchData = data.filter( item => item.name.includes(query))
        if (data) {
            const searchData = data.filter(item => item.title.includes(query) || item.description.includes(query) || item.category.includes(query));
            console.log(searchData);
            dispatch(filterItem(searchData))
        }
        dispatch(products(false))
         dispatch(setSearchQuery(query))
    }


  return (
    // <div>
      //  {/* <input type="text" className='search_input' placeholder='search products' value={search} onChange={searchHandler} /> */}
       
    // {/* </div> */}



    // <>
    // </>



// {/* <div className="bg-gray-200"> */}
<div className='search_bar'>
  <div className="container h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8">
    <div className="relative">
      <input
        type="text"
        className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
        placeholder="Search anything..."
        value={search} onChange={searchHandler}
      />
      <div className="absolute top-4 right-3">
        {/* <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" /> */}
      </div>
    </div>
  </div>
</div>



    
  
  )
}

export default SearchProducts