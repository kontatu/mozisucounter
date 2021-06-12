// inputに文字が入力
// 文字の長さを図る
// 400 - 文字の長さ
// 残りの文字数を表示する
// リセットでテキストを削除する

const sampleForm = document.getElementById("sampleForm");
const textCounter = document.getElementById("textCounter");
const resetBtn = document.getElementById("resetBtn");
const goalNum = 400;

textCounter.textContent = `あと${goalNum}`;

sampleForm.addEventListener("keyup", () => {
    textLength = sampleForm.value.length;
    textCounter.textContent = `あと${goalNum - textLength}`;
});

resetBtn.addEventListener("click", () => {
    textCounter.textContent = `あと${goalNum}`;
});



