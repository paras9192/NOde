// //to inset the data from the form to the data base we have a node extension bodyparser

// const bodyparser = require('body-parser');

// app.use(bodyparser.json());


//function insertRecord(req, res) {
//     var employee = new Employee();
//     employee.fullName = req.body.fullName;
//     employee.email = req.body.email;
//     employee.mobile = req.body.mobile;
//     employee.city = req.body.city;
//     employee.save((err, doc) => {
//         if (!err)
//             res.redirect('employee/list');
//         else {
//             if (err.name == 'ValidationError') {
//                 handleValidationError(err, req.body);
//                 res.render("employee/addOrEdit", {
//                     viewTitle: "Insert Employee",
//                     employee: req.body
//                 });
//             } else
//                 console.log('Error during record insertion : ' + err);
//         }
//     });
// }