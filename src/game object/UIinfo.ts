import * as ui from '@dcl/ui-scene-utils'
//const canvas = new UICanvas()
//const text = new UIText(canvas)
let prompt

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
    this.show=function()
    {
        //canvas.visible=true;
        prompt=new ui.OkPrompt(
            this.text,
            () => {
              log(`accepted`)
            },
            'Ok',
            true
          )
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
        this.show()
    }
}
