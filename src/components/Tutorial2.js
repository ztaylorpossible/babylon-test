import React, { Component } from 'react';
import { Scene } from 'react-babylonjs';
import Babylon from 'babylonjs';

export default class Tutorial2 extends Component {

  onSceneMount = e => {
    const { canvas, scene, engine } = e

    canvas.width = 640;
    canvas.height = 480;

    var camera = new Babylon.ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 8, 50,
      Babylon.Vector3.Zero(),
      scene);
    camera.attachControl(canvas, true);

    var light = new Babylon.HemisphericLight("hemi", new Babylon.Vector3(0, 1, 0), scene);

    var box = Babylon.Mesh.CreateBox("box", 6.0, scene);
    var sphere = Babylon.Mesh.CreateSphere("sphere", 10.0, 10.0, scene);
    var plane = Babylon.Mesh.CreatePlane("plane", 10.0, scene, false, Babylon.Mesh.DOUBLESIDE);
    var cylinder = Babylon.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, scene);
    var torus = Babylon.Mesh.CreateTorus("torus", 5, 1, 10, scene);
    var knot = Babylon.Mesh.CreateTorusKnot("knot", 2, 0.5, 128, 64, 2, 3, scene);
    var lines = Babylon.Mesh.CreateLines("lines", [
      new Babylon.Vector3(-10, 0, 0),
      new Babylon.Vector3(10, 0, 0),
      new Babylon.Vector3(0, 0, -10),
      new Babylon.Vector3(0, 0, 10)
    ], scene);

    var exponentialPath = function (p) {
  		var path = [];
  		for (var i = -10; i < 10; i++) {
  			path.push(new Babylon.Vector3(p, i, Math.sin(p / 3) * 5 * Math.exp(-(i - p) * (i - p) / 60) + i / 3));
  		}
  		return path;
  	};

    var arrayOfPaths = [];
  	for (var p = 0; p < 20; p++) {
  		arrayOfPaths[p] = exponentialPath(p);
  	}

    var ribbon = Babylon.Mesh.CreateRibbon("ribbon", arrayOfPaths, false, false, 0, scene, false, Babylon.Mesh.DOUBLESIDE);

    box.position = new Babylon.Vector3(-10, 0, 0);
    sphere.position = new Babylon.Vector3(0, 10, 0);
    plane.position.z = 10;
    cylinder.position.z = -10;
    torus.position.x = 10;
    knot.position.y = -10;
    ribbon.position = new Babylon.Vector3(-10, -10, 20);

    engine.runRenderLoop(() => {
      if (scene) {
        scene.render()
      }
    })
  }

  onMeshPicked = (mesh, scene) => {

  }

  render() {
    return (
      <div style={{marginLeft: '25%', marginTop: '5%'}}>
        <Scene
          onSceneMount={this.onSceneMount}
          onMeshPicked={this.onMeshPicked}
          visible={true} />
      </div>
    );
  }

}
