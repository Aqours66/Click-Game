let clickPower = 2;
let score = 0;
let level = 1;
let soundEffectsEnabled = true;

let increasePowerCost = 5;
let decreaseCostCost = 10;
let increaseLevelCost = 15;
let doubleScoreCost = 20;
let extraPowerCost = 25;



let abilitiesUnlocked = {
    doubleClickPower: false,
    bonusScore: false,
};

function handleClick() {
    if (abilitiesUnlocked.doubleClickPower) {
        score += clickPower * 2;
    } else {
        score += clickPower * level;
    }

    if (abilitiesUnlocked.bonusScore) {
        score += 10;
    }


    if (soundEffectsEnabled) {
        document.getElementById('clickSound').play();
    }
    updateDisplay();
}

function buyUpgrade(upgradeType) {
    switch (upgradeType) {
        case 'increasePower':
            if (score >= increasePowerCost) {
                clickPower += 2;
                score -= increasePowerCost;
                increasePowerCost *= 2;

                // Play upgrade sound
                if (soundEffectsEnabled) {
                    document.getElementById('upgradeSound').play();
                }
                updateDisplay();
            } else {
                alert('Not enough score to upgrade!');
            }
            break;
        case 'decreaseCost':
            if (score >= decreaseCostCost) {
                decreaseCosts();
                score -= decreaseCostCost;
                decreaseCostCost *= 2;

                // Play upgrade sound
                if (soundEffectsEnabled) {
                    document.getElementById('upgradeSound').play();
                }
                updateDisplay();
            } else {
                alert('Not enough score to upgrade!');
            }
            break;
        case 'increaseLevel':
            if (score >= increaseLevelCost) {
                level++;
                score -= increaseLevelCost;
                increaseLevelCost *= 2;
                unlockNewAbility();
                updateDisplay();

                // Play upgrade sound
                if (soundEffectsEnabled) {
                    document.getElementById('upgradeSound').play();
                }
            } else {
                alert('Not enough score to upgrade!');
            }
            break;
        case 'doubleScore':
            if (score >= doubleScoreCost) {
                clickPower *= 2;
                doubleScoreCost *= 2;
                score -= doubleScoreCost;
                updateDisplay();
                // Play upgrade sound
                if (soundEffectsEnabled) {
                    document.getElementById('upgradeSound').play();
                }
            } else {
                alert('Not enough score to upgrade!');
            }
            break;
        case 'extraPower':
            if (score >= extraPowerCost) {
                clickPower += 5;
                extraPowerCost *= 2;
                score -= extraPowerCost;
                updateDisplay();
                // Play upgrade sound
                if (soundEffectsEnabled) {
                    document.getElementById('upgradeSound').play();
                }
            } else {
                alert('Not enough score to upgrade!');
            }
            break;
        default:
            console.log('Invalid upgrade type');
    }
}

function unlockNewAbility() {
    switch (level) {
        case 2:
            abilitiesUnlocked.doubleClickPower = true;
            alert('New Ability Unlocked: Double Click Power!');
            // Play level-up sound
            if (soundEffectsEnabled) {
                document.getElementById('levelUpSound').play();
            }
            break;
        case 4:
            abilitiesUnlocked.bonusScore = true;
            alertWithAnimation('New Ability Unlocked: Bonus Score!');
            if (soundEffectsEnabled) {
                document.getElementById('levelUpSound').play();
            }
            break;
    }
}

// Add this function to initialize the settings state
function initializeSettings() {
    soundEffectsEnabled = document.getElementById('toggleSoundEffects').checked;
}


function alertWithAnimation(message) {
    alert(message); // You can replace this with a custom styled alert or notification
}


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.overlay').style.display = 'flex';
    initializeSettings();



    document.querySelector('.overlay').addEventListener('click', function() {
        this.style.display = 'none';
    });
});



// Add these event listeners inside the DOMContentLoaded event handler
document.getElementById('toggleSoundEffects').addEventListener('change', function() {
    soundEffectsEnabled = this.checked;
});






function decreaseCosts() {
    increasePowerCost = Math.ceil(increasePowerCost * 0.8);
    decreaseCostCost = Math.ceil(decreaseCostCost * 0.8);
    increaseLevelCost = Math.ceil(increaseLevelCost * 0.8);
    doubleScoreCost = Math.ceil(doubleScoreCost * 0.8);
    extraPowerCost = Math.ceil(extraPowerCost * 0.8);
}

function updateDisplay() {
    document.getElementById('clickPowerValue').textContent = clickPower;
    document.getElementById('scoreValue').textContent = score;
    document.getElementById('levelValue').textContent = level;
    document.getElementById('increasePowerCost').textContent = increasePowerCost;
    document.getElementById('decreaseCostCost').textContent = decreaseCostCost;
    document.getElementById('increaseLevelCost').textContent = increaseLevelCost;
    document.getElementById('doubleScoreCost').textContent = doubleScoreCost;
    document.getElementById('extraPowerCost').textContent = extraPowerCost;
}



updateDisplay();