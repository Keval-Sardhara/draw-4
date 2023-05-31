
// You can write more code here

/* START OF COMPILED CODE */

class WinnerPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// winnerTextBackground
		const winnerTextBackground = scene.add.rectangle(0, 0, 128, 128);
		winnerTextBackground.scaleX = 6;
		winnerTextBackground.scaleY = 0.27;
		winnerTextBackground.alpha = 0.4;
		winnerTextBackground.isFilled = true;
		winnerTextBackground.fillColor = 0;
		this.add(winnerTextBackground);

		// txtNumber
		const txtNumber = scene.add.text(-335, 0, "", {});
		txtNumber.setOrigin(0.5, 0.5);
		this.add(txtNumber);

		// txtName
		const txtName = scene.add.text(-243, 0, "", {});
		txtName.setOrigin(0, 0.5);
		this.add(txtName);

		// txtScore
		const txtScore = scene.add.text(86, 0, "", {});
		txtScore.setOrigin(0.5, 0.5);
		this.add(txtScore);

		// txtPrize
		const txtPrize = scene.add.text(332, 0, "", {});
		txtPrize.setOrigin(0.5, 0.5);
		this.add(txtPrize);

		this.winnerTextBackground = winnerTextBackground;
		this.txtNumber = txtNumber;
		this.txtName = txtName;
		this.txtScore = txtScore;
		this.txtPrize = txtPrize;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	winnerTextBackground;
	/** @type {Phaser.GameObjects.Text} */
	txtNumber;
	/** @type {Phaser.GameObjects.Text} */
	txtName;
	/** @type {Phaser.GameObjects.Text} */
	txtScore;
	/** @type {Phaser.GameObjects.Text} */
	txtPrize;

	/* START-USER-CODE */

	// Write your code here.
	setWinnerData(oData) {
		this.txtName.text = oData.sUserName.length !== 0 ? oData.sUserName : oData.sMobile.substring(0, 4) + "****";
		this.txtPrize.text = oData.nPrize === undefined ? '0' : oData.nPrize;
		this.txtScore.text = oData.nScore;
	}

	setOwnBackground() {
		this.winnerTextBackground.fillColor = 11498742;
		this.winnerTextBackground.setAlpha(1);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
