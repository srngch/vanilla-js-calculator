import Component from './core/Component.js';
import Display from './components/Display.js';
import Controller from './components/Controller.js';

class App extends Component {
	setup() {
		this.state = {
			displayedNumber: 0,
			firstOperand: null,
			secondOperand: null,
			recentOperand: 0,
			operator: null,
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
		const _isInvalidKey = (key) => {
			const valid = ['Escape', 'Enter', '+', '-', '*', '/', '%', ',', '.'];
			const isFunctionKey = valid.includes(key);
			const isNumkey = Number.isInteger(Number(key)) && key !== ' ';
			return !(isFunctionKey || isNumkey);
		};

		document.addEventListener('keydown', (e) => {
			if (_isInvalidKey(e.key)) return;

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
		const { firstOperand, secondOperand, recentOperand, operator, isDot } =
			this.state;
		const prevNumber = operator && secondOperand === null ? 0 : recentOperand;
		console.log(prevNumber);
		const newDisplayedNumber = isDot
			? parseFloat(`${prevNumber}.${selectedNumber}`)
			: parseFloat(`${prevNumber}${selectedNumber}`);
		if (newDisplayedNumber >= 1000000000) return;

		this.setState({
			displayedNumber: newDisplayedNumber,
			firstOperand: operator ? firstOperand : newDisplayedNumber,
			secondOperand: operator ? newDisplayedNumber : secondOperand,
			recentOperand: newDisplayedNumber,
			isDot: false,
			clearButtonText: 'C',
		});
	}

	handleDotButton() {
		const { isDot } = this.state;
		if (isDot) return;
		this.setState({
			displayedNumber: `${this.state.displayedNumber}.`,
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
			displayedNumber: this.#getResult(),
			firstOperand: this.#getResult(),
			secondOperand: null,
		});
	}

	#getResult() {
		const { firstOperand, secondOperand, recentOperand, operator } = this.state;
		const first = firstOperand ? firstOperand : 0;
		const second = secondOperand ? secondOperand : recentOperand;
		let result = null;

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
		let newState;
		const clearSecondOperand = {
			displayedNumber: 0,
			secondOperand: null,
		};
		const clearOperator = { operator: null };
		const clearFirstOperand = {
			displayedNumber: 0,
			firstOperand: null,
		};
		const { firstOperand, secondOperand, operator } = this.state;

		if (firstOperand && operator && secondOperand)
			newState = clearSecondOperand;
		else if (firstOperand && operator && !secondOperand)
			newState = clearOperator;
		else if (firstOperand && !operator && !secondOperand)
			newState = clearFirstOperand;

		this.setState({
			...newState,
			recentOperand: 0,
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
		let newState;
		const { displayedNumber, firstOperand, operator } = this.state;
		if (operator) {
			newState = {
				displayedNumber: (displayedNumber * firstOperand) / 100,
				secondOperand: (displayedNumber * displayedNumber) / 100,
			};
		} else {
			const newDisplayedNumber = (firstOperand * 1) / 100;
			newState = {
				displayedNumber: newDisplayedNumber,
				firstOperand: newDisplayedNumber,
				recentOperand: newDisplayedNumber,
			};
		}
		this.setState(newState);
	}
}

export default App;
