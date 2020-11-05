import {useEffect, useState, useRef, useCallback, Suspense} from 'react'
import {motion, useViewportScroll} from "framer-motion"
import * as THREE from 'three';
import {Canvas, FogExp2, useFrame} from "react-three-fiber";
import Box from "./Box";
import Particles from "./Particles";
import Text from "./Text";
import {Shadow, Torus} from "@react-three/drei";
import Center from "./Center";
import Dolphin from "./Dolphin";

export default function Three() {
    const {scrollYProgress, scrollY} = useViewportScroll()
    const [down, set] = useState(false)
    const mouse = useRef([0, 0])
    const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

    useEffect(() => {
        console.log(scrollY)
        console.log(scrollYProgress)
    }, [scrollY])

    return (
        <Canvas
            onMouseMove={onMouseMove}
            onMouseUp={() => set(false)}
            onMouseDown={() => set(true)}
            style={{width: '100vw', height: '100vh', backgroundImage: 'url("outrun.jpg")', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <ambientLight
                intensity={1}
                isAmbientLight={true}
            />
            <hemisphereLight
                color="#fd60e6"
                intensity={1}
            />
            <pointLight position={[10, 10, 10]} />
            <fogExp2 attach="fog" args={['white', 50]} density={0.1}/>
            <Particles count={5000} mouse={mouse} />
            <Text
                title={'DENIZ'}
                position={[0, -1, 0]}
            />
            <Text
                title={'HIRE'}
                position={[0, 0, 0]}
            />
            <Shadow
                color="#8dffff" // Color (default:black)
                colorStop={1} // First gradient-stop (default:0)
                opacity={0.5} // Alpha (default:0.5)
                fog={false} // Reacts to fog (default=false)
                scale={[2,2,2]}
            />
            <Shadow
                color="#fd60e6" // Color (default:black)
                colorStop={0.2} // First gradient-stop (default:0)
                opacity={1} // Alpha (default:0.5)
                fog={false} // Reacts to fog (default=false)
                scale={[1.2,1.2,1.2]}
            />
            <Suspense fallback={
                <Text
                title={'DOLPHIN'}
                position={[0, 0, 0]}

            />}>
                <Dolphin
                    scale={[0.01, 0.01, 0.01]}
                    position={[0, 0, 0]}
                />
            </Suspense>
            <Center/>

            <Box position={[0, -0.8, 0]} scale={[0.4, 0.4, 0.4]}/>
            <Box position={[0, 0.8, 0]} scale={[0.2, 0.2, 0.2]}/>

        </Canvas>
    )
}
