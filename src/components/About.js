import React from "react"
export default function About({ scroll }) {
    return (
        <>
            <div className="relative flex flex-wrap h-[951px] bg-[#FFF7E8] overflow-hidden">
                <div className={`z-20 absolute mt-40 left-[4vw] md:left-20 xl:left-52 duration-500 overflow-hidden ${scroll >= 500 && scroll < 1650 ? 'translate-x-0' : 'translate-x-[-100vw] overflow-hidden'}`}>
                    <p className="text-stone-500 text-4xl md:text-5xl font-semibold my-4">About Me.</p>
                    <div className="w-16 border-t-8 border-t-stone-500 rounded"></div>
                </div>
                {/* MB버전 */}
                <div className={`relative md:hidden mt-48 h-[650px] w-full bg-[#FFE9C8]/90 duration-500 ${scroll >= 500 && scroll < 1650 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-full h-full p-5 pt-14">
                        <div className="flex flex-col">
                            <div className="flex justify-between items-center">
                                <img className="flex w-1/2 p-5 mt-6 z-30 rounded-[30px] duration-300" alt="ABOUTimg" src="https://kimjin1988.github.io/jin-portfolio/img/aboutimg.jpg"/>
                                <div className="w-1/2 p-5 mt-6">
                                    <p className="">
                                        <span className=""><span className="text-[#85b9fd] font-semibold text-[20px] md:py-3 lg:py-1 w-[80px]">NAME</span><dd className="text-[14px] md:text-[16px] md:leading-[54px] lg:leading-[38px] text-stone-500">김 진</dd></span>
                                        <span className=""><span className="text-[#85b9fd] font-semibold text-[20px] md:py-3 lg:py-1 w-[80px]">BIRTH</span><dd className="text-[14px] md:text-[16px] md:leading-[54px] lg:leading-[38px] text-stone-500">1988년 04월 23일</dd></span>
                                    </p>
                                    <p className=""><dt className="text-[#85b9fd] font-semibold text-[20px] md:py-3 lg:py-1 w-[80px]">PHONE</dt><dd className="text-[14px] md:text-[16px] md:leading-[54px] lg:leading-[38px] text-stone-500">010 7114 1988</dd></p>
                                    <p className=""><dt className="text-[#85b9fd] font-semibold text-[20px] md:py-3 lg:py-1 w-[80px]">EMAIL</dt><dd className="text-[14px] md:text-[16px] md:leading-[54px] lg:leading-[38px] text-stone-500">kimjin1988@gmail.com</dd></p>
                                    <p className=""><span className="text-[#85b9fd] font-semibold text-[20px] md:pt-3 lg:py-1 w-[80px]">github</span><dd><a className="text-[14px] md:text-[16px] md:leading-[54px] lg:leading-[38px] text-stone-500" href="https://github.com/kimjin1988" target="_blank">https://github.com/kimjin1988</a></dd></p>
                                    <p className="font-semibold text-[20px] pt-3 text-[#85b9fd]">EDUCATION</p>
                                    <p className="pt-2 md:flex"><dt className="font-semibold text-[14px] md:text-[16px] text-stone-500">2023.09 ~ 2023.12</dt></p>
                                    <dd className="text-stone-500 text-[14px] md:text-[16px]">코리아IT아트아카데미 UI/UX 웹퍼블리셔 양성과정 수료</dd>
                                </div>
                            </div>
                            <div className="">
                                <ul className="">
                                    <li className="flex justify-between">
                                        <p className="font-semibold text-[20px] py-3 text-[#85b9fd]">SKILL</p>
                                        {/* <span className="flex bottom-0 text-[10px] mr-5 text-center items-center">아이콘에<br/>마우스를 올려주세요.</span> */}
                                    </li>
                                    <li className="">
                                        <p className="flex">
                                            <span className="flex w-[60px] m-1">
                                                <img className="h-[50px] w-[50px]" src="https://kimjin1988.github.io/jin-portfolio/img/icon_html.png"/>
                                            </span>
                                            <span className="flex w-[65px] m-1">
                                                <img className="h-[50px] w-[50px]" src="https://kimjin1988.github.io/jin-portfolio/img/icon_css3.png"/>
                                            </span>
                                            <span className="flex w-[65px] m-1">
                                                <img className="h-[50px] w-[50px]" src="https://kimjin1988.github.io/jin-portfolio/img/icon_js.png"/>
                                            </span>
                                            <span className="flex w-[65px] m-1">
                                                <img className="h-[50px] w-[50px]" src="https://kimjin1988.github.io/jin-portfolio/img/icon_figma.png"/>
                                            </span>
                                            <span className="flex w-[65px] m-1">
                                                <img className="h-[50px] w-[50px]" src="https://kimjin1988.github.io/jin-portfolio/img/icon_git.png"/>
                                            </span>
                                            <span className="flex w-[65px] m-1">
                                                <img className="h-[50px] w-[50px]" src="https://kimjin1988.github.io/jin-portfolio/img/icon_photoshop.png"/>
                                            </span>
                                            <span className="flex w-[65px] m-1">
                                                <img className="h-[50px] w-[50px]" src="https://kimjin1988.github.io/jin-portfolio/img/logo192.png"/>
                                            </span>
                                            {/* <span className="">
                                                <img src=""/>
                                            </span> */}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* web버전 */}
                <div className={`relative hidden md:block items-center mt-48 h-[650px] w-full bg-[#FFE9C8]/90 duration-500 ${scroll >= 500 && scroll < 1650 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex flex-col ml-[5vw] pr-[12vw] lg:pt-24 md:pt-36 w-1/2 items-center">
                        <img className="flex mt-6 z-30 h-[30vw] xl:h-[400px] w-[23vw] xl:w-[300px] rounded-[30px] duration-300" alt="ABOUTimg" src="https://kimjin1988.github.io/jin-portfolio/img/aboutimg.jpg"/>
                        <div className="flex-wrap mt-8 text-stone-500">
                            <p>안녕하세요.<br/>트렌드에 뒤쳐지지 않는 프론트엔드 개발자가 되고싶은 김진입니다.</p>
                        </div>
                    </div>
                </div>
                <div className={`hidden md:block flex-wrap z-10 absolute translate-x-0 right-[4vw] md:right-20 lg:right-28 mt-48 h-[650px] w-[50vw] md:w-[44vw] bg-white overflow-hidden ${scroll >= 500 && scroll < 1650 ? 'opacity-100 translate-x-0 duration-1000' : 'opacity-0 translate-x-[100vw]'}`}>
                    <div className="absolute bottom-0 p-5 xl:py-8">
                        <ul>
                            <li>
                                <div className="lg:flex lg:justify-between">
                                    <p className="py-2 md:flex"><span className="text-[#85b9fd] font-semibold text-[20px] md:py-3 lg:py-1 w-[80px]">NAME</span><dd className="text-[14px] md:text-[16px] md:leading-[54px] lg:leading-[38px] text-stone-500">김 진</dd></p>
                                    <p className="py-2 md:flex"><span className="text-[#85b9fd] font-semibold text-[20px] md:py-3 lg:py-1 w-[80px]">BIRTH</span><dd className="text-[14px] md:text-[16px] md:leading-[54px] lg:leading-[38px] text-stone-500">1988년 04월 23일</dd></p>
                                </div>
                                <div className="py-2 md:flex">
                                    <p className="text-[#85b9fd] font-semibold text-[20px] md:py-3 lg:py-1 w-[80px]">PHONE</p>
                                    <span className="text-[14px] md:text-[16px] md:leading-[54px] lg:leading-[38px] text-stone-500">010 7114 1988</span>
                                </div>
                                <div className="py-2 md:flex">
                                    <p className="text-[#85b9fd] font-semibold text-[20px] md:py-3 lg:py-1 w-[80px]">EMAIL</p>
                                    <span className="text-[14px] md:text-[16px] md:leading-[54px] lg:leading-[38px] text-stone-500">kimjin1988@gmail.com</span>
                                </div>
                                <div className="py-2 lg:flex">
                                    <p className="text-[#85b9fd] font-semibold text-[20px] md:pt-3 lg:py-1 w-[80px]">github</p>
                                    <span>
                                        <a className="text-[14px] md:text-[16px] md:leading-[54px] lg:leading-[38px] text-stone-500" href="https://github.com/kimjin1988">https://github.com/kimjin1988</a>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <ul>
                            <li className="hidden lg:block">
                                <p className="font-semibold text-[20px] pt-3 text-[#85b9fd]">EDUCATION</p>
                                <p className="pt-2 md:flex"><span className="font-semibold text-[16px] text-stone-500">2023.09 ~ 2023.12</span></p>
                                <p className="text-stone-500">코리아IT아트아카데미 UI/UX 웹퍼블리셔 양성과정 수료</p>
                            </li>
                            <li className="hidden lg:block">
                                <p className="font-semibold md:text-[20px] pt-3 text-[#85b9fd]">CERTIFICATE</p>
                                <p className="pt-2 md:flex font-semibold text-[16px] text-stone-500">- 운전면허 2종</p>
                                <p className="pt-2 md:flex font-semibold text-[16px] text-stone-500">- 지적기능사</p>
                            </li>
                        </ul>
                        <ul className="">
                            <li className="flex justify-between">
                                <p className="font-semibold text-[20px] py-3 text-[#85b9fd]">SKILL</p>
                                {/* <span className="flex bottom-0 text-[10px] mr-5 text-center items-center">아이콘에<br/>마우스를 올려주세요.</span> */}
                            </li>
                            <li className="">
                                <p className="flex flex-wrap gap-1">
                                    <span className="flex w-[65px] m-1">
                                        <img className="h-[50px] w-[50px] md:h-[55px] md:w-[55px]" src="https://kimjin1988.github.io/jin-portfolio/img/icon_html.png"/>
                                    </span>
                                    <span className="flex w-[65px] m-1">
                                        <img className="h-[50px] w-[50px] md:h-[55px] md:w-[55px]" src="https://kimjin1988.github.io/jin-portfolio/img/icon_css3.png"/>
                                    </span>
                                    <span className="flex w-[65px] m-1">
                                        <img className="h-[50px] w-[50px] md:h-[55px] md:w-[55px]" src="https://kimjin1988.github.io/jin-portfolio/img/icon_js.png"/>
                                    </span>
                                    <span className="flex w-[65px] m-1">
                                        <img className="h-[50px] w-[50px] md:h-[55px] md:w-[55px]" src="https://kimjin1988.github.io/jin-portfolio/img/icon_figma.png"/>
                                    </span>
                                    <span className="flex w-[65px] m-1">
                                        <img className="h-[50px] w-[50px] md:h-[55px] md:w-[55px]" src="https://kimjin1988.github.io/jin-portfolio/img/icon_git.png"/>
                                    </span>
                                    <span className="flex w-[65px] m-1">
                                        <img className="h-[50px] w-[50px] md:h-[55px] md:w-[55px]" src="https://kimjin1988.github.io/jin-portfolio/img/icon_photoshop.png"/>
                                    </span>
                                    <span className="flex w-[65px] m-1">
                                        <img className="h-[50px] w-[50px] md:h-[55px] md:w-[55px]" src="https://kimjin1988.github.io/jin-portfolio/img/logo192.png"/>
                                    </span>
                                    {/* <span className="">
                                        <img src=""/>
                                    </span> */}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};