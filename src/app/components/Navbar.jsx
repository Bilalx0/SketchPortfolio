import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/rosopak.png'


function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-5">
      <Image 
        src={logo}
        width={50}
        height={50}
        alt='logo'

      />
       <div className="px-6 py-3 bg-gray-200 text-black border border-gray-300 font-semibold rounded-full hover:bg-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 cursor-pointer"

            style={{
              boxShadow: '0 4px 12px rgba(0,0,0,0.08), 0 0 15px rgba(0,0,0,0.03)',
            }}>
          <span className='text-lg font-medium'> <span className="text-xl mr-3">→</span> START A PROJECT</span>
        </div>

    </div>
  );
}

export default Navbar;