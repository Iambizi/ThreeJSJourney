import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';

export default function Basic(){

    useEffect(()=>{
            //Creat your scene, (your movie set)
        const scene = new THREE.Scene();
        
        //shape
        const geometry = new THREE.BoxGeometry(1,1,1);
        //Material
        const material = new THREE.MeshBasicMaterial({color: 'gold'})
        //Mesh
        const mesh = new THREE.Mesh(geometry,material);

        const sizes = {
            width: 800,
            height: 600
        }
        //always add mesh to scene
        scene.add(mesh);

        //Camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
        camera.position.z = 3
        scene.add(camera);

        //Renderer
        const canvas = document.querySelector('.scene');
        console.log(canvas);
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