import { response } from "express";
import pool from "../config/config.js";
import { queries } from "../queries/queries.js";



export const getAllStudentsHelper = () => {
    return new Promise((resolve, reject) => {
        pool.query(queries.getAllStudents).then((response)=> {
            resolve(response.rows)
        }).catch((err)=> {
            reject(err)
        })
    })
}

export const getAllStudentsById = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(queries.getAllStudentsById, [id]).then((response)=> {
            resolve(response.rows)
        }).catch((err)=> {
            reject(err)
        })
    })
}

export const getStudentsByEmail = (email) => {
    return new Promise((resolve, reject) => {
        pool.query(queries.getByEmail, [email]).then((response) => {
            resolve(response.rows);
        }).catch((err) => {
            reject(err)
        })
    })
}


export const addStudentHelper = (data) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, age, dob } = data;

        const student = await getStudentsByEmail(email)
        if(student.length > 0){
            reject({status:400, code:"BAD_REQUEST", message: 'Email already registered'});
        } else {
            pool
              .query(queries.addStudent, [name, email, age, dob])
              .then((response) => {
                resolve(response.rows);
              })
              .catch((err) => {
                reject(err);
              });
        }
    })
}


export const removeHelper = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(queries.removeStudent, [id]).then((response) => {
            if(!response.rowCount.length){
                reject("Student not found")
            }
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}



export const updateHelper = (data, id) => {
    return new Promise(async (resolve, reject) => {
        
        const student = await pool.query(queries.getAllStudentsById, [id]);

        if(!student.rows.length){
            reject({message: "user not found"})
        }

        const userData = {
            name: student.rows[0]?.name,
            email: student.rows[0]?.email,
            dob: student.rows[0]?.dob,
            age: student.rows[0]?.age
        }
        const name = data.name || userData.name;
        const email = data.email || userData.email;
        const dob = data.dob || userData.dob;
        const age = data.age || userData.age;
        
        pool.query(queries.updateStudent, [name, email, dob, age, id]).then((response) => {
            resolve(response)
        }).catch((err) => {
            reject(err)
        })
    })
}