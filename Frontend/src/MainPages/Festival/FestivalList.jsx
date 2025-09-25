import React, { useState } from "react";

const cardsData = [
  {
    id: 1,
    images: [
      'https://media.istockphoto.com/id/1381030718/photo/barsana-holi-one-of-the-most-joyful-festival-of-india-this-is-birth-place-of-radha-lord.jpg?s=612x612&w=0&k=20&c=c0kcjHpSFJXg7F4D6s8Ez-7RWY3MjoIrwsiRQKScank=',
      'https://media.istockphoto.com/id/1141604525/photo/lathmar-holi-festival-in-nandgaon-india-2019.jpg?s=2048x2048&w=is&k=20&c=11HXWJX-jZoJVk8nFIgAl34e9sfTDT-xIWQ53u231Rw=',
      'https://images.pexels.com/photos/19448840/pexels-photo-19448840.jpeg',
      'https://images.news18.com/ibnlive/uploads/2022/03/holi-mathura-164748647516x9.jpg',
      'https://t3.ftcdn.net/jpg/04/87/74/18/360_F_487741841_e4wcfoLFwLg3Okfs0ViCfrC1stMfxhuJ.jpg'
    ],
    title: 'HOLI',
    description:'Holi is the festival of colors, joy, and togetherness', 
    MoreDescription:
      'Holi, popularly known as the “festival of colors,” is one of the most joyful and vibrant festivals of India. It marks the arrival of spring and the victory of good over evil. The festival usually begins with Holika Dahan on the night before Holi, symbolizing the burning away of negativity and evil forces. The next day, people celebrate by throwing colored powders, splashing water, and singing and dancing in the streets with friends and family. Traditional sweets like gujiya and drinks like thandai add flavor to the celebrations. Holi is not just about colors; it is also a time to forgive, forget past grievances, and strengthen relationships. The festival promotes unity, brotherhood, and happiness, bringing people from all communities together in a spirit of love and joy.',
  },
  {
    id: 2,
    images: [
      'https://www.optimatravels.com/images/ayodhya-images/deepawali-in-ayodhya.jpg',
      'https://media.istockphoto.com/id/1820638708/photo/crackers-and-city-scap.jpg?s=2048x2048&w=is&k=20&c=HWNI35MDHhkzJlACktL-QsoyRbj9lMVBIG9ipHrT_UU=',
      'https://indiator.com/tourist-places/wp-content/uploads/2018/11/Diwali-blog-image.jpg',
      'https://assets.ganeshaspeaks.com/wp-content/uploads/2018/11/Diwali-21-750.webp',
    ],
    title: 'DIWALI',
    description:
      'Diwali is the festival of lights, symbolizing the victory of light over darkness and good over evil.',
    MoreDescription:
      'Diwali, also known as the Festival of Lights, is one of the most important and widely celebrated festivals in India. It symbolizes the victory of light over darkness, knowledge over ignorance, and good over evil. People celebrate Diwali with great joy and enthusiasm by decorating their homes with diyas (oil lamps), candles, and colorful rangoli designs. On this occasion, families gather to perform traditional prayers, especially the worship of Goddess Lakshmi, the goddess of wealth and prosperity. Fireworks, sweets, and exchanging gifts are also an essential part of the celebration, bringing happiness and togetherness. The festival usually lasts for five days, each day having its own cultural and spiritual significance. Beyond its religious importance, Diwali spreads a universal message of hope, positivity, and unity. It is a time when people forget differences, strengthen bonds, and welcome new beginnings with brightness and joy.',
  },
  {
    id: 3,
    images: [
      'https://cdn.britannica.com/49/254949-050-3020F275/Kite-flying-rooftops-Ahmedabad-Makar-Sankranti-Uttarayana-Hindu-festival-India.jpg',
      'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_612/MjEyNTQ5OTM1MDU1NzA5NzA1/makar-sankranti-the-kite-festival.webp',
      'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2025/01/06/1626553-11.png?im=Resize=(700,400)',
    ],
    title: 'MAKAR SANKRANTI',
    description:
      'Makar Sankranti is a harvest festival that marks the transition of the Sun into Capricorn, celebrated with kite flying, sweets, and joy.',

    MoreDescription:
      'Makar Sankranti is a popular Hindu festival celebrated every year in January, marking the transition of the Sun into the zodiac sign of Capricorn (Makar). It is considered an auspicious time that symbolizes the end of the winter solstice and the beginning of longer days. The festival is known for its cultural diversity and is celebrated differently across India. People take holy dips in rivers like Ganga, Yamuna, and Godavari, as it is believed to cleanse sins and bring blessings. Special dishes made of sesame seeds (til) and jaggery (gur), such as tilgul and rewri, are prepared and shared, symbolizing love and togetherness. Kite flying is one of the most popular traditions of Makar Sankranti, filling the skies with vibrant colors. The festival also signifies harvest time, gratitude to nature, and spreading harmony. It is a joyous occasion that unites families and communities with warmth and celebration.',
  },
  {
    id: 4,
    images: [
      'https://files.prokerala.com/images/800/navratri-greetings-5.jpg',
      'https://images.financialexpressdigital.com/2019/10/Navratri-Gujarat-Tourism-660.jpg',
      'https://shriandsam.com/cdn/shop/articles/Untitled_design_207.png?v=1634014590&width=2240',
      'https://media.gettyimages.com/id/869366712/video/group-of-gujrati-people-performing-dandiya-delhi-india.avif?s=640x640&k=20&c=h2SXxxHd30TR-jWt9w9q7_nRnA6swPzN9doWec-jTW0=',
    ],
    title: 'NAVRATRI ',
    description:
      'Navratri is a nine-day Hindu festival dedicated to Goddess Durga, celebrated with devotion, dance, music, and fasting.',

    MoreDescription:
      'Navratri is one of the most significant Hindu festivals, celebrated over nine nights and ten days in honor of Goddess Durga and her nine divine forms. The word Navratri literally means “nine nights,” during which devotees worship the goddess with great devotion, observing fasts, prayers, and rituals. Each day is dedicated to a different avatar of Durga, symbolizing power, purity, and protection. In many parts of India, the festival is marked with vibrant cultural traditions such as Garba and Dandiya Raas dances, especially in Gujarat and Maharashtra. In West Bengal, it is celebrated as Durga Puja with grand decorations, pandals, and cultural performances. Navratri signifies the victory of good over evil, as it commemorates Goddess Durga’s triumph over the demon Mahishasura. The festival brings communities together, spreading joy, devotion, and cultural unity across the country.',
  },
  {
    id: 5,
    images: [
      'https://i.pinimg.com/736x/6e/4d/6b/6e4d6b77a7f5efe200c2c015c01e7e0c.jpg',
      'https://i.pinimg.com/736x/3f/97/0b/3f970bfb5295ad0e574f58fb1845f2e7.jpg',
      'https://i.pinimg.com/736x/5f/e0/ff/5fe0ff24caf27c4b13b4f557f5f6faef.jpg',
      'https://i.pinimg.com/1200x/a8/88/c4/a888c418916a5e44e914e869b615ed99.jpg',
      'https://i.pinimg.com/1200x/39/24/38/392438931b09d1fbd43a4e51b874bb12.jpg',
    ],
    title: 'LOHRI',
    description:
      'Lohri is the harvest festival of Punjab, celebrated with bonfires, dance, and traditional songs.',

    MoreDescription:
      'Lohri is a popular Punjabi festival celebrated with great enthusiasm, especially in the northern parts of India. It marks the end of the winter season and the harvesting of the rabi crops. Observed on January 13th every year, Lohri holds special significance for farmers as it symbolizes prosperity and gratitude for a good harvest. The festival is celebrated by lighting a bonfire in the evening, around which people gather, sing traditional folk songs, and perform bhangra and gidda dance. Offerings of sesame seeds (til), jaggery (gur), popcorn, and peanuts are thrown into the fire as a ritual of thanks to nature. Families also exchange sweets and greet each other with joy and warmth. Lohri is not only an agricultural celebration but also a cultural festival that strengthens bonds of togetherness, happiness, and prosperity in society.',
  },
  {
    id: 6,
    images: [
      'https://akm-img-a-in.tosshub.com/aajtak/images/story/202011/chatth_3_thumb-sixteen_nine.jpg?size=948:533',
      'https://feeds.abplive.com/onecms/images/uploaded-images/2022/10/30/d2baec3ab18417a80d0ab5cfb69658df1667136294203426_original.jpg?impolicy=abp_cdn&imwidth=720',
      'https://images.pexels.com/photos/29496259/pexels-photo-29496259.jpeg',
      'https://images.pexels.com/photos/16728310/pexels-photo-16728310.jpeg',
      'https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2019/03/28062205/FESTIVAL-SPECIFIC-PUJA-Chhath-Puja.jpg',
    ],
    title: 'CHHATH PUJA',
    description:
      'Chhath Puja is a festival of devotion where prayers and offerings are made to the rising and setting Sun for prosperity and well-being.',

    MoreDescription:
      'Chhath Puja is a major Hindu festival mainly celebrated in Bihar, Jharkhand, Uttar Pradesh, and Nepal, dedicated to the worship of the Sun God (Surya) and Chhathi Maiya. It is observed twice a year, mainly after Diwali in the month of Kartik, and also during Chaitra. The festival lasts for four days and involves strict rituals such as fasting, holy bathing, and offering arghya (water and prayers) to the rising and setting sun. Devotees stand in rivers or ponds to perform the rituals, praying for prosperity, good health, and the well-being of their families. Chhath Puja is unique as it involves no idol worship; instead, nature, water, and the Sun are honored as life-giving powers. The atmosphere is filled with devotion, traditional songs, and purity, making it one of the most spiritual and eco-friendly festivals in India.Chhath Puja is a major Hindu festival mainly celebrated in Bihar, Jharkhand, Uttar Pradesh, and Nepal, dedicated to the worship of the Sun God (Surya) and Chhathi Maiya. It is observed twice a year, mainly after Diwali in the month of Kartik, and also during Chaitra. The festival lasts for four days and involves strict rituals such as fasting, holy bathing, and offering arghya (water and prayers) to the rising and setting sun. Devotees stand in rivers or ponds to perform the rituals, praying for prosperity, good health, and the well-being of their families. Chhath Puja is unique as it involves no idol worship; instead, nature, water, and the Sun are honored as life-giving powers. The atmosphere is filled with devotion, traditional songs, and purity, making it one of the most spiritual and eco-friendly festivals in India.',
  },
   {
    id: 7,
    images: [
      'https://www.revv.co.in/blogs/wp-content/uploads/2020/09/Durga-Puja-celebration-in-Kullu-Himachal-Pradesh.jpg','https://www.icubelearning.com/project/FSWD886/website1/minjar%202.jpg',
      'https://i.pinimg.com/1200x/41/90/bb/4190bbd99c4664e023e8a38cf4f63d02.jpg',
    ],
    title: 'MINJAR FESTIVAL',
    description: 'Minjar Festival is a traditional harvest festival celebrated in Chamba, Himachal Pradesh with cultural processions.',
    MoreDescription: 'The Minjar Festival is celebrated annually in Chamba, Himachal Pradesh, during the month of Shravana (July–August). It marks the beginning of the paddy harvest season and the end of the monsoon. The festival is famous for its vibrant processions, cultural performances, traditional dances, and folk music. People carry minjars (decorated bundles of maize, silk, and grains) to the local temple as offerings to deities. The festival fosters community bonding, gratitude towards nature, and celebration of prosperity. It is a time of joy, showcasing Himachal’s rich cultural heritage and the harmonious relationship between humans and agriculture.'
  },
  
  {
    id: 8,
    images: [
      'https://assets.thehansindia.com/h-upload/2024/08/17/1472051-rakhi.webp',
      'https://images.unsplash.com/photo-1692902287746-ce3543c28b1e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://t3.ftcdn.net/jpg/13/80/26/96/240_F_1380269621_hLbQT74oo2oKGYx8kcoC6GM4rlZYf1Ts.jpg',
    ],
    title: 'Rakshabandhan',
    description:
      'Rakshabandhan is a festival celebrating the sacred bond of love, trust, and protection between brothers and sisters.',
    MoreDescription: `Rakshabandhan, often called Rakhi, is one of the most cherished festivals in India that highlights the deep-rooted values of love, care, and family bonding. Celebrated on the full moon day of the Hindu month of Shravan (July–August), the festival brings siblings together in a spirit of affection and togetherness. On this day, sisters tie a decorative thread, known as a rakhi, around the wrist of their brothers as a symbol of love and prayers for their well-being. In return, brothers pledge to protect their sisters throughout life and often present them with gifts as a token of appreciation.

Beyond its traditional essence, Rakshabandhan has also evolved into a celebration of relationships beyond blood ties, where cousins, friends, and even neighbors exchange rakhis to express trust and respect. The festival serves as a reminder of the importance of unity, care, and responsibility within families and communities. It not only strengthens sibling relationships but also fosters social harmony. The joy of Rakshabandhan lies in the simple yet powerful message it conveys: bonds of love and protection are eternal, and nurturing them keeps relationships strong and meaningful.`,
  },
  {
    id: 9,
    images: [
      'https://diaryofanewmom.com/wp-content/uploads/2023/01/Pongal-Day-activities-for-kids-jpg.webp',
      'https://www.easeindiatrip.com/blog/wp-content/uploads/2024/12/Pongal-Festival-01.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTInZS_h7GDoneOaBfDyYmTyUFHjlaxNdc36Q&s',
      'https://images.unsplash.com/photo-1732603891196-2b8cc24f39a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    title: 'Pongal',
    description:
      'Pongal is a traditional harvest festival of South India, especially Tamil Nadu, celebrating gratitude to the Sun God and nature for a bountiful harvest',
    MoreDescription: `'Pongal is one of the most important and vibrant festivals of South India, primarily celebrated in Tamil Nadu. It is a four-day harvest festival dedicated to the Sun God (Surya) and nature, expressing gratitude for a successful harvest. The word Pongal itself means “to boil over” and symbolizes abundance and prosperity. Traditionally, people prepare a special dish called Pongal, made of freshly harvested rice, milk, and jaggery, which is allowed to boil over as a sign of prosperity The festival is celebrated in four phases: Bhogi Pongal, marking the discarding of old things and welcoming new beginnings; Thai Pongal, the main day dedicated to Sun God; Mattu Pongal, honoring cattle like cows and bulls that play a vital role in agriculture; and Kaanum Pongal, a day of family gatherings, social visits, and festivities. Houses are decorated with colorful kolams (rangoli), sugarcane stalks, and flowers. People wear new clothes, exchange greetings, and enjoy traditional music and dances. Beyond Tamil Nadu, Pongal is also celebrated with variations in Andhra Pradesh, Karnataka, and Sri Lanka, as well as by Tamil communities across the world. Pongal is not just a festival; it is a joyful expression of gratitude, unity, and ho pe for prosperity.', `,
  },
  {
    id: 10,
    images: [
      'https://cdn.shopify.com/s/files/1/0525/5285/9819/files/57_1_1024x1024.jpg?v=1721476641',
      'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/08/24112155/Untitled-design-4-4-1600x900.jpg',
      'https://bhaktibhava.com/wp-content/uploads/2025/09/onam-festivals-of-kerala-pookkalam-sadhya-boat-race-traditions.jpg',
      'https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/english-betterindia/media/post_attachments/uploads/2025/09/onam-1757050299.jpg',
      'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/08/31/Pictures/giant-pookkalam_6b2a495e-cbb6-11e9-b728-1326979780a6.jpg',
    ],
    title: 'ONAM',
    description:
      'Onam is a harvest festival of Kerala celebrated with flowers, feasts, boat races, and cultural events.',

    MoreDescription:
      'Onam is a vibrant and traditional harvest festival celebrated mainly in the state of Kerala. It marks the homecoming of the legendary King Mahabali and symbolizes prosperity, abundance, and cultural unity. The festival usually lasts for ten days, with the main day known as Thiruvonam. People decorate their homes with intricate floral designs called Pookalam, prepare elaborate feasts known as Onasadya, and participate in cultural activities like traditional dances, music, and snake boat races (Vallam Kali). Onam is celebrated by people of all communities, emphasizing equality, harmony, and joy. The festival not only honors the agrarian roots of Kerala but also showcases its rich art, tradition, and culinary heritage. Families gather together, wear traditional attire, and share happiness, making Onam one of the most colorful and widely cherished festivals in India.',
  },
  {
    id: 11,
    images: [
      'https://media.dtnext.in/imported/2023-03/88072ca3-61b3-497f-9258-4290923fceaa/Untitled_design___2023_03_30T003857_515.jpg',
      'https://www.suryanfm.in/wp-content/uploads/2023/05/Madurai-Chithirai-Festival-6.jpg',
      'https://cdn.magzter.com/1574404609/1683152976/articles/vQDEU1Lzk1683160885319/CHITHIRAI-FEST-IN-MADURAI-TEMPLE-CAR-PROCESSION-HELD-AT-MEENAKSHI-TEMPLE.jpg',
      'https://thumbs.dreamstime.com/b/fierce-goddess-durga-deity-procession-chithirai-festival-madurai-tamilnadu-india-fierce-goddess-durga-deity-procession-399875921.jpg',
      'https://utsav.gov.in/public/uploads/event_cover_image/event_141/16502719521346665492.jpg',
    ],
    title: 'CHITHIRAI THIRUVIZHA',
    description:
      'Chithirai Thiruvizha is a grand Tamil festival celebrating the celestial wedding of Lord Sundareswarar and Goddess Meenakshi with processions and cultural events.',

    MoreDescription:
      'Chithirai Thiruvizha is a famous annual festival celebrated in Madurai, Tamil Nadu, during the Tamil month of Chithirai (April–May). The festival commemorates the celestial wedding of Lord Sundareswarar (a form of Lord Shiva) and Goddess Meenakshi, symbolizing divine love and union. It is one of the largest temple festivals in South India, attracting thousands of devotees and tourists from across the country and abroad. The celebration spans several days and includes grand processions, traditional music and dance performances, and ceremonial rituals. Elaborate chariots carrying the deities are pulled through the streets amidst chants and drumbeats, creating a vibrant and devotional atmosphere. Chithirai Thiruvizha not only highlights religious devotion but also showcases Tamil culture, community bonding, and festive joy. It is a time for families and devotees to come together, celebrate heritage, and seek blessings from the divine couple.'
  },
  {
    id: 12,
    images: [
      'https://www.radhakrishnatemple.net/blog/content/images/size/w1000/2025/03/happy-indian-family-in-ethnic-attire-performing-gu-2025-01-16-13-09-55-utc--2-.webp',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRy7qW3rkEr1c2143xvkAnJy3ruN-xFOACNq3JVFEScyWwNDuPb-2SA-RhQ9M2PgOGN6aIA_sGXxAVCH6D_0jStsx_nROtcQj3mqYxWXVl7SDIZIw9I4RL_R1iq0e7-K360Yu3Kro3lgk/s640/IMG_1503.JPG',
      'https://live.staticflickr.com/4612/27866517269_c9b8386dd1_b.jpg',
      'https://thumbs.dreamstime.com/b/fierce-goddess-durga-deity-procession-chithirai-festival-madurai-tamilnadu-india-fierce-goddess-durga-deity-procession-399875921.jpg',
      'https://www.utsavpedia.com/wp-content/uploads/2014/11/2.-httpwww.kemmannu.comindex.phpactiontopstorytype2269.jpg',
    ],
    title: 'GUDI PADWA',
    description:
      'Gudi Padwa is the Hindu New Year festival that marks new beginnings, prosperity, and the arrival of spring.',

    MoreDescription:
'Gudi Padwa is a traditional Hindu festival celebrated mainly in Maharashtra, Goa, and the Konkan region of India. It marks the beginning of the Hindu New Year as per the lunisolar calendar and usually falls in March or April. On this day, people hoist a Gudi, which is a bamboo stick adorned with a bright silk cloth, neem leaves, mango leaves, a garland of sugar crystals, and a silver or copper pot at the top. The Gudi is considered a symbol of victory, prosperity, and protection from evil. Families clean and decorate their homes, prepare special dishes like Puran Poli, Shrikhand, and Poori, and wear new clothes. Gudi Padwa also welcomes the spring season and new harvest, making it both a cultural and agricultural celebration. It represents joy, hope, and the start of new beginnings.'  },
  {
    id: 13,
    images: [
      'https://cdn.shopify.com/s/files/1/0754/8901/files/ganesha-chaturthi.jpg',
      'https://c.ndtvimg.com/2024-09/17mgh5d_ganesh-chaturthi-ani_625x300_07_September_24.jpeg',
      'https://static.toiimg.com/thumb/imgsize-1982981,msid-113434709,width-600,height-335,resizemode-75/113434709.jpg',
      'https://www.reuters.com/resizer/v2/HQBC6UXPSRP5BBNHQ2IDAFQ2FM.jpg?auth=713d62beb1f0f3ee1f1e55500db0f3a9d287b54ae7e03869a43b7e9c6c98ff51&width=1920&quality=80',
         ],
    title: 'GANESH CHATHURTHI',
    description:
      'Ganesh Chaturthi is a Hindu festival celebrating the birth of Lord Ganesha, the remover of obstacles and god of wisdom.',

    MoreDescription:
      'Ganesh Chaturthi is a widely celebrated Hindu festival dedicated to Lord Ganesha, the elephant-headed god of wisdom, prosperity, and remover of obstacles. It marks the birth of Ganesha and usually falls in the month of Bhadrapada (August–September). The festival lasts for 10 days, beginning with the installation of beautifully crafted clay idols of Lord Ganesha in homes and public pandals. Devotees offer prayers, sweets like modak (Ganesha’s favorite), fruits, and flowers, while performing rituals and singing devotional songs. The celebrations are vibrant and include cultural events, music, and dances in many communities. On the final day, the idols are taken in grand processions for immersion (Visarjan) in rivers or the sea, symbolizing Ganesha’s return to his celestial abode while taking away the devotees’ obstacles and misfortunes. Ganesh Chaturthi brings together families and communities in devotion, joy, and unity.'
  },
  
  {
    id: 14,
    images: [
      'https://www.utsav.gov.in/public/uploads/event_picture_image/event_2856/17295239101683901439.png',
      'https://www.utsav.gov.in/public/uploads/event_picture_image/event_2856/17295239241024909415.jpg',
      'https://images.hindustantimes.com/img/2021/01/12/550x309/pjimage_(99)_1610455331469_1610455346541.jpg',
      'https://blog.railrestro.com/wp-content/uploads/2019/03/assam.jpg',
    ],
    title: 'BIHU',
    description: 'Bihu is a traditional Assamese festival celebrating the Assamese New Year and harvest season.',
    MoreDescription: 'Bihu is the most important festival of Assam, celebrated thrice a year—Rongali or Bohag Bihu, Kongali or Kati Bihu, and Bhogali or Magh Bihu. The Rongali Bihu, marking the Assamese New Year in April, is the most vibrant, with traditional dances, music, feasts, and community gatherings. People wear colorful attire, perform the Bihu dance to celebrate fertility, prosperity, and the harvest. The festival also includes rituals to thank nature, cattle, and ancestors. It brings families and communities together, spreading joy, cultural pride, and a sense of belonging.'
  },
  {
    id: 15,
    images: [
      'https://www.kidzherald.com/wp-content/uploads/2024/09/Dussehra-Festival-A-Celebration-of-Good-Triumphing-Over-Evil.webp',
      'https://www.treebo.com/blog/wp-content/uploads/2018/10/Webp.net-compress-image-14.jpg',
      'https://www.eurokidsindia.com/blog/wp-content/uploads/2024/09/dussehra-870x437.jpg',
      'https://www.kidzherald.com/wp-content/uploads/2024/09/Dussehra-Festival.webp',
    ],
    title: 'DUSSEHRA',
    description: 'Dussehra is a Hindu festival celebrating the victory of Lord Rama over the demon king Ravana.',
    MoreDescription: 'Dussehra, also called Vijayadashami, is celebrated on the tenth day of the Hindu month of Ashwin. It symbolizes the triumph of good over evil, commemorating Lord Rama’s victory over Ravana as described in the epic Ramayana. The festival includes dramatic enactments of the Ramayana, known as Ramlila, and the burning of Ravana effigies. People wear new clothes, exchange greetings, and visit fairs and temples. Dussehra is also associated with the worship of Goddess Durga in some regions. It is a festival of cultural performances, devotion, and community bonding, reinforcing the values of righteousness, courage, and unity.'
  },
  {
    id: 16,
    images: [
        'https://www.adotrip.com/public/images/festivals/master_images/5c8a3cb42b974-Baisakhi_Sightseeing.jpg',
      'https://images.herzindagi.info/image/2024/Apr/baisakhi-celebration-ideas.jpg',
      'https://images.news18.com/ibnlive/uploads/2022/04/baisakhi.jpg',
      'https://img.jagranjosh.com/imported/images/E/GK/baisakhi-2020.jpg',
    ],
    title: 'BAISAKHI',
    description: 'Baisakhi is a Punjabi harvest festival celebrating the ripening of crops and the New Year.',
    MoreDescription: 'Baisakhi, celebrated in April, marks the harvest of rabi crops in Punjab and the beginning of the Sikh New Year. It is a time of joy, thanksgiving, and social gatherings. People perform the traditional Bhangra and Giddha dances, visit Gurudwaras, and participate in community feasts called Langars. Farmers offer gratitude for a bountiful harvest, and the festival is also associated with historical and religious significance in Sikhism. Baisakhi fosters community bonding, cultural pride, and marks new beginnings in both agriculture and personal life.'
  },
  {
    id: 17,
    images: [
      'https://www.goldentempleamritsar.org/high-resolution-images/famous-temples/golden-temple/Gurpurab.jpg',
      'https://www.goldentempleamritsar.org/high-resolution-images/famous-temples/golden-temple/sikh-guru-gurpurab-events,-anniversary.jpg',
      'https://img.staticmb.com/mbcontent/images/crop/uploads/2022/9/Guru_Purab_Golden_Temple_0_1200.jpg',
      'https://nimblefoundation.wordpress.com/wp-content/uploads/2014/11/image24.jpg',
    ],
    title: 'GURUPURAB',
    description: 'Gurpurab celebrates the birth anniversaries of the Sikh Gurus, especially Guru Nanak Dev Ji.',
    MoreDescription: 'Gurpurab is an important Sikh festival honoring the birth anniversaries of the Sikh Gurus, particularly Guru Nanak Dev Ji. Celebrated with devotion and grandeur, devotees sing hymns, participate in processions, and visit Gurudwaras where special prayers and readings from the Guru Granth Sahib take place. Langars, or community meals, are organized to feed people of all backgrounds. The festival emphasizes spiritual learning, equality, and service to humanity. Celebrations are marked with lights, prayers, and a sense of unity, reinforcing the teachings of the Gurus and spreading a message of peace and righteousness.'
  },
  {
    id: 18,
    images: [
        'https://files.prokerala.com/news/photos/imgs/1024/buddhist-monks-offer-prayers-on-buddha-purnima-at-680714.jpg',
       'https://www.namasteindiatrip.com/blog/wp-content/uploads/2024/01/Buddha-Purnima.jpg',    
         'https://sabassociation.org/wp-content/uploads/13217445_1070172123054184_7766941944442077221_o.jpg',
      'https://files.prokerala.com/news/photos/imgs/1024/buddhist-monks-during-buddha-purnima-celebrations-841166.jpg',
    ],
    title: 'BUDDHA PURNIMA',
    description: 'Buddha Purnima celebrates the birth, enlightenment, and death of Lord Buddha.',
    MoreDescription: 'Buddha Purnima, also called Vesak, is an important festival for Buddhists worldwide. It commemorates the birth, enlightenment (nirvana), and Mahaparinirvana of Lord Buddha. Celebrated on the full moon day of the month of Vaisakha, devotees visit Buddhist temples, offer prayers, and meditate. Cultural programs, lectures, and processions are organized to spread Buddha’s teachings of peace, compassion, and non-violence. People also engage in acts of charity and social service. The festival fosters spiritual reflection, mindfulness, and encourages ethical living and harmony with others.'
  },
  {
    id: 19,
    images: [
      'https://blogs.tripzygo.in/wp-content/uploads/2024/12/goa-1-1536x737.jpg',
      'https://blogs.tripzygo.in/wp-content/uploads/2024/12/7-2-1536x737.jpg',
      'https://blogs.tripzygo.in/wp-content/uploads/2024/12/goa-1536x737.jpg',
      'https://blogs.tripzygo.in/wp-content/uploads/2024/12/christmas-celebrations-in-india-1536x1024.jpg',
    ],
    title: 'CHRISTMAS',
    description: 'Christmas celebrates the birth of Jesus Christ and spreads joy, love, and generosity.',
    MoreDescription: 'Christmas is celebrated globally on December 25th to commemorate the birth of Jesus Christ. The festival is marked by decorating Christmas trees, exchanging gifts, singing carols, and organizing feasts. People attend church services and participate in community activities to promote love, compassion, and togetherness. The spirit of giving, kindness, and joy is emphasized, and homes and streets are adorned with lights and festive decorations. Christmas is a time for family gatherings, celebrations, and spreading goodwill to everyone, regardless of religion. The festival embodies hope, unity, and happiness, creating a warm and joyful atmosphere.'
  },
  {
    id: 20,
    images: [
      'https://images.indianexpress.com/2017/09/eid-hyderabad-e1528630263346.jpg',
      'https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/eid-al-fitr-gettyimages-1148084709?_a=BAVAZGID0',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1EGeo2IPvl359vDJ4Mnd8YJ4p04F6mOSRYg&s',
    ],
    title: 'EID-UL-FITR',
    description: 'Eid-ul-Fitr is a Muslim festival marking the end of Ramadan, celebrated with prayers and feasts.',
    MoreDescription: 'Eid-ul-Fitr is an important Islamic festival celebrated at the conclusion of Ramadan, the holy month of fasting. It is a time for prayers, charity (Zakat), family gatherings, and feasting. People wear new clothes, visit mosques for special prayers, and greet each other with “Eid Mubarak.” Traditional sweets and dishes are shared among families, friends, and neighbors. The festival emphasizes compassion, gratitude, community bonding, and social harmony. Eid-ul-Fitr fosters generosity, forgiveness, and a spirit of togetherness, bringing people of all ages together to celebrate with joy and devotion.'
  },
  {
    id: 21,
    images: [
      'https://www.ujjaindarshan.com/wp-content/uploads/2025/05/saavan-savar1-1.webp',
      'https://media.assettype.com/freepressjournal/2024-03/b9b5a61c-ab64-4483-ad35-36dacbe8f4b6/2pic08_Mahashivratri__Badewale_Mahadev_mandir.jpg',
      'https://c.ndtvimg.com/2018-10/fttbmfro_rahul-gandhi-temple-ujjain_625x300_29_October_18.jpg?downsize=545:307',
    ],
    title: 'MAHASHIVRATRI',
    description: 'Mahashivratri is a Hindu festival dedicated to Lord Shiva, celebrated with night-long prayers and fasting.',
    MoreDescription: 'Mahashivratri is a significant Hindu festival dedicated to Lord Shiva, observed with devotion and reverence. It usually falls in February or March. Devotees observe fasting, night-long vigils, and visit Shiva temples to offer prayers, milk, water, and Bilva leaves. Chanting of Shiva mantras and meditation are integral parts of the festival. The night is believed to be highly auspicious for spiritual growth and liberation. Across India, temples are beautifully decorated, and large gatherings occur for cultural events and rituals. Mahashivratri emphasizes devotion, self-discipline, and spiritual reflection, inspiring devotees to lead a life of righteousness and inner peace.',
  },
  

]

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
          MORE ↗
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
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full text-xl"
              >
                ▶
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
        Festivals of India Celebrate Unity, Diversity, and Joy 👇
      </h2>
      <h3 className="text-center text-neutral-400 text-base sm:text-lg mb-8">
        ✨ “A Journey Through Colors, Traditions, and Togetherness”
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

export default RevealCards;