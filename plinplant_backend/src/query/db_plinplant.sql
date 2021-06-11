CREATE DATABASE db_plinplant;

USE db_plinplant;

-- !::::::::::::::::::::: PLANT DATA :::::::::::::::::::::::::::

-- ::: PLANT :::
CREATE TABLE table_plant(
	pk_plant_id INT AUTO_INCREMENT PRIMARY KEY,
	plant_name VARCHAR(50) NOT NULL,
	plant_image VARCHAR(255),
	plant_origin TEXT,
	plant_qualities TEXT,
	plant_use TEXT,
	days_to_sprout VARCHAR(50),
	matures_in VARCHAR(50),
	growth_type VARCHAR(50),
	fk_category_id INT NOT NULL
	
);
SELECT * FROM table_plant;

-- ::: PLANT VALUES :::
INSERT INTO table_plant(plant_name, plant_image, plant_origin, plant_qualities, plant_use, days_to_sprout, matures_in, growth_type, fk_category_id)
VALUES
-- Hias
('Aglaonema', 'aglaonema-mature.jpg', 'Jenis tanaman hias daun ini berasal dari suku araceae atau sejenis tanaman berumbi talas. Tanaman Aglaonema memiliki banyak jenis, bahkan mencapai 30 spesies. Ada yang dibedakan dari bentuk, ukuran, serta warna daunnya.', 'Aglonema disebut sebagai salah satu tanaman hias pemurni terbaik. Tumbuhan ini bisa menyerap formaldehida dan benzena di dalam ruangan.', 'Daun tanaman hias aglonema ini paling populer di Indonesia. Kenapa? Karena warnanya yang cantik dan dapat tumbuh dengan baik di dalam ruangan.', '25 - 35', '< 100', 'Merambat', 1),

('Calathea', 'calathea-mature.jpg', 'Clathea adalah tanaman yang tumbuh baik di daerah tropis. Tanaman ini masuk dalam jenis tumbuhan rhizoma. Daya tariknya terdapat pada warna daun yang beragam serta motif unik di dalamnya.', 'calathea akan menghasilkan daun yang bergerombol dan indah.', 'Anehnya, di daerah Brazil, daun ini justru digunakan sebagai kerajinan tangan dan berbagai bungkus makanan.', '> 100', '< 365', 'Merambat', 1),

('Monstera', 'monstera-mature.jpg', 'Monstera termasuk tanaman yang tumbuh dengan baik di daerah tropis seperti di Indonesia.', 'Sebagai tanaman yang bentuknya unik, monstera ternyata masuk dalam jenis tanaman hias yang bagus untuk kesehatan.', 'monstera juga mampu menyerap zat berbahaya seperti formaldehida yang bisa merusak tubuh.', '15 - 25', '60', 'Merambat', 1),

('Begonia', 'begonia-mature.jpg', 'Begonia sebenarnya bukan asli tanaman yang tropis karena habitat asalnya adalah di daerah subtropis seperti Amerika Selatan dan Afrika. Persebarannya yang sampai di Indoneseia disebabkan karena iklim daerahnya yang tidak terlalu ekstrem dan cenderung lembab.', 'Beberapa jenis begonia justru terlihat menarik dari bentuk dan warna daunnya.', 'Begonia glabra diduga berkhasiat sebagai obat penyembuh luka baru. Daun, batang, dan bunganya mengandung saponin. Daunnya mengandung tanin, sedangkan batang dan bunganya mengandung flavonoida dan polifenol.', '15 - 25', '60', 'Merambat', 1),

('Anthurium', 'anthurium-mature.jpg', 'Perbedaan yang mencolok antara anturium dengan aglaonema adalah pada bentuk daunnya yang menyerupai daun telinga. Bentuk inilah yang menyebabkan anturium lebih akrab dengan sapaan kuping gajah.', 'Salah satu bagian dari tanaman hias ini yang cukup bermanfaat adalah bagian akarnya. Akar dari anthurium mempunyai manfaat yang sangat baik untuk mengobati diabetes. Akar dari anthurium dpat mengontrol kadar gula darah, sehingga dapat membantu anda penderita diabetes.', 'Meskipun memiliki keindahan dari daunnya, beberapa kuping gajah juga bisa berbunga dan terlihat lebih eksotis saat dijadikan tanaman hias di dalam rumah.', '7 - 14', '< 100', 'Merambat', 1),

('Monstera Deliciosa', 'monsteradeliciosa-mature.webp', 'Dari sekian banyak jenis monstera, spesial monster deliciosa tergolong yang paling populer. Tanamannya yang bisa tumbuh besar biasanya dimanfaatkan sebagai tanaman di sudut atau sisi ruangan.', 'Berbeda dengan monstera lainnya yang bolong-bolong dan tertutup pada bagian sisinya, monstera deliciosa justru terlihat seperti daun yang terbelah-belah dan pinggirnya tidak tertutup.', 'monstera juga mampu menyerap zat berbahaya seperti formaldehida yang bisa merusak tubuh.', '35 - 50', '90', 'Merambat', 1),

('Peperomia', 'peperomia-mature.jpg', 'Peperomia termasuk tanaman gantung yang memadukan keindahan daun dan bunganya sekaligus. Tanaman asal Brazil ini termasuk dalam suku Piperaceae yang memiliki ribuan spesies.', 'Saat di alam liar, tanaman ini tumbuh dengan menumpang pada batang dan cabang pohon lainnya meski tidak termasuk tanaman parasit.', 'Keunikan dan daya tarik peperomia terletak pada bentuk daunnya yang kecil dan lucu. Bahkan motif dan warnanya juga beragam. Hal inilah yang membuat banyak orang tertarik untuk mengoleksi berbagai jenis peperomia sebagai hiasan gantung.', '15 - 25', '60', 'Merambat', 1),

('Caladium Red Stardust', 'caladium-mature.jpg', 'Keladi merupakan sekelompok tumbuhan dari genus Caladium (suku talas-talasan, Araceae). Dalam bahasa sehari-hari keladi kerap juga dipakai untuk menyebut beberapa tumbuhan lain yang masih sekerabat namun tidak termasuk Caladium, seperti talas (Colocasia). Keladi sejati jarang membentuk umbi yang membesar. Asal tumbuhan ini dari hutan Brazil namun sekarang tersebar ke berbagai penjuru dunia.', 'Caladium atau sering disebut dengan tanaman keladi ternyata cukup baik saat dipelihara di luar ruangan.', 'Meskipun banyak yang menjadikannya sebagai tanaman indoor, peletakannya di luar ruangan tetap bisa memberikan tampilan halaman yang lebih menarik.', '7 - 14', '60 - 70', 'Merambat', 1),

('Kaktus', 'cactus-mature.jpg', 'Kaktus dapat tumbuh pada waktu yang lama tanpa air. Kaktus biasa ditemukan di daerah-daerah yang kering (gurun).', 'Kaktus termasuk ke dalam golongan tanaman sukulen karena mampu menyimpan persediaan air di batangnya.[5] Batang tanaman ini mampu menampung volume air yang besar dan memiliki bentuk yang bervariasi.', 'Berbagai jenis kaktus telah lama dimanfaatkan manusia sebagai sumber pangan, salah satunya adalah Opuntia.', '365', '3 Tahun', 'Merambat', 1),

('Anggrek', 'anggrek-mature.jpg', 'suku tumbuhan berbunga dengan anggota jenis terbanyak. Jenis-jenisnya tersebar luas dari daerah tropika basah hingga wilayah sirkumpolar, meskipun sebagian besar anggotanya ditemukan di daerah tropika. Kebanyakan anggota suku ini hidup sebagai epifit, terutama yang berasal dari daerah tropika.', 'Anggota suku ini cenderung memiliki organ-organ yang sukulen atau "berdaging": tebal dengan kandungan air yang tinggi. Dengan demikian ia dapat hidup pada kondisi ketersediaan air yang rendah. Air diperoleh dari hujan, tetesan, embun, atau uap air di udara.', 'Kelebihan yang menonjol dari tanaman anggrek terletak pada bunganya yang berwarna-warni serta memiliki aneka corak yang sangat unik. Tidak heran apabila tanaman anggrek menjadi tumbuhan wajib yang selalu ada di kebun bunga.', '7 - 15', '30 - 60', 'Merambat', 1),

-- Buah
('Cherry Tomatoes', 'cherrytomatomature.jpg', 'Tomat berasal dari Amerika. Dibawa kembali ke Eropa dengan penjelajah, ia berpindah-pindah benua dan diterima secara luas oleh Mediterania. Tomat kerdil dikembangkan melalui proyek antarbenua oleh petani tomat pusaka dan dibiakkan tanaman determinan menjadi lebih kecil. Beberapa kultivar juga telah dibudidayakan secara khusus untuk produksi di luar angkasa.', 'Tomat rendah kalori dan tinggi nilai gizi. Tinggi dalam antioksidan likopen dan beta karoten. Sumber serat tidak larut yang baik. Tinggi vitamin C, K dan B9 (folat).', 'Tomat kerdil menumbuhkan tomat ceri. Ini bisa dimakan sebagai camilan, salad, tumis, dengan pasta atau pizza. Ini adalah tambahan yang sempurna untuk makanan apa pun.', '7 - 28', '60', 'Merambat', 3),

('Jalapenos', 'jalapenos-mature.jpg', 'Jenis cabai rawit ini berasal dari Meksiko. Setelah penjelajah bertemu dunia baru, hasil panen menyebar ke seluruh dunia. Orang Spanyol adalah yang pertama menemukannya di Dunia Baru, tetapi Portugis melakukan yang terbaik untuk membawanya ke sepanjang rute perdagangan mereka di seluruh dunia. Di Amerika Utara, diharapkan buah tersebut bepergian dengan perdagangan budak, dan penduduk asli hanya makan varietas liar di Amerika Serikat bagian selatan sebelum ini.', 'Senyawa yang memberi rasa pedas pada cabai disebut capsaicinoid, konsentrasi yang lebih tinggi membuat tanaman lebih pedas. Panas diberi peringkat pada "skala Scoville" yang mengukur setiap lada di unit panas Scoville (SHU), paprika diberi peringkat 0 SHU sedangkan lada terpanas dunia "Carolina Reaper" diberi peringkat 2.200.000 SHU. "Jalapeno" memiliki rating hingga 10.000 SHU.', 'Cabai digunakan untuk menambahkan panas ke hidangan apa pun. Daging dan bijinya bisa dimanfaatkan. Paprika sering kali dikeringkan dan digilin menjadi cabai ini memberi bumbu pada berbagai hidangan, termasuk kari.', '10 -28', '60 - 80', 'Merambat', 3),

('Sweet Peppers', 'sweetpepper-mature.jpg', 'Seperti kerabat mereka, cabai, paprika manis berasal dari Meksiko dengan benih varietas liar yang berasal dari 5.000 SM. Seperti banyak makanan lain yang berasal dari wilayah ini, paprika manis dibawa ke seluruh dunia oleh penjelajah Spanyol dan Portugis yang melakukan perjalanan melalui benua ini.', 'Paprika manis adalah sumber vitamin C. Antioksidan dosis tinggi. Sumber serat pangan, vitamin A, K dan B6. Meningkatkan sistem kekebalan tubuh.', 'Paprika manis tidak bisa digantikan dalam resep tertentu, seperti fajitas atau tumisan. Mereka serbaguna dan mudah digunakan juga. Bisa ditambahkan ke salad untuk menambah rasa dan menghadirkan kesegaran. Tambahkan paprika manis ke pasta, kari, atau sup untuk menambah rasa pada piring Anda.', '10 - 28', '75 - 83', 'Merambat', 3),

('Strawberries', 'strawberry-mature.jpg', 'Stroberi adalah tanaman asli Amerika Utara, dan masyarakat adat menggunakannya dalam banyak hidangan. Penjajah pertama di Amerika mengirim tanaman stroberi asli yang lebih besar kembali ke Eropa pada awal 1600. Varietas lain, juga ditemukan di Amerika Tengah dan Selatan, adalah apa yang oleh penjajah disebut "futilla."', 'Kultivar stroberi klasik menghasilkan satu buah panen besar di awal musim panas, biasanya dari akhir Juni hingga awal Juli. Oleh karena itu, mereka biasa disebut stroberi pembawa Juni dan stroberi bantalan Juni.', 'Stroberi banyak digunakan dalam es krim, mocktail, kue, smoothie, dan makanan penutup lainnya. Mereka juga merupakan bagian dari beberapa resep dan salad.', '14', '50-60', 'Merambat', 3),

('Sugar Snap Peas', 'sugarsnappeas-mature.jpg', 'Meskipun populer di Eropa, kacang polong kemungkinan besar berasal dari Mesir atau Palestina. Pada pertengahan abad ke-19, eksperimen biksu Austria Gregory Mendel dengan kacang polong menghasilkan penemuan yang meletakkan dasar ilmu genetika modern.', 'Kacang polong adalah sumber serat, protein, Vitamin A dan K.', 'Kacang polong adalah bahan kuliner umum di banyak budaya. Tergantung pada kacang polong dan persiapannya, mereka bisa menambahkan semburan gurih ke sup dan pai daging, atau kejutan ringan dan manis pada tumis.', '7 -14', '70', 'Merambat', 3),

-- Sayuran
('Arugula', 'arugula_mature.jpg', 'Juga disebut roquette, salad rocket, garden rocket, atau arugula. Berasal dari Mediterania, arugula telah dibudidayakan selama berabad-abad dan bahkan disebutkan dalam Alkitab.', 'Seperti kebanyakan sayuran berdaun gelap, arugula kaya akan berbagai nutrisi. Tinggi vitamin C, A, K. Tinggi kalsium, kalium dan folat. Sumber zat besi yang baik.', 'Arugula memiliki rasa pedas, sangat serbaguna dan dapat digunakan segar atau dimasak. Ini bagus sebagai dasar dalam salad campuran, dalam sandwich, sebagai topping pizza atau omelet. Tambahkan segar di atas piring saat siap disajikan.', '4 - 21', '30 - 40', 'Merambat', 2),

