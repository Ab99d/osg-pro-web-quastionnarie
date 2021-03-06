import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const WebQuestionnaireAR = () => {
    return (
        <>
        {/* navbar */}
        <div className="web-nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="container-fluid">
                        <a className="navbar-brand" href><img className="" src={logo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2">
                                <a className="nav-link" aria-current="page" href>Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href>About Us</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href>Our Services</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href>Pricing Plans</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href>FAQs</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href>Contact</a>
                            </li>
                        </ul>
                        <Link className="btn btn-primary" to="/">English</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        {/* footer */}
        <div className="bg-web">
            <form action="" className="web-questionnaire-ar web">
            <div className="container">
                <div className="form-title">
                    <h2>?????????????? ?????? ??????????</h2>
                    <p className="">???????? ?????????? ?????????????????? ???????????????? ?????? ???????? ???? ?????? ???????? ?????????????? ????????</p>
                </div>

                <div className="full-name">
                    <label htmlFor="fname" className="form-label">???????????? ????????????</label><br/>
                    <input type="text" id="fname" name="fname" required/>
                </div>

                <div className="phone-number">
                    <label htmlFor="fname" className="form-label">?????? ????????????</label><br/>
                    <input type="number" id="fname" name="fname" required/>
                </div>

                <div className="email">
                    <label htmlFor="fname" className="form-label">??????????????</label><br/>
                    <input type="email" id="fname" name="fname" required/>
                </div>

                <div className="company-name">
                    <label htmlFor="fname" className="form-label">?????? ?????????? / ????????????</label><br/>
                    <input type="text" id="fname" name="fname" required/>
                </div>

                <div className="your-business">
                    <label htmlFor="fname" className="form-label">???? ???????? ???????????? ???? ???????? (???? ???????? ???????? ??????????)</label><br/>
                    <input type="text" id="fname" name="fname" required/>
                </div>

                <div className="your-offer">
                    <label htmlFor="fname" className="form-label">???????? ???????????? (???????????? / ????????????)??</label><br/>
                    <input type="text" id="fname" name="fname" required/>
                </div>

                <div className="provide-the-current-Website">
                    <label htmlFor="fname" className="form-label">???????? ?????????? ?????????? URL ?????????? ?????????? ???????????? (???? ??????)</label><br/>
                    <input type="text" id="fname" name="fname"/>
                </div>

                <div className="your-opinion">
                    <label htmlFor="fname" className="form-label">?????? ?????? ???????? ???????? ?????? ???????? ???????????????? ?? ?????? ?????????? ???? ???????????? ???????????? ????????????</label><br/>
                    <input type="text" id="fname" name="fname"/>
                </div>

                <div className="your-domains">
                    <label htmlFor="fname" className="form-label">?????? ???????? ???????????? ???????? ?? ?????????? ?????????????? ???????? ???????????? (???????????? ?????? ???????? ????????????)</label><br/>
                    <input type="text" id="fname" name="fname"/>
                </div>

                <div className="choose-radio">
                    <label htmlFor="fname" className="form-label">???? ?????????? ???????? ?????????? ?????????? ???? ???????? (?????????? ??????: ?????????????? ?? ???????????? ?? ???????? ?????? ?? ?????????? ??????????: ???????? ?? ?????????? ?? ?????? ?? ?????????? ?????????? ?? ?????? ..)??</label><br/>
                    <br/>
                    <input type="radio" name="choose-websita-available" required/>
    ??               <label htmlFor="html">??????</label><br/>
                    <input type="radio" name="choose-websita-available"/>
    ??               <label htmlFor="html">????</label><br/>
                </div>

                <div className="choose-radio">
                    <label htmlFor="fname" className="form-label">?????? ???????? ???????????? ???? ?? ?????? ???????? ???????? ????????????</label><br/>
                    <br/>
                    <input type="radio" name="choose-contact-creator"/>
    ??               <label>??????</label><br/>
                    <input type="radio" name="choose-contact-creator"/>
    ??               <label>????</label><br/>
                </div>

                <div className="choose-radio">
                    <label htmlFor="fname" className="form-label">???? ???????? ???????????? ???????? ?????????? ???? ???????????? ?????????? ??????????????</label><br/>
                    <br/>
                    <input type="radio" name="choose-site" required/>
    ??               <label>?????? ??????????</label><br/>
                    <input type="radio" name="choose-site"/>
    ??               <label>?????????? ????????????</label><br/>
                </div>

                <div className="choose-check-box">
                    <label htmlFor="fname" className="form-label">???? ???? ?????????????? / ?????????????? ???????? ?????????? ?????? ?????????????? ???? ???????? ?????????? ?????????? ??????</label><br/>
                    <br/>
                    <input type="checkbox" name="choose-pages-you-want" value="About"/>
    ??               <label>About</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Home"/>
    ??               <label>Home</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Contact"/>
    ??               <label>Contact</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Archives"/>
    ??               <label>Archives</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Portfolio"/>
    ??               <label>Portfolio</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Services"/>
    ??               <label>Services</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="FAQ"/>
    ??               <label>FAQ</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Location-map"/>
    ??               <label>Location map</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Testimonials"/>
    ??               <label>Testimonials</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="News"/>
    ??               <label>News</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Authentication"/>
    ??               <label>Authentication (Sign-up / Login)</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="E-commerce"/>
    ??               <label>Store (E-commerce)</label><br/> 
                    <input type="checkbox" name="choose-pages-you-want" value="Blog"/>
    ??               <label>Blog</label><br/>
                    <input type="checkbox" name="choose-pages-you-want" value="Else"/>
    ??               <label>?????? ?????? :</label> <input type="text" name="" id=""/> 
                </div>

                <div className="choose-radio">
                    <label htmlFor="fname" className="form-label">???? ???????? ?????????????? ?????????? ?????????????? ?????????????????? ?????? ????????????</label><br/>
                    <br/>
                    <input type="radio" name="choose-social-media" required/>
    ??               <label>??????</label><br/>
                    <input type="radio" name="choose-social-media"/>
    ??               <label>????</label><br/>
                </div>

                <div className="choose-check-box">
                    <label htmlFor="fname" className="form-label">?????? ???????? ???????????? ?????? ?? ?????? ???? ?????????????? ???????? ??????????????????</label><br/>
                    <br/>
                    <input type="checkbox" name="choose-platforms" value="Twitter"/>
    ??               <label>Twitter</label><br/>
                    <input type="checkbox" name="choose-platforms" value="Facebook"/>
    ??               <label>Facebook</label><br/>
                    <input type="checkbox" name="choose-platforms" value="Instagram"/>
    ??               <label>Instagram</label><br/>
                    <input type="checkbox" name="choose-platforms" value="LinkedIn"/>
    ??               <label>LinkedIn</label><br/>
                    <input type="checkbox" name="choose-platforms" value="Pinterest"/>
    ??               <label>Pinterest</label><br/> 
                    <input type="checkbox" name="choose-platforms" value="Snapchat"/>
    ??               <label>Snapchat</label><br/>
                    <input type="checkbox" name="choose-platforms" value="Else"/>
    ??               <label>?????? ?????? :</label> <input type="text" name="" id=""/> 
                </div>

                <div className="choose-radio">
                    <label htmlFor="fname" className="form-label">???? ?????? ???????? ?????????? ???????? ?????????????? ??????????????????</label><br/>
                    <br/>
                    <input type="radio" name="choose-our-brand" required/>
    ??               <label>??????</label><br/>
                    <input type="radio" name="choose-our-brand"/>
    ??               <label>????</label><br/>
                </div>  

                <div className="additional-information">
                    <label htmlFor="fname" className="form-label">???????? ?????????? ???? ?????????????? ???? ?????????????? ????????????</label><br/>
                    <input type="text" id="fname" name="fname" required />
                </div>

                <div className="thank-you">
                    <h4>?????????? ?????????????? ???????????? ???????????? ???? ???????????? ???????????? ???????????? ??????. ???????? ????.</h4>
                </div>

                <main>
                    <a href="./form-3.html"><input type="submit" value="??????????"/></a>
                </main>
            </div>
        </form>
        </div>
        <div className="web-footer">
            <footer className='brand-footer'>
                    <div className="container d-flex text-light">
                        <div>
                            <img className="w-75" src={logo} alt="" />
                        </div>
                        <div>
                            <p>We're on a mission to build a better <br />
                            future where technology creates <br />
                            good jobs for everyone</p>
                            <i className="fas fa-phone-alt"></i> +90 212 855 90 74
                            <br />
                            <i className="fab fa-whatsapp"></i> +90 533 614 90 74
                            <br />
                            <i className="far fa-map"></i> Istanbul, Turkey
                            <p>Copyright ?? 2021. All Rights Reserved</p>
                        </div>
                        <div className="social-icon">
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </div>
            </footer>
        </div>
        </>
    )
}

export default WebQuestionnaireAR
