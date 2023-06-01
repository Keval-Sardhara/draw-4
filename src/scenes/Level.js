
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

		// btnMenuOpen
		const btnMenuOpen = this.add.image(343, -213, "btnCircle");
		btnMenuOpen.scaleX = 0.7;
		btnMenuOpen.scaleY = 0.7;
		backgroundContainer.add(btnMenuOpen);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(343, -217, 15, 2);
		rectangle_1.isFilled = true;
		backgroundContainer.add(rectangle_1);

		// rectangle
		const rectangle = this.add.rectangle(343, -213, 15, 2);
		rectangle.isFilled = true;
		backgroundContainer.add(rectangle);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(343, -209, 15, 2);
		rectangle_2.isFilled = true;
		backgroundContainer.add(rectangle_2);

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

		// isPlayBg
		const isPlayBg = this.add.rectangle(401, 408, 128, 128);
		isPlayBg.scaleX = 1.6;
		isPlayBg.scaleY = 0.34;
		isPlayBg.isFilled = true;
		isPlayBg.fillColor = 8745195;
		isPlayableCardContainer.add(isPlayBg);

		// play_butten
		const play_butten = this.add.image(331, 409, "green butten");
		play_butten.scaleX = 0.2;
		play_butten.scaleY = 0.2;
		isPlayableCardContainer.add(play_butten);

		// keep_butten
		const keep_butten = this.add.image(465, 408, "red botten");
		keep_butten.scaleX = 0.2;
		keep_butten.scaleY = 0.2;
		isPlayableCardContainer.add(keep_butten);

		// playTxt
		const playTxt = this.add.text(331, 409, "", {});
		playTxt.setOrigin(0.5, 0.5);
		playTxt.text = "Play";
		playTxt.setStyle({ "fontSize": "20" });
		isPlayableCardContainer.add(playTxt);

		// keepTxt
		const keepTxt = this.add.text(465, 407, "", {});
		keepTxt.setOrigin(0.5, 0.5);
		keepTxt.text = "keep";
		keepTxt.setStyle({ "fontSize": "20" });
		isPlayableCardContainer.add(keepTxt);

		// isPlayCardCont
		const isPlayCardCont = this.add.container(0, 0);
		isPlayableCardContainer.add(isPlayCardCont);

		// wildCardColorContainer
		const wildCardColorContainer = this.add.container(0, 0);
		wildCardColorContainer.visible = false;

		// blueBtn
		const blueBtn = this.add.rectangle(433, 291, 128, 128);
		blueBtn.scaleX = 0.5;
		blueBtn.scaleY = 0.5;
		blueBtn.isFilled = true;
		blueBtn.fillColor = 298212;
		wildCardColorContainer.add(blueBtn);

		// greenBtn
		const greenBtn = this.add.rectangle(368, 226, 128, 128);
		greenBtn.scaleX = 0.5;
		greenBtn.scaleY = 0.5;
		greenBtn.isFilled = true;
		greenBtn.fillColor = 375042;
		wildCardColorContainer.add(greenBtn);

		// yellowBtn
		const yellowBtn = this.add.rectangle(368, 291, 128, 128);
		yellowBtn.scaleX = 0.5;
		yellowBtn.scaleY = 0.5;
		yellowBtn.isFilled = true;
		yellowBtn.fillColor = 15655204;
		wildCardColorContainer.add(yellowBtn);

		// redBtn
		const redBtn = this.add.rectangle(433, 226, 128, 128);
		redBtn.scaleX = 0.5;
		redBtn.scaleY = 0.5;
		redBtn.isFilled = true;
		redBtn.fillColor = 16190219;
		wildCardColorContainer.add(redBtn);

		// cardGroupContainer
		const cardGroupContainer = this.add.container(0, 0);

		// popupContainer
		const popupContainer = this.add.container(400, 300);
		popupContainer.visible = false;

		// popup
		const popup = this.add.image(0, 0, "popup");
		popup.scaleX = 0.08;
		popup.scaleY = 0.08;
		popupContainer.add(popup);

		// popupCloseBtn
		const popupCloseBtn = this.add.image(90, -105, "closeBtn");
		popupCloseBtn.scaleX = 0.06;
		popupCloseBtn.scaleY = 0.06;
		popupContainer.add(popupCloseBtn);

		// text_4
		const text_4 = this.add.text(0, -95, "", {});
		text_4.setOrigin(0.5, 0.5);
		text_4.text = "SETTINGS";
		popupContainer.add(text_4);

		// quitGameBtn
		const quitGameBtn = this.add.image(46, 52, "btnCircle");
		quitGameBtn.scaleX = 0.7;
		quitGameBtn.scaleY = 0.7;
		popupContainer.add(quitGameBtn);

		// quitGameIcon
		const quitGameIcon = this.add.image(46, 52, "icon-08");
		quitGameIcon.scaleX = 0.2;
		quitGameIcon.scaleY = 0.2;
		quitGameIcon.tintFill = true;
		popupContainer.add(quitGameIcon);

		// infoBtn
		const infoBtn = this.add.image(47, -50, "btnCircle");
		infoBtn.scaleX = 0.7;
		infoBtn.scaleY = 0.7;
		popupContainer.add(infoBtn);

		// text_5
		const text_5 = this.add.text(-39, -50, "", {});
		text_5.setOrigin(0.5, 0.5);
		text_5.text = "INFO";
		text_5.setStyle({ "color": "#9100e2ff", "fontSize": "14px" });
		popupContainer.add(text_5);

		// text
		const text = this.add.text(-39, -16, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "SOUND";
		text.setStyle({ "color": "#9100e2ff", "fontSize": "14px" });
		popupContainer.add(text);

		// text_6
		const text_6 = this.add.text(-39, 18, "", {});
		text_6.setOrigin(0.5, 0.5);
		text_6.text = "MUSIC";
		text_6.setStyle({ "color": "#9100e2ff", "fontSize": "14px" });
		popupContainer.add(text_6);

		// text_7
		const text_7 = this.add.text(-39, 52, "", {});
		text_7.setOrigin(0.5, 0.5);
		text_7.text = "LEAVE";
		text_7.setStyle({ "color": "#9100e2ff", "fontSize": "14px" });
		popupContainer.add(text_7);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(47, -54, 3, 3);
		rectangle_3.isFilled = true;
		popupContainer.add(rectangle_3);

		// rectangle_4
		const rectangle_4 = this.add.rectangle(47, -48, 3, 7);
		rectangle_4.isFilled = true;
		popupContainer.add(rectangle_4);

		// coinbg_1
		const coinbg_1 = this.add.image(47, -16, "coinbg");
		coinbg_1.scaleX = 0.17;
		coinbg_1.scaleY = 0.2;
		popupContainer.add(coinbg_1);

		// musicBtn
		const musicBtn = this.add.image(36, -16, "btnCircle");
		musicBtn.scaleX = 0.5;
		musicBtn.scaleY = 0.5;
		popupContainer.add(musicBtn);

		// coinbg_2
		const coinbg_2 = this.add.image(48, 18, "coinbg");
		coinbg_2.scaleX = 0.17;
		coinbg_2.scaleY = 0.2;
		popupContainer.add(coinbg_2);

		// soundBtn
		const soundBtn = this.add.image(36, 18, "btnCircle");
		soundBtn.scaleX = 0.5;
		soundBtn.scaleY = 0.5;
		popupContainer.add(soundBtn);

		// winnerContainer
		const winnerContainer = this.add.container(0, 0);
		winnerContainer.visible = false;

		// winnerBackground
		const winnerBackground = this.add.image(402, 303, "background");
		winnerBackground.scaleX = 0.42;
		winnerBackground.scaleY = 0.555;
		winnerContainer.add(winnerBackground);

		// text_1
		const text_1 = this.add.text(400, 67, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "GAME OVER";
		text_1.setStyle({ "fontSize": "40px" });
		winnerContainer.add(text_1);

		// text_2
		const text_2 = this.add.text(400, 211, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "Rank";
		text_2.setStyle({ "fontSize": "30px" });
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

		// txtRank_1
		const txtRank_1 = this.add.text(409, 147, "", {});
		txtRank_1.setOrigin(0, 0.5);
		txtRank_1.text = "st";
		winnerContainer.add(txtRank_1);

		// txtRank
		const txtRank = this.add.text(400, 170, "", {});
		txtRank.setOrigin(0.5, 0.5);
		txtRank.text = "1";
		txtRank.setStyle({ "fontSize": "45px" });
		winnerContainer.add(txtRank);

		// winnerTitleContainer
		const winnerTitleContainer = this.add.container(400, 260);
		winnerContainer.add(winnerTitleContainer);

		// winnerTitleBackground
		const winnerTitleBackground = this.add.rectangle(0, 0, 128, 128);
		winnerTitleBackground.scaleX = 6;
		winnerTitleBackground.scaleY = 0.27;
		winnerTitleBackground.alpha = 0.4;
		winnerTitleBackground.isFilled = true;
		winnerTitleBackground.fillColor = 0;
		winnerTitleContainer.add(winnerTitleBackground);

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
		this.btnMenuOpen = btnMenuOpen;
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
		this.isPlayableCardContainer = isPlayableCardContainer;
		this.isPlayBg = isPlayBg;
		this.play_butten = play_butten;
		this.keep_butten = keep_butten;
		this.playTxt = playTxt;
		this.keepTxt = keepTxt;
		this.isPlayCardCont = isPlayCardCont;
		this.wildCardColorContainer = wildCardColorContainer;
		this.blueBtn = blueBtn;
		this.greenBtn = greenBtn;
		this.yellowBtn = yellowBtn;
		this.redBtn = redBtn;
		this.cardGroupContainer = cardGroupContainer;
		this.popupContainer = popupContainer;
		this.popupCloseBtn = popupCloseBtn;
		this.quitGameBtn = quitGameBtn;
		this.quitGameIcon = quitGameIcon;
		this.infoBtn = infoBtn;
		this.musicBtn = musicBtn;
		this.soundBtn = soundBtn;
		this.winnerContainer = winnerContainer;
		this.winnerBackground = winnerBackground;
		this.txtRank_1 = txtRank_1;
		this.txtRank = txtRank;
		this.winnerTitleBackground = winnerTitleBackground;
		this.txtNumberTitle = txtNumberTitle;
		this.txtNameTitle = txtNameTitle;
		this.txtScoreTitle = txtScoreTitle;
		this.txtPrizeTitle = txtPrizeTitle;

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
	btnMenuOpen;
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
	isPlayableCardContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	isPlayBg;
	/** @type {Phaser.GameObjects.Image} */
	play_butten;
	/** @type {Phaser.GameObjects.Image} */
	keep_butten;
	/** @type {Phaser.GameObjects.Text} */
	playTxt;
	/** @type {Phaser.GameObjects.Text} */
	keepTxt;
	/** @type {Phaser.GameObjects.Container} */
	isPlayCardCont;
	/** @type {Phaser.GameObjects.Container} */
	wildCardColorContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	blueBtn;
	/** @type {Phaser.GameObjects.Rectangle} */
	greenBtn;
	/** @type {Phaser.GameObjects.Rectangle} */
	yellowBtn;
	/** @type {Phaser.GameObjects.Rectangle} */
	redBtn;
	/** @type {Phaser.GameObjects.Container} */
	cardGroupContainer;
	/** @type {Phaser.GameObjects.Container} */
	popupContainer;
	/** @type {Phaser.GameObjects.Image} */
	popupCloseBtn;
	/** @type {Phaser.GameObjects.Image} */
	quitGameBtn;
	/** @type {Phaser.GameObjects.Image} */
	quitGameIcon;
	/** @type {Phaser.GameObjects.Image} */
	infoBtn;
	/** @type {Phaser.GameObjects.Image} */
	musicBtn;
	/** @type {Phaser.GameObjects.Image} */
	soundBtn;
	/** @type {Phaser.GameObjects.Container} */
	winnerContainer;
	/** @type {Phaser.GameObjects.Image} */
	winnerBackground;
	/** @type {Phaser.GameObjects.Text} */
	txtRank_1;
	/** @type {Phaser.GameObjects.Text} */
	txtRank;
	/** @type {Phaser.GameObjects.Rectangle} */
	winnerTitleBackground;
	/** @type {Phaser.GameObjects.Text} */
	txtNumberTitle;
	/** @type {Phaser.GameObjects.Text} */
	txtNameTitle;
	/** @type {Phaser.GameObjects.Text} */
	txtScoreTitle;
	/** @type {Phaser.GameObjects.Text} */
	txtPrizeTitle;

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
				switch (resultData[i].nRank) {
					case 1:
						this.txtRank_1.setText("st");
						break;
					case 2:
						this.txtRank_1.setText("nd");
						break;
					case 3:
						this.txtRank_1.setText("rd");
						break;
					case 4:
						this.txtRank_1.setText("th");
						break;
				}
			}
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
