import { useState, useContext, createContext } from "react";
import axios from axios;

const AppContext = createContext();
const AppProvider = ({children}) => {
    const [waiting, setWaiting] = useState(true) //waiting
    const [loaded, setLoading] = useState(false) //Loading
    const [question, setQuestions] = useState([]) //questions
     const [index, setIndex] = useState(0) //index
     const [corrrect, setCorrect] = useState(0) //correct
     const [error, setError]  = useState(false) //error
    const [quiz, setQuiz] = useState({ 
        amount: 10, 
        category: "sports",
        difficulty: "ease"
    }); 
    const [modal, setModal] = useState(false);
    //fetchQuestions

    const fetchQuestions = async() => {
        setLoading(true);
        setWaiting(false);
        const response = await axios("https://opentdb.com/api.php?amount=10").catch((err))=>console.log(err))
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
    }

    return(
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppContext};
