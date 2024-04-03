function printElementsDivisibleBy3(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 3 === 0) {
            console.log(`Элемент с индексом ${i}: ${array[i]}`);
            sum += array[i];
        }
    }
    console.log(`Сумма элементов с идексом, кратные 3: ${sum}`)
}

function printEvenElements(array) {
    const evenElements = array.filter(num => num % 2 === 0);
    console.log("Четные элементы массива:");
    evenElements.forEach(element => console.log(element));
}

function capitalizeFirstLetterOfWords(words) {
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const result = capitalizedWords.join(" ");
    console.log(result);
}

function swapFirstAndLastLetterOfWords(sentence) {
    const result = sentence.split(" ").map(word => {
        if (word.length <= 1) return word;
        return word.charAt(word.length - 1) + word.slice(1, -1) + word.charAt(0);
    }).join(" ");
    console.log(result);
}

function processRealNumbers(numbers) {
    const positiveNumbers = numbers.filter(num => num > 0);
    const negativeNumbers = numbers.filter(num => num < 0);

    console.log("Положительные элементы массива:");
    positiveNumbers.forEach(num => console.log(num));

    console.log(`Количество положительных элементов: ${positiveNumbers.length}`);

    const productOfNegatives = negativeNumbers.reduce((acc, num) => acc * num, 1);
    console.log(`Произведение отрицательных элементов: ${productOfNegatives}`);
}

function countInversions(arr) {
    let inversions = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                inversions++;
            }
        }
    }
    console.log(`Число инверсий: ${inversions}`);
}

function checkSameHeight(team1, team2) {
    const sameHeights = team1.filter(player => team2.includes(player));
    if (sameHeights.length > 0) {
        console.log("Имеются игроки одинакового роста.");
    } else {
        console.log("Нет игроков одинакового роста.");
    }
}

function hasDuplicateElements(arr) {
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            console.log("Есть пара совпадающих элементов.");
            return;
        }
        set.add(arr[i]);
    }
    console.log("Нет пары совпадающих элементов.");
}

const students = [
    { name: 'Tirion', class: 'B', mark: 3 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
    { name: 'Mike', class: 'B', mark: 5 },
    { name: 'Alex', class: 'C', mark: 2 },
];

function calculateAverageMark(students) {
    const totalMarks = students.reduce((acc, student) => acc + student.mark, 0);
    const averageMark = totalMarks / students.length;
    console.log(`Средний балл: ${averageMark}`);

    const maxMark = Math.max(...students.map(student => student.mark));
    console.log(`Максимальный балл: ${maxMark}`);

    const minMark = Math.min(...students.map(student => student.mark));
    console.log(`Минимальный балл: ${minMark}`);

    const totalStudents = students.length;
    console.log(`Общее количество студентов: ${totalStudents}`);

    const totalSum = totalMarks;
    console.log(`Общая сумма баллов: ${totalSum}`);
}

function groupStudentsByClass(students) {
    return students.reduce((acc, student) => {
        acc[student.class] = acc[student.class] || [];
        acc[student.class].push(student);
        return acc;
    }, {});
}

function countSitesByDomain(sites) {
    const result = {};
    sites.forEach(site => {
        const domain = site.split('://')[1] || site;
        const protocol = site.includes('https') ? 'https' : 'http';
        result[protocol] = result[protocol] ? result[protocol] + 1 : 1;
    });
    return result;
}

const n = 10;
const array1 = Array.from({ length: n }, (_, index) => index + 1);
printElementsDivisibleBy3(array1);

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printEvenElements(array2);

const a = ['В', 'лесу', 'родилась', 'елочка'];
capitalizeFirstLetterOfWords(a);

const s = "В лесу родилась елочка";
swapFirstAndLastLetterOfWords(s);

const array5 = [3.5, -2.7, 1.8, -4.2, 6.1, -3.9];
processRealNumbers(array5);

const array6 = [24, 35, 29, 44, 8, 22, 4];
countInversions(array6);

const teamA = [170, 175, 180];
const teamB = [165, 170, 185];
checkSameHeight(teamA, teamB);

const array8 = [3, 5, 2, 7, 3];
hasDuplicateElements(array8);

calculateAverageMark(students);
const groupedStudents = groupStudentsByClass(students);
console.log(groupedStudents);

const sites = [
    'http://google.com',
    'https://hexlet.io',
    'yandex.ru',
    'dzen.ru',
    'https://ya.ru',
    'https://github.com',
    'http://mail.ru',
];

const sitesCountByDomain = countSitesByDomain(sites);
console.log(sitesCountByDomain);