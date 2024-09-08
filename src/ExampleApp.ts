/** CSci-4611 Example Code
 * Copyright 2023+ Regents of the University of Minnesota
 * Please do not distribute beyond the CSci-4611 course
 */

import * as gfx from 'gophergfx'


export class ExampleApp extends gfx.GfxApp
{   
 
    bgColor : gfx.Color = new gfx.Color(0.0,0.0,0.0);
    // --- Create the ExampleApp class ---
    constructor()
    {
        // initialize the base class gfx.GfxApp
        super();

    }


    // --- Initialize the graphics scene ---
    createScene(): void 
    {
        this.renderer.background = this.bgColor;
        const myRect = gfx.Geometry2Factory.createRect(2.5, 1.5);


        const myEyeL = gfx.Geometry2Factory.createRect(.5, 0.5);
        myEyeL.position = new gfx.Vector2(-2.5, 2.5);
        this.scene.add(myEyeL);


        const myEyeR = gfx.Geometry2Factory.createRect(1.5, 0.5);
        const myNose = gfx.Geometry2Factory.createRect(0.5, 0.5);
        const myMouth = gfx.Geometry2Factory.createRect(1.5, 0.25);

  
        myEyeR.position = new gfx.Vector2(2.5, 2.5);

        // this.scene.add(myRect);

        this.scene.add(myEyeR);
        this.scene.add(myNose);
        this.scene.add(myMouth);
    }

    // --- Update is called once each frame by the main graphics loop ---
    update(deltaTime: number): void 
    {
        this.bgColor.g += 0.01;
        this.renderer.background = this.bgColor;
    }
}
