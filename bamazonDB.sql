DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(50) NULL,
  department_name VARCHAR(50) NULL,
  price INTEGER(10),
  stock_quantity INTEGER(10)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jeans", "clothing", "20", "50"),
("jacket", "clothing", "20", "10"),
("skirt", "clothing", "20", "15"),
("lotion", "personal care", "5", "95"),
("shampoo", "personal care", "7", "90"),
("mouse", "computers", "60", "30"),
("keyboard", "computers", "140", "25"),
("speakers", "computers", "180", "5"),
("dog food", "pet supplies", "30", "10"),
("dog bed", "pet supplies", "35", "10");
