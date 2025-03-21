import { Rank } from "./Rank.js";
import { Player, TitleHolder, Participant } from "./Player.js";
import { greensock } from "./gsapAnimate.js";

greensock();

// ===============================
// === ICONIC PLAYERS  =======
// ===============================

// Zinedine Zidane
const zizou = new TitleHolder(
  "Zinedine Zidane",
  "Nickname: Zizou",
  "images/Iconic/Zidane.jpg",
  126,
  14,
  5
);

// Roberto Carlos
const carlos = new Participant(
  "Roberto Carlos",
  "Nickname: El Hombre ",
  "images/Iconic/roberto-carlos.webp",
  131,
  22,
  11
);

// ===============================
// ======== LEGENDS ==============
// ===============================

// Cristiano Ronaldo AKA CR7
const cr7 = new TitleHolder(
  "CR7",
  "Nickname: EL BICHO",
  "images/Legends/Ronaldo.png.webp",
  923,
  39,
  9
);

// Gareth Bale
const bale = new Participant(
  "BALE",
  "Nickname: El Golfer",
  "images/Legends/BALE.png.webp",
  181,
  16,
  9
);

// ===============================
// ======== GREAT PLAYERS ========
// ===============================

// Vini Jr
const vini = new TitleHolder(
  "VINI-JR",
  "Nickname: Pajaro Loco",
  "images/Great/VINI-JR-v2.png",
  62,
  7,
  5
);

// Rodrygo
const rodyrgo = new Participant(
  "RODYRGO",
  "Nickname: El Rayo",
  "images/Great/rodyrgo.png",
  45,
  6,
  4
);

// ===============================
// === MATCHING PLAYERS TO RANKS ==
// ===============================

// Iconic Players Rank
const IconicPlayers = new Rank("Iconic Players");
IconicPlayers.addPlayer(zizou);
IconicPlayers.addPlayer(carlos);

// Legends Rank
const Legends = new Rank("LEGENDS");
Legends.addPlayer(cr7);
Legends.addPlayer(bale);

// Great Rank
const Great = new Rank("Great");
Great.addPlayer(vini);
Great.addPlayer(rodyrgo);

// ===============================
// === DROPDOWN & PLAYER LIST ====
// ===============================

const gameSelect = document.querySelector("#game-select");
const listPlayersContainer = document.querySelector("#list-players");

const games = [IconicPlayers, Legends, Great];

// Add games to dropdown
games.forEach((game) => {
  game.addToDropdown(gameSelect);
});

// Initial render (Iconic Players by default)
IconicPlayers.renderGamePlayers(listPlayersContainer);

// ===============================
// === RANK CHANGE FUNCTION ======
// ===============================

function changeGame() {
  const selectedGameName = gameSelect.value;
  let selectedGame;

  if (selectedGameName === "IconicPlayers") {
    selectedGame = IconicPlayers;
  } else if (selectedGameName === "Great") {
    selectedGame = Great;
  } else if (selectedGameName === "LEGENDS") {
    selectedGame = Legends;
  }

  if (selectedGame) {
    selectedGame.renderGamePlayers(listPlayersContainer);
  }
}

// ===============================
// === EVENT LISTENER ============
// ===============================

gameSelect.addEventListener("change", changeGame);
