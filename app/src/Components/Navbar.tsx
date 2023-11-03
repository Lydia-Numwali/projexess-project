import React from 'react'

const Navbar = () => {
  return (
    <div>
      <header className='flex items-center justify-between px-20 py-2 box-shadow-2xl'>
    <div className='logo'>
    <h1>LOGO</h1>
  </div>
  <div className='nav__bar'>
    <nav>
      <ul className='flex items-center'>
        <li className='mx-4'><a href='#'>Home</a></li>
        <li className='mx-4'><a href='#'>Products</a></li>
        <li className='mx-4'><a href='#'>Analytics</a></li>
      </ul>
    </nav>
  </div>
  <div className='space-x-10'>
  <button type="submit" className="bg-none text-black py-2 px-8 rounded-full border border-dashed border-black">Login</button>
  <button type="submit" className="bg-blue-500 text-white py-2 px-8 rounded-full">Signup</button>
</div>
</header>
      
    </div>
   
      

  )
}

export default Navbar
