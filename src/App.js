import SetupForm from "./Form/SetupForm";
import Loading from "./Loading/LoadingScreen";
import Modal from "./Modal/Modal.jsx";
import { useGlobalContext } from "./Context/Context.jsx";

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestions,
    checkAnswer,
  } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { incorrect_answers, correct_answer, question } = question[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (temoIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[temp] = correct_answer;
  }
  return (
    <main>
      <section className="quiz">
        <p className="correction-answers">correct answers: 3</p>
        <article className="container">
          <h2>Text</h2>
          <div className="btn-container"></div>
        </article>
        <button className="next-question">next questions</button>
      </section>
    </main>
  );
}

export default App;
