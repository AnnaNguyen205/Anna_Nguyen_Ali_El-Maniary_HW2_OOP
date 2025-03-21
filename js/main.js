import {Game} from './Game.js';
import {Player, TitleHolder, Participant} from './Player.js';

// ===============================
// === ICONIC PLAYERS  =======
// ===============================

// Zinedine Zidane
const zizou = new TitleHolder(
    "Zinedine Zidane",
    "Nickname: Zizou",
    "images/Iconic/Zidane.jpg",
    126, 14, 5
  );
  
  // Roberto Carlos
  const carlos = new Participant(
    "Roberto Carlos",
    "Nickname: El Hombre ",
    "images/Iconic/roberto-carlos.webp",
    131, 22, 11
  );
  
  
  // ===============================
  // ======== LEGENDS ==============
  // ===============================
  
  // Cristiano Ronaldo AKA CR7
  const cr7 = new TitleHolder(
    "CR7",
    "Nickname: EL BICHO",
    "images/Legends/Ronaldo.png.webp",
    923, 39, 9
  );
  
  // Gareth Bale
  const bale = new Participant(
    "BALE",
    "Nickname: El Golfer",
    "images/Legends/BALE.png.webp",
    181, 16, 9
  );
  
  
  // ===============================
  // ======== GREAT ================
  // ===============================
  
  // Vini Jr
  const vini = new TitleHolder(
    "VINI-JR",
    "Nickname: Pajaro Loco",
    "images/Great/VINI-JR-v2.png",
    62, 7, 5
  );
  
  // Rodrygo
  const rodyrgo = new Participant(
    "RODYRGO",
    "Nickname: El Rayo",
    "images/Great/rodyrgo.png",
    45, 6, 4
  );
  
  
  // ===============================
  // === MATCHING PLAYERS TO GAMES ==
  // ===============================
  
  // Iconic Players Game
  const IconicPlayers = new Game("Iconic Players");
  IconicPlayers.addPlayer(zizou);
  IconicPlayers.addPlayer(carlos);
  
  // Legends Game
  const Legends = new Game("LEGENDS");
  Legends.addPlayer(cr7);
  Legends.addPlayer(bale);
  
  // Great Game
  const Great = new Game("Great");
  Great.addPlayer(vini);
  Great.addPlayer(rodyrgo);
  
  
  // ===============================
  // === DROPDOWN & PLAYER LIST ====
  // ===============================
  
  const gameSelect = document.querySelector("#game-select");
  const listPlayersContainer = document.querySelector("#list-players");
  
  const games = [IconicPlayers, Legends, Great];
  
  // Add games to dropdown
  games.forEach(game => {
    game.addToDropdown(gameSelect);
  });
  
  // Initial render (Iconic Players by default)
  IconicPlayers.renderGamePlayers(listPlayersContainer);
  
  
  // ===============================
  // === GAME CHANGE FUNCTION ======
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
  
  