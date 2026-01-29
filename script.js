let tabSwitches = 0;
let scrollScore = 0;
let focusScore = 100;

const tabEl = document.getElementById("tabs");
const scrollEl = document.getElementById("scroll");
const focusEl = document.getElementById("focus");
const insightEl = document.getElementById("insight");

document.getElementById("simulate").addEventListener("click", () => {
    const tabIncrease = Math.floor(Math.random() * 5) + 1;
    const scrollIncrease = Math.floor(Math.random() * 15) + 5;

    tabSwitches += tabIncrease;
    scrollScore = Math.min(100, scrollScore + scrollIncrease);
    focusScore = Math.max(0, 100 - (tabSwitches * 2 + scrollScore / 2));

    tabEl.textContent = tabSwitches;
    scrollEl.textContent = scrollScore + "%";
    focusEl.textContent = focusScore;

    updateInsight();
});

function updateInsight() {
    if (focusScore > 70) {
        insightEl.textContent = "Your attention is stable. Keep going.";
    } else if (focusScore > 40) {
        insightEl.textContent = "Focus is slipping. Too many context switches.";
    } else {
        insightEl.textContent = "Mental overload detected. Take a break.";
    }
}
