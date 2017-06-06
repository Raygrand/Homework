'use strict';

var obj = {
  makeWrapper: function () {
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    document.body.appendChild(wrapper);
  },
  data: function (){
    var elementName = prompt('enter a name of the new element');
    var elementTag = prompt('enter a tag for the element');
    var className = prompt('enter a name for the element`s class');
    var elementContent = prompt('enter a content for the element');
    var parentName = prompt('enter a name of the element`s parent');
    console.log('element: '+elementName+' /tag: '+elementTag+' /class: '+className+
    ' /content: '+elementContent+' /parent: '+parentName);
  },
  makeElement: function () {
    var elementName = document.createElement('elementTag');
    elementName.className = 'elementName';
    elementName.innerHTML = 'elementContent';
    var parentName = document.querySelector('.parentName');
    parentName.insertBefore(elementName, parentName.firstChild);
  }
};
for (var k in obj) {
obj[k]();
}

  //  var header = document.createElement('div');
  //  header.className = 'header';
  //  header.innerHTML = 'Тест по программированию';
  //  var wrapper = document.querySelector('.wrapper');
  //  wrapper.insertBefore(header, wrapper.firstChild);









// var header = document.createElement('div');
// header.className = 'header';
// header.innerHTML = 'Тест по программированию';
// wrapper.insertBefore(header, wrapper.firstChild);


  // var content = document.createElement('div');
  // content.className = 'content';
  // wrapper.insertBefore(content, wrapper.children[1]);
  //
  //   var block1 = document.createElement('div');
  //   block1.className = 'blocks';
  //   content.insertBefore(block1, content.firstChild);
  //
  //     var question1 = document.createElement('span');
  //     question1.className = 'questions';
  //     question1.innerHTML = '1. Вопрос №1';
  //     block1.insertBefore(question1, block1.firstChild);
  //
  //       var variant1 = document.createElement('div');
  //       variant1.className = 'variants';
  //       variant1.innerHTML = '<input type="checkbox" name="" value=""><span>Вариант ответа №1</span></div>';
  //       block1.insertBefore(variant1, block1.children[1]);
  //
  //       var variant2 = document.createElement('div');
  //       variant2.className = 'variants';
  //       variant2.innerHTML = '<input type="checkbox" name="" value=""><span>Вариант ответа №2</span></div>';
  //       block1.insertBefore(variant2, block1.children[2]);
  //
  //       var variant3 = document.createElement('div');
  //       variant3.className = 'variants';
  //       variant3.innerHTML = '<input type="checkbox" name="" value=""><span>Вариант ответа №3</span></div>';
  //       block1.insertBefore(variant3, block1.children[3]);
  //
  //   var block2 = document.createElement('div');
  //   block2.className = 'blocks';
  //   content.insertBefore(block2, content.children[1]);
  //
  //     var question2 = document.createElement('span');
  //     question2.className = 'questions';
  //     question2.innerHTML = '2. Вопрос №2';
  //     block2.insertBefore(question2, block2.firstChild);
  //
  //       var variant21 = document.createElement('div');
  //       variant21.className = 'variants';
  //       variant21.innerHTML = '<input type="checkbox" name="" value=""><span>Вариант ответа №1</span></div>';
  //       block2.insertBefore(variant21, block2.children[1]);
  //
  //       var variant22 = document.createElement('div');
  //       variant22.className = 'variants';
  //       variant22.innerHTML = '<input type="checkbox" name="" value=""><span>Вариант ответа №2</span></div>';
  //       block2.insertBefore(variant22, block2.children[2]);
  //
  //       var variant23 = document.createElement('div');
  //       variant23.className = 'variants';
  //       variant23.innerHTML = '<input type="checkbox" name="" value=""><span>Вариант ответа №3</span></div>';
  //       block2.insertBefore(variant23, block2.children[3]);
  //
  //   var block3 = document.createElement('div');
  //   block3.className = 'blocks';
  //   content.insertBefore(block3, content.children[2]);
  //
  //       var question3 = document.createElement('span');
  //       question3.className = 'questions';
  //       question3.innerHTML = '3. Вопрос №3';
  //       block3.insertBefore(question3, block3.firstChild);
  //
  //       var variant31 = document.createElement('div');
  //       variant31.className = 'variants';
  //       variant31.innerHTML = '<input type="checkbox" name="" value=""><span>Вариант ответа №1</span></div>';
  //       block3.insertBefore(variant31, block3.children[1]);
  //
  //       var variant32 = document.createElement('div');
  //       variant32.className = 'variants';
  //       variant32.innerHTML = '<input type="checkbox" name="" value=""><span>Вариант ответа №2</span></div>';
  //       block3.insertBefore(variant32, block3.children[2]);
  //
  //       var variant33 = document.createElement('div');
  //       variant33.className = 'variants';
  //       variant33.innerHTML = '<input type="checkbox" name="" value=""><span>Вариант ответа №3</span></div>';
  //       block3.insertBefore(variant33, block3.children[3]);
  //
  // var footer = document.createElement('div');
  // footer.className = 'footer';
  // footer.innerHTML = 'Проверить мои результаты';
  // wrapper.appendChild(footer);
