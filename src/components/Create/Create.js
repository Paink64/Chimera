import React, { useState, useEffect } from 'react';
import { createEvent as createEventMutation } from '../../graphql/mutations';
import { API } from 'aws-amplify';

const initialFormState = { Description: '', Date: '', Time: ''}
const Create = () => {

    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    
      async function createEvent() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createEventMutation, variables: { input: formData } });
        setEvents([ ...events, formData ]);
        setFormData(initialFormState);
      }

    return (
        <div className="form-container">
            <form className="register-form">
                    <label>Create Event</label>
                <input
                    id="event-description"
                    onChange={e => setFormData({ ...formData, 'Description': e.target.value})}
                    type="text"
                    placeholder="Event Description"/>
                

                <input
                    id="event-date"
                    className="form-field"onChange={e => setFormData({ ...formData, 'Date': e.target.value})}
                    type="date"
                    placeholder="Date"/>
              
              <input
                    id="event-time"
                    className="form-field"
                    onChange={e => setFormData({ ...formData, 'Time': e.target.value})}
                    type="time"
                    placeholder="Time"/>
                <button onClick={createEvent}>
                    Create Event
                </button>
            </form>
        </div>
    );
    
    }

export default Create