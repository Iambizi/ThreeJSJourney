import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

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
        // const camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height, 0.1, 100);

        /* When using orthographic cameras, if the width is not equal to your height your left and right values need to take into account aspect ratios by multiplying them to a value holding aspect ratios. */         
        
        const aspectRatio = sizes.width / sizes.height;
        const camera = new THREE.OrthographicCamera(
            -1 * aspectRatio, 
            1 * aspectRatio,
            1,
            -1,
            0.1, 100)
        
        camera.position.x = 3
        camera.position.y = 3
        camera.position.z = 3

        camera.lookAt(mesh.position);

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
        const elapsedTime = clock.getElapsedTime();

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