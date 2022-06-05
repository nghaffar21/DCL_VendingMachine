import { Initialise } from "./initial";

const _scene = new Entity('_scene')
const transform = new Transform({
    position: new Vector3(0, 0, 8),
    rotation:  Quaternion.Euler(0, 0, 0),
    scale: new Vector3(1, 1, 1)
  })
  _scene.addComponent(transform)
//  _scene.addComponent(new GLTFShape("models/machine.glb"))
engine.addEntity(_scene);

Initialise(_scene);



