import { Machine } from "./game object/machine";


import * as utils from '@dcl/ecs-scene-utils'
import { getUserData } from "@decentraland/Identity"
let machine;
const box = new Entity()
function resolveAfter2Seconds() {
   return new Promise((resolve) => {
      setTimeout(() => {
       resolve('resolved');
      // log("res")
     },3000);
   });
 }
engine.addEntity(box)
executeTask(async () => {
 while(true)
{
   await resolveAfter2Seconds() 
     let data = await getUserData()
     let exist=false;
     //log(data.avatar.wearables)
   for (let y in data.avatar.wearables)
   {
      let x=data.avatar.wearables[y]
      //log(x)
      if(x=="urn:decentraland:matic:collections-v2:0x33aafaeae75ce60cf450430179f545762f1b9cf7:0")
      {
         exist=true;
         log("exiiiist")
      }
   }
   machine.exist=exist
   
}
 })
/*box.addComponent(
  new utils.Interval(1500, () => {
    
  })
)*/




export function Initialise(building)
{
  machine= new Machine(building);
}
