/*var product = [
    {
        name: 'sac',
        price: 99,
        img: url,
        like: true,

    },

    console.log(sac)

];

var pull = Object.create(product);
pull.name = 'pull';
pull.price = 15;
pull.img = url;
pull.like = false;

console.log(pull);

var chaussure = Object.create(product);
chaussure.name = 'chaussure';
chaussure.price = 59;
chaussure.img = url;
chaussure.like = false;

console.log(chaussure);
*/


/*var products = [

    item = {
        name: 'sac',
        price: 99,
        img: url,
        like: true,
    }
];

var container = document.getElementById("container");
products.forEach(function (product) {
    var productElement = document.createElement("div");
    container.appendChild(productElement);
    productElement.setAttribute('sac', 99, true)

}); */


//JE CREE MON TABLEAU D'OBJET QUI CONTITENT MES PRODUITS
var products = [
    {
        name: 'bag',
        price: '$30',
        url: 'https://images.unsplash.com/photo-1524498250077-390f9e378fc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
        like: true


    },

    {
        name: 'shirt',
        price: '$10',
        url: 'https://images.unsplash.com/photo-1517309561013-16f6e4020305?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        like: false
    },

    {
        name: 'shoes',
        price: '$50',
        url: 'https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        like: false

    }
];

var container = document.getElementById('container');

//BOUCLLE FOR EACH QUI ME PERMET DE CREER DES ELEMENT HTML
products.forEach(function (product) {

    //JE CREE DES DIV QUI AURONT POUR ID MON PRODUCT NAME
    var elementProduct = document.createElement('div');
    elementProduct.setAttribute('id', product.name);
    container.appendChild(elementProduct);

    //JE CREE DES IMG AVEC URL DE MES PRODUITS
    var imageProduct = document.createElement('img');
    imageProduct.setAttribute('src', product.url);
    elementProduct.appendChild(imageProduct);

    //JE CREE DES ZONES DE TEXTE QUI VONT CHERCHER LE PRIX ET LE NOM
    var priceAndNameProduct = document.createElement('p');
    var priceAndName = document.createTextNode(product.name + " " + product.price);
    elementProduct.appendChild(priceAndName);

    //JE CREE UN BOUTON AVEC LA VALEUR PURCHASE
    var buy = document.createElement('input');
    var button = document.createTextNode('Purchase');
    buy.type = "button";
    buy.style = 'width: 80px; height: 20px;';
    buy.value = "PURCHASE";
    elementProduct.appendChild(buy);

    //JE LUI MET UN EVENT LISTENER 
    buy.addEventListener("click", function () {
        console.log('jai acheté');

    });

    //FAIRE FONCTIONNER MON LIKE
    var aLike = document.createElement('img');
    aLike.setAttribute('class', 'unlike');
    aLike.setAttribute('src', 'http://assets.stickpng.com/thumbs/585e4e6ccb11b227491c339e.png');
    elementProduct.appendChild(aLike);


    function displayLike(aLike, like) {

        if (like == true) {
            aLike.setAttribute('src', 'http://assets.stickpng.com/thumbs/585e4e6ccb11b227491c339e.png');
            console.log(aLike);
        } else {
            aLike.setAttribute('src', 'https://3.bp.blogspot.com/-Pok2zariw6w/WP39o3cKhmI/AAAAAAAACo4/Tn7Ju2RgcBsqqLlg3G8EZpT9x-c4y-CxgCLcB/s1600/pouce%2Bbleu.png')

        }

    }
    products.forEach(function (product) {

        var emptyLike = aLike;

        emptyLike.addEventListener('click', function () {
            product.like = !product.like;
            console.log(product.like);
            displayLike(emptyLike, product.like);
        });
    });

    /* //JE CREE UNE IMAGE QUI EST MON LIKE VIDE
     var emptyLike = document.createElement('img');
     emptyLike.setAttribute('class', 'unlike');
     emptyLike.setAttribute('src', 'http://assets.stickpng.com/thumbs/585e4e6ccb11b227491c339e.png');
     elementProduct.appendChild(emptyLike);
 
     //JE LUI MET UN EVENT LISTENER
     //AU CLICK JE VIENT CHANGER SA SOURCE POUR FAIRE APPARAITRE MON LIKE REMPLI
     emptyLike.addEventListener('click', function () {
         emptyLike.setAttribute('src', 'https://3.bp.blogspot.com/-Pok2zariw6w/WP39o3cKhmI/AAAAAAAACo4/Tn7Ju2RgcBsqqLlg3G8EZpT9x-c4y-CxgCLcB/s1600/pouce%2Bbleu.png');
 
         //CONDITION QUI PERMET DE "UNLIKER" 
 
 
     });*/



});


var panier = document.getElementById('panier');
panier.addEventListener('click', function () {
    console.log('good');

});
$.get('https://localhost:300/', function (response, error) {
    console.log
});