('Breen Lettuce', 'breenlettuce_mature.jpg', 'Selada dipanen oleh orang Mesir kuno, yang diteruskan ke orang Yunani dan kemudian orang Romawi yang membawanya ke Eropa. Daun Breen memiliki warna dasar hijau zaitun dan urat yang sangat kontras. Mereka juga keras dan renyah dengan rasa yang luar biasa.', 'Varietas ini sangat bergizi karena protein klorofil yang ada di daun hijau tua yang indah. Sebagai varietas selada romaine, ini merupakan sumber yang baik untuk: Vitamin A, C dan K. Sumber yang kaya akan kalsium, fosfor, magnesium dan kalium dan banyak lagi.', 'Salad tidak lengkap jika tidak memiliki sayuran berdaun hijau yang lezat. Itu juga bisa direbus atau dibuat menjadi sup.', '7 - 21', '45', 'Merambat', 2),

('Bulls Blood', 'bullsblood_mature.jpg', 'Bit Darah Banteng dibiakkan di Belanda pada tahun 1840. Itu dibiakkan dari varietas bit tertua yang ada, pusaka Prancis Crapaudine. Varietas pusaka ini telah tersedia untuk tumbuh sejak era Victoria abad ke-19.', 'Rasa bit darah Banteng yang kaya bersahaja dan manis, yang menjadi lebih terasa saat dimasak.', 'Tambahkan bit darah banteng di atas selada dasar untuk menambah kerumitan pada salad normal Anda. Nikmati semburan kecil rasa yang menyenangkan dan warna yang bisa ditambahkan bit darah banteng.', '5 - 10', '35', 'Merambat', 2),

('Buttercrunch', 'buttercrunch_mature.jpg', 'Selada mentega dikatakan berasal dari Mediterania. Varietas lain didasarkan pada hibrida selada asli. Selada mentega yang paling umum adalah selada Bibb dan Boston. Biasanya, rasa mengikuti baunya: jika selada berbau harum, rasanya manis; jika pahit, rasanya akan pahit.', 'Selada sangat tinggi vitamin A dan Kalium, yang mendukung tekanan darah, kesehatan jantung, kekuatan tulang, dan kekuatan otot.', 'Buttercrunch memiliki tekstur yang keras dan renyah dengan rasa yang lembut dan sedikit manis. Gabungkan Buttercrunch dalam salad apa pun untuk menambah kedalaman dan tekstur.', '7 - 10', '46', 'Merambat', 2),

('Butterhead Lettuce', 'butterhead_mature.jpg', 'Penggambaran pertama selada berasal dari Mesir Kuno, yang diteruskan ke orang Yunani dan kemudian orang Romawi yang membawanya ke Eropa. Butterhead ini memiliki daun pembungkus lembut yang bagus dengan banyak rasa.', 'Selada sangat tinggi vitamin A dan Kalium, yang mendukung tekanan darah, kesehatan jantung, kekuatan tulang, dan kekuatan otot.', 'Selada sangat bagus untuk digunakan sebagai bahan dasar salad hijau dan menjadi tambahan yang bagus untuk sandwich dan bungkus.', '7 - 21', '45', 'Merambat', 2),

('Cardinale', 'cardinale_mature.jpg', 'Cardinale Lettuce adalah varietas merah perancis yang menghasilkan mawar terbuka hingga matang sepenuhnya, kemudian melipat dirinya menjadi kepala merah segar yang indah. Warna Cardinale memikat dan intens dan memiliki kebiasaan Romaine yang lebar.', 'Varietas ini sangat bergizi karena protein klorofil yang ada di daun hijau tua yang indah. Ini adalah sumber yang baik dari: Vitamin A, C, K, Kalsium, fosporus, magnessium, kalium, dan banyak lagi.', 'Bagus untuk putus dan makan salad hijau. Daun yang lebih besar dari kepala dapat digunakan sebagai pengganti roti atau tortilla sebagai pembungkus selada.', '7 - 21', '60', 'Merambat', 2),

('Celery', 'celery_mature.jpg', 'Daun dan bunga seledri merupakan bagian dari karangan bunga hias di makam firaun Tutankhamen. Di luar kegunaan kuliner, biji seledri juga telah digunakan sejak jaman dahulu sebagai obat penghilang rasa sakit.', 'Seledri mengandung kalium tertinggi tetapi juga mengandung banyak natrium dan kalsium. Fotokimia kaya akan antioksidan dan flavonoid Butylphthalide, seledri mengandung senyawa yang telah terbukti membantu hipertensi dan menunjukkan kualitas pelindung saraf. Minyak alami dari daun seledri terkadang dapat menyebabkan ruam kulit. Yang terbaik adalah memakai baju lengan panjang di sekitar tanaman ini, atau mencuci tangan dan lengan yang terbuka setelah memegang.', 'Seledri dibudidayakan terutama untuk batangnya, yang berfungsi sebagai bahan pokok di berbagai budaya. Mirepoix dasar rasa kuliner Prancis bersandar pada seledri sebagai pilar di samping bawang dan wortel yang dipotong dadu, yang telah berfungsi sebagai dasar untuk sup, kaldu, semur, dan saus.', '14 - 30', '120 - 210', 'Merambat', 2),

('Endive Lettuce', 'endive_mature.jpg', 'Selada endif secara teknis adalah sawi putih, dan diyakini berasal dari Mesir dan Indonesia. Ini telah dibudidayakan di Eropa sejak abad ke-16.', 'Setelah matang, daun bagian dalam akan tampak pucat karena kurang cahaya. Daun bagian dalam ini sangat empuk dan enak, tanpa rasa pahit.', 'Selada endif biasanya digunakan sebagai salad hijau untuk menambah dimensi pada campuran; Daunnya bisa pahit, jadi sering kali daun bagian dalam yang lembut di jantung tanaman digunakan, karena rasanya lebih manis. Daun luar yang matang juga bisa dimasak dan direbus untuk mengurangi rasa pahit.', '5 - 10', '48', 'Merambat', 2),

('Flashy Trout Back Lettuce', 'backlettuce_mature.jpg', 'Berasal dari Eropa, pusaka romaine ini dibesarkan di Austria dan disebut "Forellenschluss". Jangan khawatir, rasanya tidak seperti ikan! Ini adalah varietas romaine yang sangat berharga yang lebih empuk dan bermentega daripada kebanyakan spesies Cos, dan mendapatkan namanya dari pola bintik-bintik trout di daunnya.', 'Daunnya sangat lembut dan lembut, manis. Hampir di antara selada romaine dan mentega.', 'Sajikan sebagai bahan dasar hijau dalam salad untuk menciptakan pengalaman gourmet yang lezat, dan nikmati daun mentega yang lembut dan manis.', '5 - 10', '27 -55', 'Merambat', 2),

('Green Mustard', 'mustard_mature.jpg', 'Dengan rasa yang lembut, manis dan bersahaja, mizuna green mustard ini relatif tidak dikenal, tetapi hijau luar biasa. Ini telah dibudidayakan di Jepang sejak zaman kuno, tetapi kemungkinan besar berasal dari Cina.', 'Tinggi Serat, rasio nutrisi terhadap kalori, pythonurtrients, vitamin K, A, dan C.', 'Sayuran sawi memiliki rasa tali dan sering dicampur dengan sayuran lain untuk mengurangi rasa saat dimakan segar. Bisa juga dikukus atau dibuat jus. Sayuran sawi tradisional dimasak dengan daging babi. Menambahkan asam, seperti lemon, dan garam akan menyeimbangkan rasa.', '5 - 21', '21 - 40', 'Merambat', 2),

-- Rempah
('Basil', 'basil-mature.jpg', 'Diyakini Basil pertama kali didomestikasi di India dan diperkenalkan di Occident oleh Alexandre the Great pada 300BC. Itu segera diadopsi oleh orang Yunani dan kemudian Romawi sebagai bagian penting dari apa yang disebut diet Mediterania.', 'Basil telah digunakan selama berabad-abad sebagai ramuan aromatik karena rasanya yang luar biasa, tetapi juga bermanfaat bagi kesehatan Anda', 'Basil dibudidayakan terutama untuk batangnya, yang berfungsi sebagai bahan pokok di berbagai budaya. Mirepoix dasar rasa kuliner Prancis bersandar pada seledri sebagai pilar di samping bawang dan wortel yang dipotong dadu, yang telah berfungsi sebagai dasar untuk sup, kaldu, semur, dan saus barat.', '5 - 21 ', '68', 'Merambat', 4),

('Catnip', 'catnip-mature.jpg', 'Catnip adalah sepupu mint dan berasal dari Eropa, Asia, dan Afrika. Nama Latin berasal dari Neptik, kota kuno Etruruan tempat ia dibudidayakan. Secara historis telah digunakan dalam teh obat sebelum impor besar teh Cina menyebar ke seluruh Eropa.', 'Catnip adalah sepupu mint dan berasal dari Eropa, Asia, dan Afrika. Nama Latin berasal dari Neptik, kota kuno Etruruan tempat ia dibudidayakan. Secara historis telah digunakan dalam teh obat sebelum impor besar teh Cina menyebar ke seluruh Eropa.', 'Berikan catnip kepada teman-teman kucing berbulu Anda dan saksikan mereka menikmatinya! Tidak jelas apakah catnip aman untuk manusia: jumlah kecil yang diminum atau dengan teh tidak memberikan efek negatif, tetapi jumlah besar yang dikonsumsi secara oral, atau dalam jumlah berapa pun yang dihisap, berpotensi berbahaya.', '10 - 14', '40 - 50', 'Merambat', 4),

('Chives', 'chives-mature.jpg', 'Anggota keluarga bawang ini berasal dari Asia dan Eropa. Nama botani berasal dari kata Yunani yang berarti "daun bawang seperti buluh"', 'Secara positif menguntungkan sirkulasi darah dan sistem pencernaan,', 'Kucai cocok dipadukan dengan makanan laut dan merupakan hiasan yang bagus untuk sup krim, telur, kentang, atau salad makaroni. Jika tanaman berbunga, ini bisa digunakan untuk salad.', '7 - 21', '75 - 85', 'Merambat', 4),

('Cilantro', 'cilantro-mature.jpg', 'Ketumbar adalah ramuan lain yang disebutkan dalam teks-teks awal termasuk Alkitab dan Malam Arab. Diyakini berasal dari Mediterania, itu meluas ke seluruh Asia dan ke Eropa. Itu adalah salah satu ramuan paling awal yang dibawa ke dunia baru.', 'Tidak tersedia', 'Ketumbar berasal dari keluarga yang sama dengan seledri dan wortel, ketumbar memiliki kadar karotenoid (antioksidan) yang tinggi, yang melindungi sel dari radikal bebas. Ia memiliki tingkat vitamin A yang tinggi, yang baik untuk sistem kekebalan tubuh, penglihatan yang baik dan pertumbuhan anak-anak. Ini juga membantu mengurangi peradangan.', '5 - 21', '50 - 90', 'Merambat', 4),

('Dill', 'dill-mature.jpg', 'Berasal dari Mediterania timur dan Asia barat, telah bertanggal sejak 3000 SM dalam teks Mesir. Kata itu berasal dari kata Norse dylia yang berarti menenangkan atau meninabobokan.', 'Kandungan vitamin A yang tinggi, yang baik untuk sistem kekebalan tubuh, penglihatan yang baik dan tumbuh kembang anak. Dill juga mengandung banyak mikronutrien lain yang membantu dalam pemeliharaan sel Anda.', 'Dill memiliki rasa yang sangat lembut dan bisa menjadi tanaman yang rapuh: gunakan dill Anda sesegera mungkin setelah panen. Ini cocok terutama dengan zucchini, labu musim panas, dan ikan seperti herring dan salmon. Ini juga dapat digunakan saat membuat acar untuk rasa dill.', '7 - 21', '40 - 50', 'Merambat', 4),

('Italian Parsley', 'italianparsley-mature.jpg', 'Peterseli dibudidayakan sejak zaman kuno oleh orang Yunani dan Romawi, tetapi secara tradisional digunakan sebagai ramuan obat dan tidak digunakan dalam masakan kuliner sampai kemudian.', 'Sebuah ramuan dengan daun cerah dan datar, Peterseli mengandung flavonoid dan terpene limonene dan myristicin, selain tinggi fosfor dan kalsium. Ini juga telah terbukti memiliki kualitas anti-hiperlipidemia.', 'Peterseli Italia biasanya dikeringkan dan dimasukkan ke dalam campuran ramuan Italia bersama rosemary, timi, dan oregano. Ini juga dapat digunakan segar, biasanya ditambahkan terlambat ke piring sebagai bumbu terakhir, hiasan, atau topping.', '10 - 30', '70 - 90', 'Merambat', 4),

('Lemongrass', 'lemongrass-mature.jpg', 'Serai adalah tanaman asli Afrika, Asia, dan Oseania yang telah menjadi obat herbal tradisional. Sebagai anggota keluarga rumput, serai biasanya dikeringkan dan diseduh dengan teh, atau dihancurkan dan ditambahkan ke sup atau hidangan.', 'Tidak tersedia', 'Secara tradisional, serai digunakan sebagai penyedap dalam teh atau sup untuk memberikan rasa lemon tanpa rasa getir. Ini dapat diseduh dalam teh obat karena sifat anti-kecemasan, anti-jamur, stimulan, antioksidan dan anti-inflamasi.', '5 - 21', '< 100', 'Merambat', 4),

('Mexican Tarragon', 'mexicantarragon-mature.jpg', 'Juga dikenal sebagai Winter Tarragon, sepupu marigold ini berasal dari Meksiko dan Amerika Tengah. Daun tipis bergigi berbagi rasa tarragon tradisional dengan aroma adas manis, dan bunganya juga bisa dimakan. Winter Tarragon dikatakan telah digunakan sebagai dupa ritual oleh suku Aztec dan sebagai bahan utama dalam teh obat yang digunakan oleh Huichol.', 'Dapat membantu meredakan mual. Sifat antijamur / antibakteri. Meningkatkan mimpi. Menghasilkan terpene cineol, estragole, ocimene, dan phellandrene.', 'Daun dan bunga Tarragon Meksiko kering dapat dimakan dan biasa digunakan sebagai bumbu. Ini bisa menjadi pengganti langsung untuk French Tarragon. Perisa sangat cocok dipadukan dengan lemon, pir, atau lada hitam. Bisa juga digunakan sebagai teh herbal.', '4 - 14', '75 - 85', 'Merambat', 4),

