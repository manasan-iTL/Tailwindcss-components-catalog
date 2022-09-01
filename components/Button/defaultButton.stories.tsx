import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DefaultButton from "./defaultButton"

export default {
    title: 'MyButton',
    component: DefaultButton,
  } as ComponentMeta<typeof DefaultButton>;


export const Default: ComponentStory<typeof DefaultButton> = () => <DefaultButton />;
//   const Template: ComponentStory<typeof DefaultButton> = (args) => <DefaultButton />;