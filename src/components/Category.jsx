import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { filterItem, products } from '../redux-toolkit/filterSlice'
import { useNavigate } from 'react-router-dom'
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar'

function Category() {

    const [filterData, setFilter] = useState([])
    const [select, setSelect] = useState(false)

    const navigate = useNavigate()

 const data = useSelector(state => state.product.data)
 const dispatchFilter = useDispatch()

    // console.log(data);


    const handleFilterData = (e) => {
        // let optionVal = e.target.value;
        let optionVal = e;
        // console.log(optionVal);
        navigate('/')
        // if(e.target.value === "all"){
        if(e === "all"){
            setFilter(data)
            dispatchFilter(filterItem(data))
            dispatchFilter(products(true))
        //    return navigate('/')


        } 
         else {
            let filData = data.filter((item) => item.category === optionVal )
            // console.log(filData);
            setFilter(filData)
            dispatchFilter(filterItem(filData))
             dispatchFilter(products(false))
             
         }

    }

    // console.log(filterData);

    // useEffect(() => {
    //     setFilter(data)
    //     dispatchFilter(products(true))
    //     // navigate('/')

        
    // }, [])


  return (

    <>

    {/* <div >
        <select className='manubar' onChange={(e) => handleFilterData(e)}>
            <option  className='manubar' value="all">All</option>
            <option  className='manubar' value="men's clothing">Men</option>
            <option  className='manubar' value="women's clothing">Women</option>
            <option  className='manubar' value="jewelery">jewelery</option>
            <option  className='manubar' value="electronics">electronics</option>
        </select>
    </div> */}

        <Menu >

      <SubMenu label="Products"  >
                      <MenuItem className="manubar" onClick={()=> handleFilterData("all")}  > All</MenuItem>
                      <MenuItem className="manubar" onClick={()=> handleFilterData("men's clothing")} > Men</MenuItem>
                      <MenuItem className="menubar" onClick={()=> handleFilterData("women's clothing")} > women</MenuItem>
                      <MenuItem className="menubar" onClick={()=> handleFilterData("jewelery")} > jewelery</MenuItem>
                      <MenuItem className="menubar" onClick={()=> handleFilterData("electronics")} >electronics</MenuItem>
                    </SubMenu>
                    </Menu>


    </>


  )
}

export default Category