('Mint', 'mint_mature.jpg', 'Mint telah dirujuk secara luas dalam teks dan cerita lama, yang menyiratkan sejarah panjangnya sebagai tanaman budidaya. Itu direferensikan dalam Alkitab dengan saran-saran itu dianggap sangat berharga. Ada juga cerita dari mitologi kuno yang berbicara tentang mint. Awalnya, mint digunakan untuk aromanya yang menyenangkan dan dioleskan ke berbagai bagian tubuh dan digunakan untuk menyegarkan napas dan memutihkan gigi.', 'Mint memiliki khasiat antimikroba sehingga bagus untuk digunakan dalam produk kesehatan mulut karena berkontribusi pada napas segar, mengunyah daun mint saja sudah sangat menyegarkan. Mint dikenal untuk meningkatkan kewaspadaan dan kesadaran.', 'Mint banyak digunakan dalam minuman, baik itu teh atau mojitos, mint membawa rasa segar. Jangan ragu untuk menambahkannya ke salad juga untuk menyempurnakannya dan menghadirkan rasa pedas dan cerah.', '10 - 21', '60 - 75', 'Merambat', 4),

('Oregano', 'oregano_mature.jpg', 'Oregano ditemukan dalam masakan Meksiko dan Mediterania. Meski serupa, varietas ini berasal dari keluarga yang berbeda.', 'Selain memasak, oregano digunakan dalam banyak aplikasi medis. Minyak ini dapat digunakan sebagai antiseptik topikal untuk meredakan sakit tenggorokan dan membantu menangkal masuk angin. Ramuan itu sendiri memiliki banyak manfaat bagi kesehatan. Ini kaya akan antioksidan. dan memiliki sifat anti-inflamasi', 'Oregano menambah rasa pada saus, pizza dan sangat bagus untuk bumbu daging. Tambahkan di akhir memasak untuk memaksimalkan rasa.', '7 - 21', '80 - 90', 'Merambat', 4)

-- ::: CATEGORY :::
CREATE TABLE table_category(
	pk_category_id INT PRIMARY KEY AUTO_INCREMENT,
	category_name VARCHAR(50) 
);
SELECT * FROM table_category;

-- ::: CATEGORY VALUES :::
INSERT INTO table_category(category_name)
VALUES
('Tanaman Hias'),
('Sayuran Hijau'),
('Buah'),
('Rempah');

-- ::: PLANT BREEDING :::
CREATE TABLE table_plant_breeding(
	pk_plant_breeding_id INT AUTO_INCREMENT PRIMARY KEY,
	seed TEXT,
	tuber TEXT,
	young TEXT,
	mature TEXT,
	seed_image VARCHAR(255),
	tuber_image VARCHAR(255),
	young_image VARCHAR(255),
	mature_image VARCHAR(255),
	fk_plant_id INT NOT NULL,

);
SELECT * FROM table_plant_breeding;

-- ::: PLANT BREEDING VALUES :::
INSERT INTO table_plant_breeding(seed, tuber, young, mature, seed_image, tuber_image, young_image, mature_image, fk_plant_id)
VALUES
('Ambil bibit aglaonema segar yang terdapat di pangkal bunga tanaman dewasa, cuci bijinya dalam air campuran H2O atau dalam air asam, siapkan benih campuran perkecambahan biji atau campuran coco-gambut, sebarkan biji di atasnya dan tutupi sangat rapat. enteng. Letakkan di bawah sinar matahari tidak langsung, suhu yang dianjurkan untuk perkecambahan biji adalah 25 - 35 derajat celcius. Diperlukan waktu hingga 45 -60 hari agar benih berkecambah.', 'Tanaman harus memiliki tanah yang lembab, tetapi Anda tidak ingin membiarkannya dalam keadaan basah. Pastikan Anda membiarkan tanah mengering sepenuhnya di antara sesi penyiraman. Setelah benih berkecambah, dan bibit setinggi tiga hingga empat inci, mereka dapat dipindahkan ke wadah terpisah.', 'Saat tanaman tumbuh, jika mulai terlihat kurus, pangkaslah. Ini akan memungkinkannya tumbuh kembali dan bertambah besar dalam penampilan. Anda juga harus memangkasnya jika Anda melihat dedaunan menguning. Jika Anda melihat ujung coklat pada dedaunan, itu berarti tanaman membutuhkan lebih banyak kelembapan. Anda bisa menyemprotnya dengan botol air secara teratur untuk meningkatkan kelembapan.', 'Untuk tanaman desktop yang lebih kecil, kami sarankan untuk merepoting setiap 12-18 bulan sekali. Pilih wadah pot berdiameter 1 "- 2" lebih besar untuk memungkinkan pertumbuhan. Jangan memilih pot yang jauh lebih besar dari sebelumnya karena dapat menahan kelembapan berlebih dan menenggelamkan akar tanaman jika Anda tidak berpengalaman dengan perawatan tanaman dalam ruangan. Jika Anda lebih suka mempertahankan ukuran tanaman Anda saat ini, pindahkan ke wadah yang sama, sediakan tanah baru dan pangkas beberapa akar dan dedaunan. Musim semi atau musim panas adalah waktu yang ideal untuk merepoting karena tanaman berada pada kondisi terkuatnya selama musim tanam.', 'aglaonema-seed.jpg', 'aglaonema-tuber.jpg', 'aglaonema-juvenil.jpg', 'aglaonema-mature.jpg', 1),

('Tanam benih calathea Anda ke dalam kompos yang merupakan campuran 2: 1 dari kompos dan perlit berbasis tanah. Repot di musim semi, setiap beberapa tahun, menjadi pot yang sedikit lebih besar.', 'Calathea adalah salah satu tanaman yang haus dan paling baik bila disiram secara teratur untuk menjaga tanah tetap lembab (tetapi tidak basah). Bergantung pada lingkungan rumah Anda, ini bisa berarti menyiram tanaman calathea Anda setiap beberapa hari, sekali seminggu atau sekali setiap minggu — aturan praktis yang paling penting adalah jangan pernah membiarkan tanah mengering.', 'Selama musim tanam, gunakan pupuk hutan / tanaman tropis yang diencerkan, dan aplikasikan ke tanah setiap tiga minggu atau lebih. Pastikan untuk menyirami tanaman sehari sebelum memberi makan, jika tidak Anda bisa membakar akarnya.', 'Jangan terlalu khawatir jika Anda melihat daun mulai melengkung atau batang Calathea Anda terkulai. Ini adalah tanda-tanda dehidrasi. Penting untuk memperhatikan indikator ini, tetapi tanaman hias yang kuat ini dapat bangkit kembali dalam satu atau dua hari setelah menerima air.', 'calathea-seed.jpg', 'calathea-tuber.jpg', 'calathe-juvenil.jpg', 'calathea-mature.jpg', 2),

('Biarkan benih terendam 12 jam dalam air hangat. Bijinya akan sedikit membengkak. Kemudian tanam benih di sedikit tanah dan jaga agar tanah tetap lembab. Ini membantu jika Anda melakukan ini di ruangan yang hangat, tetapi Anda tidak membutuhkan banyak cahaya jadi jangan letakkan di bawah sinar matahari langsung. Monstera remaja pertama kali mulai tumbuh ke kegelapan. Setelah 10 hari sampai tiga minggu, pohon muda kecil akan muncul dari tanah. Ini akan memakan waktu cukup lama sebelum mendapatkan daun fenestrated yang khas.', 'Setelah bibit mulai muncul, Anda harus mulai menyesuaikan diri dengan udara segar, jadi mulailah memindahkan kubah selama beberapa jam setiap kali dan tingkatkan waktunya di udara terbuka sehingga pada akhirnya mereka dapat menyesuaikan diri sepenuhnya dengan pembukaan.', 'Selama musim tanam, sirami sekitar seminggu sekali, sehingga ada cukup waktu untuk mengeringkan tanah. Karena pertumbuhannya melambat di bulan-bulan yang lebih dingin, kurangi frekuensi penyiraman. Mereka juga bisa mendapatkan keuntungan dari gerimis sesekali atau ditempatkan oleh pelembab udara.', 'Jangan terlalu khawatir jika Anda melihat daun mulai melengkung atau batang Calathea Anda terkulai. Ini adalah tanda-tanda dehidrasi. Penting untuk memperhatikan indikator ini, tetapi tanaman hias yang kuat ini dapat bangkit kembali dalam satu atau dua hari setelah menerima air.', 'monstera-seed.jpg', 'monstera-tuber.webp', 'monstera-juvenil.jpg', 'monstera-mature.jpg', 3),

('Siapkan campuran pot tak dinodai yang lembab (tidak pernah basah) yang dikeringkan dengan baik dan tanam bijinya. Tutupi wadah dengan plastik (kantong ziploc, bungkus plastik, kubah rumah kaca), dan jaga agar tetap lembab, hangat, dan di tempat yang terang benderang. Temperatur harus dijaga sekitar 72 ° F-78 ° F dan kelembaban harus 95-97%.', 'Begonia tuberous sensitif terhadap dingin dan tidak boleh diletakkan di luar ruangan sampai suhu di atas 50 ° F pada malam hari. Untuk mekar lebih awal, mulailah begonia Anda di dalam ruangan, delapan minggu sebelum tanggal embun beku terakhir. Tanam umbi sedalam 1 inci di dalam campuran tumbuh yang lembab dan air secukupnya. Jika tanaman memiliki satu atau dua daun, pindahkan ke dalam pot berukuran 8 "atau gabungkan beberapa di wadah yang lebih besar. Jika Anda menanam langsung ke kebun, posisikan umbi yang berkecambah sekitar 5 "dan tutupi dengan 1" tanah. Siram sedikit sampai tanaman memiliki beberapa set daun. Berhati-hatilah agar tidak terlalu banyak air.', 'Begonia perlu disiram secara konsisten. Namun di antara penyiraman, sebaiknya biarkan satu atau dua inci bagian atas tanah mengering saat disentuh. Periksa begonia Anda sesering mungkin selama cuaca panas dan kering. Jika tanaman mulai menjatuhkan bunga atau layu, itu berarti tanahnya terlalu basah atau terlalu kering. Fokuskan penyiraman Anda agar dedaunan tetap kering sekering mungkin, atau bisa cepat kering setelah disiram. Jangan biarkan air menggenang di piring. Untuk produksi bunga maksimal, pupuk begonia Anda setiap minggu dengan pupuk cair berkekuatan seperempat.', 'Di iklim hangat, begonia akan mulai memasuki masa dormansi pada akhir musim gugur. Pembungaan melambat, dan dedaunan akan mulai menguning. Jika tanaman berada di dalam pot, cukup hentikan penyiraman dan pindahkan pot ke area di mana tanah akan tetap kering sepenuhnya selama musim dingin. Umbi mungkin tertinggal di dalam pot. Jika begonia ada di dalam tanah, Anda harus menggali umbi agar tidak membusuk selama musim dingin. Biarkan mengering di area terlindung lalu simpan hingga musim semi.', 'begonia-seed.jpeg', 'begonia-tuber.jpg', 'begonia-juvenil.webp', 'begonia-mature.jpg', 4),

('Tanaman anthurium harus disimpan dalam pot yang ukurannya hanya sedikit lebih besar dari dirinya, atau akarnya bisa membusuk dan mati. Isi panci 1/3 penuh dengan campuran pot yang sudah disiapkan dan letakkan anthurium di atasnya. Isi dengan campuran pot tambahan di sekeliling sisinya. Biasanya, akar tanaman akan terus tumbuh di atas bahan pot, jadi mulailah dengan tingkat pengisian yang rendah ini untuk menunda kebutuhan memindahkan anthurium Anda ke pot yang lebih besar. ', 'Jaga agar tanah tetap lembab, tetapi tidak basah kuyup. Siram dalam jumlah kecil seperlunya untuk mencegah tanah mengering. Bahkan dalam cuaca panas, tanah tidak perlu disiram lebih dari sekali setiap dua atau tiga hari, karena tanaman tidak menyerap banyak air dari akarnya.', 'Jika tanaman Anda seperti tanaman merambat dan gagal menopang dirinya sendiri, gunakan tiang atau benda kayu lainnya untuk memanjat tanaman. Anda tidak perlu mengeluarkan anthurium epifit dari tanah; itu tidak akan membahayakan mereka.', 'Tanaman anthurium sering membangun gundukan akar di atas permukaan tanah. Kira-kira setahun sekali, atau jika tanah mulai mengering dengan cepat di antara penyiraman, bungkus selapis gambut atau sphagnum moss di atas 1/2 atau 2/3 bagian bawah batang yang terbuka. Jaga lapisan ini tetap lembab dan tunggu akar tumbuh dari bagian batang yang terkubur. Setelah mereka meluas ke seluruh lapisan ini, potong batang dengan pisau bersih dan tajam di dasar campuran tanah, dan pindahkan batang yang terkubur ke dalam pot baru, dengan batang yang terkubur di bawah permukaan tanah.', 'anthurium-seed.jpg', 'anthurium-tuber.jpg', 'anthurium-juvenil.jpg', 'anthurium-mature.jpg', 5),

('Biarkan benih terendam 12 jam dalam air hangat. Bijinya akan sedikit membengkak. Kemudian tanam benih di sedikit tanah dan jaga agar tanah tetap lembab. Ini membantu jika Anda melakukan ini di ruangan yang hangat, tetapi Anda tidak membutuhkan banyak cahaya jadi jangan letakkan di bawah sinar matahari langsung. Monstera remaja pertama kali mulai tumbuh ke kegelapan. Setelah 10 hari sampai tiga minggu, pohon muda kecil akan muncul dari tanah. Ini akan memakan waktu cukup lama sebelum mendapatkan daun fenestrated yang khas.', 'Setelah bibit mulai muncul, Anda sebaiknya mulai menyesuaikannya dengan udara segar, jadi mulailah memindahkan kubah selama beberapa jam setiap kali dan tingkatkan waktunya di udara terbuka sehingga pada akhirnya mereka dapat menyesuaikan diri sepenuhnya untuk dibuka.', 'Selama musim tanam, sirami sekitar seminggu sekali, sehingga ada cukup waktu untuk mengeringkan tanah. Karena pertumbuhannya melambat di bulan-bulan yang lebih dingin, kurangi frekuensi penyiraman. Mereka juga bisa mendapatkan keuntungan dari gerimis sesekali atau ditempatkan oleh pelembab udara.', 'Saat Anda melihat ujung kuning, coklat, atau hitam pada daun Monstera Anda, itu pertanda jelas bahwa daun terlalu banyak air. Hal terbaik yang harus dilakukan saat ini adalah menghentikan penyiraman, tiriskan kelebihan air dari tanah dan kemudian biarkan tanah mengering sebelum menyiram lagi. Jika Anda melihat tanaman Anda telah mengembangkan busuk akar, yang terbaik adalah merepoting tanaman dan meletakkannya di tanah segar (kering).', 'monsteradeliciosa-seed.jpg', 'monsteradeliciosa-tuber.jpg', 'monsteradeliciosa-juvenil.jpg', 'monsteradeliciosa-mature.webp', 6),

