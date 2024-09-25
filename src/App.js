import { useState } from 'react';
import React from 'react';
import styles from './app.module.css';

export const App = () => {
	const main = styles.main;
	const output = styles.responseOutput;
	const button = styles.button;
	const buttons = styles.buttons;
	const numberButton = styles.numberButton;
	const calcButton = styles.calcButton;
	const reset = styles.reset;

	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isFinish, serIsFinish] = useState(false);

	const displayValue = operand1 + operator + operand2;

	const handleClick = (item) => {
		if (operand1 === '0') {
			setOperand1(item);
		} else if (operator) {
			setOperand2((prevState) => prevState + item);
		} else {
			setOperand1((prevState) => prevState + item);
		}
	};

	const handleRefresh = () => {
		setOperand1('0');
		setOperand2('');
		setOperator('');
	};

	const handleButtonPlusOrMinus = (op) => {
		switch (op) {
			case '+':
				setOperator('+');
				break;
			case '-':
				setOperator('-');
				break;
			default:
				setOperator('');
		}
	};

	const buttonsArray = [
		{ id: 'one', content: '1' },
		{ id: 'two', content: '2' },
		{ id: 'three', content: '3' },
		{ id: 'four', content: '4' },
		{ id: 'five', content: '5' },
		{ id: 'six', content: '6' },
		{ id: 'seven', content: '7' },
		{ id: 'eight', content: '8' },
		{ id: 'nine', content: '9' },
		{ id: 'zero', content: '0' },
	];

	const handleSet = () => {
		switch (operator) {
			case '+':
				setOperand1(Number(operand1) + Number(operand2));
				setOperand2('');
				setOperator('');
				serIsFinish(true);
				break;
			case '-':
				setOperand1(Number(operand1) - Number(operand2));
				setOperand2('');
				setOperator('');
				serIsFinish(true);
				break;
			default:
				setOperand1('');
		}
	};

	return (
		<>
			<div className={`${main}`}>
				<span className={`${output}`}>{displayValue}</span>

				<div className={`${buttons}`}>
					{buttonsArray.map((buttonsArray, index) => (
						<button
							className={`${buttonsArray.id} ${button} ${numberButton}`}
							onClick={() => handleClick(buttonsArray.content)}
							key={index}
							id={buttonsArray.id}
						>
							{buttonsArray.content}
						</button>
					))}
					<button
						className={`${button} ${calcButton} ${styles.minus}`}
						onClick={() => handleButtonPlusOrMinus('-')}
					>
						-
					</button>
					<button
						className={`${button} ${calcButton} ${styles.plus}`}
						onClick={() => handleButtonPlusOrMinus('+')}
					>
						+
					</button>
					<button
						className={`${button} ${calcButton} ${styles.equals}`}
						onClick={() => handleSet()}
					>
						=
					</button>
					<button
						className={`${button} ${reset}`}
						onClick={() => handleRefresh()}
					>
						С
					</button>
				</div>
			</div>
		</>
	);
};
