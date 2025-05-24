import React, { useEffect } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

import Angular from '../assets/svgs/Angular.svg';
import Bootstrap from '../assets/svgs/Bootstrap.svg';
import CSS from '../assets/svgs/CSS.svg';
import Firebase from '../assets/svgs/Firebase.svg';
import GitHub from '../assets/svgs/GitHub.svg';
import HTML from '../assets/svgs/HTML5.svg';
import JS from '../assets/svgs/JavaScript.svg';
import Mongo from '../assets/svgs/MongoDB.svg';
import Node from '../assets/svgs/Node_js.svg';
import ReactIcon from '../assets/svgs/React.svg';
import ReactNat from '../assets/svgs/ReactNative.svg';
import SQL from '../assets/svgs/Sql.svg';
import TS from '../assets/svgs/Typescript.svg';
import VS from '../assets/svgs/Visual_Studio.svg';
import AWS from '../assets/svgs/AWS.svg';
import Jest from '../assets/svgs/Jest.svg';
import Cucumber from '../assets/svgs/Cucumber.svg';
import Postman from '../assets/svgs/Postman.svg';
import Express from '../assets/svgs/Express.svg';
import Redux from '../assets/svgs/Redux.svg';
import Sass from '../assets/svgs/sass-1.svg';
import Vue from '../assets/svgs/Vue.svg';

const Tools = (): JSX.Element => {
  const controls: AnimationControls = useAnimation();

  type svgsData = {
    src: string;
    alt: string;
  };
  const svgs: svgsData[] = [
    { src: HTML, alt: 'HTML' },
    { src: Bootstrap, alt: 'Bootstrap' },
    { src: CSS, alt: 'CSS' },
    { src: Sass, alt: 'Sass' },
    { src: JS, alt: 'JavaScript' },
    { src: TS, alt: 'TypeScript' },
    { src: ReactIcon, alt: 'React' },
    { src: Redux, alt: 'Redux' },
    { src: Angular, alt: 'Angular' },
    { src: Vue, alt: 'Vue' },
    { src: ReactNat, alt: 'React Native' },
    { src: Node, alt: 'Node.js' },
    { src: Mongo, alt: 'MongoDB' },
    { src: Express, alt: 'Express.js' },
    { src: Jest, alt: 'Jest' },
    { src: Cucumber, alt: 'Cucumber' },
    { src: Postman, alt: 'Postman' },
    { src: GitHub, alt: 'GitHub' },
    { src: VS, alt: 'Visual Studio' },
    { src: Firebase, alt: 'Firebase' },
    { src: SQL, alt: 'SQL' },
    { src: AWS, alt: 'AWS' },
  ];
  //takes the svg array and puts it a new one and does thsie twice, so in new array all items from svgs are twice
  const doubledSvgs = [...svgs, ...svgs];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const sequence = async () => {
      // X * svgs.length; -> x is the speed
      // if last icon jumps to the left, increase X
      // if the last icon jumps to the right, decrease X
      const totalWidth = 88.3 * svgs.length;
      await controls.start({
        x: -totalWidth,
        // move left to the total width of all icons
        transition: { duration: 1 * svgs.length, ease: 'linear', repeat: Infinity },
      });
    };

    sequence();
  }, [controls, svgs.length]);

  return (
    <div
      style={{
        overflow: 'hidden',
        backgroundColor: 'rgba(231, 231, 231, 0.6)',
        boxShadow: '0 0 10px rgba(159, 157, 157, 0.4)',
        borderRadius: '5px',
        margin: '10px 0',
        width: '96%',
      }}
    >
      <motion.div
        initial={{ x: 0 }}
        animate={controls}
        // if last icon jumps to the left, increase 88.6px
        // if the last icon jumps to the right, decrease 88.6px
        style={{ display: 'flex', width: `calc(80px * ${svgs.length})` }}
      >
        {doubledSvgs.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt={icon.alt}
            style={{ width: '80px', height: '40px', margin: ' 10px 20px' }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Tools;
