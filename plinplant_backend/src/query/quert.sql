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
	pk_category_id int primary key,
    category_name varchar(50) unique
);
select * from table_category;
truncate table table_category;
drop table table_category;

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
	pk_plant_id int auto_increment primary key,
    plant_name varchar(50),
    plant_image varchar(255),
    plant_origin text,
    plant_qualities text,
    plant_use text,
    days_to_sprout varchar(50),
    matures_in varchar(50),
    growth_type varchar(50),
    fk_category_id int,
    fk_review_id int
);
select * from table_plant;
truncate table table_plant;
drop table table_plant;


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
