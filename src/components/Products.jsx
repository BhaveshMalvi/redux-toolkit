
// // 
import React, { useEffect, useId, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../redux-toolkit/cartSlice'
import { fetchProducts } from '../redux-toolkit/productSlice'
import { STATUSE } from '../redux-toolkit/productSlice'
import RingLoader from "react-spinners/RingLoader";
import { isCart, selectedCart } from '../redux-toolkit/selectCartSlice'
import { Navigate, useNavigate } from 'react-router-dom'




const Products = () => {

    // const [products, setProducts] = useState([])

    const dispatch = useDispatch()
    // const selectFilterItem = useSelector(state => state.filter.filterData)
    // console.log("product", selectFilterItem);

    // const data = useSelector((state) => state.product.data)
    // const status = useSelector((state) => state.product.status)
    // // or 
    const { data, status } = useSelector((state) => state.product)

    const { filterData, isSelect, isProduct, searchQuery } = useSelector(state => state.filter)

    const navigate = useNavigate()


    // console.log("productin", isProduct);


    useEffect(() => {
        dispatch(fetchProducts())

    }, [])




    const addToCart = (item) => {
        // dispatch(addProducts(item))
        dispatch(selectedCart(item))
        dispatch(isCart(true))
        navigate("/selectCart")

    }





    if (status === STATUSE.LOADING) {
        return <><h1 style={{ color: "blue", display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
            <RingLoader color="black" />
        </h1></>
    }

    if (status === STATUSE.ERROR) {
        return <div style={{ color: "red", display: "flex", justifyContent: "center", alignItems: "center" }}> Oops ... ! Somthing Went Wrong  </div>
    }


    // if (isProduct) {
    //     return (

    //         <div style={{ 
    //             display: 'grid', 
    //             gridTemplateColumns: 'repeat(4, 1fr)', 
    //             gap: '30px' ,

    //         }}>

    //             {
    //                 // products.map((item) => {
    //                 data.map((item) => {

    //                     return (

    //                         <div className='card ' key={item.id} >
    //                             <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", padding:"10px"}}>

    //                             <img src={item.image} alt="" style={{width:"80px", height:"80px"}}  />
    //                             </div>

    //                             <h4>{item.title}</h4>

    //                             <h3>price:{item.price}</h3>

    //                             <button className='btn' onClick={() => addToCart(item)}> Explore more.. </button>

    //                         </div>
    //                     )

    //                 })

    //             }

    //         </div>

    //     )
    // } 

    // else if(isSelect){
    //     return (

    //         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px'  }}>

    //             {
    //                 // products.map((item) => {
    //                 filterData.map((item) => {

    //                     return (

    //                         <div className='card ' key={item.id} >
    //                             <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", padding:"10px"}}>

    //                             <img src={item.image} alt="" style={{width:"80px", height:"80px"}}  />
    //                             </div>

    //                             <h4>{item.title}</h4>

    //                             <h3>price:{item.price}</h3>

    //                             <button className='btn' onClick={() => addToCart(item)}> Explore more.. </button>

    //                         </div>
    //                     )

    //                 })

    //             }

    //         </div>

    //     )
    // }



    // else{
    return (
        // <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: " start" }}>
            {
                isProduct ? (
                    // Render all products if not searching
                    // data.map((item) => {

                        // return (

                            // <div className='card ' key={item.id} >
                            //     <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", padding: "10px" }}>

                            //         <img src={item.image} alt="" style={{ width: "80px", height: "80px" }} />
                            //     </div>

                            //     <h4>{item.title}</h4>

                            //     <h3>price:{item.price}</h3>

                            //     <button className='btn' onClick={() => addToCart(item)}> Explore more.. </button>

                            // </div>


                            <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: '3rem' }}>
                                {
                                    data.map((item) => {
                                        return (<>
                                            <div className="product-main-container" >
                                                <div className="product-container"  >
                                                    <div className='img-container'>
                                                        <img src={item.image} className='product-img' alt="" />
                                                    </div>
                                                    <div className='product-info'>
                                                        <p>{item.title}</p>
                                                    </div>
                                                    <div className='cart-info'>
                                                        <span className='cart-price'>${item.price}</span>
                                                        <button className='cart-btn' onClick={() => addToCart(item)}>
                                                            <svg className='cart-svg' viewBox="0 0 14.4 12">
                                                                <g transform="translate(-288 -413.89)">
                                                                    <path
                                                                        fill="currentColor"
                                                                        d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
                                                                    />
                                                                </g>
                                                            </svg>
                                                            <span>Cart</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div></>
                                        )
                                    })
                                }
                            </div>
                     
                ) : (
           

                            <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: '3rem' }}>
                                {
                                    filterData.map((item) => {
                                        return (<>
                                            <div className="product-main-container" >
                                                <div className="product-container"  >
                                                    <div className='img-container'>
                                                        < img src={item.image} className='product-img' alt="" />
                                                    </div>
                                                    <div className='product-info'>
                                                        <p>{item.title}</p>
                                                    </div>
                                                    <div className='cart-info'>
                                                        <span className='cart-price'>${item.price}</span>
                                                        <button className='cart-btn' onClick={() => addToCart(item)}>
                                                            <svg className='cart-svg' viewBox="0 0 14.4 12">
                                                                <g transform="translate(-288 -413.89)">
                                                                    <path
                                                                        fill="currentColor"
                                                                        d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
                                                                    />
                                                                </g>
                                                            </svg>
                                                            <span>Cart</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div></>
                                        )
                                    })
                                }
                            </div>
                        // )

                    // })

                    // }
                )
            }
        </div>
    );

    // }



}

export default Products
