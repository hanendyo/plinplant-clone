create database db_plinplant;

use db_plinplant;

-- table login
create table table_login(
	pk_login_id int auto_increment primary key,
    email varchar(50) not null,
    password varchar(50) not null
);
select * from table_login;

-- table sign up
create table table_register(
	pk_register_id int auto_increment primary key,
    fullname varchar(50) not null,
    email varchar(50) not null unique,
    password varchar(50) not null
);
select * from table_register;
truncate table table_register;

alter table table_register
add column password_verify varchar(50) not null;

-- table category
create table table_category(
	pk_category_id int primary key auto_increment,
    category_name varchar(50)
);
select * from table_category;
insert into table_category(category_name)
values('Tanaman Hias'),
('Sayuran Hijau'),
('Buah'),
('Rempah'),

-- table review
create table table_review(
	pk_review_id int auto_increment primary key,
    comment varchar(50),
    rating int
);
select * from table_review;
drop table table_review;

-- table plant 
create table table_plant(
	pk_plant_id INT AUTO_INCREMENT PRIMARY KEY,
	plant_name VARCHAR(50) NOT NULL,
	plant_image VARCHAR(255),
	plant_origin TEXT,
	plant_qualities TEXT,
	plant_use TEXT,
	days_to_sprout VARCHAR(50),
	matures_in VARCHAR(50),
	growth_type VARCHAR(50),
	fk_category_id INT NOT NULL,
	fk_review_id INT NOT NULL,
	
	CONSTRAINT category FOREIGN KEY(fk_category_id)
	REFERENCES table_category(pk_category_id)
);
select * from table_plant;
truncate table table_plant;
drop table table_plant;

-- 1: hias, 2: sayur, 3: buah, 4: Rempah
insert into table_plant(plant_name, plant_image, plant_origin, plant_qualities, plant_use, days_to_sprout, matures_in, growth_type, fk_category_id)
values
('Aglaonema', 'dummy.jpg', 'Jenis tanaman hias daun ini berasal dari suku araceae atau sejenis tanaman berumbi talas. Tanaman Aglaonema memiliki banyak jenis, bahkan mencapai 30 spesies. Ada yang dibedakan dari bentuk, ukuran, serta warna daunnya.', 'Aglonema disebut sebagai salah satu tanaman hias pemurni terbaik. Tumbuhan ini bisa menyerap formaldehida dan benzena di dalam ruangan.', 'Daun tanaman hias aglonema ini paling populer di Indonesia. Kenapa? Karena warnanya yang cantik dan dapat tumbuh dengan baik di dalam ruangan.', '25 - 35', '< 100', 'Merambat', 1),

('Calathea', 'dummy.jpg', 'Clathea adalah tanaman yang tumbuh baik di daerah tropis. Tanaman ini masuk dalam jenis tumbuhan rhizoma. Daya tariknya terdapat pada warna daun yang beragam serta motif unik di dalamnya.', 'calathea akan menghasilkan daun yang bergerombol dan indah.', 'Anehnya, di daerah Brazil, daun ini justru digunakan sebagai kerajinan tangan dan berbagai bungkus makanan.', '> 100', '< 365', 'Merambat', 1),

('Monstera', 'dummy.jpg', 'Monstera termasuk tanaman yang tumbuh dengan baik di daerah tropis seperti di Indonesia.', 'Sebagai tanaman yang bentuknya unik, monstera ternyata masuk dalam jenis tanaman hias yang bagus untuk kesehatan.', 'monstera juga mampu menyerap zat berbahaya seperti formaldehida yang bisa merusak tubuh.', '15 - 25', '60', 'Merambat', 1),

('Begonia', 'dummy.jpg', 'Begonia sebenarnya bukan asli tanaman yang tropis karena habitat asalnya adalah di daerah subtropis seperti Amerika Selatan dan Afrika. Persebarannya yang sampai di Indoneseia disebabkan karena iklim daerahnya yang tidak terlalu ekstrem dan cenderung lembab.', 'Beberapa jenis begonia justru terlihat menarik dari bentuk dan warna daunnya.', 'Begonia glabra diduga berkhasiat sebagai obat penyembuh luka baru. Daun, batang, dan bunganya mengandung saponin. Daunnya mengandung tanin, sedangkan batang dan bunganya mengandung flavonoida dan polifenol.', '15 - 25', '60', 'Merambat', 1),

