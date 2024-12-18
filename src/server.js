import express from 'express';
import { StatusCodes } from 'http-status-codes';

const STATUS = {
  SUCCESS: 'OK',
  ERROR: 'NO',
  BAD_REQUEST: 'BAD REQUEST'
}

const app = express();

app.use(express.json());  

app.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.status(StatusCodes.OK).send({
    status: STATUS.SUCCESS,
    message: 'Hello World',
    data: { name: 'John Doe' }
  });
});

app.post('/', (req, res) => {
  const data = [];
  const { body } = req;

  if (!body.name) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      status: STATUS.BAD_REQUEST,
      message: 'name is required'
    });
  }

  data.push(body);
  return res.status(StatusCodes.CREATED).send({
    status: STATUS.SUCCESS,
    message: 'success create data',
    data: data
  });
});

app.listen(3000, () => {
  console.log('🐱‍🏍 Server is running on http://localhost:3000');
});
