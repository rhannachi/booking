import { Meta, Story } from '@storybook/react'
import Carousel, { CarouselProps, CAROUSEL_HEIGHT } from './Carousel'

export default {
  title: 'Molecules/Carousel',
  component: Carousel,
  argTypes: {
    images: {
      control: {
        type: 'object'
      }
    },
    imageSize: {
      control: {
        type: 'select',
        options: CAROUSEL_HEIGHT
      }
    }
  },
  args: {
    images: [
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide2.jpg',
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide3.jpg',
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide2.jpg',
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide3.jpg',
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide2.jpg',
      'https://www.photo-paysage.com/albums/userpics/10001/normal_Coucher_de_soleil-Cotes-d-Armor.jpg',
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide2.jpg',
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide3.jpg',
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide2.jpg',
      'https://www.codeur.com/tuto/wp-content/uploads/2021/12/slide3.jpg'
    ]
  }
} as Meta<CarouselProps>

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />

export const Default = Template.bind({})
