//Three Variables here - the correct answers, the form (look for quiz-form in the HTML), and the result which is currently hidden.

const correctAnswers = ['A', 'B', 'B', 'A', 'B', 'A', 'B', 'A', 'A', 'A']; //this can be any way you want 
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

//Setting that parameter to submit which will work for enter and clicking
form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value]; 

  console.log(userAnswers);

  // check the answers
  // This is just a call back to go from the index. =>
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){ //=== is the same as 
      score += 10;                         //score is a percentage - more questions means change in percentage per each one. 
    }
  });

  // show the result - note that the score variable is using ` not ' - it's the key to the left of 1 
  
  result.querySelector('span').textContent = `${score}%`; 
  result.classList.remove('d-none');

  //console.log(score);   //use this if you want to see it in console. 


  //$('#myModal').on('shown.bs.modal', function () {
 //   $('#myInput').trigger('focus')
 // })

});