const temp = [];
function anki(id) {
    for (const trs of document.querySelectorAll(".wikitable")[id
    ].children[0].children) {
        if (trs.children[0].innerText !== "Character") {
            console.log(trs)
            const split = trs.children[0].innerText.split("(");
            for (const kanji of split[0].split("/")) {
                temp.push({
                    "Kanji": kanji,
                    "Meanings": trs.children[2].innerText,
                    "Kunyomi": trs.children[3].innerText,
                    "Onyomi": trs.children[4].innerText,
                    "Nanori": "",
                    "Stroke number": trs.children[1].innerText,
                    "Source": "https://en.wikipedia.org/wiki/List_of_kanji_radicals_by_frequency",
                    "Components": "",
                    "Mnemonic": ""
                });
            }
        }
    }
}
for (let i = 0; i < 2; i++)anki(i)