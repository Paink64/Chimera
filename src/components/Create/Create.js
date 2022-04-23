import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listEvents } from '../../graphql/queries';
import { createEvent as createEventsMutation, deleteEvent as deleteEventsMutation } from '../../graphql/mutations';

const initialFormState = { Description: '', Date: '' , Time: ''}

const Create = () => {
    const [notes, setNotes] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
  
    useEffect(() => {
      fetchNotes();
    }, []);
  
    async function fetchNotes() {
      const apiData = await API.graphql({ query: listEvents });
      setNotes(apiData.data.listNotes.items);
    }
  
    async function createNote() {
      if (!formData.name || !formData.description) return;
      await API.graphql({ query: createEventsMutation, variables: { input: formData } });
      setNotes([ ...notes, formData ]);
      setFormData(initialFormState);
    }
  
    async function deleteNote({ id }) {
      const newNotesArray = notes.filter(note => note.id !== id);
      setNotes(newNotesArray);
      await API.graphql({ query: deleteEventsMutation, variables: { input: { id } }});
    }
  
    return (
      <div className="App">
        <h1>My Notes App</h1>
        <input
          onChange={e => setFormData({ ...formData, 'name': e.target.value})}
          placeholder="Note name"
          value={formData.name}
        />
        <input
          onChange={e => setFormData({ ...formData, 'description': e.target.value})}
          placeholder="Note description"
          value={formData.description}
        />
        <button onClick={createNote}>Create Note</button>
        <div style={{marginBottom: 30}}>
          {
            notes.map(note => (
              <div key={note.id || note.name}>
                <h2>{note.name}</h2>
                <p>{note.description}</p>
                <button onClick={() => deleteNote(note)}>Delete note</button>
              </div>
            ))
          }
        </div>
        <AmplifySignOut />
      </div>
    );
    }

export default Create