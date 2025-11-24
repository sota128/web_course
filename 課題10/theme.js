window.addEventListener('DOMContentLoaded', function () {
    // --- 1. 要素をidで1つずつ取得 ---
    const btnSeabreeze = document.getElementById('btn-seabreeze');
    const btnMidnight = document.getElementById('btn-midnight');
    const btnSumpop = document.getElementById('btn-sumpop');
    const body = document.body;

    const allButtons = [btnSeabreeze, btnMidnight, btnSumpop];


    // --- 2. テーマ適用関数 ---
    function applyTheme(themeName, clickedButton) {
        body.className = themeName;

        // 全てのボタンからクラスactiveを一旦取り除く
        allButtons.forEach(button => {
            button.classList.remove('active');
            button.setAttribute('aria-pressed', 'false');
        });

        // クリックされたボタンにクラスactiveを付与
        clickedButton.classList.add('active');
        clickedButton.setAttribute('aria-pressed', 'true');
    }


    // --- 3. 各ボタンがクリックされた際の処理 ---
    btnSeabreeze.addEventListener('click', function () {
        applyTheme('theme-seabreeze', this);
    });

    btnMidnight.addEventListener('click', function () {
        applyTheme('theme-midnight', this);
    });

    btnSumpop.addEventListener('click', function () {
        applyTheme('theme-sumpop', this);
    });
});
