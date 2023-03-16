import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserForm from './UserForm';

export default {
    component: UserForm,
} as ComponentMeta<typeof UserForm>;

const Template: ComponentStory<typeof UserForm> = (args) => <UserForm {...args} />;

export const NewUser = Template.bind({});
NewUser.args = {

};

export const EditUser = Template.bind({});
EditUser.args = {
    user: {
        user_id: 1,
        name: 'Erika',
    }
};