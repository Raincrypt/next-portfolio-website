"use server"

import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  readonly message: string;
  readonly senderEmail: string;
}

const EmailTemplate = ({ message, senderEmail }: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
        <Body>
          <Container>
            <Section>
              <Heading>
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
    </Html>
  );
};

export default EmailTemplate;