use RetailDB;

db.sales.insertMany([
  {product: "Laptop", category: "Electronics", quantity: 2, price: 50000},
  {product: "Mobile", category: "Electronics", quantity: 3, price: 20000},
  {product: "Chair", category: "Furniture", quantity: 5, price: 3000},
  {product: "Table", category: "Furniture", quantity: 2, price: 8000}
]);

db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      totalSales: {
        $sum: {$multiply: ["$quantity", "$price"]}
      }
    }
  },
  {
    $sort: {totalSales: -1}
  }
]);