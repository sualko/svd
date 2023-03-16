import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserTable from "./UserTable";

export default {
    component: UserTable,
} as ComponentMeta<typeof UserTable>;

export const NoUsers: ComponentStory<typeof UserTable> = () => <UserTable users={[]} />;

export const MultipleUsers: ComponentStory<typeof UserTable> = () => <UserTable users={[{ user_id: 1, name: 'Karl' }, { user_id: 2, name: 'Susi' }]} />;