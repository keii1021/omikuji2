const box = document.getElementById("box");
const resulte = document.getElementById("resulte");
const retry = document.getElementById("retry");
box.style.display = "block";
resulte.style.display = "none";
retry.style.display = "none";

function omikuji() {
    box.style.display = "none";
    resulte.style.display = "block";
    retry.style.display = "block";

    let luck = document.getElementById("luck");
    let detail = document.getElementById("detail");

    let card =[
        ["大吉","よかったね"],
        ["吉","まあまあ"],
        ["凶","そんな日もあるでしょう"]
        ];
    let r =Math.floor(Math.random()*card.length);
    luck.textContent = card[r][0];
    detail.textContent = card[r][1];
    navigator.vibrate(1000);
}
function reTry() {
    box.style.display = "block";
    resulte.style.display = "none";
    retry.style.display = "none";
}
