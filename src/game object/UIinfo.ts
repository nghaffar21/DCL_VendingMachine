import * as ui from '@dcl/ui-scene-utils'
let prompt:ui.OkPrompt

export function UIinfo()
{
   
    this.text="welcom Nima \n Select a werable ";
    this.ItemInfo=function(item)
    { 
        if(item==null)
        this.text="welcom Nima \n Select a werable ";
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
    this.buy=function(item)
    { 
        if(false)
        {
            this.text = "go to someone with a halo and discuss the first \n NFT you ever collected , ask them about theirs. You have 10min. \nCome back to machine when Finished"
            this.show(350)
        }
        else
        {
            this.text="click the item to buy"
            this.show()
        }
    }
}
