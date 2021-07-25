//array ojects
const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  
  //1
function getSubjects(student) {
  const teaching = Object.keys(student.subjects);
  const resultSubjects = teaching.map(function(value) {
    const nameSubject = value.split('_').join(' ');

    return nameSubject[0].toUpperCase() + nameSubject.slice(1);
  })

  return resultSubjects;
}

  console.log('resultSubjects', getSubjects(students[0]));

   //f2
function getAverageMark(student) {
  const average = Object.values(student.subjects).flat();

    return Number(average.reduce((sum, element)=> {
      return sum += element;
    },0)/average.length).toFixed(2)
}

console.log('average', getAverageMark(students[0]))
    
//f3
function getStudentInfo(student) {
  const {name,course} = student;
  const objectStudentInfo = {
    course,
    name,
    averageMark : getAverageMark(student),
  };

  return objectStudentInfo;
}

console.log('StudentInfo', getStudentInfo(students[0]));

//f4
function getStudentsNames(student) {
  const result = students.map(object => object.name).sort();

  return result;
}
 console.log('StudentsNames', getStudentsNames(students));
//f5
function  getBestStudent(students){
  let bestname = '';

  Object.values(students).forEach(element=> {
    let bestmark = 0;
    const averageMark = getAverageMark(element);

    if (bestmark < averageMark)  {
      bestmark = averageMark;
      bestname = element.name;
    }
  })

  return bestname;
}

console.log('BestStudent', getBestStudent(students));

   //f6
function calculateWordLetters(letter) {
  let sum = {};
  
  for (i = 0; i < letter.length; i++) {
    sum[letter[i]] = sum[letter[i]] + 1 || 1;
  }

  return sum;
}

console.log('calculateWordLetters', calculateWordLetters('test'));