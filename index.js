const userGuess = document.getElementById("user-guess");
const submitBtn = document.getElementById("submit");
const usersWord = document.getElementById("scrambled-word");
const info = document.getElementById("info");
const levelOutput = document.getElementById("level");
const scoreOutput = document.getElementById("score");
const attemptsOutput = document.getElementById("attempts");
const gameContainer = document.getElementById("game-container");
const guessContainer = document.getElementById("guess-container");
const rules = document.getElementById("rules");
const playBtn = document.getElementById("play-btn");
const resetBtn = document.getElementById("reset-btn");

let level = 1;
let score = 0;
let word;
let attempts = 0;
let correct = 0;

const lvlOne = [
  "aim",
  "ace",
  "bed",
  "bee",
  "buy",
  "can",
  "cow",
  "cod",
  "cur",
  "did",
  "duo",
  "die",
  "dry",
  "dug",
  "elf",
  "egg",
  "elk",
  "fat",
  "fix",
  "fin",
  "few",
  "gym",
  "guy",
  "goo",
  "hen",
  "hag",
  "hic",
  "hut",
  "ill",
  "ice",
  "imp",
  "ink",
  "ivy",
  "jet",
  "job",
  "jaw",
  "jab",
  "keg",
  "kid",
  "lip",
  "leg",
  "lad",
  "let",
  "led",
  "law",
  "lid",
  "mut",
  "mat",
  "mud",
  "mid",
  "nit",
  "nog",
  "now",
  "oil",
  "owl",
  "oar",
  "off",
  "oat",
  "one",
  "pry",
  "pal",
  "peg",
  "pea",
  "pen",
  "pus",
  "rad",
  "rem",
  "rig",
  "rob",
  "saw",
  "sob",
  "sec",
  "shy",
  "sex",
  "sly",
  "tan",
  "the",
  "tic",
  "try",
  "cop",
  "uke",
  "ugh",
  "ups",
  "vat",
  "van",
  "vet",
  "woo",
  "wow",
  "wry",
  "wok",
  "yah",
  "yak",
  "yay",
  "you",
  "yep",
  "zit",
  "zap",
  "zig",
  "zag",
  "zip",
];

const lvlTwo = [
  "able",
  "aced",
  "acid",
  "ally",
  "also",
  "arcs",
  "area",
  "arch",
  "aunt",
  "axis",
  "baby",
  "back",
  "ball",
  "babe",
  "bass",
  "bell",
  "bets",
  "bind",
  "bios",
  "book",
  "cabs",
  "case",
  "chef",
  "curl",
  "chat",
  "chap",
  "chin",
  "chum",
  "chop",
  "coal",
  "dabs",
  "dame",
  "damp",
  "dart",
  "dash",
  "dark",
  "deck",
  "deep",
  "diva",
  "dice",
  "easy",
  "ends",
  "epic",
  "etch",
  "evil",
  "expo",
  "exam",
  "face",
  "fact",
  "fail",
  "fair",
  "fall",
  "farm",
  "fave",
  "fart",
  "gain",
  "gays",
  "gets",
  "germ",
  "glad",
  "hams",
  "hats",
  "haze",
  "help",
  "head",
  "hers",
  "hike",
  "jabs",
  "junk",
  "jury",
  "kept",
  "keys",
  "kilt",
  "kiss",
  "lads",
  "lamp",
  "lean",
  "less",
  "mark",
  "mile",
  "mine",
  "name",
  "nuns",
  "obit",
  "obey",
  "pack",
  "pane",
  "palm",
  "pals",
  "raid",
  "reek",
  "rift",
  "repo",
  "sees",
  "seem",
  "self",
  "slip",
  "thin",
  "tied",
  "toes",
  "tofu",
  "tree",
  "ugly",
  "unto",
  "used",
  "vans",
  "visa",
  "wack",
  "wade",
  "wait",
  "wasp",
  "yams",
  "yarn",
  "yoyo",
  "zest",
  "zero",
  "zinc",
  "zips",
  "zone",
  "zonk",
];

