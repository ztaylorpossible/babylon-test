import React, { Component } from 'react';
import { Scene } from 'react-babylonjs';
import Babylon from 'babylonjs';

class App extends Component {

  onSceneMount = e => {
    const { canvas, scene, engine } = e

    canvas.width = 640;
    canvas.height = 480;

    var camera = new Babylon.FreeCamera("camera1", new Babylon.Vector3(0, 5, -10), scene);
    camera.setTarget(Babylon.Vector3.Zero());
    camera.attachControl(canvas, false);

    var light = new Babylon.HemisphericLight("light1", new Babylon.Vector3(0, 1, 0), scene);
    light.intensity = .5;

    var sphere = Babylon.Mesh.CreateSphere("sphere1", 16, 2, scene);
    sphere.position.y = 1;

    var ground = Babylon.Mesh.CreateGround("ground1", 6, 6, 2, scene);

    console.log(canvas);
    console.log(scene);

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

export default App;
