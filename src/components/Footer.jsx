import React from 'react';

class Footer extends React.Component {
  render() {
    return (
       <footer>
           <a href="#">Bir Yazılımcının BLOG'u</a>
           <p>Ahmet Kerem tarafından 2020 yılında kodlanmıştır.</p>

            <style jsx>{`
           
             a {
               color: #fff;
             }

             p {
               font-size: 12px;
               margin: 0;
             }

             footer {
               top: 100%;
                width: 100%;
                background: #212121;
                position: absolute;
                color: #fff;
                padding: 30px 0;
                text-align: center;
             }

           `}</style>
       </footer>
    )
   
  }
}

export default Footer;