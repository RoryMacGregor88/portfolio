import {
  SectionWrapper,
  ContentArea,
  Title,
  DescriptionSection,
  DisplayArea,
  ContactForm,
} from '~/components';

const Contact = () => (
  <SectionWrapper isEven={true}>
    <ContentArea>
      <Title>Contact Me.</Title>
      <DescriptionSection>
        <p>
          You can contact me via LinkedIn or email, or right here in the contact
          form.
        </p>
        <p>I look forward to hearing from you.</p>
      </DescriptionSection>
    </ContentArea>

    <DisplayArea>
      <ContactForm />
    </DisplayArea>
  </SectionWrapper>
);

export default Contact;
