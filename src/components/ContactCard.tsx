'use client';
import { Card, Image } from 'react-bootstrap';
import { Contact } from '@prisma/client';
import Link from 'next/link';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ contact }: { contact: Contact }) => (
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
    </Card.Body>
    <Card.Footer>
      <Link href={`edit/${contact.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
  
);

export default ContactCard;
