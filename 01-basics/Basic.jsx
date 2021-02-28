import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import gsap from 'gsap';


export default function Basic(){

    useEffect(()=>{
        /* Custom controls */

        // Cursor: how to control camera with our mouse

        // Stores mouse position in cursor object
        const cursor = {
            x: 0,
            y: 0
        }

        window.addEventListener('mousemove', (event) =>
        {
            cursor.x = event.clientX / sizes.width - 0.5
            cursor.y = - ( event.clientY / sizes.height - 0.5 )

            console.log(cursor.x, cursor.y)
        })

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
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
        
        // camera.position.x = 3
        // camera.position.y = 3
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

        // Update camera
        camera.position.x = cursor.x * 10
        camera.position.y = cursor.y * 10
    camera.lookAt(mesh.position)

        // mesh.rotation.y = elapsedTime
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