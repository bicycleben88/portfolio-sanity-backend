import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping', // computer name
  title: 'Toppings', // visible ui title
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping', // visible ui title
      type: 'string',
      description: 'The name of the topping',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian', // visible ui title
      type: 'boolean',
      description: 'Is the topping vegetarian?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: (fields) => ({
      title: `${fields.name} ${fields.vegetarian ? '*V*' : ''}`,
    }),
  },
};