('Anthurium', 'dummy.jpg', 'Perbedaan yang mencolok antara anturium dengan aglaonema adalah pada bentuk daunnya yang menyerupai daun telinga. Bentuk inilah yang menyebabkan anturium lebih akrab dengan sapaan kuping gajah.', 'Salah satu bagian dari tanaman hias ini yang cukup bermanfaat adalah bagian akarnya. Akar dari anthurium mempunyai manfaat yang sangat baik untuk mengobati diabetes. Akar dari anthurium dpat mengontrol kadar gula darah, sehingga dapat membantu anda penderita diabetes.', 'Meskipun memiliki keindahan dari daunnya, beberapa kuping gajah juga bisa berbunga dan terlihat lebih eksotis saat dijadikan tanaman hias di dalam rumah.', '7 - 14', '< 100', 'Merambat', 1),

('Monstera Deliciosa', 'dummy.jpg', 'Dari sekian banyak jenis monstera, spesial monster deliciosa tergolong yang paling populer. Tanamannya yang bisa tumbuh besar biasanya dimanfaatkan sebagai tanaman di sudut atau sisi ruangan.', 'Berbeda dengan monstera lainnya yang bolong-bolong dan tertutup pada bagian sisinya, monstera deliciosa justru terlihat seperti daun yang terbelah-belah dan pinggirnya tidak tertutup.', 'monstera juga mampu menyerap zat berbahaya seperti formaldehida yang bisa merusak tubuh.', '35 - 50', '90', 'Merambat', 1),

('Peperomia', 'dummy.jpg', 'Peperomia termasuk tanaman gantung yang memadukan keindahan daun dan bunganya sekaligus. Tanaman asal Brazil ini termasuk dalam suku Piperaceae yang memiliki ribuan spesies.', 'Saat di alam liar, tanaman ini tumbuh dengan menumpang pada batang dan cabang pohon lainnya meski tidak termasuk tanaman parasit.', 'Keunikan dan daya tarik peperomia terletak pada bentuk daunnya yang kecil dan lucu. Bahkan motif dan warnanya juga beragam. Hal inilah yang membuat banyak orang tertarik untuk mengoleksi berbagai jenis peperomia sebagai hiasan gantung.', '15 - 25', '60', 'Merambat', 1),

('Caladium Red Stardust', 'dummy.jpg', 'Keladi merupakan sekelompok tumbuhan dari genus Caladium (suku talas-talasan, Araceae). Dalam bahasa sehari-hari keladi kerap juga dipakai untuk menyebut beberapa tumbuhan lain yang masih sekerabat namun tidak termasuk Caladium, seperti talas (Colocasia). Keladi sejati jarang membentuk umbi yang membesar. Asal tumbuhan ini dari hutan Brazil namun sekarang tersebar ke berbagai penjuru dunia.', 'Caladium atau sering disebut dengan tanaman keladi ternyata cukup baik saat dipelihara di luar ruangan.', 'Meskipun banyak yang menjadikannya sebagai tanaman indoor, peletakannya di luar ruangan tetap bisa memberikan tampilan halaman yang lebih menarik.', '7 - 14', '60 - 70', 'Merambat', 1),

('Kaktus', 'dummy.jpg', 'Kaktus dapat tumbuh pada waktu yang lama tanpa air. Kaktus biasa ditemukan di daerah-daerah yang kering (gurun).', 'Kaktus termasuk ke dalam golongan tanaman sukulen karena mampu menyimpan persediaan air di batangnya.[5] Batang tanaman ini mampu menampung volume air yang besar dan memiliki bentuk yang bervariasi.', 'Berbagai jenis kaktus telah lama dimanfaatkan manusia sebagai sumber pangan, salah satunya adalah Opuntia.', '365', '3 Tahun', 'Merambat', 1),

