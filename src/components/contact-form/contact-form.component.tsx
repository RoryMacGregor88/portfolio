'use client';

import { useForm } from 'react-hook-form';

import * as Yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '~/components';

const contactFormSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  message: Yup.string().required('Message is required'),
});

const ErrorMessage = ({
  errorMessage,
}: {
  errorMessage: string | undefined;
}) => <p className='text-red mh-4 absolute top-2 left-0'>{errorMessage}</p>;

const sharedInputStyles =
  'rounded-md p-4 text-black w-full focus:outline-none relative';

export type FormValues = {
  title: string;
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
      title: '',
      message: '',
    },
  });

  const isDisabled = !isDirty || disableSubmit || !!Object.keys(errors).length;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-8 p-4 lg:p-8 bg-black mx-4 lg:mx-8 rounded-md'
    >
      <div>
        <input
          {...register('title')}
          className={sharedInputStyles}
          placeholder='Title'
        />
        <ErrorMessage errorMessage={errors.title?.message} />
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
