class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.cardCount = 1;
        this.arrCardDistribute = []
    }

    popupOpen(targetName) {
        targetName.visible = true;
        this.oScene.tweens.add({
            targets: targetName,
            scaleX: { from: 0, to: 1 },
            scaleY: { from: 0, to: 1 },
            duration: 200,
            ease: 'Linear',
        })
    }
    popupClose(targetName) {
        this.oScene.tweens.add({
            targets: targetName,
            scaleX: { from: 1, to: 0 },
            scaleY: { from: 1, to: 0 },
            duration: 200,
            ease: 'Linear',
            onComplete: () => {
                targetName.visible = false;
            }
        })
    }

    musicOnAnimation(targetName) {
        this.oScene.tweens.add({
            targets: targetName,
            x: { from: targetName.x, to: targetName.x + 24 },
            duration: 100,
            ease: 'Linear'
        })
    }

    musicOffAnimation(targetName) {
        this.oScene.tweens.add({
            targets: targetName,
            x: { from: targetName.x, to: targetName.x - 24 },
            duration: 100,
            ease: 'Linear'
        })
    }

    roundAeroDefault() {

        if (this.roundAreoReverseTween !== undefined) {
            this.roundAreoReverseTween.remove()
            this.oScene.round_aero.destroy();
        }

        this.oScene.round_aero = this.oScene.add.image(0, 0, "round-aero");
        this.oScene.roundAeroContainer.add(this.oScene.round_aero);
        this.oScene.round_aero.setScale(0.3, 0.3);
        this.oScene.round_aero.setAlpha(0.5);

        this.roundAeroTween = this.oScene.tweens.add({
            targets: this.oScene.round_aero,
            duration: 2000,
            ease: 'Linear',
            angle: 180,
            loop: -1
        })
    }
    roundAreoReverse() {

        if (this.roundAeroTween !== undefined) {
            this.roundAeroTween.remove();
            this.oScene.round_aero.destroy();
        }

        this.oScene.round_aero = this.oScene.add.image(0, 0, "round-aero");
        this.oScene.roundAeroContainer.add(this.oScene.round_aero);
        this.oScene.round_aero.setScale(0.3, -0.3);
        this.oScene.round_aero.setAlpha(0.5);

        this.roundAreoReverseTween = this.oScene.tweens.add({
            targets: this.oScene.round_aero,
            duration: 2000,
            ease: 'Linear',
            angle: -180,
            loop: -1
        })
    }

    reverseTurn(oData) {

        let reverseCard = this.oScene.add.image(400, 260, "reverse");
        reverseCard.setScale(0.25);


        this.oScene.tweens.add({
            targets: reverseCard,
            scaleX: { from: 0.05, to: 0.25 },
            scaleY: { from: 0.05, to: 0.25 },
            duration: 1000,
            completeDelay: 1000,
            onComplete: () => {
                reverseCard.destroy();
            }
        })

        if (oData.bTurnClockwise) {
            this.roundAeroDefault();
        }
        else {
            this.roundAreoReverse();
        }
    };

    cardDistribute(data) {
        this.cardDistributeData = data
        this.cardDistributeAnimation(data);
    }

    skipCardAnimation(oData) {
        let skipCard = this.oScene.add.image(400, 260, "skip-blue");
        skipCard.setScale(0.25);

        this.currentPlayerTurn = oData.iPlayerId;
        this.playerPrefab = this.oScene.oPlayerManager.playerPrefab

        let posX, posY;

        for (let i = 0; i < this.playerPrefab.length; i++) {
            console.log(this.playerPrefab[i], oData.iPlayerId);
            if (this.playerPrefab[i].name === this.currentPlayerTurn) {
                posX = this.playerPrefab[i].x
                posY = this.playerPrefab[i].y
                break;
            }
        }

        this.oScene.tweens.add({
            targets: skipCard,
            x: posX,
            y: posY,
            scaleX: 0.05,
            scaleY: 0.05,
            duration: 1000,
            completeDelay: 1000,
            onComplete: () => {
                skipCard.destroy();
            }
        })
    }

    cardDistributeAnimation(data) {
        let card = this.oScene.add.image(341, 280, "draw4-card");
        card.scaleX = 0.13;
        card.scaleY = 0.13;

        let ownY = 510;

        this.oScene.cardGroupContainer.add(card)

        this.oScene.cardGroupContainer.x = (800 - ((this.oScene.cardGroupContainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
        this.oScene.tweens.add({
            targets: card,
            // x: ownX + (this.cardCount * 25),
            x: this.oScene.cardGroupContainer.getAll().length * this.oScene.oGameManager.cardGap,
            y: ownY,
            duration: 210,
            onComplete: () => {
                this.oScene.cardGroupContainer.x = (800 - ((this.oScene.cardGroupContainer.getAll().length - 1) * this.oScene.oGameManager.cardGap)) / 2;
                if (this.cardCount !== this.cardDistributeData.aHand.length) {
                    this.cardCount++;
                    this.cardDistributeAnimation();
                }
                else {
                    this.oScene.oCardManager.setPlayerHand(this.cardDistributeData);
                    this.oScene.cardGroupContainer.removeAll(true);
                }
            }
        })

    }

}