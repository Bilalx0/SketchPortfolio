import React from 'react';
import Image from 'next/image';
import logo from '../../../public/images/b.png'


function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-5">
      <Image 
        src={logo}
        width={50}
        height={50}
      />
      <div>
        <span className='text-3xl'>START A PROJECT</span>
      </div>
    </div>
  );
}

export default Navbar;