// The full characters list, including anime property for filtering
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

// Rarity colors mapping
const rarityColors = {
Mythic: "#FF4500",      // Orange Red
Legendary: "goldenrod",
Epic: "purple",
Rare: "deepskyblue",
Uncommon: "blue",
Common: "gray"
};

let inventory = [];

// Get references to DOM elements
const getCharBtn = document.getElementById("getCharBtn");
const lastCharacterDiv = document.getElementById("lastCharacter");
const inventoryList = document.getElementById("inventory");
const animeDropdown = document.getElementById("animeDropdown");

// Fill anime dropdown with all unique anime plus "All"
function populateAnimeDropdown() {
const animeSet = new Set(characters.map(c => c.anime));
const animeArray = Array.from(animeSet).sort();
animeDropdown.innerHTML = "";

// Add "All" option first
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

animeDropdown.value = "All"; // default selection
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

// Weighted random selection of character
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

// Update the inventory display according to dropdown filter
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
li.innerHTML = `${char.name} <span style="color:${rarityColors[char.rarity]}">(${char.rarity})</span>`;
inventoryList.appendChild(li);
});
}

// When user clicks "Get Character" button
getCharBtn.addEventListener("click", () => {
const char = getRandomCharacter();
lastCharacterDiv.innerHTML = `${char.name} <span style="color:${rarityColors[char.rarity]}">(${char.rarity})</span>`;

// Add to inventory if not already there
if (!inventory.some(c => c.name === char.name)) {
inventory.push(char);
}

updateInventoryDisplay();
});

// When user changes anime filter dropdown
animeDropdown.addEventListener("change", () => {
updateInventoryDisplay();
});

// Initial setup
populateAnimeDropdown();
updateInventoryDisplay();