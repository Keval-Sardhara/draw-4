class CardManager {
    constructor(oScene) {
        this.oScene = oScene;

    }
    setPlayerHand(data) {
        let nPlayerCard = 0;
        for (let i = 0; i < data.aHand.length; i++) {
            const sTempCardName = "card-" + data.aHand[nPlayerCard].eColor + "-" + data.aHand[nPlayerCard].nLabel;
            const tempCard = this.oScene.add.image((this.oScene.playerHandcontainer.getAll().length * this.oScene.oGameManager.cardGap), 0, sTempCardName).setOrigin(0.5, 0).setScale(0.2, 0.2);
            this.oScene.playerHandcontainer.add(tempCard);
            tempCard.setName(data.aHand[nPlayerCard].iCardId);
            nPlayerCard++;
            new CardHover(tempCard).awek();
        }

        this.oScene.playerHandcontainer.x = (800 - ((this.oScene.playerHandcontainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
    }
    setDiscardPileTopCard(data) {
        const sTempCardName = "card-" + data.eColor + "-" + data.nLabel;
        const tempCard = this.oScene.add.image(0, 0, sTempCardName).setOrigin(0.5, 0.5).setScale(0.18, 0.18);
        this.oScene.discardPileTopCardContainer.add(tempCard);
        tempCard.setName(data.iCardId);
        console.log(tempCard);
    }
    setDrawCard(data) {
        if (data.sTaskName == "resDrawCard") {
                let cards = data.oData.aCard;
                console.log("from Card Manager :::", cards);
                for (let i = 0; i < cards.length; i++) {
                    const sTempCardName = "card-" + cards[i].eColor + "-" + cards[i].nLabel;
                    const tempCard = this.oScene.add.image(((this.oScene.playerHandcontainer.getAll().length) * this.oScene.oGameManager.cardGap), 0, sTempCardName).setOrigin(0.5, 0).setScale(0.2, 0.2);
                    this.oScene.playerHandcontainer.add(tempCard);
                    tempCard.setName(cards[i].iCardId);
                    new CardHover(tempCard).awek();
                }
                this.oScene.playerHandcontainer.x = (800 - ((this.oScene.playerHandcontainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
            }
    }
    arrangeHandCardPosition(){
        console.log("arrange succesfully");
    }
}