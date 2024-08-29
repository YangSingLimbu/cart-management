const test_data = [
  {
    id: "1",
    name: "Chicken Curry",
    description:
      "Indian’s favorite brown curry sauce cooked with blended onions, green peppers, vegetables, garlic and ginger. Also prepared with Planet BOMBAY special curry spices",
    price: "15.00",
    image:
      "https://planetbombay.com/uploads/products/808e95de7f7a3e3e47944394f2992a48.jpg",
  },
  {
    id: "2",
    name: "Goat Curry",
    description:
      "Indian’s favorite brown curry sauce cooked with blended onions, green peppers, vegetables, garlic and ginger. Also prepared with Planet BOMBAY special curry spices.",
    price: "17.00",
    image:
      "https://planetbombay.com/uploads/products/60342c35fb727814c7ef5ddde013f4fe.png",
  },
  {
    id: "3",
    name: "Lamb Curry",
    description:
      "Indian’s favorite brown curry sauce cooked with blended onions, green peppers, vegetables, garlic and ginger. Also prepared with Planet BOMBAY special curry spices.",
    price: "17.00",
    image:
      "https://planetbombay.com/uploads/products/336130011acdbe203c5fc375db764b97.jpg",
  },
  {
    id: "4",
    name: "Oxtail Curry",
    description:
      "Indian’s favorite brown curry sauce cooked with blended onions, green peppers, vegetables, garlic and ginger. Also prepared with Planet BOMBAY special curry spices.&nbsp;",
    price: "22.00",
    image:
      "https://planetbombay.com/uploads/products/324e58d6d7b029d61427a8d193a0a2fc.jpeg",
  },
  {
    id: "5",
    name: "Salmon Curry",
    description:
      "Indian’s favorite brown curry sauce cooked with blended onions, green peppers, vegetables, garlic and ginger. Also prepared with Planet BOMBAY special curry spices.",
    price: "16.00",
    image:
      "https://planetbombay.com/uploads/products/f374602b2e411b459bcb338b6f767469.jpg",
  },
  {
    id: "6",
    name: "Shrimp Curry",
    description:
      "Indian’s favorite brown curry sauce cooked with blended onions, green peppers, vegetables, garlic and ginger. Also prepared with Planet BOMBAY special curry spices.",
    price: "17.00",
    image:
      "https://planetbombay.com/uploads/products/ed82062cf842c0b3e2ae746141b19862.jpg",
  },
  {
    id: "7",
    name: "Tilapia Curry",
    description:
      "Indian’s favorite brown curry sauce cooked with blended onions, green peppers, vegetables, garlic and ginger. Also prepared with Planet BOMBAY special curry spices.",
    price: "15.00",
    image:
      "https://planetbombay.com/uploads/products/0368d59a4199c8cb3f836123f635bac5.jpg",
  },
  {
    id: "8",
    name: "Paneer Curry",
    description:
      "Indian’s favorite brown curry sauce cooked with blended onions, green peppers, vegetables, garlic and ginger. Also prepared with Planet BOMBAY special curry spices.",
    price: "14.00",
    image:
      "https://planetbombay.com/uploads/products/59ba8e26d94f1fe08729c7a523de745b.jpg",
  },
  {
    id: "9",
    name: "Chicken Malai Curry",
    description:
      "East-West Bengal favorite coconut-based curry with medium spices. Cooked in coconut milk, onions, garlic, coconut paste, and planet Bombay secret spices",
    price: "15.00",
    image:
      "https://planetbombay.com/uploads/products/c3ff8e880ffe1f4909cc680db2a3fd3d.jpg",
  },
  {
    id: "10",
    name: "Lamb Malai Curry",
    description:
      "East-West Bengal favorite coconut-based curry with medium spices. Cooked in coconut milk, onions, garlic, coconut paste, and planet Bombay secret spices&nbsp;",
    price: "17.00",
    image:
      "https://planetbombay.com/uploads/products/abb489988f3df5c97a153d013c3b6695.jpg",
  },
  {
    id: "11",
    name: "Salmon Malai Curry",
    description:
      "East-West Bengal favorite coconut-based curry with medium spices. Cooked in coconut milk, onions, garlic, coconut paste, and planet Bombay secret spices&nbsp;",
    price: "16.00",
    image:
      "https://planetbombay.com/uploads/products/9bcd73f232fe8a41588a52a934a53a96.jpg",
  },
  {
    id: "12",
    name: "Tilapia Malai Curry",
    description:
      "East-West Bengal favorite coconut-based curry with medium spices. Cooked in coconut milk, onions, garlic, coconut paste, and planet Bombay secret spices&nbsp;",
    price: "15.00",
    image:
      "https://planetbombay.com/uploads/products/2d29c2f6adf6db87076d40912a186662.jpg",
  },
  {
    id: "13",
    name: "Paneer Malai Curry",
    description:
      "East-West Bengal favorite coconut-based curry with medium spices. Cooked in coconut milk, onions, garlic, coconut paste, and planet Bombay secret spices&nbsp;",
    price: "14.00",
    image:
      "https://planetbombay.com/uploads/products/3d6873f0683cccadb9a8da5e0062fbc1.jpg",
  },
  {
    id: "14",
    name: "Chicken Bhuna",
    description:
      "East Indian’s favorite brown &amp; thick curry sauce cooked with fresh garlic, ginger, tomatoes, onions and green peppers",
    price: "15.00",
    image:
      "https://planetbombay.com/uploads/products/fb07ab9c186e9da7e20dd89fd39589a9.jpg",
  },
  {
    id: "15",
    name: "Goat Bhuna",
    description:
      "East Indian’s favorite brown &amp; thick curry sauce cooked with fresh garlic, ginger, tomatoes, onions and green peppers&nbsp;",
    price: "17.00",
    image:
      "https://planetbombay.com/uploads/products/a32157ace56b309128f83f2f543808ed.jpg",
  },
  {
    id: "16",
    name: "Lamb Bhuna",
    description:
      "East Indian’s favorite brown &amp; thick curry sauce cooked with fresh garlic, ginger, tomatoes, onions and green peppers",
    price: "17.00",
    image:
      "https://planetbombay.com/uploads/products/f4a6bba64903f98690d993df425380f0.jpg",
  },
  {
    id: "17",
    name: "Oxtail Bhuna",
    description:
      "East Indian’s favorite brown &amp; thick curry sauce cooked with fresh garlic, ginger, tomatoes, onions and green peppers&nbsp;",
    price: "22.00",
    image:
      "https://planetbombay.com/uploads/products/09c4f4b42265750ea6de7f22a394ecbe.png",
  },
  {
    id: "18",
    name: "Salmon Bhuna",
    description:
      "East Indian’s favorite brown &amp; thick curry sauce cooked with fresh garlic, ginger, tomatoes, onions and green peppers&nbsp;",
    price: "16.00",
    image:
      "https://planetbombay.com/uploads/products/c5b6c408f1a8127fb08bde72bbb83737.jpg",
  },
  {
    id: "19",
    name: "Shrimp Bhuna",
    description:
      "East Indian’s favorite brown &amp; thick curry sauce cooked with fresh garlic, ginger, tomatoes, onions and green peppers&nbsp;",
    price: "17.00",
    image:
      "https://planetbombay.com/uploads/products/ba767b8f7af0feca9cd67df70d1d2fc0.jpg",
  },
  {
    id: "20",
    name: "Malagatawny Soup",
    description: "Lentils based soup with medium spices garnish with cilantro",
    price: "5.00",
    image:
      "https://planetbombay.com/uploads/products/3504221d643760010ad0b1826f76878c.jpg",
  },
  {
    id: "21",
    name: "Mushroom Soup",
    description:
      "Mushroom Cooked with coconut milk and Indian herbs with medium spices garnish with cilantro",
    price: "6.00",
    image:
      "https://planetbombay.com/uploads/products/7e3f42e30b5efeecc9f0caa174685c19.jpg",
  },
  {
    id: "22",
    name: "Coconut Soup",
    description:
      "Medium spices of coconut milk with Indian herbs garnish with cilantro&nbsp;",
    price: "6.00",
    image:
      "https://planetbombay.com/uploads/products/382700cf484b5d37f4a0f498c1b862c0.jpg",
  },
  {
    id: "23",
    name: "Vegetable Samosas (2 pieces)",
    description:
      "Triangular puffed pastry stuffed with cubed potatoes, green peas, carrots &amp; mildly spiced herbs",
    price: "5.00",
    image:
      "https://planetbombay.com/uploads/products/a568d72b9b50157fa5938710fdd250f9.jpg",
  },
  {
    id: "24",
    name: "Chicken Samosas (2 pieces)",
    description: "",
    price: "6.00",
    image:
      "https://planetbombay.com/uploads/products/7486bce41e529ca275512ad9e2628bad.jpg",
  },
  {
    id: "25",
    name: "Onion Bhaji",
    description:
      "Onion fritters prepared with whole coriander,cumin and a variety of spices.",
    price: "5.00",
    image:
      "https://planetbombay.com/uploads/products/63eb31e9abb0d82514dd91c8a2581183.jpeg",
  },
  {
    id: "26",
    name: "Paneer Pakora",
    description:
      "Homemade cheese slices breaded with chick-pea flour and deep fried with vegetable oil",
    price: "9.00",
    image:
      "https://planetbombay.com/uploads/products/829509244acac7c9f1d26a832e55913f.jpg",
  },
  {
    id: "27",
    name: "Shrimp Poori",
    description:
      "Fluffy hand-rolled deep fried Poori bread stuffed with creamy coconut based Shrimp",
    price: "12.00",
    image:
      "https://planetbombay.com/uploads/products/07f06512d6c69b7d03d3269af56b7ab3.jpg",
  },
  {
    id: "28",
    name: "Chicken 65",
    description:
      "Chicken 65 is a spicy, deep-fried chicken dish originating from Chennai, India. Chicken slices marinated with garlic &amp; ginger; then stir-fried and slightly sautéed with green chili and special sauce",
    price: "10.00",
    image:
      "https://planetbombay.com/uploads/products/e9eef619571ef0ffdc5a6423b474f338.jpg",
  },
  {
    id: "29",
    name: "Meat Platter",
    description: "Lamb kabab, Shish kabab and chicken tikka",
    price: "12.00",
    image:
      "https://planetbombay.com/uploads/products/27f86d79e4586187e4cf7e5a435e3940.jpg",
  },
  {
    id: "30",
    name: "Tandoori Hot Wings",
    description: "Baked wings mixed with special spicy tandoori sauce",
    price: "10.00",
    image:
      "https://planetbombay.com/uploads/products/79ee29ce40d3b079a18e8aaafd08aa2a.jpeg",
  },
  {
    id: "31",
    name: "Curry Hot Wings",
    description: "Deep fried wings mixed with special spicy curry sauce",
    price: "10.00",
    image:
      "https://planetbombay.com/uploads/products/7a947fe6dc49377f1fd8348c35c960ed.jpg",
  },
  {
    id: "32",
    name: "Chicken Pakoras",
    description: "Deep fried chicken tenders serve with mango-mint sauce",
    price: "10.00",
    image:
      "https://planetbombay.com/uploads/products/26f90a1e4ba948b9a5a8d40223f6870f.jpg",
  },
  {
    id: "33",
    name: "Chicken Roll (3 pieces)",
    description: "",
    price: "6.00",
    image:
      "https://planetbombay.com/uploads/products/5a4b14f1aff6db011972b616f2f24d8f.jpg",
  },
  {
    id: "34",
    name: "Papadum",
    description: "Crispy thin lentils flat bread",
    price: "3.00",
    image:
      "https://planetbombay.com/uploads/products/4e13ada7eca769d99c6a2236ca577db5.jpg",
  },
  {
    id: "35",
    name: "GOBI 65",
    description:
      "Gobi 65 is a spicy, deep-fried cauliflower cubes dish originating from Chennai, India. Cauliflower cubes marinated with garlic &amp; ginger; then stir-fried and slightly sautéed with green chili and special sauce",
    price: "9.00",
    image:
      "https://planetbombay.com/uploads/products/f3fe5e71db9faa225108f5cc963137a4.jpg",
  },
  {
    id: "36",
    name: "Samosa Chaat",
    description:
      "Vegetable pastry cut into pieces and served with spicy vatana beans and topping with sauces",
    price: "10.00",
    image:
      "https://planetbombay.com/uploads/products/c5aa10c7a31ea0b86a7591be029cfe73.jpg",
  },
  {
    id: "37",
    name: "Aloo Chaat",
    description:
      "Mashed potato mixed with special chat masala, onions, tomato and cilantro and topping with sauces",
    price: "7.00",
    image:
      "https://planetbombay.com/uploads/products/c6d56a65ed652adf8c37fec2a2ef4d3c.jpg",
  },
  {
    id: "38",
    name: "Papdi Chaat",
    description:
      "Flour crisps, spiced vatana beans, topping with mint sauce, yogurt sauce and tamarind sauce with other herb and spices.",
    price: "8.00",
    image:
      "https://planetbombay.com/uploads/products/285682cc52c487bb34fdec5bad65ca16.jpg",
  },
  {
    id: "39",
    name: "Chicken Papdi Chaat",
    description:
      "Flour crisps, spiced vatana beans, topping with ground chicken, mint sauce, yogurt sauce and tamarind sauce with other herb and spices",
    price: "9.00",
    image:
      "https://planetbombay.com/uploads/products/27f86d79e4586187e4cf7e5a435e3940.jpg",
  },
  {
    id: "40",
    name: "Chicken Chaat",
    description:
      "Crispy chicken slices mixed with onion, cucumber, green bell pepper, tomato, special Bombay Chat Masala and cilantro",
    price: "9.00",
    image:
      "https://planetbombay.com/uploads/products/8fb3465773bd4df0c38d3da1ea78954c.jpg",
  },
  {
    id: "41",
    name: "Shrimp Chaat",
    description:
      "Crispy Shrimp mixed with onion, cucumber, gren bell pepper, tomato, special Bombay Chat Masala and cilantro",
    price: "12.00",
    image:
      "https://planetbombay.com/uploads/products/1e95310257148f12e36e9ab0c2b4bafd.png",
  },
  {
    id: "42",
    name: "Ragda Patties",
    description:
      "Spicy potato pancakes (Aloo Tikki) topping with vatana Beans,onions, cilantro,and sauces.",
    price: "9.00",
    image:
      "https://planetbombay.com/uploads/products/b7dd3b357371f6bbd3a9c7b2337abb45.jpg",
  },
  {
    id: "43",
    name: "Pani Poori",
    description:
      "Mini crispy Poori stuffed with mashed potatoes, onions, chick peas &amp; spiced water",
    price: "7.00",
    image:
      "https://planetbombay.com/uploads/products/ce3aac0e7caccffc8119053fecdb27c3.jpg",
  },
  {
    id: "44",
    name: "Daal Poori",
    description:
      "Whole wheat hand-rolled bread stuffed with spicy lentils then deep fried",
    price: "7.00",
    image:
      "https://planetbombay.com/uploads/products/be0b626c7821953eea1488c2eaeb7551.jpeg",
  },
  {
    id: "45",
    name: "Dahi Poori",
    description:
      "Mini crispy Poori stuffed with chopped onion, beans, yogurt, and cilantro",
    price: "9.00",
    image:
      "https://planetbombay.com/uploads/products/0702414e760d9cbe7b17d3552b4a8b58.jpg",
  },
  {
    id: "46",
    name: "Bhel Poori",
    description:
      "Puffed wheat crisps mixed with chopped onion, tomato, chaat spices, cilantro, and topping with sauces",
    price: "8.00",
    image:
      "https://planetbombay.com/uploads/products/6a966053b170c0cbcedff8da3468d7da.jpg",
  },
  {
    id: "47",
    name: "Vegetable Combo For One",
    description:
      "Two pieces of Onion Bhajee , Mixed Vegetables curry, Tarka Daal, Sagg Paneer (or Sagg Alo) Rice, Nan, raita and Dessert",
    price: "15.00",
    image:
      "https://planetbombay.com/uploads/products/27f86d79e4586187e4cf7e5a435e3940.jpg",
  },
  {
    id: "48",
    name: "Meat Combo For One",
    description:
      "Two pieces of Onion Bhajee , Chicken Tikka Massala, Lamb curry, Sagg Paneer (or Mixed Vegetables Curry) Rice, Nan, raita and Dessert",
    price: "20.00",
    image:
      "https://planetbombay.com/uploads/products/27f86d79e4586187e4cf7e5a435e3940.jpg",
  },
  {
    id: "49",
    name: "Mixed Vege Curry",
    description:
      "Cauliflower, zucchini, yellow squash, potatoes, carrots, corns, green peas and more cooked in brown curry sauce served with Rice&nbsp;Substitute with Brown Rice pay Extra $2",
    price: "12.00",
    image:
      "https://planetbombay.com/uploads/products/037bf7cb6387c4d323b16e9627d91ab8.jpeg",
  },
  {
    id: "50",
    name: "Vegetables Kurma",
    description:
      "Cauliflower, zucchini, yellow squash, potatoes, carrots, cabbages, corns, peas cooked in a creamy sauce served with Rice&nbsp;Substitute with Brown Rice pay Extra $2",
    price: "12.00",
    image:
      "https://planetbombay.com/uploads/products/7018d57a86f4a3eca9b42184a29c381d.jpg",
  },
];

export default test_data;