('Anggrek', 'dummy.jpg', 'suku tumbuhan berbunga dengan anggota jenis terbanyak. Jenis-jenisnya tersebar luas dari daerah tropika basah hingga wilayah sirkumpolar, meskipun sebagian besar anggotanya ditemukan di daerah tropika. Kebanyakan anggota suku ini hidup sebagai epifit, terutama yang berasal dari daerah tropika.', 'Anggota suku ini cenderung memiliki organ-organ yang sukulen atau "berdaging": tebal dengan kandungan air yang tinggi. Dengan demikian ia dapat hidup pada kondisi ketersediaan air yang rendah. Air diperoleh dari hujan, tetesan, embun, atau uap air di udara.', 'Kelebihan yang menonjol dari tanaman anggrek terletak pada bunganya yang berwarna-warni serta memiliki aneka corak yang sangat unik. Tidak heran apabila tanaman anggrek menjadi tumbuhan wajib yang selalu ada di kebun bunga.', '7 - 15', '30 - 60', 'Merambat', 1),

-- sayur
('Arugula', 'dummy.jpg', 'Juga disebut roquette, salad rocket, garden rocket, atau arugula. Berasal dari Mediterania, arugula telah dibudidayakan selama berabad-abad dan bahkan disebutkan dalam Alkitab.', 'Seperti kebanyakan sayuran berdaun gelap, arugula kaya akan berbagai nutrisi. Tinggi vitamin C, A, K. Tinggi kalsium, kalium dan folat. Sumber zat besi yang baik.', 'Arugula memiliki rasa pedas, sangat serbaguna dan dapat digunakan segar atau dimasak. Ini bagus sebagai dasar dalam salad campuran, dalam sandwich, sebagai topping pizza atau omelet. Tambahkan segar di atas piring saat siap disajikan.', '4 - 21', '30 - 40', 'Merambat', 2),

('Breen Lettuce', 'dummy.jpg', 'Selada dipanen oleh orang Mesir kuno, yang diteruskan ke orang Yunani dan kemudian orang Romawi yang membawanya ke Eropa. Daun Breen memiliki warna dasar hijau zaitun dan urat yang sangat kontras. Mereka juga keras dan renyah dengan rasa yang luar biasa.', 'Varietas ini sangat bergizi karena protein klorofil yang ada di daun hijau tua yang indah. Sebagai varietas selada romaine, ini merupakan sumber yang baik untuk: Vitamin A, C dan K. Sumber yang kaya akan kalsium, fosfor, magnesium dan kalium dan banyak lagi.', 'Salad tidak lengkap jika tidak memiliki sayuran berdaun hijau yang lezat. Itu juga bisa direbus atau dibuat menjadi sup.', '7 - 21', '45', 'Merambat', 2),

('Bulls Blood', 'dummy.jpg', 'Bit Darah Banteng dibiakkan di Belanda pada tahun 1840. Itu dibiakkan dari varietas bit tertua yang ada, pusaka Prancis Crapaudine. Varietas pusaka ini telah tersedia untuk tumbuh sejak era Victoria abad ke-19.', 'Rasa bit darah Banteng yang kaya bersahaja dan manis, yang menjadi lebih terasa saat dimasak.', 'Tambahkan bit darah banteng di atas selada dasar untuk menambah kerumitan pada salad normal Anda. Nikmati semburan kecil rasa yang menyenangkan dan warna yang bisa ditambahkan bit darah banteng.', '5 - 10', '35', 'Merambat', 2),

('Buttercrunch', 'dummy.jpg', 'Selada mentega dikatakan berasal dari Mediterania. Varietas lain didasarkan pada hibrida selada asli. Selada mentega yang paling umum adalah selada Bibb dan Boston. Biasanya, rasa mengikuti baunya: jika selada berbau harum, rasanya manis; jika pahit, rasanya akan pahit.', 'Selada sangat tinggi vitamin A dan Kalium, yang mendukung tekanan darah, kesehatan jantung, kekuatan tulang, dan kekuatan otot.', 'Buttercrunch memiliki tekstur yang keras dan renyah dengan rasa yang lembut dan sedikit manis. Gabungkan Buttercrunch dalam salad apa pun untuk menambah kedalaman dan tekstur.', '7 - 10', '46', 'Merambat', 2),

('Butterhead Lettuce', 'dummy.jpg', 'Penggambaran pertama selada berasal dari Mesir Kuno, yang diteruskan ke orang Yunani dan kemudian orang Romawi yang membawanya ke Eropa. Butterhead ini memiliki daun pembungkus lembut yang bagus dengan banyak rasa.', 'Selada sangat tinggi vitamin A dan Kalium, yang mendukung tekanan darah, kesehatan jantung, kekuatan tulang, dan kekuatan otot.', 'Selada sangat bagus untuk digunakan sebagai bahan dasar salad hijau dan menjadi tambahan yang bagus untuk sandwich dan bungkus.', '7 - 21', '45', 'Merambat', 2),

