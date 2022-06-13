import * as ui from '@dcl/ui-scene-utils'
let prompt:ui.OkPrompt
const messages=["go to someone with a halo and discuss the first \n NFT you ever collected , ask them about theirs. You have 10min. \nCome back to machine when Finished",
"you met 1 people , you got 10 halo points . Select another werable or pull bar to get a different task",
"look for the person who gave the most beautifull werable in the space and ask them to tell you it's story ",
"look for the person who gave the most beautifull werable in the space and ask them to tell you it's story "]
export function UIinfo()
{
   
    this.text="Welcom ! \n Select a wearable ";
    this.ItemInfo=function(item)
    { 
        if(item==null)
        this.text="Welcom ! \n Select a wearable ";
        else
        {this.text = "name:"+item.name+"\nprice: "+item.price+"\npull handle to buy and pick up"
        this.show()}
    } 
    this.show=function(height=0)
    {
        //canvas.visible=true;
        if(prompt!=null) 
        prompt.close()
       prompt=new ui.OkPrompt(
            this.text,
            () => {
              log(`accepted`)
            },
            'Ok',
            true
          )
        if(height!=0)
        {
            prompt.background.height=height
            prompt.button.vAlign="bottom"
            prompt.button.positionY=10
            prompt.text.vAlign="top" 
            prompt.text.positionY=-150
            prompt.closeIcon.vAlign="top" 
            prompt.closeIcon.positionY=-20
            //prompt.closeIcon.hAlign="right" 
        }
        prompt.background.vAlign="top"
        prompt.background.hAlign="right"
    }
    this.hide=function()
    {
        prompt.close()
    }
    this.buy=function(item,exist)
    { 
        log(exist)
        if(exist)
        {
            
            this.text = messages[Math.floor(Math.random()*(messages.length-1))]
            this.show(350)
        }
        else
        {
            this.text="click the item to buy"
            this.show()
        }
    }
}
