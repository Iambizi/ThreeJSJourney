import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


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
            width: window.innerWidth,
            height: window.innerHeight
        }

        // Full screen mode on double click

        window.addEventListener('dblclick',() =>{

            const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

            if( !fullscreenElement )
            {
                if(canvas.requestFullscreen)
                {
                    canvas.requestFullscreen()

                }else if(canvas.webkitRequestFullscreen){

                    canvas.webkitRequestFullscreen()

                }
            }else{
                if(document.exitFullscreen){

                    document.exitFullscreen()

                } else if(document.webkitExitFullscreen){

                    document.webkitExitFullscreen()

                }
            }
        });

        //camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
        
        // camera.position.x = 3
        // camera.position.y = 3
        camera.position.z = 3

        camera.lookAt(mesh.position);

        

        //Renderer
        const canvas = document.querySelector('.scene');

        // Control
        const controls = new OrbitControls(camera, canvas)
        
        // Damping: allows for smoother controls. Gives a sense of weight to the controls
        controls.enableDamping = true;

        //Controls speed at which damping will happen 
        controls.autoRotateSpeed = 3;

        controls.enableRotate = true;

        const renderer = new THREE.WebGLRenderer({
        canvas: canvas

    },[])

    renderer.setSize(sizes.width, sizes.height);
    //pixel ratio: corresponds to how many physical pixels you have on the screen for one pixel unit on the software part.
    // Device pixel ratio: allows us to adjust the pixel ratio of our scene to pixel ratio of our device
    renderer.setPixelRatio(Math.min(window.devicePixelRatio),2);
    renderer.render(scene, camera);

    // Clock
    let clock = new THREE.Clock()
    
    // Animations loop function
    const tick = () =>
    {   
        const elapsedTime = clock.getElapsedTime();

        // Update camera
        // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 5
        // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 5
        // camera.position.y = cursor.y * 3
        // camera.lookAt(mesh.position)

        // When using damping you also need to make sure you are updating it on each frame
        controls.update()

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