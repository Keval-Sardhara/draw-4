class InputManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.oScene.draw_button.setInteractive().on('pointerdown' , () => {
            this.oScene.reqDrawCard();
        })
        this.oScene.icon_08.setInteractive().on('pointerdown', () => {
        this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBattleId, {sTaskName: "reqLeave", oData : {}})
        window.close();
        })
    }
    
}