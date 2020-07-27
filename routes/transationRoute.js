const express = require('express');
const router = express.Router();
const { getTransactions , deleteTransactions , addTransactions } = require('../controllers/transactionCtrl');

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions);

router
    .route('/:id')
    .delete(deleteTransactions);

module.exports = router;