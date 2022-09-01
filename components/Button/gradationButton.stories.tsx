import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GradationButton from "./gradationButton"

export default {
    title: 'MyButton',
    component: GradationButton,
  } as ComponentMeta<typeof GradationButton>;


export const Gradation: ComponentStory<typeof GradationButton> = () => <GradationButton />;
//   const Template: ComponentStory<typeof DefaultButton> = (args) => <DefaultButton />;