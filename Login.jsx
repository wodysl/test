import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/Login.css"
import "../css/star.css"
import Rendering from '../js/star'

import logo from "../img/logo_small.png";



const Login = () => {
  const { starClass, starStyle } = Rendering;
  const navigate = useNavigate();
  const [state, setState] = useState({
    id: "",
    pwd: "",
    message: "",
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

    fetch("http://localhost:3001/login", {
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
          navigate('/Main');

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

  return (
    <>
      <div className="constelacao">
        {starClass.map((item1, index) => (
          <span key={index} className={item1} style={starStyle[index]}></span>
        ))}
      </div>

      <div className="logodiv">
        <img src={logo} className="login_logo" alt="logo" />
      </div>
      <div className="loginForm">
        <h1 className="login_label">로그인</h1>
        <div className="entryarea">
          <input type="text" className="login_input" id='id' name="id" required onChange={handleChange} />
          <div className="labelline">아이디</div>
        </div>
        <div className="entryarea">
          <input type="password" className="login_input" id='name' name="pwd" required onChange={handleChange} />
          <div className="labelline">비밀번호</div>
        </div>
        <div className="entryarea">
          <input type="button" className='login_btn' onClick={submitId} value="로그인" />
        </div>
        <div className="plus">
          <span><a className='login_a' href="#">아이디/비밀번호 찾기</a> | <a className='login_a' href="Signup">회원가입</a></span>
        </div>
      </div>
    </>
  );
};

export default Login;
