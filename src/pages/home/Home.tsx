import React,  { useContext } from 'react';
import foto from '../../assets/foto.svg'
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';


function Home() {
  
    return (
        <>
        <div className="bg-white flex justify-center">
          <div className='container grid grid-cols-2 text-black'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>FarMelhor!</h2>
              <div className=" py-4">
              <h1 className=' text-2xl '>Levamos os melhores cuidados até você com apenas um click! </h1>
              <div className="flex justify-around gap-4">
                
                <button className='rounded bg-[#282424]  text-white py-2 px-4'>Ver produtos</button>
            </div>
            
              </div>
            </div>
            
            <div className="flex justify-center ">
              <img src={foto} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;