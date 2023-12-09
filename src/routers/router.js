import { Router } from "express";
import { addStudent, getStudents, removeStudent, studentsById, updateStudent } from "../controllers/controller.js";

const router = Router()

router.get('/', getStudents)

router.get('/:id', studentsById)

router.post('/add', addStudent);

router.delete('/delete/:id', removeStudent);

router.put('/update/:id', updateStudent)


export default router