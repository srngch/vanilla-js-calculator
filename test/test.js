import { describe, expect, test } from '@jest/globals';
import App from '../src/js/app.js';

const setApp = () => {
	let domBody;
	let domApp;

	domBody = window.document.body;
	domApp = document.createElement('div');
	domApp.id = 'app';
	domBody.appendChild(domApp);
	return new App(document.querySelector('#app'));
};

describe('initial value', () => {
	let app;

	beforeEach(() => {
		app = setApp();
	});

	test('the initial value in display box is 0', () => {
		const domDisplay = document.querySelector('.display-number');
		expect(domDisplay.textContent).toBe('0');
	});

	test('click: just one number button', () => {
		document.querySelector('.btn-number[data-number="1"]').click();

		const domDisplay = document.querySelector('.display-number');
		expect(domDisplay.textContent).toBe('1');
	});

	afterEach(() => {
		app = null;
	});
});

describe('click: number buttons 1 to 9', () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	beforeAll(() => {
		setApp();
		numbers.forEach((n) => {
			document.querySelector(`.btn-number[data-number="${n}"]`).click();
		});
	});

	test('check', () => {
		const domDisplay = document.querySelector('.display-number');
		expect(domDisplay.textContent).toBe('123,456,789');
	});
});
