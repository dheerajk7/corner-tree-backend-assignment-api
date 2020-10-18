const development = {
  name: "development",
  db: "corner-tree-assignment",
  db_path: "mongodb://localhost/corner-tree-assignment",
};

const production = {
  name: "production",
  db: "corner-tree-assignment",
  db_path: `mongodb+srv://jevik-zayka-user:${process.env.password}@cluster0.cmbhb.mongodb.net/corner-tree-assignment>?retryWrites=true&w=majority`,
};

module.exports = production;
