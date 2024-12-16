// 1 ex
const regExp = /Регулярные выражения/

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));


// 2 ex
const logEverySecond = () => {
    setInterval(() => {
        console.log("Прошла секунда")
    }, 1000);
};

logEverySecond()

// 3 ex
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
};
count();

// 4 ex
const block = document.getElementById("toggle-block");

block.addEventListener("click", () => {
    if (block.style.backgroundColor === "lightblue") {
        block.style.backgroundColor = "";
    } else {
        block.style.backgroundColor = "lightblue";
    }
});

// 5 ex

const url = 'test.json';
const xhr = new XMLHttpRequest();

xhr.open('GET', url, true);

xhr.onload = () => {
    if (xhr.status === 200) {
        try {
            const data = JSON.parse(xhr.responseText);
            console.log('Полученные данные:', data);
        } catch (e) {
            console.error('Ошибка парсинга JSON:', e);
        }
    } else {
        console.error('Ошибка запроса:', xhr.status);
    }
};
xhr.onerror = () => {
    console.error('Ошибка при выполнении запроса.');
};
xhr.send();
