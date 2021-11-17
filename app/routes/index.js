const router = require('express').Router();
const { user_setting } = require('./user.route');
const {employee_setting } = require('./employee.route')

router.use('/org',user_setting);
router.use('/org', employee_setting);

module.exports =  router;