// import ProjectSection from './ProjectSection'; // 파일 경로에 따라 수정

// export default function Projects({ scroll }) {
//   return (
//     <>
//       <ProjectSection
//         title="Project 1"
//         bgColor="#fcebd8"
//         textColor="stone-500"
//         imageSrc="path_to_image" // 이미지 경로로 수정
//         scroll={scroll}
//         startScroll={1250}
//         endScroll={2600}
//       />

//       <ProjectSection
//         title="Project 2"
//         bgColor="#eef5ec"
//         textColor="stone-500"
//         imageSrc="path_to_image"
//         scroll={scroll}
//         startScroll={2250}
//         endScroll={3650}
//       />

//       <ProjectSection
//         title="Project 3"
//         bgColor="#d8e8fc"
//         textColor="stone-500"
//         imageSrc="path_to_image"
//         scroll={scroll}
//         startScroll={3200}
//         endScroll={4700}
//       />
//     </>
//   );
// }

import { useState } from 'react';

export default function Project({ scroll }) {
    // const thumbnails = document.getElementsByClassName('thumbnail');
    // const main = document.getElementById('main');
    // let [index, setIndex] = useState(0);
    // let [prevIndex, setPrevIndex] = useState(0);

    // function move(data) {
    //     let newIndex = index += data;
    //     console.log(newIndex);
    //     // 첫번째 이미지에서 이전 버튼을 누를 때
    //     if (index < 0) index = 2;
    //     // 마지막 이미지에서 다음 버튼을 누를 때
    //     if (index > 2) index = 0;
    //     // 메인이미지 업데이트
    //     // newIndex = newIndex < 0 ? 2 : (newIndex > 2 ? 0 : newIndex);
    //     setIndex(newIndex);
    //     f();
    // }
    // // 썸네일 클릭
    // function jumpTo(data) {
    //     setIndex(data);
    //     f();
    // }
    // function f() {
    //     console.log("이전 인덱스:", prevIndex);
    //     console.log("인덱스:", index);
    //     // 메인 이미지 업데이트
    //     main.src = thumbnails[index].src;
    //     // 아웃라인 처리
    //     thumbnails[prevIndex].classList.remove("active");
    //     thumbnails[index].classList.add("active");
    //     // 접근 시점보다 아래에 있어야 한다
    //     setPrevIndex(index);
    // }

    return (
        <>
{/* project 1 */}
            <div className="relative flex flex-wrap h-[951px] bg-[#fcebd8] overflow-hidden">
                <div className={`z-20 absolute mt-40 right-[6vw] md:right-28 xl:right-60 duration-500 overflow-hidden ${scroll >= 1250 && scroll < 2600 ? 'translate-x-0' : 'translate-x-[100vw] overflow-hidden'}`}>
                    <p className="text-stone-500 text-4xl md:text-5xl font-semibold my-4">Project 1.</p>
                    <div className="w-16 border-t-8 border-t-stone-500 rounded"></div>
                </div>
                {/* MO버전 */}
                <div className={`flex flex-col justify-center items-center mt-48 md:h-[650px] w-full bg-[#FFDEC6]/90 duration-500 ${scroll >= 1250 && scroll < 2600 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="mt-16 flex items-center justify-center w-full">
                        <div className="text-[#6d6d6d] text-center md:hidden">
                            <h1 className="text-[20px] font-semibold">Portfolio</h1>
                            <p className="pt-2 text-[14px] opacity-75">...ing 1人 퍼블리싱 100%</p>
                        </div>
                    </div>
                    {/* img MO */}
                    <div className="md:hidden flex flex-col">
                        <div className="relative flex">
                            <img id="main" className="my-3 h-[40vw] w-full px-7 object-cover" src="https://kimjin1988.github.io/jin-portfolio/img/projectImg1.png"/>
                            <img className="my-3 h-[40vw] w-full px-7 object-cover hidden" src="https://kimjin1988.github.io/jin-portfolio/img/projectImg2.png"/>

                            <button className="absolute left-0 h-full text-[25px] text-stone-500">&#10094;</button>
                            <button className="absolute right-0 h-full text-[25px] text-stone-500">&#10095;</button>

                            {/* <img className="mt-5 h-[40vw] w-full mx-[5vw] rounded-xl object-cover" src="https://kimjin1988.github.io/jin-portfolio/img/portfolio_aboutpage.png"/>
                            <img className="mt-5 h-[40vw] w-full mx-[5vw] rounded-xl object-cover" src="https://kimjin1988.github.io/jin-portfolio/img/portfolio_project1page.png"/> */}
                        </div>
                        {/* <div className="relative flex">
                            <img id="main" className="mt-5 h-[40vw] w-full mx-[5vw] rounded-xl object-cover" src="https://kimjin1988.github.io/jin-portfolio/img/projectImg1.png" alt="project1_Main"/>
                            <button className="prev absolute left-0 h-full text-[25px] text-stone-500" onClick={() => move(-1)}>&#10094;</button>
                            <button className="next absolute right-0 h-full text-[25px] text-stone-500" onClick={() => move(1)}>&#10095;</button>

                            <div className="thumbnail-container flex absolute bottom-0 w-full justify-center">
                                <img className="thumbnail active w-[40px] h-[40px] p-1 cursor-pointer" onClick={() => jumpTo(0)} src="https://kimjin1988.github.io/jin-portfolio/img/projectImg1.png" alt=""/>
                                <img className="thumbnail w-[40px] h-[40px] p-1 cursor-pointer" onClick={() => jumpTo(1)} src="https://kimjin1988.github.io/jin-portfolio/img/portfolio_aboutpage.png" alt=""/>
                                <img className="thumbnail w-[40px] h-[40px] p-1 cursor-pointer" onClick={() => jumpTo(2)} src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAxMTJfMjgz%2FMDAxNTQ3Mjc3Mzk3NjU2.nLq9-Qh6VApkPNpHta-cijv5aMnDklyzm2wdARmDcOcg.hhnrpu0V0o-7Yhj-HogUrp00162pqVvr5iDcCilIFCUg.GIF.banyapeach%2F%25BF%25C0%25B6%25C7%25C4%25C9.gif&type=a340" alt=""/>
                            </div>
                        </div> */}
                        {/* slide page 제작 구상중 */}
                    </div>
                    <div className="md:hidden mt-[3vw] w-full px-5">
                        <p className="text-[#6d6d6d] text-[16px] py-1">
                            포트폴리오 용도로 제작한 웹사이트입니다.<br/>포트폴리오 웹사이트를 개발하며 React를 학습하고, 다양한 라이브러리와 기술을 도입하여 시각적인 디자인과 사용자 경험을 향상시켰습니다. 특히, 애니메이션과 효과를 적용하여 독특하고 흥미로운 웹사이트를 구현하려고 노력했습니다. GitHub를 활용한 배포로 개인 포트폴리오를 전문적으로 관리하고 외부에 공개하는 경험을 쌓았습니다. 이를 통해 React 개발 능력과 프로젝트 관리에 대한 기술을 향상시켰습니다.
                        </p>
                        <div className="flex items-center">
                            <p className="text-[#6d6d6d] w-[80px] font-semibold text-[20px] md:py-3 py-1">
                                <span className="text-[3vw] w-[80px]">GitHub</span>
                            </p>
                            <a className="border-b text-[2.5vw] border-blue-300 text-blue-300" href="https://kimjin1988.github.io/jin-portfolio/">https://kimjin1988.github.io/jin-portfolio/</a>
                        </div>
                        <div className="flex">
                            <p className="text-[#6d6d6d] flex font-semibold text-[20px] py-1">
                                <span className="text-[3vw] w-[80px]">설명</span>
                            </p>
                            <span className="text-[2.5vw] text-[#6d6d6d]">간단한 자기소개, 인적 사항, 기술 스택, GitHub 링크, Netlify 링크, 프로젝트 경험, 업무 경력</span>
                        </div>
                        <div className="flex items-center">
                            <p className="text-[#6d6d6d] flex font-semibold text-[20px] py-1">
                                <span className="text-[3vw] w-[80px]">SKILL</span>
                            </p>
                            <span className="text-[2.5vw] text-[#6d6d6d]">
                                React, HTML, CSS, Tailwindcss, GitHub
                            </span>
                        </div>
                        {/* <p className="text-[#6d6d6d] w-[80px] font-semibold text-[20px] md:py-3 py-1"></p> */}
                    </div>

                    {/* img WEB */}
                    <div className="hidden md:block flex-col pl-[57vw] items-center pr-[3vw]">
                        <div className="flex justify-center">
                            <img className="flex mt-0 p-5 z-30 h-[250px] xl:h-[300px] rounded-[30px] duration-300 object-cover justify-center" alt="project1Img" src="https://kimjin1988.github.io/jin-portfolio/img/projectImg1.png"/>
                        </div>
                        <div className="flex-wrap mt-3 text-stone-500 font-bold">
                            <p className="text-[#6d6d6d] text-[16px] pt-1">
                                <span className="font-bold">포트폴리오 용도로 제작한 웹사이트입니다.</span><br/>포트폴리오 웹사이트를 개발하며 React를 학습하고, 다양한 라이브러리와 기술을 도입하여 시각적인 디자인과 사용자 경험을 향상시켰습니다. 특히, 애니메이션과 효과를 적용하여 독특하고 흥미로운 웹사이트를 구현하려고 노력했습니다. GitHub를 활용한 배포로 개인 포트폴리오를 전문적으로 관리하고 외부에 공개하는 경험을 쌓았습니다. 이를 통해 React 개발 능력과 프로젝트 관리에 대한 기술을 향상시켰습니다.
                            </p>
                        </div>
                    </div>

                </div>
                {/* web버전 */}
                <div className={`z-10 absolute hidden md:block translate-x-0 left-[4vw] md:left-20 lg:left-28 mt-48 h-[650px] w-[50vw] md:w-[44vw] bg-white transition-all duration-1000 overflow-hidden ${scroll >= 1250 && scroll < 2600 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100vw]'}`}>
                    <div className="mt-5 text-[#6d6d6d] text-center hidden md:block">
                        <h1 className="text-[20px] font-semibold">Portfolio</h1>
                        <p className="pt-1 text-[14px] opacity-75">1人 <span className="font-semibold">|</span> 퍼블리싱 100%</p>
                    </div>
                    
                    <div className="mt-[1vw] w-full px-5">
                        <div className="flex items-center">
                            <p className="text-[#6d6d6d] w-[80px] font-semibold text-[20px] py-1">
                                <span className="text-[20px] w-[80px]">GitHub</span>
                            </p>
                            <a className="text-[15px] border-blue-300 text-blue-300" href="https://kimjin1988.github.io/jin-portfolio/">https://kimjin1988.github.io/jin-portfolio/</a>
                        </div>
                        <div className="flex">
                            <p className="text-[#6d6d6d] flex font-semibold text-[20px] py-1">
                                <span className="text-[20px] w-[80px]">설명</span>
                            </p>
                            <span className="text-[15px] text-[#6d6d6d]">간단한 자기소개, 인적 사항, 기술 스택, GitHub 링크, Netlify 링크, 프로젝트 경험, 업무 경력</span>
                        </div>
                        <div className="flex items-center">
                            <p className="text-[#6d6d6d] flex font-semibold text-[20px] py-1">
                                <span className="text-[20px] w-[80px]">SKILL</span>
                            </p>
                            <span className="text-[15px] text-[#6d6d6d]">
                                React, HTML, CSS, Tailwindcss, GitHub
                            </span>
                        </div>
                        <hr className="border-stone-500 mt-2"/>
                        <div className="xl:pt-5">
                            <p className="text-[#6d6d6d] w-[80px] font-semibold text-[14px] xl:text-[18px] pt-2">초반 단계</p>
                            <span className="text-[12px] text-[#6d6d6d] xl:text-[15px]">- 프로젝트 초반에는 포트폴리오의 핵심 내용과 디자인을 정하는 것이 주요 과제였습니다. Figma를 활용하여 아이디어를 구체화하고, 창의적인 디자인 컨셉을 탐색했습니다.</span>
                            <p className="xl:pt-3 text-[#6d6d6d] w-[80px] font-semibold text-[14px] xl:text-[18px] pt-2">중반 단계</p>
                            <span className="text-[12px] text-[#6d6d6d] xl:text-[15px]">- Figma의 초기 디자인을 기반으로 웹페이지를 구성하는데는 원활하게 진행되었습니다. 그러나 반응형 디자인을 추가하면서 포트폴리오 완성 시간이 예상보다 늦춰졌습니다. 이 단계에서는 빠른 해결책을 찾기 위해 노력하며, 사용자들이 향상된 경험을 얻을 수 있도록 노력했습니다.</span>
                            <p className="xl:pt-3 text-[#6d6d6d] w-[80px] font-semibold text-[14px] xl:text-[18px] pt-2">후반 단계</p>
                            <span className="text-[12px] text-[#6d6d6d] xl:text-[15px]">- 프로젝트 후반에서는 초기 디자인과 기능을 최적화하여 높은 완성도의 포트폴리오를 완성했습니다. 지인들의 소중한 피드백을 수용하고, 다양한 디바이스에서 원활한 이용이 가능하도록 반응형 디자인을 강화했습니다. 마지막으로 프로젝트를 성공적으로 종결하고, 향후 유지보수에 대비하여 최종 배포 작업을 마무리했습니다. 이를 통해 나만의 독특한 프로젝트 경험을 효과적으로 전달했습니다.</span>
                        </div>
                    </div>
                </div>
            </div>

{/* project 2 */}
            <div className="relative flex flex-wrap h-[951px] bg-[#eef5ec] overflow-hidden">
                <div className={`z-20 absolute mt-40 left-[4vw] md:left-20 xl:left-52 duration-500 overflow-hidden ${scroll >= 2250 && scroll < 3650 ? 'translate-x-0' : 'translate-x-[-100vw] overflow-hidden'}`}>
                    <p className="text-stone-500 text-4xl md:text-5xl font-semibold my-4">Project 2.</p>
                    <div className="w-16 border-t-8 border-t-stone-500 rounded"></div>
                </div>
                {/*  */}
                <div className={`flex flex-col justify-center items-center mt-48 md:h-[650px] w-full bg-[#e3f3ce]/90 duration-500 ${scroll >= 2250 && scroll < 3650 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="mt-16 flex items-center justify-center w-full">
                        <div className="text-[#6d6d6d] text-center md:hidden">
                            <h1 className="text-[20px] font-semibold">Pong Dang</h1>
                            <p className="pt-2 text-[14px] opacity-75">2人 팀 프로젝트</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="md:hidden flex flex-col">
                        <div className="relative flex">
                            <img id="main" className="my-3 h-[40vw] w-full px-7 object-cover" src="https://kimjin1988.github.io/jin-portfolio/img/projectImg2.png"/>

                            <button className="absolute left-0 h-full text-[25px] text-stone-500">&#10094;</button>
                            <button className="absolute right-0 h-full text-[25px] text-stone-500">&#10095;</button>
                        </div>
                    </div>

                    <div className="md:hidden mt-[3vw] w-full px-5">
                        <p className="text-[#6d6d6d] text-[16px] py-1">
                            팀 프로젝트에서는 날씨와 해변 정보를 활용한 서퍼 플랫폼을 개발했습니다.<br/> 모바일 반응형 디자인과 카카오 Map API를 활용하여 최적화된 사용자 경험과 지리적 정보를 제공했으며, Figma를 활용한 초기 디자인 단계에서 팀 협업과 사용자 중심의 디자인을 강조했습니다. 팀 내에서의 의사소통 강화와 역할 재분배를 통해 예상치 못한 도전을 효과적으로 대응했고, React를 사용한 프로젝트에서 발생한 기술적 어려움을 해결하며 프로젝트를 성공적으로 완료했습니다. 이 경험을 통해 미래 프로젝트에서는 강력한 전략으로 예상치 못한 상황에 대응할 수 있을 것입니다.
                        </p>
                        <div className="flex items-center">
                            <p className="text-[#6d6d6d] w-[100px] font-semibold text-[18px] md:py-3 py-1">
                                <span className="text-[3vw] w-[100px]">GitHub</span>
                            </p>
                            <a className="border-b text-[2.5vw] border-blue-300 text-blue-300" href="https://baeminji95.github.io/PongDang/">https://baeminji95.github.io/PongDang/</a>
                        </div>
                        <div className="flex">
                            <p className="text-[#6d6d6d] flex font-semibold text-[18px]">
                                <span className="text-[3vw] w-[100px]">주요 기능</span>
                            </p>
                            <span className="text-[2.5vw] text-[#6d6d6d]">날씨 및 해변 정보, 지리적 정보와 지도 기능, 모바일 반응형 디자인</span>
                        </div>
                        <div className="flex items-center">
                            <p className="text-[#6d6d6d] flex font-semibold text-[18px] py-1">
                                <span className="text-[3vw] w-[100px]">SKILL</span>
                            </p>
                            <span className="text-[2.5vw] text-[#6d6d6d]">
                                React, HTML, CSS, Tailwindcss, GitHub
                            </span>
                        </div>
                    
                    

                    </div>
                    <div className="hidden md:block flex-col pr-[57vw] items-center pl-[3vw]">
                        <div className="flex justify-center">
                            <img className="flex mt-0 p-5 z-30 h-[250px] xl:h-[300px] rounded-[30px] duration-300 object-cover justify-center" alt="project1Img" src="https://kimjin1988.github.io/jin-portfolio/img/projectImg2.png"/>
                        </div>
                        <div className="flex-wrap mt-3 text-stone-500 font-bold">
                            <p className="text-[#6d6d6d] text-[16px] pt-1">
                                <span className="font-bold">팀 프로젝트에서는 날씨와 해변 정보를 활용한 서퍼 플랫폼을 개발했습니다.</span><br/> 모바일 반응형 디자인과 카카오 Map API를 활용하여 최적화된 사용자 경험과 지리적 정보를 제공했으며, Figma를 활용한 초기 디자인 단계에서 팀 협업과 사용자 중심의 디자인을 강조했습니다. 팀 내에서의 의사소통 강화와 역할 재분배를 통해 예상치 못한 도전을 효과적으로 대응했고, React를 사용한 프로젝트에서 발생한 기술적 어려움을 해결하며 프로젝트를 성공적으로 완료했습니다. 이 경험을 통해 미래 프로젝트에서는 강력한 전략으로 예상치 못한 상황에 대응할 수 있을 것입니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`z-10 absolute hidden md:block translate-x-0 right-[4vw] md:right-20 lg:right-28 mt-48 h-[650px] w-[50vw] md:w-[44vw] bg-white transition-all duration-1000 overflow-hidden ${scroll >= 2300 && scroll < 3650 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100vw]'}`}>
                    <div className="mt-5 text-[#6d6d6d] text-center hidden md:block">
                        <h1 className="text-[20px] font-semibold">Pong Dang</h1>
                        <p className="pt-2 text-[14px] opacity-75">2人 팀 프로젝트</p>
                    </div>
                    
                    <div className="mt-[3vw] w-full px-5">
                        <div className="flex items-center">
                            <p className="flex text-[#6d6d6d] w-[80px] font-semibold text-[20px] md:py-3 py-1">
                                <span className="text-[20px] w-[80px]">GitHub</span>
                            </p>
                            <a className="text-[16px] border-blue-300 text-blue-300" href="https://baeminji95.github.io/PongDang/">https://baeminji95.github.io/PongDang/</a>
                        </div>
                        <div className="flex">
                            <p className="text-[#6d6d6d] flex font-semibold text-[20px] py-1">
                                <span className="text-[18px] w-[80px]">주요 기능</span>
                            </p>
                            <span className="text-[16px] text-[#6d6d6d]">날씨 및 해변 정보, 지리적 정보와 지도 기능, 모바일 반응형 디자인</span>
                        </div>
                        <div className="flex items-center">
                            <p className="text-[#6d6d6d] flex font-semibold text-[20px] py-1">
                                <span className="text-[20px] w-[80px]">SKILL</span>
                            </p>
                            <span className="text-[16px] text-[#6d6d6d]">
                                React, HTML, CSS, Tailwindcss, GitHub
                            </span>
                        </div>
                        <hr className="border-stone-500 my-2"/>
                        <div className="xl:pt-5">
                            <p className="text-[#6d6d6d] w-[80px] font-semibold text-[14px] xl:text-[18px] pt-2">초반 단계</p>
                            <span className="text-[12px] text-[#6d6d6d] xl:text-[15px]">- 초반 단계에서는 공공데이터포털에서 필요한 오픈소스를 조합하여 프로젝트의 방향을 설정하고, Figma를 활용하여 초기 디자인을 구현했습니다. 이 단계에서는 프로젝트의 핵심 기획과 전체적인 구조를 마련하며 기초적인 개발 환경을 구축했습니다.</span>
                            <p className="xl:pt-3 text-[#6d6d6d] w-[80px] font-semibold text-[14px] xl:text-[18px] pt-2">중반 단계</p>
                            <span className="text-[12px] text-[#6d6d6d] xl:text-[15px]">- 중반 단계에서는 프로젝트를 진행하면서 사용자 경험을 개선하기 위해 다양한 기능과 라이브러리를 도입했습니다. 특히, 즐겨찾기와 같은 유용한 기능들을 구현하고, 사용자들에게 더 나은 서비스를 제공하기 위한 고민과 노력을 기울였습니다. 이 단계에서는 즐거움과 소중한 경험을 얻을 수 있었습니다</span>
                            <p className="xl:pt-3 text-[#6d6d6d] w-[80px] font-semibold text-[14px] xl:text-[18px] pt-2">후반 단계</p>
                            <span className="text-[12px] text-[#6d6d6d] xl:text-[15px]">- 프로젝트 후반단계에서는 다양한 오류들을 경험하며 키스테이트 추적을 통해 오류를 해결하고 프로젝트를 성공적으로 마무리 했습니다.</span>
                        </div>
                    </div>
                </div> 
            </div>

{/* project 3 */}
            <div className="relative flex flex-wrap h-[951px] bg-[#d8e8fc] overflow-hidden">
                <div className={`z-20 absolute mt-40 right-[6vw] md:right-28 xl:right-60 duration-500 overflow-hidden ${scroll >= 3200 && scroll < 4700 ? 'translate-x-0' : 'translate-x-[100vw] overflow-hidden'}`}>
                    <p className="text-stone-500 text-4xl md:text-5xl font-semibold my-4">Project 3.</p>
                    <div className="w-16 border-t-8 border-t-stone-500 rounded"></div>
                </div>
                {/* MO버전 */}
                <div className={`flex flex-col justify-center items-center mt-48 md:h-[650px] w-full bg-[#c6d3ff]/90 duration-500 ${scroll >= 3200 && scroll < 4700 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="mt-16 flex items-center justify-center w-full">
                        <div className="text-[#6d6d6d] text-center md:hidden">
                            <h1 className="text-[20px] font-semibold">pposco</h1>
                            <p className="pt-2 text-[14px] opacity-75">1人 퍼블리싱 100%</p>
                        </div>
                    </div>
                    {/* img MO */}
                    <div className="md:hidden flex flex-col">
                        <div className="relative flex">
                            <img id="main" className="my-3 h-[40vw] w-full px-7 object-cover" src="https://kimjin1988.github.io/jin-portfolio/img/projectImg3.png"/>
                            {/* <img className="my-3 h-[40vw] w-full px-7 object-cover hidden" src="https://kimjin1988.github.io/jin-portfolio/img/projectImg2.png"/> */}

                            <button className="absolute left-0 h-full text-[25px] text-stone-500">&#10094;</button>
                            <button className="absolute right-0 h-full text-[25px] text-stone-500">&#10095;</button>

                        </div>
                    </div>
                    <div className="md:hidden mt-[3vw] w-full px-5">
                        <p className="text-[#6d6d6d] text-[16px] py-1">
                            국비 훈련과정중 하나의 웹사이트를 선정하여 그 사이트를 따라 만들어본 프로젝트입니다.<br/>이 프로젝트에서는 선택한 웹사이트를 분석하고, 해당 디자인 및 기능을 따라가며 비슷한 웹사이트를 구축하는 작업을 수행했습니다. 이 프로젝트를 통해 원본 웹사이트의 디자인과 기능을 세밀히 이해하고, 이를 따라가며 비슷한 웹사이트를 만들어봄으로써 실전 경험을 쌓을 수 있었습니다. 웹 개발의 다양한 측면에서의 기술 습득 능력을 향상시킬 수 있었던 의미있는 경험이었습니다.
                        </p>
                        <div className="flex items-center">
                            <p className="text-[#6d6d6d] w-[80px] font-semibold text-[20px] md:py-3 py-1">
                                <span className="text-[3vw] w-[80px]">Netrify</span>
                            </p>
                            <a className="border-b text-[2.5vw] border-blue-400 text-blue-400" href="https://pposco.netlify.app/">https://pposco.netlify.app/</a>
                        </div>
                        <div className="flex">
                            <p className="text-[#6d6d6d] flex font-semibold text-[20px] py-1">
                                <span className="text-[3vw] w-[80px]">성장</span>
                            </p>
                            <span className="text-[2.5vw] text-[#6d6d6d]">웹사이트 분석, 디자인 및 레이아웃 도출, 반응형 웹 디자인 적용</span>
                        </div>
                        <div className="flex items-center">
                            <p className="text-[#6d6d6d] flex font-semibold text-[20px] py-1">
                                <span className="text-[3vw] w-[80px]">SKILL</span>
                            </p>
                            <span className="text-[2.5vw] text-[#6d6d6d]">
                                HTML, CSS, Tailwindcss, javaScript, Netlify
                            </span>
                        </div>
                        {/* <p className="text-[#6d6d6d] w-[80px] font-semibold text-[20px] md:py-3 py-1"></p> */}
                    </div>

                    {/* img WEB */}
                    <div className="hidden md:block flex-col pl-[57vw] items-center pr-[3vw]">
                        <div className="flex justify-center">
                            <img className="flex mt-0 p-5 z-30 h-[250px] xl:h-[300px] rounded-[30px] duration-300 object-cover justify-center" alt="projectImg3" src="https://kimjin1988.github.io/jin-portfolio/img/projectImg3.png"/>
                        </div>
                        <div className="flex-wrap mt-3 text-stone-500 font-bold">
                            <p className="text-[#6d6d6d] text-[16px] pt-1">
                                <span className="font-bold">국비 훈련과정중 하나의 웹사이트를 선정하여 그 사이트를 따라 만들어본 프로젝트입니다.</span><br/>이 프로젝트에서는 선택한 웹사이트를 분석하고, 해당 디자인 및 기능을 따라가며 비슷한 웹사이트를 구축하는 작업을 수행했습니다. 이 프로젝트를 통해 원본 웹사이트의 디자인과 기능을 세밀히 이해하고, 이를 따라가며 비슷한 웹사이트를 만들어봄으로써 실전 경험을 쌓을 수 있었습니다. 웹 개발의 다양한 측면에서의 기술 습득 능력을 향상시킬 수 있었던 의미있는 경험이었습니다.
                            </p>
                        </div>
                    </div>

                </div>
                {/* web버전 */}
                <div className={`z-10 absolute hidden md:block translate-x-0 left-[4vw] md:left-20 lg:left-28 mt-48 h-[650px] w-[50vw] md:w-[44vw] bg-white transition-all duration-1000 overflow-hidden ${scroll >= 3250 && scroll < 4700 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100vw]'}`}>
                    <div className="mt-5 text-[#6d6d6d] text-center hidden md:block">
                        <h1 className="text-[20px] font-semibold">pposco</h1>
                        <p className="pt-2 text-[14px] opacity-75">1人 퍼블리싱 100%</p>
                    </div>
                    
                    <div className="mt-[3vw] w-full px-5">
                        <div className="flex items-center">
                            <p className="text-[#6d6d6d] w-[80px] font-semibold text-[20px] md:py-3 py-1">
                                <span className="text-[20px] w-[80px]">Netlify</span>
                            </p>
                            <a className="text-[16px] border-blue-300 text-blue-300" href="https://pposco.netlify.app/">https://pposco.netlify.app/</a>
                        </div>
                        <div className="flex">
                            <p className="text-[#6d6d6d] flex font-semibold text-[20px] py-1">
                                <span className="text-[20px] w-[80px]">성장</span>
                            </p>
                            <span className="text-[16px] text-[#6d6d6d]">웹사이트 분석, 디자인 및 레이아웃 도출, 반응형 웹 디자인 적용</span>
                        </div>
                        <div className="flex items-center">
                            <p className="text-[#6d6d6d] flex font-semibold text-[20px] py-1">
                                <span className="text-[20px] w-[80px]">Page</span>
                            </p>
                            <span className="text-[16px] text-[#6d6d6d]">
                                index.html / about.html / poscoholdings.html
                            </span>
                        </div>
                        <div className="flex items-center">
                            <p className="text-[#6d6d6d] flex font-semibold text-[20px] py-1">
                                <span className="text-[20px] w-[80px]">SKILL</span>
                            </p>
                            <span className="text-[16px] text-[#6d6d6d]">
                                HTML, CSS, Tailwindcss, javaScript, Netlify
                            </span>
                        </div>
                        <hr className="border-stone-500 my-2"/>
                        <div className="xl:pt-5">
                            <p className="text-[#6d6d6d] w-[80px] font-semibold text-[14px] xl:text-[18px] pt-2">초반 단계</p>
                            <span className="text-[12px] text-[#6d6d6d] xl:text-[15px]">- 국비 지원 훈련 과정중 처음 진행한 개인 프로젝트입니다. 프로젝트를 리팩토링해 볼 기회를 준 첫 프로젝트인만큼 미숙한 부분도 많지만 소중한 경험을 준 프로젝트입니다.</span>
                            <p className="xl:pt-3 text-[#6d6d6d] w-[80px] font-semibold text-[14px] xl:text-[18px] pt-2">중반 단계</p>
                            <span className="text-[12px] text-[#6d6d6d] xl:text-[15px]">- 이 프로젝트를 통해 선택한 웹사이트를 세밀히 분석하고 이해함으로써 실전 경험을 쌓을 수 있었습니다. 원본 웹사이트의 디자인과 기능을 따라가면서 웹 개발의 다양한 측면에서 기술 습득 능력을 향상시키는 데에 큰 의미를 두었습니다.</span>
                            <p className="xl:pt-3 text-[#6d6d6d] w-[80px] font-semibold text-[14px] xl:text-[18px] pt-2">후반 단계</p>
                            <span className="text-[12px] text-[#6d6d6d] xl:text-[15px]">- 기술적인 이해도와 창의성을 키울 수 있는 소중한 경험으로 기억됩니다.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};