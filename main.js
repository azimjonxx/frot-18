let hatd = prompt('Ismingizni kiriting')
let harf = prompt('Harf yozing')
if(hatd.toLocaleLowerCase().includes(harf.toLocaleLowerCase())){
    alert(`Ismingizda ${harf} harfi bor`)
}else{
    alert(`Ismingizda ${harf} harfi yoq`)
}