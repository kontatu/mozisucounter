// inputに文字が入力
// 文字の長さを図る
// 400 - 文字の長さ
// 残りの文字数を表示する
// リセットでテキストを削除する

const sampleForm = document.getElementById("sampleForm");
const textCounter = document.getElementById("textCounter");
const resetBtn = document.getElementById("resetBtn");

let textLength = 0;
textCounter.textContent = `あと400`;

sampleForm.addEventListener("keyup", () => {
    textLength = sampleForm.value.length;
    textCounter.textContent = `あと${400 - textLength}`;
});

resetBtn.addEventListener("click", () => {
    textLength = 0;
    textCounter.textContent = `あと400`;
});



