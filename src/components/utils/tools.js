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

const Tools = () => {
    const controls = useAnimation();
    const svgs = [
        Angular, Bootstrap, CSS, Firebase, GitHub, HTML,
        Mongo, Node, JS, Reacticon, SQL, TS, ReactNat, VS
    ]
    const doubledSvgs = [...svgs, ...svgs];

    useEffect(() => {
        const sequence = async () => {
            // 100px x svg icons number
            const totalWidth = 105 * svgs.length;
            await controls.start({
                x: -totalWidth,
                // move left to the total width of all icons
                transition: { duration: 1 * svgs.length, ease: "linear", repeat: Infinity }
            });
        };

        sequence();
    }, [controls, svgs.length]);

    return (
        <div style={{
            overflow: 'hidden', backgroundColor: 'rgba(231, 231, 231, 0.6)',
            boxShadow: '0 0 20px rgba(159, 157, 157, 0.4)',
            borderRadius: '5px', width: '50vw', display: 'flex', flexDirection: 'center'
        }}>
            <motion.div
                initial={{ x: 0 }}
                animate={controls}
                style={{ display: 'flex', width: `calc(105px * ${svgs.length})` }}
            >
                {doubledSvgs.map((SvgIcon, index) => (
                    <img key={index} src={SvgIcon} style={{ width: '100px', height: '50px', margin: ' 10px 20px', }} />
                ))}
            </motion.div>
        </div>
    );
};

export default Tools;