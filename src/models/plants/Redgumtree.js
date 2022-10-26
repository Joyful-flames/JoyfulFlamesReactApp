/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';

export function Redgumtree(props) {
    const { nodes, materials } = useGLTF('/models/plants/Redgumtree.glb');
    return (    
        <group {...props} dispose={null}>
            <mesh geometry={nodes.立方体016.geometry} material={materials['材质.001']}  scale={0.02} />
        </group>
    )
}

useGLTF.preload('/Redgumtree.glb')