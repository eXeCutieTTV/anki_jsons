let temp = [];
function katakana() {
    const trs = document.querySelector(".wikitable.nowraplinks").querySelectorAll('tr');

    for (let i = 2; i < 12; i++) {
        //console.log(trs[i])
        const tds = trs[i].querySelectorAll('td');
        for (let j = 0; j < 5; j++) {
            //console.log(tds[j])
            const result = {
                Kana: tds[j].querySelector("a").innerText.replace(/[\[\]]/g, "").trim(),
                Reading: tds[j].querySelector("a").title.replace("(kana)", "").trim(),
                Strokes: ""
            }
            temp.push(result);
        }
    }
    for (let i = 15; i < 19; i++) {
        //console.log(trs[i])
        const tds = trs[i].querySelectorAll('td');
        for (let j = 0; j < 5; j++) {
            //console.log(tds[j])
            const result = {
                Kana: tds[j].querySelectorAll("span")[1].innerText.replace(/[\[\]]/g, "").trim(),
                Reading: tds[j].querySelectorAll("span")[2].innerText.trim().slice(0,1).toUpperCase()+tds[j].querySelectorAll("span")[2].innerText.trim().slice(1).toLowerCase(),
                Strokes: ""
            }
            temp.push(result);
        }
    }
}
katakana();
console.log(temp);