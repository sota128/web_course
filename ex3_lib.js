const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sub_elem(array) {
    let total = 0;
    for (let element of array) {
        total += element;
    }
    return total;
}
let total = sub_elem(array);
document.write(total);