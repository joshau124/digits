import { Col, Container, Row } from 'react-bootstrap';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { auth } from '@/lib/auth';
import { Contact, Note } from '@prisma/client';
import ContactCard from '@/components/ContactCard';
import { prisma } from '@/lib/prisma';

/** Render a list of contacts for the logged in user. */
const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await auth();
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; name: string };
    } | null,
  );

  const owner = session?.user!.email ? session.user.email : '';
  const contacts: Contact[] = await prisma.contact.findMany({
    where: { owner },
  });

  // Fetch all notes belonging to the current user's contacts
  const notes: Note[] = await prisma.note.findMany({
    where: { owner },
  });

  console.log(contacts);
  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center">List Contacts</h1>
              <Row xs={1} md={2} lg={3} className="g-4">
                {contacts.map((contact) => (
                  <Col key={`Contact-${contact.firstName}`}>
                    <ContactCard
                      contact={contact}
                      notes={notes.filter(note => note.contactId === contact.id)}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default ListPage;