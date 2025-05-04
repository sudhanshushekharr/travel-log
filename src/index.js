<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
const express= require('express')
const morgan=require('morgan');
const helmet=require('helmet');
const cors=require('cors')

const mongoose=require('mongoose');

require('dotenv').config();


const middlewares=require('./middlewares');
const logs=require('./api/logs')



mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const app=express();
app.use(morgan('common'));
app.use(helmet());
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
    }
));

app.use(express.json());

app.get('/',(req,res)=>{
res.json(
    {
        message:'Hello world',
    }
)
})

app.use('/api/logs',logs);

app.use(middlewares.notFound);


//error handling

app.use(middlewares.errorHandler)

const port=process.env.PORT || 1337;

app.listen(port, ()=>{
    console.log('Listening at http://localhost:1337');
    
});

>>>>>>> 95bee85043acb6243261dc1f33a561e7d2301736
