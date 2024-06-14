import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="contact-area pt-120 pb-90" data-background="assets/img/bg/bg-map.png">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact text-center mb-30">
                                <i className="fas fa-envelope"></i>
                                <h3>Email</h3>
                                <p>healcare@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact text-center mb-30">
                                <i className="fas fa-map-marker-alt"></i>
                                <h3>Kunjungi Kami</h3>
                                <p>Jl. Street No. 10, Wakanda, Forever</p>
                            </div>
                        </div>
                        <div className="col-xl-4  col-lg-4 col-md-4 ">
                            <div className="contact text-center mb-30" onClick={() => window.open('https://wa.me/62895332017929', '_blank')}>
                                <i className="fas fa-phone"></i>
                                <h3>Telp</h3>
                                <p>+6289 5332 017929</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;