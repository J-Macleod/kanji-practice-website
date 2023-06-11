function setData(dataName, data) {
    localStorage.setItem(dataName, data)
}

function getData(dataName) {
    data = localStorage.getItem(dataName)
    return data
}

let english_list = getData("english_list").split(",")
let hiragana_list = getData("hiragana_list").split(",")
let kanji_list = getData("kanji_list").split(",")
let active_list =  getData("active_list").split(",") 

function fillTable(english_list, hiragana_list, kanji_list, active_list) {
    let table_code_string = ""
    for (let i = 0; i < english_list.length; i++) {
        if (active_list[i] == "true") {
            table_code_string += "<tr><th>"+english_list[i]+"</th><th>"+hiragana_list[i]+"</th><th>"+kanji_list[i]+"</th><th><input onclick='setActiveStatus("+i+")' type='checkbox' checked='true' id='enablecheckbox"+i+"'></th><th><input type='button' onclick='deletePhrase("+i+")' id='deletebutton"+i+"' value='Delete'></th></tr>"
        } 
        else if (active_list[i] == "false") {
            table_code_string += "<tr><th>"+english_list[i]+"</th><th>"+hiragana_list[i]+"</th><th>"+kanji_list[i]+"</th><th><input onclick='setActiveStatus("+i+")' type='checkbox' id='enablecheckbox"+i+"'></th><th><input type='button' onclick='deletePhrase("+i+")' id='deletebutton"+i+"' value='Delete'></th></tr>"
        }
    }

    document.getElementById('listtable').innerHTML = "<table class='center' width='1000px' height='50px'><tr><th>English</th><th>Hiragana / Katakana</th><th>Kanji</th><th>Enable</th><th>Delete</th></tr>"+table_code_string+"</table>"
}

window.onload = function(){fillTable(english_list, hiragana_list, kanji_list, active_list)}