// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.

// 1. Select the forge, heat, sword count, status, image, and message elements.
//    Find their IDs in index.html.

const forge = document.querySelector("#forge");
const heatDisplay = document.querySelector("#heat-value");
const swordDisplay = document.querySelector("#sword-count");
const statusDisplay = document.querySelector("#forge-status");
const forgeImage = document.querySelector("#forge-image");
const messageDisplay = document.querySelector("#action-message");

// 2. Create the two state variables: heat and swords made.

let heat = 20;
let swordsMade = 0;


// 3. Write getForgeStatus(heatValue). Return the correct status string.

function getForgeStatus(heatValue) {
  if (heatValue < 30) {
    return "Too cold";
  } else if (heatValue < 70) {
    return "Ready to forge";
  } else {
    return "Roaring fire";
  }
}


// 4. Write updateForge(). Update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.

function updateForge() {
  heatDisplay.textContent = heat;
  swordDisplay.textContent = swordsMade;

  const status = getForgeStatus(heat);
  statusDisplay.textContent = status;

  forge.classList.remove("is-cold", "is-ready", "is-roaring");

  if (status === "Too cold") {
    forge.classList.add("is-cold");
    forgeImage.src = "assets/forge-cold.svg";
    forgeImage.alt = "A stone forge with dark coals and no flames";

  } else if (status === "Ready to forge") {
    forge.classList.add("is-ready");
    forgeImage.src = "assets/forge-ready.svg";
    forgeImage.alt = "A stone forge with a small orange fire";

  } else {
    forge.classList.add("is-roaring");
    forgeImage.src = "assets/forge-roaring.svg";
    forgeImage.alt = "A stone forge with tall bright flames and sparks";
  }
}

// 5. Write resetForge(). Restore the state, message, and display.

function resetForge() {
  heat = 20;
  swordsMade = 0;

  messageDisplay.textContent = "Welcome to the forge. Add heat to begin.";

  updateForge();
}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.

function heatForge(amount) {
  heat = heat + amount;

  if (heat > 100) {
    heat = 100;
  }

  messageDisplay.textContent =
    "Heating complete. The forge is at " + heat + " heat.";

  updateForge();
}

// 7. Write makeSword(). Handle both success and insufficient heat.

function makeSword() {
  if (heat >= 30) {
    heat = heat - 30;
    swordsMade = swordsMade + 1;

    messageDisplay.textContent = "Sword made successfully!";
  } else {
    messageDisplay.textContent =
      "The forge is too cold. More heat is needed.";
  }

  updateForge();
}

// 8. Call resetForge() once to start the game.

resetForge();

// Use the tests in ASSIGNMENT.md to check your work.

// All tests work!!