('Pilih tanah dengan drainase baik yang tidak mengumpul atau menggumpal saat basah. Campuran setengah tanah sukulen dan setengah perlit populer di kalangan tukang kebun. Saya pribadi menggunakan tanah Violet Afrika yang diubah dengan bahan drainase seperti serpihan kayu dan kerikil akuarium. Jangan ragu untuk bereksperimen dan temukan campuran yang paling cocok untuk Anda.', 'Jaga agar tanah tetap lembab, tetapi tidak basah kuyup. Siram dalam jumlah kecil seperlunya untuk mencegah tanah mengering. Bahkan dalam cuaca panas, tanah tidak perlu disiram lebih dari sekali setiap dua atau tiga hari, karena tanaman tidak menyerap banyak air dari akarnya.', 'Perawatan tanaman untuk tanaman peperomia ini dengan memberi makan secara teratur selama musim tanam. Beri pupuk setiap dua minggu sekali di musim semi dan musim panas, tetapi hentikan di musim gugur dan musim dingin.', 'Menambahkan emulsi ikan, kulit pisang, atau kompos tua ke dalam tanah adalah cara alami dan organik untuk menyuburkan Peperomias.', 'peperomia-seed.jpg', 'peperomia-tuber.jpg', 'peperomia-juvenil.jpg', 'peperomia-mature.jpg', 7),

('Tanam biji keladi dalam campuran pot yang kaya dan dikeringkan dengan baik, seperti campuran tanah dan gambut yang lembab. Tanah kebun juga harus kaya dan dikeringkan dengan baik. PH tanah yang ideal adalah sedikit asam, yaitu 5,5 sampai 6,2.', 'Saat daun muncul di tanaman, sirami seperlunya untuk menjaga tanah tetap lembab. Jangan biarkan tanaman mengering. Hentikan penyiraman tanaman saat daun mulai mati kembali. Lanjutkan penyiraman saat daun muncul kembali musim depan.', 'Pupuk tanaman setiap minggu selama musim tanam dengan pupuk cair atau gunakan pelet lepas lambat.', 'Semakin hangat, semakin baik, untuk tanaman hias caladium. Targetkan 70 derajat Fahrenheit, jika memungkinkan, karena itulah suhu di mana umbi mulai tumbuh. Jaga kelembapan setinggi mungkin.', 'caladium-seed.jpg', 'caladium-tuber.jpg', 'caladium-juvenil.webp', 'caladium-mature.jpg', 8),

('Sebarkan benih kaktus di atas tanah, tetapi jangan menekannya ke dalam tanah. Tutupi sedikit dengan lapisan tipis tanah pasir atau kaktus. Setelah benih ditanam, tutup wadah dengan bungkus plastik. Ini membantu dalam mempertahankan kelembaban sambil membiarkan cahaya mencapai tanah dan bibit yang berkecambah. Tempatkan wadah di dekat jendela yang cerah di mana ia akan mendapatkan sinar matahari yang terang tetapi tidak langsung.', 'Duri kecil mulai terbentuk pada tahap ini. Ini isyarat Anda untuk membiarkan tanaman bernapas dari bungkus plastik atau tutup transparan. Namun, lakukan secara bertahap, biarkan bagian atas terbuka selama beberapa jam di siang hari dan kemudian tambah jamnya. Terus lakukan ini sampai Anda memastikan bahwa kaktus tidak perlu dibungkus.', 'Setelah tanaman Anda tumbuh, Anda bahkan dapat menyiraminya setiap bulan. Selama musim dingin adalah saat kebutuhan air mereka rendah untuk sebagian besar spesies. Saat ini, sirami hanya saat tanaman membutuhkannya. Anda lebih suka memiliki tanaman di bawah air daripada tanaman di atas air karena lebih mudah menangani air yang tidak mencukupi daripada kelebihan air.', 'Jika Anda memutuskan untuk memanen benih sendiri, maka Anda perlu membuang polongnya. Disarankan untuk membuang polong saat masih lembap tapi tidak basah. Benih biasanya berada di dalam polong.', 'cactus-seed.jpg', 'cactus-tuber.jpg', 'cactus-juvenil.jpg', 'cactus-mature.jpg', 9),

('Tanam benih lavender di musim semi, setelah semua kemungkinan embun beku berlalu. Ramuan yang indah dan harum ini merupakan tambahan yang bagus untuk tempat tidur yang ditinggikan, kebun di dalam tanah, dan tumbuh dalam wadah.', 'Beri tanaman muda awal yang baik untuk musim tanam dengan mencampurkan beberapa inci kompos atau bahan organik kaya lainnya ke dalam tanah asli Anda.', 'Lavender bertahan dengan baik dalam kondisi kering, jadi Anda hanya perlu menyiram saat 2 inci teratas tanah kering. Promosikan bunga mekar dengan memberi makan secara teratur dengan makanan nabati yang larut dalam air', 'Panen batang setelah cukup besar untuk digunakan. Hindari memanen lebih dari sepertiga tanaman sekaligus.', 'anggrek-seed.jpg', 'anggrek-tuber.jpg', 'anggrek-juvenil.jpg', 'anggrek-mature.jpg', 10),

('Pilih lokasi di bawah sinar matahari penuh dengan tanah organik lembab kaya yang baik. Pastikan Anda tidak menanam tomat, paprika, terong atau kentang di tempat tidur tahun sebelumnya untuk menghindari masalah penyakit. Siapkan bedengan dengan membalik tanah di bawahnya hingga kedalaman 8 inci. Isi lubang tanam dengan tanah ke atas dan tekan tanah dengan kuat dengan tangan Anda meninggalkan sedikit cekungan di sekitar tanaman untuk menahan air. Siram sampai bersih, sehingga genangan terbentuk di piring yang Anda buat. Ini mengendapkan tanaman, mengeluarkan kantong udara dan menghasilkan kontak akar-ke-tanah yang baik.', 'Kendalikan gulma selama musim tanam. Gulma bersaing dengan tanaman untuk mendapatkan air, ruang, dan nutrisi, jadi kendalikan dengan sering melakukan budidaya atau gunakan mulsa untuk mencegah benih berkecambah. Kendalikan gulma selama musim tanam. Gulma bersaing dengan tanaman untuk mendapatkan air, ruang, dan nutrisi, jadi kendalikan dengan sering melakukan budidaya atau gunakan mulsa untuk mencegah benih berkecambah.', 'Jagalah agar tanaman disiram dengan baik selama musim tanam, terutama selama musim kering. Tanaman membutuhkan sekitar 1-2 inci hujan per minggu selama musim tanam. Gunakan alat pengukur hujan untuk memeriksa apakah Anda perlu menambahkan air. Yang terbaik adalah menyiram dengan sistem tetesan atau tetesan yang mengalirkan air pada tekanan rendah di permukaan tanah. Jika Anda menyiram dengan alat penyiram di atas kepala, sirami di pagi hari agar dedaunan memiliki waktu untuk mengering sebelum malam, untuk meminimalkan masalah penyakit. Jaga tanah tetap lembab tetapi tidak jenuh.', 'Jagalah agar tanaman disiram dengan baik selama musim tanam, terutama selama musim kering. Tanaman membutuhkan sekitar 1-2 inci hujan per minggu selama musim tanam. Gunakan alat pengukur hujan untuk memeriksa apakah Anda perlu menambahkan air. Yang terbaik adalah menyiram dengan sistem tetesan atau tetesan yang mengalirkan air pada tekanan rendah di permukaan tanah. Jika Anda menyiram dengan alat penyiram di atas kepala, sirami di pagi hari agar dedaunan memiliki waktu untuk mengering sebelum malam, untuk meminimalkan masalah penyakit. Jaga tanah tetap lembab tetapi tidak jenuh.', 'cherrytomatoseed.jpg', 'cherrytomatotuber.jpg', 'cherrytomatojuvenil.jpg', 'cherrytomatomature.jpg', 11),

('Taburkan biji ¼ inci dalam formula awal benih. Jaga tanah tetap lembab pada 75 derajat F. Bibit muncul dalam 10-21 hari. Segera setelah bibit muncul, berikan banyak cahaya di ambang jendela yang cerah atau tanam bibit 3-4 inci di bawah lampu tanaman berpendar yang menyala 16 jam per hari, mati selama 8 jam di malam hari. Naikkan lampu saat tanaman tumbuh lebih tinggi. Bola lampu pijar tidak akan berfungsi untuk proses ini karena akan menjadi terlalu panas. Kebanyakan tanaman membutuhkan periode gelap untuk tumbuh, jangan biarkan lampu menyala selama 24 jam.', 'Bibit tidak membutuhkan banyak pupuk, beri makan saat berumur 3-4 minggu menggunakan larutan starter (setengah kekuatan makanan lengkap tanaman hias dalam ruangan) sesuai petunjuk pabrik. Jika Anda menanam dalam sel kecil, Anda mungkin perlu memindahkan bibit ke pot berukuran 3 atau 4 inci saat bibit memiliki setidaknya 3 pasang daun sebelum dipindahkan ke kebun sehingga memiliki cukup ruang untuk mengembangkan akar yang kuat.', 'Kendalikan gulma selama musim tanam. Gulma bersaing dengan tanaman untuk mendapatkan air, ruang, dan nutrisi, jadi kendalikan dengan sering melakukan budidaya atau gunakan mulsa untuk mencegah benih berkecambah. Mulsa juga membantu mempertahankan kelembapan tanah dan mempertahankan suhu tanah yang merata. Hal ini sangat penting untuk paprika karena akarnya mudah rusak saat disiangi, dan hal ini dapat menyebabkan pembusukan ujung bunga.', 'Jagalah agar tanaman disiram dengan baik selama musim tanam, terutama selama musim kering. Tanaman membutuhkan sekitar 1-2 "hujan per minggu selama musim tanam. Gunakan alat pengukur hujan untuk memeriksa apakah Anda perlu menambahkan air. Yang terbaik adalah menyiram dengan sistem tetesan atau tetesan yang mengalirkan air pada tekanan rendah di tanah level Jika Anda menyiram dengan penyiram di atas kepala, sirami pada pagi hari agar dedaunan memiliki waktu untuk mengering sebelum malam, untuk meminimalkan masalah penyakit. Jaga agar tanah tetap lembab tetapi tidak jenuh.', 'jalapenos-seed.jpg', 'jalapenos-tuber.jpg', 'jalapenos-juvenil.webp', 'jalapenos-mature.jpg', 12),

('Taburkan biji ¼ inci dalam formula awal benih.', 'Bibit tidak membutuhkan banyak pupuk, beri makan saat berumur 3-4 minggu menggunakan larutan starter (setengah kekuatan dari makanan lengkap tanaman hias dalam ruangan) sesuai petunjuk pabrik. Jika Anda menanam dalam sel kecil, Anda mungkin perlu memindahkan bibit ke pot berukuran 3 atau 4 inci saat bibit memiliki setidaknya 3 pasang daun sebelum dipindahkan ke kebun sehingga memiliki cukup ruang untuk mengembangkan akar yang kuat.', 'Tetap menyiram tanaman, tetapi jangan biarkan potnya terendam air.', 'Tetap menyiram tanaman, tetapi jangan biarkan potnya terendam air.', 'sweetpepper-seed.jpg', 'sweetpepper-tuber.jpg', 'sweetpepper-juvenil.jpg', 'sweetpepper-mature.jpg', 13),

('Untuk mematahkan dormansi benih, simpan di freezer selama 4-6 minggu sebelum ditanam. Tanam benih 1/4 "di bawah permukaan secara datar; jaga agar tanah cukup hangat dan di bawah sinar matahari yang disaring atau tidak langsung sampai perkecambahan, yang akan memakan waktu 3-4 minggu. Tingkat perkecambahan mungkin rendah secara alami, dan bibit akan tumbuh pada awalnya agak lambat. Pindahkan bibit ke pot gambut individu, dan tanam di luar ruangan segera setelah mereka tumbuh dengan baik.', 'Pupuk bedeng di awal musim panas dan lagi di bulan September dengan pupuk yang seimbang. Jangan beri pupuk jika tanaman sedang berbunga.', 'Tanaman ini menyebar dengan rimpang, biji, dan pelari dan akan dengan cepat membentuk penutup tanah asli; jaga agar pelari dipangkas untuk pertumbuhan yang sehat dan kompak. Setelah beberapa tahun tumbuh, tanaman dapat dibagi di musim gugur untuk tanaman baru dan meningkatkan produksi.', 'Stroberi sangat manis saat dimakan mentah atau diawetkan. Petik buah beri segera setelah matang, karena burung dan hewan kecil suka memakannya. Daun kering tanaman ini membuat teh kaya vitamin y', 'strawberry-seed.jpg', 'strawberry-tuber.jpg', 'strawberry-juvenil.jpg', 'strawberry-mature.jpg', 14),

('Untuk mematahkan dormansi benih, simpan di freezer selama 4-6 minggu sebelum ditanam. Tanam benih 1/4 "di bawah permukaan secara datar; jaga agar tanah cukup hangat dan di bawah sinar matahari yang disaring atau tidak langsung sampai perkecambahan, yang akan memakan waktu 3-4 minggu. Tingkat perkecambahan mungkin rendah secara alami, dan bibit akan tumbuh pada awalnya agak lambat. Pindahkan bibit ke pot gambut individu, dan tanam di luar ruangan segera setelah mereka tumbuh dengan baik.', 'Saat tanaman merambat mulai tumbuh, teralis akan mendukung kebiasaan memanjat mereka; segala jenis penyangga setinggi 5-6 inch sudah cukup.', 'Sebelum mekar, tanaman kacang harus dijaga tetap lembab tetapi tidak basah; setelah mekar, tambahkan sedikit penyiraman. Buang gulma dengan hati-hati agar tidak mengganggu tanaman; mulsa mungkin berguna untuk menjaga kelembapan dan mengendalikan gulma. Sugar Snap toleran terhadap layu, tetapi tidak jamur.', 'Kacang polong terasa paling enak saat dipanen segera setelah polong dan kacang polong diisi; uji kematangannya dengan membaginya menjadi dua. Jika mereka patah dengan rapi, mereka siap untuk dipanen. Sugar Snap peas membeku dengan sangat baik.', 'sugarsnappeas-seed.jpg', 'sugarsnappeas-tuber.jpg', 'sugarsnappeas-juvenil.jpg', 'sugarsnappeas-mature.jpg', 15),

