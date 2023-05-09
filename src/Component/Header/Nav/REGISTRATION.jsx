import React from "react";
//import style from '../Headers.module.css'
//import img from '../../../img/27.png'
import './R.css'


export default function REGISTRATION() {


    return (
        <div>
            <div className="widthForm">
            <div id="login-box">
                    <div class="left">
                        <h1 class='registrationText'>Sign up</h1>

                        <input type="text" name="username" placeholder="Username" class="inputUserName" />
                        <input type="text" name="email" placeholder="E-mail" class="inputUserName" />
                        <input type="password" name="password" placeholder="Password" className="inputPassword" />
                        <input type="password" name="password2" placeholder="Retype password" className="inputPassword" />

                        <input type="submit" name="signup_submit" value="Sign me up" className="inputSubmit" />
                    </div>

                    <div class="right">
                        <span class="loginwith">Sign in with<br />social network</span>

                        <button class="social-signin facebook">Log in with facebook</button>
                        <button class="social-signin twitter">Log in with Twitter</button>
                        <button class="social-signin google">Log in with Google+</button>
                    </div>
                    <div class="or">OR</div>
                </div>
            </div>
        
        </div>

    )
}
