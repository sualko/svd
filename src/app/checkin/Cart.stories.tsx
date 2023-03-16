import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Cart from './Cart';

export default {
    component: Cart,
} as ComponentMeta<typeof Cart>;

const Template: ComponentStory<typeof Cart> = (args) => <Cart {...args} />;

export const Example = Template.bind({});
Example.args = {
    lineItems: [{
        base_product_id: 1,
        name: 'Shoe',
        price: 350,
        quantity: 3,
    },
    {
        base_product_id: 2,
        name: 'Tesa',
        price: 0,
        quantity: 1,
    }]
};