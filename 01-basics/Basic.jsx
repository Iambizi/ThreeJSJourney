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
    // let clock = new THREE.Clock()
    
    // Animate mesh position using gsap
    /* green soap uses its own tick function to update frame rate so you don't need to.
    However you would still need to render the scene by yourself in you tick function*/
    gsap.to(mesh.position,{ duration: 1, delay:1, x:2});
    gsap.to(mesh.position,{ duration: 1, delay:2, x:0});

    // Animations
    const tick = () =>
    {   
    
        // Camera is rotating while looking at the mesh at all times
        camera.lookAt(mesh.position)

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