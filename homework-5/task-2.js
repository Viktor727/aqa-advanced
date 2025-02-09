const averageGrade = 200;

const scoreDetect = (score) => {
    switch (true) {
      case score < 60:
        console.log("Незадовільно");
        break;

      case score >= 60 && score <= 70:
        console.log("Задовільно");
        break;

      case score >= 71 && score <= 80:
        console.log("Добре");
        break;

      case score >= 81 && score <= 90:
        console.log("Дуже добре");
        break;

      case score >= 91 && score <= 100:
        console.log("Відмінно");
        break;

      default:
      console.log("Ваші дані перевищують межі більше 1 та менше 100. \nВведіть дані більші за 1 та менші за 100");
    }
}

scoreDetect(averageGrade);