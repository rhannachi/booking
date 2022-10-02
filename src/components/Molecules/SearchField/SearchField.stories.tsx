import { Meta, Story } from '@storybook/react'
import { SearchField, SearchFieldProps } from '@/components/Molecules'

export default {
  title: 'Molecules/SearchField',
  component: SearchField,
  args: {
    className: ''
  }
} as Meta<SearchFieldProps>

const Template: Story<SearchFieldProps> = (args) => <SearchField {...args} />

export const Default = Template.bind({})
