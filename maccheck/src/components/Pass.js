import './Pass.css';
import check from '../checkmark.png';
import location from '../location.png';

const Pass = props => {
    return (
        <div className='card2'>
            <div>
                <div className='student'>Student</div>
                <div className='name'>{props.name}</div>
                <div className='date'>{props.month + " " + props.day + " Pass"}</div>
                <img className='image' src={check} alt='check'/>
                <img className='location' src={location} alt='location'/>
                <button className='button'>CANCEL PASS</button>
            </div>
        </div>   
    )
}

export default Pass;