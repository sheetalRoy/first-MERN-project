const express = require('express');
const router = express.Router();
const members = require('../Members');

router.get('/', (req, res) => {
    res.json(members);
  });
  router.get('/:id', (req, res) => {
    // res.send(req.params.id);
    const found = members.some(item => item.id === parseInt(req.params.id));
    if(found){
    res.json(members.filter((item) => item.id === parseInt(req.params.id)));
    } else {
      res.status(401).json({msg: 'Not found'});
    }
  });
router.post('/', (req, res) => {
    // res.send(req.body);
    const newMember = {
        id: members.length + 1,
        name: req.body.name
    }
    members.push(newMember);
    res.json(members);
});

module.exports = router;