('Ketika semua bahaya embun beku telah berlalu, tabur langsung arugula di bawah sinar matahari penuh atau teduh parsial, 1/4 "dalam dan 3-6" terpisah dalam baris 10 "terpisah. Untuk panen berkelanjutan, tanam tanaman baru setiap 2-3 minggu sampai panasnya musim panas; arugula terasa paling enak bila ditanam sebagai tanaman musim semi atau musim gugur, karena panas berlebih menyebabkan kepahitan pada daun. Untuk tanaman musim gugur, tanam benih Eruca Sativa di akhir musim panas. Arugula juga tumbuh dengan baik sebagai tanaman wadah, atau sepanjang musim dingin di rumah kaca atau bingkai dingin.', 'Jaga tanah tetap lembab, dan aplikasikan selapis mulsa untuk menjaga kelembapan dan mencegah gulma. Waspadai kutu daun dan hama serangga lainnya.', 'Kendalikan gulma selama musim tanam. Gulma bersaing dengan tanaman untuk mendapatkan air, ruang, dan nutrisi, jadi kendalikan dengan sering melakukan budidaya atau gunakan mulsa untuk mencegah benih berkecambah. Hindari mengganggu tanah di sekitar tanaman saat penyiangan.', 'Daun pertama dapat dipanen sekitar dua atau tiga minggu setelah tanam, ketika panjangnya mencapai 2-3 ". Daun yang lebih kecil memiliki tekstur yang lebih empuk dan rasa yang lembut daripada daun yang lebih besar, yang bisa jadi agak pedas dan berasa kuat; potong daun tepat di atas tanah, buang daun terluarnya terlebih dahulu. Pada saat tanaman mengembangkan bunga, daunnya mungkin terlalu pahit untuk dimakan, meskipun bunganya juga bisa dimakan dan menjadi hiasan yang bagus. Daun yang dipanen dengan cepat kehilangan kesegarannya dan seharusnya digunakan dalam waktu sekitar 6 hari Sebelum disimpan, bilas daun hingga bersih untuk menghilangkan pasir dan keringkan dengan baik, dan dapat disimpan di lemari es sampai siap digunakan.', 'arugula_seeds.jpg', 'arugula_tuber.jpg', 'arugula_young.jpg', 'arugula_mature.jpg', 16),

('Biji dapat berkecambah dengan baik di tanah serendah 40 ° F (4 ° C) tetapi seringkali buruk di atas 75 ° F (24 ° C). Taburkan 4–6 biji / inci dalam baris dengan jarak setidaknya 2 ". Tutupi sedikit hingga 1/8" dan kencangkan dengan lembut. Tanah kering harus disiram untuk memastikan kesejukan, kelembapan, dan daya kecambah yang seragam.', 'Jaga agar tanaman selada disiram dengan baik selama periode kering untuk mendorong pertumbuhan yang cepat dan tidak terganggu.', 'Selada berakar dangkal, jadi hindari mengganggu tanah di sekitar tanaman saat penyiangan.', 'Selada Kepala: Potong di pangkal, simpan daun pembungkus untuk penanganan kerugian. Pertimbangkan untuk memotong tanaman bergantian untuk memperpanjang jendela panen, membiarkan tanaman yang tersisa terus tumbuh. Kemas kepala dalam lapisan menghadap ujung potongan. Segera cuci getah dan dinginkan untuk mencegah noda dan dehidrasi. Daun Bayi: Panen sekitar 1 "di atas titik tumbuh ketika daun mencapai panjang panen yang diinginkan, panjang sekitar 3–4". Singkirkan sisa-sisa panenan untuk meningkatkan kualitas pertumbuhan kembali.', 'breenlettuce_seeds.jpg', 'breenlettuce_tuber.jpg', 'breenlettuce_root.jpg', 'breenlettuce_mature.jpg', 17),

('Tabur langsung benih bit Bulls Blood untuk dijual di luar 4 minggu sebelum embun beku terakhir yang diharapkan. Lembutkan benih dengan merendamnya dalam air selama 2 jam, kemudian tanam di bawah sinar matahari penuh dan tanah yang dikeringkan dengan baik. Taburkan 1 inch dalam dan 1 inch terpisah dalam baris 1-2 inch. Taruh tanah di atas benih untuk memastikan kontak yang baik dengan tanah, dan perkecambahan harus dilakukan dalam 5-15 hari. Tambahkan kompos atau bahan organik lainnya untuk pertumbuhan yang sehat. Untuk manfaat penanaman pendamping, tanamlah benih bit Darah Banteng untuk dijual bersama kacang semak, bawang, atau anggota keluarga kubis; hindari menanamnya di dekat kacang polong.', 'Karena setiap "benih" bit menampung hingga 8 benih yang sebenarnya, maka bibit harus diencerkan dengan jarak 3 ". Tanaman yang dicabut cocok untuk tanaman kedua, karena memindahkannya akan membutuhkan waktu sekitar 2 minggu di belakang tanaman aslinya.', 'Berhati-hatilah agar bibit tidak memar saat penyiangan. Mereka menyukai cuaca dingin, dan dapat bertahan hidup pada suhu hingga 25F.', 'Bit memiliki rasa dan kelembutan terbaik saat dipanen dengan diameter antara 1 "dan 3". Setelah menariknya, putar bagian atas sekitar 1 "ke atas batang untuk mencegah bit berdarah. Bit Darah Banteng juga menghasilkan atasan ungu kemerahan yang sangat indah dan lezat yang matang dalam 40 hari. Sepertiga bagian atas dapat dipanen tanpa merusak tanaman.', 'bullsblood_seeds.jpg', 'bullsblood_tuber.jpg', 'bullsblood_young.jpg', 'bullsblood_mature.jpg', 18),

('Ketika semua bahaya embun beku telah berlalu, tabur langsung arugula di bawah sinar matahari penuh atau teduh parsial, 1/4 "dalam dan 3-6" terpisah dalam baris 10 "terpisah. Untuk panen berkelanjutan, tanam tanaman baru setiap 2-3 minggu sampai panasnya musim panas; arugula terasa paling enak bila ditanam sebagai tanaman musim semi atau musim gugur, karena panas berlebih menyebabkan kepahitan pada daun. Untuk tanaman musim gugur, tanam benih Eruca Sativa di akhir musim panas. Arugula juga tumbuh dengan baik sebagai tanaman wadah, atau sepanjang musim dingin di rumah kaca atau bingkai dingin.', 'Jaga agar tanaman selada disiram dengan baik selama periode kering untuk mendorong pertumbuhan yang cepat dan tidak terganggu.', 'Selada berakar dangkal, jadi hindari mengganggu tanah di sekitar tanaman saat penyiangan.', 'Selada mempertahankan rasa manisnya yang terbaik saat dipanen di pagi hari. Untuk microgreens, potong seluruh tanaman di atas permukaan tanah segera setelah mencapai ketinggian 2-3 ". Daun luar tanaman dapat dikumpulkan sepanjang musim sampai batang utama tanaman mulai tumbuh, pada saat itu. daun akan menjadi pahit Untuk memanen seluruh tanaman saat dewasa, potong tepat di atas permukaan tanah; selada terasa paling enak saat segar, tetapi disimpan di lemari es selama sekitar seminggu.', 'buttercrunch_seed.jpg', 'buttercrunch_tuber.jpg', 'buttercrunch_young.jpg', 'buttercrunch_mature.jpg', 19),

('Selada tumbuh baik dalam cuaca dingin, sehingga benih selada Romaine Permata Kecil dapat langsung disemai ketika suhu tanah mencapai setidaknya 35 derajat F, atau segera setelah tanah dapat dikerjakan. Jika suhu tanah naik di atas 75 derajat F, benih menjadi tidak aktif. Tabur langsung benih di tanah yang subur dan sinar matahari penuh, sebarkan setipis mungkin dalam baris dengan jarak 1-2 inch; ketika bibit mulai tumbuh, tipiskan hingga jarak 8-12 inch. Tanaman suksesi dapat ditanam untuk selada segar sepanjang musim di daerah dengan musim panas yang sejuk atau musim dingin yang hangat; hal ini dilakukan dengan menanam tanaman baru setiap 2 minggu. Untuk manfaat tanam pendamping, tanam selada dengan bawang merah, ketimun, atau wortel.', 'Jaga tanaman selada disiram dengan baik selama periode kering untuk mendorong pertumbuhan yang cepat dan tidak terganggu.', 'Selada berakar dangkal, jadi hindari mengganggu tanah di sekitar tanaman saat penyiangan.', 'Selada mempertahankan rasa manisnya yang terbaik saat dipanen di pagi hari. Untuk microgreens, potong seluruh tanaman di atas permukaan tanah segera setelah mencapai ketinggian 2-3 ". Daun luar tanaman dapat dikumpulkan sepanjang musim sampai batang utama tanaman mulai tumbuh, pada saat itu. daun akan menjadi pahit Untuk memanen seluruh tanaman saat dewasa, potong tepat di atas permukaan tanah; selada terasa paling enak saat segar, tetapi disimpan di lemari es selama sekitar seminggu.', 'butterhead_seed.jpg', 'butterhead_tuber.jpg', 'butterhead_young.jpg', 'butterhead_mature.jpg', 20),

('Benih langsung di luar ruangan segera setelah tanah dapat dikerjakan dan ulangi setiap 2 minggu untuk pasokan berkelanjutan. Atau mulai di dalam ruangan pada bulan Maret dan secara berkala setelah itu untuk suksesi transplantasi awal. Kisaran suhu perkecambahan optimal 40–80 ° meskipun banyak varietas tidak akan berkecambah pada suhu tanah di atas 75 ° dan sebagian besar mati di atas 80 °. Penaburan tipis sering dan tanpa ampun sampai jarak akhir 1 inch untuk kepala penuh. Pengumpan nitrogen berat.', 'Jaga tanaman selada disiram dengan baik selama periode kering untuk mendorong pertumbuhan yang cepat dan tidak terganggu.', 'Selada berakar dangkal, jadi hindari mengganggu tanah di sekitar tanaman saat penyiangan.', 'Selada mempertahankan rasa manisnya yang terbaik saat dipanen di pagi hari. Untuk microgreens, potong seluruh tanaman di atas permukaan tanah segera setelah mencapai ketinggian 2-3 ". Daun luar tanaman dapat dikumpulkan sepanjang musim sampai batang utama tanaman mulai tumbuh, pada saat itu. daun akan menjadi pahit Untuk memanen seluruh tanaman saat dewasa, potong tepat di atas permukaan tanah; selada terasa paling enak saat segar, tetapi disimpan di lemari es selama sekitar seminggu.', 'cardinale_seed.jpg', 'cardinale_tuber.jpg', 'cardinale_young.jpg', 'cardinale_mature.jpg', 21),

('Seledri tumbuh paling baik sebagai tanaman musim gugur di sebagian besar iklim, jadi mulailah benih Anda sekitar 10 minggu sebelum musim semi yang membekukan. Rendam semalaman untuk mempercepat perkecambahan, lalu tanam di tempat datar dalam baris 1 "terpisah; jaga tanah tetap lembab dan jauhkan dari sinar matahari langsung. Perkecambahan sering memakan waktu dua atau tiga minggu. Saat tanaman mencapai tinggi sekitar 2", pindahkan mereka ke dalam pot; taruh di taman ketika mereka mencapai tinggi 6 "atau setelah tanggal embun beku terakhir. Beri jarak 6-8" dalam baris terpisah dengan jarak 2-3 inch, letakkan di permukaan tanah yang sama seperti di pot. Pastikan tanah diperkaya dengan kompos atau bahan organik lainnya. Untuk manfaat pendamping tanam, tanam seledri dengan tomat, kembang kol, atau kol.', 'Kendalikan gulma selama musim tanam. Gulma bersaing dengan tanaman untuk mendapatkan air, ruang, dan nutrisi, jadi kendalikan dengan sering melakukan budidaya atau gunakan mulsa untuk mencegah benih berkecambah. Hindari mengganggu tanah di sekitar tanaman saat penyiangan.', 'Jaga agar tanaman disiram dengan baik selama periode kering untuk mendorong pertumbuhan yang cepat dan tidak terputus. Seledri tumbuh paling baik jika memiliki kelembapan yang konstan, dan suhu yang relatif dingin. Itu tidak dapat mentolerir kondisi panas tinggi.', 'Potong seluruh tanaman di permukaan tanah segera setelah mencapai diameter 3 ", atau buang batang luar individu saat tingginya mencapai 12". Daun seledri juga bisa digunakan, seperti untuk penyedap seperti herba atau salad.', 'celery_seeds.jpg', 'celery_tuber.jpg', 'celery_young.jpg', 'celery_mature.jpg', 22),

('Endive merupakan tanaman musim gugur yang sangat baik, karena embun beku mempermanis rasanya, dan panas berlebih menyebabkan kepahitan pada daun atau percikan. Untuk tanaman awal musim panas, taburkan biji selada romaine endive roti gula hijau di dalam ruangan 2 bulan sebelum musim semi yang membekukan; tabur dengan kedalaman 1/4 ". Saat bibit muncul, tipiskan hingga terpisah 6". Empat minggu setelah tanam, pisahkan di luar 12 ". Untuk tanaman musim gugur, langsung tabur benih selada romaine romaine roti gula hijau pada bulan Juli. Sirami tanah, sebarkan benih di permukaan, lalu tutupi dengan 1/3" tanah . Saat bibit muncul, tipiskan hingga 12 "ke segala arah. Area dengan musim dingin yang lebih hangat mungkin dapat ditanami tanaman musim dingin sekitar dua bulan sebelum embun beku terakhir.', 'Jaga tanah tetap lembab untuk mencegah ketangguhan atau rasa pahit, tetapi hindari membasahi daun karena dapat menyebabkan pembusukan. Mulsa membantu menjaga kelembapan dan mengendalikan gulma.', 'Rebus daun sekitar 2-3 minggu sebelum panen dengan mengikat daun terluar untuk menaungi bagian dalam tanaman. Pastikan daun tanaman benar-benar kering sebelum mengikatnya, atau pembusukan dapat terjadi.', 'Potong daun individu untuk baby green segera setelah ukurannya mencapai ukuran yang baik untuk dimakan. Potong kepala dewasa di pangkalan. Untuk pertumbuhan tambahan, sisakan satu inci batang.', 'endive_seeds.jpg', 'endive_tuber.jpg', 'endive_young.jpg', 'endive_mature.jpg', 23),

