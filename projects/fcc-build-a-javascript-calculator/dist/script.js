function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "clearAll",







    () => {
      this.setState({
        input: "",
        output: 0 });

    });_defineProperty(this, "addToInput",

    val => {
      let prevInput = this.state.input;
      let len = this.state.input.length;

      //check for multiple 0's at beginning
      if (prevInput[0] === "0" && val === "0")
      val = "";

      //check for multiple '.' in a number
      if (val === ".") {
        let posOfdecimal = 0; //index for previous decimal if any
        let posOfOperator = 0; //positon for operators if any
        for (let i = 0; i < len; i++) {
          if (prevInput[i] === ".")
          posOfdecimal = i;else
          if (/[^0-9.]/.test(prevInput[i]))
          posOfOperator = i;
        }

        //there is a decimal in the last number
        if (posOfdecimal > posOfOperator)
        val = "";
      }

      if (prevInput[len - 1] === "=") {
        if (/[0-9.]/.test(val))
        this.clearAll();else

        this.setState({
          input: this.state.output + val,
          output: this.state.output + val });
      } else
      {
        this.setState({
          input: prevInput + val,
          output: prevInput + val });
      }


    });_defineProperty(this, "calculate",

    state => {
      this.setState({
        input: this.state.input + "=",
        output: eval(this.state.input) });

    });this.state = { input: "", output: 0 };}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "calculator" }, /*#__PURE__*/
      React.createElement("div", { className: "button-pads" }, /*#__PURE__*/
      React.createElement("div", { id: "display-window" }, /*#__PURE__*/
      React.createElement("input", { id: "input", value: this.state.input, disabled: true }), /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("input", { id: "display", value: this.state.output, placeholder: "0", disabled: true })), /*#__PURE__*/

      React.createElement("button", { className: "button", id: "clear", onClick: this.clearAll }, "AC"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "divide", onClick: this.addToInput.bind(this, "/") }, "/"), /*#__PURE__*/
      React.createElement("button", { className: "button time", id: "multiply", onClick: this.addToInput.bind(this, "*") }, "x"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "seven", onClick: this.addToInput.bind(this, "7") }, "7"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "eight", onClick: this.addToInput.bind(this, "8") }, "8"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "nine", onClick: this.addToInput.bind(this, "9") }, "9"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "subtract", onClick: this.addToInput.bind(this, "-") }, "-"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "four", onClick: this.addToInput.bind(this, "4") }, "4"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "five", onClick: this.addToInput.bind(this, "5") }, "5"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "six", onClick: this.addToInput.bind(this, "6") }, "6"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "add", onClick: this.addToInput.bind(this, "+") }, "+"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "one", onClick: this.addToInput.bind(this, "1") }, "1"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "two", onClick: this.addToInput.bind(this, "2") }, "2"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "three", onClick: this.addToInput.bind(this, "3") }, "3"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "equals", onClick: this.calculate }, "="), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "zero", onClick: this.addToInput.bind(this, "0") }, "0"), /*#__PURE__*/
      React.createElement("button", { className: "button", id: "decimal", onClick: this.addToInput.bind(this, ".") }, "."))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));