import React, { FC, useState } from 'react';

type QuestionContexttype={
    questions:Array<string>
    updateQuestions:(qustionlist: Array<string>) => void;
}

export const QuestionContext = React.createContext<QuestionContexttype>({
	questions: [],
	updateQuestions: (qustionlist: Array<string>) => {},

});

interface QuestionProviderProps {
	children: React.ReactNode;
}

const QuestionProvider: FC<QuestionProviderProps> = ({ children }) => {
	const [questions, setQuestions] = useState<Array<string>>([]);


	const updateQuestions = (qustionlist: Array<string>) => {
		setQuestions(qustionlist);
	};


	const contextValue: QuestionContexttype = {
		questions,
        updateQuestions
	};

	return <QuestionContext.Provider value={contextValue}>{children}</QuestionContext.Provider>;
};

export default QuestionProvider;