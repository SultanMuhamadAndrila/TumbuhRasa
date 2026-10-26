// ============================================================================
// TUMBUHRASA — Media Interaktif Pengenalan 50 Jenis Buah untuk Anak (3–6 Tahun)
// ============================================================================

const FRUITS_DATA = [
  {
    id: 1,
    slug: 'apel',
    name: 'Apel',
    altName: '',
    category: 'populer',
    audioText: 'Apel!',
    bgPastel: '#FFEFF2',
    description: 'Apel bisa berwarna merah atau hijau. Rasanya bisa manis atau sedikit asam dan renyah saat digigit.',
    funFact: 'Apel memiliki biji kecil berwarna cokelat di bagian tengahnya.',
    art: { type: 'round-dimple', color1: '#E83F48', color2: '#FF6B72', leaf: '#37A862', stem: '#78492A', detail: 'shine' }
  },
  {
    id: 2,
    slug: 'pisang',
    name: 'Pisang',
    altName: '',
    category: 'populer',
    audioText: 'Pisang!',
    bgPastel: '#FFF9E2',
    description: 'Pisang memiliki kulit yang biasanya berwarna kuning saat matang. Daging buahnya lembut dan manis.',
    funFact: 'Pisang memiliki kulit yang dapat dikupas dengan mudah sebelum dimakan.',
    art: { type: 'crescent', color1: '#FFD43B', color2: '#FFF078', leaf: '#8AC926', stem: '#8D6346', detail: 'peel' }
  },
  {
    id: 3,
    slug: 'jeruk',
    name: 'Jeruk',
    altName: '',
    category: 'populer',
    audioText: 'Jeruk!',
    bgPastel: '#FFF0E0',
    description: 'Jeruk berbentuk bulat dan berwarna oranye cerah. Di dalamnya ada bulir-bulir berair yang manis atau segar.',
    funFact: 'Kulit jeruk mengeluarkan aroma harum yang segar saat dikupas.',
    art: { type: 'citrus', color1: '#FF8C24', color2: '#FFB057', leaf: '#2EAD6B', stem: '#6E472B', detail: 'pores' }
  },
  {
    id: 4,
    slug: 'mangga',
    name: 'Mangga',
    altName: '',
    category: 'populer',
    audioText: 'Mangga!',
    bgPastel: '#FFF7DF',
    description: 'Mangga memiliki daging buah berwarna kuning atau oranye yang lembut. Rasanya bisa manis atau sedikit asam.',
    funFact: 'Di tengah buah mangga terdapat satu biji pipih yang cukup besar.',
    art: { type: 'mango', color1: '#FFAA2B', color2: '#68B848', leaf: '#2A9153', stem: '#6E472B', detail: 'blush' }
  },
  {
    id: 5,
    slug: 'anggur',
    name: 'Anggur',
    altName: 'Anggur Ungu',
    category: 'populer',
    audioText: 'Anggur!',
    bgPastel: '#F3EEFA',
    description: 'Anggur adalah buah bulat kecil yang tumbuh bergerombol pada satu tangkai. Rasanya manis dan segar berair.',
    funFact: 'Satu tangkai anggur bisa berisi banyak butir buah anggur sekaligus.',
    art: { type: 'grapes', color1: '#7E42B3', color2: '#A06CD5', leaf: '#39A96B', stem: '#78492A', detail: 'cluster' }
  },
  {
    id: 6,
    slug: 'semangka',
    name: 'Semangka',
    altName: '',
    category: 'populer',
    audioText: 'Semangka!',
    bgPastel: '#FFEFF2',
    description: 'Semangka memiliki daging buah yang banyak mengandung air. Bagian dalamnya bisa berwarna merah atau kuning.',
    funFact: 'Kulit luar semangka tebal dan berwarna hijau bergaris-garis.',
    art: { type: 'watermelon-slice', color1: '#F04155', color2: '#2B9E5A', leaf: '#1E703F', stem: '#333333', detail: 'black-seeds' }
  },
  {
    id: 7,
    slug: 'nanas',
    name: 'Nanas',
    altName: '',
    category: 'populer',
    audioText: 'Nanas!',
    bgPastel: '#FFF9E2',
    description: 'Nanas memiliki kulit bersisik dan mahkota daun di bagian atasnya. Daging buahnya berwarna kuning dengan rasa manis dan asam segar.',
    funFact: 'Kulit nanas harus dikupas terlebih dahulu karena permukaannya kasar.',
    art: { type: 'pineapple', color1: '#F7B825', color2: '#E09112', leaf: '#2B9E5A', stem: '#1E7A43', detail: 'crisscross' }
  },
  {
    id: 8,
    slug: 'melon',
    name: 'Melon',
    altName: '',
    category: 'populer',
    audioText: 'Melon!',
    bgPastel: '#EDF8F1',
    description: 'Melon berbentuk bulat dengan kulit berjaring halus. Daging buahnya lembut, berair, dan rasanya manis segar.',
    funFact: 'Biji melon berkumpul rapi di bagian tengah buahnya.',
    art: { type: 'melon', color1: '#8CD17D', color2: '#BCEB98', leaf: '#3B945E', stem: '#7A5938', detail: 'net' }
  },
  {
    id: 9,
    slug: 'stroberi',
    name: 'Stroberi',
    altName: '',
    category: 'populer',
    audioText: 'Stroberi!',
    bgPastel: '#FFEFF2',
    description: 'Stroberi berukuran kecil, berwarna merah cerah, dan memiliki topi daun hijau di atasnya. Rasanya manis bercampur asam segar.',
    funFact: 'Bintik-bintik kecil di permukaan luar stroberi sebenarnya adalah bijinya.',
    art: { type: 'strawberry', color1: '#F23847', color2: '#FF6B78', leaf: '#2EAD6B', stem: '#FFE066', detail: 'outer-seeds' }
  },
  {
    id: 10,
    slug: 'kiwi',
    name: 'Kiwi',
    altName: '',
    category: 'populer',
    audioText: 'Kiwi!',
    bgPastel: '#EDF8F1',
    description: 'Kiwi memiliki kulit cokelat berbulu halus dan daging buah berwarna hijau cerah. Rasanya segar, manis, dan sedikit asam.',
    funFact: 'Jika dibelah melintang, biji-biji kecil kiwi tampak berbaris melingkar di bagian tengah.',
    art: { type: 'cut-round', color1: '#7DC947', color2: '#9E6B43', leaf: '#E9F7CA', stem: '#2D3A24', detail: 'kiwi-rings' }
  },
  {
    id: 11,
    slug: 'alpukat',
    name: 'Alpukat',
    altName: '',
    category: 'populer',
    audioText: 'Alpukat!',
    bgPastel: '#EDF8F1',
    description: 'Alpukat memiliki kulit hijau dan daging buah yang sangat lembut berwarna hijau kekuningan. Di tengahnya ada satu biji bulat besar.',
    funFact: 'Tekstur daging buah alpukat yang matang terasa lembut seperti mentega.',
    art: { type: 'avocado', color1: '#2D8A4E', color2: '#C5E87E', leaf: '#8C5230', stem: '#61371E', detail: 'pit' }
  },
  {
    id: 12,
    slug: 'blueberry',
    name: 'Blueberry',
    altName: '',
    category: 'populer',
    audioText: 'Blueberry!',
    bgPastel: '#EEF3FC',
    description: 'Blueberry adalah buah bulat mungil berwarna biru keunguan. Rasanya manis dan sedikit asam segar.',
    funFact: 'Di bagian ujung buah blueberry terdapat lekukan kecil berbentuk seperti bintang.',
    art: { type: 'berry-pair', color1: '#3E5BB8', color2: '#6282E3', leaf: '#2EAD6B', stem: '#283C82', detail: 'crown-tip' }
  },
  {
    id: 13,
    slug: 'raspberry',
    name: 'Raspberry',
    altName: 'Frambos',
    category: 'lainnya',
    audioText: 'Raspberry!',
    bgPastel: '#FFEFF2',
    description: 'Raspberry adalah buah mungil berwarna merah muda kemerahan yang tersusun dari bulir-bulir lembut. Rasanya manis dan asam segar.',
    funFact: 'Ketika dipetik dari tangkainya, bagian tengah buah raspberry terlihat berlubang seperti topi jari.',
    art: { type: 'bumpy-berry', color1: '#E63963', color2: '#FF6B8E', leaf: '#2EAD6B', stem: '#6E472B', detail: 'bumps' }
  },
  {
    id: 14,
    slug: 'blackberry',
    name: 'Blackberry',
    altName: '',
    category: 'lainnya',
    audioText: 'Blackberry!',
    bgPastel: '#F3EEFA',
    description: 'Blackberry berbentuk mirip raspberry tetapi warnanya ungu tua kehitaman saat matang. Dagingnya lembut dan berair.',
    funFact: 'Sebelum matang menjadi hitam keunguan, buah blackberry awalnya berwarna hijau lalu merah.',
    art: { type: 'bumpy-berry', color1: '#372549', color2: '#5B4275', leaf: '#2EAD6B', stem: '#4B3621', detail: 'bumps' }
  },
  {
    id: 15,
    slug: 'ceri',
    name: 'Ceri',
    altName: '',
    category: 'populer',
    audioText: 'Ceri!',
    bgPastel: '#FFEFF2',
    description: 'Ceri adalah buah bulat kecil berwarna merah mengilap dengan tangkai yang panjang. Rasanya manis atau sedikit asam.',
    funFact: 'Buah ceri sering tumbuh berpasangan dua buah pada satu cabang tangkai.',
    art: { type: 'cherry-pair', color1: '#D92638', color2: '#FF5465', leaf: '#2EAD6B', stem: '#4D8B31', detail: 'twins' }
  },
  {
    id: 16,
    slug: 'delima',
    name: 'Delima',
    altName: '',
    category: 'lainnya',
    audioText: 'Delima!',
    bgPastel: '#FFEFF2',
    description: 'Delima memiliki kulit merah yang kuat dengan bentuk mahkota kecil di ujungnya. Di dalamnya penuh butiran merah berair.',
    funFact: 'Butiran di dalam buah delima tampak berkilau seperti permata merah kecil.',
    art: { type: 'pomegranate', color1: '#D6384C', color2: '#FF7082', leaf: '#37A862', stem: '#A32234', detail: 'gems' }
  },
  {
    id: 17,
    slug: 'manggis',
    name: 'Manggis',
    altName: '',
    category: 'populer',
    audioText: 'Manggis!',
    bgPastel: '#F3EEFA',
    description: 'Manggis memiliki kulit tebal berwarna ungu tua dan kelopak hijau di atasnya. Daging buah di dalamnya berwarna putih bersih dan manis.',
    funFact: 'Jumlah ruas daging putih di dalam manggis sama dengan jumlah kelopak bunga kecil di bagian bawah kulitnya.',
    art: { type: 'mangosteen', color1: '#5C2751', color2: '#FFFFFF', leaf: '#37A862', stem: '#6E472B', detail: 'white-segments' }
  },
  {
    id: 18,
    slug: 'leci',
    name: 'Leci',
    altName: '',
    category: 'lainnya',
    audioText: 'Leci!',
    bgPastel: '#FFEFF2',
    description: 'Leci berukuran kecil dengan kulit merah muda bertekstur bintil halus. Daging buahnya berwarna putih bening, berair, dan harum.',
    funFact: 'Setelah kulit merahnya dibuka, daging buah leci terlihat putih berkilau.',
    art: { type: 'lychee', color1: '#E84A5F', color2: '#FFFFFF', leaf: '#2EAD6B', stem: '#78492A', detail: 'peeled-white' }
  },
  {
    id: 19,
    slug: 'rambutan',
    name: 'Rambutan',
    altName: '',
    category: 'populer',
    audioText: 'Rambutan!',
    bgPastel: '#FFEFF2',
    description: 'Rambutan memiliki kulit berwarna merah atau kuning yang dipenuhi rambut-rambut halus. Daging buah di dalamnya putih dan manis.',
    funFact: 'Nama "rambutan" berasal dari bentuk kulitnya yang memiliki serabut seperti rambut.',
    art: { type: 'rambutan', color1: '#E63946', color2: '#9EF01A', leaf: '#2EAD6B', stem: '#6E472B', detail: 'hairs' }
  },
  {
    id: 20,
    slug: 'durian',
    name: 'Durian',
    altName: '',
    category: 'populer',
    audioText: 'Durian!',
    bgPastel: '#FFF9E2',
    description: 'Durian adalah buah berukuran besar dengan kulit keras berduri dan aroma yang kuat. Daging buahnya berwarna kuning dan lembut.',
    funFact: 'Walaupun kulit luarnya berduri tajam, daging buah di dalam durian sangat empuk.',
    art: { type: 'durian', color1: '#7E9938', color2: '#FFE156', leaf: '#5C7324', stem: '#6E472B', detail: 'thorns' }
  },
  {
    id: 21,
    slug: 'salak',
    name: 'Salak',
    altName: '',
    category: 'populer',
    audioText: 'Salak!',
    bgPastel: '#FFF0E0',
    description: 'Salak berbentuk meruncing di atas dengan kulit cokelat yang tampak bersisik. Daging buahnya berwarna putih kekuningan dan renyah.',
    funFact: 'Karena bentuk kulitnya yang bersisik rapi, salak sering disebut "snake fruit" dalam bahasa Inggris.',
    art: { type: 'salak', color1: '#8D4925', color2: '#FFF3C4', leaf: '#5C3018', stem: '#42210E', detail: 'scales' }
  },
  {
    id: 22,
    slug: 'duku',
    name: 'Duku',
    altName: '',
    category: 'populer',
    audioText: 'Duku!',
    bgPastel: '#FFF9E2',
    description: 'Duku adalah buah bulat kecil berkulit kuning kecokelatan. Daging buah di dalamnya bening beruas-ruas dan rasanya manis segar.',
    funFact: 'Buah duku tumbuh bergerombol rapat pada dahan pohonnya.',
    art: { type: 'cluster-tan', color1: '#D9B26F', color2: '#F2D69B', leaf: '#37A862', stem: '#78492A', detail: 'duku' }
  },
  {
    id: 23,
    slug: 'langsat',
    name: 'Langsat',
    altName: '',
    category: 'lainnya',
    audioText: 'Langsat!',
    bgPastel: '#FFF9E2',
    description: 'Langsat tampak mirip dengan buah duku, tetapi kulitnya lebih tipis dan berbentuk sedikit lonjong. Rasanya manis bercampur asam segar.',
    funFact: 'Kulit buah langsat memiliki sedikit getah putih saat baru dipetik.',
    art: { type: 'cluster-tan', color1: '#E5C678', color2: '#FFF0B5', leaf: '#2EAD6B', stem: '#6E472B', detail: 'langsat' }
  },
  {
    id: 24,
    slug: 'sirsak',
    name: 'Sirsak',
    altName: '',
    category: 'lainnya',
    audioText: 'Sirsak!',
    bgPastel: '#EDF8F1',
    description: 'Sirsak memiliki kulit hijau dengan tonjolan-tonjolan lunak yang tidak tajam. Daging buahnya berwarna putih lembut dengan rasa manis-asam segar.',
    funFact: 'Di dalam daging putih sirsak terdapat biji-biji hitam yang mengilap.',
    art: { type: 'soursop', color1: '#4D9E50', color2: '#FFFFFF', leaf: '#2E7D32', stem: '#6E472B', detail: 'soft-spines' }
  },
  {
    id: 25,
    slug: 'pepaya',
    name: 'Pepaya',
    altName: '',
    category: 'populer',
    audioText: 'Pepaya!',
    bgPastel: '#FFF0E0',
    description: 'Pepaya berbentuk lonjong besar dengan daging buah berwarna oranye kemerahan yang sangat empuk dan manis saat matang.',
    funFact: 'Di bagian tengah buah pepaya terdapat banyak biji bulat kecil berwarna hitam.',
    art: { type: 'papaya', color1: '#FF7833', color2: '#62B547', leaf: '#2EAD6B', stem: '#3B2F2F', detail: 'center-seeds' }
  },
  {
    id: 26,
    slug: 'jambu-biji',
    name: 'Jambu biji',
    altName: 'Jambu Klutuk',
    category: 'populer',
    audioText: 'Jambu biji!',
    bgPastel: '#FFEFF2',
    description: 'Jambu biji memiliki kulit berwarna hijau atau kekuningan. Bagian dalamnya sering berwarna merah muda cerah atau putih dengan biji kecil.',
    funFact: 'Jambu biji mengeluarkan aroma harum yang khas saat sudah matang.',
    art: { type: 'cut-round', color1: '#FF758F', color2: '#7BC950', leaf: '#2EAD6B', stem: '#FFE3E8', detail: 'guava-seeds' }
  },
  {
    id: 27,
    slug: 'jambu-air',
    name: 'Jambu air',
    altName: '',
    category: 'populer',
    audioText: 'Jambu air!',
    bgPastel: '#FFEFF2',
    description: 'Jambu air berbentuk unik seperti lonceng kecil dengan kulit merah muda mengilap. Rasanya renyah dan banyak mengandung air segar.',
    funFact: 'Jambu air dapat langsung dimakan bersama kulitnya setelah dicuci bersih.',
    art: { type: 'bell-fruit', color1: '#F24968', color2: '#FF8FA3', leaf: '#2EAD6B', stem: '#6E472B', detail: 'bell' }
  },
  {
    id: 28,
    slug: 'buah-naga',
    name: 'Buah naga',
    altName: 'Pitaya',
    category: 'populer',
    audioText: 'Buah naga!',
    bgPastel: '#FFEFF2',
    description: 'Buah naga memiliki kulit merah keunguan dengan sirip-sirip lembut. Daging buahnya bisa berwarna putih atau merah keunguan dengan bintik biji hitam kecil.',
    funFact: 'Bentuk kulit luarnya yang bersirip mirip sisik naga dalam cerita dongeng.',
    art: { type: 'dragonfruit', color1: '#E62E6B', color2: '#FFFFFF', leaf: '#7BC950', stem: '#222222', detail: 'speckles' }
  },
  {
    id: 29,
    slug: 'nangka',
    name: 'Nangka',
    altName: '',
    category: 'populer',
    audioText: 'Nangka!',
    bgPastel: '#FFF9E2',
    description: 'Nangka adalah buah berukuran besar berkulit hijau kekuningan. Di dalamnya terdapat potongan buah berwarna kuning cerah yang harum dan manis.',
    funFact: 'Buah nangka adalah salah satu buah pohon terbesar di dunia.',
    art: { type: 'jackfruit', color1: '#9BB839', color2: '#FFD22B', leaf: '#4E8C2B', stem: '#6E472B', detail: 'pods' }
  },
  {
    id: 30,
    slug: 'kelengkeng',
    name: 'Kelengkeng',
    altName: 'Lengkeng',
    category: 'populer',
    audioText: 'Kelengkeng!',
    bgPastel: '#FFF0E0',
    description: 'Kelengkeng adalah buah bulat kecil berkulit cokelat muda yang halus. Daging buahnya putih bening, berair, dan rasanya sangat manis.',
    funFact: 'Di dalam daging putih kelengkeng terdapat satu biji bulat berwarna hitam mengilap.',
    art: { type: 'cluster-tan', color1: '#C49158', color2: '#FFFFFF', leaf: '#2EAD6B', stem: '#6E472B', detail: 'longan-eye' }
  },
  {
    id: 31,
    slug: 'markisa',
    name: 'Markisa',
    altName: 'Passion Fruit',
    category: 'lainnya',
    audioText: 'Markisa!',
    bgPastel: '#F3EEFA',
    description: 'Markisa berbentuk bulat dengan kulit ungu atau kuning. Di dalamnya berisi bulir-bulir berair berwarna oranye dengan rasa asam-manis yang harum.',
    funFact: 'Bulir buah markisa sering dibuat menjadi minuman segar.',
    art: { type: 'cut-round', color1: '#FFA826', color2: '#7D387D', leaf: '#2EAD6B', stem: '#3B2818', detail: 'passion-seeds' }
  },
  {
    id: 32,
    slug: 'kesemek',
    name: 'Kesemek',
    altName: 'Persimmon',
    category: 'lainnya',
    audioText: 'Kesemek!',
    bgPastel: '#FFF0E0',
    description: 'Kesemek berbentuk bulat agak pipih mirip tomat tetapi berwarna oranye terang. Saat matang, daging buahnya manis dan lembut.',
    funFact: 'Kesemek memiliki empat helai kelopak daun tebal di bagian atas buahnya.',
    art: { type: 'persimmon', color1: '#FF7A29', color2: '#FFA35C', leaf: '#4E8C2B', stem: '#6E472B', detail: 'calyx' }
  },
  {
    id: 33,
    slug: 'plum',
    name: 'Plum',
    altName: '',
    category: 'lainnya',
    audioText: 'Plum!',
    bgPastel: '#F3EEFA',
    description: 'Plum berbentuk bulat dengan kulit halus berwarna ungu tua atau merah gelap. Daging buahnya berwarna kuning kemerahan dan berair.',
    funFact: 'Permukaan kulit buah plum memiliki lekukan garis tipis dari atas ke bawah.',
    art: { type: 'round-dimple', color1: '#722F7F', color2: '#9D52AB', leaf: '#2EAD6B', stem: '#6E472B', detail: 'shine' }
  },
  {
    id: 34,
    slug: 'aprikot',
    name: 'Aprikot',
    altName: '',
    category: 'lainnya',
    audioText: 'Aprikot!',
    bgPastel: '#FFF0E0',
    description: 'Aprikot adalah buah bulat berukuran kecil dengan kulit berwarna kuning-oranye yang lembut. Rasanya manis dan sedikit asam.',
    funFact: 'Bentuk aprikot mirip dengan buah persik, tetapi ukurannya lebih mungil.',
    art: { type: 'round-dimple', color1: '#FF9E42', color2: '#FFC078', leaf: '#2EAD6B', stem: '#6E472B', detail: 'cleft' }
  },
  {
    id: 35,
    slug: 'persik',
    name: 'Persik',
    altName: 'Peach',
    category: 'lainnya',
    audioText: 'Persik!',
    bgPastel: '#FFEFF2',
    description: 'Persik memiliki kulit lembut berbulu halus dengan warna merah muda dan kuning-oranye. Daging buahnya harum, berair, dan manis.',
    funFact: 'Kulit buah persik terasa halus seperti kain beludru saat disentuh.',
    art: { type: 'peach', color1: '#FF7582', color2: '#FFB870', leaf: '#2EAD6B', stem: '#6E472B', detail: 'blush' }
  },
  {
    id: 36,
    slug: 'pir',
    name: 'Pir',
    altName: '',
    category: 'populer',
    audioText: 'Pir!',
    bgPastel: '#FFF9E2',
    description: 'Pir memiliki bentuk ramping di bagian atas dan membulat di bagian bawah. Daging buahnya banyak mengandung air dan terasa renyah.',
    funFact: 'Kulit buah pir ada yang berwarna kuning cerah dan ada juga yang berwarna hijau.',
    art: { type: 'pear', color1: '#D9DC48', color2: '#F2F589', leaf: '#2EAD6B', stem: '#6E472B', detail: 'dots' }
  },
  {
    id: 37,
    slug: 'anggur-hijau',
    name: 'Anggur hijau',
    altName: '',
    category: 'lainnya',
    audioText: 'Anggur hijau!',
    bgPastel: '#EDF8F1',
    description: 'Anggur hijau memiliki butiran buah berwarna hijau kekuningan yang tampak bening saat terkena cahaya. Rasanya renyah, manis, dan sedikit asam segar.',
    funFact: 'Berbeda dengan anggur ungu, kulit anggur hijau tetap berwarna hijau terang meskipun sudah matang.',
    art: { type: 'grapes', color1: '#8CD147', color2: '#B5EB78', leaf: '#2EAD6B', stem: '#78492A', detail: 'cluster' }
  },
  {
    id: 38,
    slug: 'anggur-merah',
    name: 'Anggur merah',
    altName: '',
    category: 'lainnya',
    audioText: 'Anggur merah!',
    bgPastel: '#FFEFF2',
    description: 'Anggur merah memiliki kulit berwarna merah keunguan dengan ukuran butir yang bulat lonjong. Daging buahnya manis dan berair.',
    funFact: 'Anggur merah memiliki warna kulit yang lebih terang dibandingkan anggur ungu gelap.',
    art: { type: 'grapes', color1: '#C9385B', color2: '#E86888', leaf: '#2EAD6B', stem: '#78492A', detail: 'cluster' }
  },
  {
    id: 39,
    slug: 'buah-tin',
    name: 'Buah tin',
    altName: 'Buah Ara / Fig',
    category: 'lainnya',
    audioText: 'Buah tin!',
    bgPastel: '#F3EEFA',
    description: 'Buah tin berbentuk seperti tetesan air mata dengan kulit ungu atau hijau. Bagian dalamnya berwarna merah muda lembut dengan biji-biji halus.',
    funFact: 'Daging bagian dalam buah tin memiliki tekstur lembut dan rasa yang manis.',
    art: { type: 'fig', color1: '#6D3B7E', color2: '#F06277', leaf: '#37A862', stem: '#593366', detail: 'fig-inside' }
  },
  {
    id: 40,
    slug: 'kurma',
    name: 'Kurma',
    altName: '',
    category: 'populer',
    audioText: 'Kurma!',
    bgPastel: '#FFF0E0',
    description: 'Kurma adalah buah lonjong kecil berwarna cokelat dengan tekstur kenyal dan lembut. Rasanya sangat manis.',
    funFact: 'Pohon kurma tumbuh subur di daerah yang hangat dan kering.',
    art: { type: 'dates', color1: '#8F4724', color2: '#B5663C', leaf: '#37A862', stem: '#612D13', detail: 'wrinkles' }
  },
  {
    id: 41,
    slug: 'lemon',
    name: 'Lemon',
    altName: '',
    category: 'populer',
    audioText: 'Lemon!',
    bgPastel: '#FFF9E2',
    description: 'Lemon berbentuk lonjong dengan kulit berwarna kuning terang dan kedua ujung yang agak menonjol. Air buahnya memiliki rasa yang asam segar.',
    funFact: 'Karena rasanya yang asam, perasan air lemon sering dicampur dengan air dan madu menjadi minuman segar.',
    art: { type: 'lemon', color1: '#FFDA29', color2: '#FFF078', leaf: '#2EAD6B', stem: '#6E472B', detail: 'pores' }
  },
  {
    id: 42,
    slug: 'jeruk-nipis',
    name: 'Jeruk nipis',
    altName: 'Lime',
    category: 'lainnya',
    audioText: 'Jeruk nipis!',
    bgPastel: '#EDF8F1',
    description: 'Jeruk nipis atau lime berukuran bulat kecil dengan kulit berwarna hijau segar. Air perasannya harum dan terasa asam.',
    funFact: 'Jeruk nipis memiliki ukuran yang lebih kecil dibandingkan buah lemon kuning.',
    art: { type: 'citrus', color1: '#4DB848', color2: '#7ED968', leaf: '#218739', stem: '#5C4028', detail: 'lime-slice' }
  },
  {
    id: 43,
    slug: 'jeruk-bali',
    name: 'Jeruk Bali',
    altName: 'Pomelo',
    category: 'lainnya',
    audioText: 'Jeruk Bali!',
    bgPastel: '#EDF8F1',
    description: 'Jeruk Bali atau pomelo adalah jenis jeruk berukuran paling besar dengan kulit hijau yang tebal. Bulir daging buah di dalamnya berwarna merah muda atau putih.',
    funFact: 'Bagian dalam kulit jeruk Bali memiliki lapisan putih empuk seperti gabus.',
    art: { type: 'pomelo', color1: '#7DC95E', color2: '#FF8598', leaf: '#2EAD6B', stem: '#6E472B', detail: 'thick-rind' }
  },
  {
    id: 44,
    slug: 'kumquat',
    name: 'Kumquat',
    altName: 'Jeruk Nagami',
    category: 'lainnya',
    audioText: 'Kumquat!',
    bgPastel: '#FFF0E0',
    description: 'Kumquat adalah buah jeruk berukuran sangat kecil dan berbentuk lonjong berwarna oranye. Uniknya, kulit kumquat berasa manis sedangkan dalamnya asam segar.',
    funFact: 'Kumquat adalah jeruk mungil yang dapat dimakan langsung bersama kulitnya setelah dicuci.',
    art: { type: 'oval-pair', color1: '#FF851B', color2: '#FFAD5C', leaf: '#2EAD6B', stem: '#6E472B', detail: 'mini-citrus' }
  },
  {
    id: 45,
    slug: 'loquat',
    name: 'Loquat',
    altName: 'Biwa',
    category: 'lainnya',
    audioText: 'Loquat!',
    bgPastel: '#FFF0E0',
    description: 'Loquat atau biwa adalah buah kecil berbentuk bulat-lonjong berwarna kuning-oranye lembut. Daging buahnya berair dengan rasa manis dan sedikit asam.',
    funFact: 'Buah loquat tumbuh bergerombol di ujung ranting dengan daun pohon yang besar.',
    art: { type: 'oval-pair', color1: '#F7A73E', color2: '#FFD080', leaf: '#2EAD6B', stem: '#78492A', detail: 'crown-tip' }
  },
  {
    id: 46,
    slug: 'matoa',
    name: 'Matoa',
    altName: '',
    category: 'lainnya',
    audioText: 'Matoa!',
    bgPastel: '#EDF8F1',
    description: 'Matoa adalah buah asli Indonesia dari Papua yang berkulit hijau, merah, atau kehitaman. Daging buahnya bening kenyal dan rasanya manis harum.',
    funFact: 'Rasa buah matoa sering disebut mirip perpaduan rasa kelengkeng, rambutan, dan durian.',
    art: { type: 'matoa', color1: '#689F38', color2: '#8E3A49', leaf: '#2EAD6B', stem: '#6E472B', detail: 'translucent' }
  },
  {
    id: 47,
    slug: 'melon-madu',
    name: 'Melon madu',
    altName: 'Honeydew',
    category: 'lainnya',
    audioText: 'Melon madu!',
    bgPastel: '#EDF8F1',
    description: 'Melon madu memiliki kulit luar yang mulus berwarna putih kehijauan tanpa garis jaring kasar. Daging buahnya berwarna hijau muda, lembut, dan manis.',
    funFact: 'Berbeda dengan melon berjaring, kulit luar melon madu terasa halus saat diraba.',
    art: { type: 'melon', color1: '#D4F2B6', color2: '#A3E67E', leaf: '#2EAD6B', stem: '#7A5938', detail: 'smooth' }
  },
  {
    id: 48,
    slug: 'blewah',
    name: 'Blewah',
    altName: '',
    category: 'lainnya',
    audioText: 'Blewah!',
    bgPastel: '#FFF0E0',
    description: 'Blewah memiliki bentuk bulat bergelombang seperti labu kecil dengan daging buah berwarna oranye yang harum dan lembut.',
    funFact: 'Daging buah blewah sering diserut memanjang untuk campuran minuman buah yang segar.',
    art: { type: 'ribbed-melon', color1: '#F59B42', color2: '#9BC462', leaf: '#37A862', stem: '#6E472B', detail: 'ribs' }
  },
  {
    id: 49,
    slug: 'kelapa',
    name: 'Kelapa',
    altName: 'Kelapa Muda',
    category: 'populer',
    audioText: 'Kelapa!',
    bgPastel: '#EDF8F1',
    description: 'Kelapa memiliki kulit luar hijau atau cokelat yang keras. Di dalamnya terdapat air kelapa yang segar dan daging buah berwarna putih bersih.',
    funFact: 'Jika buah kelapa digoyangkan, kita bisa mendengar suara air di dalamnya.',
    art: { type: 'coconut', color1: '#52AD4E', color2: '#FFFFFF', leaf: '#2E7D32', stem: '#8D5B3C', detail: 'coconut-open' }
  },
  {
    id: 50,
    slug: 'sawo',
    name: 'Sawo',
    altName: '',
    category: 'populer',
    audioText: 'Sawo!',
    bgPastel: '#FFF0E0',
    description: 'Sawo berbentuk bulat lonjong dengan kulit tipis berwarna cokelat. Daging buahnya juga berwarna cokelat, lembut, dan rasanya sangat manis.',
    funFact: 'Di dalam daging buah sawo terdapat biji pipih yang berwarna hitam mengilap.',
    art: { type: 'sapodilla', color1: '#9C5D34', color2: '#C77D48', leaf: '#2EAD6B', stem: '#5C3317', detail: 'shiny-seed' }
  }
];

