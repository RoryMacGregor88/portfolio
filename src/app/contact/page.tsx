'use client';

import { useState } from 'react';

import {
  SectionWrapper,
  ContentArea,
  Title,
  DescriptionSection,
  DisplayArea,
  ContactForm,
  ExternalLink,
  Button,
} from '~/components';

import { FormValues } from '~/components/contact-form/contact-form.component';

const Contact = () => {
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (formValues: FormValues) => {
    const res = await fetch('/contact', {
      method: 'POST',
      body: JSON.stringify(formValues),
    });

    if (!res.ok) {
      const error = (await res.json()) as { message: string };
      setError(error.message);
    }
  };

  return (
    <SectionWrapper isEven={true}>
      <ContentArea>
        <Title>Contact Me.</Title>
        <DescriptionSection>
          <p>
            You can contact me via LinkedIn or email, or from right here in the
            contact form. I look forward to hearing from you.
          </p>
        </DescriptionSection>

        <div className='flex flex-col gap-4 items-center'>
          <ExternalLink
            label='Go To LinkedIn'
            href='https://www.linkedin.com/in/rory-macgregor-8910aa27a/'
          />
          <Button
            label='Copy Email to Clipboard'
            onClick={() =>
              navigator.clipboard.writeText('RoryMacGregor88@outlook.com')
            }
          />
        </div>
      </ContentArea>

      <DisplayArea>
        {!!error ? (
          <div className='flex flex-col gap-4 mx-8 self-center mb-10 bg-red text-black text-2xl items-center rounded-md p-4'>
            <h3>An unexpected error occurred:</h3>
            <p>test error message</p>
          </div>
        ) : null}
        <ContactForm onSubmit={onSubmit} disableSubmit={!!error} />
      </DisplayArea>
    </SectionWrapper>
  );
};

export default Contact;
