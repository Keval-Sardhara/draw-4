class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
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
}