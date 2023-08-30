/* Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
 gli elementi della lista individualmente con un ciclo while. */



const ListElement = document.querySelector('.shop_list')
const shopList = ['farina','olio', 'zucchero','melone','pasta', 'cocomero','gelato','uova'];

let i = 0;

while (i < shopList.length) {

    const shopListMarkup =`<li>${shopList[i]}</li>`;
    
    ListElement.insertAdjacentHTML('afterbegin', shopListMarkup);

    i++;
}