// ============================================================================
// CUSTOM CHILD-FRIENDLY SVG ILLUSTRATION ENGINE (UNIQUE FOR ALL 50 FRUITS)
// ============================================================================
function renderFruitSVG(fruit, size = 110) {
  const { color1, color2, leaf, stem, type, detail } = fruit.art;
  const uid = `f-${fruit.id}-${size}`;

  let innerShapes = '';

  switch (type) {
    case 'round-dimple':
      innerShapes = `
        <path d="M58 24 C60 14, 65 10, 70 10" stroke="${stem}" stroke-width="5" stroke-linecap="round" fill="none"/>
        <path d="M62 20 C76 10, 92 16, 84 28 C76 34, 66 28, 62 20 Z" fill="${leaf}"/>
        <path d="M60 28 C38 24, 20 42, 22 68 C24 94, 42 106, 56 104 C59 103, 61 103, 64 104 C78 106, 96 94, 98 68 C100 42, 82 24, 60 28 Z" fill="url(#grad-${uid})"/>
        ${detail === 'cleft' ? `<path d="M62 30 C52 52, 52 80, 60 103" stroke="${color1}" stroke-width="3" fill="none" opacity="0.45"/>` : ''}
        <ellipse cx="40" cy="50" rx="7" ry="13" transform="rotate(-20 40 50)" fill="#FFFFFF" opacity="0.45"/>
        <circle cx="48" cy="64" r="3.5" fill="#25382E"/>
        <circle cx="72" cy="64" r="3.5" fill="#25382E"/>
        <path d="M54 73 Q60 79 66 73" stroke="#25382E" stroke-width="3" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'crescent':
      innerShapes = `
        <path d="M32 24 C22 58, 44 96, 88 98 C96 98, 102 90, 96 84 C64 78, 48 54, 48 24 C48 16, 35 16, 32 24 Z" fill="url(#grad-${uid})" stroke="#E6B800" stroke-width="2"/>
        <path d="M26 30 C20 64, 42 102, 84 104 C90 104, 94 98, 88 93 C56 88, 38 62, 38 30 Z" fill="${color2}" opacity="0.75"/>
        <rect x="33" y="13" width="12" height="9" rx="4" fill="${stem}"/>
        <circle cx="54" cy="66" r="3.2" fill="#25382E"/>
        <circle cx="68" cy="72" r="3.2" fill="#25382E"/>
        <path d="M57 76 Q60 81 65 78" stroke="#25382E" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'citrus':
      innerShapes = `
        <path d="M60 22 L60 11" stroke="${stem}" stroke-width="5" stroke-linecap="round"/>
        <path d="M61 18 C76 8, 92 14, 84 26 C76 32, 65 26, 61 18 Z" fill="${leaf}"/>
        <circle cx="58" cy="65" r="38" fill="url(#grad-${uid})"/>
        <circle cx="38" cy="48" r="2" fill="#FFFFFF" opacity="0.5"/>
        <circle cx="44" cy="42" r="2" fill="#FFFFFF" opacity="0.5"/>
        <circle cx="35" cy="56" r="2" fill="#FFFFFF" opacity="0.5"/>
        ${detail === 'lime-slice' ? `
          <circle cx="82" cy="82" r="22" fill="#E9FAD8" stroke="${color1}" stroke-width="4"/>
          <circle cx="82" cy="82" r="15" fill="${color2}"/>
          <line x1="82" y1="65" x2="82" y2="99" stroke="#E9FAD8" stroke-width="2"/>
          <line x1="65" y1="82" x2="99" y2="82" stroke="#E9FAD8" stroke-width="2"/>
        ` : ''}
        <circle cx="46" cy="63" r="3.5" fill="#25382E"/>
        <circle cx="68" cy="63" r="3.5" fill="#25382E"/>
        <path d="M52 72 Q57 78 62 72" stroke="#25382E" stroke-width="3" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'mango':
      innerShapes = `
        <path d="M54 20 L50 10" stroke="${stem}" stroke-width="5" stroke-linecap="round"/>
        <path d="M52 16 C70 6, 88 12, 82 25 C72 30, 58 24, 52 16 Z" fill="${leaf}"/>
        <path d="M48 24 C24 30, 18 62, 32 86 C46 108, 82 106, 90 86 C98 68, 82 60, 78 44 C74 28, 62 20, 48 24 Z" fill="url(#grad-${uid})"/>
        <ellipse cx="42" cy="48" rx="7" ry="14" transform="rotate(-22 42 48)" fill="#FFFFFF" opacity="0.4"/>
        <circle cx="48" cy="62" r="3.5" fill="#25382E"/>
        <circle cx="68" cy="62" r="3.5" fill="#25382E"/>
        <path d="M53 71 Q58 77 63 71" stroke="#25382E" stroke-width="3" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'grapes':
      innerShapes = `
        <path d="M60 22 L60 9" stroke="${stem}" stroke-width="5" stroke-linecap="round"/>
        <path d="M60 18 C78 6, 94 14, 84 27 C74 33, 64 25, 60 18 Z" fill="${leaf}"/>
        <circle cx="42" cy="44" r="15" fill="url(#grad-${uid})"/>
        <circle cx="60" cy="42" r="15" fill="url(#grad-${uid})"/>
        <circle cx="78" cy="44" r="15" fill="url(#grad-${uid})"/>
        <circle cx="35" cy="62" r="15" fill="url(#grad-${uid})"/>
        <circle cx="52" cy="62" r="15" fill="url(#grad-${uid})"/>
        <circle cx="69" cy="62" r="15" fill="url(#grad-${uid})"/>
        <circle cx="85" cy="62" r="14" fill="url(#grad-${uid})"/>
        <circle cx="44" cy="80" r="15" fill="url(#grad-${uid})"/>
        <circle cx="61" cy="80" r="15" fill="url(#grad-${uid})"/>
        <circle cx="77" cy="80" r="14" fill="url(#grad-${uid})"/>
        <circle cx="60" cy="96" r="14" fill="url(#grad-${uid})"/>
        <circle cx="51" cy="60" r="3" fill="#FFFFFF"/>
        <circle cx="69" cy="60" r="3" fill="#FFFFFF"/>
        <path d="M56 68 Q60 73 64 68" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'watermelon-slice':
      innerShapes = `
        <path d="M16 42 C16 84, 42 104, 60 104 C78 104, 104 84, 104 42 Z" fill="${color2}"/>
        <path d="M22 42 C22 78, 44 96, 60 96 C76 96, 98 78, 98 42 Z" fill="#E8F8E8"/>
        <path d="M26 42 C26 73, 46 90, 60 90 C74 90, 94 73, 94 42 Z" fill="${color1}"/>
        <ellipse cx="42" cy="56" rx="2.5" ry="4" fill="#25382E"/>
        <ellipse cx="78" cy="56" rx="2.5" ry="4" fill="#25382E"/>
        <ellipse cx="50" cy="74" rx="2.5" ry="4" fill="#25382E"/>
        <ellipse cx="70" cy="74" rx="2.5" ry="4" fill="#25382E"/>
        <circle cx="52" cy="56" r="3.3" fill="#25382E"/>
        <circle cx="68" cy="56" r="3.3" fill="#25382E"/>
        <path d="M55 65 Q60 71 65 65" stroke="#25382E" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'pineapple':
      innerShapes = `
        <path d="M60 36 L44 10 L56 24 L60 6 L65 24 L77 10 L60 36 Z" fill="${leaf}"/>
        <path d="M60 38 L34 20 L48 34 L72 34 L86 20 Z" fill="${stem}"/>
        <rect x="30" y="34" width="60" height="70" rx="28" fill="url(#grad-${uid})"/>
        <line x1="36" y1="48" x2="84" y2="88" stroke="${color2}" stroke-width="2.5" opacity="0.55"/>
        <line x1="36" y1="68" x2="74" y2="100" stroke="${color2}" stroke-width="2.5" opacity="0.55"/>
        <line x1="84" y1="48" x2="36" y2="88" stroke="${color2}" stroke-width="2.5" opacity="0.55"/>
        <line x1="84" y1="68" x2="46" y2="100" stroke="${color2}" stroke-width="2.5" opacity="0.55"/>
        <circle cx="49" cy="64" r="3.5" fill="#25382E"/>
        <circle cx="71" cy="64" r="3.5" fill="#25382E"/>
        <path d="M55 73 Q60 79 65 73" stroke="#25382E" stroke-width="3" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'melon':
      innerShapes = `
        <path d="M52 24 L60 12 L68 24" stroke="${stem}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <circle cx="60" cy="64" r="39" fill="url(#grad-${uid})"/>
        ${detail === 'net' ? `
          <path d="M32 46 Q60 60 88 46 M26 66 Q60 80 94 66 M36 86 Q60 94 84 86" stroke="#E9F7DF" stroke-width="2.2" fill="none" opacity="0.65"/>
          <path d="M44 28 Q56 64 44 100 M76 28 Q64 64 76 100" stroke="#E9F7DF" stroke-width="2.2" fill="none" opacity="0.65"/>
        ` : `<ellipse cx="42" cy="46" rx="8" ry="13" transform="rotate(-25 42 46)" fill="#FFFFFF" opacity="0.5"/>`}
        <circle cx="48" cy="62" r="3.5" fill="#25382E"/>
        <circle cx="72" cy="62" r="3.5" fill="#25382E"/>
        <path d="M54 71 Q60 77 66 71" stroke="#25382E" stroke-width="3" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'strawberry':
      innerShapes = `
        <path d="M32 34 C32 22, 88 22, 88 34 C92 58, 76 98, 60 104 C44 98, 28 58, 32 34 Z" fill="url(#grad-${uid})"/>
        <path d="M36 28 L48 16 L60 26 L72 16 L84 28 L70 34 L60 28 L50 34 Z" fill="${leaf}"/>
        <circle cx="44" cy="48" r="2" fill="${stem}"/>
        <circle cx="76" cy="48" r="2" fill="${stem}"/>
        <circle cx="40" cy="70" r="2" fill="${stem}"/>
        <circle cx="80" cy="70" r="2" fill="${stem}"/>
        <circle cx="52" cy="86" r="2" fill="${stem}"/>
        <circle cx="68" cy="86" r="2" fill="${stem}"/>
        <circle cx="50" cy="58" r="3.3" fill="#25382E"/>
        <circle cx="70" cy="58" r="3.3" fill="#25382E"/>
        <path d="M55 67 Q60 72 65 67" stroke="#25382E" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'cut-round':
      innerShapes = `
        <circle cx="60" cy="62" r="40" fill="${color2}"/>
        <circle cx="60" cy="62" r="33" fill="${color1}"/>
        <circle cx="60" cy="62" r="14" fill="${leaf}"/>
        <circle cx="60" cy="42" r="2.2" fill="${stem}"/>
        <circle cx="74" cy="48" r="2.2" fill="${stem}"/>
        <circle cx="80" cy="62" r="2.2" fill="${stem}"/>
        <circle cx="74" cy="76" r="2.2" fill="${stem}"/>
        <circle cx="60" cy="82" r="2.2" fill="${stem}"/>
        <circle cx="46" cy="76" r="2.2" fill="${stem}"/>
        <circle cx="40" cy="62" r="2.2" fill="${stem}"/>
        <circle cx="46" cy="48" r="2.2" fill="${stem}"/>
        <circle cx="52" cy="59" r="3" fill="#25382E"/>
        <circle cx="68" cy="59" r="3" fill="#25382E"/>
        <path d="M55 66 Q60 71 65 66" stroke="#25382E" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'avocado':
      innerShapes = `
        <path d="M60 16 C42 16, 28 48, 28 72 C28 96, 44 106, 60 106 C76 106, 92 96, 92 72 C92 48, 78 16, 60 16 Z" fill="${color1}"/>
        <path d="M60 23 C46 23, 35 50, 35 72 C35 91, 47 99, 60 99 C73 99, 85 91, 85 72 C85 50, 74 23, 60 23 Z" fill="${color2}"/>
        <circle cx="60" cy="74" r="16" fill="${leaf}"/>
        <circle cx="55" cy="69" r="4" fill="#FFFFFF" opacity="0.35"/>
        <circle cx="50" cy="45" r="3.2" fill="#25382E"/>
        <circle cx="70" cy="45" r="3.2" fill="#25382E"/>
        <path d="M55 52 Q60 57 65 52" stroke="#25382E" stroke-width="2.6" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'berry-pair':
      innerShapes = `
        <path d="M46 26 C60 14, 78 18, 72 30 C64 36, 52 32, 46 26 Z" fill="${leaf}"/>
        <circle cx="44" cy="66" r="24" fill="url(#grad-${uid})"/>
        <circle cx="76" cy="72" r="22" fill="url(#grad-${uid})" stroke="#FFFFFF" stroke-width="2"/>
        <path d="M38 43 L44 38 L50 43" stroke="${stem}" stroke-width="3" fill="none"/>
        <circle cx="37" cy="64" r="2.8" fill="#FFFFFF"/>
        <circle cx="51" cy="64" r="2.8" fill="#FFFFFF"/>
        <path d="M40 72 Q44 76 48 72" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'bumpy-berry':
      innerShapes = `
        <path d="M44 24 L54 14 L60 22 L66 14 L76 24" stroke="${leaf}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <circle cx="46" cy="42" r="12" fill="url(#grad-${uid})"/>
        <circle cx="60" cy="40" r="12" fill="url(#grad-${uid})"/>
        <circle cx="74" cy="42" r="12" fill="url(#grad-${uid})"/>
        <circle cx="40" cy="58" r="13" fill="url(#grad-${uid})"/>
        <circle cx="60" cy="58" r="13" fill="url(#grad-${uid})"/>
        <circle cx="80" cy="58" r="13" fill="url(#grad-${uid})"/>
        <circle cx="45" cy="76" r="13" fill="url(#grad-${uid})"/>
        <circle cx="60" cy="76" r="13" fill="url(#grad-${uid})"/>
        <circle cx="75" cy="76" r="13" fill="url(#grad-${uid})"/>
        <circle cx="60" cy="92" r="13" fill="url(#grad-${uid})"/>
        <circle cx="51" cy="58" r="3" fill="#FFFFFF"/>
        <circle cx="69" cy="58" r="3" fill="#FFFFFF"/>
        <path d="M56 66 Q60 70 64 66" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'cherry-pair':
      innerShapes = `
        <path d="M40 66 Q52 26 66 18 Q74 36 82 70" stroke="${stem}" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M64 18 C80 10, 96 18, 86 30 C76 34, 68 26, 64 18 Z" fill="${leaf}"/>
        <circle cx="38" cy="76" r="21" fill="url(#grad-${uid})"/>
        <circle cx="80" cy="80" r="20" fill="url(#grad-${uid})"/>
        <circle cx="31" cy="68" r="4" fill="#FFFFFF" opacity="0.45"/>
        <circle cx="73" cy="72" r="4" fill="#FFFFFF" opacity="0.45"/>
        <circle cx="33" cy="76" r="2.5" fill="#25382E"/>
        <circle cx="44" cy="76" r="2.5" fill="#25382E"/>
        <path d="M35 83 Q38.5 86 42 83" stroke="#25382E" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'pomegranate':
      innerShapes = `
        <path d="M48 24 L52 12 L60 20 L68 12 L72 24 Z" fill="${color1}"/>
        <circle cx="60" cy="64" r="38" fill="url(#grad-${uid})"/>
        <path d="M60 64 L92 54 A34 34 0 0 1 72 94 Z" fill="#FFF0F3"/>
        <circle cx="72" cy="68" r="4" fill="${stem}"/>
        <circle cx="81" cy="65" r="4" fill="${stem}"/>
        <circle cx="76" cy="77" r="4" fill="${stem}"/>
        <circle cx="68" cy="82" r="4" fill="${stem}"/>
        <circle cx="44" cy="58" r="3.3" fill="#25382E"/>
        <circle cx="62" cy="58" r="3.3" fill="#25382E"/>
        <path d="M49 67 Q53 72 58 67" stroke="#25382E" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'mangosteen':
      innerShapes = `
        <path d="M60 24 L60 12" stroke="${stem}" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="44" cy="26" rx="13" ry="8" fill="${leaf}"/>
        <ellipse cx="76" cy="26" rx="13" ry="8" fill="${leaf}"/>
        <circle cx="60" cy="66" r="36" fill="${color1}"/>
        <circle cx="60" cy="72" r="22" fill="#8C3B7A"/>
        <circle cx="60" cy="72" r="16" fill="${color2}"/>
        <line x1="60" y1="56" x2="60" y2="88" stroke="#E2EAE5" stroke-width="2"/>
        <line x1="44" y1="72" x2="76" y2="72" stroke="#E2EAE5" stroke-width="2"/>
        <circle cx="50" cy="48" r="3" fill="#FFFFFF"/>
        <circle cx="70" cy="48" r="3" fill="#FFFFFF"/>
      `;
      break;

    case 'lychee':
      innerShapes = `
        <path d="M60 22 C74 12, 90 18, 82 30 C74 34, 64 28, 60 22 Z" fill="${leaf}"/>
        <circle cx="56" cy="64" r="35" fill="url(#grad-${uid})" stroke="#C93448" stroke-width="2" stroke-dasharray="5 3"/>
        <circle cx="74" cy="72" r="20" fill="${color2}" stroke="${color1}" stroke-width="3"/>
        <circle cx="46" cy="56" r="3.2" fill="#25382E"/>
        <circle cx="64" cy="56" r="3.2" fill="#25382E"/>
        <path d="M51 64 Q55 69 60 64" stroke="#25382E" stroke-width="2.6" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'rambutan':
      innerShapes = `
        <g stroke="${color1}" stroke-width="3" stroke-linecap="round">
          <line x1="60" y1="14" x2="60" y2="28"/><line x1="36" y1="22" x2="44" y2="34"/>
          <line x1="84" y1="22" x2="76" y2="34"/><line x1="18" y1="42" x2="32" y2="48"/>
          <line x1="102" y1="42" x2="88" y2="48"/><line x1="14" y1="64" x2="28" y2="64"/>
          <line x1="106" y1="64" x2="92" y2="64"/><line x1="22" y1="86" x2="34" y2="78"/>
          <line x1="98" y1="86" x2="86" y2="78"/><line x1="40" y1="102" x2="48" y2="90"/>
          <line x1="80" y1="102" x2="72" y2="90"/><line x1="60" y1="106" x2="60" y2="92"/>
        </g>
        <circle cx="60" cy="62" r="32" fill="url(#grad-${uid})"/>
        <ellipse cx="60" cy="72" rx="18" ry="13" fill="#FFFFFF"/>
        <circle cx="50" cy="52" r="3.2" fill="#25382E"/>
        <circle cx="70" cy="52" r="3.2" fill="#25382E"/>
      `;
      break;

    case 'durian':
      innerShapes = `
        <path d="M60 20 L60 10" stroke="${stem}" stroke-width="6" stroke-linecap="round"/>
        <polygon points="60,18 70,26 84,22 86,36 100,40 94,54 104,64 94,76 100,88 86,92 80,104 66,98 60,108 54,98 40,104 34,92 20,88 26,76 16,64 26,54 20,40 34,36 36,22 50,26" fill="${color1}" stroke="${leaf}" stroke-width="2"/>
        <ellipse cx="48" cy="68" rx="12" ry="18" fill="${color2}"/>
        <ellipse cx="72" cy="68" rx="12" ry="18" fill="${color2}"/>
        <circle cx="48" cy="62" r="3" fill="#25382E"/>
        <circle cx="72" cy="62" r="3" fill="#25382E"/>
        <path d="M55 72 Q60 77 65 72" stroke="#25382E" stroke-width="2.6" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'salak':
      innerShapes = `
        <path d="M60 16 C44 34, 24 58, 30 82 C34 98, 48 104, 60 104 C72 104, 86 98, 90 82 C96 58, 76 34, 60 16 Z" fill="url(#grad-${uid})"/>
        <path d="M40 50 Q60 60 80 50 M34 68 Q60 78 86 68 M38 86 Q60 94 82 86" stroke="${leaf}" stroke-width="2.2" fill="none"/>
        <circle cx="50" cy="64" r="3.2" fill="#FFFFFF"/>
        <circle cx="70" cy="64" r="3.2" fill="#FFFFFF"/>
        <path d="M55 73 Q60 78 65 73" stroke="#FFFFFF" stroke-width="2.6" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'cluster-tan':
      innerShapes = `
        <path d="M36 22 L84 32" stroke="${stem}" stroke-width="5" stroke-linecap="round"/>
        <path d="M42 22 C30 10, 16 18, 26 30 C34 34, 40 28, 42 22 Z" fill="${leaf}"/>
        <circle cx="44" cy="54" r="20" fill="url(#grad-${uid})"/>
        <circle cx="76" cy="58" r="20" fill="url(#grad-${uid})"/>
        <circle cx="58" cy="80" r="21" fill="url(#grad-${uid})" stroke="#FFFFFF" stroke-width="1.5"/>
        ${detail === 'longan-eye' ? `
          <circle cx="58" cy="80" r="14" fill="#FFFFFF"/>
          <circle cx="58" cy="80" r="7" fill="#2B1B12"/>
        ` : `
          <circle cx="51" cy="78" r="3" fill="#25382E"/>
          <circle cx="65" cy="78" r="3" fill="#25382E"/>
          <path d="M54 85 Q58 89 62 85" stroke="#25382E" stroke-width="2.4" stroke-linecap="round" fill="none"/>
        `}
      `;
      break;

    case 'soursop':
      innerShapes = `
        <path d="M56 18 L54 10" stroke="${stem}" stroke-width="5" stroke-linecap="round"/>
        <path d="M56 22 C32 24, 24 52, 32 78 C38 98, 54 104, 68 100 C84 96, 94 74, 88 50 C84 30, 72 20, 56 22 Z" fill="url(#grad-${uid})"/>
        <circle cx="44" cy="42" r="2.5" fill="${leaf}"/><circle cx="72" cy="40" r="2.5" fill="${leaf}"/>
        <circle cx="38" cy="66" r="2.5" fill="${leaf}"/><circle cx="80" cy="68" r="2.5" fill="${leaf}"/>
        <circle cx="52" cy="86" r="2.5" fill="${leaf}"/><circle cx="72" cy="84" r="2.5" fill="${leaf}"/>
        <circle cx="50" cy="56" r="3.3" fill="#FFFFFF"/>
        <circle cx="68" cy="56" r="3.3" fill="#FFFFFF"/>
        <path d="M54 65 Q59 70 64 65" stroke="#FFFFFF" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'papaya':
      innerShapes = `
        <path d="M60 16 C38 20, 26 54, 32 82 C36 98, 48 104, 60 104 C72 104, 84 98, 88 82 C94 54, 82 20, 60 16 Z" fill="${color2}"/>
        <path d="M60 22 C43 26, 33 54, 38 79 C41 92, 50 97, 60 97 C70 97, 79 92, 82 79 C87 54, 77 26, 60 22 Z" fill="${color1}"/>
        <ellipse cx="60" cy="66" rx="13" ry="20" fill="#FFE6C2"/>
        <circle cx="56" cy="58" r="3" fill="${stem}"/><circle cx="64" cy="58" r="3" fill="${stem}"/>
        <circle cx="55" cy="67" r="3" fill="${stem}"/><circle cx="65" cy="67" r="3" fill="${stem}"/>
        <circle cx="60" cy="75" r="3" fill="${stem}"/>
      `;
      break;

    case 'bell-fruit':
      innerShapes = `
        <path d="M60 20 L60 11" stroke="${stem}" stroke-width="5" stroke-linecap="round"/>
        <path d="M60 18 C74 8, 88 14, 80 26 C72 30, 64 24, 60 18 Z" fill="${leaf}"/>
        <path d="M48 24 C42 40, 24 64, 26 84 C28 96, 44 102, 60 100 C76 102, 92 96, 94 84 C96 64, 78 40, 72 24 C66 18, 54 18, 48 24 Z" fill="url(#grad-${uid})"/>
        <circle cx="48" cy="68" r="3.4" fill="#25382E"/>
        <circle cx="72" cy="68" r="3.4" fill="#25382E"/>
        <path d="M54 76 Q60 82 66 76" stroke="#25382E" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'dragonfruit':
      innerShapes = `
        <path d="M26 42 L14 30 L32 34 M94 42 L106 30 L88 34 M22 72 L10 64 L26 62 M98 72 L110 64 L94 62 M60 20 L60 8" stroke="${leaf}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <circle cx="60" cy="64" r="36" fill="${color1}"/>
        <circle cx="60" cy="64" r="27" fill="${color2}"/>
        <circle cx="48" cy="50" r="2" fill="${stem}"/><circle cx="72" cy="50" r="2" fill="${stem}"/>
        <circle cx="60" cy="46" r="2" fill="${stem}"/><circle cx="44" cy="66" r="2" fill="${stem}"/>
        <circle cx="76" cy="66" r="2" fill="${stem}"/><circle cx="52" cy="78" r="2" fill="${stem}"/>
        <circle cx="68" cy="78" r="2" fill="${stem}"/>
        <circle cx="52" cy="60" r="3.3" fill="#25382E"/>
        <circle cx="68" cy="60" r="3.3" fill="#25382E"/>
        <path d="M55 68 Q60 73 65 68" stroke="#25382E" stroke-width="2.6" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'jackfruit':
      innerShapes = `
        <path d="M60 18 L60 10" stroke="${stem}" stroke-width="6" stroke-linecap="round"/>
        <ellipse cx="60" cy="62" rx="36" ry="42" fill="${color1}" stroke="${leaf}" stroke-width="3" stroke-dasharray="6 4"/>
        <rect x="40" y="48" width="17" height="28" rx="8" fill="${color2}"/>
        <rect x="63" y="48" width="17" height="28" rx="8" fill="${color2}"/>
        <circle cx="48" cy="60" r="2.8" fill="#25382E"/>
        <circle cx="71" cy="60" r="2.8" fill="#25382E"/>
      `;
      break;

    case 'persimmon':
      innerShapes = `
        <ellipse cx="60" cy="66" rx="40" ry="34" fill="url(#grad-${uid})"/>
        <path d="M40 32 Q60 22 80 32 Q70 44 60 40 Q50 44 40 32 Z" fill="${leaf}"/>
        <circle cx="48" cy="66" r="3.5" fill="#25382E"/>
        <circle cx="72" cy="66" r="3.5" fill="#25382E"/>
        <path d="M54 75 Q60 80 66 75" stroke="#25382E" stroke-width="3" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'peach':
      innerShapes = `
        <path d="M60 20 C74 10, 90 16, 82 28 C74 32, 64 26, 60 20 Z" fill="${leaf}"/>
        <path d="M60 20 C42 22, 22 44, 24 70 C26 94, 44 104, 60 102 C76 104, 94 94, 96 70 C98 44, 78 22, 60 20 Z" fill="url(#grad-${uid})"/>
        <path d="M60 22 C48 48, 48 76, 60 102" stroke="#E05368" stroke-width="2.5" fill="none" opacity="0.45"/>
        <circle cx="48" cy="64" r="3.5" fill="#25382E"/>
        <circle cx="72" cy="64" r="3.5" fill="#25382E"/>
        <path d="M54 73 Q60 79 66 73" stroke="#25382E" stroke-width="3" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'pear':
      innerShapes = `
        <path d="M60 20 L60 10" stroke="${stem}" stroke-width="5" stroke-linecap="round"/>
        <path d="M60 18 C74 8, 88 14, 80 26 C72 30, 64 24, 60 18 Z" fill="${leaf}"/>
        <path d="M60 20 C46 20, 42 36, 36 52 C26 70, 26 98, 60 102 C94 98, 94 70, 84 52 C78 36, 74 20, 60 20 Z" fill="url(#grad-${uid})"/>
        <circle cx="48" cy="70" r="3.4" fill="#25382E"/>
        <circle cx="72" cy="70" r="3.4" fill="#25382E"/>
        <path d="M54 79 Q60 84 66 79" stroke="#25382E" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'fig':
      innerShapes = `
        <path d="M60 16 C48 28, 28 52, 30 78 C32 96, 46 104, 60 104 C74 104, 88 96, 90 78 C92 52, 72 28, 60 16 Z" fill="${color1}"/>
        <circle cx="60" cy="72" r="20" fill="#FFF5E4"/>
        <circle cx="60" cy="72" r="15" fill="${color2}"/>
        <circle cx="60" cy="72" r="5" fill="#FFE082"/>
      `;
      break;

    case 'dates':
      innerShapes = `
        <rect x="26" y="34" width="32" height="62" rx="16" fill="url(#grad-${uid})"/>
        <rect x="62" y="40" width="32" height="58" rx="16" fill="url(#grad-${uid})" stroke="#FFFDF7" stroke-width="2"/>
        <ellipse cx="42" cy="34" rx="8" ry="4" fill="#D9A05B"/>
        <ellipse cx="78" cy="40" rx="8" ry="4" fill="#D9A05B"/>
        <circle cx="37" cy="62" r="2.6" fill="#FFFFFF"/>
        <circle cx="47" cy="62" r="2.6" fill="#FFFFFF"/>
        <path d="M39 70 Q42 74 45 70" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'lemon':
      innerShapes = `
        <path d="M16 62 C24 34, 42 28, 60 28 C78 28, 96 34, 104 62 C96 90, 78 96, 60 96 C42 96, 24 90, 16 62 Z" fill="url(#grad-${uid})"/>
        <circle cx="48" cy="60" r="3.4" fill="#25382E"/>
        <circle cx="72" cy="60" r="3.4" fill="#25382E"/>
        <path d="M54 69 Q60 75 66 69" stroke="#25382E" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'pomelo':
      innerShapes = `
        <circle cx="60" cy="64" r="40" fill="${color1}"/>
        <circle cx="60" cy="64" r="31" fill="#FFFDF7"/>
        <path d="M60 64 L86 48 A26 26 0 1 1 42 44 Z" fill="${color2}"/>
        <circle cx="50" cy="66" r="3.2" fill="#25382E"/>
        <circle cx="68" cy="66" r="3.2" fill="#25382E"/>
      `;
      break;

    case 'oval-pair':
      innerShapes = `
        <path d="M54 22 C68 12, 84 18, 76 30 C68 34, 58 28, 54 22 Z" fill="${leaf}"/>
        <ellipse cx="44" cy="66" rx="20" ry="27" fill="url(#grad-${uid})"/>
        <ellipse cx="76" cy="70" rx="19" ry="25" fill="url(#grad-${uid})" stroke="#FFFFFF" stroke-width="2"/>
        <circle cx="38" cy="62" r="2.8" fill="#25382E"/>
        <circle cx="50" cy="62" r="2.8" fill="#25382E"/>
        <path d="M41 70 Q44 74 47 70" stroke="#25382E" stroke-width="2.4" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'matoa':
      innerShapes = `
        <path d="M40 20 L80 28" stroke="${stem}" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="44" cy="62" rx="21" ry="26" fill="url(#grad-${uid})"/>
        <ellipse cx="76" cy="66" rx="20" ry="25" fill="${color2}"/>
        <circle cx="76" cy="68" r="12" fill="#FFF9E6"/>
        <circle cx="38" cy="58" r="2.8" fill="#FFFFFF"/>
        <circle cx="50" cy="58" r="2.8" fill="#FFFFFF"/>
      `;
      break;

    case 'ribbed-melon':
      innerShapes = `
        <path d="M60 22 L60 12" stroke="${stem}" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="60" cy="64" rx="40" ry="36" fill="${color2}"/>
        <ellipse cx="60" cy="64" rx="28" ry="36" fill="${color1}"/>
        <ellipse cx="60" cy="64" rx="14" ry="36" fill="#FFB866"/>
        <circle cx="49" cy="62" r="3.4" fill="#25382E"/>
        <circle cx="71" cy="62" r="3.4" fill="#25382E"/>
        <path d="M55 71 Q60 76 65 71" stroke="#25382E" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'coconut':
      innerShapes = `
        <circle cx="60" cy="64" r="38" fill="${color1}"/>
        <ellipse cx="60" cy="40" rx="24" ry="12" fill="#E8F5E9"/>
        <ellipse cx="60" cy="40" rx="17" ry="8" fill="${color2}"/>
        <path d="M64 38 L78 14 L90 16" stroke="#FF7043" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <circle cx="48" cy="68" r="3.4" fill="#25382E"/>
        <circle cx="72" cy="68" r="3.4" fill="#25382E"/>
        <path d="M54 77 Q60 82 66 77" stroke="#25382E" stroke-width="2.8" stroke-linecap="round" fill="none"/>
      `;
      break;

    case 'sapodilla':
      innerShapes = `
        <ellipse cx="56" cy="64" rx="34" ry="30" fill="url(#grad-${uid})"/>
        <circle cx="76" cy="72" r="18" fill="${color2}" stroke="#FFFDF7" stroke-width="2"/>
        <ellipse cx="76" cy="72" rx="4" ry="8" fill="#1C130E"/>
        <circle cx="44" cy="58" r="3" fill="#FFFFFF"/>
        <circle cx="58" cy="58" r="3" fill="#FFFFFF"/>
        <path d="M47 66 Q51 70 55 66" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      `;
      break;

    default:
      innerShapes = `<circle cx="60" cy="60" r="38" fill="url(#grad-${uid})"/>`;
  }

  return `
    <svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustrasi ${fruit.name}">
      <defs>
        <linearGradient id="grad-${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${color2}" />
          <stop offset="100%" stop-color="${color1}" />
        </linearGradient>
      </defs>
      ${innerShapes}
    </svg>
  `;
}

// ============================================================================
// APPLICATION STATE
// ============================================================================
const appState = {
  screen: 'home', // 'home' | 'catalog' | 'detail'
  selectedFruitId: 1,
  searchQuery: '',
  selectedCategory: 'semua', // 'semua' | 'populer' | 'lainnya'
  showFunFact: false,
  isSpeaking: false,
  audioStatusMessage: ''
};

// ============================================================================
// AUDIO & INDONESIAN SPEECH ENGINE (REAL WORKING AUDIO + FALLBACK)
// ============================================================================
let cachedVoices = [];

function initSpeechVoices() {
  if ('speechSynthesis' in window) {
    cachedVoices = window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoices = window.speechSynthesis.getVoices();
    };
  }
}

