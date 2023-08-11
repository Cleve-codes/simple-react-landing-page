import React, {useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export function Reveal({children, width = "fit-content"} : Props){
    const ref = useRef(null)
    return <div style={{position: 'relative', width, overflow: "hidden"}} ref={ref}>
        <motion.div
            variants={{
                hidden: {opacity: 0 , y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.5, delay: 0.25
            }}
        >
            {children}
        </motion.div>
    </div>
}