const SetUpForm = () => {
    return(
        <main>
            <section className="quiz quiz-small">
                <form className="setup-form">
                    <h2>setup quiz</h2>
                    <div className="form-control">
                        <label htmlFor="amount">number of questions</label>
                        <input 
                        type="number" 
                        name="amount" 
                        id="amount" 
                        className="form-input"
                        min={1}
                        max={50} 
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="category">category</label>
                        <select name="category" id="category" className="form-input">
                            <option  value="sports">sports</option>
                            <option  value="history">history</option>
                            <option  value="political">political</option>
                        </select>    
                    </div>
                    <div className="form-control">
                        <label htmlFor="difficulty">difficulty</label>
                        <select name="difficult" id="difficulty" className="form-input">
                            <option value="ease">easy</option>
                            <option value="medium">medium</option>
                            <option value="hard">hard</option>
                        </select>
                    </div>
                    <p className="error">can't generate questions, pls try again</p>
                    <button type="submit" className="submit-btn">
                        start
                    </button>
                </form>
            </section>
        </main>
    )
}
export default SetUpForm