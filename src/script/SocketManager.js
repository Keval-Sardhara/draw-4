class SocketManager {
    constructor(oScene) {
        this.sRootUrl = "https://uno-backend.lc.webdevprojects.cloud/";
        this.oScene = oScene;
        this.iBattleId = oScene.iBattleId
        this.sPlayerID = oScene.sPlayerID
        this.sAuthToken = oScene.sAuthToken
        this.nTotalPlayerCount = oScene.nTotalPlayerCount
        this.sPlayerName = oScene.sPlayerName
        this.sMobile = oScene.sMobile
        // this.oResDiscardPileTopCard;

        this.socket = io();
        console.log('this.socket', this.socket)
        this.socket = io(this.sRootUrl, {
            transports: ['polling'],
            auth: {
                i_battle_id: this.iBattleId,
                i_player_id: this.sPlayerID,
                s_auth_token: this.sAuthToken,
                nTotalPlayerCount: this.nTotalPlayerCount,
                s_player_name: this.sPlayerName,
                b_reconnect: false,
                s_mobile: this.sMobile,
                s_user_name: this.sPlayerName
            }
        });
        this.socket.on('connect', (data) => {
            console.log("Connected to Socket :: ", this.socket.id);
        });
        console.log("BattelId :", this.iBattleId);
        this.socket.emit("reqTableJoin", {
            i_battle_id: this.iBattleId
        }, (data, error) => {
            console.log("Event Emitted!", error, data);
            this.oScene.oGameManager.ownPlayerId = data.oData.iPlayerId;
            this.oScene.oGameManager.iBattleId = data.oData.iBattleId;
            this.oScene.oGameManager.totalPlayerCount = this.nTotalPlayerCount;
            this.oScene.oGameManager.sPlayerName = this.sPlayerName;
            this.oScene.oPlayerManager.setTotalPlayer(this.oScene.oGameManager.totalPlayerCount);
            this.oScene.oPlayerManager.setOwnPlayer();
        });

        this.socket.on(this.iBattleId, (data) => {
            this.onReceiveData(data);
        })
        this.onReceiveData = (data1) => {
            const data = JSON.parse(data1);
            switch (data.sTaskName) {
                case "resTableState":
                    console.log("resTableState :", data);
                    this.oScene.oTweenManager.roundAeroDefault();
                    this.oScene.oPlayerManager.setPlayers(data.oData);
                    break;
                case "resHand":
                    console.log("resHand :", data);
                    this.oScene.oTweenManager.cardDistribute(data.oData);
                    break;
                case "resDiscardPileTopCard":
                    console.log("resDiscardPileTopCard :", data);
                    this.oScene.oCardManager.setDiscardPileTopCard(data.oData.oDiscardPileTopCard);
                case "resDrawCard":
                    console.log("resDrawCard:", data);
                    this.oScene.oCardManager.setDrawCard(data)
                    break;
                case "resInitMasterTimer":
                    console.log("resInitMasterTimer:", data);
                    break;
                case "resTurnTimer":
                    console.log("resTurnTimer:", data);
                    this.oScene.oPlayerManager.changePlayerTurn(data.oData);
                    break;
                case "resTurnMissed":
                    console.log("resTurnMissed:", data);
                    break;
                case "resDiscardPile":
                    console.log("resDiscardPile:", data);
                    this.oScene.oCardManager.setDiscardPileTopCard(data.oData.oCard);
                    break;
                case "resPlayerLeft":
                    console.log("resPlayerLeft:", data);
                    break;
                case "resGameStatistics":
                    console.log("resGameStatistics:", data);
                    break;
                case "resGameOver":
                    console.log("resGameOver:", data);
                    this.oScene.showResultScreen(data.oData);
                    break;
                case "playerDisconnected":
                    console.log("playerDisconnected:", data);
                    break;
                default:
                    console.log("%c New Event !!!!!!", "background: red; ", data.sTaskName, data);
                    break;
            }


        }
    }
}