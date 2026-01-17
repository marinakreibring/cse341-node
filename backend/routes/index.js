const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Welcome to the API.');
});

router.use('/api-docs', require('./swagger'));
router.use('/professional', require('./professional'));

module.exports = router;