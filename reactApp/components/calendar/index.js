import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IndexRoute, Route, Redirect, browserHistory } from 'react-router';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../../events';
import Recaptcha from 'react-recaptcha';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class Calendar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: events,
        }
    }

    render() {
        // site key
        const sitekey = '6LcP3kMUAAAAAPs37jOZAbOsF8sRUThSYWtvX64F';

        // specifying your onload callback function
        const callback = () => {
            console.log('Done!!!!');
        };

        const verifyCallback = (response) => {
            console.log(response);
        };

        const expiredCallback = () => {
            console.log(`Recaptcha expired`);
        };

        // define a variable to store the recaptcha instance
        let recaptchaInstance;

        // handle reset
        const resetRecaptcha = () => {
            recaptchaInstance.reset();
        };

        let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

        console.log('events --->', this.state.events)

        return (
            <div className="container">

                <div>
                    <h1>Google Recaptcha</h1>

                    <Recaptcha
                        ref={e => recaptchaInstance = e}
                        sitekey={sitekey}
                        size="compact"
                        render="explicit"
                        verifyCallback={verifyCallback}
                        onloadCallback={callback}
                        expiredCallback={expiredCallback}
                    />
                    <br />
                    <button onClick={resetRecaptcha}  >
                        Reset
                    </button>
                </div>

                <br/>
                <hr />
                <br/>

                <BigCalendar
                    // {...props}
                    selectable
                    events={this.state.events}
                    startAccessor='start'
                    endAccessor='end'
                    defaultView="week"
                    defaultValue={'en'}
                    timeslots={30}
                    views={allViews}
                    step={1}
                    defaultDate={new Date()}
                    onSelectEvent={event => alert(event.title + ' ' + event.start)}
                    onSelectSlot={slotInfo =>
                        alert(
                            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                            `\nend: ${slotInfo.end.toLocaleString()}` +
                            `\naction: ${slotInfo.action}`
                        )
                    }
                />
            </div>
        );
    }
}

Calendar = connect()(Calendar);
const CalendarMain = <Route key="calendar" path="calendar" component={Calendar} ></Route>
export { CalendarMain }