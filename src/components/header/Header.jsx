import React, { useState } from 'react'
import './Header.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { useGetSearchProductsQuery } from '../../context/ProductsApi';


const Header = () => {

    const navigate = useNavigate()

    const [value , setValue] = useState("")


    const handleNavigateDetail =(id) => {
        navigate(`/singleRout/${id}`)
        setValue("")
        
    }

    let { data } = useGetSearchProductsQuery({q:value , limit : 12})
    let searchItems = data?.products.map( el => 
        <div onClick={ () => handleNavigateDetail(el.id)} className='searchItem' key={el.id}>
            <img src={el.images[0]} width={50} alt="" />
            <p>{el.title}</p>
        </div>
    )

  return (
    <>
     <header>
        <div className="container">
            <div className="navbar">
                <NavLink to={"/"}>
                    <h2>Logo</h2>
                </NavLink>
                <NavLink to={"/"}>
                    <p>Home</p>
                </NavLink>
                <form action="">
                    <input value={value} onChange={(e) => setValue(e.target.value)} type="text" name="" id="" />
                    <button><CiSearch /></button>
                    {
                        value.trim() ?   <div className="search-modul"> 
                           {searchItems}
                         </div> : <></>
                    }
                </form>
            </div>
        </div>
     </header>
    </>

  )
}

export default Header