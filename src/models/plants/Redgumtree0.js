/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Redgumtree0(props) {
  const { nodes, materials } = useGLTF('/models/plants/Redgumtree0.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.98, 0, -1.01]}>
        <mesh geometry={nodes.平面001.geometry} material={materials.材质} />
        <mesh geometry={nodes.平面001_1.geometry} material={materials['材质.001']} />
      </group>
      <mesh geometry={nodes.立方体001.geometry} material={materials['材质.005']} position={[2.23, 3.7, 0.68]} scale={0.57} />
    </group>
  )
}

useGLTF.preload('/Redgumtree0.glb')