function playGentleChime() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.14); // A5
    gain.gain.setValueAtTime(0.14, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (e) {
    // ignore audio context restrictions
  }
}

function stopCurrentAudio() {
  if (window.AndroidTTS && typeof window.AndroidTTS.stop === 'function') {
    window.AndroidTTS.stop();
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  appState.isSpeaking = false;
  const imgBtn = document.getElementById('detailFruitImageBtn');
  if (imgBtn) imgBtn.classList.remove('speaking-pulse');
}

function speakFruitName(fruit) {
  stopCurrentAudio();
  playGentleChime();

  const textToSpeak = fruit.name;
  appState.isSpeaking = true;
  appState.audioStatusMessage = `🔊 Memutar suara: "${fruit.audioText}"`;
  updateAudioUI();

  // Jika dijalankan di dalam aplikasi Android Studio (Native Android TTS Bridge)
  if (window.AndroidTTS && typeof window.AndroidTTS.speak === 'function') {
    window.AndroidTTS.speak(textToSpeak);
    setTimeout(() => {
      appState.isSpeaking = false;
      appState.audioStatusMessage = `✅ Selesai memutar: "${fruit.audioText}" — Tekan lagi untuk mengulang!`;
      updateAudioUI();
    }, 1400);
    return;
  }

  if (!('speechSynthesis' in window)) {
    appState.audioStatusMessage = `🔊 Pelafalan: "${fruit.audioText}" (Perangkat ini menampilkan teks pelafalan karena fitur suara browser tidak tersedia)`;
    updateAudioUI();
    setTimeout(() => {
      appState.isSpeaking = false;
      updateAudioUI();
    }, 1800);
    return;
  }

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = 'id-ID';
  utterance.rate = 0.9; // Ramah dan jelas untuk anak 3–6 tahun
  utterance.pitch = 1.08;

  const voices = cachedVoices.length ? cachedVoices : window.speechSynthesis.getVoices();
  const indoVoice = voices.find(
    v => v.lang && (v.lang.toLowerCase().includes('id-id') || v.lang.toLowerCase().includes('id_id') || v.lang.toLowerCase() === 'id')
  );
  if (indoVoice) {
    utterance.voice = indoVoice;
  }

  utterance.onend = () => {
    appState.isSpeaking = false;
    appState.audioStatusMessage = `✅ Selesai memutar: "${fruit.audioText}" — Tekan lagi untuk mengulang!`;
    updateAudioUI();
  };

  utterance.onerror = () => {
    appState.isSpeaking = false;
    appState.audioStatusMessage = `🔊 Pelafalan Buah: "${fruit.audioText}"`;
    updateAudioUI();
  };

  window.speechSynthesis.speak(utterance);
}

function updateAudioUI() {
  const imgBtn = document.getElementById('detailFruitImageBtn');
  const statusEl = document.getElementById('audioStatusBanner');

  if (imgBtn) {
    if (appState.isSpeaking) {
      imgBtn.classList.add('speaking-pulse');
    } else {
      imgBtn.classList.remove('speaking-pulse');
    }
  }

  if (statusEl) {
    if (appState.audioStatusMessage) {
      statusEl.style.display = 'flex';
      statusEl.innerHTML = `<span>${appState.audioStatusMessage}</span>`;
    } else {
      statusEl.style.display = 'none';
    }
  }
}

// ============================================================================
// NAVIGATION & FILTER ACTIONS
// ============================================================================
function goToHome() {
  stopCurrentAudio();
  appState.screen = 'home';
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToCatalog() {
  stopCurrentAudio();
  appState.screen = 'catalog';
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openFruitDetail(fruitId, autoSpeak = false) {
  stopCurrentAudio();
  appState.selectedFruitId = Number(fruitId);
  appState.screen = 'detail';
  appState.showFunFact = false;
  appState.audioStatusMessage = '';
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (autoSpeak) {
    const fruit = getSelectedFruit();
    setTimeout(() => speakFruitName(fruit), 120);
  }
}

function getSelectedFruit() {
  return FRUITS_DATA.find(f => f.id === appState.selectedFruitId) || FRUITS_DATA[0];
}

function getFilteredFruits() {
  const q = appState.searchQuery.trim().toLowerCase();
  return FRUITS_DATA.filter(fruit => {
    const matchesCategory =
      appState.selectedCategory === 'semua' || fruit.category === appState.selectedCategory;
    const matchesSearch =
      !q ||
      fruit.name.toLowerCase().includes(q) ||
      (fruit.altName && fruit.altName.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });
}

function handleSearchInput(value) {
  appState.searchQuery = value;
  renderCatalogGridOnly();
}

function clearSearchInput() {
  appState.searchQuery = '';
  renderApp();
}

function selectCategoryTab(cat) {
  appState.selectedCategory = cat;
  renderApp();
}

function goToPrevFruit() {
  stopCurrentAudio();
  const currentIndex = FRUITS_DATA.findIndex(f => f.id === appState.selectedFruitId);
  const prevIndex = (currentIndex - 1 + FRUITS_DATA.length) % FRUITS_DATA.length;
  appState.selectedFruitId = FRUITS_DATA[prevIndex].id;
  appState.showFunFact = false;
  appState.audioStatusMessage = '';
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToNextFruit() {
  stopCurrentAudio();
  const currentIndex = FRUITS_DATA.findIndex(f => f.id === appState.selectedFruitId);
  const nextIndex = (currentIndex + 1) % FRUITS_DATA.length;
  appState.selectedFruitId = FRUITS_DATA[nextIndex].id;
  appState.showFunFact = false;
  appState.audioStatusMessage = '';
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleFunFactBox() {
  appState.showFunFact = !appState.showFunFact;
  renderApp();
}

function triggerCurrentFruitAudio() {
  const fruit = getSelectedFruit();
  speakFruitName(fruit);
}

// ============================================================================
// SCREEN VIEWS
// ============================================================================

// A. HALAMAN BERANDA
function renderHomeView() {
  const previewFruits = [
    FRUITS_DATA[0], // Apel
    FRUITS_DATA[1], // Pisang
    FRUITS_DATA[5], // Semangka
    FRUITS_DATA[2]  // Jeruk
  ];

  return `
    <section class="screen-section">
      <div class="home-wrapper">
        <div class="home-pill-badge">
          🌱 Aplikasi Edukasi Anak Usia 3–6 Tahun
        </div>

        <div class="home-illustration-row">
          ${previewFruits.map(f => `
            <div class="home-fruit-bubble" onclick="openFruitDetail(${f.id}, true)" title="Klik untuk kenalan dengan ${f.name}!">
              ${renderFruitSVG(f, 96)}
            </div>
          `).join('')}
        </div>

        <h1 class="home-welcome-title">Yuk, Kenalan dengan Buah!</h1>
        <p class="home-welcome-sub">
          Pilih buah favoritmu dan dengarkan namanya!
        </p>

        <button class="btn-start-big" onclick="goToCatalog()">
          <span>🍎 Mulai Belajar</span>
        </button>

        <div class="home-feature-pills">
          <div class="home-feature-item">🎨 50 Gambar Buah Ceria</div>
          <div class="home-feature-item">🔊 Suara Nama Buah Bahasa Indonesia</div>
          <div class="home-feature-item">📖 Cerita Singkat Mudah Dipahami</div>
        </div>
      </div>
    </section>
  `;
}

// B. HALAMAN KATALOG BUAH
function renderCatalogCardsHTML() {
  const filtered = getFilteredFruits();

  if (filtered.length === 0) {
    return `
      <div class="empty-search-box">
        <h3>🍓 Buah tidak ditemukan</h3>
        <p>Tidak ada nama buah yang cocok dengan pencarian "<strong>${appState.searchQuery}</strong>".</p>
        <button class="btn-nav active" onclick="clearSearchInput()">
          Tampilkan Semua 50 Buah
        </button>
      </div>
    `;
  }

  return filtered.map(fruit => {
    const isSelected = fruit.id === appState.selectedFruitId;
    return `
      <div
        class="fruit-card ${isSelected ? 'selected-card' : ''}"
        onclick="openFruitDetail(${fruit.id})"
        role="button"
        tabindex="0"
        aria-label="Pilih buah ${fruit.name}"
      >
        <span class="fruit-number-badge">${fruit.id}</span>
        ${isSelected ? `<span class="selected-indicator-badge">Dipilih</span>` : ''}
        <div class="fruit-card-art" style="background:${fruit.bgPastel};">
          ${renderFruitSVG(fruit, 98)}
        </div>
        <div class="fruit-card-name">${fruit.name}</div>
        ${fruit.altName ? `<div class="fruit-card-alt">(${fruit.altName})</div>` : ''}
        <span class="fruit-card-listen-hint">🔊 Lihat & Dengarkan</span>
      </div>
    `;
  }).join('');
}

function renderCatalogGridOnly() {
  const gridEl = document.getElementById('fruitsCatalogGrid');
  const countEl = document.getElementById('catalogCountText');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (gridEl) {
    gridEl.innerHTML = renderCatalogCardsHTML();
  }
  if (countEl) {
    const filtered = getFilteredFruits();
    countEl.textContent = `Menampilkan ${filtered.length} dari ${FRUITS_DATA.length} jenis buah`;
  }
  if (clearBtn) {
    clearBtn.style.display = appState.searchQuery ? 'flex' : 'none';
  }
}

function renderCatalogView() {
  const filtered = getFilteredFruits();
  const popCount = FRUITS_DATA.filter(f => f.category === 'populer').length;
  const otherCount = FRUITS_DATA.filter(f => f.category === 'lainnya').length;

  return `
    <section class="screen-section">
      <div class="catalog-header-card">
        <div class="catalog-top-row">
          <div class="catalog-title-group">
            <h2>🧺 Pilih Buah yang Ingin Kamu Kenali!</h2>
            <p id="catalogCountText">Menampilkan ${filtered.length} dari ${FRUITS_DATA.length} jenis buah</p>
          </div>
          <button class="btn-nav" onclick="goToHome()">
            🏠 Kembali ke Beranda
          </button>
        </div>

        <div class="catalog-controls-row">
          <div class="search-box-wrap">
            <span class="search-icon">🔍</span>
            <input
              id="fruitSearchInput"
              type="text"
              class="search-input"
              placeholder="Cari nama buah..."
              value="${appState.searchQuery}"
              oninput="handleSearchInput(this.value)"
            />
            <button
              id="clearSearchBtn"
              class="clear-search-btn"
              style="display:${appState.searchQuery ? 'flex' : 'none'};"
              onclick="clearSearchInput()"
              title="Hapus pencarian"
            >✕</button>
          </div>

          <div class="category-tabs">
            <button
              class="cat-tab ${appState.selectedCategory === 'semua' ? 'active' : ''}"
              onclick="selectCategoryTab('semua')"
            >
              Semua Buah (${FRUITS_DATA.length})
            </button>
            <button
              class="cat-tab ${appState.selectedCategory === 'populer' ? 'active' : ''}"
              onclick="selectCategoryTab('populer')"
            >
              ⭐ Buah Populer (${popCount})
            </button>
            <button
              class="cat-tab ${appState.selectedCategory === 'lainnya' ? 'active' : ''}"
              onclick="selectCategoryTab('lainnya')"
            >
              🍈 Buah Lainnya (${otherCount})
            </button>
          </div>
        </div>
      </div>

      <div id="fruitsCatalogGrid" class="fruits-catalog-grid">
        ${renderCatalogCardsHTML()}
      </div>
    </section>
  `;
}

// C. HALAMAN DETAIL BUAH (2 KOLOM DI DESKTOP/TABLET, VERTIKAL DI PONSEL)
function renderDetailView() {
  const fruit = getSelectedFruit();
  const currentIndex = FRUITS_DATA.findIndex(f => f.id === fruit.id);
  const prevFruit = FRUITS_DATA[(currentIndex - 1 + FRUITS_DATA.length) % FRUITS_DATA.length];
  const nextFruit = FRUITS_DATA[(currentIndex + 1) % FRUITS_DATA.length];

  return `
    <section class="screen-section">
      <!-- Top Bar: Kembali ke Daftar Buah & Indikator Nomor Buah -->
      <div class="detail-top-bar">
        <button class="btn-back-catalog" onclick="goToCatalog()">
          <span>←</span>
          <span>Kembali ke Daftar Buah</span>
        </button>

        <span class="detail-position-pill">
          Buah ke-${fruit.id} dari ${FRUITS_DATA.length}
        </span>
      </div>

      <!-- Kartu Utama 2 Kolom (Kiri: Gambar Buah Besar, Kanan: Nama, Tombol Suara, Keterangan) -->
      <div class="detail-main-card">
        <!-- SISI KIRI: Gambar / Ilustrasi Buah Berukuran Besar -->
        <div class="detail-left-visual">
          <button
            id="detailFruitImageBtn"
            class="detail-image-button ${appState.isSpeaking ? 'speaking-pulse' : ''}"
            style="background:${fruit.bgPastel};"
            onclick="triggerCurrentFruitAudio()"
            title="Tekan gambar ${fruit.name} untuk mendengarkan suaranya"
          >
            ${renderFruitSVG(fruit, 240)}
          </button>
          <div class="tap-image-hint" onclick="triggerCurrentFruitAudio()" style="cursor:pointer;">
            👆 Tekan gambar buah untuk mendengar namanya!
          </div>
        </div>

        <!-- SISI KANAN: Nama Buah, Tombol Audio, Keterangan Singkat, & Fakta Menarik -->
        <div class="detail-right-info">
          <div class="detail-name-wrap">
            <h1 class="detail-fruit-name">${fruit.name}</h1>
            ${fruit.altName ? `<div class="detail-fruit-alt">Disebut juga: ${fruit.altName}</div>` : ''}
          </div>

          <!-- Tombol Suara & Tombol Ulangi Suara -->
          <div class="audio-controls-group">
            <button class="btn-speaker-main" onclick="triggerCurrentFruitAudio()">
              <span>🔊</span>
              <span>Dengarkan Nama Buah</span>
            </button>

            <button class="btn-speaker-repeat" onclick="triggerCurrentFruitAudio()">
              <span>🔁</span>
              <span>Ulangi Suara</span>
            </button>
          </div>

          <!-- Indikator Status Audio -->
          <div
            id="audioStatusBanner"
            class="audio-status-banner"
            style="display:${appState.audioStatusMessage ? 'flex' : 'none'};"
          >
            <span>${appState.audioStatusMessage}</span>
          </div>

          <!-- Keterangan Singkat Buah (1–2 Kalimat Sederhana) -->
          <div class="detail-description-box">
            <span class="detail-description-label">📖 Keterangan Buah</span>
            <p class="detail-description-text">${fruit.description}</p>
          </div>

          <!-- Fakta Menarik Sederhana (Dapat Dibuka Jika Diperlukan) -->
          <div class="funfact-wrapper">
            <button class="btn-toggle-funfact" onclick="toggleFunFactBox()">
              <span>✨</span>
              <span>${appState.showFunFact ? 'Sembunyikan Tahukah Kamu?' : 'Lihat Fakta Menarik Buah Ini'}</span>
            </button>

            ${appState.showFunFact ? `
              <div class="funfact-content-box">
                <span style="font-size:24px;">💡</span>
                <div>
                  <strong>Tahukah Kamu?</strong><br/>
                  ${fruit.funFact}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>

      <!-- Navigasi Buah Sebelumnya & Buah Berikutnya -->
      <div class="detail-bottom-nav">
        <button class="btn-prev-next" onclick="goToPrevFruit()">
          <span style="font-size:24px;">⬅️</span>
          <div style="text-align:left;flex:1;">
            <span class="prev-next-sub">Buah Sebelumnya</span>
            <span class="prev-next-name">${prevFruit.name}</span>
          </div>
        </button>

        <button class="btn-prev-next" onclick="goToNextFruit()">
          <div style="text-align:right;flex:1;">
            <span class="prev-next-sub">Buah Berikutnya</span>
            <span class="prev-next-name">${nextFruit.name}</span>
          </div>
          <span style="font-size:24px;">➡️</span>
        </button>
      </div>
    </section>
  `;
}

// ============================================================================
// MAIN RENDER FUNCTION
// ============================================================================
function renderApp() {
  const mainEl = document.getElementById('appMainContainer');
  const navHomeBtn = document.getElementById('navBtnHome');
  const navCatalogBtn = document.getElementById('navBtnCatalog');

  if (navHomeBtn && navCatalogBtn) {
    navHomeBtn.classList.toggle('active', appState.screen === 'home');
    navCatalogBtn.classList.toggle('active', appState.screen === 'catalog' || appState.screen === 'detail');
  }

  if (!mainEl) return;

  if (appState.screen === 'home') {
    mainEl.innerHTML = renderHomeView();
  } else if (appState.screen === 'catalog') {
    mainEl.innerHTML = renderCatalogView();
  } else if (appState.screen === 'detail') {
    mainEl.innerHTML = renderDetailView();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  initSpeechVoices();
  renderApp();
});
