// 配列の合計値を計算して返す関数
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sub_elem(array) {
    let total = 0;
    for (let element of array) {
        total += element;
    }
    return total;
}
// 関数を呼び出し、結果をページに表示
let total = sub_elem(array);
document.write('配列の合計値: ' + total + '<br>');


// personオブジェクトを作成
const person = {
    name: '山内颯大',
    grade: 3,
    class: '情報科学・工学系'
};

// オブジェクトの情報をコンソールに表示する関数
function displayPersonInfo(p) {
    console.log('名前: ' + p.name);
    console.log('学年: ' + p.grade);
    console.log('系: ' + p.class);
}

// 関数を呼び出し、情報をコンソールに表示
displayPersonInfo(person);

// コンソールを確認するようメッセージを表示
document.write('personオブジェクトの情報はコンソールを確認してください。');