('Cardinale', 'dummy.jpg', 'Cardinale Lettuce adalah varietas merah perancis yang menghasilkan mawar terbuka hingga matang sepenuhnya, kemudian melipat dirinya menjadi kepala merah segar yang indah. Warna Cardinale memikat dan intens dan memiliki kebiasaan Romaine yang lebar.', 'Varietas ini sangat bergizi karena protein klorofil yang ada di daun hijau tua yang indah. Ini adalah sumber yang baik dari: Vitamin A, C, K, Kalsium, fosporus, magnessium, kalium, dan banyak lagi.', 'Bagus untuk putus dan makan salad hijau. Daun yang lebih besar dari kepala dapat digunakan sebagai pengganti roti atau tortilla sebagai pembungkus selada.', '7 - 21', '60', 'Merambat', 2),

('Celery', 'dummy.jpg', 'Daun dan bunga seledri merupakan bagian dari karangan bunga hias di makam firaun Tutankhamen. Di luar kegunaan kuliner, biji seledri juga telah digunakan sejak jaman dahulu sebagai obat penghilang rasa sakit.', 'Seledri mengandung kalium tertinggi tetapi juga mengandung banyak natrium dan kalsium. Fotokimia kaya akan antioksidan dan flavonoid Butylphthalide, seledri mengandung senyawa yang telah terbukti membantu hipertensi dan menunjukkan kualitas pelindung saraf. Minyak alami dari daun seledri terkadang dapat menyebabkan ruam kulit. Yang terbaik adalah memakai baju lengan panjang di sekitar tanaman ini, atau mencuci tangan dan lengan yang terbuka setelah memegang.', 'Seledri dibudidayakan terutama untuk batangnya, yang berfungsi sebagai bahan pokok di berbagai budaya. Mirepoix dasar rasa kuliner Prancis bersandar pada seledri sebagai pilar di samping bawang dan wortel yang dipotong dadu, yang telah berfungsi sebagai dasar untuk sup, kaldu, semur, dan saus.', '14 - 30', '120 - 210', 'Merambat', 2),

('Endive Lettuce', 'dummy.jpg', 'Selada endif secara teknis adalah sawi putih, dan diyakini berasal dari Mesir dan Indonesia. Ini telah dibudidayakan di Eropa sejak abad ke-16.', 'Setelah matang, daun bagian dalam akan tampak pucat karena kurang cahaya. Daun bagian dalam ini sangat empuk dan enak, tanpa rasa pahit.', 'Selada endif biasanya digunakan sebagai salad hijau untuk menambah dimensi pada campuran; Daunnya bisa pahit, jadi sering kali daun bagian dalam yang lembut di jantung tanaman digunakan, karena rasanya lebih manis. Daun luar yang matang juga bisa dimasak dan direbus untuk mengurangi rasa pahit.', '5 - 10', '48', 'Merambat', 2),

('Flashy Trout Back Lettuce', 'dummy.jpg', 'Berasal dari Eropa, pusaka romaine ini dibesarkan di Austria dan disebut "Forellenschluss". Jangan khawatir, rasanya tidak seperti ikan! Ini adalah varietas romaine yang sangat berharga yang lebih empuk dan bermentega daripada kebanyakan spesies Cos, dan mendapatkan namanya dari pola bintik-bintik trout di daunnya.', 'Daunnya sangat lembut dan lembut, manis. Hampir di antara selada romaine dan mentega.', 'Sajikan sebagai bahan dasar hijau dalam salad untuk menciptakan pengalaman gourmet yang lezat, dan nikmati daun mentega yang lembut dan manis.', '5 - 10', '27 -55', 'Merambat', 2),

