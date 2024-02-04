import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import mySvg from '../utils/undraw_stripe_payments_re_chlm.svg'
import { StripeContext } from "./StripeContext";

const Hero = () => {

  let {closeSubmenu}=useContext(StripeContext)

  // const myGradients = [
  //   'to left','to right','to bottom','to top'
  // ];
  // const [dynamicBackground, setDynamicBackground]=useState("rgb(248,39,216)");

  //   let [opposite,setOpposite]=useState("rgb(120,180,80)")
  //   let [gradients,setGradients]=useState(myGradients[0])
  // const keepChangingBackground = () => {
  //   let returned=setTimeout(() => {
  //     let r = Math.floor(Math.random() * 255);
  //     let g = Math.floor(Math.random() * 255);
  //     let b = Math.floor(Math.random() * 255);

  //      let ro = Math.floor(Math.abs(Math.random() * 255-255));
  //      let go = Math.floor(Math.abs(Math.random() * 255-255));
  //      let bo = Math.floor(Math.abs(Math.random() * 255-255));
  //     setDynamicBackground(`rgb(${r},${g},${b})`);
  //     setOpposite(`rgb(${ro},${go},${bo})`)

  //     setGradients(myGradients[Math.floor(Math.random() * myGradients.length)]);
  //     console.log(gradients)
  //   }, 12000);
  // }


  // useEffect(() => {
  //   let returned=keepChangingBackground();
  //   return () => clearTimeout(returned);
  // }, [dynamicBackground])

  return (
    <StyledHero
    // dynamicBackground={dynamicBackground}
    // opposite={opposite}
    // gradients={gradients}
    >
      <section
        className={`hero w-[100vw] h-auto md:h-screen flex justify-center items-start text-white bg-black mx-auto`}
        onMouseOver={closeSubmenu}
      >
        <div className="container mt-[3rem] w-[90vw] max-w-[1170px] h-[100%] md:mt-[-5rem]">
          <div className="portside mb-4">
            <h1 className="text-4xl md:text-5xl font-extrabold capitalize w-[70%]">
              Payments infrastructure for the internet
            </h1>
            <p className="mt-8">
              Millions of companies of all sizes use Stripe online and in person
              to accept payments, send payouts, automate financial processes,
              and ultimately grow revenue.
            </p>
            <div className="btn-section mt-8">
              <button className="bg-slate-800 py-2 px-4 mr-4 rounded-md">
                Start Now
              </button>
              <button>Contact Sales</button>
            </div>
          </div>
          <img src={mySvg} alt="" />
        </div>
      </section>
    </StyledHero>
  );
};

let StyledHero = styled.section`
  /* --dynamic-background: ${(props) => props.dynamicBackground};
  --opposite: ${(props) => props.opposite};
  --gradient: ${(props) => props.gradients}; */

  .container {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    gap:2rem;
  }
  @media (min-width: 768px) {
    .container {
      grid-template-columns: 1fr 1fr;
    }
  }

  .hero {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .hero::before {
    content: "";
    position: absolute;
    /* display: flex;
    align-items: center; */
    top: -34%;
    left: 0;
    width: 100vw;
    height: 50%;
    transform: skewY(-10deg);
    z-index: -20;
    /* transition: background 20s ease; */
    /* background: linear-gradient(var(--gradient),var(--dynamic-background),var(--opposite)); */
    background: #3b82f6;
  }

  @media (max-width: 768px) {
    .hero::before {
      content: "";
      position: absolute;
      top: -60%;
      left: 0;
      width: 100vw;
      height: 90%;
      transform: skewY(-12deg);
      z-index: -20;
      transition: background 20s ease;
      background: #3b82f6;
    }
  }
`;

export default Hero;
