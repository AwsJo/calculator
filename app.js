// Create Calculator From app.js
const input = document.querySelector("main .calculator div");
//console.log(input.lastChild);

function calculator(key) {
  switch (key) {
    case "1":
      input.append(document.createTextNode("1"));
      break;
    case "2":
      input.append(document.createTextNode("2"));
      break;
    case "3":
      input.append(document.createTextNode("3"));
      break;
    case "4":
      input.append(document.createTextNode("4"));
      break;
    case "5":
      input.append(document.createTextNode("5"));
      break;
    case "6":
      input.append(document.createTextNode("6"));
      break;
    case "7":
      input.append(document.createTextNode("7"));
      break;
    case "8":
      input.append(document.createTextNode("8"));
      break;
    case "9":
      input.append(document.createTextNode("9"));
      break;
    case "0":
      input.append(document.createTextNode("0"));
      break;
    case "/":
      {
        if (input.firstChild === null) {
          // Do nothing
        } else if (
          input.lastChild["data"] == "/" ||
          input.lastChild["data"] == "*" ||
          input.lastChild["data"] == "."
        ) {
          input.lastChild.remove();
          input.append(document.createTextNode("/"));
        } else {
          input.append(document.createTextNode("/"));
        }
      }
      break;
    case "*":
      {
        if (input.firstChild === null) {
          // Do nothing
        } else if (
          input.lastChild["data"] == "/" ||
          input.lastChild["data"] == "*" ||
          input.lastChild["data"] == "."
        ) {
          input.lastChild.remove();
          input.append(document.createTextNode("*"));
        } else {
          input.append(document.createTextNode("*"));
        }
      }
      break;
    case "-":
      {
        if (input.firstChild != null) {
          switch (input.lastChild["data"]) {
            case "-":
              {
                input.lastChild.remove();
                input.append(document.createTextNode("+"));
              }
              break;
            case "+":
              {
                input.lastChild.remove();
                input.append(document.createTextNode("-"));
              }
              break;
            case ".":
              {
                input.lastChild.remove();
                input.append(document.createTextNode("-"));
              }
              break;

            default:
              input.append(document.createTextNode("-"));
              break;
          }
        } else {
          // We seperate it from defult because it throw erorr
          // if we try to read a proptity of null item
          input.append(document.createTextNode("-"));
        }
      }
      break;
    case "+":
      {
        if (input.firstChild != null) {
          switch (input.lastChild["data"]) {
            case "-":
              {
                input.lastChild.remove();
                input.append(document.createTextNode("-"));
              }
              break;
            case "+":
              {
                input.lastChild.remove();
                input.append(document.createTextNode("+"));
              }
              break;
            case ".":
              {
                input.lastChild.remove();
                input.append(document.createTextNode("+"));
              }
              break;

            default:
              input.append(document.createTextNode("+"));
              break;
          }
        } else {
          // We seperate it from defult because it throw erorr
          // if we try to read a proptity of null item
          input.append(document.createTextNode("+"));
        }
      }
      break;
    case ".":
      {
        if (input.firstChild === null) {
          input.append(document.createTextNode("0"));
          input.append(document.createTextNode("."));
        } else if (
          input.lastChild["data"] == "/" ||
          input.lastChild["data"] == "*" ||
          input.lastChild["data"] == "+" ||
          input.lastChild["data"] == "-"
        ) {
          input.append(document.createTextNode("0"));
          input.append(document.createTextNode("."));
        } else if (input.lastChild["data"] == ".") {
          // Do nothing
        } else {
          input.append(document.createTextNode("."));
        }
      }
      break;
    case "Backspace":
      {
        if (input.lastChild !== null) {
          input.lastChild.remove();
        }
      }
      break;
    case "c":
      {
        while (input.lastChild) {
          input.lastChild.remove();
        }
      }
      break;
    case "C":
      {
        while (input.lastChild) {
          input.lastChild.remove();
        }
      }
      break;
    case "Enter":
      {
        if (input.firstChild !== null) {
          let arrayNodes = [];
          for (
            let index = 0;
            index < input.childNodes.length && input.firstChild;
            index++
          ) {
            arrayNodes.push(input.childNodes[index]["data"]);
          }
          while (input.lastChild) {
            input.lastChild.remove();
          }
          input.appendChild(document.createTextNode(eval(arrayNodes.join(""))));
        }
      }
      break;
    case "=":
      {
        if (input.firstChild !== null) {
          let arrayNodes = [];
          for (
            let index = 0;
            index < input.childNodes.length && input.firstChild;
            index++
          ) {
            arrayNodes.push(input.childNodes[index]["data"]);
          }
          while (input.lastChild) {
            input.lastChild.remove();
          }
          input.appendChild(document.createTextNode(eval(arrayNodes.join(""))));
        }
      }
      break;
    default:
      break;
  }
}
// Keybored Listener
window.addEventListener(
  "keydown",
  (event) => {
    calculator(event.key);
  },
  true
);
