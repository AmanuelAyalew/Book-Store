import book1 from "../assets/b1.png";
import book2 from "../assets/b2.jpg";
import book3 from "../assets/b3.png";
import book4 from "../assets/b4.jpg";
import book5 from "../assets/b5.jpg";
import book6 from "../assets/b6.jpg";

const data = [
  {
    id: crypto.randomUUID(),
    cover: book1,
    title: "Dertogada",
    description:
      "Dertogada by Gebreyesus Hailu is a compelling Ethiopian novel that delves into the depths of human resilience, societal challenges, and the quest for justice. Set in a period of political upheaval and social transformation, the story follows the life of its protagonist, whose journey reflects the broader struggles and aspirations of the Ethiopian people. Through vivid characterizations and gripping narrative, Hailu masterfully portrays the complexities of love, power, and survival in a turbulent era. Dertogada is a profound exploration of the human spirit, capturing the essence of Ethiopia's historical and cultural landscape. This novel stands as a significant contribution to Ethiopian literature, offering readers an enriching and thought-provoking experience that resonates with themes of perseverance, identity, and hope.",
    genre: "Fiction",
    rating: 3,
    price: 90,
    createdAt: "2024-06-07",
  },
  {
    id: crypto.randomUUID(),
    cover: book2,
    title: "The Psychology of Money",
    description:
      "The Psychology of Money by Morgan Housel delves into the profound and often misunderstood relationship between human behavior and financial success. This insightful book explores the emotional and psychological factors that influence our financial decisions, illustrating how attitudes, biases, and perceptions about money can significantly impact our financial outcomes. Through engaging storytelling and thought-provoking anecdotes, Housel provides readers with a deeper understanding of how to make better financial choices, manage wealth effectively, and cultivate a healthier relationship with money. By blending psychology, history, and personal finance, The Psychology of Money offers timeless wisdom and practical advice for anyone seeking to achieve financial stability and success",
    genre: "Psychology",
    rating: 4,
    price: 100,
    createdAt: "2024-05-14",
  },
  {
    id: crypto.randomUUID(),
    cover: book3,
    title: "Oromay",
    description:
      "Oromay Ethiopian Book is a captivating and enlightening exploration of Ethiopia's rich history, culture, and literary heritage. This comprehensive anthology brings together a diverse collection of writings from renowned Ethiopian authors, poets, and scholars, offering readers a profound insight into the country's unique traditions, philosophies, and narratives. Each page of Oromay Ethiopian Book is a journey through Ethiopia's past and present, celebrating its vibrant storytelling traditions and the resilience of its people. Whether you are a seasoned reader of Ethiopian literature or new to the genre, this book promises to be an enriching and immersive experience, shedding light on the multifaceted identity of one of Africa's oldest civilizations.",
    genre: "Fiction",
    rating: 5,
    price: 140,
    createdAt: "2024-05-30",
  },
  {
    id: crypto.randomUUID(),
    cover: book4,
    title: "Emegua",
    description:
      "Emegua Ethiopian Book is a profound and evocative collection that captures the essence of Ethiopia's rich cultural and historical tapestry. This anthology brings together the voices of prominent Ethiopian authors, poets, and thinkers, presenting a diverse array of stories, poems, and essays that reflect the country's multifaceted identity. Through its pages, readers will embark on a journey through Ethiopia's past and present, exploring themes of tradition, resilience, and transformation. Emegua Ethiopian Book celebrates the enduring spirit of Ethiopia and offers an illuminating perspective on its unique heritage, making it an essential read for anyone interested in the literary and cultural landscape of this remarkable nation.",
    genre: "Fiction",
    rating: 4,
    price: 250,
    createdAt: "2024-06-10",
  },
  {
    id: crypto.randomUUID(),
    cover: book5,
    title: "Fikir Eske Mekaber",
    description:
      "Fikir Eske Mekaber (ፍቅር እስከ መቃብር) by Haddis Alemayehu is a classic of Ethiopian literature, weaving a tale of profound love, societal challenges, and enduring human spirit. Set against the backdrop of early 20th-century Ethiopia, this compelling novel follows the lives of Bezabih and Seble, whose love faces numerous obstacles in a society marked by tradition and changing times. Through richly drawn characters and evocative storytelling, Alemayehu paints a vivid picture of Ethiopian life, exploring themes of honor, sacrifice, and the struggle between personal desires and social expectations. Fikir Eske Mekaber is more than just a love story; it is a poignant reflection on the complexities of human relationships and the transformative power of love, making it a timeless and essential piece of Ethiopian literary heritage.",
    genre: "Literature And Fiction",
    rating: 5,
    price: 100,
    createdAt: "2024-05-19",
  },
  {
    id: crypto.randomUUID(),
    cover: book6,
    title: "ከአድማስ ባሻገር",
    description:
      "ከአድማስ ባሻገር by Adam Reta is an enthralling Ethiopian novel that transports readers beyond the familiar, into a realm where imagination and reality intertwine. This literary work masterfully blends cultural narratives with philosophical reflections, offering a deep and introspective journey through the human experience. Through its richly developed characters and compelling plot, ከአድማስ ባሻገር delves into themes of identity, tradition, and the quest for meaning in an ever-changing world. The novel’s vivid descriptions and lyrical prose capture the essence of Ethiopian life and landscapes, making it a profound and unforgettable read for anyone seeking to explore the depths of Ethiopian literature and culture.",
    genre: "Literature And Fiction",
    rating: 5,
    price: 100,
    createdAt: "2024-04-19",
    upcoming: true,
  },
];

function getAllBooks() {
  return data;
}

export { getAllBooks };
