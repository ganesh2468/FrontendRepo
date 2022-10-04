import logo from "./logo.svg";
import "./App.css";
// function userName() {
//   //return "ab";
//   return user.firstName + " " + user.lastNAme;
// }

function palindrome() {
  var temp = 0,x,num,y;
  num = 101;
  y = num;
  while (num > 0) {
    x = num % 10;
    num = parseInt(num / 10);
    temp = temp * 10 + x;
  }
  if (temp == y) {
    return "palindrome";
  } else {
    return "Not a palindrome";
  }
}

// const user = {
//   firstName: "A",
//   lastNAme: "B",
// };
function App() {
  return (
    <>
      <h1>Number is {palindrome()}</h1>
    </>
  );
}

export default App;
