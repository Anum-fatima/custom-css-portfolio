import React from 'react';
import Link from 'next/link';
import '../style/header.css';

export default function Header() {
  return (
<div className="header" >

<div className='leftdiv' >
  ANUM FATIMA
</div>

<div className='rightdiv'> 
  <ul className='headerlist'>
    
  <li>
<Link className='newlink' href="/">Home</Link>
</li>

<li>
<Link className='newlink' href="/about">About</Link>
</li>

<li>
<Link className='newlink'  href="/contactus">contactus</Link>
</li>



</ul>
</div>

</div>


  );
};










