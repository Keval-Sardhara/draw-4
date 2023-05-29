
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		let params = new URLSearchParams(location.search);
		this.iBattleId = params.get('iBattleId');
		this.sPlayerID = params.get('sPlayerID');
		this.sAuthToken = params.get('sAuthToken');
		this.nTotalPlayerCount = params.get('nTotalPlayerCount');
		this.sPlayerName = params.get('sPlayerName');
		this.sMobile = params.get('sMobile');
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// backgroundContainer
		const backgroundContainer = this.add.container(400, 259);

		// background
		const background = this.add.image(1, 42, "background");
		background.scaleX = 0.42;
		background.scaleY = 0.55;
		backgroundContainer.add(background);

		// round_aero
		const round_aero = this.add.image(0, 0, "round-aero");
		round_aero.scaleX = 0.3;
		round_aero.scaleY = 0.3;
		round_aero.alpha = 0.5;
		round_aero.alphaTopLeft = 0.5;
		round_aero.alphaTopRight = 0.5;
		round_aero.alphaBottomLeft = 0.5;
		round_aero.alphaBottomRight = 0.5;
		backgroundContainer.add(round_aero);

		// draw_button
		const draw_button = this.add.image(270, 95, "draw-button");
		draw_button.scaleX = 0.1;
		draw_button.scaleY = 0.1;
		backgroundContainer.add(draw_button);

		// draw4_button
		const draw4_button = this.add.image(-232, 95, "draw4-button");
		draw4_button.scaleX = 0.1;
		draw4_button.scaleY = 0.1;
		backgroundContainer.add(draw4_button);

		// draw4_card
		const draw4_card = this.add.image(267, 21, "draw4-card");
		draw4_card.scaleX = 0.13;
		draw4_card.scaleY = 0.13;
		backgroundContainer.add(draw4_card);

		// icon_08
		const icon_08 = this.add.image(347, -192, "icon-08");
		icon_08.scaleX = 0.5;
		icon_08.scaleY = 0.5;
		backgroundContainer.add(icon_08);

		// playerProfileContainer
		const playerProfileContainer = this.add.container(0, 0);
		playerProfileContainer.name = "playerProfileContainer";

		// ownPlayerProfile
		const ownPlayerProfile = new PlayerProfile(this, 400, 398);
		playerProfileContainer.add(ownPlayerProfile);

		// playerProfile_2
		const playerProfile_2 = new PlayerProfile(this, 200, 150);
		playerProfileContainer.add(playerProfile_2);

		// playerProfile_3
		const playerProfile_3 = new PlayerProfile(this, 400, 100);
		playerProfileContainer.add(playerProfile_3);

		// playerProfile_4
		const playerProfile_4 = new PlayerProfile(this, 600, 150);
		playerProfileContainer.add(playerProfile_4);

		// playerHandcontainer
		const playerHandcontainer = this.add.container(398, 465);
		playerHandcontainer.name = "playerHandcontainer";

		// discardPileTopCardContainer
		const discardPileTopCardContainer = this.add.container(400, 260);
		discardPileTopCardContainer.name = "discardPileTopCardContainer";

		// tempCardContainer
		const tempCardContainer = this.add.container(591, 408);

		this.backgroundContainer = backgroundContainer;
		this.draw_button = draw_button;
		this.draw4_button = draw4_button;
		this.draw4_card = draw4_card;
		this.icon_08 = icon_08;
		this.playerProfileContainer = playerProfileContainer;
		this.ownPlayerProfile = ownPlayerProfile;
		this.playerProfile_2 = playerProfile_2;
		this.playerProfile_3 = playerProfile_3;
		this.playerProfile_4 = playerProfile_4;
		this.playerHandcontainer = playerHandcontainer;
		this.discardPileTopCardContainer = discardPileTopCardContainer;
		this.tempCardContainer = tempCardContainer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	backgroundContainer;
	/** @type {Phaser.GameObjects.Image} */
	draw_button;
	/** @type {Phaser.GameObjects.Image} */
	draw4_button;
	/** @type {Phaser.GameObjects.Image} */
	draw4_card;
	/** @type {Phaser.GameObjects.Image} */
	icon_08;
	/** @type {Phaser.GameObjects.Container} */
	playerProfileContainer;
	/** @type {PlayerProfile} */
	ownPlayerProfile;
	/** @type {PlayerProfile} */
	playerProfile_2;
	/** @type {PlayerProfile} */
	playerProfile_3;
	/** @type {PlayerProfile} */
	playerProfile_4;
	/** @type {Phaser.GameObjects.Container} */
	playerHandcontainer;
	/** @type {Phaser.GameObjects.Container} */
	discardPileTopCardContainer;
	/** @type {Phaser.GameObjects.Container} */
	tempCardContainer;

	/* START-USER-CODE */

	// Write more your code here


	create() {

		this.editorCreate();
		this.oSocketManager = new SocketManager(this);
		this.oPlayerManager = new PlayerManager(this);
		this.oInputManager = new InputManager(this);
		this.oSoundManager = new SoundManager(this);
		this.oGameManager = new GameManager(this);
		this.oUiManager = new UiManager(this);
		this.oCardManager = new CardManager(this);
	}
	reqDrawCard() {
		console.log("onClickdrawCard")
		this.oSocketManager.socket.emit(this.oGameManager.iBattleId, {sTaskName: "reqDrawCard", oData : {}
		}, (error, data) => {
			console.warn("Requested Card", error, data);
		})
	}
	// this.oSocketManager.oRootSocketConn.emit(this.oSocketManager.iTableId, { sEventName: 'reqHitCard', oData: { iUserId: this.ownPlayerId, cardId: lastCard, sGroup: agroups, aCardId: allCards } }, (response, error) => {
	// 	console.log("------------>>>>>> sendCards ", response, error);
	// });
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
