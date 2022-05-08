import React from 'react'
import "../styles/PreFooter.css"
import "../styles/Footer.css"
import "../styles/Social.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>

const shieldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" /></svg>

const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z"/></svg>

const Footer = ({footer}) => {
    return (
        <>
            <div className="PreFooter">
                <div>
                    {repeatIcon}
                    <p> <b>Hassle-free replacement</b> <br/>10-day easy replacement policy on mi.com</p>
                </div>
                <div>{shieldIcon} <p> <b>100% secure payments</b> <br/> We support Cards, Wallets, EMI and COD</p></div>
                <div>{mapIcon} <p> <b>Vast service network</b> <br/> 1000 Mi service-centers across 600 cities</p></div>
            </div>

            <div className="PreFooter2">
                <div> <p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>

                    <div>
                        <div>
                            <input type="email" name="email" placeholder="Enter Email Address" />
                            <button>›</button>
                        </div>
                        <span>Thanks. You're on our email list for special offers.</span>
                    </div>

                    <div>
                            <p>FOLLOW MI</p>
                            <span>We want to hear from you!</span>
                    </div>

                    <div className='Social'>
                        <a href="https://m.facebook.com/100008259618024/"
                            className="youtube">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com/in/sanny-kumar-3a4162205/"
                            className="link">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://twitter.com/sunny_singh__28"
                            className="twitter">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://www.instagram.com/sunny_singh__28/?hl=en"
                            className="insta" color='red'>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
            </div>

            <div className="footer">
                <div> 
                    <p> SUPPORT</p>
                    {footer.support.map((item)=>(
                        <a key={item.url} href={item.url}>{item.name}</a>

                    ))}
                </div>

                <div>
                <p> SHOP AND LEARN</p>
                {footer.shopAndLearn.map((item)=>(
                        <a key={item.url} href={item.url}>{item.name} </a>

                    ))}

                </div>
                <div>
                <p> RETAIL STORE</p>
                    {footer.retailStore.map((item)=>(
                        <a key={item.url} href={item.url}>{item.name}</a>

                    ))}
                </div>

                <div>
                        <p>  ABOUT</p>
                            {footer.aboutUS.map((item)=>(
                        <a key={item.url} href={item.url}>{item.name}</a>

                    ))}
                </div>

                <div>
                <p> CONTACT US</p>
                    {footer.contactUs.map((item)=>(
                            <a key={item.url} href={item.url}>{item.name}</a>

                        ))}
                </div>

                <div>
                    <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div><button>CHAT NOW</button>
                </div>
            </div>
            <div className="footerBorder">
                <div> Copyright © 2010 - 2021 Xiaomi. All Rights Reserved</div>
            </div>

        </>
    )
}

export default Footer
