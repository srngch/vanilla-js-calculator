import Component from '../core/Component.js';

class Display extends Component {
	template() {
		const { displayedNumber } = this.props;
		const classLists = displayedNumber > 999999 ? `display-number big-number` : `display-number`;
		return `
			<span class="${classLists}">${displayedNumber.toLocaleString('ko-KR')}</span>
		`;
	}
}

export default Display;
