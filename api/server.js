import express, {json} from "express";
import authorRouter from './authors.js';
import bookRouter from './books.js';
import ownerRouter from './owner.js';
import bookStoreRouter from './bookstores.js';
import bodyParser from 'body-parser'

const server = express();

server.use(json());
server.use (bodyParser.json());


server.use('/api/authors',    authorRouter);
server.use('/api/books',      bookRouter);
server.use('/api/bookStores',  bookStoreRouter);
server.use('/api/owners',    ownerRouter);

export default server;