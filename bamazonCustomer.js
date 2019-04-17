var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "lol",
  database: "bamazonDB"
});

connection.connect(function (err) {
      console.log("connected as id " + connection.threadId);
      start();;

      function start() {
        inquirer
          .prompt([
              {
              name: "item",
              type: "input",
              message: "Enter ID of the product you would like to purchase."

            },
            {
              name: "quantity",
              type: "input",
              message: "Please enter how many units you would like to purchase."
            }

          ])
          .then(function (answer) {
            connection.query(
              "INSERT INTO products SET", {
                item_id: answer.item,
                stock_quantity: answer.quantity
              },
              function (err) {
                if (err) throw (err);
                console.log("Insufficient quantity");
              }
            );
          });
        }
    });
