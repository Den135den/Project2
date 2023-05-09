import React, { Component } from "react";
import style from '../Headers.module.css'
import img from '../../../img/21.jpg'
import img2 from '../../../img/20.jpg'
import img3 from '../../../img/22.jpg'
export default class IFORMATION extends Component {
    render() {
        return (
            <div style={{ display: 'flex' , paddingTop:'60px'}}>
                <div className={style.card2}>
                    <h1 className={style.textTitle2}>John Doe</h1>
                    <img src={img} className={style.cardImg2} alt="Зображення тренера" />
                    <div className={style.cardStyle}>
                        <h1>Skills</h1>
                        <ul>
                            <li> knowledge of training organization methods;</li>
                            <li>experience of participation in competitions;</li>
                            <li>knowledge of the basics of medicine, physiology, and psychology;</li>
                        </ul>
                        <h1>Contact Information</h1>
                        <ul>
                            <li>Email: example@example.com</li>
                            <li>Telephone: 123-456-7890</li>
                            <li>Address: street Nodovska, 44</li>
                        </ul>
                        <h1>Experience</h1>
                        <div>He's from American, Experienced trainer with 3 years of experience,
                            specializing in the field of sports coaching.Goal oriented and committed to work,
                            excellent communication and interpersonal skills</div>
                    </div>
                </div>


                <div className={style.card2}>
                    <h1 className={style.textTitle2}>John Doe</h1>
                    <img src={img2} className={style.cardImg2} alt="Зображення тренера" />
                    <div className={style.cardStyle}>
                        <h1>Skills</h1>
                        <ul>
                            <li>dexterity will show its abilities, develop strength potential;</li>
                            <li>the possibility of promoting professional activity;</li>
                            <li>methodically teach professional activities</li>
                        </ul>
                        <h1>Contact Information</h1>
                        <ul>
                            <li>Email: example@example.com</li>
                            <li>Telephone: 561-932-3910</li>
                            <li>Address: street Mobilna, 12</li>
                        </ul>
                        <h1>Experience</h1>
                        <div>He graduated from the University of Physical Education in Germany. 
                            He started his coaching career in a small town where he worked for two years. 
                            The next stage was the city, where he worked for another
                             four years as a head coach and led his students to international Olympics</div>
                    </div>




                </div>
                <div className={style.card2}>
                    <h1 className={style.textTitle2}>John Doe</h1>
                    <img src={img3} className={style.cardImg2}  alt="Зображення тренера" />
                    <div className={style.cardStyle}>
                        <h1>Skills</h1>
                        <ul>
                            <li>ability to create a sports diet for athletes of different ages, genders;</li>
                            <li>assistance and clear insurance during training;</li>
                            <li>created short and long-term exercise programs for clients</li>
                        </ul>
                        <h1>Contact Information</h1>
                        <ul>
                            <li>Email: example@example.com</li>
                            <li>Telephone: 454-639-7834</li>
                            <li>Address: street Dobuvska, 43</li>
                        </ul>
                        <h1>Experience</h1>
                        <div>Interned at a university for one year in Ireland. After that, he got a job as an assistant coach for a year, then, after receiving the title of senior coach, he started an independent career.</div>
                    </div>




                </div>

            </div>

        )
    }

}

