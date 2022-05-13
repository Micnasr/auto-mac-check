import { useState } from 'react';
import './Form.css'

const Form = props => {

    const [enteredName, setEnteredName] = useState('Michael Nasr');
    const [enteredDate, setEnteredDate] = useState('');


    const nameHandler = event => {
        setEnteredName(event.target.value);
    }

    const dateHandler = event => {
        setEnteredDate(event.target.value);
    }

    const formSubmissionHandler = event => {
        event.preventDefault();
        
        //Convert Date to String
        const newDate = enteredDate + 'T00:00:00';
        const date = new Date(newDate);
        const month = date.toLocaleString("en-US", { month: "long" });
        const day = date.toLocaleString("en-US", { day: "2-digit" });

        
        const inputData = {
            name: enteredName,
            month: month,
            day: day
        }
        
        //pass data back 
        props.onSaveData(inputData);

    }


    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="form-control">
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={nameHandler} value={enteredName} />
            </div>
            <div  className="form-control">
                <label htmlFor='date'>Choose a Date</label>
                <input type='date' id='date' onChange={dateHandler} value={enteredDate} />
            </div>
            <div className='form-actions'>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default Form;