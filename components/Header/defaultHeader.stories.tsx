import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DefaultHeader from "./defaultHeader"

export default {
    title: 'MyHeader',
    component: DefaultHeader,
  } as ComponentMeta<typeof DefaultHeader>;


export const Default: ComponentStory<typeof DefaultHeader> = () => <DefaultHeader />;
//   const Template: ComponentStory<typeof DefaultButton> = (args) => <DefaultButton />;