const lvlThree = [
  "abide",
  "about",
  "abort",
  "above",
  "adapt",
  "array",
  "aglow",
  "aisle",
  "angry",
  "ansty",
  "basic",
  "beers",
  "brisk",
  "bends",
  "berry",
  "below",
  "birdy",
  "blush",
  "bluff",
  "bolts",
  "cable",
  "champ",
  "chalk",
  "clams",
  "coded",
  "comet",
  "crack",
  "cycle",
  "daddy",
  "dance",
  "darts",
  "dated",
  "denim",
  "digit",
  "dingy",
  "dolly",
  "douse",
  "dryer",
  "duvet",
  "earth",
  "eased",
  "elope",
  "epoxy",
  "event",
  "exact",
  "equal",
  "fable",
  "fades",
  "false",
  "fever",
  "fiber",
  "fifty",
  "flaw",
  "flank",
  "froze",
  "fruit",
  "gamma",
  "gangs",
  "gawks",
  "gecko",
  "goofy",
  "goner",
  "guild",
  "hairy",
  "harem",
  "hedge",
  "hello",
  "helms",
  "honor",
  "image",
  "imply",
  "itchy",
  "issue",
  "ionic",
  "jacks",
  "japan",
  "jewel",
  "juice",
  "junky",
  "keeps",
  "kooky",
  "laced",
  "laces",
  "lamps",
  "laser",
  "leaky",
  "lynch",
  "mages",
  "mafia",
  "miles",
  "meats",
  "might",
  "mixer",
  "moths",
  "movie",
  "mushy",
  "named",
  "naval",
  "nears",
  "neigh",
  "newer",
  "nexus",
  "noise",
  "nooks",
  "north",
  "nutty",
  "ogres",
  "olive",
  "olive",
  "opens",
  "oxide",
  "owner",
  "paced",
  "palms",
  "pends",
  "pesky",
  "peppy",
  "petty",
  "phone",
  "phase",
  "porky",
  "pound",
  "pride",
  "print",
  "purse",
  "quack",
  "queen",
  "quart",
  "query",
  "quiet",
  "rafts",
  "rated",
  "react",
  "ready",
  "realm",
  "riced",
  "rides",
  "rigid",
  "rumor",
  "sadly",
  "safes",
  "saggy",
  "sails",
  "saint",
  "salsa",
  "sauce",
  "scone",
  "seeds",
  "scums",
  "sense",
  "shark",
  "sheds",
  "shout",
  "shove",
  "sides",
  "sixth",
  "skeet",
  "skill",
  "snots",
  "solid",
  "sound",
  "south",
  "spoil",
  "stall",
  "stole",
  "store",
  "sulks",
  "swamp",
  "sword",
  "syncs",
  "tempt",
  "texts",
  "texas",
  "today",
  "tonic",
  "topaz",
  "tried",
  "truth",
  "twigs",
  "typos",
  "udder",
  "unify",
  "using",
  "usual",
  "valid",
  "vapor",
  "venue",
  "vowel",
  "waked",
  "waist",
  "waxed",
  "whips",
  "whole",
  "wordy",
  "wreck",
  "yager",
  "yacht",
  "xenon",
  "yield",
  "yikes",
  "zincs",
  "zesty",
  "zones",
  "zincs",
  "zooms",
  "zeros",
  "yummy",
  "youth",
  "yogas",
  "yodle",
];

function reset() {
  level = 1;
  score = 0;
  correct = 0;
  attempts = 0;
  word = "";
  updateBoard();
  info.innerHTML = "";
  userGuess.value = "";
}

function randomWord(lvl) {
  word = lvl[Math.floor(Math.random() * lvl.length + 1) - 1];
  return word;
}

function scrambleWord(word) {
  let letters = word.split("");
  let currentIndex = letters.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = letters[currentIndex];
    letters[currentIndex] = letters[randomIndex];
    letters[randomIndex] = temporaryValue;
  }

  return letters.join(" ");
}
function updateBoard() {
  scoreOutput.innerHTML = score;
  levelOutput.innerHTML = level;
  attemptsOutput.innerHTML = attempts;
}

function checkAnswer(guess) {
  console.log(`Correct: ${correct}`);
  if (correct == 10) {
    level += 1;
    correct = 0;
  }

  if (attempts == 5) {
    guessContainer.classList.toggle("hidden");
    info.innerHTML =
      "<p class='retry'>Sorry. You are out of chances. <button id='retry-button'>Retry</button> </p>";
    reset();
  }

  if (guess === word) {
    info.innerHTML = "<span class='correct'>CORRECT</span>";
    score += 1;
    correct += 1;
    attempts = 0;
    setLevel();
  } else {
    info.innerHTML = "<span class='incorrect'>Bzzzt! That's not right!</span>";
    score -= 1;
    attempts += 1;
  }

  updateBoard();
}

function setLevel() {
  if (level == 1) {
    randomWord(lvlOne);
  } else if (level == 2) {
    randomWord(lvlTwo);
  } else if (level == 3) {
    randomWord(lvlThree);
  } else if (level == 4) {
    info.innerHTML =
      "<span class='win'>You Win! Great job! </br> You can reset or keep playing.</span>";
  }

  console.log(`Word: ${word}`);
  usersWord.innerHTML = scrambleWord(word);
}

playBtn.addEventListener("click", function (e) {
  rules.classList.toggle("hidden");
  gameContainer.classList.remove("hidden");
});

submitBtn.addEventListener("click", function (e) {
  checkAnswer(userGuess.value.toLowerCase());
  userGuess.value = "";
});

resetBtn.addEventListener("click", function (e) {
  reset();
  setLevel();
  guessContainer.classList.remove("hidden");
  userGuess.value = "";
});

setLevel();
