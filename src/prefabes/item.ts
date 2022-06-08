import { setTimeout } from "@dcl/ecs-scene-utils";

const item=new Entity("item");
item.addComponent(new Animator());


const items=[{name:"car1",price:10,img:"red",url:"https://market.decentraland.org/contracts/0x2691f0feaa0137af3edb3acaf83ca5d6a3cfdf32/items/0"},
{name:"car2",price:10,img:"violet",url:"https://market.decentraland.org/contracts/0x2691f0feaa0137af3edb3acaf83ca5d6a3cfdf32/items/0"},
{name:"truck",price:20,img:"truck",url:"https://market.decentraland.org/contracts/0x2691f0feaa0137af3edb3acaf83ca5d6a3cfdf32/items/0"},
{name:"bus",price:30,img:"bus",url:"https://market.decentraland.org/contracts/0x2691f0feaa0137af3edb3acaf83ca5d6a3cfdf32/items/0"}]
export function Item(machine,i)
{
    //if(curentitem!=null)
    //log(machine.ui)
    this.buy= function(i)
    {
        //setTimeout(2000,() => {
            openExternalURL(items[i].url)
         // });
    }
    if(i!=null)
    machine.ui.ItemInfo(items[i])
    else
    {
        i=0
        machine.ui.ItemInfo(null)
    }
    item.addComponentOrReplace(new GLTFShape("models/items/item"+(i+1)+".glb"));
    machine.changeImage(items[i].img);
    item.setParent(machine.game);
    try
    {
            const transform = new Transform({
            position: new Vector3(-0.3, 1.7, 0),
            rotation:  Quaternion.Euler(0, 0, 0),
            scale: new Vector3(0.2, 0.2, 0.2)
          })
          item.addComponent(transform)
        
    }
    catch (error) {
        
    }
    
    try {
        item.addComponent(new Animator());
    } catch (error) {
        
    }
    item.getComponent(Animator).getClip("Action").play();
    /*item.addComponentOrReplace(
        new OnPointerDown((e) => {
            openExternalURL("https://docs.decentraland.org")
        })
      )*/
}