('Green Mustard', 'dummy.jpg', 'Dengan rasa yang lembut, manis dan bersahaja, mizuna green mustard ini relatif tidak dikenal, tetapi hijau luar biasa. Ini telah dibudidayakan di Jepang sejak zaman kuno, tetapi kemungkinan besar berasal dari Cina.', 'Tinggi Serat, rasio nutrisi terhadap kalori, pythonurtrients, vitamin K, A, dan C.', 'Sayuran sawi memiliki rasa tali dan sering dicampur dengan sayuran lain untuk mengurangi rasa saat dimakan segar. Bisa juga dikukus atau dibuat jus. Sayuran sawi tradisional dimasak dengan daging babi. Menambahkan asam, seperti lemon, dan garam akan menyeimbangkan rasa.', '5 - 21', '21 - 40', 'Merambat', 2),

-- Rempah
('Basil', 'dummy.jpg', 'Diyakini Basil pertama kali didomestikasi di India dan diperkenalkan di Occident oleh Alexandre the Great pada 300BC. Itu segera diadopsi oleh orang Yunani dan kemudian Romawi sebagai bagian penting dari apa yang disebut diet Mediterania.', 'Basil telah digunakan selama berabad-abad sebagai ramuan aromatik karena rasanya yang luar biasa, tetapi juga bermanfaat bagi kesehatan Anda', 'Basil dibudidayakan terutama untuk batangnya, yang berfungsi sebagai bahan pokok di berbagai budaya. Mirepoix dasar rasa kuliner Prancis bersandar pada seledri sebagai pilar di samping bawang dan wortel yang dipotong dadu, yang telah berfungsi sebagai dasar untuk sup, kaldu, semur, dan saus barat.', '5 - 21 ', '68', 'Merambat', 4),

('Catnip', 'dummy.jpg', 'Catnip adalah sepupu mint dan berasal dari Eropa, Asia, dan Afrika. Nama Latin berasal dari Neptik, kota kuno Etruruan tempat ia dibudidayakan. Secara historis telah digunakan dalam teh obat sebelum impor besar teh Cina menyebar ke seluruh Eropa.', 'Catnip adalah sepupu mint dan berasal dari Eropa, Asia, dan Afrika. Nama Latin berasal dari Neptik, kota kuno Etruruan tempat ia dibudidayakan. Secara historis telah digunakan dalam teh obat sebelum impor besar teh Cina menyebar ke seluruh Eropa.', 'Berikan catnip kepada teman-teman kucing berbulu Anda dan saksikan mereka menikmatinya! Tidak jelas apakah catnip aman untuk manusia: jumlah kecil yang diminum atau dengan teh tidak memberikan efek negatif, tetapi jumlah besar yang dikonsumsi secara oral, atau dalam jumlah berapa pun yang dihisap, berpotensi berbahaya.', '10 - 14', '40 - 50', 'Merambat', 4),

('Chives', 'dummy.jpg', 'Anggota keluarga bawang ini berasal dari Asia dan Eropa. Nama botani berasal dari kata Yunani yang berarti "daun bawang seperti buluh"', 'Secara positif menguntungkan sirkulasi darah dan sistem pencernaan,', 'Kucai cocok dipadukan dengan makanan laut dan merupakan hiasan yang bagus untuk sup krim, telur, kentang, atau salad makaroni. Jika tanaman berbunga, ini bisa digunakan untuk salad.', '7 - 21', '75 - 85', 'Merambat', 4),

('Cilantro', 'dummy.jpg', 'Ketumbar adalah ramuan lain yang disebutkan dalam teks-teks awal termasuk Alkitab dan Malam Arab. Diyakini berasal dari Mediterania, itu meluas ke seluruh Asia dan ke Eropa. Itu adalah salah satu ramuan paling awal yang dibawa ke dunia baru.', 'Tidak tersedia', 'Ketumbar berasal dari keluarga yang sama dengan seledri dan wortel, ketumbar memiliki kadar karotenoid (antioksidan) yang tinggi, yang melindungi sel dari radikal bebas. Ia memiliki tingkat vitamin A yang tinggi, yang baik untuk sistem kekebalan tubuh, penglihatan yang baik dan pertumbuhan anak-anak. Ini juga membantu mengurangi peradangan.', '5 - 21', '50 - 90', 'Merambat', 4),

