class GameManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.ownPlayerId = "";
        this.iBattleId = "";
        this.totalPlayerCount = "";
        this.sPlayerName = "";
        this.isOwnTurn = false;
        this.cardGap = 25;
        this.bTurnClockwise = true;
    }
}