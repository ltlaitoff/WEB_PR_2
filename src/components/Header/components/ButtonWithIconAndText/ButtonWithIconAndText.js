import { createElement, htmlStringToElement } from 'helpers'

const ButtonWithIconAndText = ({
	buttonClass,
	icon,
	iconClasses,
	text,
	textClass = ''
}) => {
	const iconElement = htmlStringToElement(icon)
	iconElement.classList.add(...iconClasses)

	const textElement = createElement('div', {
		textContent: text,
		className: textClass
	})

	const button = createElement('button', {
		className: buttonClass,
		childs: [iconElement, textElement]
	})

	return button
}

export default ButtonWithIconAndText
