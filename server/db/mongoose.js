var mongoose = require('mongoose');

const REMOTE_MONGO = 'mongodb://ca.vargas28@gmail.com:Converse1!@ds125588.mlab.com:25588/todoapp';
const LOCAL_MONGO = 'mongodb://localhost:27017/TodoApp';
const MONGO_URI = process.env.PORT ? REMOTE_MONGO : LOCAL_MONGO;

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to Mongo instance.')
}, (err) => {
    console.log('Error connecting to Mongo instance: ', err);
});

module.exports = {mongoose}
