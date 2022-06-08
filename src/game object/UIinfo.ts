import * as ui from '@dcl/ui-scene-utils'
//const canvas = new UICanvas()
//canvas.hAlign='let'
//canvas.width=10; 
//const text = new UIText(canvas)
let prompt:ui.OkPrompt

export function UIinfo()
{
   
    //canvas.visible = false;
    this.text="welcom Nima \n Select a werable ";
    //text.value="welcom Nima \n Select a werable ";
    /*text.color=new Color4(1,0,0,0.8)
    text.fontSize=30
    text.hAlign="left"
    text.vAlign = "bottom" 
    text.positionX = 0
    text.positionY=80*/
    this.ItemInfo=function(item)
    { 
        if(item==null)
        this.text="welcom Nima \n Select a werable ";
        //text.value="welcom Nima \n Select a werable ";
        else
        {this.text = "name:"+item.name+"\nprice: "+item.price+"\npull handle to buy and pick up"
        //text.value = "name:"+item.name+"\nprice: "+item.price+"\npull handle to buy and pick up"
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
          //prompt.canvas=canvas;
        //prompt = new ui.CustomPrompt(ui.PromptStyles.DARKLARGE,500,100)
        //prompt.addText(this.text)
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
        prompt.background.vAlign="bottom"
    }
    this.hide=function()
    {
        //canvas.visible=false;
        prompt.close()
    }
    this.buy=function(item)
    { 
        //text.value = "go to someone with a halo and discuss the first \n NFT you ever collected , ask them about theirs. You have 10min. \nCome back to machine when Finished"
        this.text = "go to someone with a halo and discuss the first \n NFT you ever collected , ask them about theirs. You have 10min. \nCome back to machine when Finished"
        this.show(350)
    }
}
