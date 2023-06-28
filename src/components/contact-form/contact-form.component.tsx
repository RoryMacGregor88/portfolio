'use client';

import { useForm } from 'react-hook-form';

import { Button } from '~/components';

const sharedInputStyles = 'rounded-md p-4 text-black focus:outline-none';

const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => (
  <p className='bg-red'>ERROR: {errorMessage}</p>
);

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      message: '',
    },
  });

  interface FormValues {
    title: string;
    message: string;
  }

  const onSubmit = (values: FormValues) => {
    console.log('Values: ', values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-8 p-4 lg:p-8 bg-black mx-4 lg:mx-8 rounded-md'
    >
      <input
        {...register('title')}
        className={sharedInputStyles}
        placeholder='Title'
      />
      {errors.title ? (
        <ErrorMessage errorMessage={String(errors.title)} />
      ) : null}
      <textarea
        {...register('message')}
        className={sharedInputStyles}
        rows={10}
        placeholder='Message'
      />
      {errors.message ? (
        <ErrorMessage errorMessage={String(errors.message)} />
      ) : null}
      <Button type='submit' label='Submit' />
    </form>
  );
};

export default ContactForm;
