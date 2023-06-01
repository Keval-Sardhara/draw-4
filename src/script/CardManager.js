class CardManager {
    constructor(oScene) {
        this.oScene = oScene;
    }

    //setcards on PlayerHand
    setPlayerHand(data) {
        let nPlayerCard = 0;
               
        for (let i = 0; i < data.aHand.length; i++) {
            this.tempCard = this.oScene.add.existing(new CardPrefab(this.oScene, (this.oScene.playerHandcontainer.getAll().length * this.oScene.oGameManager.cardGap), 510));
            this.tempCard.cardImage.setTexture("card-" + data.aHand[nPlayerCard].eColor + "-" + data.aHand[nPlayerCard].nLabel);
            this.tempCard.setName(data.aHand[nPlayerCard].iCardId);
            this.oScene.playerHandcontainer.add(this.tempCard);
            nPlayerCard++;
        }
        this.oScene.playerHandcontainer.x = (800 - ((this.oScene.playerHandcontainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
    }
    // setCard on discardPile
    setDiscardPileTopCard(data) {
        this.tempDiscardCard = this.oScene.add.existing(new CardPrefab(this.oScene, 400, 265));
        this.tempDiscardCard.cardImage.setTexture("card-" + data.eColor + "-" + data.nLabel);
        this.tempDiscardCard.setName(data.iCardId);
        this.oScene.discardPileTopCardContainer.add(this.tempDiscardCard);
        console.log(this.oScene.discardPileTopCardContainer);
    }
    // setcard on hand
    setDrawCard(data) {
        let cards = data.oData.aCard;
        console.log("from Card Manager :::", cards);
        if(data.oData.bIsPlayable){
            this.oScene.isPlayableCardContainer.visible = true;
            for (let i = 0; i < cards.length; i++) {
            this.tempCard1 = this.oScene.add.existing(new CardPrefab(this.oScene, 385 , 404));
            this.tempCard1.setScale(0.3);
            this.tempCard1.cardImage.setTexture("card-" + cards[i].eColor + "-" + cards[i].nLabel);
            this.tempCard1.setName(cards[i].iCardId);
            }
        }else{
            this.setCardonHand(cards);
            this.oScene.playerHandcontainer.x = (800 - ((this.oScene.playerHandcontainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
        }
    }
    setCardonHand(cards){
        for (let i = 0; i < cards.length; i++) {
            this.tempCard1 = this.oScene.add.existing(new CardPrefab(this.oScene, (this.oScene.playerHandcontainer.getAll().length * this.oScene.oGameManager.cardGap), 510));
            this.tempCard1.cardImage.setTexture("card-" + cards[i].eColor + "-" + cards[i].nLabel);
            this.tempCard1.setName(cards[i].iCardId);
            this.oScene.playerHandcontainer.add(this.tempCard1);
        }
    }
    setPlayableCards(data) {
        this.oScene.playerHandcontainer.list.forEach((card, i) => {
            if (data.aPlayableCards.includes(card.name)) {
                card.setInteractive();
                card.setDepth(1);
                card.setY(card.y - 5);
            } else {
                card.disableInteractive();
            }
        })
    }
    arrangeHandCardPosition() {
        let i = 0;
        this.oScene.playerHandcontainer.getAll().forEach(card => {
            card.setPosition((i++ * this.oScene.oGameManager.cardGap), 510);
        })
        // 800 scene width...
        this.oScene.playerHandcontainer.x = (800 - ((this.oScene.playerHandcontainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;

    }
}