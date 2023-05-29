class PlayerManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.playerPrefab = [this.oScene.ownPlayerProfile, this.oScene.playerProfile_2, this.oScene.playerProfile_3, this.oScene.playerProfile_4];
        this.playerList = new Map();

    }
    //check own player is in map or not
    //function call user join req  
    setOwnPlayer() {
         // player is not in map so add player
        if (!this.playerList.has(this.oScene.oGameManager.ownPlayerId)) {
            //add player in map
            this.addPlayer(this.oScene.oGameManager.ownPlayerId, this.oScene.oGameManager.sPlayerName)
            this.setOwnPlayerSeat(this.oScene.oGameManager.ownPlayerId, 0)
        }
    }
    addPlayer(id, name) {
        //set player with key and value
        this.playerList.set(id, name);
    }

    setOwnPlayerSeat(id, seatNo) {
        // check player in map
        if (this.playerList.has(id)) {
            this.playerPrefab[seatNo].setInfo(this.playerPrefab[seatNo], this.playerList.get(id))
        }
    }
    setOpponentPlayerSeat(id, seatNo) {
        if (this.playerList.has(id)) {
            this.playerPrefab[seatNo].setInfo(this.playerPrefab[seatNo], this.playerList.get(id))
        }
    }

    setPlayers(data) {
        let j = 1;
        for (let i = 0; i < data.aPlayer.length; i++) {
            if (!(this.playerList.has(data.aPlayer[i].iPlayerId)) && data.aPlayer[i].iPlayerId != this.oScene.oGameManager.ownPlayerId) {
                // console.log("data.aPlayer[i].iPlayerId",data.aPlayer[i].iPlayerId,data.aPlayer[i].nSeat);
                this.addPlayer(data.aPlayer[i].iPlayerId, data.aPlayer[i].sUserName)
                this.setOpponentPlayerSeat(data.aPlayer[i].iPlayerId, j++)
            }  
            else if (data.aPlayer[i].iPlayerId == this.oScene.oGameManager.ownPlayerId) {
            //     console.log("data.aPlayer[i].iPlayerId",data.aPlayer[i].iPlayerId,data.aPlayer[i].nSeat);
                this.addPlayer(data.aPlayer[i].iPlayerId, data.aPlayer[i].sUserName)
                this.setOwnPlayerSeat(data.aPlayer[i].iPlayerId, 0)
            }
        }
    }
    setTotalPlayer(totalPlayer) {
        if (totalPlayer == 2) {
            this.playerPrefab[1].x = 400;
            this.playerPrefab[1].y = 100;
            this.oScene.playerProfile_3.visible = false;
            this.oScene.playerProfile_4.visible = false;

        } else if (totalPlayer == 3) {


        } else if (totalPlayer == 4) {

        }
    }
    changePlayerTurn(playerTurnData){
        this.currentPlayerTurn = playerTurnData.iPlayerId;
        if(this.currentPlayerTurn ==  this.oScene.oGameManager.ownPlayerId){
            this.oScene.oGameManager.isOwnTurn = true;
            console.log("%c isOwnTurn"," color: green");
        }else{
            console.log("%c isOpponentTurn"," color: green");
        }
    }
    

}