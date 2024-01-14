import React, { useEffect } from "react";
import Typed from "typed.js";
import "./TypingText.css";
// npm install typed.js 라이브러리 사용

export default function TypingText() {
  useEffect(() => {
    // 옵션 설정
    const options = {
      strings: ["WELCOME TO MY PORTFOLIO :)"],
      typeSpeed: 50, // 타이핑 속도 (글자 당 밀리초)
      startDelay: 500, // 시작 딜레이 (밀리초)
      showCursor: false, // 커서 유무
    };
    const typed = new Typed(".typing-text", options);
    return () => {
        typed.destroy();
      };
  });

  return (
    <>
        <div className="justify-between flex">
            <span className="typing-text font-semibold text-[4.5vw] md:text-[40px] xl:text-[50px] duration-200"></span>
            <span className="cursor font-semibold text-[4.5vw] md:text-[40px] xl:text-[50px]">|</span>
        </div>
    </>
  )
};