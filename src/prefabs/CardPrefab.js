
// You can write more code here

/* START OF COMPILED CODE */

class CardPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// cardImage
		const cardImage = scene.add.sprite(0, 0, "card-blue-0");
		cardImage.scaleX = 0.2;
		cardImage.scaleY = 0.2;
		this.add(cardImage);

		// this (components)
		new CardPreset(this);

		this.cardImage = cardImage;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.oScene = scene;
		this.oScene.input.setDraggable(this);

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	cardImage;

	/* START-USER-CODE */

	// Write your code here.



	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
