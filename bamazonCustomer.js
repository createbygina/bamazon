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
      start();
    });

      function start() {
        inquirer
          .prompt([{
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
//           .then(function(answer) {
//   10            var item = res[i];
//               if (answer.quantity <= item.stock_quantity){
//                   console.log("Purchase successful!")
//               }
//           })
        }
        listItems();
        //   

        function listItems(){
            connection.query(
                        "SELECT * FROM products",
                        function (err, res) {
                          for (var i = 0; i < res.length; i++) {
                            console.log("\n" + res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + "$" + res[i].price + " | " + "QTY: " + res[i].stock_quantity)
                            
        }
    })
}
      
