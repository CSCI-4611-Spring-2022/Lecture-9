import * as THREE from 'three'
import { GraphicsApp } from './GraphicsApp'

export class MeshConstruction extends GraphicsApp
{ 
    constructor()
    {
        // Pass in the aspect ratio to the constructor
        super(1920/1080);
        
    }

    createScene() : void
    {
        // Setup camera
        this.camera.position.set(0, 0, 5);
        this.camera.lookAt(0, 0, 0);
        this.camera.up.set(0, 1, 0);

        // Create an ambient light
        var ambientLight = new THREE.AmbientLight('white', 0.3);
        this.scene.add(ambientLight);

        // Create a directional light
        var directionalLight = new THREE.DirectionalLight('white', .6);
        directionalLight.position.set(0, 2, 1);
        this.scene.add(directionalLight)

        // Create the skybox material
        var skyboxMaterial = new THREE.MeshBasicMaterial();
        skyboxMaterial.side = THREE.BackSide;
        skyboxMaterial.color.set('skyblue');

        // Create a skybox
        var skybox = new THREE.Mesh(new THREE.BoxGeometry(1000, 1000, 1000), skyboxMaterial);
        this.scene.add(skybox)

        var vertices : Array<THREE.Vector3> = [];
        var indices : Array<number> = [];

        const angleIncrement = 45 * Math.PI / 180;
        for(let angle=0; angle <= 4 * Math.PI; angle += angleIncrement*2)
        {
            vertices.push(new THREE.Vector3(Math.cos(angle), 1, Math.sin(angle)));
            vertices.push(new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle)));
            vertices.push(new THREE.Vector3(Math.cos(angle + angleIncrement), 1, Math.sin(angle + angleIncrement)));
            vertices.push(new THREE.Vector3(Math.cos(angle + angleIncrement), 0, Math.sin(angle + angleIncrement)));

            var vertexIndex = angle / angleIncrement;
            indices.push(vertexIndex);
            indices.push(vertexIndex + 1);
            indices.push(vertexIndex + 2);
            indices.push(vertexIndex + 1);
            indices.push(vertexIndex + 3);
            indices.push(vertexIndex + 2);
        }
        
        
        
        var cylinderMesh = new THREE.Mesh();
        cylinderMesh.geometry.setFromPoints(vertices);
        cylinderMesh.geometry.setIndex(indices);

        const debugMode = true;
        if(debugMode)
        {
            var debugMaterial = new THREE.MeshBasicMaterial();
            debugMaterial.wireframe = true;
            cylinderMesh.material = debugMaterial;
        }
        else
        {
            var cylinderMaterial = new THREE.MeshLambertMaterial();
            cylinderMaterial.color.set('green');
            cylinderMesh.material = cylinderMaterial;
        }

        this.scene.add(cylinderMesh); 
    }

    update(deltaTime : number) : void
    {
       
    }
}