('Dill', 'dummy.jpg', 'Berasal dari Mediterania timur dan Asia barat, telah bertanggal sejak 3000 SM dalam teks Mesir. Kata itu berasal dari kata Norse dylia yang berarti menenangkan atau meninabobokan.', 'Kandungan vitamin A yang tinggi, yang baik untuk sistem kekebalan tubuh, penglihatan yang baik dan tumbuh kembang anak. Dill juga mengandung banyak mikronutrien lain yang membantu dalam pemeliharaan sel Anda.', 'Dill memiliki rasa yang sangat lembut dan bisa menjadi tanaman yang rapuh: gunakan dill Anda sesegera mungkin setelah panen. Ini cocok terutama dengan zucchini, labu musim panas, dan ikan seperti herring dan salmon. Ini juga dapat digunakan saat membuat acar untuk rasa dill.', '7 - 21', '40 - 50', 'Merambat', 4),

('Italian Parsley', 'dummy.jpg', 'Peterseli dibudidayakan sejak zaman kuno oleh orang Yunani dan Romawi, tetapi secara tradisional digunakan sebagai ramuan obat dan tidak digunakan dalam masakan kuliner sampai kemudian.', 'Sebuah ramuan dengan daun cerah dan datar, Peterseli mengandung flavonoid dan terpene limonene dan myristicin, selain tinggi fosfor dan kalsium. Ini juga telah terbukti memiliki kualitas anti-hiperlipidemia.', 'Peterseli Italia biasanya dikeringkan dan dimasukkan ke dalam campuran ramuan Italia bersama rosemary, timi, dan oregano. Ini juga dapat digunakan segar, biasanya ditambahkan terlambat ke piring sebagai bumbu terakhir, hiasan, atau topping.', '10 - 30', '70 - 90', 'Merambat', 4),

('Lemongrass', 'dummy.jpg', 'Serai adalah tanaman asli Afrika, Asia, dan Oseania yang telah menjadi obat herbal tradisional. Sebagai anggota keluarga rumput, serai biasanya dikeringkan dan diseduh dengan teh, atau dihancurkan dan ditambahkan ke sup atau hidangan.', 'Tidak tersedia', 'Secara tradisional, serai digunakan sebagai penyedap dalam teh atau sup untuk memberikan rasa lemon tanpa rasa getir. Ini dapat diseduh dalam teh obat karena sifat anti-kecemasan, anti-jamur, stimulan, antioksidan dan anti-inflamasi.', '5 - 21', '< 100', 'Merambat', 4),

('Mexican Tarragon', 'dummy.jpg', 'Juga dikenal sebagai Winter Tarragon, sepupu marigold ini berasal dari Meksiko dan Amerika Tengah. Daun tipis bergigi berbagi rasa tarragon tradisional dengan aroma adas manis, dan bunganya juga bisa dimakan. Winter Tarragon dikatakan telah digunakan sebagai dupa ritual oleh suku Aztec dan sebagai bahan utama dalam teh obat yang digunakan oleh Huichol.', 'Dapat membantu meredakan mual. Sifat antijamur / antibakteri. Meningkatkan mimpi. Menghasilkan terpene cineol, estragole, ocimene, dan phellandrene.', 'Daun dan bunga Tarragon Meksiko kering dapat dimakan dan biasa digunakan sebagai bumbu. Ini bisa menjadi pengganti langsung untuk French Tarragon. Perisa sangat cocok dipadukan dengan lemon, pir, atau lada hitam. Bisa juga digunakan sebagai teh herbal.', '4 - 14', '75 - 85', 'Merambat', 4),

('Mint', 'dummy.jpg', 'Mint telah dirujuk secara luas dalam teks dan cerita lama, yang menyiratkan sejarah panjangnya sebagai tanaman budidaya. Itu direferensikan dalam Alkitab dengan saran-saran itu dianggap sangat berharga. Ada juga cerita dari mitologi kuno yang berbicara tentang mint. Awalnya, mint digunakan untuk aromanya yang menyenangkan dan dioleskan ke berbagai bagian tubuh dan digunakan untuk menyegarkan napas dan memutihkan gigi.', 'Mint memiliki khasiat antimikroba sehingga bagus untuk digunakan dalam produk kesehatan mulut karena berkontribusi pada napas segar, mengunyah daun mint saja sudah sangat menyegarkan. Mint dikenal untuk meningkatkan kewaspadaan dan kesadaran.', 'Mint banyak digunakan dalam minuman, baik itu teh atau mojitos, mint membawa rasa segar. Jangan ragu untuk menambahkannya ke salad juga untuk menyempurnakannya dan menghadirkan rasa pedas dan cerah.', '10 - 21', '60 - 75', 'Merambat', 4),

