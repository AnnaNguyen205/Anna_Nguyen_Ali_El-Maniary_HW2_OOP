// ===============================
// ======== PLAYER BASE CLASS =====
// ===============================

class Player {
    constructor(name, role, image, wins) {
        this.name = name;
        this.role = role;
        this.image = image;
        this.wins = wins;
    }

    infoPlayers() {
        // Create player  container
        const playerItem = document.createElement("li");
        playerItem.classList.add("player-box");

        // ===== Image Section =====
        const div_image = document.createElement("div");
        div_image.classList.add("image_box");

        const imagePlayer = document.createElement("img");
        imagePlayer.classList.add("image-player");
        imagePlayer.src = this.image;

        div_image.appendChild(imagePlayer);
        playerItem.appendChild(div_image);

        // ===== Name Section =====
        const div_name = document.createElement("div");
        div_name.classList.add("box-name");

        const playerName = document.createElement("h3");
        playerName.textContent = this.name;

        div_name.appendChild(playerName);
        playerItem.appendChild(div_name);

        // ===== goal scored section =====
        const div_stats = document.createElement("div");
        div_stats.classList.add("stats-list");

        const roleSpan = document.createElement("span");
        roleSpan.textContent = `${this.role}`;
        div_stats.appendChild(roleSpan);

        const winsSpan = document.createElement("span");
        winsSpan.textContent = `Goal scored: ${this.wins}`;  // Changed
        div_stats.appendChild(winsSpan);

        playerItem.appendChild(div_stats);

        return playerItem;
    }
}


// ===============================
// ======== TITLE HOLDER CLASS ====
// ===============================

class TitleHolder extends Player {
    constructor(name, role, image, wins, trophies, contract) {
        super(name, role, image, wins);
        this.trophies = trophies;
        this.contract = contract;
    }

    // ===== Trophies Earns and Contract Year =====

    infoPlayers() {
        const playerItem = super.infoPlayers();
        const div_stats = playerItem.querySelector(".stats-list");

        const trophySpan = document.createElement("span");
        trophySpan.textContent = `Total Trophies: ${this.trophies}`;  // Changed
        div_stats.appendChild(trophySpan);

        const contractSpan = document.createElement("span");
        contractSpan.textContent = `Years Spent: ${this.contract}`;  // Changed
        div_stats.appendChild(contractSpan);

        return playerItem;
    }
}


// ===============================
// ======== PARTICIPANT CLASS =====
// ===============================

class Participant extends Player {
    constructor(name, role, image, wins, trophies, ratio) {
        super(name, role, image, wins);
        this.trophies = trophies;
        this.ratio = ratio;
    }

    infoPlayers() {
        const playerItem = super.infoPlayers();
        const div_stats = playerItem.querySelector(".stats-list");

        const trophySpan = document.createElement("span");
        trophySpan.textContent = `Total Trophies: ${this.trophies}`;  // Changed
        div_stats.appendChild(trophySpan);

        const ratioSpan = document.createElement("span");
        ratioSpan.textContent = `Years Spent: ${this.ratio}`;  // Changed
        div_stats.appendChild(ratioSpan);

        return playerItem;
    }
}

export {Player, TitleHolder, Participant};
