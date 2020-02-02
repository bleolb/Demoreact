import React from "react";
import { preguntasData } from "./preguntasData";

class MenuPreguntas extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false
  };

  loadPreguntasData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        pregunta: preguntasData[this.state.currentQuestion].pregunta,
        respuesta: preguntasData[this.state.currentQuestion].respuesta,
        opciones: preguntasData[this.state.currentQuestion].opciones
      };
    });
  };

  componentDidMount() {
    this.loadPreguntasData();
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state;

    if (myAnswer === answer) {
      this.setState({
        score: score + 1
      });
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          pregunta: preguntasData[this.state.currentQuestion].pregunta,
        respuesta: preguntasData[this.state.currentQuestion].respuesta,
        opciones: preguntasData[this.state.currentQuestion].opciones
        };
      });
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false });
  };
  finishHandler = () => {
    if (this.state.currentQuestion === preguntasData.length - 1) {
      this.setState({
        isEnd: true
      });
    }
  };
  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state;

    if (isEnd) {
      return (
        <div className="result">
          <h3>Juego terminado tu puntaje es: {this.state.score} puntos </h3>
          <p>
            La respuesta correcta
            <ul>
              {preguntasData.map((item, index) => (
                <li className="ui floating message options" key={index}>
                  {item.answer}
                </li>
              ))}
            </ul>
          </p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1>{this.state.questions} </h1>
          <span>{`Questions ${currentQuestion}  out of ${preguntasData.length -
            1} remaining `}</span>
          {options.map(option => (
            <p
              key={option.id}
              className={`ui floating message options
         ${myAnswer === option ? "selected" : null}
         `}
              onClick={() => this.checkAnswer(option)}
            >
              {option}
            </p>
          ))}
          {currentQuestion < preguntasData.length - 1 && (
            <button
              className="ui inverted button"
              disabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
            >
              Dome
            </button>
          )}
      
          {currentQuestion === preguntasData.length - 1 && (
            <button className="ui inverted button" onClick={this.finishHandler}>
              terminar            </button>
          )}
        </div>
      );
    }
  }
}

export default MenuPreguntas;