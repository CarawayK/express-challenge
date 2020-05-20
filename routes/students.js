var express = require('express');
var router = express.Router();

const fs = require('fs')

const students = JSON.parse(fs.readFileSync('students.json'))

/* GET students listing. */
router.get('/', function(req, res, next) {
  let result = students
  if (req.query.name) {
    // process a query
    const selectedStudent = students.filter(student => student.studentName === req.query.name)
    result = selectedStudent
  }
  res.send(result);
});

/* GET specific student listing. */
router.get('/:studentid', function(req, res, next) {
  const selectedStudent = students.find(student => student.studentid === Number(req.params.studentid))
  res.send(selectedStudent);
});

/* GET specific student grades. */
router.get('/grades/:studentid', function(req, res, next) {
  const selectedStudent = students.find(student => student.studentid === Number(req.params.studentid))
  res.send(selectedStudent.grades);
});

/* POST process a new grade. */
router.post('/grade', function(req, res, next) {
  let poststatus = 200
  let message = 'Grade update received with invalid format'
  if (req.body.studentid && req.body.grade) {
    // process a grade update
    poststatus = 200
    message = 'OK'
  }
  res.status(poststatus).send(message);
});

module.exports = router;
