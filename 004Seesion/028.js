function presentStudent() {
    const student = [ true , false , false , false , true , true , true , false , true];
    let presentStudentNum = 0;
    for ( let i = 0; i < student.length ; i++) {
        if (student[i] === true) {
            presentStudentNum += 1;
        }
    }
}
