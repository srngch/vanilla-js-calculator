class Component {
	constructor(target, props) {
		this.target = target;
		this.props = props;
		this.setup();
		this.setEvent();
		this.render();
	}

	setup() {}

	template() {
		return '';
	}

	mount() {}

	render() {
		this.target.innerHTML = this.template();
		this.mount();
	}

	setState(newState) {
		this.state = { ...this.state, ...newState };
		this.render();
	}

	setEvent() {}

	addEvent(eventType, selector, callback) {
		const children = [...this.target.querySelectorAll(selector)];
		const isTarget = (target) =>
			children.includes(target) || target.closest(selector);
		this.target.addEventListener(eventType, (event) => {
			if (!isTarget(event.target)) return false;
			callback(event);
		});
	}
}

export default Component;
