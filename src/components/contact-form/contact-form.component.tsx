'use client';

import { useForm } from 'react-hook-form';

import * as Yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '~/components';

const contactFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Contact email must be valid email')
    .required('Contact email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const ErrorMessage = ({
  errorMessage,
}: {
  errorMessage: string | undefined;
}) => <p className='text-red h-4'>{errorMessage}</p>;

const sharedInputStyles = 'rounded-md p-4 text-black w-full focus:outline-none';

export type FormValues = {
  email: string;
  subject: string;
  message: string;
};

interface Props {
  onSubmit: (formValues: FormValues) => void;
  disableSubmit: boolean;
}

const ContactForm = ({ onSubmit, disableSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    },
  });

  // TODO: change gap to match padding

  const isDisabled = !isDirty || disableSubmit || !!Object.keys(errors).length;

  return (
    <form
      onSubmit={handleSubmit((values) => onSubmit(values))}
      className='flex flex-col w-full lg:gap-4 p-4 lg:p-8 bg-black mx-4 lg:mx-8 rounded-md'
    >
      <div>
        <input
          {...register('email')}
          className={sharedInputStyles}
          placeholder='Contact email address'
        />
        <ErrorMessage errorMessage={errors.email?.message} />
      </div>

      <div>
        <input
          {...register('subject')}
          className={sharedInputStyles}
          placeholder='Subject'
        />
        <ErrorMessage errorMessage={errors.subject?.message} />
      </div>

      <div className='w-full'>
        <textarea
          {...register('message')}
          className={sharedInputStyles}
          rows={10}
          placeholder='Message'
        />
        <ErrorMessage errorMessage={errors.message?.message} />
      </div>

      <Button type='submit' label='Submit' disabled={isDisabled} />
    </form>
  );
};

export default ContactForm;
