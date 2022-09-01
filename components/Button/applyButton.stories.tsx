import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ApplytButton from "./applyButton"

export default {
    title: 'MyButton',
    component: ApplytButton,
  } as ComponentMeta<typeof ApplytButton>;


export const ApplyTest: ComponentStory<typeof ApplytButton> = () => <ApplytButton />;
//   const Template: ComponentStory<typeof DefaultButton> = (args) => <DefaultButton />;