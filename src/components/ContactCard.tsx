'use client';
import NoteItem from '@/components/NoteItem';
import AddNoteForm from '@/components/AddNoteForm';
import { Card, Image, ListGroup, Col } from 'react-bootstrap';
import { Contact, Note } from '@prisma/client';
import Link from 'next/link';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ contact, notes }: { contact: Contact; notes: Note[] }) => {
  return (
  <Card className='h-100'>
    <Card.Header>
      <Image src={contact.image} width={75} alt="An image"/>
      <Card.Title>
        {contact.firstName}
        &nbsp;
        {contact.lastName}
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
        <ListGroup variant="flush">
          {notes.map((note: Note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </ListGroup>
      <AddNoteForm contact={contact} />
    </Card.Body>
    <Card.Footer>
      <Link href={`edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
    
  </Card>
)};

export default ContactCard;
