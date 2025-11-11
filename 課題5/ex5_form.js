// フォーム要素（HTMLFormElement）を取得
var form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    // デフォルトの送信処理をキャンセル
    event.preventDefault();
    // フォーム要素の子要素を取得
    var elements = form.elements;
    // 各要素の値を取得してコンソールに出力
    var name = elements.name.value;
    var email = elements.email.value;
    var password = elements.password.value;
    console.log('name: ' + name);
    console.log('mail address: ' + email);
    console.log('password: ' + password);

    if (!name) {
        alert('名前を入力してください');
        return;
    }
    if (!email) {
        alert('メアドを入力してください');
        return;
    }
    if (!password) {
        alert('パスワードを入力してください');
        return;
    }
    form.submit();
});