('Biji dapat berkecambah dengan baik di tanah serendah 40 ° F (4 ° C) tetapi seringkali buruk di atas 75 ° F (24 ° C). Taburkan 4–6 biji / inci dalam baris dengan jarak setidaknya 2 ". Tutupi sedikit hingga 1/8" dan kencangkan dengan lembut. Tanah kering harus disiram untuk memastikan kesejukan, kelembapan, dan daya kecambah yang seragam.', 'Jaga tanah tetap lembab untuk mencegah ketangguhan atau rasa pahit, tetapi hindari membasahi daun karena dapat menyebabkan pembusukan. Mulsa membantu menjaga kelembapan dan mengendalikan gulma.', 'Rebus daun sekitar 2-3 minggu sebelum panen dengan mengikat daun terluar untuk menaungi bagian dalam tanaman. Pastikan daun tanaman benar-benar kering sebelum mengikatnya, atau pembusukan dapat terjadi.', 'Kepala Selada: Potong di pangkal, simpan daun pembungkus untuk penanganan kerugian. Pertimbangkan untuk memotong tanaman bergantian untuk memperpanjang jendela panen, membiarkan tanaman yang tersisa terus tumbuh. Kemas kepala dalam lapisan menghadap ujung potongan. Segera cuci getah dan dinginkan untuk mencegah noda dan dehidrasi. Daun Bayi: Panen sekitar 1 "di atas titik tumbuh ketika daun mencapai panjang panen yang diinginkan, panjang sekitar 3–4". Singkirkan sisa-sisa panenan untuk meningkatkan kualitas pertumbuhan kembali.', 'backlettuce_seeds.jpg', 'backlettuce_tuber.jpg', 'backlettuce_young.jpg', 'backlettuce_mature.jpg', 24),

('Taburkan ¼ "dalam 3–5 biji / inci, dalam baris setidaknya 2" terpisah dari awal musim semi hingga pertengahan musim panas. Dapat disemai hingga akhir musim gugur jika melewati musim dingin di terowongan tinggi atau bangunan terlindung lainnya.', 'Kendalikan gulma selama musim tanam. Gulma bersaing dengan tanaman untuk mendapatkan air, ruang, dan nutrisi, jadi kendalikan dengan sering melakukan budidaya atau gunakan mulsa untuk mencegah benih berkecambah. Hindari mengganggu tanah di sekitar tanaman saat penyiangan.', 'Jaga agar tanaman disiram dengan baik selama periode kering untuk mendorong pertumbuhan yang cepat dan tidak terputus. Tanaman membutuhkan sekitar 1 inci hujan per minggu selama musim tanam. Gunakan alat pengukur hujan untuk memeriksa apakah Anda perlu menambahkan air. Cara terbaik adalah menyiram dengan sistem tetesan atau tetesan yang mengalirkan air pada tekanan rendah di permukaan tanah. Jika Anda menyiram dengan alat penyiram di atas kepala, sirami di pagi hari agar dedaunan memiliki waktu untuk mengering sebelum malam, untuk meminimalkan masalah penyakit. Jaga tanah tetap lembab tetapi tidak jenuh.', 'Panen dengan pisau saat daun mencapai ukuran yang diinginkan, sekitar 3–6 ". Pastikan untuk memotong di atas pelat dasar untuk panen potong-dan-datang-lagi. Potong lagi saat tanaman mencapai ukuran yang diinginkan, 5–14 hari tergantung varietas dan musim.', 'mustard_seeds.jpg', 'mustard_tuber.jpg', 'mustard_young.jpg', 'mustard_mature.jpg', 25),

('Karena kemangi tumbuh subur di cuaca hangat, biji selasih tumbuh paling baik saat tanah menjadi hangat dan tidak ada kemungkinan beku. Tukang kebun dengan musim tanam yang pendek mungkin ingin memulai benih mereka di dalam ruangan 3-4 minggu sebelum tanggal embun beku terakhir, menaburnya tipis-tipis di flat dan memberikan panas untuk mempercepat perkecambahan. Pindahkan dengan jarak 15-18 ". Untuk menabur langsung, tanam biji selasih berukuran 1/4" di dalam tanah yang subur dan di bawah sinar matahari penuh, pisahkan hingga jarak 15-18 "saat bibit berkembang. Kemangi juga tumbuh dengan baik di dalam ruangan atau sebagai tanaman kontainer.', 'Basil tumbuh subur di tanah yang memiliki drainase baik, namun sering membutuhkan air. Jika cuaca turun di bawah 50 derajat, berikan perlindungan. Saat benih selasih tumbuh, pemangkasan akan membantunya berkembang menjadi tanaman yang lebat dan sehat; pemangkasan juga penting karena begitu tanaman berbunga, ia akan mulai layu dan mati.', 'Untuk memangkas tanaman, buang beberapa set daun teratas pada setiap batang, berhati-hatilah untuk menyisakan setidaknya tiga set daun di bagian bawah.', 'Daun kemangi dapat dipanen segera setelah mencapai ketinggian 6-8 ". Waktu terbaik untuk memanen daun adalah pagi hari setelah embun mengering. Setelah tanaman tumbuh, panen sering kali benar-benar meningkatkan produksi; begitu bunganya tumbuh subur. Namun, daun menjadi pahit sesuai selera. Buang satu daun atau bagian batang sesuai kebutuhan, dengan hati-hati menyisakan setidaknya tiga set daun pada panjang batang untuk pertumbuhan yang sehat. Saat memanen, jepit langsung batangnya di atas daun daun berikutnya. Kemangi segar akan disimpan selama beberapa hari pada suhu kamar, batangnya dalam segelas air; jika didinginkan cenderung layu dan berubah warna menjadi coklat. Kemangi juga membeku dan mengering dengan baik. Karena kandungan airnya kemangi sangat tinggi dan mudah berjamur, metode terbaik untuk mengeringkan adalah dehidrator, oven, atau tempat yang kering dan hangat serupa.', 'basil-seed.png', 'basil-tuber.jpg', 'basil-juvenil.jpg', 'basil-mature.jpg', 26),

('Catnip tumbuh paling baik di tanah yang dikeringkan dengan baik dan sinar matahari penuh, meskipun dapat mentolerir hampir semua tanah. Langsung tabur benih setelah musim semi yang membeku, tanam dengan jarak 1/4 "dalam baris dengan jarak 20"; saat bibit muncul, pisahkan tipis hingga 12-15 ".', 'Segera setelah bibit muncul, berikan banyak cahaya di ambang jendela yang cerah atau tanam bibit 3-4 inci di bawah lampu tanaman berpendar yang menyala 16 jam per hari, mati selama 8 jam di malam hari. Naikkan lampu saat tanaman tumbuh lebih tinggi. Bola lampu pijar tidak akan berfungsi untuk proses ini karena akan menjadi terlalu panas. Kebanyakan tanaman membutuhkan periode gelap untuk tumbuh, jangan biarkan lampu menyala selama 24 jam.', 'Jepit bagian atas tanaman muda untuk mendorong pertumbuhan lebat. Untuk mendorong pertumbuhan baru, potong tanaman sekitar satu setengah setelah musim bunga mekar pertama.', 'Panen daun atau batang utuh sesuai kebutuhan segera setelah tanaman dewasa tetapi sebelum daun mulai menguning. Panen pada pagi hari sebelum panas terik tetapi setelah embun mengering. Potong seluruh batang di pangkal tanaman. Kupas daun dari batangnya.', 'catnip-seed.jpg', 'catnip-tuber.jpg', 'catnip-juvenil.jpg', 'catnip-mature.jpg', 27),

('Tabur langsung di tanah rata-rata di bawah sinar matahari penuh setelah semua bahaya embun beku. Di daerah bebas es, tabur dari musim gugur hingga awal musim semi. Hapus gulma dan kerjakan bahan organik ke dalam 6-8 inci atas tanah; lalu ratakan dan halus. Taburkan benih secara merata dan tutupi dengan fine inci tanah halus. Kencangkan tanah dengan ringan dan jaga agar tetap lembab. Bibit akan muncul dalam 7-14 hari. Terpisah tipis hingga 3 inci saat bibit tingginya 1-2 inci.', 'Kendalikan gulma selama musim tanam. Gulma bersaing dengan tanaman untuk mendapatkan air, ruang, dan nutrisi, jadi kendalikan dengan sering melakukan budidaya atau gunakan mulsa untuk mencegah benih berkecambah.', 'Jagalah agar tanaman disiram dengan baik selama musim tanam, terutama selama musim kering. Tanaman membutuhkan sekitar 1 inci hujan per minggu selama musim tanam. Yang terbaik adalah menyiram dengan sistem tetesan atau tetesan yang mengalirkan air pada tekanan rendah di permukaan tanah. Jika Anda menyiram dengan alat penyiram di atas kepala, sirami di pagi hari agar dedaunan memiliki waktu untuk mengering sebelum malam, untuk meminimalkan masalah penyakit. Jaga tanah tetap lembab tetapi tidak jenuh.', 'Potong daun ke tanah setelah mekar untuk mendorong produksi daun baru yang segar. Untuk kucai, jepit bunga yang dihabiskan di musim gugur untuk mencegah penaburan sendiri yang merajalela. Bagilah rumpun setiap 3 hingga 4 tahun untuk menjaganya tetap kuat.', 'chives-seed.jpg', 'chives-tuber.jpg', 'chives-juvenil.jpg', 'chives-mature.jpg', 28),

('Meskipun ketumbar tumbuh subur di tanah yang subur, dikeringkan dengan baik, dan terkena sinar matahari penuh, ketumbar akan mentolerir sedikit keteduhan. Tukang kebun di iklim hangat mungkin paling berhasil dengan menanam benih tanaman ketumbar ketumbar dengan menanamnya kapan saja dari September hingga Februari, karena ini adalah tanaman cuaca dingin. Itu juga dapat ditanam sesegera mungkin di musim semi, atau setelah musim panas sebagai tanaman musim gugur. Karena ramuan ini tidak dapat dipindahkan dengan baik, tabur langsung benih 1/2 "dalam baris dengan jarak 18-20"; tipiskan bibit menjadi jarak 12 "segera setelah mereka mengembangkan daun. Perkecambahan biasanya membutuhkan waktu 2-3 minggu. Untuk panen berkelanjutan, tanam tanaman baru setiap 2-3 minggu. Ketumbar tidak cocok sebagai tanaman kontainer karena ukurannya yang besar. akar tunggang.', 'Kendalikan gulma selama musim tanam. Gulma bersaing dengan tanaman untuk mendapatkan air, ruang, dan nutrisi, jadi kendalikan dengan sering melakukan budidaya atau gunakan mulsa untuk mencegah benih berkecambah.', 'Jagalah agar tanaman disiram dengan baik selama musim tanam, terutama selama musim kering. Tanaman membutuhkan sekitar 1 inci hujan per minggu selama musim tanam. Yang terbaik adalah menyiram dengan sistem tetesan atau tetesan yang mengalirkan air pada tekanan rendah di permukaan tanah. Jika Anda menyiram dengan alat penyiram di atas kepala, sirami di pagi hari agar dedaunan memiliki waktu untuk mengering sebelum malam, untuk meminimalkan masalah penyakit. Jaga tanah tetap lembab tetapi tidak jenuh.', 'Panen daun ketumbar sebelum batang bunga tumbuh. Panen biji ketumbar setelah warnanya berubah dari hijau menjadi abu-abu kecokelatan. Daunnya bisa dikeringkan atau dibekukan. Gunakan mereka segar dalam hidangan Asia dan Meksiko; rasanya lebih enak daripada baunya.', 'cilantro-seed.jpg', 'cilantro-tuber.jpg', 'cilantro-juvenil.jpg', 'cilantro-mature.jpg', 29),

('Karena adas tidak dapat ditransplantasikan dengan baik, penaburan langsung adalah metode terbaik untuk penanaman; tanam setelah embun beku musim semi terakhir di tanah yang subur, subur, dan sinar matahari penuh. Taburkan biji dill Bouquet 1/4 "dalam dan 8" terpisah dalam baris 18 "terpisah, menipis hingga 12-15" saat bibit berkembang.', 'Jaga agar bibit tetap disiram, dan gunakan selapis mulsa untuk menjaga kelembapan dan mengendalikan gulma. Karena tanaman dewasa dapat melesat jika tanah mengering, jaga agar tanah tetap lembab.', 'Jagalah agar tanaman disiram dengan baik selama musim tanam, terutama selama musim kering. Tanaman membutuhkan sekitar 1 inci hujan per minggu selama musim tanam. Yang terbaik adalah menyiram dengan sistem tetesan atau tetesan yang mengalirkan air pada tekanan rendah di permukaan tanah. Jika Anda menyiram dengan alat penyiram di atas kepala, sirami di pagi hari agar dedaunan memiliki waktu untuk mengering sebelum malam, untuk meminimalkan masalah penyakit. Jaga tanah tetap lembab tetapi tidak jenuh.', 'Panen daun adas seperti pakis sesuai kebutuhan segera setelah mencapai ukuran yang diinginkan; waktu terbaik untuk memanen adalah pagi hari setelah embun mengering. Kualitas puncak daun terjadi ketika bunga-bunga kecil di kepala mulai terbuka. Meskipun rasa paling enak saat daun masih segar, daun ini dapat disimpan di lemari es hingga 2 hari, dikeringkan, atau dibekukan. Kepala dapat dikumpulkan segera setelah sebagian besar bunga kecil telah mekar. Untuk mengumpulkan biji Anethum Graveolens, biarkan kepala mengering pada batang hingga bijinya matang menjadi coklat muda. Potong kepala benih dan sebarkan hingga selesai dikeringkan, lalu gosok perlahan untuk membuang bijinya. Simpan benih dalam wadah kedap udara.', 'dill-seed.jpg', 'dill-tuber.jpg', 'dill-juvenil.jpg', 'dill-mature.jpg', 30),

