function mp(piece, color) { //make piece
	const p = {
		piece,
		color,
		whoAmI: function() {
			for (var i = 0; i < 8; i++) {
				for (var j = 0; j < 8; j++) {
					if (board.board[i][j] == this) {
						return [i,j];
					}
				}
			}
		},
		checkMovesChecks: function(available) {
			return available;
		}
	};
	if (piece == "P") { //Pawn
		p.checkMoves = function() {
			if (this.color == board.tour) {
				var location = this.whoAmI();
				var available = [];

				if (this.color == "white") {
					var multiplier = 1;
				}
				else {
					var multiplier = -1;
				}

				if (board.board[location[0]][location[1]+multiplier] == "") {
					available.push([location[0],location[1]+multiplier]);
					if (board.board[location[0]][location[1]+multiplier*2] == "" && this.color == "white" && location[1] == 1 || this.color == "black" && location[1] == 6) {
						available.push([location[0], location[1]+multiplier*2]);
					}
				}
				[1, -1].forEach(function(item, index) {
					if (location[0]+item >= 0 && location[0]+item <= 7) {
						if (board.board[location[0]+item][location[1]+multiplier] != "" && board.board[location[0]+item][location[1]+multiplier].color != p.color) {
							available.push([location[0]+item, location[1]+multiplier]);
						}
					}
				});
				return available;
			}
			else {
				return [];
			}
		};
	}
	else if (piece == "R") { //Rook
		p.checkMoves = function() {
			if (this.color == board.tour) {
				var location = this.whoAmI();
				var available = [];

				[[0,1],[0,-1],[1,0],[-1,0]].forEach(function(item, index) {
					for (var i = 1; true; i++) {
						var place = [location[0]+item[0]*i,location[1]+item[1]*i];
						if (place[0] < 0 || place[0] > 7 || place[1] < 0 || place[1] > 7) {
							break;
						}
						else
						{
							if (board.board[place[0]][place[1]] == "" || board.board[place[0]][place[1]].color != p.color) {
								available.push(place);
								if (board.board[place[0]][place[1]] != "" && board.board[place[0]][place[1]].color != p.color) {
									break;
								}
							}
							else {
								break;
							}
						}
					}
				});
				return available;
			}
			else {
				return [];
			}
		};
	}
	else if (piece == "Kt") { //Knight
		p.checkMoves = function() {
			if (this.color == board.tour) {
				var location = this.whoAmI();
				var available = [];

				[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[1,-2],[-1,2],[-1,-2]].forEach(function(item, index) {
					var place = [(location[0]+item[0]),(location[1]+item[1])];
					if (place[0] < 0 || place[0] > 7 || place[1] < 0 || place[1] > 7) {
						//
					}
					else {
						if (board.board[place[0]][place[1]] == "" || board.board[place[0]][place[1]].color != p.color) {
								available.push(place);
							}
					}
				});

				return available;
			}
			else {
				return [];
			}
		};
	}
	else if (piece == "B") { //Bishop
		p.checkMoves = function() {
			if (this.color == board.tour) {
				var location = this.whoAmI();
				var available = [];

				[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(function(item, index) {
					for (var i = 1; true; i++) {
						var place = [location[0]+item[0]*i,location[1]+item[1]*i];
						if (place[0] < 0 || place[0] > 7 || place[1] < 0 || place[1] > 7) {
							break;
						}
						else
						{
							if (board.board[place[0]][place[1]] == "" || board.board[place[0]][place[1]].color != p.color) {
								available.push(place);
								if (board.board[place[0]][place[1]] != "" && board.board[place[0]][place[1]].color != p.color) {
									break;
								}
							}
							else {
								break;
							}
						}
					}
				});

				return available;
			}
			else {
				return [];
			}
		};
	}
	else if (piece == "Q") { //Queen
		p.checkMoves = function() {
			if (this.color == board.tour) {
				var location = this.whoAmI();
				var available = [];

				[[1,1],[1,-1],[-1,1],[-1,-1],[0,1],[0,-1],[1,0],[-1,0]].forEach(function(item, index) {
					for (var i = 1; true; i++) {
						var place = [location[0]+item[0]*i,location[1]+item[1]*i];
						if (place[0] < 0 || place[0] > 7 || place[1] < 0 || place[1] > 7) {
							break;
						}
						else
						{
							if (board.board[place[0]][place[1]] == "" || board.board[place[0]][place[1]].color != p.color) {
								available.push(place);
								if (board.board[place[0]][place[1]] != "" && board.board[place[0]][place[1]].color != p.color) {
									break;
								}
							}
							else {
								break;
							}
						}
					}
				});

				return available;
			}
			else {
				return [];
			}
		};
	}
	else if (piece == "K") { //King
		p.checkMoves = function() {
			if (this.color == board.tour) {
				var location = this.whoAmI();
				var available = [];

				[[1,1],[1,-1],[-1,1],[-1,-1],[0,1],[0,-1],[1,0],[-1,0]].forEach(function(item, index) {
					var place = [location[0]+item[0],location[1]+item[1]];
					if (place[0] < 0 || place[0] > 7 || place[1] < 0 || place[1] > 7) {}
					else {
						if (board.board[place[0]][place[1]] == "" || board.board[place[0]][place[1]].color != p.color) {
							available.push(place);
						}
					}
				});
				[[1,0],[-1,0]].forEach(function(item, index) {
					for (var i = 1; true; i++) {
						var place = [location[0]+item[0]*i,location[1]+item[1]*i];
						if (place[0] < 0 || place[0] > 7 || place[1] < 0 || place[1] > 7) {
							break;
						}
						else
						{
							if (board.board[place[0]][place[1]].castle == 1) {
								available.push(place);
								available.push([location[0]+item[0]*2,location[1]+item[1]*2]);
								break;
							}
							else if (board.board[place[0]][place[1]] != "") {
								break;
							}
						}
					}

				});

				return available;
			}
			else {
				return [];
			}
		}; 
	}
	p.showMoves = function() {
		board.removeDots();

		var location = this.whoAmI();

		this.checkMoves().forEach(function(item, index) {
			document.getElementById(String.fromCharCode(item[0]+65)+(item[1]+1)).innerHTML += '<img src="pieces/dot.png" class="dot" onclick="board.board['+location[0]+']['+location[1]+'].move(['+item+'])">';
		});
	};
	p.move = function(to) {
		var location = this.whoAmI();
		if (this.piece == "K" || this.piece == "R") {
			if (this.piece == "K") {
				[0, 7].forEach(function(item, index) {
					if (board.board[item][location[1]].castle == 1) {
						board.board[item][location[1]].castle = 0;
					}
				});
			}
			else if (this.piece == "R") {
				if (board.board[location[0]][location[1]].castle == 1) {
					board.board[location[0]][location[1]].castle == 0;
				}
			}
		}
		if (this.piece == "K" && Math.abs(location[0] - to[0]) > 1) {
			board.board[location[0]][location[1]] = "";
			if ((location[0] - to[0]) > 1) {
				//big castle
				board.board[0][location[1]] = "";
				board.board[2][location[1]] = mp("K",this.color);
				board.board[3][location[1]] = mp("R",this.color);
				console.log("big castle");
			}
			else {
				//small castle
				board.board[7][location[1]] = "";
				board.board[6][location[1]] = mp("K",this.color);
				board.board[5][location[1]] = mp("R",this.color);
				console.log("small castle");
			}
		}
		else {
			board.board[to[0]][to[1]] = mp(this.piece, this.color);
			board.board[location[0]][location[1]] = "";
		}
		board.moves.push([location, to]);
		if (board.tour == "white") {
			board.tour = "black";
		}
		else {
			board.tour = "white";
		}
		board.draw();
	};

	return p;
}

const board = {
	board: [
		[mp("R","white"),mp("P","white"),"","","","",mp("P","black"),mp("R","black")],   //A (0)
		[mp("Kt","white"),mp("P","white"),"","","","",mp("P","black"),mp("Kt","black")], //B (1)
		[mp("B","white"),mp("P","white"),"","","","",mp("P","black"),mp("B","black")],   //C (2)
		[mp("Q","white"),mp("P","white"),"","","","",mp("P","black"),mp("Q","black")],   //D (3)
		[mp("K","white"),mp("P","white"),"","","","",mp("P","black"),mp("K","black")],   //E (4)
		[mp("B","white"),mp("P","white"),"","","","",mp("P","black"),mp("B","black")],   //F (5)
		[mp("Kt","white"),mp("P","white"),"","","","",mp("P","black"),mp("Kt","black")], //G (6)
		[mp("R","white"),mp("P","white"),"","","","",mp("P","black"),mp("R","black")]    //H (7)
	],
	tour: "white",
	moves: [],
	removeDots: function() {
		var elems = document.querySelectorAll(".dot");

		[].forEach.call(elems, function(el) {
			el.parentNode.removeChild(el);
		});
	},
	draw: function(color) {
		var newboard = "";
		if (color === undefined) {
			var color = this.tour;
		}
		for (var i = 0; i < 8; i++) {
			for (var j = 0; j < 8; j++) {
				if ((i*j%2 != 0) || ((i+1)*(j+1)%2 != 0)) {
					var col = "white";
				}
				else {
					var col = "black";
				}

				if (color == "white") {
					var x = j;   //0
					var y = 7-i; //7
					var checkFor = 0;
				}
				else {
					var x = 7-j; //7
					var y = i;   //0
					var checkFor = 7;
				}

				var content = '';

				if (x == checkFor) {
					content += '<span class="sign">'+(y+1)+'</span>';
				}
				else if (y == checkFor) {
					content += '<span class="sign">'+String.fromCharCode(x+65)+'</span>';
				}

				if (this.board[x][y] != "") {
					content += '<img src="pieces/'+this.board[x][y].color.charAt(0).toUpperCase()+"-"+this.board[x][y].piece+'.png" onclick="board.board['+x+']['+y+'].showMoves()" draggable="true">';
					var removeDots = '';
				}
				else {
					var removeDots = 'onclick="board.removeDots(); board.draw();"';
				}

				newboard += '<div id="'+String.fromCharCode(x+65)+(y+1)+'" class="'+col+'"'+removeDots+'>'+content+'</div>';
			}
			newboard += '<div style="clear: both;"></div>';
		}
		document.getElementById("board").innerHTML = newboard;
	},
	resetBoard: function() {
		this.board = [
			[mp("R","white"),mp("P","white"),"","","","",mp("P","black"),mp("R","black")],   //A (0)
			[mp("Kt","white"),mp("P","white"),"","","","",mp("P","black"),mp("Kt","black")], //B (1)
			[mp("B","white"),mp("P","white"),"","","","",mp("P","black"),mp("B","black")],   //C (2)
			[mp("Q","white"),mp("P","white"),"","","","",mp("P","black"),mp("Q","black")],   //D (3)
			[mp("K","white"),mp("P","white"),"","","","",mp("P","black"),mp("K","black")],   //E (4)
			[mp("B","white"),mp("P","white"),"","","","",mp("P","black"),mp("B","black")],   //F (5)
			[mp("Kt","white"),mp("P","white"),"","","","",mp("P","black"),mp("Kt","black")], //G (6)
			[mp("R","white"),mp("P","white"),"","","","",mp("P","black"),mp("R","black")]    //H (7)
		];
		this.moves = [];
		this.board[0][0].castle = 1;
		this.board[0][7].castle = 1;
		this.board[7][0].castle = 1;
		this.board[7][7].castle = 1;
		this.draw();
	}
}

window.onload = function() {
	board.resetBoard();
}