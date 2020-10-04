import image from './assets/1.jpg'
import {Image, Text, Title, Columns} from './classes/blocks'
export const model = [
    new Image(image , {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'img'
    })
]