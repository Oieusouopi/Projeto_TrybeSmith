export default {
  selectAllProducts: 'SELECT * FROM Trybesmith.Products',
  createProducts: 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
  loginUser: 'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
  allOrders: 'SELECT * FROM Trybesmith.Orders',
};