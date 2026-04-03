'use client';
import { Card, Image } from 'react-bootstrap';
import { Contact } from '@/lib/validationSchemas';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCardAdmin = ({ contact }: { contact: Contact }) => (
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
      <p className="blockquote-footer">{contact.owner}</p>
    </Card.Body>
  </Card>
);

export default ContactCardAdmin;
