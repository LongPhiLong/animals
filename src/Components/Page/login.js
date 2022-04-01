import styledComponents from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
  


function Login() {
    let navigate = useNavigate()
    let login = () => {
        localStorage.setItem("accessToken", true);
        navigate("../animalpage", { replace: true });
    }
     
    return (
        <Logins>
        <div className="title">
          <h1>Welcome to Animal Page</h1>
          <p>Please Login Your Account!</p>     
        </div>
        <form className="booking" >
                <fieldset className="input">
                    <div className="form">
                        <label className="labelinput">
                            Email
                        </label>
                        <input type="text"  className="inputname" placeholder="Please enter your account"/>
                    </div>
                    <div className="form">
                        <label className="labelinput">
                        PassWork
                        </label>
                        <input type="password"  className="inputname" placeholder="Please enter the password"/>
                    </div>
                <button className="btn" type="submit" onClick={login}><a>LOG IN</a></button>
                </fieldset>
            </form>
        </Logins>
    )
}

export default Login;

export const Logins = styledComponents.div`

margin: 0 auto;
    width: 420px;
    .title {
        text-align: center;
        .datlich {
            line-height: 47px;
            font-size: 40px;
            font-weight: 700;
            letter-spacing: 6px;
            color: #191919;
        }
        p {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            letter-spacing: 0;
            line-height: 25px;
            text-transform: none;
            margin-top: 20px;
            color: #8a8a8a;
        }
    }
    .booking .btn {
        appearance: none;
        display: inline-block;
        margin-top: 40px;
        margin-bottom: 40px;
        margin-left: 140px;
        padding: 0 20px;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        outline: none;
        border: none;
        box-sizing: border-box;
        vertical-align: middle;
        width: 25%;
        letter-spacing: .5px;
        color: #fff;
        background-color: RGBA( 100, 149, 237, 1 );
        border: 1px solid RGBA( 100, 149, 237, 1 );
        cursor: pointer;
        a{
            text-decoration: none;
            color: black;
            font-size: 15px;
        }
        &:hover {
            background-color:#fff;
            color: #b48360;
        }
    }
    .booking .input .form{
        margin-top: 32px;
        display: flex;
        flex-direction: column;
        .labelinput{
            display: inline-block;
            margin-bottom: 12px;
            font-size: 12px;
            color: #737373;
            font-weight: normal;
        }
        .inputname {
            -webkit-appearance: none;
            padding: 13px 16px 14px;
            color: #191919;
            line-height: 19px;
            font-size: 14px;
            outline: none;
            border: 1px solid #eaeaea;
            box-sizing: border-box;
            border-radius: 0;
            width: 100%;
        }
    }
`;