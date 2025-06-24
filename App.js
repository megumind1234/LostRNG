// Wait for DOM ready
document.addEventListener("DOMContentLoaded", () => {
  // Your full character list (same as before, shortened here for brevity)
 const characters = [
  // Naruto
  { name: "Naruto Uzumaki", rarity: "Mythic", anime: "Naruto" },
  { name: "Sasuke Uchiha", rarity: "Legendary", anime: "Naruto" },
  { name: "Sakura Haruno", rarity: "Uncommon", anime: "Naruto" },
  { name: "Kakashi Hatake", rarity: "Epic", anime: "Naruto" },
  { name: "Itachi Uchiha", rarity: "Epic", anime: "Naruto" },

  // Demon Slayer
  { name: "Tanjiro Kamado", rarity: "Mythic", anime: "Demon Slayer" },
  { name: "Nezuko Kamado", rarity: "Mythic", anime: "Demon Slayer" },
  { name: "Zenitsu Agatsuma", rarity: "Rare", anime: "Demon Slayer" },
  { name: "Inosuke Hashibira", rarity: "Rare", anime: "Demon Slayer" },
  { name: "Kyojuro Rengoku", rarity: "Epic", anime: "Demon Slayer" },

  // Jujutsu Kaisen
  { name: "Yuji Itadori", rarity: "Mythic", anime: "Jujutsu Kaisen" },
  { name: "Megumi Fushiguro", rarity: "Uncommon", anime: "Jujutsu Kaisen" },
  { name: "Nobara Kugisaki", rarity: "Uncommon", anime: "Jujutsu Kaisen" },
  { name: "Gojo Satoru", rarity: "Mythic", anime: "Jujutsu Kaisen" },
  { name: "Toji Fushiguro", rarity: "Epic", anime: "Jujutsu Kaisen" },

  // One Piece
  { name: "Monkey D. Luffy", rarity: "Mythic", anime: "One Piece" },
  { name: "Roronoa Zoro", rarity: "Legendary", anime: "One Piece" },
  { name: "Nami", rarity: "Uncommon", anime: "One Piece" },
  { name: "Sanji", rarity: "Epic", anime: "One Piece" },
  { name: "Trafalgar D. Water Law", rarity: "Epic", anime: "One Piece" },

  // Bleach
  { name: "Ichigo Kurosaki", rarity: "Mythic", anime: "Bleach" },
  { name: "Rukia Kuchiki", rarity: "Uncommon", anime: "Bleach" },
  { name: "Uryu Ishida", rarity: "Uncommon", anime: "Bleach" },
  { name: "Toshiro Hitsugaya", rarity: "Epic", anime: "Bleach" },
  { name: "Kenpachi Zaraki", rarity: "Epic", anime: "Bleach" },

  // Attack on Titan
  { name: "Eren Yeager", rarity: "Mythic", anime: "Attack on Titan" },
  { name: "Mikasa Ackerman", rarity: "Legendary", anime: "Attack on Titan" },
  { name: "Armin Arlert", rarity: "Uncommon", anime: "Attack on Titan" },
  { name: "Levi Ackerman", rarity: "Legendary", anime: "Attack on Titan" },
  { name: "Erwin Smith", rarity: "Epic", anime: "Attack on Titan" },

  // Black Clover
  { name: "Asta", rarity: "Mythic", anime: "Black Clover" },
  { name: "Yuno", rarity: "Legendary", anime: "Black Clover" },
  { name: "Noelle Silva", rarity: "Uncommon", anime: "Black Clover" },
  { name: "Yami Sukehiro", rarity: "Epic", anime: "Black Clover" },
  { name: "Julius Novachrono", rarity: "Epic", anime: "Black Clover" },

  // That Time I Got Reincarnated as a Slime
  { name: "Rimuru Tempest", rarity: "Mythic", anime: "That Time I Got Reincarnated as a Slime" },
  { name: "Benimaru", rarity: "Uncommon", anime: "That Time I Got Reincarnated as a Slime" },
  { name: "Milim Nava", rarity: "Epic", anime: "That Time I Got Reincarnated as a Slime" },
  { name: "Shion", rarity: "Uncommon", anime: "That Time I Got Reincarnated as a Slime" },
  { name: "Veldora Tempest", rarity: "Epic", anime: "That Time I Got Reincarnated as a Slime" },

  // Death Note
  { name: "Light Yagami", rarity: "Mythic", anime: "Death Note" },
  { name: "L", rarity: "Legendary", anime: "Death Note" },
  { name: "Misa Amane", rarity: "Uncommon", anime: "Death Note" },
  { name: "Ryuk", rarity: "Epic", anime: "Death Note" },
  { name: "Near", rarity: "Epic", anime: "Death Note" },

  // Solo Leveling
  { name: "Sung Jin-Woo", rarity: "Mythic", anime: "Solo Leveling" },
  { name: "Igris", rarity: "Uncommon", anime: "Solo Leveling" },
  { name: "Beru", rarity: "Uncommon", anime: "Solo Leveling" },
  { name: "Cha Hae-In", rarity: "Uncommon", anime: "Solo Leveling" },
  { name: "Go Gun-Hee", rarity: "Epic", anime: "Solo Leveling" },

  // My Hero Academia
  { name: "Izuku Midoriya", rarity: "Mythic", anime: "My Hero Academia" },
  { name: "Katsuki Bakugo", rarity: "Legendary", anime: "My Hero Academia" },
  { name: "Shoto Todoroki", rarity: "Legendary", anime: "My Hero Academia" },
  { name: "All Might", rarity: "Mythic", anime: "My Hero Academia" },
  { name: "Endeavor", rarity: "Epic", anime: "My Hero Academia" },

  // Tokyo Ghoul
  { name: "Ken Kaneki", rarity: "Mythic", anime: "Tokyo Ghoul" },
  { name: "Touka Kirishima", rarity: "Uncommon", anime: "Tokyo Ghoul" },
  { name: "Rize Kamishiro", rarity: "Epic", anime: "Tokyo Ghoul" },
  { name: "Juuzou Suzuya", rarity: "Uncommon", anime: "Tokyo Ghoul" },
  { name: "Shuu Tsukiyama", rarity: "Uncommon", anime: "Tokyo Ghoul" },

  // Fullmetal Alchemist
  { name: "Edward Elric", rarity: "Mythic", anime: "Fullmetal Alchemist" },
  { name: "Alphonse Elric", rarity: "Legendary", anime: "Fullmetal Alchemist" },
  { name: "Roy Mustang", rarity: "Epic", anime: "Fullmetal Alchemist" },
  { name: "Winry Rockbell", rarity: "Uncommon", anime: "Fullmetal Alchemist" },
  { name: "Scar", rarity: "Epic", anime: "Fullmetal Alchemist" },

  // Hunter x Hunter
  { name: "Gon Freecss", rarity: "Mythic", anime: "Hunter x Hunter" },
  { name: "Killua Zoldyck", rarity: "Legendary", anime: "Hunter x Hunter" },
  { name: "Kurapika", rarity: "Epic", anime: "Hunter x Hunter" },
  { name: "Leorio", rarity: "Uncommon", anime: "Hunter x Hunter" },
  { name: "Hisoka", rarity: "Epic", anime: "Hunter x Hunter" },

  // Sword Art Online
  { name: "Kirito", rarity: "Mythic", anime: "Sword Art Online" },
  { name: "Asuna", rarity: "Legendary", anime: "Sword Art Online" },
  { name: "Sinon", rarity: "Uncommon", anime: "Sword Art Online" },
  { name: "Leafa", rarity: "Uncommon", anime: "Sword Art Online" },
  { name: "Yuuki", rarity: "Epic", anime: "Sword Art Online" },

  // Fairy Tail
  { name: "Natsu Dragneel", rarity: "Mythic", anime: "Fairy Tail" },
  { name: "Lucy Heartfilia", rarity: "Uncommon", anime: "Fairy Tail" },
  { name: "Gray Fullbuster", rarity: "Uncommon", anime: "Fairy Tail" },
  { name: "Erza Scarlet", rarity: "Legendary", anime: "Fairy Tail" },
  { name: "Happy", rarity: "Common", anime: "Fairy Tail" },

  // One Punch Man
  { name: "Saitama", rarity: "Mythic", anime: "One Punch Man" },
  { name: "Genos", rarity: "Rare", anime: "One Punch Man" },
  { name: "Speed-o'-Sound Sonic", rarity: "Uncommon", anime: "One Punch Man" },
  { name: "Tatsumaki", rarity: "Epic", anime: "One Punch Man" },
  { name: "Bang", rarity: "Epic", anime: "One Punch Man" },

  // Mob Psycho 100
  { name: "Mob", rarity: "Mythic", anime: "Mob Psycho 100" },
  { name: "Reigen Arataka", rarity: "Epic", anime: "Mob Psycho 100" },
  { name: "Dimple", rarity: "Uncommon", anime: "Mob Psycho 100" },
  { name: "Teruki Hanazawa", rarity: "Uncommon", anime: "Mob Psycho 100" },
  { name: "Ritsu Kageyama", rarity: "Uncommon", anime: "Mob Psycho 100" },

  // Chainsaw Man
  { name: "Denji", rarity: "Mythic", anime: "Chainsaw Man" },
  { name: "Makima", rarity: "Legendary", anime: "Chainsaw Man" },
  { name: "Power", rarity: "Epic", anime: "Chainsaw Man" },
  { name: "Aki Hayakawa", rarity: "Uncommon", anime: "Chainsaw Man" },
  { name: "Kishibe", rarity: "Epic", anime: "Chainsaw Man" },

  // Blue Lock
  { name: "Isagi Yoichi", rarity: "Epic", anime: "Blue Lock" },
  { name: "Rin Itoshi", rarity: "Epic", anime: "Blue Lock" },
  { name: "Bachira Meguru", rarity: "Rare", anime: "Blue Lock" },
  { name: "Nagi Seishiro", rarity: "Rare", anime: "Blue Lock" },
  { name: "Barou Shoei", rarity: "Rare", anime: "Blue Lock" },

  // Dr. Stone
  { name: "Senku Ishigami", rarity: "Legendary", anime: "Dr. Stone" },
  { name: "Chrome", rarity: "Uncommon", anime: "Dr. Stone" },
  { name: "Kohaku", rarity: "Uncommon", anime: "Dr. Stone" },
  { name: "Tsukasa Shishio", rarity: "Epic", anime: "Dr. Stone" },
  { name: "Gen Asagiri", rarity: "Rare", anime: "Dr. Stone" },

  // Boruto
  { name: "Boruto Uzumaki", rarity: "Epic", anime: "Boruto" },
  { name: "Sarada Uchiha", rarity: "Uncommon", anime: "Boruto" },
  { name: "Mitsuki", rarity: "Uncommon", anime: "Boruto" },
  { name: "Kawaki", rarity: "Legendary", anime: "Boruto" },
  { name: "Delta", rarity: "Rare", anime: "Boruto" },

  // Re:Zero
  { name: "Subaru Natsuki", rarity: "Epic", anime: "Re:Zero" },
  { name: "Emilia", rarity: "Legendary", anime: "Re:Zero" },
  { name: "Rem", rarity: "Epic", anime: "Re:Zero" },
  { name: "Ram", rarity: "Uncommon", anime: "Re:Zero" },
  { name: "Roswaal", rarity: "Rare", anime: "Re:Zero" },

  // Noragami
  { name: "Yato", rarity: "Epic", anime: "Noragami" },
  { name: "Hiyori Iki", rarity: "Uncommon", anime: "Noragami" },
  { name: "Yukine", rarity: "Uncommon", anime: "Noragami" },
  { name: "Kofuku", rarity: "Rare", anime: "Noragami" },
  { name: "Bishamon", rarity: "Legendary", anime: "Noragami" },

  // Erased
  { name: "Satoru Fujinuma", rarity: "Rare", anime: "Erased" },
  { name: "Kayo Hinazuki", rarity: "Uncommon", anime: "Erased" },
  { name: "Sachiko Fujinuma", rarity: "Uncommon", anime: "Erased" },
  { name: "Gaku Yashiro", rarity: "Epic", anime: "Erased" },

  // The Seven Deadly Sins
  { name: "Meliodas", rarity: "Mythic", anime: "The Seven Deadly Sins" },
  { name: "Ban", rarity: "Legendary", anime: "The Seven Deadly Sins" },
  { name: "King", rarity: "Epic", anime: "The Seven Deadly Sins" },
  { name: "Diane", rarity: "Rare", anime: "The Seven Deadly Sins" },
  { name: "Escanor", rarity: "Epic", anime: "The Seven Deadly Sins" },
  { name: "Elizabeth Liones", rarity: "Uncommon", anime: "The Seven Deadly Sins" },
  { name: "Merlin", rarity: "Legendary", anime: "The Seven Deadly Sins" },
  { name: "Gowther", rarity: "Uncommon", anime: "The Seven Deadly Sins" },

  // Fire Force
  { name: "Shinra Kusakabe", rarity: "Epic", anime: "Fire Force" },
  { name: "Arthur Boyle", rarity: "Uncommon", anime: "Fire Force" },
  { name: "Tamaki Kotatsu", rarity: "Rare", anime: "Fire Force" },
  { name: "Iris", rarity: "Common", anime: "Fire Force" },
  { name: "Benimaru Shinmon", rarity: "Legendary", anime: "Fire Force" },

  // Vivy: Fluorite Eye’s Song
  { name: "Vivy", rarity: "Epic", anime: "Vivy: Fluorite Eye’s Song" },
  { name: "Matsumoto", rarity: "Rare", anime: "Vivy: Fluorite Eye’s Song" },
  { name: "Estella", rarity: "Uncommon", anime: "Vivy: Fluorite Eye’s Song" },
  { name: "Elizabeth", rarity: "Uncommon", anime: "Vivy: Fluorite Eye’s Song" },
  { name: "Ophelia", rarity: "Rare", anime: "Vivy: Fluorite Eye’s Song" },

  // Akame ga Kill!
  { name: "Akame", rarity: "Epic", anime: "Akame ga Kill!" },
  { name: "Tatsumi", rarity: "Uncommon", anime: "Akame ga Kill!" },
  { name: "Esdeath", rarity: "Legendary", anime: "Akame ga Kill!" },
  { name: "Mine", rarity: "Rare", anime: "Akame ga Kill!" },
  { name: "Leone", rarity: "Rare", anime: "Akame ga Kill!" },

  // Gintama
  { name: "Gintoki Sakata", rarity: "Legendary", anime: "Gintama" },
  { name: "Kagura", rarity: "Rare", anime: "Gintama" },
  { name: "Shinpachi Shimura", rarity: "Common", anime: "Gintama" },
  { name: "Toshiro Hijikata", rarity: "Epic", anime: "Gintama" },
  { name: "Katsura Kotaro", rarity: "Rare", anime: "Gintama" },

  // Beastars
  { name: "Legoshi", rarity: "Legendary", anime: "Beastars" },
  { name: "Haru", rarity: "Rare", anime: "Beastars" },
  { name: "Louis", rarity: "Epic", anime: "Beastars" },
  { name: "Juno", rarity: "Rare", anime: "Beastars" },
  { name: "Jack", rarity: "Uncommon", anime: "Beastars" },

  // Great Pretender
  { name: "Makoto Edamura", rarity: "Rare", anime: "Great Pretender" },
  { name: "Laurent Thierry", rarity: "Legendary", anime: "Great Pretender" },
  { name: "Abigail Jones", rarity: "Rare", anime: "Great Pretender" },
  { name: "Cynthia Moore", rarity: "Uncommon", anime: "Great Pretender" },

  // Bungou Stray Dogs
  { name: "Atsushi Nakajima", rarity: "Epic", anime: "Bungou Stray Dogs"},
{ name: "Osamu Dazai", rarity: "Legendary", anime: "Bungou Stray Dogs"},
{ name: "Doppo Kunikida", rarity: "Rare", anime: "Bungou Stray Dogs" },
{ name: "Ryuunosuke Akutagawa", rarity: "Epic", anime: "Bungou Stray Dogs"},
{ name: "Ranpo Edogawa", rarity: "Uncommon", anime: "Bungou Stray Dogs"},
];

  const rarityColors = {
    Mythic: "#FF4500",
    Legendary: "goldenrod",
    Epic: "purple",
    Rare: "deepskyblue",
    Uncommon: "blue",
    Common: "gray"
  };

  // DOM Elements
  const getCharBtn = document.getElementById("getCharBtn");
  const lastCharacterDiv = document.getElementById("lastCharacter");
  const inventoryList = document.getElementById("inventory");
  const animeDropdown = document.getElementById("animeDropdown");

  const playerIdInput = document.getElementById("playerId");
  const copyIdBtn = document.getElementById("copyIdBtn");
  const tradePlayerIdInput = document.getElementById("tradePlayerId");
  const fetchTradeInventoryBtn = document.getElementById("fetchTradeInventoryBtn");
  const tradeInventoryList = document.getElementById("tradeInventory");
  const tradeBtn = document.getElementById("tradeBtn");

  let inventory = [];
  let tradeInventory = [];
  let selectedTradeCharacter = null;

  // Generate or load player ID
  function generatePlayerId() {
    // Simple random hex string ID
    return 'xxxx-xxxx-xxxx'.replace(/[x]/g, () => (Math.floor(Math.random() * 16)).toString(16));
  }

  function loadPlayerId() {
    let id = localStorage.getItem('playerId');
    if (!id) {
      id = generatePlayerId();
      localStorage.setItem('playerId', id);
    }
    return id;
  }

  const playerId = loadPlayerId();
  playerIdInput.value = playerId;

  // Save and load inventory from localStorage
  function saveInventory() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }

  function loadInventory() {
    const saved = localStorage.getItem('inventory');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) inventory = parsed;
      } catch {
        inventory = [];
      }
    }
  }

  loadInventory();

  // Populate anime dropdown
  function populateAnimeDropdown() {
    const animeSet = new Set(characters.map(c => c.anime));
    const animeArray = Array.from(animeSet).sort();
    animeDropdown.innerHTML = "";

    const allOption = document.createElement("option");
    allOption.value = "All";
    allOption.textContent = "All";
    animeDropdown.appendChild(allOption);

    animeArray.forEach(anime => {
      const option = document.createElement("option");
      option.value = anime;
      option.textContent = anime;
      animeDropdown.appendChild(option);
    });

    animeDropdown.value = "All";
  }

  function rarityWeight(rarity) {
    switch(rarity) {
      case "Mythic": return 1;
      case "Legendary": return 3;
      case "Epic": return 7;
      case "Rare": return 15;
      case "Uncommon": return 25;
      case "Common": return 49;
      default: return 1;
    }
  }

  function getRandomCharacter() {
    const weightedList = [];
    characters.forEach(char => {
      const weight = rarityWeight(char.rarity);
      for (let i = 0; i < weight; i++) {
        weightedList.push(char);
      }
    });
    const randomIndex = Math.floor(Math.random() * weightedList.length);
    return weightedList[randomIndex];
  }

  // Update inventory display filtered by dropdown
  function updateInventoryDisplay() {
    const filter = animeDropdown.value;
    inventoryList.innerHTML = "";

    let filtered = inventory;
    if (filter !== "All") {
      filtered = inventory.filter(char => char.anime === filter);
    }

    if (filtered.length === 0) {
      inventoryList.textContent = "No characters in inventory for selected anime.";
      return;
    }

    filtered.forEach(char => {
      const li = document.createElement("li");
      li.textContent = char.name + " ";
      const span = document.createElement("span");
      span.textContent = `(${char.rarity})`;
      span.style.color = rarityColors[char.rarity] || "black";
      li.appendChild(span);
      inventoryList.appendChild(li);
    });
  }

  // Button to get a random character
  getCharBtn.addEventListener("click", () => {
    const char = getRandomCharacter();
    lastCharacterDiv.innerHTML = `${char.name} <span style="color:${rarityColors[char.rarity]}">(${char.rarity})</span>`;

    if (!inventory.some(c => c.name === char.name)) {
      inventory.push(char);
      saveInventory();
    }
    updateInventoryDisplay();
  });

  animeDropdown.addEventListener("change", updateInventoryDisplay);

  populateAnimeDropdown();
  updateInventoryDisplay();

  // Copy player ID button
  copyIdBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(playerIdInput.value)
      .then(() => alert("Player ID copied!"))
      .catch(() => alert("Failed to copy Player ID."));
  });

  // ====== Online trading (backend URL) ======
  const backendUrl = "http://localhost:3000"; // change this if you host your own server

  // Fetch another player's inventory from backend
  fetchTradeInventoryBtn.addEventListener("click", () => {
    const otherId = tradePlayerIdInput.value.trim();
    if (!otherId) {
      alert("Enter a Player ID to fetch.");
      return;
    }
    fetch(`${backendUrl}/inventory/${otherId}`)
      .then(res => {
        if (!res.ok) throw new Error("Player not found");
        return res.json();
      })
      .then(data => {
        tradeInventory = data.inventory || [];
        selectedTradeCharacter = null;
        renderTradeInventory();
        tradeBtn.disabled = tradeInventory.length === 0;
      })
      .catch(err => {
        alert("Failed to fetch player inventory: " + err.message);
        tradeInventory = [];
        tradeInventoryList.innerHTML = "";
        tradeBtn.disabled = true;
      });
  });

  function renderTradeInventory() {
    tradeInventoryList.innerHTML = "";
    tradeInventory.forEach((char, i) => {
      const li = document.createElement("li");
      li.textContent = `${char.name} (${char.rarity})`;
      li.style.cursor = "pointer";
      li.style.color = rarityColors[char.rarity] || "black";

      li.addEventListener("click", () => {
        selectedTradeCharacter = char;
        // highlight selected
        Array.from(tradeInventoryList.children).forEach(c => c.style.backgroundColor = "");
        li.style.backgroundColor = "#ddd";
        tradeBtn.disabled = false;
      });
      tradeInventoryList.appendChild(li);
    });
  }

  // Trade button - propose trade: you give selected character from other player,
  // you offer one of your characters in return (simplified example)
  tradeBtn.addEventListener("click", () => {
    if (!selectedTradeCharacter) return alert("Select a character to trade.");

    // Ask user which character to trade from own inventory
    const yourCharName = prompt("Enter the name of your character to trade (must be in your inventory):");
    if (!yourCharName) return alert("Trade cancelled.");

    const yourCharIndex = inventory.findIndex(c => c.name.toLowerCase() === yourCharName.toLowerCase());
    if (yourCharIndex === -1) return alert("You don't have that character.");

    // Confirm trade
    if (!confirm(`Trade your "${inventory[yourCharIndex].name}" for "${selectedTradeCharacter.name}"?`)) return;

    // Prepare trade payload
    const otherId = tradePlayerIdInput.value.trim();
    const tradePayload = {
      fromPlayerId: playerId,
      toPlayerId: otherId,
      give: inventory[yourCharIndex],     // your char you give away
      receive: selectedTradeCharacter     // char you get
    };

    // Send trade request
    fetch(`${backendUrl}/trade`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(tradePayload)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("Trade completed!");

          // Update your inventory: remove given, add received
          inventory.splice(yourCharIndex, 1);
          if (!inventory.some(c => c.name === selectedTradeCharacter.name)) {
            inventory.push(selectedTradeCharacter);
          }
          saveInventory();
          updateInventoryDisplay();

          // Refresh trade inventory (fetch again)
          fetchTradeInventoryBtn.click();
        } else {
          alert("Trade failed: " + (data.message || "Unknown error"));
        }
      })
      .catch(err => {
        alert("Trade request failed: " + err.message);
      });
  });

});