'use client';
import NoteItem from '@/components/NoteItem';
import { Card, Image, ListGroup } from 'react-bootstrap';
import { Contact, Note } from '@prisma/client';
import Link from 'next/link';

/* Renders a single row in the Contact table. See list/page.tsx. */
const ContactCardAdmin = ({ contact, notes }: { contact: Contact; notes: Note[] }) => {
  return(
  <Card className='h-100'>
    <Card.Header>
      <Image src={contact.image} width={75} alt="A picture of someone"/>
      <Card.Title>
        {contact.firstName}
        &nbsp;
        {contact.lastName}
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
    </Card.Body>
        <ListGroup variant="flush">
    {notes.map((note) => <NoteItem key={note.id} note={note}/>)}
    </ListGroup>
    <Card.Footer>
      <Link href={`edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
)};

export default ContactCardAdmin;
