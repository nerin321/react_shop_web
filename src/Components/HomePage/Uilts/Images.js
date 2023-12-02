import image1 from '../../../Asset/slide-1.png'
import preSlide1 from '../../../Asset/pre_slide1.png'
import subSlide1 from '../../../Asset/sub_slide1.png'

import image3 from '../../../Asset/slide-3.jpg'


let imageContent1 = {
    preImage: preSlide1,
    subImage: subSlide1,
    image: image1,
    content: "Best Furniture For Your Castle....",
    mainTitle: "New Furniture Collection Trends in 2020",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
}

let imageContent2 = {
    preImage: preSlide1,
    subImage: subSlide1,
    image: image1,
    content: "Best Furniture For Your Castle.... 2",
    mainTitle: "New Furniture Collection Trends in 2020 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
}

let imageContent3 = {
    preImage: preSlide1,
    subImage: subSlide1,
    image: image3,
    content: "Best Furniture For Your Castle.... 3",
    mainTitle: "New Furniture Collection Trends in 2020 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
}

let imageContent4 = {
    preImage: preSlide1,
    subImage: subSlide1,
    image: image1,
    content: "Best Furniture For Your Castle.... 4",
    mainTitle: "New Furniture Collection Trends in 2020 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
}

export const images = [imageContent1, imageContent2, imageContent3, imageContent4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex