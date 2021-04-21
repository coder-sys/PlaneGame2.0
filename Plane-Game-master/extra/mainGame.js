class  Game{
    constructor(){
    this.index=-1
    this.gameIndex=0
}
    gameIteration=function(){
        if(numplayers>1){
        if(gameState===1){
            let i = 400
            for(let index=0;index<numplayers;index++){
              planes.push(new Plane(230,i))
              i -= 100
            }
            for(let numPlanes=0;numPlanes<planes.length;numPlanes++){
                planes[numPlanes].appear()
            }
            for(let indexvalue in allPlayers){
                if(allPlayers[indexvalue].name===formobj.input.value()){
                if(keyDown(UP_ARROW)){
                    database.ref('players/'+formobj.input.value()).update({
                        'static':false
                    })
                    let staticref = database.ref('players/'+formobj.input.value())
                    staticref.on('value',function (data){
                        staticvalue = data.val().static
                    })
                    Matter.Body.setStatic(planes[this.gameIndex-1].body,staticvalue)

            }
            
        }
        this.gameIndex+=1

    }

}
}
}
}