('Oregano', 'dummy.jpg', 'Oregano ditemukan dalam masakan Meksiko dan Mediterania. Meski serupa, varietas ini berasal dari keluarga yang berbeda.', 'Selain memasak, oregano digunakan dalam banyak aplikasi medis. Minyak ini dapat digunakan sebagai antiseptik topikal untuk meredakan sakit tenggorokan dan membantu menangkal masuk angin. Ramuan itu sendiri memiliki banyak manfaat bagi kesehatan. Ini kaya akan antioksidan. dan memiliki sifat anti-inflamasi', 'Oregano menambah rasa pada saus, pizza dan sangat bagus untuk bumbu daging. Tambahkan di akhir memasak untuk memaksimalkan rasa.', '7 - 21', '80 - 90', 'Merambat', 4),

-- buah
('Cherry Tomatoes', 'dummy.jpg', 'Tomat berasal dari Amerika. Dibawa kembali ke Eropa dengan penjelajah, ia berpindah-pindah benua dan diterima secara luas oleh Mediterania. Tomat kerdil dikembangkan melalui proyek antarbenua oleh petani tomat pusaka dan dibiakkan tanaman determinan menjadi lebih kecil. Beberapa kultivar juga telah dibudidayakan secara khusus untuk produksi di luar angkasa.', 'Tomat rendah kalori dan tinggi nilai gizi. Tinggi dalam antioksidan likopen dan beta karoten. Sumber serat tidak larut yang baik. Tinggi vitamin C, K dan B9 (folat).', 'Tomat kerdil menumbuhkan tomat ceri. Ini bisa dimakan sebagai camilan, salad, tumis, dengan pasta atau pizza. Ini adalah tambahan yang sempurna untuk makanan apa pun.', '7 - 28', '60', 'Merambat', 3),

('Jalapenos', 'dummy.jpg', 'Jenis cabai rawit ini berasal dari Meksiko. Setelah penjelajah bertemu dunia baru, hasil panen menyebar ke seluruh dunia. Orang Spanyol adalah yang pertama menemukannya di Dunia Baru, tetapi Portugis melakukan yang terbaik untuk membawanya ke sepanjang rute perdagangan mereka di seluruh dunia. Di Amerika Utara, diharapkan buah tersebut bepergian dengan perdagangan budak, dan penduduk asli hanya makan varietas liar di Amerika Serikat bagian selatan sebelum ini.', 'Senyawa yang memberi rasa pedas pada cabai disebut capsaicinoid, konsentrasi yang lebih tinggi membuat tanaman lebih pedas. Panas diberi peringkat pada "skala Scoville" yang mengukur setiap lada di unit panas Scoville (SHU), paprika diberi peringkat 0 SHU sedangkan lada terpanas dunia "Carolina Reaper" diberi peringkat 2.200.000 SHU. "Jalapeno" memiliki rating hingga 10.000 SHU.', 'Cabai digunakan untuk menambahkan panas ke hidangan apa pun. Daging dan bijinya bisa dimanfaatkan. Paprika sering kali dikeringkan dan digilin menjadi cabai ini memberi bumbu pada berbagai hidangan, termasuk kari.', '10 -28', '60 - 80', 'Merambat', 3),

('Sweet Peppers', 'dummy.jpg', 'Seperti kerabat mereka, cabai, paprika manis berasal dari Meksiko dengan benih varietas liar yang berasal dari 5.000 SM. Seperti banyak makanan lain yang berasal dari wilayah ini, paprika manis dibawa ke seluruh dunia oleh penjelajah Spanyol dan Portugis yang melakukan perjalanan melalui benua ini.', 'Paprika manis adalah sumber vitamin C. Antioksidan dosis tinggi. Sumber serat pangan, vitamin A, K dan B6. Meningkatkan sistem kekebalan tubuh.', 'Paprika manis tidak bisa digantikan dalam resep tertentu, seperti fajitas atau tumisan. Mereka serbaguna dan mudah digunakan juga. Bisa ditambahkan ke salad untuk menambah rasa dan menghadirkan kesegaran. Tambahkan paprika manis ke pasta, kari, atau sup untuk menambah rasa pada piring Anda.', '10 - 28', '75 - 83', 'Merambat', 3),

