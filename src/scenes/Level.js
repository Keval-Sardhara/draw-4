
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
		const background = this.add.image(0, 41, "background");
		background.scaleX = 0.42;
		background.scaleY = 0.555;
		backgroundContainer.add(background);

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

		// roundAeroContainer
		const roundAeroContainer = this.add.container(400, 260);

		// round_aero
		const round_aero = this.add.image(0, 0, "round-aero");
		round_aero.scaleX = 0.3;
		round_aero.scaleY = 0.3;
		round_aero.visible = false;
		round_aero.alpha = 0.5;
		round_aero.alphaTopLeft = 0.5;
		round_aero.alphaTopRight = 0.5;
		round_aero.alphaBottomLeft = 0.5;
		round_aero.alphaBottomRight = 0.5;
		roundAeroContainer.add(round_aero);

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

		// discardPileTopCardContainer
		const discardPileTopCardContainer = this.add.container(0, 0);
		discardPileTopCardContainer.name = "discardPileTopCardContainer";

		// playerHandcontainer
		const playerHandcontainer = this.add.container(0, 0);
		playerHandcontainer.name = "playerHandcontainer";

		// tempCardContainer
		const tempCardContainer = this.add.container(0, 1);

		// isPlayableCardContainer
		const isPlayableCardContainer = this.add.container(0, 0);
		isPlayableCardContainer.visible = false;

		// bgRact
		const bgRact = this.add.rectangle(398, 404, 128, 128);
		bgRact.scaleX = 1.8;
		bgRact.scaleY = 0.4;
		bgRact.isFilled = true;
		bgRact.fillColor = 8745195;
		bgRact.strokeColor = 8745195;
		isPlayableCardContainer.add(bgRact);

		// play_butten
		const play_butten = this.add.image(320, 406, "green butten");
		play_butten.scaleX = 0.25;
		play_butten.scaleY = 0.25;
		isPlayableCardContainer.add(play_butten);

		// keep_butten
		const keep_butten = this.add.image(475, 406, "red botten");
		keep_butten.scaleX = 0.25;
		keep_butten.scaleY = 0.25;
		isPlayableCardContainer.add(keep_butten);

		// keepTxt
		const keepTxt = this.add.text(318, 405, "", {});
		keepTxt.scaleX = 0.6;
		keepTxt.scaleY = 0.6;
		keepTxt.setOrigin(0.5, 0.5);
		keepTxt.text = "Keep";
		keepTxt.setStyle({ "fontSize": "20px" });
		isPlayableCardContainer.add(keepTxt);

		// playTxt
		const playTxt = this.add.text(476, 405, "", {});
		playTxt.scaleX = 0.6;
		playTxt.scaleY = 0.6;
		playTxt.setOrigin(0.5, 0.5);
		playTxt.text = "Play";
		playTxt.setStyle({ "fontSize": "20px" });
		isPlayableCardContainer.add(playTxt);

		// playableContainer
		const playableContainer = this.add.container(0, 0);
		isPlayableCardContainer.add(playableContainer);

		// wildCardColorContainer
		const wildCardColorContainer = this.add.container(0, -1);
		wildCardColorContainer.visible = false;

		// yellowBtn
		const yellowBtn = this.add.rectangle(367, 227, 128, 128);
		yellowBtn.scaleX = 0.5;
		yellowBtn.scaleY = 0.5;
		yellowBtn.isFilled = true;
		yellowBtn.fillColor = 15523331;
		wildCardColorContainer.add(yellowBtn);

		// greenBtn
		const greenBtn = this.add.rectangle(367, 293, 128, 128);
		greenBtn.scaleX = 0.5;
		greenBtn.scaleY = 0.5;
		greenBtn.isFilled = true;
		greenBtn.fillColor = 107069;
		wildCardColorContainer.add(greenBtn);

		// blueBtn
		const blueBtn = this.add.rectangle(434, 227, 128, 128);
		blueBtn.scaleX = 0.5;
		blueBtn.scaleY = 0.5;
		blueBtn.isFilled = true;
		blueBtn.fillColor = 1443558;
		wildCardColorContainer.add(blueBtn);

		// redBtn
		const redBtn = this.add.rectangle(434, 293, 128, 128);
		redBtn.scaleX = 0.5;
		redBtn.scaleY = 0.5;
		redBtn.isFilled = true;
		redBtn.fillColor = 13697795;
		wildCardColorContainer.add(redBtn);

		// cardGroupContainer
		const cardGroupContainer = this.add.container(325, 0);

		// winnerContainer
		const winnerContainer = this.add.container(0, 0);
		winnerContainer.visible = false;

		// winnerBackground
		const winnerBackground = this.add.image(400, 300, "background");
		winnerBackground.scaleX = 0.42;
		winnerBackground.scaleY = 0.555;
		winnerContainer.add(winnerBackground);

		// text_1
		const text_1 = this.add.text(400, 67, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "GAME OVER";
		text_1.setStyle({ "fontSize": "42px" });
		winnerContainer.add(text_1);

		// text_2
		const text_2 = this.add.text(400, 211, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Rank";
		text_2.setStyle({ "fontSize": "25px" });
		winnerContainer.add(text_2);

		// coinbg
		const coinbg = this.add.image(400, 519, "coinbg");
		coinbg.scaleX = 0.7;
		coinbg.scaleY = 0.7;
		coinbg.tintFill = true;
		coinbg.tintTopLeft = 11498742;
		coinbg.tintTopRight = 11498742;
		coinbg.tintBottomLeft = 11498742;
		coinbg.tintBottomRight = 11498742;
		winnerContainer.add(coinbg);

		// text_3
		const text_3 = this.add.text(400, 519, "", {});
		text_3.setOrigin(0.5, 0.5);
		text_3.text = "Home";
		winnerContainer.add(text_3);

		// txtRank
		const txtRank = this.add.text(400, 170, "", {});
		txtRank.setOrigin(0.5, 0.5);
		txtRank.text = "1";
		txtRank.setStyle({ "fontSize": "45px" });
		winnerContainer.add(txtRank);

		// winnerTitleContainer
		const winnerTitleContainer = this.add.container(400, 260);
		winnerContainer.add(winnerTitleContainer);

		// winnerTitleBackgound
		const winnerTitleBackgound = this.add.rectangle(0, 0, 128, 128);
		winnerTitleBackgound.scaleX = 6;
		winnerTitleBackgound.scaleY = 0.27;
		winnerTitleBackgound.alpha = 0.4;
		winnerTitleBackgound.isFilled = true;
		winnerTitleBackgound.fillColor = 0;
		winnerTitleContainer.add(winnerTitleBackgound);

		// txtNumberTitle
		const txtNumberTitle = this.add.text(-335, 0, "", {});
		txtNumberTitle.setOrigin(0.5, 0.5);
		txtNumberTitle.text = "No.";
		winnerTitleContainer.add(txtNumberTitle);

		// txtNameTitle
		const txtNameTitle = this.add.text(-243, 0, "", {});
		txtNameTitle.setOrigin(0, 0.5);
		txtNameTitle.text = "Name";
		winnerTitleContainer.add(txtNameTitle);

		// txtScoreTitle
		const txtScoreTitle = this.add.text(86, 0, "", {});
		txtScoreTitle.setOrigin(0.5, 0.5);
		txtScoreTitle.text = "Score";
		winnerTitleContainer.add(txtScoreTitle);

		// txtPrizeTitle
		const txtPrizeTitle = this.add.text(332, 0, "", {});
		txtPrizeTitle.setOrigin(0.5, 0.5);
		txtPrizeTitle.text = "Prize";
		winnerTitleContainer.add(txtPrizeTitle);

		this.backgroundContainer = backgroundContainer;
		this.draw_button = draw_button;
		this.draw4_button = draw4_button;
		this.draw4_card = draw4_card;
		this.icon_08 = icon_08;
		this.roundAeroContainer = roundAeroContainer;
		this.round_aero = round_aero;
		this.playerProfileContainer = playerProfileContainer;
		this.ownPlayerProfile = ownPlayerProfile;
		this.playerProfile_2 = playerProfile_2;
		this.playerProfile_3 = playerProfile_3;
		this.playerProfile_4 = playerProfile_4;
		this.discardPileTopCardContainer = discardPileTopCardContainer;
		this.playerHandcontainer = playerHandcontainer;
		this.tempCardContainer = tempCardContainer;
		this.cardGroupContainer = cardGroupContainer;
		this.winnerContainer = winnerContainer;
		this.txtRank = txtRank;
		this.txtNumberTitle = txtNumberTitle;
		this.txtNameTitle = txtNameTitle;
		this.txtScoreTitle = txtScoreTitle;
		this.txtPrizeTitle = txtPrizeTitle;
		this.isPlayableCardContainer = isPlayableCardContainer;
		this.bgRact = bgRact;
		this.play_butten = play_butten;
		this.keep_butten = keep_butten;
		this.keepTxt = keepTxt;
		this.playTxt = playTxt;
		this.playableContainer = playableContainer;
		this.wildCardColorContainer = wildCardColorContainer;
		this.yellowBtn = yellowBtn;
		this.greenBtn = greenBtn;
		this.blueBtn = blueBtn;
		this.redBtn = redBtn;

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
	roundAeroContainer;
	/** @type {Phaser.GameObjects.Image} */
	round_aero;
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
	discardPileTopCardContainer;
	/** @type {Phaser.GameObjects.Container} */
	playerHandcontainer;
	/** @type {Phaser.GameObjects.Container} */
	tempCardContainer;
	/** @type {Phaser.GameObjects.Container} */
	cardGroupContainer;
	/** @type {Phaser.GameObjects.Container} */
	winnerContainer;
	/** @type {Phaser.GameObjects.Text} */
	txtRank;
	/** @type {Phaser.GameObjects.Text} */
	txtNumberTitle;
	/** @type {Phaser.GameObjects.Text} */
	txtNameTitle;
	/** @type {Phaser.GameObjects.Text} */
	txtScoreTitle;
	/** @type {Phaser.GameObjects.Text} */
	txtPrizeTitle;
	isPlayableCardContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	bgRact;
	/** @type {Phaser.GameObjects.Image} */
	play_butten;
	/** @type {Phaser.GameObjects.Image} */
	keep_butten;
	/** @type {Phaser.GameObjects.Text} */
	keepTxt;
	/** @type {Phaser.GameObjects.Text} */
	playTxt;
	/** @type {Phaser.GameObjects.Container} */
	playableContainer;
	/** @type {Phaser.GameObjects.Container} */
	wildCardColorContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	yellowBtn;
	/** @type {Phaser.GameObjects.Rectangle} */
	greenBtn;
	/** @type {Phaser.GameObjects.Rectangle} */
	blueBtn;
	/** @type {Phaser.GameObjects.Rectangle} */
	redBtn;

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
		this.oTweenManager = new TweenManager(this);

	}
	reqDrawCard() {
		console.log("onClickdrawCard")
		this.oSocketManager.socket.emit(this.oGameManager.iBattleId, {
			sTaskName: "reqDrawCard", oData: {}
		}, (error, data) => {
			console.warn("Requested Card", error, data);
		})
	}
	sendDiscardPileCard(discardcard) {
		console.log(discardcard);
		this.oSocketManager.socket.emit(this.oGameManager.iBattleId, {
			sTaskName: "reqDiscardCard", oData: { iCardId: discardcard }
		}, (error, data) => {
			console.warn("dropCard Card", error, data);
		})
	}
	sendWildCardColor(color) {
		console.log("color", color);
		this.wildCardColorContainer.visible = false;
		this.oSocketManager.socket.emit(this.oGameManager.iBattleId, {
			sTaskName: "reqSetWildCardColor", oData: { eColor: color }
		}, (error, data) => {
			console.warn("reqSetWildCardColor", error, data);
		})
	}
	requestForDraw4() {
		this.oSocketManager.socket.emit(this.oGameManager.iBattleId, {
			sTaskName: "reqUno", oData: {}
		}, (error, data) => {
			console.warn("reqUno", error, data);
		})
	}

	showResultScreen(oData) {
		this.winnerContainer.visible = true;
		let resultData = oData.aPlayer;

		resultData.sort((a, b) => a.nRank - b.nRank);
		console.log("%c Result Data sort by Rank", "background: white; color: black;", resultData);

		for (let i = 0; i < resultData.length; i++) {
			this.winnerPrefab = this.add.existing(new WinnerPrefab(this, 400, 294 + (i * 34)));
			this.winnerContainer.add(this.winnerPrefab);
			this.winnerPrefab.setWinnerData(resultData[i])
			this.winnerPrefab.txtNumber.setText(i + 1);
			if (resultData[i].iPlayerId === this.oGameManager.ownPlayerId) {
				this.winnerPrefab.setOwnBackground();
				this.txtRank.setText(resultData[i].nRank)
			}
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
