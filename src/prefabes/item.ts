const item=new Entity("item");
item.addComponent(new Animator());


const items=[{name:"car1",price:10,img:"red"},{name:"car2",price:10,img:"violet"},{name:"truck",price:20,img:"truck"},{name:"bus",price:30,img:"bus"}]
export function Item(machine,i)
{
    //if(curentitem!=null)
    //log(machine.ui)
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
    item.addComponentOrReplace(
        new OnPointerDown((e) => {
            openExternalURL("https://docs.decentraland.org")
        })
      )
}

