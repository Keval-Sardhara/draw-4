
// You can write more code here
/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class CardHover extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__CardHover"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {CardHover} */
	static getComponent(gameObject) {
		return gameObject["__CardHover"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.
	awek() {
		this.gameObject.setInteractive();
		this.scene.input.setDraggable(this.gameObject);
	
		this.gameObject.on("pointerdown" , (poiner) => {
			console.log("pointerdown");
			this.lastPosX = this.x;
			this.lastPosY = this.y;
		})
		this.gameObject.on("pointerup" , () => {
			console.log("pointerup");
		})
		this.scene.input.on("drag" , (pointer , gameObject , dragX , dragY) => {
			gameObject.x = dragX;
			gameObject.y = dragY;
		})

		this.scene.input.on("dragend", (pointer,gameObject) => {
			if(gameObject.x >= 375 && gameObject.y >= 225 && gameObject.x <= 435 && gameObject.y <= 305){
				
				
			}else{
				console.log("addHandCardContainer");
				gameObject.setPosition(parseFloat(this.lastPosX) , parseFloat(this.lastPosY));
				console.log(this.gameObject.scene.playerHandcontainer);
				this.gameObject.scene.playerHandcontainer.add(gameObject);
			}
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
