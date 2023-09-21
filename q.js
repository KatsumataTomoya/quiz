// JSONデータを読み込むためのURL
let jsonURL = '/quiz/50.json'; // JSONファイルのパスを指定

// JSONデータを表示する関数
function displayProblems(data) {
    let problemList = document.getElementById('problemList');
    
    // 各問題をHTMLとして表示
    data.forEach(problem => {
        let problemHTML = `
            <div>
                <p>問題 ${problem.id}</p>
                <p>${problem.original_text}</p>
            </div>
        `;
        problemList.insertAdjacentHTML('beforeend', problemHTML);
    });
}

// JSONデータを非同期で読み込む
fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
        displayProblems(data);
    })
    .catch(error => {
        console.error('JSONデータの読み込みエラー:', error);
    });