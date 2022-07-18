import React, { FC, useState } from 'react';
import { Question } from '../types/question';

type QuestionlistContexttype={
    questionslist:Question
    updateQuestionslist:(qustionlist: Question) => void;
}

export const QuestionlistContext = React.createContext<QuestionlistContexttype>({
	questionslist: {},
	updateQuestionslist: (qustionlist: Question) => {},

});

interface QuestionProviderProps {
	children: React.ReactNode;
}

const QuestionlistProvider: FC<QuestionProviderProps> = ({ children }) => {
	const [questionslist, setQuestionslist] = useState<Question>({});


	const updateQuestionslist = (qustionlist: Question) => {
		setQuestionslist(qustionlist);
	};


	const contextValue: QuestionlistContexttype = {
		questionslist,
        updateQuestionslist
	};

	return <QuestionlistContext.Provider value={contextValue}>{children}</QuestionlistContext.Provider>;
};

export default QuestionlistProvider;