import React, { Component } from 'react';
import { Scene } from 'react-babylonjs';
import Babylon from 'babylonjs';

class App extends Component {

  onSceneMount = e => {
    const { canvas, scene, engine } = e

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
      <Scene
        onSceneMount={this.onSceneMount}
        onMeshPicked={this.onMeshPicked}
        visible={true} />
    );
  }
}

export default App;
