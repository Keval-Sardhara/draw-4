class CardManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    setCardData(id,color,lable, x ,y, containerName) {
        this.tempCard1 = this.oScene.add.existing(new CardPrefab(this.oScene, x,y));
        this.tempCard1.cardId = id;
        this.tempCard1.cardColor = color;
        this.tempCard1.cardNumber = lable;
        this.tempCard1.cardImage.setTexture("card-"+color+"-"+lable);
        this.tempCard1.setName(id);
        containerName.add(this.tempCard1);
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
        this.oScene.playerHandcontainer.x = (800 - ((this.oScene.playerHandcontainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
    }
    setDiscardPileTopCard(data) {
        this.tempCard1 = this.oScene.add.existing(new CardPrefab(this.oScene, 400,265));
        this.tempCard1.cardImage.setTexture("card-"+data.eColor+"-"+data.nLabel);
        this.tempCard1.setName(data.iCardId);
        this.oScene.discardPileTopCardContainer.add(this.tempCard1);
        this.tempCard1.disableInteractive();
    }
    setDrawCard(data) {
        if (data.sTaskName == "resDiscardPileTopCard") {
            let cards = data.oData.oDiscardPileTopCard;
            this.setDiscardPileTopCard(cards)
        } else {
            let cards = data.oData.aCard;
            if (data.oData.bIsPlayable) {
                this.oScene.isPlayableCardContainer.visible = true;
                for (let i = 0; i < cards.length; i++) {
                    this.centerCard = this.oScene.add.existing(new CardPrefab(this.oScene, 398,404));
                    this.centerCard.cardImage.setTexture("card-" + cards[i].eColor +"-" + cards[i].nLabel);
                    this.centerCard.setName(cards[i].iCardId);
                    
                }
            } else {
                this.setCardonHand(cards);
                this.oScene.playerHandcontainer.x = (800 - ((this.oScene.playerHandcontainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
            }
        }
    }
    setCardonHand(cards) {
        for (let i = 0; i < cards.length; i++) {
            let posX = this.oScene.playerHandcontainer.getAll().length * this.oScene.oGameManager.cardGap;
            let PosY = 510;
            this.setCardData(cards[i].iCardId,cards[i].eColor,cards[i].nLabel,posX,PosY,this.oScene.playerHandcontainer)
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