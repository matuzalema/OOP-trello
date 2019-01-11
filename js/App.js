// =========== API ===================
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '3713',
  'X-Auth-Token': 'a12b2f9736348e831d18f6ac50b3f201'
};

fetch(baseUrl + "/board", {headers: myHeaders})
  .then(function(resp){
    return resp.json();
  })
  .then(function(resp){
    setUpColumns(resp.column);
  });

function setUpColumns(columns){
  columns.forEach(function(column){
    var col = new Column(column.id, column.name);
    board.addColumn(col);
    setUpCards(col, column.cards);
  });
}

function setUpCards(col, cards){
  cards.forEach(function(card){
    var cardObj = new Card (card.id, card.name);
    col.addCard(cardObj);
  });
}

// ========= code apikation ===============
// function randomString() {
//     var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
//     var str = '';
//     for (var i = 0; i < 10; i++) {
//         str += chars[Math.floor(Math.random() * chars.length)];
//     }
//     return str;
// }

// mustache get template from index.html, parse and render
function generateTemplate(name, data, basicElement) {
  var template = document.getElementById(name).innerHTML;
  var element = document.createElement(basicElement || 'div');

  Mustache.parse(template);
  element.innerHTML = Mustache.render(template, data);

  return element;
}

// // CREATING COLUMNS
// var todoColumn = new Column('To do');
// var doingColumn = new Column('Doing');
// var doneColumn = new Column('Done');

// // ADDING COLUMNS TO THE BOARD
// board.addColumn(todoColumn);
// board.addColumn(doingColumn);
// board.addColumn(doneColumn);

// // CREATING CARDS
// var card1 = new Card('Create a new project');
// var card2 = new Card('Project development');
// var card3 = new Card('Publication of the project');

// // ADDING CARDS TO COLUMNS
// todoColumn.addCard(card1);
// doingColumn.addCard(card2);
// doneColumn.addCard(card3);
