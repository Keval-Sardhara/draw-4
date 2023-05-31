let myCard = []
class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.cardCount = 1;
        this.arrCardDistribute = []
    }

    roundAeroDefault() {
        let roundAeroTween = this.oScene.tweens.add({
            targets: this.oScene.round_aero,
            duration: 1000,
            ease: 'Linear',
            angle: 180,
            loop: -1
        })
    }
    roundAreoReverse() {
        this.oScene.round_aero.setScale(0.3, -0.3)
        let roundAeroTween = this.oScene.tweens.add({
            targets: this.oScene.round_aero,
            duration: 1000,
            ease: 'Linear',
            angle: -180,
            loop: -1
        })
    }

    cardDistribute(data) {
        this.cardDistributeData = data
        this.cardDistributeAnimation(data);
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