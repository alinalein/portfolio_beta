import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Angular from '../../assets/svgs/Angular.svg'
import Bootstrap from '../../assets/svgs/Bootstrap.svg'
import CSS from '../../assets/svgs/CSS.svg'
import Firebase from '../../assets/svgs/Firebase.svg'
import GitHub from '../../assets/svgs/GitHub.svg'
import HTML from '../../assets/svgs/HTML5.svg'
import JS from '../../assets/svgs/JavaScript.svg'
import Mongo from '../../assets/svgs/MongoDB.svg'
import Node from '../../assets/svgs/Node_js.svg'
import Reacticon from '../../assets/svgs/React.svg'
import ReactNat from '../../assets/svgs/ReactNative.svg'
import SQL from '../../assets/svgs/Sql.svg'
import TS from '../../assets/svgs/Typescript.svg'
import VS from '../../assets/svgs/Visual_Studio.svg'
import AWS from '../../assets/svgs/AWS.svg'
import Jest from '../../assets/svgs/Jest.svg'
import Cucumber from '../../assets/svgs/Cucumber.svg'
import Postman from '../../assets/svgs/Postman.svg'
import Express from '../../assets/svgs/Express.svg'
import Redux from '../../assets/svgs/Redux.svg'
import Sass from '../../assets/svgs/sass-1.svg'

const Tools = () => {
    const controls = useAnimation();
    const svgs = [
        Angular, Bootstrap, CSS, Firebase, GitHub, HTML,
        Mongo, AWS, Node, JS, Reacticon, SQL, TS, ReactNat,
        VS, Jest, Cucumber, Postman, Redux, Express, Sass
    ]
    const doubledSvgs = [...svgs, ...svgs];

    useEffect(() => {
        const sequence = async () => {
            // 88.6px x svg icons number (88.6 px  calculated based on the width of each svg)
            // if last icon jumps to the left, increase 88.6px 
            // if the last icon jumps to the right, decrease 88.6px 
            const totalWidth = 88.6 * svgs.length;
            await controls.start({
                x: -totalWidth,
                // move left to the total width of all icons
                transition: { duration: 1 * svgs.length, ease: "linear", repeat: Infinity }
            });
        };

        sequence();
    }, [controls, svgs.length]);

    return (
        <div
            style={{
                overflow: 'hidden', backgroundColor: 'rgba(231, 231, 231, 0.6)',
                boxShadow: '0 0 10px rgba(159, 157, 157, 0.4)',
                borderRadius: '5px', margin: '20px 0', width: '96%'
            }}>
            <motion.div
                initial={{ x: 0 }}
                animate={controls}
                // if last icon jumps to the left, increase 88.6px 
                // if the last icon jumps to the right, decrease 88.6px 
                style={{ display: 'flex', width: `calc(88.6px * ${svgs.length})` }}
            >
                {doubledSvgs.map((SvgIcon, index) => (
                    <img key={index} src={SvgIcon} style={{ width: '80px', height: '40px', margin: ' 10px 20px', }} />
                ))}
            </motion.div>
        </div>
    );
};

export default Tools;