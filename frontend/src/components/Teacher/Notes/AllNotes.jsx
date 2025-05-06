import React, { useEffect, useState } from 'react';

const AllNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Simulated fetch call
    const fetchedNotes = [
      { id: 1, title: 'Math Notes', content: 'Algebra and Geometry' },
      { id: 2, title: 'Science Notes', content: 'Photosynthesis explained' },
    ];
    setNotes(fetchedNotes);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Notes</h2>
      {notes.map(note => (
        <div key={note.id} className="bg-white shadow-md p-4 mb-2 rounded">
          <h3 className="font-semibold">{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AllNotes;
