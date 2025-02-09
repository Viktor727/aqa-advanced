const averageGrade = 55;

const scoreDetect = (score) => {
    if (score < 60) {
      console.log("Незадовільно");
    } else if (score >= 60 && score <= 70) {
      console.log("Задовільно");
    } else if (score >= 71 && score <= 80) {
      console.log("Добре");
    } else if (score >= 81 && score <= 90) {
      console.log("Дуже добре");
    } else if (score >= 91 && score <= 100) {
      console.log("Відмінно");
    }
}

scoreDetect(averageGrade);