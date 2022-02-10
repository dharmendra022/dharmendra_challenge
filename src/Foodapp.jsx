import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Foodapp = () => {
  return (
    <>
    {/* <Header/> */}
    {<Header/>}
    <div className='foodapp'>
    <div className='foodappH'>
    <p>Welcome to Food's</p>
    <p>Kitchen</p>
    </div>
    </div>
    <div className='btnMenu'>
        <Link to='/fooditem'>GO TO MENU</Link>
    </div>

    </>
  )
}

export default Foodapp