//import { BoxShape } from "node_modules/decentraland-ecs/dist/index";
import { Item } from "src/prefabes/item";
let curentindex=1;
export function Machine(building)
{
    const machine = new Entity();
    machine.setParent(building)
    Item(machine,1);
    change(machine,1);
    change(machine,-1);
}

function change(machine,i)
{
    const box = new Entity()
    const transform = new Transform({
    position: new Vector3(0, 0.5, i*2),
    rotation:  Quaternion.Euler(0, 0, 0),
    scale: new Vector3(1, 1, 1)
    })
    box.addComponent(new BoxShape())
    box.addComponent(transform)
    box.addComponent(
        new OnPointerDown((e) => {
            curentindex++;
            if(curentindex>4)
                curentindex=1;
            Item(machine,curentindex);
        })
      )
    box.setParent(machine);
    
}
