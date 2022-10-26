// import logo from './logo.svg';
import './App.css';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, KeyboardControls, Stars, useSurfaceSampler } from '@react-three/drei';
import { BrisbaneMap } from './models/maps/BrisbaneMap';
import { Redgumtree } from './models/plants/Redgumtree';
import { Redgumtree0 } from './models/plants/Redgumtree0';
import { Ocean } from './models/maps/Ocean';
import data from './data/brisbaneMapData/BrisbaneMap.json';
import { useEffect, Card, useRef, useState, setState, preState, state } from 'react';
import { Grass } from './models/plants/Grass';
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { extend} from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { Vector3 } from 'three';
import GLTFLoader from 'gltfjsx/src/utils/glftLoader';

extend({ DragControls });

const positionsNorth = data.north;
const positionsSouth = data.south;

export const RedgumtreePlants = (props) => {
    let indexSet = props.info; // we plan two redgumtrees by using this render, with default position
    return indexSet.map((value, index) => <Dragable><Redgumtree key={index} position={[value.x, 3, value.y]} /></Dragable>);
}    

export const GrassPlants = (props) => { 
    let indexSet = props.info;
    return indexSet.map((value, index) => <Grass key={index} position={[value.x, 2.2, value.y]} scale={ 0.05 } />);
}

export const MouseOperator = (props) => { 
    const { scene, camera } = useThree();
    let signal = props.info[0];
    const setNewPlantPos = (newPos) => { 
        props.info[1](newPos);
    }
    document.onmousedown = (event) => { 
        event.preventDefault();
        var vector = new THREE.Vector3(); // 3d index object
        vector.set(
            (event.clientX / window.innerWidth) * 2 - 1,
            - (event.clientY / window.innerHeight) * 2 + 1,
            0.5);
        vector.unproject(camera);
        var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
        var intersects = raycaster.intersectObjects(scene.children);
        if (signal == true) { 
            if (intersects.length > 0) {
                var selected = intersects[0];
                setNewPlantPos({ "x": selected.point.x, "y": selected.point.z });
            }
        }
    }
}

export const PlantRender = (props) => { 

    const { scene } = useThree();
    let plantType = props.info.type;
    let plantPos = props.info.pos;
    var loader = new GLTFLoader();
    let plantCommand = props.info.cmd;
    let plants = {
        "grass": {
            "growthTime": 5,
            "stage": null,
            "diffusion": 4
        }
    };

    let previousPos = { "x": "", "y": "" };
}

export const GrassLoader = (props) => { 
    let plantType = props.info.type;
    let plantPosList = props.info.posList;
    let plantCommand = props.info.cmd;
    return (plantPosList.map((value, index) => <Grass key={index} position={[value.x, 3, value.y]} scale={ 0.1 } />));
}



export const Dragable = (props) => {

    const { camera, gl, scene } = useThree();
    const [children, setChildren] = useState([]);
    const groupRef = useRef();
    const controlsRef = useRef();


    useEffect(() => {
        setChildren(groupRef.current.children);
    }, []);

    // listen event of mouse on 3D object
    // because each time when we want to move each 3d object, we need to close and reopen the orbit control, so we should write two useEffect hooks to control them separately.
    // hoveron -> trigger when mouse move one a 3D object or some of it's children
    // hoveroff -> triggers when mouse move out of a 3D obkect 
    useEffect(() => {
        controlsRef.current.addEventListener("hoveron", (e) => {
            scene.orbitControls.enabled = false;
        });
        controlsRef.current.addEventListener("hoveroff", (e) => {
            scene.orbitControls.enabled = true;
        });
    }, [children]);

    return (
        <group ref={ groupRef }>
            <dragControls args={[children, camera, gl.domElement]} ref={ controlsRef } />
            {props.children}
        </group>
    );
};

