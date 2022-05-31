const item=new Entity("item");
item.addComponent(new Animator());
export function Item(machine,i)
{
    //if(curentitem!=null)

    item.addComponentOrReplace(new GLTFShape("models/items/item"+i+".glb"));
    item.setParent(machine);
    try {
        const transform = new Transform({
            position: new Vector3(0, 0.5, 0),
            rotation:  Quaternion.Euler(0, 0, 0),
            scale: new Vector3(1, 1, 1)
          })
          machine.addComponent(transform)
        
    } catch (error) {
        
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