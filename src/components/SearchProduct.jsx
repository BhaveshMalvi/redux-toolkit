// // 

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterItem, products, setSearchQuery } from '../redux-toolkit/filterSlice'



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
    <div>
       <input type="text" className='search_input' placeholder='search products' value={search} onChange={searchHandler} />
    </div>

  )
}

export default SearchProducts