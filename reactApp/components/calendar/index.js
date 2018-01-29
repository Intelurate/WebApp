import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IndexRoute, Route, Redirect, browserHistory } from 'react-router';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from '../../events';

BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class Calendar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            events: events,
        }
    }

    render() {
        let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

        return (
            <div className="container">
                    <BigCalendar
                        // {...props}
                        selectable
                        events={this.state.events}
                        startAccessor='start'
                        endAccessor='end'
                        defaultView="week"
                        defaultValue={'en'}
                        timeslots={60}
                        //views={allViews}
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