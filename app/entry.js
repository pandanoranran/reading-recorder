'use strict';
import $ from 'jquery';
const global = Function('return this;')();
global.jQuery = $;
import bootstrap from 'bootstrap';

$("#newReview").one("submit", () => {  
  //ラジオボタン
    let chkFormatRadio = $('input[name="format"]:checked').val();
    let chkCategoryRadio = $('input[name="category"]:checked').val();
    if(chkFormatRadio === undefined || chkCategoryRadio === undefined){
      alert("選択されていない項目があります。このまま送信すると集計時に'未設定'として集計されます（後で編集することも可能）"); 
      event.preventDefault();
    }    
  });

  $("#delete").one("submit", () => {   
      //削除ボタン
        alert("削除してよろしいですか？ 本当に削除したい場合にはもう一度削除ボタンを押してください"); 
        event.preventDefault();      
    });

