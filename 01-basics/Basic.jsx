import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';

export default function Basic(){

    useEffect(()=>{
        
        //Creat your scene, (your movie set)
        const scene = new THREE.Scene();

        //Mesh helper
        const axesHelper = new THREE.AxesHelper(2);
        scene.add(axesHelper);

        //create group
        const group = new THREE.Group()
        group.scale.y = 2
        group.rotation.y = 0.2
        scene.add(group)

        //create your objects
        
        //object 1
        const cube1 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 'silver' })
        )
        cube1.position.x = - 1.5
        group.add(cube1)

        //object2
        const cube2 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 'orange' })
        )
        cube2.position.x = 0
        group.add(cube2)

        //object3
        const cube3 = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({ color: 'teal' })
        )
        cube3.position.x = 1.5
        group.add(cube3)
        
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

    });
    return(
        <>
            <canvas className="scene"></canvas>
        </>
    );

}