import * as THREE from 'three'
import Experience from '../Experience'

import Model from './Model'

export default class World{
    constructor(){
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.camera = this.experience.camera


        this.model = new Model()
    }


    

    resize()
    {

    }

    update()
    {

    }
}
