import * as THREE from 'three'
import Experience from "./Experience";

export default class Camera{
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas

        this.createPerspectiveCamera()
    }

    createPerspectiveCamera()
    {
        this.perspectiveCamera = new THREE.PerspectiveCamera(35, this.sizes.aspectRatio, 0.1, 1000)
        this.scene.add(this.perspectiveCamera)
        this.perspectiveCamera.position.z = 5
    }

    resize()
    {
        this.perspectiveCamera.aspect = this.sizes.aspectRatio
    }

    update()
    {
        this.perspectiveCamera.updateProjectionMatrix()
    }
}