('Strawberries', 'dummy.jpg', 'Stroberi adalah tanaman asli Amerika Utara, dan masyarakat adat menggunakannya dalam banyak hidangan. Penjajah pertama di Amerika mengirim tanaman stroberi asli yang lebih besar kembali ke Eropa pada awal 1600. Varietas lain, juga ditemukan di Amerika Tengah dan Selatan, adalah apa yang oleh penjajah disebut "futilla."', 'Kultivar stroberi klasik menghasilkan satu buah panen besar di awal musim panas, biasanya dari akhir Juni hingga awal Juli. Oleh karena itu, mereka biasa disebut stroberi pembawa Juni dan stroberi bantalan Juni.', 'Stroberi banyak digunakan dalam es krim, mocktail, kue, smoothie, dan makanan penutup lainnya. Mereka juga merupakan bagian dari beberapa resep dan salad.', '14', '50-60', 'Merambat', 3),

('Sugar Snap Peas', 'dummy.jpg', 'Meskipun populer di Eropa, kacang polong kemungkinan besar berasal dari Mesir atau Palestina. Pada pertengahan abad ke-19, eksperimen biksu Austria Gregory Mendel dengan kacang polong menghasilkan penemuan yang meletakkan dasar ilmu genetika modern.', 'Kacang polong adalah sumber serat, protein, Vitamin A dan K.', 'Kacang polong adalah bahan kuliner umum di banyak budaya. Tergantung pada kacang polong dan persiapannya, mereka bisa menambahkan semburan gurih ke sup dan pai daging, atau kejutan ringan dan manis pada tumis.', '7 -14', '70', 'Merambat', 3),









-- table plant breeding
create table table_plant_breeding(
	pk_plant_breeding_id int auto_increment primary key,
    seed varchar(255),
    tuber varchar(255),
    young varchar(255),
    mature varchar(255),
    seed_image longblob,
    tuber_image longblob,
    young_image longblob,
    mature_image longblob,
    fk_plant_id int
);
select * from table_plant_breeding;
truncate table table_plant_breeding;
drop table table_plant_breeding;

-- table price list
create table table_price_list(
	pk_price_list_id int auto_increment primary key,
    seed_price int,
    tuber_price int,
    teen_price int,
    mature_price int,
    fk_plant_breeding_id int,
    fk_stock_id int
);
select * from table_price_list;



-- table stock
create table table_stock (
	pk_stock_id int auto_increment primary key,
    seed_stock int,
    tuber_stock int,
    teen_stock int,
    mature_stock int
);

-- table artikel
create table table_article(
	pk_article_id int auto_increment primary key,
    article_image varchar(255),
    -- image longblob,
    author varchar(50),
    title varchar(50),
    content longtext,
    created_at varchar(50)
);	
select * from table_article;
truncate table table_article;
drop table table_article;

-- table order item
create table table_order_item (
	pk_order_item_id int auto_increment primary key,
    quantity int,
    fk_price_list_id int
);
select * from table_order_item;

-- table order
create table table_order(
	pk_order_id int auto_increment primary key,
    status varchar(50),
    created_at varchar(50),
    fk_user_id int
);
select * from table_order;

-- table user
create table table_user(
	pk_user_id int auto_increment primary key,
    fullname varchar(50),
    email varchar(50),
    password varchar(50),
    birth_date varchar(50),
    picture longblob,
    fk_login_id int,
    fk_contact_id int,
    fk_gender_id int
);
select * from table_user;

-- table contact
create table table_contact(
	pk_contact_id int auto_increment primary key,
    recipient_name varchar(50),
    address varchar(50),
    phone_number varchar(50),
    fk_city_id int
);
select * from table_contact;


-- table gender
create table table_gender(
	pk_gender_id int auto_increment primary key,
    type varchar(50)
);
select * from table_gender;

-- table city
create table table_city(
	pk_city_id int auto_increment primary key,
    city_name varchar(50)
);
select * from table_city;
truncate table table_city;

-- table shipping charges
create table table_shipping_charges(
	pk_shipping_charges_id int auto_increment primary key,
    shipping_price int,
    fk_city_id int
);



-- tabel weight
create table table_weight(
	pk_weight_id int auto_increment primary key,
	weight int
);

drop database db_plinplant;
