// DOM要素を取得
const body = document.body;
const defaultButton = document.getElementById('theme-default');
const modernLightButton = document.getElementById('theme-modern-light');
const cyberDarkButton = document.getElementById('theme-cyber-dark');
const retroGameButton = document.getElementById('theme-retro-game');

// 各ボタンにクリックイベントを設定

// デフォルトテーマ
defaultButton.addEventListener('click', () => {
    // すべてのクラスを削除してデフォルトに戻す
    body.className = '';
});

// モダンライトテーマ
modernLightButton.addEventListener('click', () => {
    body.className = 'theme-modern-light';
});

// サイバーダークテーマ
cyberDarkButton.addEventListener('click', () => {
    body.className = 'theme-cyber-dark';
});

// レトロゲームテーマ
retroGameButton.addEventListener('click', () => {
    body.className = 'theme-retro-game';
});
