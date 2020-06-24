import React from 'react';

//<img src='/favicon-big.png' width='14px' height='14px'></img>

class Nav extends React.Component {
  render() {
    return (
        <nav className='nav'>
        <label className='showMenu' for='hiddenInput'>☰</label>
        <input id='hiddenInput' type='checkbox' value='0'/>
        <ul className="cssMenu">
          <img src="/favicon.png" className="nav-img"></img>
          <li><a href="/">Ana Sayfa</a></li>
          <li><a href="/">Blog Yazıları</a></li>
          <li><a href="/">Hakkımda</a></li>
          <li><a href="/">İletişim</a></li>
        </ul>
      
          <style jsx>{`
            a {
              color: #00a0d9;
              text-decoration: none;
              font-size: 16px;
              padding: 0px;
            }
            nav {
              background: #fff;
              top: 0%;
              width: 100%;
              position: fixed;
              z-index: 2;
              display: flex;
            }
            .nav-img {
              height: 32px;
              display: none;
            }
            ul.cssMenu {
              list-style-type: none;
              background-color: #fff;
              display:table;
              margin:auto;
              width: 100%;
              box-shadow: 0px 0px 10px rgba(0,0,0,.8);
              float: right;
            }
            ul.cssMenu li {
              background: #fff;
              color: #000;
              padding: 15px 0;
              display: inline-block;
              position: relative;
              margin: 0px 10px 0 0;
              transition: 0.4s;
            }
            ul.cssMenu > li:hover {
              cursor: pointer;
            }
            
            ul.cssMenu .downarrow {
               border: 4px solid transparent;
               border-top-color: #000;
               display:inline-block;
            }
            
            ul.cssMenu li ul {
              display: none;
              padding: 0;
            }
            
            ul.cssMenu li:hover ul {
              display: table;
              margin-top: 15px;
              min-width: 250px;
              left: 0;
              position: absolute;
            }
            ul.cssMenu li:hover ul li {
              background-color: white;
              display: block;
            }
            ul.cssMenu li:hover ul li:hover{
              background-color: #e91e63;
              color:white;
            }
            input[type='checkbox']#hiddenInput{
               display:none;
            }
            
            .showMenu{
              display:none;
              color:white;
              font-size:30px;
              position:absolute;
              right:10px;
              top:10px;
              padding:8px 15px 10px 15px;
              background-color:#212121;
              border-radius:25%;
              z-index:1;
              border:5px solid #00a0d9;
              cursor:pointer;
              transition-duration: 0.4s;
            }
            
            li a {
              color: #000;
              padding: 15px 0px;
              transition: 0.4s;
            }
            
            @media (max-width: 623px){
              ul.cssMenu,ul.cssMenu .downarrow{
                display:none;
              }
              nav {
                width: 75%;
                float: right;
                left: 25%;
                height: 0;
              }
              ul.cssMenu {
                height: 100vh;
                left: 100%;
              }
              .showMenu {
                transition: 0.5s;
              }
              
            input[type='checkbox']#hiddenInput:checked ~ ul.cssMenu,.showMenu{
              display:block;
            }
      
          
            ul.cssMenu li {
              color: white;
              top: 80px;
              display: block;
              text-align:center;
              padding: 15px 0px;
              border-bottom:1px solid rgba(1,1,1,.1);
            }
          
            ul.cssMenu li:hover {
              box-shadow:0 0 0;
            }
          
            ul.cssMenu li ul {
              display: block;
              background-color: white;
              margin:15px 0 -15px 0;
            }
          
             ul.cssMenu li ul li {
              font-size:80%;
              padding:10px;
            }
          
            ul.cssMenu li:hover ul {
              width: 100%;
              position: relative;
            }
            ul.cssMenu li a {
              color: #ffffff;
              padding: 15px 55px;
            }
          }
          `}</style>
        </nav>
      )
   
}
}

export default Nav;