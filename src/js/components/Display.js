import Component from '../core/Component.js';

class Display extends Component {
	template() {
		const { displayedNumber } = this.props;
		return `
      <span class="display-number">${displayedNumber}</span>
		`;
	}

	setEvent() {
		const { displayNumber } = this.props;

		this.addEvent('click', 'div', (e) => {
			displayNumber();
		});
	}
}

export default Display;
