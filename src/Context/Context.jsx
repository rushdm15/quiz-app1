import { useState, useContext, createContext } from "react";
import axios from axios;

const table = {
    sports: 19,
    history: 23,
    politics: 24
}

const AppContext = createContext();
const AppProvider = ({children}) => {
    const [waiting, setWaiting] = useState(true) //waiting
    const [loaded, setLoading] = useState(false) //Loading
    const [question, setQuestions] = useState([]) //questions
     const [index, setIndex] = useState(0) //index
     const [correct, setCorrect] = useState(0) //correct
     const [error, setError]  = useState(false) //error
    const [quiz, setQuiz] = useState({ 
        amount: 10, 
        category: "sports",
        difficulty: "ease"
    }); 
    const [modal, setModal] = useState(false);
    //fetchQuestions

    const fetchQuestions = async(url) => {
        setLoading(true);
        setWaiting(false);
        const response = await axios(url).catch((err)=>console.log(err));
        if(response){
            const data = response.data.results;
            if(data.length){
                setQuestions(data);
                setLoading(false);
                setWaiting(false);
                setError(false)
            } else{
                setWaiting(true);
                setLoading(true);
            }
        } else {
            setWaiting(true);
        }
    };

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () =>{
        setModal(false);
        setWaiting(true);
        setCorrect(0);
    }

    const nextQuestion = () => {
        setIndex((oldIndex)=>{
            const index = oldIndex+1;
            if(index > oldIndex.length -1){
                openModal()
                return 0;
            } else {
                return index;
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { amount, difficulty, category } = quiz;
        const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`;
    }

    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppContext};
