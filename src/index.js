import "./style.css";

const XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
let videosList = [];
let videosInfo = [];
const xhr = new XHR();
let elem = document.body;


const KEY = "AIzaSyC3Mhk7GqVcazsOCbtyDi60q5pm00an-Rk";

let uploadedVideo = 0;
//console.log("hello,word");
//console.log("hello,word");
let urlPicture;

function search() {
  const KEYWORD = document.querySelector("#searchText").value;
  let URL;
  URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${uploadedVideo +
  15}&q=${KEYWORD}&key=${KEY}`;
  console.log(URL);
  xhr.open("GET", URL, true);
  xhr.onload = function(name, value) {

    videosList = JSON.parse(this.response);
    //  alert( this.responseText.toString().split(",")[4]);
    console.log(videosList);
    //  console.log(videosList.items[0].snippet.thumbnails.high.url);
    urlPicture = (videosList.items[0].snippet.thumbnails.high.url);
    alert(urlPicture);


    drawPage();
  };

  xhr.onerror = function() {
    alert("Ошибка " + this.status);
  };

  xhr.send();
}

function uploadLinks() {
}

function drawPage() {
  let d1 = document.getElementById("slider");
  let card = "";
  for (let i = 0; i < 15; i++) {
    urlPicture = (videosList.items[i].snippet.thumbnails.high.url);
     let channeltitlePicture = videosList.items[i].snippet.channelTitle;
     let descriptionPicture = videosList.items[i].snippet.description;
     let link=videosList.items[i].id.videoId;
     console.log(link);
     let titlePicture = videosList.items[i].snippet.title;
    card += `<div class="slider__item"><a href="https://www.youtube.com/watch?v=${link}"><img hspace="5" vspace="5" src="${urlPicture}" alt='video preview'></a>
<p><strong>Channel</strong>:${channeltitlePicture}</p>
<p>Description:${descriptionPicture}</p>
<p> ${titlePicture}</p>
</div>`;
  }
  d1.innerHTML = card;
   let _slider= document.querySelector(".slider");
  _slider.style.display="block";
  var slider = multiItemSlider(".slider");

}

document.querySelector("#button").addEventListener("click", search);
//////////////////////////////////////////////////////////slider
"use strict";
var multiItemSlider = (function() {

  return function(selector, config) {
    var
      _slider= document.querySelector(".slider"),
      _mainElement = document.querySelector(selector), // основный элемент блока
      _sliderWrapper = _mainElement.querySelector(".slider__wrapper"), // обертка для .slider-item
      _sliderItems = _mainElement.querySelectorAll(".slider__item"), // элементы (.slider-item)
      _sliderControls = _mainElement.querySelectorAll(".slider__control"), // элементы управления
      _sliderControlLeft = _mainElement.querySelector(".slider__control_left"), // кнопка "LEFT"
      _sliderControlRight = _mainElement.querySelector(".slider__control_right"), // кнопка "RIGHT"
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
      _positionLeftItem = 0, // позиция левого активного элемента
      _transform = 0, // значение транфсофрмации .slider_wrapper
      _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
      _items = []; // массив элементов

    // наполнение массива _items
    _sliderItems.forEach(function(item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });

    var position = {
      getItemMin: function() {
        var indexItem = 0;
        _items.forEach(function(item, index) {
          if (item.position < _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getItemMax: function() {
        var indexItem = 0;
        _items.forEach(function(item, index) {
          if (item.position > _items[indexItem].position) {
            indexItem = index;
          }
        });
        return indexItem;
      },
      getMin: function() {
        return _items[position.getItemMin()].position;
      },
      getMax: function() {
        return _items[position.getItemMax()].position;
      }
    };

    var _transformItem = function(direction) {
      var nextItem;
      if (direction === "right") {
        _positionLeftItem++;
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
          nextItem = position.getItemMin();
          _items[nextItem].position = position.getMax() + 1;
          _items[nextItem].transform += _items.length * 100;
          _items[nextItem].item.style.transform = "translateX(" + _items[nextItem].transform + "%)";
          console.log(_items[nextItem].item.style.transform);
        }
        _transform -= _step;
      }
      if (direction === "left") {
        _positionLeftItem--;
        if (_positionLeftItem < position.getMin()) {
          nextItem = position.getItemMax();
          _items[nextItem].position = position.getMin() - 1;
          _items[nextItem].transform -= _items.length * 100;
          _items[nextItem].item.style.transform = "translateX(" + _items[nextItem].transform + "%)";

        }
        _transform += _step;
      }
      _sliderWrapper.style.transform = "translateX(" + _transform + "%)";
    };

    // обработчик события click для кнопок "назад" и "вперед"
    var _controlClick = function(e) {
      var direction = this.classList.contains("slider__control_right") ? "right" : "left";
      e.preventDefault();
      _transformItem(direction);
    };

    var _setUpListeners = function() {
      // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
      _sliderControls.forEach(function(item) {
        item.addEventListener("click", _controlClick);
      });
    };

    // инициализация
    _setUpListeners();

    return {
      right: function() { // метод right
        _transformItem("right");
      },
      left: function() { // метод left
        _transformItem("left");
      }
    };

  };
}());


