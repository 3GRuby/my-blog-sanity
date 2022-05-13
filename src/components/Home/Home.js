import React, { Fragment } from "react";
import "../Home/Home.css";
import { useState, useEffect } from "react";
import SanityClient from "@sanity/client";

function Home() {
  return (
    <Fragment>
      {/* Hero Section */}
      <section>
        <div className="Hero">
          <div className="Hero__Content">
            <h1 className="Hero__Content__Header">
              Smart security for your spaces
            </h1>
            <p className="Hero__Content__Paragraph">
              Seamless access and real-time data and analytics transform your
              spaces into secure and streamlined resources.
            </p>
          </div>
        </div>
      </section>

      {/* Body Section */}
      <section>
        <div className="Container">
          <div className="Container__Body">
            <h2 className="Container__Body__Title">Our Services</h2>
          </div>
        </div>
        <div className="Card">
          <div className="Card__one"></div>
          <div className="Card__one"></div>
          <div className="Card__one"></div>
        </div>

        <h3>
          Enable incredible experiences with a unified hardware and software
          solution
        </h3>
      </section>

      <section>
        <div className="Patnerbox"></div>
      </section>

      <section>
        <div className="Footer">
          <p>Kisi &copy; Copyright 2022</p>
        </div>
      </section>
    </Fragment>
  );
}

export default Home;
