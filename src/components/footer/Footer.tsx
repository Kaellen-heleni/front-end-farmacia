import { GithubLogo } from '@phosphor-icons/react'
import React, { useContext } from 'react'


function Footer() {
    return(
      <>
        <div className="flex justify-center bg-red-900 text-white">
          <div className="container flex flex-col items-center py-1">
            <p className='text-xl font-bold'> FarMelhor | Copyright:</p>
            <p className='text-lg'>Confira o projeto completo: </p>
            <div className='flex gap-2'>
              <GithubLogo size={48} weight='bold' />
        
            </div>
          </div>
        </div>
      </>
    
  )
}

export default Footer;