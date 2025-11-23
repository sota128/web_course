// 各ボタン要素を取得
const overworldButton = document.getElementById('btn-overworld');
const netherButton = document.getElementById('btn-nether');
const endButton = document.getElementById('btn-end');

// テーマを適用するbody要素を取得
const themedBody = document.querySelector('body');

// オーバーワールドボタンがクリックされたときの処理
overworldButton.addEventListener('click', () => {
    // bodyのクラスを一度リセットしてから、新しいテーマクラスを追加
    themedBody.className = 'theme-overworld';
});

// ネザーボタンがクリックされたときの処理
netherButton.addEventListener('click', () => {
    themedBody.className = 'theme-nether';
});

// ジ・エンドボタンがクリックされたときの処理
endButton.addEventListener('click', () => {
    themedBody.className = 'theme-end';
});
