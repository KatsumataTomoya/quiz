let jsonURL = '50.json'; // JSONファイルのパスを指定

// JSONデータを取得し、表示する関数
function displayJSONData(data) {
    let jsonContent = document.getElementById('quiz');
    
    // JSONデータを文字列に変換して表示
    jsonContent.textContent = JSON.stringify(data, null, 2);
}

// JSONデータを非同期で読み込む
fetch(/quiz/q.js)
    .then(response => response.json())
    .then(data => {
        displayJSONData(data);
    })
    .catch(error => {
        console.error('JSONデータの読み込みエラー:', error);
    });