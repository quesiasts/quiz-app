// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Qual o nome da mãe do Bruce Wayne?',
			answerOptions: [
				{ answerText: 'Maria Wayne', isCorrect: false },
				{ answerText: 'Martha Wayne', isCorrect: true },
				{ answerText: 'Mercedez Wayne', isCorrect: false },
				{ answerText: 'Mara Wayne', isCorrect: false },
			],
		},
		{
			questionText: 'Qual o nome do Homem de Ferro?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: false },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: true },
			],
		},
		{
			questionText: 'Qual desses super-heróis não faz parte da Marvel?',
			answerOptions: [
				{ answerText: 'Hulk', isCorrect: false },
				{ answerText: 'Gavião Arqueiro', isCorrect: false },
				{ answerText: 'Mulher Maravilha', isCorrect: true },
				{ answerText: 'Thor', isCorrect: false },
			],
		},
		{
			questionText: 'Quantas são as Joias do Infinito em "Vingadores: Guerra Infinita?"',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '7', isCorrect: false },
				{ answerText: '6', isCorrect: true },
			],
		},
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Você pontuou {score} de {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Questão {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}