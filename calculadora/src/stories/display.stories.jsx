import Display from '../components/Display/Display';

export default {
  title: 'Components/Display',
  component: Display,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
  },
};

export const Default = {
  args: {
    value: '0',
  },
};

export const WithValue = {
  args: {
    value: '123.45',
  },
};

export const ErrorState = {
  args: {
    value: 'ERROR',
  },
};

export const LongNumber = {
  args: {
    value: '123456789',
  },
};