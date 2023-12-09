import { response } from "express"
import { addStudentHelper, getAllStudentsById, getAllStudentsHelper, removeHelper, updateHelper } from "../helpers/helper.js"






export const getStudents = (req, res) => {
    getAllStudentsHelper().then((response) => {
        res.status(200).send(response)
    }).catch((err)=> {
        res.status(500).send(err)
    })
}


export const studentsById = (req, res) => {

    const id = parseInt(req.params.id)

    getAllStudentsById(id).then((response)=> {
        res.status(200).send(response)
    }).catch((err)=> {
        res.status(500).send(err)
    })
}


export const addStudent = (req, res) => {
    const {name, age, email, dob} = req.body;

    addStudentHelper(req.body).then((response)=> {
        res.status(200).send(response);
    }).catch((error) => {
        res.status(500).send(error)
    })

}


export const removeStudent = (req, res) => {
    const id = parseInt(req.params.id)

    removeHelper(id).then((response) => {
        res.status(200).send(response)
    }).catch((err) => {
        res.status(500).send(err)
    })
}



export const updateStudent = (req, res) => {
    const id = parseInt(req.params.id);

    updateHelper(req.body, id)
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
}