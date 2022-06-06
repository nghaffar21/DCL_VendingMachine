//import { BoxShape } from "node_modules/decentraland-ecs/dist/index";
import { Item } from "src/prefabes/item";
import { UIinfo } from "./UIinfo";
import * as utils from '@dcl/ecs-scene-utils'
const invisible=new Material()
invisible.albedoColor=new Color4(0,0,0,0)
let curentindex=0;




const machine = new Entity();
    machine.addComponent(new Animator());
    machine.getComponent(Animator).getClip("Plane.005Action").play();
    const handle = new AnimationState("Plane.006Action.002", { layer: 1 })
    handle.looping = false
    machine.getComponent(Animator).addClip(handle)
    machine.getComponent(Animator).addClip(handle);

const image=new Entity()


export function Machine(building)
{
    




    this.game=machine;
    machine.addComponent(new GLTFShape("models/machine.glb"))
    machine.setParent(building)
    this.ui= new UIinfo();
    //log(this.ui)
    const ui0=this.ui;
    this.changeImage=changeImage;

    let triggerBox = new utils.TriggerBoxShape(new Vector3(4,5,4))
    let truger=new utils.TriggerComponent(
        triggerBox, //shape
        {
          onCameraEnter : () => {
              ui0.show()
          },
          onCameraExit: () => {
              ui0.hide()
          }//,enableDebug:true
        } 
      )  
    machine.addComponent(truger)



    

 
    /*new Item(this,null);
    new Item(this,0);
    new Item(this,1);
    new Item(this,2);
    new Item(this,3);*/
    new Item(this,null);
    change(this,1);
    change(this,-1);
    buy(this);
} 

function change(machine,i)
{
    const box = new Entity()
    box.addComponentOrReplace(invisible);
    const transform = new Transform({
    position: new Vector3(-0.22, 1.6, i*0.32),
    rotation:  Quaternion.Euler(0, 0, 20),
    scale: new Vector3(0.2, 0.2, 0.15)
    })
    box.addComponent(new BoxShape())
    box.addComponent(transform)
    box.addComponent(
        new OnPointerDown((e) => {
            curentindex++;
            if(curentindex>3)
                curentindex=0;
            new Item(machine,curentindex);
        })
      )
    box.setParent(machine.game);
    
}

function buy(machine)
{
    const box = new Entity()
    box.addComponentOrReplace(invisible);
    const transform = new Transform({
    position: new Vector3(-0.5, 1.6, -0.52),
    rotation:  Quaternion.Euler(0, 0, 45),
    scale: new Vector3(0.1, 0.7, 0.1)
    })
    box.addComponent(new BoxShape())
    box.addComponent(transform)
    box.addComponent(
        new OnPointerDown((e) => {
            const clipSwim = new AnimationState("Plane.006Action.002", { layer: 0 })
            handle.play();
            machine.ui.buy(curentindex)
        })
      )
    box.setParent(machine.game);
    
}
function changeImage(item)
{
    image.addComponentOrReplace(new PlaneShape());
    image.addComponentOrReplace(new Transform(
        {
            position:new Vector3(0,2.3,0),
            rotation:Quaternion.Euler(180,90,0),
            scale: new Vector3(0.8,0.5,0.9)
        }))
    image.addComponentOrReplace(new Material());
    image.getComponent(Material).albedoTexture=new Texture("images/"+item+".jpeg")
    image.setParent(machine); 
}
