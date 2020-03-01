import React , {Component} from 'react';
import {add_Reminder, remove_Reminder, clear_Reminder} from '../actions/index';
import {connect} from 'react-redux'
import reminders from '../reducers';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from './logo.png'

class App extends Component {
    state = {
        text: '',
        date: new Date()
    }
    render_Reminder = () => {
        const {reminders} = this.props
        return (
            <ul className='list-group'>
                {
                    reminders.map((reminder) => {
                        return(
                            <li key={reminder.id} className='list-group-item'>
                                <div>{reminder.text}</div>
                                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                                <div onClick={() => this.props.remove_Reminder(reminder.id)} className='closeIcon btn btn-danger'>x</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    } 
    render (){
        // console.log(this.props)
        return(
           <div className='App'>
               <img src={logo} />
               <div className='reminder-title'>
                    <h2>What Should U do ?</h2>
               </div>
               <input 
                    className='form-control'
                    type='text'
                    placeholder='Enter What U think ...?'
                    value={this.state.text}
                    onChange={(e) => {this.setState({text: e.target.value})}}
               />
               <DatePicker
                    className='form-control'
                    placeholderText='Enter Date'
                    value={this.state.date}
                    selected={this.state.date}
                    onChange={(date) => {this.setState({date})}}
                    ShowTimeSelect
                    timeFormat='HH:mm'
                    dateFormat='MMMM d, yyyy h:mm aa'
                    timeCaption='time'
                />
               <button
                    onClick={() => {
                        this.setState({text: '', date: ''})                     
                        this.props.add_Reminder(this.state.text, this.state.date)}}
                    className='btn btn-primary btn-block'
               >
                    Add Reminder
               </button>
               {this.render_Reminder()}
               <button
                    onClick={() => this.props.clear_Reminder()}
                    className='clearReminder btn btn-danger btn-block'
               >
                    Clear Reminders
               </button>
           </div>
        );
    }
}
/*
** Import **
you can replace this function by write {add_Reminder} directly in coonect function

**

function mapDispatchToProps(dispatch) {
    return{
        add_Reminder : () => dispatch(add_Reminder())
    }
}

*/
function mapStateToProps (state) {
    return {
        reminders: state 
    }
}
export default connect(mapStateToProps, {add_Reminder, remove_Reminder, clear_Reminder})(App)