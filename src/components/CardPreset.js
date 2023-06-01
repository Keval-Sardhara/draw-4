
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class CardPreset extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__CardPreset"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.gameObject.setSize(65, 100)
		this.gameObjectPreset = this.gameObject.setInteractive();
		this.gameObjectPreset.input.cursor = "pointer";
		this.gameObjectPreset.on("pointerdown", (pointer) => {
			this.lastPosX = pointer.x;
			this.lastPosY = pointer.y;
			// let parentContainerName = this.gameObjectPreset.parentContainer.name;
			// this.handleParantContainerOperation(parentContainerName, this.gameObjectPreset);
			// console.log("handleParantContainerOperation",parentContainerName);
			this.gameObject.scene.oCardManager.arrangeHandCardPosition();
			this.gameObjectPreset.x = pointer.x;
			this.gameObjectPreset.y = pointer.y;
		});
		this.gameObjectPreset.on("pointerup", () => {

		});
		this.gameObjectPreset.on("drag", (pointer, dragX, dragY) => {
			this.gameObjectPreset.x = dragX;
			this.gameObjectPreset.y = dragY;
		});
		this.gameObjectPreset.on("dragend", (pointer, dragX, dragY) => {
			this.gameObjectPreset.x = pointer.x - dragX;
			this.gameObjectPreset.y = pointer.y - dragY;
			if (pointer.x >= 375 && pointer.y >= 225 && pointer.x <= 435 && pointer.y <= 305) {
				this.gameObject.scene.discardPileTopCardContainer.add(this.gameObjectPreset);
				console.log("discardCondtainer",this.gameObject.scene.discardPileTopCardContainer);
				this.discardCardId = this.gameObject.scene.discardPileTopCardContainer.list[this.gameObject.scene.discardPileTopCardContainer.list.length - 1].name;
				this.gameObject.scene.sendDiscardPileCard(this.discardCardId);
				this.gameObject.scene.oCardManager.arrangeHandCardPosition();
			} else {
				this.gameObjectPreset.setPosition(parseFloat(this.lastPosX), parseFloat(this.lastPosY));
				this.gameObject.scene.playerHandcontainer.add(this.gameObjectPreset);
				this.gameObjectPreset.scene.oCardManager.arrangeHandCardPosition();
			}
		})
		/* END-USER-CTR-CODE */
	}

	/** @returns {CardPreset} */
	static getComponent(gameObject) {
		return gameObject["__CardPreset"];
	}

	/** @type {Phaser.GameObjects.Container} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.
	handleParantContainerOperation(parentContainerName, cardObject) {
		switch (parentContainerName) {
			case "playerHandcontainer":
				this.gameObject.scene.playerHandcontainer.remove(cardObject);
				console.log("1", this.gameObject.scene.playerHandcontainer);
				break;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
