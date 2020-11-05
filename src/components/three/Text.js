import React, {useRef} from "react";
import { Text } from '@react-three/drei/Text'
import {useFrame} from "react-three-fiber";
import * as THREE from "three";

export default function (props) {
    const {title} = props
    const mesh = useRef()
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.y += 0.02))

    return (
        <mesh
            {...props}
            ref={mesh}
            castShadow={true}
        >
        <Text

            fontSize={1}
            font={'Oxygen'}
            color={new THREE.Color('#8dffff')}
            outlineColor={new THREE.Color('#fd60e6')}
            outlineWidth={0.05}
            position={[0, 0.8, 3]}
        material-toneMapped={false}>{title}</Text>

        </mesh>
    )
}
