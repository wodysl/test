import '../css/Sign.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // 아이콘 임포트
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Sign() {
        const navigate = useNavigate();
        const [state, setState] = useState({
          id: "",
          pwd: "",
        });
      
        const handleChange = (e) => {
          setState({
            ...state,
            [e.target.name]: e.target.value,
          });
        };
      
        const submitId = () => {
          const post = {
            id: state.id,
            pwd: state.pwd,
          };
      
          fetch("http://localhost:4000/Sign", {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(post),
          })
            .then((res) => res.json())
            .then((json) => {
              if (json.cheked == true)
              {
                alert("로그인 성공")
                navigate('/ChatRoom');
      
              } else{
                alert("아이디 또는 비밀번호가 틀렸습니다.")
              }      
              setState({
                ...state,
                message: json.message,
              });
            })
            .catch((error) => {
              setState({
                ...state,
                message: error.message,
              });
            });
        };
    
// ------------------------------------------------------------------------------------------

    const [isSignUpMode, setIsSignUpMode] = useState(false);

    const uphandleClick = () => {
    // Sign Up 버튼 클릭 시 상태를 토글
    setIsSignUpMode(true);
    };

    const inhandleClick = () => {   // 클릭하면 container 클래스가 container sign-up-mode로 클래스 이름으로 바껴야됨
    // Sign In 버튼 클릭 시 상태를 토글
    setIsSignUpMode(false);
    };

  return (
      <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
            <div className="signin-signup">
                <form action="" className="sign-in-form" >
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" id="id" name="id" placeholder="Username" required onChange={handleChange}/>
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" id="pwd" name="pwd" placeholder="Password" required onChange={handleChange}/>
                    </div>
                    <input type="button" value="Login" className="btn solid" onClick={submitId}/>

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

                <form action="" className="sign-up-form" >
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" id="id" placeholder="Username"/>
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" id="pw" placeholder="Password" />
                    </div>
                    <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" id="pwc" placeholder="Re_Password" />
                    </div>
                    <input type="button" value="Sign Up" className="btn solid"  />

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
                    <button className="btn transparent" id="sign-up-btn" onClick={uphandleClick} >Sign up</button>
                </div>

                <img src="" className="image" alt=""/>
            </div>

            <div className="panel right-panel">
                <div className="content">
                    <h3>이미 계정이 있으신가요 ?</h3>
                    <p>로그인하여 채팅 서비스를 무료로 누리세요 !</p>
                    <button className="btn transparent" id="sign-in-btn" onClick={inhandleClick} >Sign in</button>
                </div>

                <img src="" className="image" alt=""/>
            </div>
        </div>
    </div>
  ); 
}

export default Sign;
