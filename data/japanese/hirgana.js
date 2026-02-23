let temp = [];
function hiragana() {
    const trs = document.querySelector(".wikitable.nowraplinks").querySelectorAll('tr');

    for (let i = 2; i < 12; i++) {
        //console.log(trs[i])
        const tds = trs[i].querySelectorAll('td');
        for (let j = 0; j < 5; j++) {
            //console.log(tds[j])
            const result = {
                Kana: tds[j].querySelector("a").innerText,
                Reading: tds[j].innerHTML.match(/\<br\> [^ ]+/)[0].replace("<br> ", "").replace("<b>", "").replace("</b>", ""),
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
                Kana: tds[j].querySelector("a").innerText,
                Reading: tds[j].innerHTML.match(/\<br\> [^ ]+/)[0].replace("<br> ", "").replace("<b>", "").replace("</b>", "").slice(0, 1).toUpperCase() + tds[j].innerHTML.match(/\<br\> [^ ]+/)[0].replace("<br> ", "").replace("<b>", "").replace("</b>", "").slice(1).toLocaleLowerCase(),
                Strokes: ""
            }
            temp.push(result);
        }
    }
}
hiragana();
console.log(temp);