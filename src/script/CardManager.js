class CardManager {
    constructor(oScene) {
        this.oScene = oScene;
    }

    setPlayerHand(data) {
        let nPlayerCard = 0;
               
        for (let i = 0; i < data.aHand.length; i++) {
            this.tempCard = this.oScene.add.existing(new CardPrefab(this.oScene, (this.oScene.playerHandcontainer.getAll().length * this.oScene.oGameManager.cardGap), 510));
            this.tempCard.cardImage.setTexture("card-" + data.aHand[nPlayerCard].eColor + "-" + data.aHand[nPlayerCard].nLabel);
            this.tempCard.setName(data.aHand[nPlayerCard].iCardId);
            this.oScene.playerHandcontainer.add(this.tempCard);
            nPlayerCard++;
        }
        console.log(this.oScene.playerHandcontainer);
        this.oScene.playerHandcontainer.x = (800 - ((this.oScene.playerHandcontainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
    }
    setDiscardPileTopCard(data) {
        this.tempDiscardCard = this.oScene.add.existing(new CardPrefab(this.oScene, 400, 265));
        this.tempDiscardCard.cardImage.setTexture("card-" + data.eColor + "-" + data.nLabel);
        this.tempDiscardCard.setName(data.iCardId);
        this.oScene.discardPileTopCardContainer.add(this.tempDiscardCard);
    }
    setDrawCard(data) {
        if (data.sTaskName == "resDrawCard") {
            let cards = data.oData.aCard;
            console.log("from Card Manager :::", cards);
            for (let i = 0; i < cards.length; i++) {
                this.tempCard1 = this.oScene.add.existing(new CardPrefab(this.oScene, (this.oScene.playerHandcontainer.getAll().length * this.oScene.oGameManager.cardGap), 510));
                this.tempCard1.cardImage.setTexture("card-" + cards[i].eColor + "-" + cards[i].nLabel);
                this.tempCard1.setName(cards[i].iCardId);
                this.oScene.playerHandcontainer.add(this.tempCard1);
            }
            console.log(this.oScene.playerHandcontainer);
            this.oScene.playerHandcontainer.x = (800 - ((this.oScene.playerHandcontainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
        }
    }
    arrangeHandCardPosition() {
        console.log("arrange succesfully");
    }
}