import React, {useState} from 'react'
import "./Style.css"
import Menu from "./menuApp.js"
import Menucard from './Menucard'

const Resturant = () => {
 const [menuData, setMenuData] = useState(Menu);

  return (
    <>
    <Menucard mData={menuData}/>
    </>
  )
}

export default Resturant