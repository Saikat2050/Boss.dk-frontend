import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className="Footer">
            <footer className="text-center text-lg-start bg-dark text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <Link to="https://www.facebook.com/saikat.santra.1238" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="https://twitter.com/Santra2050" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="https://myaccount.google.com/u/1/profile?pageId=none" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </Link>
                        <Link to="https://www.instagram.com/mr.saikat_official/" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="https://www.linkedin.com/in/santra2050/" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link to="https://github.com/Saikat2050" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>
                </section>
                <section className="personal-details">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Boss.DK
                                </h6>
                                <p>
                                    Here in Boss.DK, you can add Task, get reminder of upcoming tasks
                                    on Priority basis. So that you never miss any task deadline.
                                    We believe in planing that saves your time.
                                </p>
                            </div>
                           
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Fazilpur, Gurgaon, Haryana, India</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    saikatsantra2050@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> +91 7076 00 8951</p>
                                <p><i className="fas fa-print me-3"></i> +91 8700 80 0060</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4">
                    © 2023 Copyright:
                    <Link className="text-reset fw-bold" to="https://www.saikatsan.com/"> Boss.dk</Link>
                </div>
            </footer>
        </div>
    );
}

export default Footer;