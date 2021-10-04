import React, { Component } from "react";
import {GlowParticle} from "./glowParticle";
import {Colors} from "./colors";

export class LinearCanvas extends Component {
    constructor(props) {
        super(props);
        this.canvas = null;

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalParticles = 15;
        this.particles = [];
        this.maxRadius = 90;
        this.minRadius = 40;
    }

    componentDidMount() {
        this.canvas = document.getElementById('test');
        this.context = this.canvas.getContext('2d');
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        window.requestAnimationFrame(() => this.animate());
        console.log(this.canvas);
    }

    resize () {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;

        this.context.scale(this.pixelRatio, this.pixelRatio);

        this.createParticles();
    }

    createParticles() {
        let curlColor = 0;
        this.particles = [];

        for (let i = 0; i < this.totalParticles; i++) {
            const item = new GlowParticle(
                Math.random() * this.stageWidth,
                Math.random() * this.stageHeight,
                Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
                Colors[curlColor],
                );

            if (++curlColor >= Colors.length) {
                curlColor = 0;
            }

            this.particles[i] = item;
        }
    }

    animate() {
        console.log('animate');
        window.requestAnimationFrame(this.animate.bind(this));

        this.context.clearRect(0,0, this.stageWidth, this.stageHeight);

        for (let i = 0; i < this.totalParticles; i++) {
            const item = this.particles[i];
            item.animate(this.context, this.stageWidth, this.stageHeight);
        }
    }

    render() {
        return <canvas id="test" />
    }
}

// window.onload = () => {
//     new LinearCanvas();
// }
