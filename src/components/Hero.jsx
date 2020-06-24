import React from 'react';

class Hero extends React.Component {
  render() {
    return (
       <div className="hero">
         <div className="left">
           <p>Ben Kimim?</p>
         </div>
         <div className="right">
           <img src="/api.png" className="hero-img"></img>
         </div>
           <style jsx>{`
           
             .hero {
               background: url(/.png);
               background-size: cover;
               padding: 50px 100px;
               margin-top: 52px;
             }

             p {
               font-size: 50px;
             }

             .left {
               width: 30%;
               float: left;
               padding: 0px;
               background: fff;
               border: 1px solid #000;
               text-align: center;
             }

             .right {
               width: 50%;
               float: right;
               background: #fff;
               border: 1px solid #000;
             }

             .hero-img {
               max-width: 100%;
             }

           `}</style>
       </div>
    )
   
}
}

export default Hero;