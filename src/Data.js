import burj from "./images/burj-khalifa.jpeg"
import maasai from "./images/maasai-mara.jpeg"
import fuji from "./images/mount-fuji.jpeg"
import parthenon from "./images/parthenon.jpeg"

const data = [
    {
        id: 1,
        title: "Maasai Mara Truth Safaris",
        location: "Kenya",
        googleMapsUrl: "https://goo.gl/maps/Us5i5VmUDGP7Nnkw9",
        startDate: "4 May, 2018",
        endDate: "13 May, 2018",
        description: "Maasai Mara is one of the most famous and important wildlife conservation and wilderness areas in Africa, world-renowned for its exceptional populations of lion, African leopard, cheetah and African bush elephant. It also hosts the Great Migration, which secured it as one of the Seven Natural Wonders of Africa, and as one of the ten Wonders of the World.",
        image: maasai
    },
    {
        id: 2,
        title: "Burj Khalifa",
        location: "Dubai",
        googleMapsUrl: "https://goo.gl/maps/A15Jvzdvt5apyRmLA",
        startDate: "1 Oct, 2018",
        endDate: "7 Oct, 2018",
        description: "Known as the Burj Dubai prior to its inauguration in 2010, is a skyscraper in Dubai, United Arab Emirates. With a total height of 829.8 m and a roof height of 828 m, the Burj Khalifa has been the tallest structure and building in the world since its topping out in 2009, supplanting Taipei 101, the previous holder of that status. Construction of the Burj Khalifa began in 2004, with the exterior completed five years later in 2009.",
        image: burj
    },
    {
        id: 3,
        title: "Parthenon",
        location: "Greece",
        googleMapsUrl: "https://goo.gl/maps/JkHHkWVSLxXpXdBt9",
        startDate: "16 June, 2019",
        endDate: "26 June, 2019",
        description: "A former temple dedicated to the goddess Athena, whom the people of Athens considered their patroness. Construction started in 447 BC when the Delian League was at the peak of its power. It was completed in 438 BC, although decoration of the building continued until 432 BC. It is the most important surviving building of Classical Greece, generally considered the zenith of the Doric order.",
        image: parthenon
    },
    {
        id: 4,
        title: "Mount Fuji",
        location: "Japan",
        googleMapsUrl: "https://goo.gl/maps/JypaTM314zAfiuJq5",
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        image: fuji
    }
]

export default data;