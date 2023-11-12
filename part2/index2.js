
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