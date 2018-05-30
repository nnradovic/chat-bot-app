import React, { Component } from 'react';
import "./main.css"

const Main = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-md-4 d-none d-md-block leftside">
                    <img id="edit" src={require('./img/edit.svg')} />
                    <img id="profile" src={require('./img/profile.svg')} />
                </div>
                <div className="col-md-4 col-12 chat">
                    <img id="spartanlogo" src={require('./img/spartan.png')} />



                    <div class="input-group mb-3 input">
                        <div class="input-group-prepend">
                            <span class="hamburger" class="input-group-text" id="basic-addon1"><i class="fas fa-bars"></i></span>
                        </div>
                        <input type="text" class="form-control" placeholder="Enter your message here..." aria-label="message" aria-describedby="basic-addon1" />

                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button">Send <i class="fab fa-telegram-plane"></i></button>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 d-none d-md-block rightside">

                </div>
            </div>

        </React.Fragment>

    )
}

export default Main;
