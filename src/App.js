import React from "react";
import { useEffect, useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TypingText from "./components/TypingText";
import "./App.css";
import "animate.css";
import { Link } from "react-scroll";
// npm install animate.css 라이브러리 사용
// npm install react-scroll

export default function App() {
  const [scroll, setScroll] = useState(0);     // 스크롤 위치를 저장하는 상태 변수
  useEffect(() => {
    const scrollTop = () => {
      // 현재 스크롤 위치로 스크롤 상태를 업데이트
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", scrollTop);
    return () => {
      window.removeEventListener("scroll", scrollTop);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  // console.log(scroll);

  return (
    <>
      <header
        id="header"
        className={`text-stone-200 flex-wrap lg:px-[20px] flex py-5 fixed top-0 w-full box-border z-40 border-transparent border-b ${scroll >= 900 ? 'bg-transparent text-stone-400 py-2 text-[15px]' : 'bg-black/20'} justify-between transition-all`}
      >
        <a href="" className="mx-[30px] flex-wrap">
          <h1 className={`text-4xl font-bold cursor-pointer`}>KIM JIN</h1>
          <p className="text-lg opacity-75">Web Developer.</p>
        </a>
        <nav className="hidden md:block top-0 mx-[30px] leading-[68px]">
          <ul className="flex">
            <li>
              <Link to="home" smooth={true}>
                <p className={`block font-bold px-5 text-center ${scroll >= 900 ? 'hover:text-stone-500 hover:text-[20px] hover:border-stone-500' : ''} cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-white duration-500`}>H O M E</p>
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true}>
                <p className={`block font-bold px-5 text-center ${scroll >= 900 ? 'hover:text-stone-500 hover:text-[20px] hover:border-stone-500' : ''} cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-white duration-500`}>A B O U T</p>
              </Link>
            </li>
            <li>
              <Link to="project" smooth={true}>
                <p className={`block font-bold px-5 text-center ${scroll >= 900 ? 'hover:text-stone-500 hover:text-[20px] hover:border-stone-500' : ''} cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-white duration-500`}>
                  <span>P R O J E C T</span>
                </p>
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true}>
                <p className={`block font-bold px-5 text-center ${scroll >= 900 ? 'hover:text-stone-500 hover:text-[20px] hover:border-stone-500' : ''} cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-white duration-500`}>C O N T A C T</p>
              </Link>
            </li>
          </ul>
        </nav>
        <button id="openBtn" className="md:hidden mx-[30px] text-[40px] hover:text-black duration-200">
          &#9776;
        </button>
      </header>

      <main className="h-screen">
        <section id="home">
          <div className="relative z-[-10] w-full h-screen bg-no-repeat bg-cover bg-center">
            <img className="w-full fixed h-full object-cover" src='https://kimjin1988.github.io/jin-portfolio/img/노트북.jpg' />
          </div>
          <div className="absolute flex top-0 bg-[#646c77]/30 w-full h-screen z-0 justify-center items-center text-center text-white">
            <div className="bg-gray-500/10 w-[60vw] h-[60vw] md:w-[400px] md:h-[400px] rotate-45 p-[3vw] md:p-5">
              <div className="w-full h-full border-2 border-[#b3b0b0]"></div>
            </div>
            <div className="absolute flex flex-col text-center items-center gap-5">
              <TypingText />
              <div className="border-b w-12"></div>
              <p className="text-[3.5vw] md:text-[25px] animate__animated animate__fadeInUp">프론트엔드 개발자 김진입니다.</p>
            </div>
          </div>
        </section>
        <section id="about">
          <About scroll={scroll} />
        </section>
        <section id="project">
          <Projects scroll={scroll} />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      {/* ScrollTop Button */}
      <div>
        <svg
          onClick={scrollToTop}
          style={{ display: scroll >= 200 && "block" }}
          className="fixed z-30 bottom-5 right-5 w-12 fill-amber-800/20 hidden cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM385 231c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V376c0 13.3-10.7 24-24 24s-24-10.7-24-24V193.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119c9.4-9.4 24.6-9.4 33.9 0L385 231z" />
        </svg>
      </div>
    </>
  );
}