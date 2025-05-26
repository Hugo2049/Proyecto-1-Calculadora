import Button from '../components/Button/Button';
import styles from '../components/Button/Button.module.css'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    className: { control: 'text' },
    children: { control: 'text' },
  },
};

export const Primary = {
  args: {
    children: 'Button',
    className: 'bg-blue-500 hover:bg-blue-600 text-white',
  },
};

export const Secondary = {
  args: {
    children: 'Button',
    className: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  },
};

export const Large = {
  args: {
    children: 'Large Button',
    className: 'h-20 text-2xl bg-green-500 hover:bg-green-600 text-white',
  },
};