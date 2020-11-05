import React, {useEffect, useState, useRef} from "react";
import {Torus} from "@react-three/drei";
import {Canvas, useFrame} from "react-three-fiber";

export default function Center (props) {
    const mesh = useRef()
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.y -= 0.04;
        mesh.current.rotation.x -= 0.02;
        mesh.current.rotation.z -= 0.04
    })

    return (
        <Torus ref={mesh} args={[2.5, 0.3, 16, 32]} castShadow={true}>
            <meshBasicMaterial attach="material" color="hotpink" />
        </Torus>
    )
}
