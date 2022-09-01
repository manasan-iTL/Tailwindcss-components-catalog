import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FloatButton from "./floatButton"

export default {
    title: 'MyButton',
    component: FloatButton,
  } as ComponentMeta<typeof FloatButton>;


export const Float: ComponentStory<typeof FloatButton> = () => <FloatButton />