('Kebanyakan tukang kebun menabur benih peterseli di dalam ruangan agar tanaman dapat tumbuh lebih cepat; rendam benih semalaman, lalu tanam dengan kedalaman 1/4 "dan pertahankan pada suhu 65-70 derajat F. Karena peterseli memiliki kebiasaan perkecambahan yang lambat, jangan berharap untuk melihat kecambah selama 3-5 minggu. Jaga agar tanah tetap merata lembab Pindahkan bibit ketika suhu tanah di luar ruangan rata-rata mencapai 60 derajat F, beri jarak 6 "di bawah sinar matahari penuh atau teduh parsial. Peterseli juga tumbuh dengan baik sebagai tanaman kontainer.', 'Peterseli memiliki akar yang dangkal, dan tidak boleh dibiarkan mengering dalam waktu lama. Mulsa untuk membantu menjaga kelembapan dan mengendalikan gulma.', 'Jagalah agar tanaman disiram dengan baik selama musim tanam, terutama selama musim kering. Tanaman membutuhkan sekitar 1 inci hujan per minggu selama musim tanam. Gunakan alat pengukur hujan untuk memeriksa apakah Anda perlu menambahkan air. Cara terbaik adalah menyiram dengan sistem tetesan atau tetesan yang mengalirkan air pada tekanan rendah di permukaan tanah. Jika Anda menyiram dengan alat penyiram di atas kepala, sirami di pagi hari agar dedaunan memiliki waktu untuk mengering sebelum malam, untuk meminimalkan masalah penyakit. Jaga tanah tetap lembab tetapi tidak jenuh.', 'Meskipun sebagian besar varietas peterseli dapat bertahan di bawah suhu nol saat mulsa dengan baik, metode lain untuk mengatasi musim dingin adalah dengan menggali seluruh tanaman, memotong batangnya menjadi 1 ", dan menanam biji peterseli Raksasa Italia di pasir; simpan di dalam 32-40 lokasi derajat F sampai penanaman kembali pada musim semi. Perhatikan kepala benih peterseli raksasa Italia yang sedang berkembang dengan hati-hati, karena cenderung mudah pecah; petik masing-masing saat sudah kering dan matang. Waktu pengeringan tambahan mungkin diperlukan. Bersihkan benih dengan menggosok kepala melalui a menyaring atau mengocoknya Simpan biji peterseli raksasa Italia di tempat sejuk dan kering hingga 4 tahun.', 'italianparsley-seed.jpg', 'italianparsley-tuber.jpg', 'italianparsley-juvenil.jpg', 'italianparsley-mature.jpg', 31),

('Meskipun sebagian besar varietas peterseli dapat bertahan di bawah suhu nol saat mulsa dengan baik, metode lain untuk mengatasi musim dingin adalah dengan menggali seluruh tanaman, memotong batangnya menjadi 1 ", dan menanam biji peterseli Raksasa Italia di pasir; simpan di dalam 32-40 lokasi derajat F sampai penanaman kembali pada musim semi. Perhatikan kepala benih peterseli raksasa Italia yang sedang berkembang dengan hati-hati, karena cenderung mudah pecah; petik masing-masing saat sudah kering dan matang. Waktu pengeringan tambahan mungkin diperlukan. Bersihkan benih dengan menggosok kepala melalui a menyaring atau mengocoknya Simpan biji peterseli raksasa Italia di tempat sejuk dan kering hingga 4 tahun.', 'Mulsa juga membantu mempertahankan kelembapan tanah dan mempertahankan suhu tanah yang merata. Untuk tumbuhan, mulsa organik dari kulit kayu tua atau daun parut memberikan tampilan alami pada bedengan dan akan memperbaiki tanah saat rusak seiring waktu. Selalu jauhkan mulsa dari batang tanaman untuk mencegah kemungkinan busuk.', 'Jagalah agar tanaman disiram dengan baik selama musim tanam, terutama selama musim kering. Tanaman membutuhkan sekitar 1 inci hujan per minggu selama musim tanam. Gunakan alat pengukur hujan untuk memeriksa apakah Anda perlu menambahkan air. Cara terbaik adalah menyiram dengan sistem tetesan atau tetesan yang mengalirkan air pada tekanan rendah di permukaan tanah. Jika Anda menyiram dengan alat penyiram di atas kepala, sirami di pagi hari agar dedaunan memiliki waktu untuk mengering sebelum malam, untuk meminimalkan masalah penyakit. Jaga tanah tetap lembab tetapi tidak jenuh.', 'Panen pucuk daun saat tingginya sekitar 10-12 inci. Daunnya bisa digunakan untuk membumbui teh dan sup. Kumpulkan batang di akhir musim sebelum embun beku ketika diameternya sekitar setengah inci. Jepret batang di pangkalan mereka. Hanya bagian bawah batang yang bisa dimakan. Gunakan bagian dalam batang, potong cincin atau potongan dan bagian yang memar untuk melepaskan rasanya. Potongan batang yang dipotong dapat dibekukan dalam nampan es batu untuk digunakan di masa mendatang. Sereh bisa dikeringkan untuk disimpan. Tempatkan batang dalam oven 120 derajat F selama 2-3 jam, dengan pintu oven terbuka. Periksa untuk memastikan batangnya tidak hangus.', 'lemongrass-seed.jpg', 'lemongrass-tuber.jpg', 'lemongrass-juvenil.jpg', 'lemongrass-mature.jpg', 32),

('Jaga suhu pada 65-70 derajat F dan jauhkan dari sinar matahari langsung sampai perkecambahan. Jika tidak ada kemungkinan embun beku, pindahkan bibit dengan jarak 24-30 ". Tarragon tumbuh paling baik di tanah yang kering atau dikeringkan dengan baik dan sinar matahari penuh atau tempat teduh. Penaburan langsung dimungkinkan tetapi agak sulit karena bijinya yang sangat kecil. Tanaman ini menarik kupu-kupu dan lebah, serta mengusir serangga dan rusa berbahaya.Tarragon juga dapat ditanam dari stek atau bagian akar, meskipun menanamnya dalam wadah tidak disarankan karena ukuran dan kebiasaan pertumbuhan tanaman yang luas.', 'Tarragon mengembangkan rasa penuhnya saat dibiarkan sendiri di tanah kering dan sinar matahari yang melimpah. Tanaman dewasa mentolerir kekeringan dengan sangat baik, dan tidak boleh disiram kecuali jika kondisi kekeringan terus berlanjut. Penyiraman yang berlebihan dapat menyebabkan busuk akar serta penyakit jamur lainnya.', 'Untuk pertumbuhan yang sehat, pangkas tanaman.', 'Panen daun segar segera setelah tanaman mencapai ketinggian 6 ". Waktu terbaik untuk memanen adalah pagi hari setelah embun mengering. Seluruh batang atau seluruh tanaman juga dapat dipotong sedikit di atas permukaan tanah, karena ini akan mendorong tanaman baru. pertumbuhan Untuk mengeringkan seluruh batang, potong dan ikat, gantung terbalik di tempat yang kering dan gelap selama kurang lebih 2 minggu. Kupas daun dari batang dan simpan di tempat sejuk dan kering.', 'mexicantarragon-seed.jpg', 'mexicantarragon-tuber.jpg', 'mexicantarragon-juvenil.jpg', 'mexicantarragon-mature.jpg', 33),

('Tabur langsung di awal musim semi segera setelah tanah bisa dikerjakan. Karena benih kecil ini membutuhkan cahaya untuk berkecambah, tanamlah di dekat permukaan tanah. Jaga tanah tetap lembab sampai berkecambah.', 'Jaga agar bibit yang sedang berkembang tetap lembab, dan tipiskan atau beri jarak jika perlu. Tanaman dewasa bisa menjadi invasif; untuk mencegah penyebaran, baik tumbuh sebagai tanaman kontainer atau singkirkan tanaman muda yang berkembang.', 'Jagalah agar tanaman disiram dengan baik selama musim tanam, terutama selama musim kering. Tanaman membutuhkan sekitar 1 inci hujan per minggu selama musim tanam. Gunakan alat pengukur hujan untuk memeriksa apakah Anda perlu menambahkan air. Cara terbaik adalah menyiram dengan sistem tetesan atau tetesan yang mengalirkan air pada tekanan rendah di permukaan tanah. Jika Anda menyiram dengan alat penyiram di atas kepala, sirami di pagi hari agar dedaunan memiliki waktu untuk mengering sebelum malam, untuk meminimalkan masalah penyakit. Jaga tanah tetap lembab tetapi tidak jenuh.', 'Untuk daun mint segar, pilih daun di pagi hari sebelum embun mengering. Kualitas daun paling baik sebelum tanaman berbunga; untuk memperpanjang masa panen, cabut tunas saat mulai berkembang.', 'mint_seed.jpg', 'mint_tuber.jpg', 'mint_young.jpg', 'mint_mature.jpg', 34),

('Tabur langsung di tanah rata-rata di bawah sinar matahari penuh setelah semua bahaya embun beku ketika suhu tetap di atas 45 derajat F. Singkirkan gulma dan kerjakan bahan organik di atas 6-8 inci tanah; lalu ratakan dan halus. Taburkan benih secara merata dan tutupi dengan tanah halus. Kencangkan tanah dengan ringan dan jaga agar tetap lembab. Bibit akan tumbuh dalam 10-21 hari. Pisahkan tipis hingga 12 inci saat bibit memiliki tiga set daun.', 'Oregano sebenarnya memiliki rasa paling beraroma jika dibiarkan, dengan sedikit penyiraman dan tanpa pemupukan.', 'Jagalah agar tanaman disiram dengan baik selama musim tanam, terutama selama musim kering. Tanaman membutuhkan sekitar 1 inci hujan per minggu selama musim tanam. Gunakan alat pengukur hujan untuk memeriksa apakah Anda perlu menambahkan air. Cara terbaik adalah menyiram dengan sistem tetesan atau tetesan yang mengalirkan air pada tekanan rendah di permukaan tanah. Jika Anda menyiram dengan alat penyiram di atas kepala, sirami di pagi hari agar dedaunan memiliki waktu untuk mengering sebelum malam, untuk meminimalkan masalah penyakit. Jaga tanah tetap lembab tetapi tidak jenuh.', 'Daun segar dapat dipanen segera setelah tanaman mencapai ketinggian 6 ". Waktu terbaik untuk memanen daun adalah pagi hari setelah embun mengering. Panen seluruh batang dengan memotongnya setidaknya 1" di atas tanah untuk memungkinkan tumbuh baru pertumbuhan. Daun segar akan disimpan di lemari es selama sekitar lima hari, tetapi juga bisa dibekukan atau dikeringkan. Karena panas cenderung merusak rasa oregano, oregano harus ditambahkan ke makanan panas segera sebelum disajikan. Tidak seperti kebanyakan herba, daun oregano kering cenderung memiliki rasa yang lebih kuat daripada yang segar.', 'oregano_seed.jpg', 'oregano_tuber.jpg', 'oregano_young.jpg', 'oregano_mature.jpg', 35)

-- ::: WEIGHT :::
CREATE TABLE table_weight(
	pk_weight_id INT AUTO_INCREMENT PRIMARY KEY,
	seed_weight INT,
	tuber_weight INT,
	young_weight INT,
	mature_weight INT,
	
	fk_plant_breeding_id INT NOT NULL,
	fk_price_list_id INT NOT NULL
);
SELECT * FROM table_weight;

-- ::: WEIGHT VALUES :::
INSERT INTO table_weight(seed_weight, tuber_weight, young_weight, mature_weight, fk_plant_breeding_id, fk_price_list_id)
VALUES
(100, 500, 1500, 2000, 1, 1),
(100, 500, 1500, 2000, 2, 2),
(100, 500, 1500, 2000, 3, 3),
(100, 500, 1500, 2000, 4, 4),
(100, 500, 1500, 2000, 5, 5),
(100, 500, 1500, 2000, 6, 6),
(100, 500, 1500, 2000, 7, 7),
(100, 500, 1500, 2000, 8, 8),
(100, 500, 1500, 2000, 9, 9),
(100, 500, 1500, 2000, 10, 10),
(100, 500, 1500, 2000, 11, 11),
(100, 500, 1500, 2000, 12, 12),
(100, 500, 1500, 2000, 13, 13),
(100, 500, 1500, 2000, 14, 14),
(100, 500, 1500, 2000, 15, 15),
(100, 500, 1500, 2000, 16, 16),
(100, 500, 1500, 2000, 17, 17),
(100, 500, 1500, 2000, 18, 18),
(100, 500, 1500, 2000, 19, 19),
(100, 500, 1500, 2000, 20, 20),
(100, 500, 1500, 2000, 21, 21),
(100, 500, 1500, 2000, 22, 22),
(100, 500, 1500, 2000, 23, 23),
(100, 500, 1500, 2000, 24, 24),
(100, 500, 1500, 2000, 25, 25),
(100, 500, 1500, 2000, 26, 26),
(100, 500, 1500, 2000, 27, 27),
(100, 500, 1500, 2000, 28, 28),
(100, 500, 1500, 2000, 29, 29),
(100, 500, 1500, 2000, 30, 30),
(100, 500, 1500, 2000, 31, 31),
(100, 500, 1500, 2000, 32, 32),
(100, 500, 1500, 2000, 33, 33),
(100, 500, 1500, 2000, 34, 34),
(100, 500, 1500, 2000, 35, 35)

-- ::: PRICELIST :::
CREATE TABLE table_price_list(
	pk_price_list_id INT AUTO_INCREMENT PRIMARY KEY,
	seed_price INT,
	tuber_price INT,
	teen_price INT,
	mature_price INT,

	fk_stock_id INT NOT NULL
);
SELECT * FROM table_price_list;

-- ::: PRICELIST VALUES :::
INSERT INTO table_price_list(seed_price, tuber_price, teen_price, mature_price, fk_stock_id)
VALUES
(20000, 50000, 150000, 300000, 1),
(20000, 50000, 150000, 300000, 2),
(20000, 50000, 150000, 300000, 3),
(20000, 50000, 150000, 300000, 4),
(20000, 50000, 150000, 300000, 5),
(20000, 50000, 150000, 300000, 6),
(20000, 50000, 150000, 300000, 7),
(20000, 50000, 150000, 300000, 8),
(20000, 50000, 150000, 300000, 9),
(20000, 50000, 150000, 300000, 10),
(20000, 50000, 150000, 300000, 11),
(20000, 50000, 150000, 300000, 12),
(20000, 50000, 150000, 300000, 13),
(20000, 50000, 150000, 300000, 14),
(20000, 50000, 150000, 300000, 15),
(20000, 50000, 150000, 300000, 16),
(20000, 50000, 150000, 300000, 17),
(20000, 50000, 150000, 300000, 18),
(20000, 50000, 150000, 300000, 19),
(20000, 50000, 150000, 300000, 20),
(20000, 50000, 150000, 300000, 21),
(20000, 50000, 150000, 300000, 22),
(20000, 50000, 150000, 300000, 23),
(20000, 50000, 150000, 300000, 24),
(20000, 50000, 150000, 300000, 25),
(20000, 50000, 150000, 300000, 26),
(20000, 50000, 150000, 300000, 27),
(20000, 50000, 150000, 300000, 28),
(20000, 50000, 150000, 300000, 29),
(20000, 50000, 150000, 300000, 30),
(20000, 50000, 150000, 300000, 31),
(20000, 50000, 150000, 300000, 32),
(20000, 50000, 150000, 300000, 33),
(20000, 50000, 150000, 300000, 34),
(20000, 50000, 150000, 300000, 35)

