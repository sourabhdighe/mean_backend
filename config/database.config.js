var lcon = "mongodb://localhost:27017/my_db";
//const userConnection = ('mongodb+srv://geetapustak:gIrGtF00jdTw9M5l@cluster0.68lq2.mongodb.net/geetapustak?retryWrites=true&w=majority');

module.exports = {
  lcon,
  // userConnection
};

module.exports.initMongoConnection = async () => {
  const connectionPool = {};
  try {
    mongoose.Promise = global.Promise;
    connectionPool.lcon = await mongoose.connect(lcon, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  } catch (e) {
    console.error(e)
  }

  return connectionPool;
};