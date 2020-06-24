import React from 'react';
import Nav from './../components/Nav';
import Footer from './../components/Footer';

class NotFoundPage extends React.Component {
  render() {
    return (
       <div>

          <Nav/>
          
          <div className="div">
            <p className="text1">404</p>
            <a className="des">
              Aradığın sayfayı bulamadık, <a href="/" className="des-link">Ana Sayfa</a>'ya dönebilirsin.
            </a>
            <a className="ul-header">Bu hata genel olarak şunlardan kaynaklanır:
              <ul className="ul">
                <li className="li">- Var olmayan bir link, veya yanlış link</li>
                <li className="li">- Site sahibi tarafından silinmiş</li>
              </ul>
            </a>
          </div>
          <Footer/>

          <style jsx>{`

            .des {
              color: #000;
              font-size: 20px;
            }

            .des-link {
              color: #00a0d9;
            }

            .ul-header {
              margin: 10px 0 0 0;
              font-size: 15px;
              color: #000;
            }

            .ul {
              list-style-type: none;
              padding: 0;
            }

            .li {
              text-align: center;
            }

            .div {
              width: 500px;
              height: 200px;
              top: 50%;
              left: 50%;
              margin-top: -100px;
              margin-left: -250px;
              position: fixed;
              text-align: center;
            }

            footer {
              top: 100%;  
            }
            
            .text1 {
              font-size: 48px;
              margin: auto;
              color: #000;
            }
           `}</style>

       </div>
    )
   
}
}

export default NotFoundPage;