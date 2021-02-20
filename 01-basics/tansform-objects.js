export default function Basic(){

useEffect(()=>{
        
    //Creat your scene, (your movie set)
    const scene = new THREE.Scene();
    
    //shape
    const geometry = new THREE.BoxGeometry(1,1,1);
    //Material
    const material = new THREE.MeshBasicMaterial({color: 'teal'})
    
    /*** MESH START ***/
    const mesh = new THREE.Mesh(geometry,material);

    // mesh.position.x = 0.7
    // mesh.position.y = - 0.6
    // mesh.position.z = 1
    
    mesh.position.set(0.7, -0.6, 1);
    // Mesh scale
    mesh.scale.set(2,.25,.5);
    // Rotaion
    //by setting the y to pie you get half a rotation
    mesh.rotation.reorder('YXZ');
    mesh.rotation.x = Math.PI * 0.25
    mesh.rotation.y = Math.PI * 0.25

    // Gives you distance between middle of the scene and your object
    console.log(mesh.position.length());

    // Takes vector length and reduces it so it's one.
    mesh.position.normalize();
    console.log(mesh.position.length());
    const sizes = {
        width: 800,
        height: 600
    }
    //always add mesh to scene
    scene.add(mesh);
    /***  MESH END ***/

    /*** Axes Helper ***/
    //adds 3 linies to help with defining position in spaces
    const axesHelper = new THREE.AxesHelper(2);

    scene.add(axesHelper);
    /*** Axes Helper END ***/

    /*** CAMERA START ***/
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

    camera.position.z = 3
    // camera.position.y = 1
    // camera.position.x = 1

    // camera.position.set(1,-.1,3.5);

    //Gives you distance between camera and the object
    //console.log(mesh.position.distanceTo(camera.position))
    scene.add(camera);
    camera.lookAt(mesh.position)
    /*** CAMERA END ***/

    /*** RENDERER ***/
    const canvas = document.querySelector('.scene');
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    },[])

    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
    /*** RENDERER END ***/
});
return(
    <>
        <canvas className="scene"></canvas>
    </>
);

}