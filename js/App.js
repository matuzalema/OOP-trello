// =========== API ===================
var baseUrl = 'https://cors-anywhere.herokuapp.com/kodilla.com/pl/bootcamp-api';
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

function generateTemplate(name, data, basicElement) {
  var template = document.getElementById(name).innerHTML;
  var element = document.createElement(basicElement || 'div');

  Mustache.parse(template);
  element.innerHTML = Mustache.render(template, data);

  return element;
}

