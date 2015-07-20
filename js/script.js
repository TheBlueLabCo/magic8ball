var answer = Math.random();

if (answer <= 0.250) {
  document.write("<p>Yes</p>");
} else if (answer > 0.250 && answer <= 0.500){
    document.write("<p>Yes, you can!</p>");
} else if (answer > 0.500 && answer <= 0.750) {
  document.write("<p>You will succeed</p>");
} else {
  document.write("<p>You have my permission</p>");
}
