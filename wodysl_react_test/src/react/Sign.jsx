import '../css/Sign.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // 아이콘 임포트
import React, { Component, useRef, useEffect, useState} from "react";

// mongoose.connect('mongodb+srv://honghwarang:45fkd62dus@cluster0.sti7z1m.mongodb.net/?retryWrites=true&w=majority',{
//     useNewUrlParser : true, useUnifiedTopology : true
// }).then(()=>console.log("MongoDB Connect"))
//     .catch(err=>console.log(err))

// mongoose.set('strictQuery', true);

function Sign() {

//   const sign_in_btn = document.querySelector("#sign-in-btn");
//   const sign_up_btn = document.querySelector("#sign-up-btn");
//   const container = document.querySelector(".container");

//   sign_up_btn.addEventListener('click', () => {
//     container.classList.add("sign-up-mode");
//   });

//   sign_in_btn.addEventListener('click', () => {
//     container.classList.remove("sign-up-mode");
//   });

//     const inputRef = useRef();

//     useEffect(() => {
//         inputRef.current.focus();
//     }, []);

//     const swap = () => {
//         inputRef.current.focus();
//     };

// const App = () => {
//     const myElementRef = useRef(null);

//     useEffect(() => {
//         const element = myElementRef.current;

//         element.classList.add('sign-up-mode');

//         return () => {
//             element.classList.remove('sign-in-mode');
//         };
//     }, []);
// }

// const yourElementRef = useRef(null);

// useEffect(() => {
    
//     const yourElement = yourElementRef.current;

//     if (yourElement) {
//         yourElement.addEventListener('click', () => {
//             // 실행할 코드
//         });
//     }

//     return () => {
//         if (yourElement) {
//             yourElement.addEventListener('click', () => {
//                 //실행할 코드
//             });
//         }
//     };
// }, []);

// const [isSignUpMode, setIsSignUpMode] = useState(false);

// const handleSignUpClick = () => {
//   setIsSignUpMode(true);
// };

// const handleSignInClick = () => {
//   setIsSignUpMode(false);
// };

  return (
    <>
      <div className="container">
        <div className="forms-container">
            <div className="signin-signup">
                <form action="" className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <input type="submit" value="Login" className="btn solid"/>

                    <p className="social-text">sdfsodfsdfsfsfdsfsdfs</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </form>

                <form action="" className="sign-up-form">
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Re_Password"/>
                    </div>
                    <input type="submit" value="Login" className="btn solid"/>

                    <p className="social-text">sdfsodfsdfsfsfdsfsdfs</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>

        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h3>계정이 없으신가요 ?</h3>
                    <p>계정이 없으시다면 간단한 회원가입으로 채팅 서비스를 누려보세요 !</p>
                    <button className="btn transparent" id="sign-up-btn">Sign up</button>
                </div>

                <img src="" className="image" alt=""/>
            </div>

            <div className="panel right-panel">
                <div className="content">
                    <h3>이미 계정이 있으신가요 ?</h3>
                    <p>로그인하여 채팅 서비스를 무료로 누리세요 !</p>
                    <button className="btn transparent" id="sign-in-btn">Sign in</button>
                </div>

                <img src="" className="image" alt=""/>
            </div>
        </div>
    </div>
    </>
  ); 
}
export default Sign;
