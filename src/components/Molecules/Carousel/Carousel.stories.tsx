import { Meta, Story } from '@storybook/react'
import { Carousel, CarouselProps, CAROUSEL_HEIGHT } from './Carousel'
import { imagesCarouselMock } from '@/components/Molecules'

export default {
  title: 'Molecules/Carousel',
  component: Carousel,
  argTypes: {
    images: {
      control: {
        type: 'object',
      },
    },
    imageSize: {
      control: {
        type: 'select',
        options: CAROUSEL_HEIGHT,
      },
    },
  },
  args: {
    imageSize: 'h-72',
    images: imagesCarouselMock,
  },
} as Meta<CarouselProps>

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />

export const Default = Template.bind({})
