import Component from './core/Component.js';
import Display from './components/Display.js';
import Controller from './components/Controller.js';

class App extends Component {
  setup() {
		this.state = {
			displayedNumber: 0,
			firstOperand: undefined,
			secondOperand: undefined,
			recentOperand: 0,
			operator: undefined,
			isDot: false,
			clearButtonText: 'AC',
		};
	}

	template() {
		return `
      <header><h1>Calculator</h1></header>
      <main>
        <div data-component="display" class="display"></div>
        <div data-component="controller"></div>
      </main>
      <footer>
        <h5>Made with ☕️ by <a href="https://github.com/srngch">srngch</a></h5>
      </footer>
    `;
	}

	mount() {
		const {
			displayNumber,
			handleNumberButton,
			handleDotButton,
			handleOperatorButton,
			handleResultButton,
			handleClearButton,
			toggleSignButton,
			handlePercentButton,
		} = this;
		const { displayedNumber, clearButtonText } = this.state;
		const display = this.target.querySelector('[data-component="display"]');
		const controller = this.target.querySelector(
			'[data-component="controller"]'
		);

		new Display(display, {
			displayedNumber,
			displayNumber: displayNumber.bind(this),
		});

		new Controller(controller, {
			clearButtonText,
			handleClearButton: handleClearButton.bind(this),
			toggleSignButton: toggleSignButton.bind(this),
			handlePercentButton: handlePercentButton.bind(this),
			handleNumberButton: handleNumberButton.bind(this),
			handleDotButton: handleDotButton.bind(this),
			handleOperatorButton: handleOperatorButton.bind(this),
			handleResultButton: handleResultButton.bind(this),
		});
		console.table(this.state);
	}

	setEvent() {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Shift' || e.key === ' ') {
				return;
			}
			console.dir(e);
			const {
				handleClearButton,
				toggleSignButton,
				handlePercentButton,
				handleNumberButton,
				handleDotButton,
				handleOperatorButton,
				handleResultButton,
			} = this;
			if (isNaN(e.key)) {
				const executes = {
					Escape: handleClearButton.bind(this),
					Enter: handleResultButton.bind(this),
					'+': handleOperatorButton.bind(this),
					'-': handleOperatorButton.bind(this),
					'*': handleOperatorButton.bind(this),
					'/': handleOperatorButton.bind(this),
					'%': handlePercentButton.bind(this),
					',': toggleSignButton.bind(this),
					'.': handleDotButton.bind(this),
				};
				const params = {
					'+': 'plus',
					'-': 'minus',
					'*': 'multiply',
					'/': 'divide',
				};
				executes[e.key](params[e.key]);
				return;
			}

			handleNumberButton.bind(this)(Number(e.key));
		});
	}

	displayNumber(newNumber) {
		this.setState({
			displayedNumber: newNumber,
		});
	}

	handleNumberButton(selectedNumber) {
		const { firstOperand,secondOperand,  recentOperand, operator, isDot } = this.state;
		let number;
		let prevNumber =
			operator && secondOperand === undefined ? 0 : recentOperand;

		if (!isDot) {
			number =
				prevNumber === 0
					? selectedNumber
					: prevNumber * 10 + selectedNumber;
		} else {
      const string = prevNumber.toString();
      const pow = string.indexOf('.') === -1 ? 1 : string.length - string.indexOf('.');

      console.log(prevNumber.toString(), prevNumber, pow);
      console.log(
				prevNumber.toString().length,
				prevNumber.toString().indexOf('.')
			);

			selectedNumber /= (10 ** pow);
			number =
				prevNumber === 0 ? selectedNumber : prevNumber + selectedNumber;
		}

    this.setState({
			displayedNumber: number,
			firstOperand: operator ? firstOperand : number,
			secondOperand: operator ? number : secondOperand,
			recentOperand: number,
			clearButtonText: 'C',
		});
	}

	handleDotButton() {
		this.setState({
			displayedNumber: this.state.displayedNumber + '.',
			isDot: true,
		});
	}

	handleOperatorButton(selectedOperator) {
		const { firstOperand, secondOperand } = this.state;

		this.setState({
			operator: selectedOperator,
			isDot: false,
		});
		if (firstOperand && secondOperand) {
			this.handleResultButton();
		}
	}

	handleResultButton() {
		this.setState({
			displayedNumber: this._getResult(),
			firstOperand: this._getResult(),
			secondOperand: undefined,
      
		});
	}

	_getResult() {
		const { firstOperand, secondOperand, recentOperand, operator } = this.state;
		const first = firstOperand ? firstOperand : 0;
		const second = secondOperand ? secondOperand : recentOperand;
		let result = undefined;

		switch (operator) {
			case 'plus':
				result = first + second;
				break;
			case 'minus':
				result = first - second;
				break;
			case 'multiply':
				result = first * second;
				break;
			case 'divide':
				result = first / second;
				break;
			default:
				result = first;
				break;
		}
		return result;
	}

	// TODO: Add a operation after After getting the results
	handleClearButton() {
		const { displayedNumber, firstOperand, secondOperand, operator } =
			this.state;
		let newDisplayedNumber = displayedNumber;
		let newFirstOperand = firstOperand;
		let newSecondOperand = secondOperand;
		let newOperator = operator;

		if (secondOperand) {
			newDisplayedNumber = 0;
			newSecondOperand = undefined;
		} else {
			if (operator) {
				newOperator = undefined;
			} else {
				newDisplayedNumber = 0;
				newFirstOperand = undefined;
			}
		}

		this.setState({
      displayedNumber: newDisplayedNumber,
			firstOperand: newFirstOperand,
			secondOperand: newSecondOperand,
			recentOperand: 0,
			operator: newOperator,
			isDot: false,
			clearButtonText: 'AC',
		});
	}

	toggleSignButton() {
		const { displayedNumber, firstOperand } = this.state;
		this.setState({
			firstOperand: firstOperand ? -firstOperand : 0,
			displayedNumber: displayedNumber === 0 ? 0 : -displayedNumber,
		});
	}

	handlePercentButton() {
		const { displayedNumber, firstOperand, operator } = this.state;
		if (operator) {
			this.setState({
				displayedNumber: (displayedNumber * firstOperand) / 100,
				secondOperand: (displayedNumber * displayedNumber) / 100,
			});
		} else {
			this.setState({
				displayedNumber: (displayedNumber * 1) / 100,
			});
		}
	}
}

export default App;
