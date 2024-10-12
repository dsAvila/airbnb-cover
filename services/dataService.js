// Simulação de API Local
// Caso queira utilizar a API web (https://json-airbnb-cover.vercel.app/accommodations)
export const categories = [
    {
        id: 1,
        image: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
        title: 'Em frente à praia'
    },
    {
        id: 2,
        image: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
        title: 'Chalés'
    },
    {
        id: 3,
        image: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
        title: 'Vistas incríveis'
    },
    {
        id: 4,
        image: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg',
        title: 'Na beira do lago'
    },
    {
        id: 5,
        image: 'https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg',
        title: 'Quartos privativos'
    },
    {
        id: 6,
        image: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
        title: 'Piscinas incríveis'
    },
    {
        id: 7,
        image: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
        title: 'No interior'
    },
    {
        id: 8,
        image: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg',
        title: 'Fazendas'
    },
    {
        id: 9,
        image: 'https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg',
        title: 'Pousadas'
    },
    {
        id: 10,
        image: 'https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg',
        title: 'Microcasas'
    },
    {
        id: 11,
        image: 'https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg',
        title: 'Lago'
    },
    {
        id: 12,
        image: 'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg',
        title: 'Casas triangulares'
    },
    {
        id: 13,
        image: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
        title: 'Uau!'
    },
    {
        id: 14,
        image: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg',
        title: 'Mansões'
    },
    {
        id: 15,
        image: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
        title: 'Ilhas'
    },
    {
        id: 16,
        image: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg',
        title: 'Castelos'
    },
    {
        id: 17,
        image: 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg',
        title: 'Luxe'
    },
    {
        id: 18,
        image: 'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg',
        title: 'Casas na árvore'
    },
    {
        id: 19,
        image: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg',
        title: 'Parques nacionais'
    },
    {
        id: 20,
        image: 'https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg',
        title: 'Vinhedos'
    },
    {
        id: 21,
        image: 'https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg',
        title: 'Tropical'
    },
    {
        id: 22,
        image: 'https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg',
        title: 'Contêineres'
    },
    {
        id: 23,
        image: 'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg',
        title: 'Acampamentos'
    },
    {
        id: 24,
        image: 'https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg',
        title: 'Surf'
    },
    {
        id: 25,
        image: 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
        title: 'citys famosas'
    },
    {
        id: 26,
        image: 'https://a0.muscache.com/pictures/f60700bc-8ab5-424c-912b-6ef17abc479a.jpg',
        title: 'Celeiros'
    },
    {
        id: 27,
        image: 'https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg',
        title: 'Grutas'
    },
    {
        id: 28,
        image: 'https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg',
        title: 'Barcos'
    },
]

export const accommodations = [
    {
        id: 1,
        category: 1,
        images: [
            'https://a0.muscache.com/im/pictures/baf536ff-b76d-4b62-91ed-9fdc4107bf52.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/3b8adc7d-e152-4e44-be41-3fb50cc994cd.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/81abc3be-ef4a-480a-a2d8-382d590addc0.jpg?im_w=720'
        ],
        city: 'Florianópolis',
        country: 'Brasil',
        price: 1286,
        rating: '4,7'
    },
    {
        id: 2,
        category: 1,
        images: [
            'https://a0.muscache.com/im/pictures/68d7cace-6e07-417b-9817-1885b93f90ee.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/903a1c9b-2248-46a1-94c9-7207c44fc95b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/a7fb61e9-0c04-43a1-83cd-efaeb9a2ae17.jpg?im_w=720'
        ],
        city: 'Bombas',
        country: 'Brasil',
        price: 399,
        rating: '4,91'
    },
    {
        id: 3,
        category: 1,
        images: [
            'https://a0.muscache.com/im/pictures/cb6c9158-4219-45ce-bcb9-4cdcad4275f5.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/4aea292e-20dc-4462-9408-9ac016077f01.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/9a89dca2-6c7f-40e8-9f7c-0391c96983ce.jpg?im_w=720'
        ],
        city: 'Governador Celso Ramos',
        country: 'Brasil',
        price: 460,
        rating: '5,0'
    },
    {
        id: 4,
        category: 1,
        images: [
            'https://a0.muscache.com/im/pictures/7ddf420c-61a0-4215-a3df-3e107ba31728.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/4b010075-6af9-40a5-81e3-03fc5d31678b.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/c4fe3f18-ca7b-4eb4-b8c5-b8f4a4f20512.jpg?im_w=720'
        ],
        city: 'Pioneiros',
        country: 'Brasil',
        price: 366,
        rating: '5,0'
    },
    {
        id: 5,
        category: 1,
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-43403945/original/02fd85af-475d-44d8-a585-c1cc9b02df7a.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-49076311/original/80be14d1-cf0e-4e03-aeaa-91dfaa8b2fbe.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-49076311/original/1e9677cd-0cfb-4307-8467-1eb9a015cabf.jpeg?im_w=720'
        ],
        city: 'Praia do Rosa',
        country: 'Brasil',
        price: 620,
        rating: '4,86'
    },
    {
        id: 6,
        category: 1,
        images: [
            'https://a0.muscache.com/im/pictures/ec2bbbea-7982-4f23-9515-a17281ab75c3.jpg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-14834202/original/1c71bde1-660f-45c8-8daa-2f36334d4c21.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/8bbc6e59-d643-47bd-92c6-dc120cf686bd.jpg?im_w=720'
        ],
        city: 'Bombinhas',
        country: 'Brasil',
        price: 1299,
        rating: '4,9'
    },
    {
        id: 7,
        category: 2,
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-43333686/original/b6f40ac4-3468-443e-81d8-ce3b6f526943.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-43333686/original/ce61507f-5a20-46e1-93b9-098faacaa6de.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-43333686/original/81cb677f-65da-420e-a5f6-acd4fa188815.jpeg?im_w=720'
        ],
        city: 'São Bento do Sul',
        country: 'Brasil',
        price: 723,
        rating: '4,97'
    },
    {
        id: 8,
        category: 2,
        images: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/cc1fd71d-1a91-4026-99f8-c2cbffefd68f.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/e08d07a2-4eaa-4930-9c22-132072aee408.jpeg?im_w=720',
            'https://a0.muscache.com/im/pictures/miso/Hosting-22319550/original/839c4a53-0cd8-447e-adb7-fe5bdcff7bf6.jpeg?im_w=720'
        ],
        city: 'Paraty',
        country: 'Brasil',
        price: 1160,
        rating: '4,93'
    },
]
