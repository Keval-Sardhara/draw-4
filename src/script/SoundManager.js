class SoundManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.bMusicPlay = false;
        this.bSoundPlay = false;
    }

    musicToggle(target) {
        if (this.bMusicPlay) {
            this.bMusicPlay = false;
            this.oScene.oTweenManager.musicOffAnimation(target)
        }
        else {
            this.bMusicPlay = true;
            this.oScene.oTweenManager.musicOnAnimation(target)
        }
    }
    soundToggle(target) {
        if (this.bSoundPlay) {
            this.bSoundPlay = false;
            this.oScene.oTweenManager.musicOffAnimation(target)
        }
        else {
            this.bSoundPlay = true;
            this.oScene.oTweenManager.musicOnAnimation(target)
        }
    }
}