'use client';

import { useState, useEffect } from 'react';

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

const successMessage = 'Your message was successfuly sent.',
  errorMessage = `
    An unexpected error occurred.
    Please Try again later, or use one of the
    alternative methods suggested.
  `;

const Contact = () => {
  const [response, setResponse] = useState<{
    isError: boolean;
    message: string;
  } | null>(null);

  /** remove well/re-enable submit button after 5 seconds */
  useEffect(() => {
    if (response) {
      setTimeout(() => setResponse(null), 5000);
    }
  }, [response]);

  const { isError, message } = response ?? {};

  const onSubmit = async (formValues: FormValues) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formValues),
    });

    const responseData = res.ok
      ? {
          isError: false,
          message: successMessage,
        }
      : {
          isError: true,
          message: errorMessage,
        };

    setResponse(responseData);
  };

  return (
    <SectionWrapper isEven={true}>
      <ContentArea>
        <Title>Contact Me.</Title>
        <DescriptionSection className='lg:text-center'>
          <p>
            You can contact me via LinkedIn or email, or from right here in the
            contact form.
          </p>
          <p>I look forward to hearing from you.</p>
        </DescriptionSection>

        <div className='flex flex-col gap-4 lg:gap-8 items-center'>
          <ExternalLink
            label='Go to LinkedIn'
            href='https://www.linkedin.com/in/rory-macgregor-8910aa27a/'
          />
          <Button
            label='Copy email to clipboard'
            onClick={() =>
              navigator.clipboard.writeText('rorymacgregordev@outlook.com')
            }
          />
        </div>
      </ContentArea>

      <DisplayArea>
        {!!response ? (
          <div
            className={`flex flex-col gap-4 mx-8 self-center mb-10 ${
              isError ? 'bg-red' : 'bg-green'
            } text-black text-2xl text-center items-center rounded-md p-4`}
          >
            <h3>{isError ? 'Error:' : 'Success!'}</h3>
            <p>{message}</p>
          </div>
        ) : null}
        <ContactForm onSubmit={onSubmit} disableSubmit={!!response} />
      </DisplayArea>
    </SectionWrapper>
  );
};

export default Contact;