-- ::: STOCK :::
CREATE TABLE table_stock (
	pk_stock_id INT AUTO_INCREMENT PRIMARY KEY,
	seed_stock INT,
	tuber_stock INT,
	teen_stock INT,
	mature_stock INT
);
SELECT * FROM table_stock

-- ::: STOCK VALUES :::
INSERT INTO table_stock(seed_stock, tuber_stock, teen_stock, mature_stock)
VALUES
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000),
(1000, 1000, 1000, 1000)
-- !:::::::::::::::::::::::: END OF PLANT DATA ::::::::::::::::::::::::::

-- ::: USER :::
CREATE TABLE table_user(
	pk_user_id INT AUTO_INCREMENT PRIMARY KEY,
	fullname VARCHAR(50),
	picture VARCHAR(255),
	email VARCHAR(50) UNIQUE,
	`password` VARCHAR(255),
	phone_number VARCHAR(50),
	birth_date VARCHAR(50),
	fk_gender_id INT NOT NULL DEFAULT 0
);
SELECT * FROM table_user;
DROP TABLE table_user
TRUNCATE TABLE table_user

-- update table_user set password = '$2b$10$SOj8mugj0MuT96XKRzZK5uer5f1kmoNJLD3Zq.shRneZgShe5w.7W' where pk_user_id = 1
-- ::: USER INITIAL VALUE :::
-- INTO table_user(fullname, picture, email, `password`, phone_number, birth_date, fk_gender_id)
-- VALUES
-- ('Fajar Riadi', 'ig.jpg', 'fajariadi.id@gmail.com', 'passwordTwt', '085156493801', '4 April 1997', 1)

-- ::: GENDER :::
CREATE TABLE table_gender(
	pk_gender_id INT PRIMARY KEY,
	TYPE VARCHAR(50)
);
SELECT * FROM table_gender;
DROP TABLE table_gender

-- ::: GENDER VALUES :::
INSERT INTO table_gender
VALUES(0, 'Gender'),(1, 'Pria'),(2, 'Wanita')

-- ::: CITY :::
CREATE TABLE table_city(
	pk_city_id INT AUTO_INCREMENT PRIMARY KEY,
	city_name VARCHAR(50),
	city_code VARCHAR(50)
);
SELECT * FROM table_city;
DROP TABLE table_city

-- ::: CITY VALUES :::
INSERT INTO table_city(city_name, city_code)
VALUES
('Jakarta', 'JKT'),
('Bogor', 'BGR'),
('Depok', 'DPK'),
('Tangerang', 'TNG'),
('Bekasi', 'BKS')

-- ::: SHIPPING CHARGE :::
CREATE TABLE table_shipping_charges(
	pk_shipping_charges_id INT AUTO_INCREMENT PRIMARY KEY,
	shipping_price INT,
	fk_city_id INT
);
SELECT * FROM table_shipping_charges
	
-- ::: SHIPPING CHARGE VALUES :::
INSERT INTO table_shipping_charges(shipping_price, fk_city_id)
VALUES 
(0, 1),
(10000, 2),
(12000, 3),
(16000, 4),
(18000, 5)

-- ::: CONTACT :::
CREATE TABLE table_contact(
	pk_contact_id INT AUTO_INCREMENT PRIMARY KEY,
	recipient_name VARCHAR(50),
	phone_number VARCHAR(50),
	address VARCHAR(50),
	zipcode INT,	
	fk_city_id INT NOT NULL,
	fk_user_id INT NOT NULL
);
SELECT * FROM table_contact;
TRUNCATE TABLE table_contact

-- ::: CONTACT INITIAL VALUES :::
-- insert into table_contact(recipient_name, phone_number, address, zipcode, fk_city_id, fk_user_id)
-- values
-- ('Fajar Riadi', '085156493801', 'Bakso Zahra Salembaran', 15213, 4, 1),
-- ('Dhika Adhiwijna', '085156493802', 'GBK Bung Karni', 15222, 1, 1),
-- ('Hanendyo', '085156493803', 'Puncak Gunung Warpat', 15212, 2, 1),
-- ('Dyo Haw', '085156493844', 'Karawang - Dekat Stasiun Karawang Lama', 15312, 5, 1)

-- ::: REVIEW :::
CREATE TABLE table_review(
	pk_review_id INT AUTO_INCREMENT PRIMARY KEY,
	created_at VARCHAR(255),
	COMMENT VARCHAR(255),
	rating INT,
	
	fk_user_id INT NOT NULL,
	fk_plant_id INT NOT NULL
);
SELECT * FROM table_review;
DROP TABLE table_review
TRUNCATE table_review

-- ::: REVIEW INITIAL VALUES :::
-- insert into table_review(created_at, comment, rating, fk_user_id, fk_plant_id)
-- values
-- ('2 Mei 2021', 'Saya suka!!!', 4, 1, 13),
-- ('5 Mei 2021', 'Bonggolnya Sesuai banget!', 5, 2, 13),
-- ('10 Mei 2021', 'Terima kasih PlinPlant', 4, 3, 13),
-- ('7 Juni 2021', 'Saya cinta Basil <3', 5, 1, 26),
-- ('9 Juni 2021', 'Jadi orang italy beneran!!', 4, 1, 31)

-- ::: CREATE VIEW REVIEW :::
CREATE VIEW plant_review
AS
SELECT pk_review_id, picture, fullname, rating, created_at, COMMENT, fk_plant_id
FROM table_review
JOIN table_user ON fk_user_id = pk_user_id
JOIN table_plant ON fk_plant_id = pk_plant_id

SELECT * FROM plant_review
DROP VIEW plant_review

-- ::: CART :::
CREATE TABLE table_cart(
	pk_cart_id INT AUTO_INCREMENT PRIMARY KEY,
	phase_image VARCHAR(255),
	plant_name VARCHAR(50),
	plant_phase VARCHAR(50),
	price INT,	
	quantity INT,
	weight INT,
	reviewed INT NOT NULL DEFAULT 0,
	
	fk_plant_id INT,
	fk_user_id INT NOT NULL,
	fk_invoice_id BIGINT NOT NULL
);
SELECT * FROM table_cart;
DROP TABLE table_cart;
TRUNCATE TABLE table_cart

-- CONTOH TRANSAKSI 1
-- update table_cart set fk_invoice_id = 1622764848807 where fk_user_id = 1 and fk_invoice_id = 0
-- CONTOH TRANSAKSI 2
-- UPDATE table_cart SET fk_invoice_id = 1622774638661 WHERE fk_user_id = 1 AND fk_invoice_id = 0

-- CONTOH REVIEWED
-- update table_cart set reviewed = 4 where pk_cart_id = 2 and fk_invoice_id = 1623221611427

-- ::: CART INITIAL VALUES :::
-- INSERT INTO table_cart(phase_image, plant_name, plant_phase, price, quantity, weight, fk_plant_id, fk_user_id)
-- VALUES
-- ('italianparsley-seed.jpg', 'Italian Parsley', 'Biji', 20000, 2, 100, 31, 1),
-- ('bullsblood_mature.jpg', 'Blood Bull', 'Dewasa', 300000, 3, 2000, 18, 1),
-- ('basil-tuber.jpg', 'Basil', 'Bonggol', 50000, 1, 500, 26, 1),
-- ('aglaonema-juvenil.jpg', 'Aglaonema', 'Muda', 150000, 1, 1500, 1, 2),
-- ('cherrytomatotuber.jpg', 'Cherry Tomatoes', 'Bonggol', 50000, 1, 500, 11, 2)

-- ::: INVOICE :::
CREATE TABLE table_invoice(
	pk_invoice_id BIGINT PRIMARY KEY,
	no_order VARCHAR(50),
	created_at VARCHAR(50),
	STATUS VARCHAR(50),
	payment_image VARCHAR(50) NOT NULL DEFAULT '',
		
	fk_user_id INT,
	fk_contact_id INT, 
	fk_bank_id INT
);
SELECT * FROM table_invoice;
DROP TABLE table_invoice
TRUNCATE TABLE table_invoice

-- ::: INVOICE INITIAL VALUES :::
-- insert into table_invoice(pk_invoice_id, no_order, created_at, status, fk_user_id, fk_contact_id, fk_bank_id)
-- values
-- (1622764848807, '1622764848807', '4 Juni 2021, 07.00 WIB', 'selesai',  1, 3, 1),
-- (1622774638661, '1622774638661', '4 Juni 2021, 09.43 WIB', 'bayar',  1, 1, 2)

-- ::: BANK :::
CREATE TABLE table_bank(
	pk_bank_id INT AUTO_INCREMENT PRIMARY KEY,
	bank_name VARCHAR(50),
	no_rek VARCHAR(50),
	OWNER VARCHAR(50)
	
);
SELECT * FROM table_bank;

-- ::: BANK VALUES :::
INSERT INTO table_bank(bank_name, no_rek, OWNER)
VALUE
('BCA', '3603136827', 'PlinPlant, Etc'),
('BNI', '360313682789', 'PlinPlant, Etc'),
('MANDIRI', '36031368271010', 'PlinPlant, Etc')

-- ::: ARTIKEL :::
CREATE TABLE table_article(
	pk_article_id INT AUTO_INCREMENT PRIMARY KEY,
	article_image VARCHAR(255),
	title VARCHAR(255),
	author VARCHAR(255),
	created_at VARCHAR(255),
	duration VARCHAR(255),
	SOURCE VARCHAR(255),
	url VARCHAR(255),
	content  TEXT
	
);
SELECT * FROM table_article;
TRUNCATE TABLE table_article;
DROP TABLE table_article;

-- !::::::::::::::::::: ALL VIEW NEED TO CREATE ::::::::::::::::::::::::::
-- ::: CREATE VIEW -> PLANT DATA :::
CREATE VIEW plant_data
AS
SELECT
-- table plant (includes CATEGORY NAME)
pk_plant_id, plant_name, category_name, plant_image, plant_origin, plant_qualities, plant_use, days_to_sprout, matures_in, growth_type,
-- table plant breeding
seed, tuber, young, mature, seed_image, tuber_image, young_image, mature_image,
-- table weight
seed_weight, tuber_weight, young_weight, mature_weight,
-- table pricelist
seed_price, tuber_price, teen_price, mature_price,
-- table stock
seed_stock, tuber_stock, teen_stock, mature_stock
FROM table_plant
JOIN table_category ON fk_category_id = pk_category_id
JOIN table_plant_breeding ON fk_plant_id = pk_plant_id
JOIN table_weight ON fk_plant_breeding_id = pk_plant_breeding_id
JOIN table_price_list ON fk_price_list_id = pk_price_list_id
JOIN table_stock ON fk_stock_id = pk_stock_id

SELECT * FROM plant_data
DROP VIEW plant_data

-- ::: CREATE VIEW USER :::
CREATE VIEW user_info
AS
SELECT pk_user_id, fullname, picture, email, `password`, phone_number, birth_date, TYPE
FROM table_user
LEFT JOIN table_gender ON fk_gender_id = pk_gender_id

SELECT * FROM user_info
DROP VIEW user_info

-- ::: CREATE VIEW USER ADDRESS :::
CREATE VIEW user_address
AS
SELECT pk_contact_id, recipient_name, tco.phone_number, address, zipcode, city_name, city_code, shipping_price, fk_user_id
FROM table_user
JOIN table_contact tco ON fk_user_id = pk_user_id
JOIN table_city tci ON fk_city_id = pk_city_id
JOIN table_shipping_charges tsc ON tsc.fk_city_id = tci.pk_city_id

SELECT * FROM user_address
DROP VIEW user_address

-- ::: CREATE VIEW USER CART :::
CREATE VIEW user_cart
AS
SELECT pk_cart_id, phase_image, tc.plant_name, plant_phase, price, quantity, weight, reviewed, fk_plant_id, fk_user_id, fk_invoice_id
FROM table_cart tc
JOIN table_user ON fk_user_id = pk_user_id
JOIN plant_data ON fk_plant_id = pk_plant_id

SELECT * FROM user_cart
DROP VIEW user_cart

-- ::: CREATE VIEW USER INVOICE :::
CREATE VIEW user_invoice
AS
SELECT
pk_invoice_id, tu.fullname, pk_cart_id, no_order, created_at, STATUS, payment_image, reviewed, bank_name, no_rek, OWNER,
phase_image, plant_name, plant_phase, price, quantity, weight, fk_plant_id, ti.fk_user_id,
recipient_name, ua.phone_number, address, zipcode, city_name, shipping_price
FROM table_invoice ti
JOIN table_cart tc ON fk_invoice_id = pk_invoice_id 
JOIN table_user tu ON ti.fk_user_id = pk_user_id
JOIN table_bank ON fk_bank_id = pk_bank_id
JOIN user_address ua ON fk_contact_id = pk_contact_id;

SELECT * FROM user_invoice;
DROP VIEW user_invoice

-- :: CREATE VIEW LIST TRANSACTION ::
CREATE VIEW list_transaction
AS
SELECT
pk_invoice_id, fk_user_id, created_at, no_order, STATUS, phase_image, plant_name, plant_phase, quantity, price,
fullname, payment_image, bank_name,
COUNT(pk_invoice_id) AS total_products,  SUM(price*quantity) + CEIL(SUM(weight*quantity)/1000) * shipping_price  AS total_price
FROM user_invoice
GROUP BY pk_invoice_id;

SELECT * FROM list_transaction
DROP VIEW list_transaction
-- !::::::::::::::::::: END OF ALL VIEW NEED TO CREATE ::::::::::::::::::::::::::
