/* 1. Создайте пустой массив с именем `grades` и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию `Math.random()`.
2. Рассчитайте и выведите средний балл студентов, используя методы массивов.
3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
    - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
    - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
    - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
    - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
    - Если оценка ниже 20, преобразуйте её в "E"

Выведите все найденные значения на экран. */
//1.Создаем пустой массив, заполняем его случайными оценками от 1 до 100, для 12 студентов.
let grades = [];
for(let i = 1; i < 13; i++) {
    let randomMark = Math.round(Math.random() * 100) + 1;
    grades.push(randomMark);
}
let arrGrades = document.querySelector('.grades');
arrGrades.textContent = grades.join(', ');
//2.Рассчитываем средний балл студентов.
let averageMark = document.querySelector('.gpa');
averageMark.textContent = Math.round(grades.reduce((all, grade) => all + grade) / grades.length);
//3. Находим максимальный балл студентов.
let maxPoint = document.querySelector('.maxpoint');
maxPoint.textContent = Math.max(...grades);
//4. Находим минимальный балл студентов.
let minPoint = document.querySelector('.minpoint');
minPoint.textContent = Math.min(...grades);
//5. Считаем количество студентов, получивших балл выше 60
let excMark = document.querySelector('.excellent');
excMark.textContent = grades.filter(mark => mark >= 60).length;
//6. Считаем количество студентов, получивших балл ниже 60
let poorMark = document.querySelector('.poor');
poorMark.textContent = grades.filter(mark => mark < 60).length;
//7. Преобразовываем отметки в буквенный формат.
let format = document.querySelector('.abc');
let formatLetter = grades.map(num=> {
    if(num>=80 && num<=100) {
      return "A";
    } else if (num>=60 && num<=79) {
      return "B";
    } else if (num>=40 && num<=59) {
      return "C";
    } else if (num>=20 && num<=39) {
      return "D";
    } else {
      return "E";
    }
  });
format.textContent = formatLetter.join(', ');