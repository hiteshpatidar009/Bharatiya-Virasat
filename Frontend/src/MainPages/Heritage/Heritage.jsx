import React, { useState } from "react";

const cardsData = [
  {
    id: 1,
    images: [
      "https://www.tripsavvy.com/thmb/tTPVCtmmRr8gxd7oowt4m57Egd4=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-583958200-03a09c835d52423eb2d29dc624412908.jpg",
      "https://phenomenalworld.in/wp-content/uploads/2014/08/E-ellora-caves-maharashtrasculpturerockskillancientarchitecturewednesdayabcwordlesspraveenkarnatakabangalorethroo-da-looking-glass.jpg","https://thetravelshots.com/wp-content/uploads/2021/05/Ellora-caves.jpg",
    ],
    title: "Build",
    description: `Ellora Caves: Ancient rock-cut temples showcasing Hindu, Buddhist, Jain heritage. `,
      
    MoreDescription:
      "Ellora Caves, located in Maharashtra, India, are a UNESCO World Heritage Site and one of the greatest examples of rock-cut architecture in the world. Built between the 6th and 10th centuries, these caves represent a harmonious blend of three major religions: Hinduism, Buddhism, and Jainism. The site consists of 34 magnificent caves, carved out of the Charanandri hills, each showcasing intricate sculptures, artistic carvings, and architectural brilliance. The most remarkable cave is the Kailasa Temple (Cave 16), a monolithic structure dedicated to Lord Shiva, which was carved from a single rock and is considered an engineering marvel. The Buddhist caves feature monasteries and prayer halls, while the Jain caves highlight detailed carvings reflecting values of simplicity and devotion. Ellora is not only an artistic wonder but also a symbol of religious tolerance, unity, and cultural richness, attracting visitors, historians, and spiritual seekers from across the world.",
    location: "Ellora Caves, Maharashtra",
  },
  {
    id: 2,
    images: [
      "https://wanderon-images.gumlet.io/gallery/new/2025/01/24/hawa-mahal-rajasthan.avif","https://wanderon-images.gumlet.io/gallery/new/2025/08/22/1755867265473-hawa-mahal-jaipur.jpg",
      ,"https://cdn.pixabay.com/photo/2018/09/11/17/20/jaipur-3670085_1280.jpg",
    ],
    title: "HAWA MAHAL",
    description: "Jaipur:Hawa Mahal: Iconic “Palace of Winds” with ornate pink sandstone façade.",
    MoreDescription:
      "Hawa Mahal, located in Jaipur, Rajasthan, is one of India’s most iconic monuments and a symbol of the city’s rich architectural heritage. Built in 1799 by Maharaja Sawai Pratap Singh, it was designed by architect Lal Chand Ustad in the form of a five-story pyramid, resembling the crown of Lord Krishna. The palace is constructed from red and pink sandstone, giving Jaipur its famous “Pink City” identity. Hawa Mahal, meaning “Palace of Winds,” features 953 small windows, called jharokhas, which allowed royal women to observe street life and festivals without being seen, adhering to the purdah system. The intricate latticework and delicate carvings enhance its aesthetic appeal while promoting natural ventilation. Strategically built for both beauty and function, it is a fine example of Rajput architecture blended with Mughal influences. Today, Hawa Mahal is a major tourist attraction, drawing visitors worldwide to marvel at its grandeur, history, and unique design.",
    location: "jaipur,Rajasthan",
  },
    {
    id: 3,
    images: [
      "https://jaipurtourism.co.in/images/places-to-visit/header/jantar-mantar-jaipur-entry-fee-timings-holidays-reviews-header.jpg","https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/Laghu-Smarat-Yantra-kb6592.jpg",
      "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/rsz_cover_jantar_mantar_jaipur.jpg",
    ],
    title: "Jantar Mantar",
    description: `Astronomical observatory with ancient instruments measuring celestial movements. `,
      
    MoreDescription:
      "Jantar Mantar, located in Jaipur, Rajasthan, is a remarkable historical astronomical observatory built by Maharaja Sawai Jai Singh II in the early 18th century. It is part of a series of five observatories constructed across India to improve the accuracy of astronomical measurements and study celestial bodies. The Jaipur observatory is the largest and best-preserved, featuring 19 architectural instruments designed for measuring time, predicting eclipses, tracking stars, and observing planetary movements with great precision. Among its most famous instruments is the Samrat Yantra, a giant sundial capable of measuring time accurately to within two seconds. Jantar Mantar is not only a scientific marvel but also an architectural masterpiece, showcasing the blend of art, science, and innovation. Today, it stands as a UNESCO World Heritage Site, attracting scholars, tourists, and astronomy enthusiasts worldwide, offering a glimpse into India’s rich scientific heritage and historical ingenuity.",
    location: "Jaipur, Rajasthan",
  },
    {
    id: 4,
    images: [
      "https://media.istockphoto.com/id/467571052/photo/sanchi-stupa-india.webp?b=1&s=170667a&w=0&k=20&c=x6C86-XjW-vg7j0h3gcH3yLtH6X_np22IL-rF6JoMOQ=","https://c1.wallpaperflare.com/preview/722/385/90/sanchi-sculptures-buddhism-buddhist.jpg",
      "https://media.istockphoto.com/photos/inner-passage-of-stupa-sanchi-picture-id485944042?k=20&m=485944042&s=612x612&w=0&h=0FFQUjI8T_oY153AaOhwfIVeIlTrG24Kn2pkT2F5asc=",
    ],
    title: "Sanchi Stupa ",
    description: `Sanchi Stupa: Ancient Buddhist monument symbolizing peace, faith, and architectural excellence. `,
      
    MoreDescription:
      "The Great Stupa at Sanchi, located in Madhya Pradesh, India, is one of the oldest and most important Buddhist monuments in the world. Originally commissioned by Emperor Ashoka in the 3rd century BCE, it was built to enshrine the sacred relics of the Buddha. The stupa is a large hemispherical dome symbolizing the eternal cycle of life, death, and rebirth. It is surrounded by intricately carved gateways, called toranas, which depict scenes from the life of the Buddha and Jataka tales. These gateways showcase exquisite artistry, blending symbolism with storytelling. The stupa served not only as a religious center but also as a symbol of peace, meditation, and spiritual enlightenment. Over centuries, Sanchi became an important hub for Buddhist learning and pilgrimage. Today, it stands as a UNESCO World Heritage Site, admired for its historical, spiritual, and architectural significance, attracting pilgrims, historians, and tourists from across the globe..",
    location: "Raisen, Madhya Pradesh",
  },
    {
    id: 5,
    images: [
      "https://as1.ftcdn.net/jpg/12/99/59/70/1000_F_1299597027_B4wwyS38NfXzXPUpgPLWVLs0hj692W6W.jpg","https://as2.ftcdn.net/jpg/07/13/86/75/1000_F_713867565_9U3V9eM9Uw0m294zBH8jgy2F4MystDrT.jpg",
      "https://images.unsplash.com/photo-1710347454810-e3d493dcc538?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    title: "Jaisalmer Fort",
    description: `Jaisalmer Fort: Golden sandstone fortress, blending history, culture, and architecture. `,
      
    MoreDescription:
      "Jaisalmer Fort, located in Rajasthan, is one of the largest and most magnificent forts in the world. Built in 1156 AD by Rawal Jaisal, the fort is also known as Sonar Quila or the Golden Fort because of its stunning golden-yellow sandstone that glows beautifully under sunlight, blending with the desert landscape. Unlike many other forts, Jaisalmer Fort is a “living fort,” as it still houses shops, temples, havelis, and homes where people reside. The fort is surrounded by massive walls and intricate gateways, with winding lanes showcasing Rajput architecture and craftsmanship. Inside, attractions include Jain temples with delicate carvings, the Raj Mahal (royal palace), and ornate balconies. Strategically built on Trikuta Hill, the fort provided strong defense against invasions in the past. Today, it stands as a UNESCO World Heritage Site under the Hill Forts of Rajasthan, symbolizing the grandeur, history, and cultural richness of the desert city of Jaisalmer.",
    location: "Jaisalmer, Rajasthan",
  },
    {
    id: 6,
    images: [
      "https://as2.ftcdn.net/jpg/02/85/43/37/1000_F_285433744_iUcC83UYSfOuJjtXIiWiUbjWezGWlTbJ.jpg","https://st2.depositphotos.com/1000434/7761/i/950/depositphotos_77615282-stock-photo-lakshmana-temple-in-khajuraho-madhya.jpg",
      "https://as2.ftcdn.net/jpg/03/13/45/95/1000_F_313459587_szFpkJIzIRfR6cYjaOcl57nEAm4SOXG6.jpg",
    ],
    title: "Khajuraho",
    description: `Jaisalmer Fort: Golden sandstone fortress, blending history, culture, and architecture. `,
      
    MoreDescription:
      "Jaisalmer Fort, located in Rajasthan, is one of the largest and most magnificent forts in the world. Built in 1156 AD by Rawal Jaisal, the fort is also known as Sonar Quila or the Golden Fort because of its stunning golden-yellow sandstone that glows beautifully under sunlight, blending with the desert landscape. Unlike many other forts, Jaisalmer Fort is a “living fort,” as it still houses shops, temples, havelis, and homes where people reside. The fort is surrounded by massive walls and intricate gateways, with winding lanes showcasing Rajput architecture and craftsmanship. Inside, attractions include Jain temples with delicate carvings, the Raj Mahal (royal palace), and ornate balconies. Strategically built on Trikuta Hill, the fort provided strong defense against invasions in the past. Today, it stands as a UNESCO World Heritage Site under the Hill Forts of Rajasthan, symbolizing the grandeur, history, and cultural richness of the desert city of Jaisalmer..",
    location: "Khajuraho, Madhya Pradesh",
  },
    {
    id: 7,
    images: [
      "https://wallpapercave.com/wp/wp11704833.jpg","https://wallpapercave.com/wp/wp11704942.jpg",
      "https://4kwallpapers.com/images/walls/thumbs_3t/7948.jpg",
    ],
    title: "Taj Mahal",
    description: `Taj Mahal: Iconic white marble mausoleum symbolizing love and beauty. `,
      
    MoreDescription:
      "The Taj Mahal, located in Agra, Uttar Pradesh, is one of the most iconic monuments in the world and a UNESCO World Heritage Site. Built in the 17th century by the Mughal emperor Shah Jahan, it was constructed in memory of his beloved wife, Mumtaz Mahal, symbolizing eternal love. This magnificent mausoleum is made of white marble and adorned with intricate carvings, precious stone inlay work, and beautiful calligraphy. The central dome, surrounded by four elegant minarets, creates a breathtaking view, especially under the moonlight. The Taj Mahal complex also includes a mosque, a guest house, and sprawling Mughal gardens divided by water channels, reflecting the harmony of Persian and Indian architectural styles. Recognized as one of the Seven Wonders of the World, it attracts millions of visitors every year. Beyond its architectural brilliance, the Taj Mahal remains a timeless symbol of devotion, love, and India’s rich cultural heritage",
    location: "Agra, Uttar Pradesh",
  },
    {
    id: 8,
    images: [
      "https://png.pngtree.com/background/20230606/original/pngtree-red-fort-is-a-fortress-in-the-indian-city-of-agra-picture-image_2894286.jpg","https://as1.ftcdn.net/jpg/07/70/83/38/1000_F_770833820_63IMNjJ2kuajH6Jz3Xsz0GywxIQiQIGb.jpg",
      "https://th.bing.com/th/id/OLC.AvPYZXUUV2ZQ3g480x360?&rs=1&pid=ImgDetMain&o=7&rm=3",
    ],
    title: "Agra Fort",
    description: `Red Fort Agra: Majestic Mughal fortress of power, history, and grandeur. `,
      
    MoreDescription:
      "The Agra Fort, also known as the Red Fort of Agra, is a UNESCO World Heritage Site and one of the finest examples of Mughal architecture in India. Built primarily with red sandstone by Emperor Akbar in 1565, the fort served as the main residence of the Mughal emperors until 1638, before the capital shifted to Delhi. The fort is semi-circular in shape and surrounded by massive walls stretching about 2.5 kilometers. Inside, it houses several exquisite structures, including the Jahangir Mahal, Khas Mahal, Diwan-i-Khas, Diwan-i-Am, and the Musamman Burj, where Shah Jahan was imprisoned by his son Aurangzeb and spent his final years gazing at the Taj Mahal. The Agra Fort beautifully blends defensive strength with artistic elegance, featuring intricate carvings, marble inlay work, and spacious courtyards. Today, it stands as a proud reminder of Mughal power, architectural brilliance, and India’s rich historical legacy.",
    location: "Agra ,Uttar Pradesh",
  },
    {
    id: 9,
    images: [
      "https://as1.ftcdn.net/jpg/11/26/07/82/1000_F_1126078209_m9Km94fLz6FOqWdJreuJ1qVOhDELYRO0.jpg","https://wallpaperaccess.com/full/4136696.jpg",
      "https://tailormadejourney.com/wp-content/uploads/2021/01/Toy-train-ride-Darjeeling-India.jpg",
    ],
    title: " Darjeeling",
    description: `Darjeeling: Scenic hill station famed for tea, views, and heritage. `,
      
    MoreDescription:
      "Darjeeling, located in West Bengal, is one of India’s most famous hill stations, often called the “Queen of the Hills.” Nestled in the foothills of the Himalayas, it is world-renowned for its tea plantations, producing the celebrated Darjeeling tea known for its unique flavor and aroma. The town offers breathtaking views of snow-clad peaks, including the majestic Kanchenjunga, the third-highest mountain in the world. Built during the British colonial era, Darjeeling is also known for the UNESCO World Heritage Darjeeling Himalayan Railway, popularly called the “Toy Train.” The town is dotted with monasteries, colonial architecture, and vibrant markets that reflect a blend of cultures. Popular attractions include Tiger Hill, Batasia Loop, Peace Pagoda, and the Himalayan Mountaineering Institute. With its cool climate, lush greenery, and cultural charm, Darjeeling continues to be a favorite destination for tourists, nature lovers, and adventure seekers from around the globe.",
    location: "Darjeeling, West Bengal,",
  },
    {
    id: 10,
    images: [
      "https://as1.ftcdn.net/jpg/01/43/48/44/1000_F_143484471_J899GMFuplznta9ZAfnQwoTKA8diFLqO.jpg","https://cdn.pixabay.com/photo/2016/02/18/17/08/brown-winged-kingfisher-1207601_1280.jpg",
      "https://www.holidify.com/images/bgImages/SUNDARBAN-NATIONAL-PARK.jpg",
    ],
    title: "The Sundarbans National Park",
    description: `Sundarbans: Vast mangrove forest, Bengal tigers, rivers, and biodiversity. `,
      
    MoreDescription:
      "Sundarbans National Park, located in West Bengal, India, is a UNESCO World Heritage Site and one of the world’s largest mangrove forests. Spread across the delta formed by the Ganga, Brahmaputra, and Meghna rivers, the park is renowned for its unique ecosystem and extraordinary biodiversity. It is home to the famous Royal Bengal Tiger, known for its ability to swim across rivers, as well as saltwater crocodiles, fishing cats, spotted deer, and numerous bird species. The park’s dense mangroves, tidal waterways, and mudflats create a natural habitat that supports both marine and terrestrial life. The Sundarbans also play a vital role in protecting coastal areas from storms and erosion. Apart from its wildlife, the park sustains local communities who rely on fishing, honey collection, and forest resources. A blend of natural beauty and ecological significance, the Sundarbans stand as a global treasure of wilderness and conservation.",
    location: "Sundarban,West Bengal",
  },
    {
    id: 11,
    images: [
      "https://whc.unesco.org/uploads/thumbs/site_1711_0005-1000-750-20240529155522.jpg","https://whc.unesco.org/uploads/thumbs/site_1711_0006-1000-714-20230315145350.jpg",
      "https://whc.unesco.org/uploads/thumbs/site_1711_0017-1000-714-20240530101825.jpg",
    ],
    title: "Charaideo Moidams",
    description: `Charaideo Moidams: Sacred burial mounds of Ahom kings in Assam. `,
      
    MoreDescription:
      "Charaideo Moidams, located in Assam, are ancient burial mounds of the Ahom dynasty, often referred to as the “Pyramids of Assam.” Established in the 13th century by Sukaphaa, the founder of the Ahom kingdom, Charaideo served as the first capital and later became a sacred site for royal burials. The moidams are earthen mounds built over vaults where kings, queens, and nobles of the Ahom dynasty were laid to rest, along with valuables, weapons, and sometimes attendants, reflecting ancient funerary practices. Architecturally, they resemble tumuli and showcase the blend of Tai-Ahom traditions with local customs. Over 150 moidams have been discovered, though originally more than 600 were believed to exist. The site holds immense historical, cultural, and archaeological importance, symbolizing the glory of the Ahom kingdom that ruled Assam for nearly 600 years. Today, efforts are being made to include Charaideo Moidams in the UNESCO World Heritage list..",
    location: "Charaideo Moidams ,Assam",
  },
    {
    id: 12,
    images: [
      "https://www.kaziranga-national-park.com/wp-content/themes/kaziranga/gallery/knp-29-big.jpg","https://www.kaziranga-national-park.com/wp-content/themes/kaziranga/gallery/knp-62-big.jpg",
      "https://www.kaziranga-national-park.com/wp-content/themes/kaziranga/gallery/knp-15-big.jpg",
    ],
    title: "Kaziranga: Famous wildlife sanctuary",
    description: `Kaziranga: Famous wildlife sanctuary, home to one-horned rhinoceroses. `,
      
    MoreDescription:
      "Kaziranga National Park, located in Assam, India, is a UNESCO World Heritage Site renowned for its exceptional biodiversity and conservation efforts. Established in 1905, the park spans over 430 square kilometers of tall elephant grass, marshlands, and dense forests along the Brahmaputra River. Kaziranga is globally famous as the habitat of the Indian one-horned rhinoceros, which has been successfully conserved here, along with tigers, elephants, swamp deer, wild water buffalo, and numerous bird species. The park also hosts reptiles, amphibians, and aquatic life, making it a rich ecological hotspot. Kaziranga’s landscape includes floodplains, wetlands, and grasslands, supporting seasonal migration and breeding of wildlife. Annual jeep and elephant safaris allow visitors to experience its natural beauty and wildlife closely. Beyond wildlife, Kaziranga plays a vital role in environmental preservation and eco-tourism, symbolizing India’s commitment to protecting endangered species and maintaining ecological balance.",
    location: "Kaziranga , Assam",
  },
    {
    id: 13,
    images: [
      "https://www.tripsavvy.com/thmb/QZUBiTCTl2BvMAAla9vmUBqQEAk=/2120x1414/filters:fill(auto,1)/GettyImages-618355052-b865a78b33cf412b915909ad9d941f27.jpg","https://assets.traveltriangle.com/blog/wp-content/uploads/2019/05/inside-of-mahabodhi-temple.jpg",
      "https://c8.alamy.com/comp/KWN5FJ/part-of-mahabodhi-temple-complex-in-bodh-gaya-india-KWN5FJ.jpg",
    ],
    title: "Mahabodhi Temple",
    description: `Mahabodhi Temple: Sacred Buddhist site where Buddha attained enlightenment.
    . `,
      
    MoreDescription:
      "The Mahabodhi Temple, located in Bodh Gaya, Bihar, is one of the most revered Buddhist pilgrimage sites in the world. It marks the location where Gautama Buddha attained enlightenment under the Bodhi tree over 2,500 years ago. The present structure, a UNESCO World Heritage Site, dates back to the 5th–6th century AD, though the site’s origins are much older. The temple features a towering pyramidal spire, intricately carved stone reliefs, and a large seated Buddha statue that draws devotees from across the globe. Surrounding the temple is the sacred Bodhi tree, under which Buddha meditated, along with numerous shrines, stupas, and monasteries representing different Buddhist traditions. Mahabodhi Temple is not only a spiritual center but also an architectural marvel, reflecting ancient Indian craftsmanship. It attracts pilgrims, tourists, and scholars, offering a serene environment for meditation, devotion, and study of Buddhist heritage.",
    location: "Bodh Gaya, Bihar",
  },
    {
    id: 14,
    images: [
      "https://www.hyderabadtourism.travel/images/v2/header-places/golconda-fort-hyderabad-tourism-attraction-entryfee-timings-reviews-header.jpg","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/f8/e4/cb/golconda-fort.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/a3/62/98/golkonda-fort.jpg?w=2000&h=-1&s=1",
    ],
    title: "Golconda Fort",
    description: `Golconda Fort: Historic fortress known for architecture, acoustics, and diamond trade. `,
      
    MoreDescription:
      "Golconda Fort, located in Hyderabad, Telangana, is a majestic historical fortress known for its architectural brilliance, strategic design, and rich history. Originally built in the 13th century by the Kakatiya dynasty, it later became the capital of the Qutb Shahi dynasty in the 16th century. Spread over 11 kilometers, the fort comprises massive gates, high walls, bastions, palaces, mosques, and ingenious water supply systems. One of its most remarkable features is the acoustic system, where a hand clap at the entrance can be heard at the highest point of the fort, serving as an early warning system. Golconda was also famous for diamond trading, with legendary diamonds like the Koh-i-Noor and Hope Diamond associated with it. Today, the fort stands as a symbol of Hyderabad’s heritage, attracting tourists, history enthusiasts, and photographers who admire its grandeur, panoramic views, and fascinating past.",
    location: "Hyderabad, Telangana",
  },
    {
    id: 15,
    images: [
      "https://wallpapercave.com/wp/wp15148108.webp","https://wallpapercave.com/wp/wp15148120.webp",
      "https://wallpapercave.com/wp/wp15148135.webp",
    ],
    title: "Ramappa Temple",
    description: `Ramappa Temple: Stunning 13th-century Kakatiya-era temple with intricate carvings. `,
      
    MoreDescription:
      "Ramappa Temple, also known as the Ramalingeswara Temple, is located in Palampet, Telangana, and is a UNESCO World Heritage Site. Built in 1213 AD during the reign of the Kakatiya dynasty under King Ganapati Deva, it is renowned for its exquisite Kakatiya-style architecture and intricate sculptural work. The temple is dedicated to Lord Shiva and features a beautifully carved sanctum, pillared halls, and detailed friezes depicting dancers, musicians, and scenes from Hindu mythology. One of the most remarkable aspects of Ramappa Temple is its floating bricks in the roof, which make the structure lightweight and earthquake-resistant, showcasing the engineering brilliance of the era. The temple’s sculptural beauty, detailed ornamentation, and historical significance make it an important cultural landmark. Surrounded by scenic landscapes, it attracts pilgrims, historians, and tourists alike, reflecting the artistic, spiritual, and architectural heritage of the Kakatiya dynasty in southern India.",
    location: "Palampet, Telangana",
  },
    {
    id: 16,
    images: [
      "https://images.pexels.com/photos/30312127/pexels-photo-30312127.jpeg","https://images.pexels.com/photos/8232852/pexels-photo-8232852.jpeg",
      "https://images.pexels.com/photos/33516545/pexels-photo-33516545.jpeg","https://images.pexels.com/photos/31896959/pexels-photo-31896959.jpeg",
    ],
    title: "The Group of Monuments at Mahabalipuram",
    description: `Mahabalipuram: Ancient coastal temples showcasing Pallava architecture and rock carvings. `,
      
    MoreDescription:
      "The Group of Monuments at Mahabalipuram, located in Tamil Nadu, is a UNESCO World Heritage Site famous for its remarkable rock-cut temples and sculptures built during the Pallava dynasty in the 7th and 8th centuries. These monuments include rathas (chariots), mandapas (cave temples), rock reliefs, and structural temples, all carved out of granite, showcasing exceptional craftsmanship and artistic excellence. One of the most famous features is the Descent of the Ganga (Arjuna’s Penance), a massive open-air rock relief depicting stories from Hindu mythology. The Shore Temple, overlooking the Bay of Bengal, is another iconic structure, representing early Dravidian temple architecture. Mahabalipuram’s monuments reflect the ingenuity, religious devotion, and cultural richness of the Pallavas. They also served as a center for maritime trade and art patronage. Today, these monuments attract tourists, historians, and art enthusiasts from across the world, symbolizing India’s rich architectural and sculptural heritage.",
    location: " Mahabalipuram,Tamil Nadu",
  },
    {
    id: 17,
    images: [
      "https://toim.b-cdn.net/pictures/travel_guide/attractions/group-of-monuments-at-hampi-head-469.jpeg","https://www.asparkholidays.com/uploads/16349_Vittala%20Temple%203.jpg",
      "https://www.indianluxurytrains.com/wp-content/uploads/2011/07/Hampi_virupaksha_temple-1.jpg",
    ],
    title: "The Group of Monuments at Hampi",
    description: `Hampi: Ancient Vijayanagara ruins showcasing temples, palaces, and architecture. `,
      
    MoreDescription:
      "The Group of Monuments at Hampi, located in Karnataka, is a UNESCO World Heritage Site and a remarkable testament to the grandeur of the Vijayanagara Empire during the 14th–16th centuries. Spread over a vast area along the Tungabhadra River, Hampi consists of majestic temples, royal complexes, bazaars, forts, and iconic stone chariots, all built with exceptional craftsmanship. The Virupaksha Temple, dedicated to Lord Shiva, is still active and attracts pilgrims from across India. Other notable structures include the Vittala Temple, famous for its musical pillars and stone chariot, the Lotus Mahal, Elephant Stables, and the Queen’s Bath. Hampi’s architecture demonstrates a harmonious blend of religious devotion, administrative sophistication, and artistic innovation. Surrounded by boulder-strewn landscapes, rivers, and hills, the site offers a unique glimpse into medieval South Indian culture, economy, and spirituality. Today, Hampi continues to fascinate historians, tourists, and photographers alike, preserving India’s rich historical and architectural legacy.",
    location: "Hampi,Karnataka",
  },
    {
    id: 18,
    images: [
      "https://images.pexels.com/photos/18125024/pexels-photo-18125024.jpeg","https://images.pexels.com/photos/28867945/pexels-photo-28867945.jpeg",
      "https://images.pexels.com/photos/13079396/pexels-photo-13079396.jpeg",
    ],
    title: "Chhatrapati Shivaji Maharaj Terminus",
    description: `CSMT: Historic Mumbai railway station blending Victorian Gothic and Indian architecture. `,
      
    MoreDescription:
      "Chhatrapati Shivaji Maharaj Terminus (CSMT), formerly known as Victoria Terminus, is a historic railway station in Mumbai, Maharashtra, and a UNESCO World Heritage Site. Completed in 1887 to commemorate Queen Victoria’s Golden Jubilee, it was designed by British architect Frederick William Stevens, combining Victorian Gothic Revival architecture with traditional Indian architectural elements. The station features pointed arches, turrets, domes, stained glass windows, and intricate stone carvings depicting flora, fauna, and historical figures, making it an architectural marvel. CSMT serves as a major hub for both long-distance and suburban trains, handling thousands of passengers daily. Its grandeur and historical significance symbolize Mumbai’s colonial past, industrial growth, and urban development. The station also attracts tourists, photographers, and history enthusiasts, who admire its intricate design and bustling atmosphere. Today, CSMT stands as a proud landmark, reflecting India’s rich cultural heritage, engineering excellence, and the fusion of Eastern and Western architectural styles.",
    location: " Mumbai,Maharashtra",
  },
    {
    id: 19,
    images: [
      "https://images.pexels.com/photos/5138790/pexels-photo-5138790.jpeg","https://images.pexels.com/photos/8230166/pexels-photo-8230166.jpeg",
      "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/05/Gangaikonda-Cholapuram1.jpg",
    ],
    title: "The Great Living Chola Temples",
    description: `Chola Temples: Majestic South Indian temples showcasing Dravidian architecture and devotion. `,
      
    MoreDescription:
      "The Great Living Chola Temples, located in Tamil Nadu, India, are UNESCO World Heritage Sites that represent the zenith of Chola dynasty architecture and temple art. Built between the 9th and 13th centuries, these temples include the Brihadeeswarar Temple at Thanjavur, the Gangaikonda Cholapuram Temple, and the Airavatesvara Temple at Darasuram. They are celebrated for their grand scale, intricate sculptures, towering vimanas (temple towers), and elaborate frescoes that depict Hindu deities, legends, and daily life. Constructed with precision and engineering brilliance, the temples served as centers of religious devotion, art, and culture. The Brihadeeswarar Temple, for instance, features a massive granite dome and a monolithic Nandi statue, reflecting the Cholas’ architectural mastery. These temples continue to be active places of worship while attracting historians, architects, and tourists worldwide. The Great Living Chola Temples exemplify the cultural, spiritual, and artistic achievements of medieval South India, making them enduring symbols of Indian heritage.",
    location: "Thanjavur ,Tamil Nadu",
  },
    {
    id: 20,
    images: [
      "https://www.vedantawakeup.com/wp-content/uploads/2019/08/Mehrangarh-Fort-Jodhpur-RJ.jpg","https://wallpaperaccess.com/full/891240.jpg",
      "https://wallpaperaccess.com/full/891324.jpg","https://wallpaperaccess.com/full/6225380.jpg",
    ],
    title: "Rajasthan Hill Forts",
    description: `Rajasthan Hill Forts: Majestic forts showcasing Rajput valor and architectural brilliance. `,
      
    MoreDescription:
      "The Hill Forts of Rajasthan, located across the arid landscapes of northwestern India, are a UNESCO World Heritage Site that exemplifies the grandeur, military prowess, and architectural ingenuity of the Rajput rulers. These forts, built between the 5th and 18th centuries, were strategically constructed on hills to provide defense against invasions and offer commanding views of surrounding regions. Notable forts include Chittorgarh Fort, Kumbhalgarh Fort, Amer Fort, Ranthambore Fort, Gagron Fort, and Jaisalmer Fort, each showcasing unique features such as massive walls, bastions, palaces, temples, and water systems. The forts also reflect artistic excellence through intricate carvings, frescoes, and courtyards. Beyond defense, they served as centers of administration, culture, and trade. Today, the Hill Forts of Rajasthan attract tourists, historians, and heritage enthusiasts, offering insights into Rajput history, architectural mastery, and the valorous spirit of the region’s kings and warriors..",
    location: " Jhalawar,Rajasthan",
  },
    {
    id: 21,
    images: [
      "https://i.ytimg.com/vi/KXWDj3f9pPo/maxresdefault.jpg","https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Hutheesing-Jain-Temple.jpg",
      "https://plus.unsplash.com/premium_photo-1697730467431-323d86486a4c?q=80&w=1513&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    title: "Historical city of Ahmedabad",
    description: `Ahmedabad: Historic city showcasing architecture, culture, and Gujarat’s rich heritage. `,
      
    MoreDescription:
      "The Historical City of Ahmedabad, located in Gujarat, India, is a UNESCO World Heritage City renowned for its rich architectural and cultural heritage. Founded in 1411 by Sultan Ahmed Shah, the city served as a major center of trade, culture, and politics. Ahmedabad’s old city is famous for its intricate pols (traditional housing clusters), majestic mosques, temples, and historic stepwells, reflecting a blend of Islamic, Hindu, and Jain architectural styles. Notable landmarks include the Jama Masjid, Sidi Saiyyed Mosque, known for its exquisite stone latticework, and Bhadra Fort, a symbol of the city’s strategic and historical importance. The city also played a crucial role in India’s independence movement as the home of Mahatma Gandhi, with the Sabarmati Ashram serving as a key site. Today, Ahmedabad is a vibrant city where heritage coexists with modern urban life, attracting tourists, historians, and architecture enthusiasts from around the world.",
    location: "Ahmedabad , Gujrat",
  },

 
];

const Card = ({ card, openDetail }) => {
  return (
    <div
      className="group relative h-[350px] overflow-hidden rounded-lg cursor-pointer shadow-lg"
      onClick={() => openDetail(card)} // ✅ Tap to open on mobile
    >
      <img
        src={card.images[0]}
        alt={card.title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      {/* Overlay for desktop (hover) */}
      <div className="absolute inset-0 hidden sm:flex flex-col justify-end p-6 backdrop-blur-md opacity-0 transition-all duration-500 ease-in-out translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="text-2xl font-bold mb-2 text-orange-500">
          {card.title}
        </h3>
        <p className="text-lg text-white mb-6">{card.description}</p>
        <button
          className="text-white font-bold inline-flex items-center gap-2 hover:underline"
        >
          MORE ↗️
        </button>
      </div>

      {/* Always visible for mobile */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-3 sm:hidden">
        <h3 className="text-lg font-bold text-orange-400">{card.title}</h3>
        <p className="text-sm text-gray-200 line-clamp-2">{card.description}</p>
      </div>
    </div>
  );
};

const CardDetailModal = ({ card, closeModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!card) return null;

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % card.images.length);
  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + card.images.length) % card.images.length
    );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-6xl w-full h-[90vh] overflow-hidden relative shadow-2xl flex flex-col">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-50 text-red-600 font-bold text-3xl hover:text-red-800"
        >
          ✖
        </button>

        {/* Image Slider */}
        <div className="relative w-full h-[300px] sm:h-[450px] bg-gray-200">
          <img
            src={card.images[currentIndex]}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          {card.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full text-xl"
              >
                ◀️
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full text-xl"
              >
                ▶️
              </button>
            </>
          )}
        </div>

        {/* Details */}
        <div className="p-6 overflow-y-auto flex-1">
          <h2 className="text-3xl font-bold mb-4 text-orange-500">
            {card.title}
          </h2>
          <p className="text-base text-gray-700 mb-3">{card.description}</p>
          <p className="text-sm text-gray-600 mb-3">{card.MoreDescription}</p>
          <p className="text-sm text-gray-500 font-semibold">
            Location: {card.location}
          </p>
        </div>
      </div>
    </div>
  );
};

const RevealCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="min-h-screen bg-neutral-900 font-sans text-white p-6">
      <h2 className="text-center text-orange-400 text-2xl sm:text-3xl font-bold">
       🏰 Heritage of India – Timeless Legacy, Culture, and Grandeur 👇

      </h2>
      <h3 className="text-center text-neutral-400 text-base sm:text-lg mb-8">
       ✨ “A Journey Through Monuments, Traditions, and Eternal Wisdom”
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cardsData.map((card) => (
          <Card key={card.id} card={card} openDetail={setSelectedCard} />
        ))}
      </div>

      {selectedCard && (
        <CardDetailModal card={selectedCard} closeModal={() => setSelectedCard(null)} />
      )}
    </div>
  );
};

export default RevealCards;