// XMLHttpRequestを使ってjsonデータを読み込む
let requestURL = '50.json';//jsonへのパス
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
 
// JSONデータをJavaScriptオブジェクトに変換
request.onload = function () {
  let data = request.response;
  data = JSON.parse(JSON.stringify(data));
  dataArray(data);
}
 
// foreachでJSONデータをHTMLに出力
function dataArray(els) {
  // JSONデータを出力したいHTML要素を指定
  let array = document.querySelector('.array');
  els.forEach(el => {
    let id = el.id;
    let original_text = el.original_text;

    let code = '<ul>'+
    '<li>名前：' + id + '</li>'+
    '<li>学年：' + original_text + '</li>'+
    '</ul>';
    array.insertAdjacentHTML('quiz',code);
  });
}