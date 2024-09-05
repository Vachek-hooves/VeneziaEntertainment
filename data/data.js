export const VENICE_GOUP = [
  {keyName: 'Gondola', gridId: 'go1', image: ''},
  {keyName: 'Theatre', gridId: 'th1', image: ''},
];

export const GONDOLA = [
  {
    id: 'go1',
    type: 'Gondola',
    events: [
      {
        id: 'g1',
        name: 'Gondola Rides',
        description: 'A romantic walk along the Grand Canal',
        duration: '1 hour',
        mainAttractions: [
          {
            name: 'Grand Canal',
            history:
              'The Grand Canal, also known as Canale Grande, is the main waterway of Venice, which has played a key role in the life of the city for centuries. It is located in the shape of an inverted S and has a length of about 3.8 km. Venice, founded in the 5th century, was built on a group of islands in the lagoon of the Adriatic Sea, where deep waters and narrow channels provided protection from attack and facilitated transport. The Grand Canal was the main trade route for Venice, which became one of the largest trading and maritime powers of the Middle Ages. From the very beginning of its use, important buildings and palaces began to appear around the canal, which symbolized the power and wealth of the city. The Grand Canal was important for the transportation of goods such as spices, fabrics and jewels that came from all over the world',
            interestingFacts: [
              {
                fact: "Architectural Heritage: There are more than 170 palaces along the Grand Canal, most of which were built between the 13th and 18th centuries. These palaces display different architectural styles, from Gothic to Renaissance and Baroque. One of the most famous palaces, Ca' d'Oro, is noted for its luxurious golden facade, which gives the building its unique appearance.",
              },
              {
                fact: 'Rialto Bridge: Built in 1591, the Rialto Bridge is the oldest and most famous bridge across the Grand Canal. It was designed by Giacomo Toni, and was originally made of wood, but was later replaced by a stone structure. The bridge played an important role in trade operations and is still one of the most famous architectural monuments of Venice.',
              },
            ],
          },
          {
            name: "Doge's Palace",
            history:
              "The Doge's Palace, or Palazzo Ducale, is one of the most iconic buildings in Venice and the historic residence of the Doges, who were the heads of the city-republic. The construction of the palace began in the 9th century, but most of the modern building was erected in the 14th and 15th centuries. The palace became a symbol of the political and cultural power of Venice. Government offices, courts and even prisons were located in the palace. The architecture of the palace combines Gothic and Renaissance elements, including exquisite mosaics and sculptures. The interior halls of the palace, such as the Great Hall, where important meetings were held, are decorated with works of art by the great Venetian masters, including Titian and Veronese.",
            interestingFacts: [
              {
                fact: "Bridge of Sighs: The Bridge of Sighs, or Ponte dei Sospiri, connects the Doge's Palace with the prison. The name of the bridge comes from the Italian word 'sospiri' (sigh), because the prisoners, passing over the bridge, could have a last look at the city before going behind bars. The bridge is an important symbol of the history of Venice and its legal system.",
              },
              {
                fact: "Architectural Style: The Doge's Palace is an example of the Venetian Gothic style with elements of the Renaissance. Its facade is decorated with numerous decorative elements, such as arches, columns and sculptures, reflecting the cultural and political wealth of Venice at that time.",
              },
            ],
          },
        ],
        routeDetails: {
          typeOfWalk: 'Day or evening',
          startEndPlace: "Start at St. Mark's Square, end at the Rialto Bridge",
          languages: ['English', 'Italian'],
          price: '15 euro',
        },
        gallery: ['', '', '', ''],
      },
      {
        id: 'g2',
        name: 'Secret Canals of Venice',
        description: "A unique walk through Venice's smaller canals.",
        duration: '90 minutes',
        mainAttractions: [
          {
            name: 'Secret Canals',
            history:
              "Venice's secret canals, also known as the smaller canals, which run through quiet areas of the city, offer a unique opportunity to see another side of Venice. These narrow canals were important trade routes in the past, but with the development of the city and the increase of the main trade routes, they became less used. In the Middle Ages, these canals were the main routes for the transportation of goods and services. They pass through residential areas where you can see typical Venetian architecture and life. Narrow canals provided access to the market and allowed residents to transport materials and products. Many of these canals have historical value and have become symbols of the traditional life of Venice.",
            interestingFacts: [
              {
                fact: "Canals Canals of San Polo: One of the most famous areas for these canals is San Polo, where old Venetian houses and bridges have been preserved. San Polo is one of Venice's oldest districts, and its canals are often less crowded with tourists than the main waterways.",
              },
              {
                fact: 'Narrow canals: Due to the narrowness of some canals, they may not be accessible to larger gondolas, adding even more authenticity to the journey. The area is also home to many original Venetian frescoes and street sculptures that often go unnoticed.',
              },
            ],
          },
          {
            name: 'Casaivitti Bridge',
            history:
              "History: Built in the 16th century, the Casaivitti Bridge is a small but important town across one of Venice's smaller canals. The bridge plays an important role in the connection between different parts of the city and provides access to the market and residential areas. It is architecturally simple, but has its historical value due to the fact that it served as an important trade route.",
            interestingFacts: [
              {
                fact: "Architectural Simplicity: The Casaivitti Bridge is notable for its architectural simplicity, which contrasts with the luxury of Venice's main bridges. This gives it a characteristic old look and emphasizes functionality",
              },
              {
                fact: 'Tourist Streams: Since the bridge and canals are less known to tourists, a walk here provides an opportunity to enjoy the calm atmosphere and observe the traditional life of the city without large crowds.',
              },
            ],
          },
        ],
        routeDetails: {
          typeOfWalk: 'Day or evening',
          startEndPlace: 'Start near Rebbia Square, end in the Kostatuti area',
          languages: ['English', 'Italian'],
          price: '15 euro',
        },
        gallery: ['', '', '', ''],
      },
      {
        id: 'g3',
        name: 'A Night Walk with Music',
        description: 'A night tour of Venice with live music.',
        duration: '90 minutes',
        mainAttractions: [
          {
            name: 'City at Night',
            history:
              'Venice takes on a special charm at night, when its narrow canals and ancient buildings are illuminated by soft light. At night, the city becomes less crowded, and this allows you to enjoy its atmosphere without the daytime noise. Night walks in Venice open up new perspectives on architectural monuments and streetscapes that may be invisible during the day due to crowds of tourists. The Grand Canal, lit up with golden reflections, creates a magical view, and the palaces, which used to look majestic in the daylight, take on new shades at night. The night city allows you to feel its romantic and mysterious character, because many of its usual details appear in a new light.',
            interestingFacts: [
              {
                fact: 'Night photography: Evening and night shots of Venice create a unique atmosphere thanks to the reflections of light on the water and low lighting, which adds to the mystery.',
              },
              {
                fact: "Night Museums and Attractions: Some of the historic buildings, such as the Doge's Palace, can host night events and tours that allow you to visit these places at a unique time of day.",
              },
            ],
          },
          {
            name: 'Palaces',
            history:
              "The palaces along the Grand Canal and in other parts of the city are still symbols of Venetian aristocracy and cultural heritage. Evening lighting highlights architectural details that may not be visible during the day. Ca' d'Oro Palace, for example, is famous for its golden facade, which looks special at night, when the light gently reflects off its surface",
            interestingFacts: [
              {
                fact: "The city that never sleeps: Even though Venice gets quieter at night, it doesn't exactly sleep. The city lives up to its nightlife, including quiet cafes that stay open late into the night and romantic gondola rides that allow you to enjoy the peace of the night.",
              },
              {
                fact: 'Night Festivals: Venice is also known for its night festivals such as the Venice Carnival Ball, which attracts tourists from all over the world and adds a festive atmosphere at night time.',
              },
            ],
          },
        ],
        routeDetails: {
          typeOfWalk: 'Night with the possibility of live music',
          startEndPlace:
            "Start at the Rialto Bridge, finish at St. Mark's Square",
          languages: ['English', 'Italian'],
          price: '15 euro',
        },
        gallery: ['', '', '', ''],
      },
    ],
  },
];
export const THEATRE = [
  {
    type: 'Theatre',
    id: 'th1',
    events: [
      {
        id: 't1',
        name: 'Nabucco',
        description:
          "The opera 'Trumpet' is based on biblical events, specifically the story of the Babylonian king Nebuchadnezzar II.",
        plot: "King Nebuchadnezzar II conquers Jerusalem and captures the Jews. The famous 'Va, pensiero' scene expresses the longing for homeland.",
        composer: 'Giuseppe Verdi',
        key_performers: {
          nebucadnezzar: 'Tenor',
          abigail: 'Soprano',
          zechariah: 'Baritone',
        },
        details: {
          premiere_date: 'February 6, 2024',
          duration: '3 hours 15 minutes',
          director: 'Francesco Mandelli',
          conductor: 'Gianluca Capuano',
        },
      },
      {
        id: 't2',
        name: 'Manon Lescaut',
        composer: 'Giacomo Puccini',
        description:
          'Manon Lescaut tells the tragic story of a young woman in search of love and wealth.',
        plot: 'Manon falls in love with Des Graves, but their relationship is filled with passion and betrayal. She eventually dies as punishment for her actions.',
        key_performers: {
          manon: 'Soprano',
          des_graves: 'Tenor',
          lescaut: 'Baritone',
        },
        details: {
          premiere_date: 'February 15, 2024',
          duration: '2 hours 50 minutes',
          director: 'Silvana Ricci',
          conductor: 'Lorenzo Squro',
          cost: '39 euros',
        },
      },
      {
        id: 't3',
        bname: 'Giselle',
        composer: 'Adolphe Adam',
        description:
          'A classic ballet about tragic love and ghostly women who return from the other world.',
        plot: "Giselle dies of grief when she discovers Prince Albert's true identity, becoming a ghost seeking revenge.",
        key_performers: {
          giselle: 'Premier ballerina',
          albert: 'Soloist',
          myrtle: 'Ballerina',
        },
        details: {
          premiere_date: 'February 28, 2024',
          duration: '2 hours 20 minutes',
          choreographer: 'Giovanni Riccardo',
          conductor: 'Lorenzo Belmonte',
          cost: '50 euros',
        },
      },
    ],
  },
];
// export const THEATRE = [];
