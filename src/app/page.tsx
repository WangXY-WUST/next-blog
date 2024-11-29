'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './page.module.css';
import { animations } from '@/utils/animation';
import Link from 'next/link'

const Container = styled.div`
  #particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #3173b2;
    background-repeat: no-repeat;
    background-position: 0 50%;
    transition: background-image 1s ease-in-out, background-size 1s ease-in-out; /* 添加过渡效果 */
  }
  .count-particles {
    background: #000022;
    position: absolute;
    top: 48px;
    left: 0;
    width: 80px;
    color: #13e8e9;
    font-size: 0.8em;
    text-align: left;
    text-indent: 4px;
    line-height: 14px;
    padding-bottom: 2px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
  }
  .js-count-particles {
    font-size: 1.1em;
  }
  #stats,
  .count-particles {
    -webkit-user-select: none;
    margin-top: 5px;
    margin-left: 5px;
  }
  #stats {
    border-radius: 3px 3px 0 0;
    overflow: hidden;
  }
  .count-particles {
    border-radius: 0 0 3px 3px;
  }
  .windmill {
    z-index: 100;
    position: fixed;
    bottom: 0;
    right: 20px;
    user-select: none;
    & span {
      display: block;
      margin-top: -30px;
      margin-left: auto;
      margin-right: auto;
      width: 5px;
      height: 56px;
      background-color: rgb(254, 254, 254);
    }
    & .windmill-img {
      cursor: pointer;
      transition: transform 3s ease-in-out;
    }
    & .windmill-img.rotate {
      animation: rotate 3s ease-in-out;
    }
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(1440deg);
    }
  }
`;
export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [animationIndex, setAnimationIndex] = useState(0);
  const [isParticlesLoaded, setParticlesLoaded] = useState(false);
  useEffect(() => {
    // performanceWatch();
  }, []);
  // 脚本加载完成后执行
  const handleParticlesLoad = () => {
    setParticlesLoaded(true);
    particlesJS('particles-js', animations[animationIndex].config);
  };
  useEffect(() => {
     if (isParticlesLoaded) {
       particlesJS('particles-js', animations[animationIndex].config);
     }
  }, [animationIndex, isParticlesLoaded]);
  // 切换动画
  const changeAnimation = () => {
    setAnimationIndex(prevIndex => (prevIndex + 1) % animations.length);
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 3000);
  };
  return (
    <Container>
      <Script src="/js/particles.min.js" onLoad={handleParticlesLoad}></Script>
      <Link href="/home">
        <div
          id="particles-js"
          style={{
            backgroundImage: `url(${animations[animationIndex].backgroundImage})`,
            backgroundSize: animations[animationIndex].backgroundSize,
          }}
        ></div>
      </Link>
        {/* <div className="count-particles">
          <span className="js-count-particles">--</span> particles{' '}
        </div> */}
        <div className="windmill" onClick={changeAnimation}>
          <img src="/static/images/svgs/windmill.svg" alt="" className={`windmill-img ${isRotating ? 'rotate' : ''}`} />
          <span></span>
        </div>
    </Container>
  );
}
