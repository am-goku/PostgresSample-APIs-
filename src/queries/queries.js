export const queries = {
    getAllStudents: 'select * from students',
    getAllStudentsById: 'select * from students where id = $1',
    getByEmail: 'select s from students s where s.email = $1',
    addStudent: 'insert into students (name, email, age, dob) values ($1, $2, $3, $4)',
    removeStudent: 'delete from students where id = $1',

    updateStudent: 'update students set name = $1, email = $2, dob = $3, age = $4 where id = $5'
}