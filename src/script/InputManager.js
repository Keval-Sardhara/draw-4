class InputManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.oScene.draw_button.setInteractive().on('pointerdown', () => {
            this.oScene.reqDrawCard();
        })
        this.oScene.keep_butten.setInteractive().on('pointerdown', () => {
            this.oScene.isPlayableCardContainer.visible = false;
            this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBattleId, { sTaskName: "reqKeepCard", oData: {} })
        })
        this.oScene.play_butten.setInteractive().on('pointerdown', () => {
            this.oScene.isPlayableCardContainer.visible = false;

            this.oScene.sendDiscardPileCard();
        })
        this.oScene.redBtn.setInteractive().on('pointerdown', () => {
            let color = "red";
            this.oScene.sendWildCardColor(color);
        })
        this.oScene.blueBtn.setInteractive().on('pointerdown', () => {
            let color = "blue";
            this.oScene.sendWildCardColor(color);
        })
        this.oScene.greenBtn.setInteractive().on('pointerdown', () => {
            let color = "green";
            this.oScene.sendWildCardColor(color);
        })
        this.oScene.yellowBtn.setInteractive().on('pointerdown', () => {
            let color = "yellow";
            this.oScene.sendWildCardColor(color);
        })
        this.oScene.draw4_button.setInteractive().on('pointerdown', () => {
            this.oScene.requestForDraw4();
        })
        this.oScene.quitGameBtn.setInteractive().on('pointerdown', () => {
            this.oScene.oSocketManager.socket.emit(this.oScene.oGameManager.iBattleId, { sTaskName: "reqLeave", oData: {} })
            window.close();
        })
        this.oScene.btnMenuOpen.setInteractive().on('pointerdown', () => {
            this.oScene.oTweenManager.popupOpen(this.oScene.popupContainer)
        })
        this.oScene.popupCloseBtn.setInteractive().on('pointerdown', () => {
            this.oScene.oTweenManager.popupClose(this.oScene.popupContainer)
        })
        this.oScene.musicBtn.setInteractive().on('pointerdown', () => {
            this.oScene.oSoundManager.musicToggle(this.oScene.musicBtn);
        })
        this.oScene.soundBtn.setInteractive().on('pointerdown', () => {
            this.oScene.oSoundManager.soundToggle(this.oScene.soundBtn);
        })

        this.oScene.winnerBackground.setInteractive();
    }

}