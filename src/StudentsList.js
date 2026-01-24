function StudentsList() {
    const students = [
        { id: 1, name: "Deva" },
        { id: 2, name: "Arun" },
        { id: 3, name: "Priya" }
    ];
    return(
        <ul>
            {students.map((student) =>(
                <li key={student.id}>{student.name}</li>
            ))}
        </ul>
    );
}
export default StudentsList;