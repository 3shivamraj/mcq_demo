const quiz = [
  {
    question: "What is the size of int in Java?",
    optionA: "4 bytes", // correct
    optionB: "2 bytes",
    optionC: "8 bytes",
    optionD: "1 byte",
    correct: "4 bytes",
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    optionA: "extends", // correct
    optionB: "implements",
    optionC: "inherits",
    optionD: "super",
    correct: "extends",
  },
  {
    question: "Which of these is not a Java keyword?",
    optionA: "goto",
    optionB: "const",
    optionC: "main", // correct
    optionD: "super",
    correct: "main",
  },
  {
    question: "Which method is the entry point of a Java program?",
    optionA: "main()", // correct
    optionB: "start()",
    optionC: "run()",
    optionD: "init()",
    correct: "main()",
  },
  {
    question: "What is JVM?",
    optionA: "Java Virtual Machine", // correct
    optionB: "Java Verified Method",
    optionC: "Java Variable Manager",
    optionD: "Java Visual Machine",
    correct: "Java Virtual Machine",
  },
  {
    question: "Which is not an OOP concept in Java?",
    optionA: "Compilation", // correct
    optionB: "Inheritance",
    optionC: "Encapsulation",
    optionD: "Polymorphism",
    correct: "Compilation",
  },
  {
    question: "How are exceptions handled in Java?",
    optionA: "try-catch", // correct
    optionB: "throws",
    optionC: "goto",
    optionD: "finalize",
    correct: "try-catch",
  },
  {
    question: "Default value of a boolean in Java?",
    optionA: "false", // correct
    optionB: "true",
    optionC: "0",
    optionD: "null",
    correct: "false",
  },
  {
    question: "Which interface is used to create a thread in Java?",
    optionA: "Runnable", // correct
    optionB: "Threadable",
    optionC: "Callable",
    optionD: "Async",
    correct: "Runnable",
  },
  {
    question: "Which is not a primitive data type in Java?",
    optionA: "String", // correct
    optionB: "int",
    optionC: "boolean",
    optionD: "double",
    correct: "String",
  },
];

let q = document.querySelector(".ask");
let a = document.querySelector(".text-option-a");
let b = document.querySelector(".text-option-b");
let c = document.querySelector(".text-option-c");
let d = document.querySelector(".text-option-d");
let btn = document.querySelector("#submit");
let op = document.getElementsByName("options");
let show = document.querySelector("#show");
let score = 0;
let i = 0;

q.textContent = Object.values(quiz[i])[0]; // Object.values
a.textContent = Object.values(quiz[i])[1]; // Object.values
b.textContent = Object.values(quiz[i])[2]; // Object.values
c.textContent = Object.values(quiz[i])[3]; // Object.values
d.textContent = Object.values(quiz[i])[4]; // Object.values

btn.addEventListener("click", () => {
  let checkedAns = document.querySelector('input[type="radio"]:checked');
  if (checkedAns === null) {
    alert("Please select any option");
  } else {
    if (quiz[i].correct == checkedAns.nextElementSibling.textContent) {
      score++;
    }

    

    if (i < quiz.length - 1) {
      show.textContent="";
      show.style.margin ="0";
      checkedAns.checked = false;
      i++;
      q.textContent = Object.values(quiz[i])[0]; // Object.values
      a.textContent = Object.values(quiz[i])[1]; // Object.values
      b.textContent = Object.values(quiz[i])[2]; // Object.values
      c.textContent = Object.values(quiz[i])[3]; // Object.values
      d.textContent = Object.values(quiz[i])[4]; // Object.values
    } else {
      show.style.margin = "7px";
      show.textContent = `your score is ${score} out of 10`;
      checkedAns.checked = false;
      i = 0;
      score = 0;
      q.textContent = Object.values(quiz[i])[0]; // Object.values
      a.textContent = Object.values(quiz[i])[1]; // Object.values
      b.textContent = Object.values(quiz[i])[2]; // Object.values
      c.textContent = Object.values(quiz[i])[3]; // Object.values
      d.textContent = Object.values(quiz[i])[4]; // Object.values
    }
  }
});
