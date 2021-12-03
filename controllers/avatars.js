//controller

const express = require('express')
const router = express.Router();
const avatars = require('../data');
const Avatar = require('../models/avatars')

router.get('/', (req, res) => {
    const avatars = Avatar.all;
    res.send(avatars);
});

router.get('/:id', (req, res) => {
    const avatarId = parseInt(req.params.id);
    const selectedAvatar = Avatar.findById(avatarId);

    res.send(selectedAvatar);
});


module.exports = router;