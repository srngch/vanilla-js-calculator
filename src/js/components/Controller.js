import Component from '../core/Component.js';

class Controller extends Component {
	template() {
		const { clearButtonText } = this.props;
		return `
			<div class="controllers">
				<div class="controllers-row">
					<button class="btn-function clear">${clearButtonText}</button>
					<button class="btn-function sign">+/-</button>
					<button class="btn-function percent">%</button>
					<button class="btn-operator" data-operator="divide">÷</button>
				</div>
				<div class="controllers-row">
					<button class="btn-number" data-number="7">7</button>
					<button class="btn-number" data-number="8">8</button>
					<button class="btn-number" data-number="9">9</button>
					<button class="btn-operator" data-operator="multiply">×</button>
				</div>
				<div class="controllers-row">
					<button class="btn-number" data-number="4">4</button>
					<button class="btn-number" data-number="5">5</button>
					<button class="btn-number" data-number="6">6</button>
					<button class="btn-operator" data-operator="minus">-</button>
				</div>
				<div class="controllers-row">
					<button class="btn-number" data-number="1">1</button>
					<button class="btn-number" data-number="2">2</button>
					<button class="btn-number" data-number="3">3</button>
				<button class="btn-operator" data-operator="plus">+</button>
				</div>
				<div class="controllers-row">
					<button class="btn-number" data-number="0">0</button>
					<button class="btn-dot">.</button>
					<button class="btn-result" data-operator="equal">=</button>
				</div>
			</div>
		`;
	}

	setEvent() {
		const {
			handleClearButton,
			handleNumberButton,
			handleDotButton,
			handleOperatorButton,
			handleResultButton,
			toggleSignButton,
			handlePercentButton,
		} = this.props;

		this.addEvent('click', '.clear', (e) => {
			handleClearButton();
			this.#addFlickerAnimation();
		});
		this.addEvent('click', '.btn-number', (e) => {
			handleNumberButton(Number(e.target.dataset.number));
		});
		this.addEvent('click', '.btn-dot', (e) => {
			handleDotButton();
		});
		this.addEvent('click', '.btn-operator', (e) => {
			handleOperatorButton(e.target.dataset.operator);
			this.#addFlickerAnimation();
		});
		this.addEvent('click', '[data-operator="equal"]', (e) => {
			handleResultButton();
			this.#addFlickerAnimation();
		});
		this.addEvent('click', '.sign', (e) => {
			toggleSignButton();
			this.#addFlickerAnimation();
		});
		this.addEvent('click', '.percent', (e) => {
			handlePercentButton();
			this.#addFlickerAnimation();
		});
	}

	#addFlickerAnimation() {
		const displayNumber = document.querySelector('.display-number');
		displayNumber.classList.add('flicker');
	}
}

export default Controller;
