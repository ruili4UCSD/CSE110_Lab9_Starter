window.addEventListener('DOMContentLoaded', init);
window.addEventListener('error', function(){
  TrackJS.track('Testing TrackJS!');
  alert("error happened somewhere, check it!");
});

// task 4
class SecondColumnError extends Error {
  constructor(message) {
    super(message);
    this.name = "SecondColumnError";
  }
}


function init() {

  let form = document.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();

    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    // task 3
    try{
      // reg for all decimal num and negative num
      let regex = /^-?\d+(\.\d+)?$/;
      if( !regex.test(firstNum)){
        throw new TypeError("You entered something wrong not a number.");
      }
      if( !regex.test(secondNum) ){
        throw new SecondColumnError("You entered something wrong not a number.");
      }
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
      let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
    }catch(err){
      if (err instanceof TypeError) {alert("Error in your first Column: " + err.message ); }
      else if (err instanceof SecondColumnError) {alert("Error in your second Column: " + err.message ); }
      else { throw err; }
    }
  });

  // Start your code here
  // You may move this JS to another file if you wish


  // Console Log
  document.getElementById('log-btn').addEventListener('click', function() {
    console.log('This is console.log.');
  });

  // Console Error
  document.getElementById('error-btn').addEventListener('click', function() {
    console.error('This is console error.');
  });

  // Console Count
  let count = 0;
  document.getElementById('count-btn').addEventListener('click', function() {
    console.log('Count 4 times');
    console.count('Count');
    console.count('Count');
    console.count('Count');
    console.count('Count');
  });

  // Console Warn
  document.getElementById('warn-btn').addEventListener('click', function() {
    console.warn('This is console warning.');
  });

  // Console Assert
  document.getElementById('assert-btn').addEventListener('click', function() {
    const x = 1
    const y = 9999999
    why = "x should equal to y"
    console.assert(x == y, {x, y, why});
  });

  // Console Clear
  document.getElementById('clear-btn').addEventListener('click', function() {
    console.clear();
  });

  // Console Dir
  document.getElementById('dir-btn').addEventListener('click', function() {
    const fortunes = [
      {
          "name": "Celeste",
          "id": "fortune1",
          "text": "you will not die soon probably"
      },
      {
          "name": "Celeste",
          "id": "fortune2",
          "text": "you will literally explode"
      }
  ]
    console.dir(fortunes);
  });

  // Console Dirxml
  document.getElementById('dirxml-btn').addEventListener('click', function() {
    console.dirxml(document.head);
  });

  // Console Group Start
  document.getElementById('group-start-btn').addEventListener('click', function() {
    console.group('Group1');
    console.log('Group1 Message 1');
    console.log('Group1 Message 2');
  });

  // Console Group End
  document.getElementById('group-end-btn').addEventListener('click', function() {
    console.log('Group1 Message 3');
    console.log('Group1 Message 4');
    console.groupEnd();
  });

  // Console Table
  document.getElementById('table-btn').addEventListener('click', function() {
    const fortunes = [
      {
          "name": "Celeste",
          "id": "fortune1",
          "text": "you will not die soon probably"
      },
      {
          "name": "Celeste",
          "id": "fortune2",
          "text": "you will literally explode"
      }
  ]
    console.table(fortunes);
  });

  // Start Timer
  document.getElementById('start-timer-btn').addEventListener('click', function() {
    console.time('TimerStart');
  });

  // End Timer
  document.getElementById('end-timer-btn').addEventListener('click', function() {
    console.timeEnd('TimerStart');
  });

  // Console Trace
  document.getElementById('trace-btn').addEventListener('click', function() {
    console.trace();
  });

  // Trigger a Global Error
  document.getElementById('trigger-error-btn').addEventListener('click', function() {
    // task 5 error 
    // const temp = { "name": "Celeste" };
    // console.log(temp.id);
    bark();
  });


  // task 3
  // thereIsAnError();
}

// function thereIsAnError() {
//   try{
//     const clickLog = getElementById('log-tn');
//     clickLog.click();
//   }catch(err){
//     alert(err.name);
//     alert("there is an error when you try to click console log, check your code.");
//   }finally{
//     return 0;
//   }
// }
