
// You can write more code here

/* START OF COMPILED CODE */

class PlayerProfile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// playerInfo
		const playerInfo = scene.add.container(0, 1);
		this.add(playerInfo);

		// txtPlayerName
		const txtPlayerName = scene.add.text(2, -42, "", {});
		txtPlayerName.setOrigin(0.5, 0.5);
		txtPlayerName.text = "New text";
		txtPlayerName.setStyle({ "align": "center", "fontSize": "12px" });
		playerInfo.add(txtPlayerName);

		// profile_icon
		const profile_icon = scene.add.image(0, 0, "profile-icon");
		profile_icon.scaleX = 0.3;
		profile_icon.scaleY = 0.3;
		playerInfo.add(profile_icon);

		// playerProfile
		const playerProfile = scene.add.container(0, 6);
		this.add(playerProfile);

		// player_bg
		const player_bg = scene.add.image(0, 0, "player-bg");
		player_bg.scaleX = 0.27;
		player_bg.scaleY = 0.3;
		playerProfile.add(player_bg);

		// timer_ring
		const timer_ring = scene.add.image(0, 0, "timer-ring");
		timer_ring.scaleX = 0.31;
		timer_ring.scaleY = 0.29;
		this.add(timer_ring);

		this.playerInfo = playerInfo;
		this.txtPlayerName = txtPlayerName;
		this.playerProfile = playerProfile;
		this.player_bg = player_bg;
		this.timer_ring = timer_ring;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.oScene = scene;
		this.shape = this.oScene.add.graphics();
		this.shape.visible = false;

		const maskShape = this.shape.createGeometryMask();
		this.timer_ring.setMask(maskShape);
		this.shape.x = this.timer_ring.x;
		this.shape.y = this.timer_ring.y;
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	playerInfo;
	/** @type {Phaser.GameObjects.Text} */
	txtPlayerName;
	/** @type {Phaser.GameObjects.Container} */
	playerProfile;
	/** @type {Phaser.GameObjects.Image} */
	player_bg;
	/** @type {Phaser.GameObjects.Image} */
	timer_ring;

	/* START-USER-CODE */

	// Write your code here.


	setInfo(ownPlayer, playerName) {
		ownPlayer.txtPlayerName.text = playerName;
	}

	startTimerInit(x, y, data) {

		this.intervalTimeReset();

		this.timer_ring.visible = true

		// let nTime = data.nTotalTurnTime / 1000;
		let ttl = data.ttl / 1000;

		let start = 90;
		let end = 360 / ttl;
		let temp = end;


		// if (ttl != nTime) {
		// 	ttl = (data.nTotalTurnTime - data.ttl) / 1000;
		// 	end = ttl * 18;
		// }

		let self = this;
		this.intervalTimer = setInterval(() => {
			this.shape.slice(x, y, 128, Phaser.Math.DegToRad(start), Phaser.Math.DegToRad(start + end)).fill();
			if (end >= 270) {
				this.timer_ring.tintFill = true;
				this.timer_ring.setTintFill(0xaa0000);
			}
			if (end >= 360) {
				self.intervalTimeReset();
			}
			end += (temp / 10);
		}, 100)
	}

	intervalTimeReset() {
		this.shape.clear();
		this.timer_ring.clearTint();
		this.timer_ring.tintFill = false;
		this.timer_ring.visible = false
		clearInterval(this.intervalTimer);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