function App() {

    let [newPlantType, setNewPlantType] = useState(null);
    let [signal, setSignal] = useState(false);
    let [newPlantPos, setNewPlantPos] = useState({ "x": 0, "y": 0 });
    let [newPlantInfo, setNewPlantInfo] = useState({ "type": "", "pos": "", "cmd": "" });
    let [grassList, setGrassList] = useState([]);
    let [plantList, setPlantList] = useState([]);
    
    const selectNewPlantPos = (newPos) => { 
        setNewPlantPos(newPos);
        // console.log(newPlantPos);
    }

    // invaild position judgement
    const isRayIntersectsSegment = (x, y, startX, startY, endX, endY) => { 
        
        if (startY === endY) { // Exclude the cases where the ray is parallel and coincident, and the end points of the line segment coincide
            return false;
        }
        if (startY > y && endY > y) { //  line segment above ray
            return false;
        }
        if (startY < y && endY < y) { //  line segment below ray 
            return false;
        } 
        if (startY === y && endY > y) { // intersect at start point
            return false;
        }
        if (startY > y && endY === y) { // intersect at end point 
            return false;
        }
        if (startX < x && endY < y) { // line segment at left of ray
            return false;
        }
        let interSeg = endX - (endX - startX) * (endY - y) / (endY - startY);
        if (interSeg < x) {
            return false;
        } else { 
            return true;
        }
    }

    const terrainJudgement = (point) => { 
        let sinsc = 0; // number of intersection number
        for (let i = 1; i < positionsNorth.length; i++) { 
            let index = i;
            let startPoint = positionsNorth[index-1];
            let endPoint = positionsNorth[index];
            
            if (isRayIntersectsSegment(point.x, point.y, startPoint.x, startPoint.y, endPoint.x, endPoint.y)) { 
                sinsc += 1;
            }
        }

        if (sinsc/ 2 % 2 === 1) {
            return true;
        } else {
            for (let i = 1; i < positionsSouth.length; i++) {
                let index = i;
                let startPoint = positionsSouth[index - 1];
                let endPoint = positionsSouth[index];

                if (isRayIntersectsSegment(point.x, point.y, startPoint.x, startPoint.y, endPoint.x, endPoint.y)) {
                    sinsc += 1;
                }
            }

            if (sinsc / 2 % 2 === 1) {
                return true;
            }
            else {
                return false;
            }
        }
    }


    const applyForSeeds = (position) => { // here is the function that plant can spreat seeds

        let x = position.x;
        let y = position.y;
        
        let upperSeed1 = { "x": x, "y": y + 0.2 };
        let upperSeed2 = { "x": x, "y": y + 0.3 };
        let upperSeed3 = { "x": x, "y": y + 0.4 };
        let lowerSeed1 = { "x": x, "y": y - 0.2 };
        let lowerSeed2 = { "x": x, "y": y - 0.3 };
        let lowerSeed3 = { "x": x, "y": y - 0.4 };
        let leftSeed1 = { "x": x - 0.2, "y": y };
        let leftSeed2 = { "x": x - 0.3, "y": y };
        let leftSeed3 = { "x": x - 0.4, "y": y };
        let rightSeed1 = { "x": x + 0.2, "y": y };
        let rightSeed2 = { "x": x + 0.3, "y": y };
        let rightSeed3 = { "x": x + 0.4, "y": y }

        let finalSeeds = [upperSeed1, upperSeed2, upperSeed3, lowerSeed1, lowerSeed2, lowerSeed3, leftSeed1, leftSeed2, leftSeed3, rightSeed1, rightSeed2, rightSeed3];

        finalSeeds.forEach((seed) => {
            if (!terrainJudgement(seed)) { 
                finalSeeds.pop(seed);
            }
        });

        return finalSeeds;
    }

    useEffect(() => {
        let validPos = terrainJudgement(newPlantPos);
        
        if (validPos == true) { 
            setGrassList([...grassList, newPlantPos]);
            console.log(grassList);
            setNewPlantInfo({ "type": newPlantType, "posList": grassList, "cmd": "new" });
        }
        
    }, [newPlantPos]);

    return (
        <><div>
            <button id='grass' onClick={() => { 
                if (signal == true) {
                    setSignal(false);
                } else { 
                    setSignal(true);
                    setNewPlantType("grass");
                }
             }}>Grass</button>
        </div><Canvas style={{ height: "100vh", width: "100vw", background: "black" }}
            camera={{ position: [0, 5, 5], fov: 45, near: 1 }}>
            <OrbitControls />
            <pointLight position={[10, 5, 10]} />
            <Stars />
            <BrisbaneMap position={[0, 0, 0]} />
            <Redgumtree position={[4, 3, 4]} />
            <Redgumtree position={[1, 3, 1]} />
            <Ocean position={[0, 2, 0]} />
            <MouseOperator info={[signal, selectNewPlantPos]}></ MouseOperator>
            <GrassLoader info={newPlantInfo} />
        </Canvas></>
    );
}

export default App;
