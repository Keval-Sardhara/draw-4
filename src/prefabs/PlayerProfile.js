
// You can write more code here

/* START OF COMPILED CODE */

class PlayerProfile extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// playerInfo
		const playerInfo = scene.add.container(0, 0);
		this.add(playerInfo);

		// txtPlayerName
		const txtPlayerName = scene.add.text(2, -42, "", {});
		txtPlayerName.setOrigin(0.5, 0.5);
		txtPlayerName.text = "New text";
		txtPlayerName.setStyle({ "align": "center", "fontSize": "12px" });
		playerInfo.add(txtPlayerName);

		// playerProfile
		const playerProfile = scene.add.container(0, 4);
		this.add(playerProfile);

		// player_bg
		const player_bg = scene.add.image(0, 0, "player-bg");
		player_bg.scaleX = 0.3;
		player_bg.scaleY = 0.3;
		playerProfile.add(player_bg);

		this.playerInfo = playerInfo;
		this.txtPlayerName = txtPlayerName;
		this.playerProfile = playerProfile;
		this.player_bg = player_bg;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.oScene = scene;
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

	/* START-USER-CODE */

	// Write your code here.


	setInfo(ownPlayer , playerName){
		ownPlayer.txtPlayerName.text = playerName;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
