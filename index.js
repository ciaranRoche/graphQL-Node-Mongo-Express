import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

// import schema from './graphql';

const app = express();

mongoose.connect('mongodb://muldoon:muldoon@ds161022.mlab.com:61022/graphql-api');
const db = mongoose.connection
db.on('error', () => console.log('---failed to connect to database---'))
	.once('open', () => console.log('+++connected to database+++'))


app.get('/', (req, res) => {
  res.send("hello world, this is graphql api.");
});

// app.use('/graphql', graphqlHTTP(()=>({
//   schema,
//   graphql: true,
//   pretty: true
// })));

app.listen(3000, () => {
  console.log("+++graphql api running on port 3000+++")
})
