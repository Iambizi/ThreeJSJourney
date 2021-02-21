import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';

export default function Basic(){

    useEffect(()=>{
        
        //Creat your scene, (your movie set)
        const scene = new THREE.Scene();

        //Mesh helper
        const axesHelper = new THREE.AxesHelper(3);
        scene.add(axesHelper);

        const mesh = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 'silver' })
        )
        scene.add(mesh)

        
        //Sizes for camera
        const sizes = {
            width: 800,
            height: 600
        }

        //camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
        camera.position.z = 3

        //Renderer
        const canvas = document.querySelector('.scene');
        const renderer = new THREE.WebGLRenderer({
        canvas: canvas

    },[])

    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);

    // Clock
    let clock = new THREE.Clock()

    // Animations
    const tick = () =>
    {   
        //Frame rate adjustment using clock
        const elapsedTime = clock.getElapsedTime();
        console.log(elapsedTime);

        //Update objects position. No more incrementation
        mesh.rotation.y = elapsedTime
        // Render
        renderer.render(scene, camera);

        window.requestAnimationFrame(tick);
    }
    tick()

    });
    return(
        <>
            <canvas className="scene"></canvas>
        </>
    );

}