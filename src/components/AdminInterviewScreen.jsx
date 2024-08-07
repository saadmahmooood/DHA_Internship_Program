import React, { useState } from 'react';
import './StudentList.css'; // Import the CSS file

const studentsData = [
    { id: 1, rollNo: '001', name: 'Alice', cgpa: 3.5, itMarks: 85, mcqMarks: 90 },
    { id: 2, rollNo: '002', name: 'Bob', cgpa: 3.7, itMarks: 78, mcqMarks: 85 },
    { id: 3, rollNo: '003', name: 'Charlie', cgpa: 3.9, itMarks: 92, mcqMarks: 88 },
    { id: 4, rollNo: '404', name: 'David', cgpa: 3.6, itMarks: 88, mcqMarks: 92 },
    { id: 5, rollNo: '005', name: 'Eve', cgpa: 3.8, itMarks: 91, mcqMarks: 87 },
    { id: 6, rollNo: '001', name: 'Alice', cgpa: 3.5, itMarks: 85, mcqMarks: 90 },
    { id: 7, rollNo: '002', name: 'Bob', cgpa: 3.7, itMarks: 78, mcqMarks: 85 },
    { id: 8, rollNo: '003', name: 'Charlie', cgpa: 3.9, itMarks: 92, mcqMarks: 88 },
    
    
];

const StudentList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [students, setStudents] = useState(studentsData);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleInterviewMarksChange = (id, value) => {
        setStudents(students.map(student =>
            student.id === id ? { ...student, interviewMarks: value } : student
        ));
    };

    const handleSubmit = () => {
        alert('Submitted!');
    };

    const filteredStudents = students.filter(student =>
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedStudents = filteredStudents.sort((a, b) => 
        a.rollNo.toLowerCase() === searchTerm.toLowerCase() ? -1 : 1
    );

    return (
        
        <div className="student-list">
            <header className="header">
                <h1>Student List</h1>
                <input
                    type="text"
                    placeholder="Search by name or roll no"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-bar"
                />
            </header>

            <div className="student-table-container">
                <div className="student-table">
                    <div className="table-header">
                        <div className="header-item">Roll No</div>
                        <div className="header-item">Name</div>
                        <div className="header-item">CGPA</div>
                        <div className="header-item">IT Test Marks</div>
                        <div className="header-item">MCQ Test Marks</div>
                        <div className="header-item">Interview Marks</div>
                    </div>
                    {sortedStudents.map(student => (
                        <div key={student.id} className={`table-row ${student.rollNo.toLowerCase() === searchTerm.toLowerCase() ? 'highlighted' : ''}`}>
                            <div className="row-item">{student.rollNo}</div>
                            <div className="row-item">{student.name}</div>
                            <div className="row-item">{student.cgpa}</div>
                            <div className="row-item">{student.itMarks}</div>
                            <div className="row-item">{student.mcqMarks}</div>
                            <div className="row-item">
                                <input
                                    type="number"
                                    placeholder="Enter marks"
                                    onChange={(e) => handleInterviewMarksChange(student.id, e.target.value)}
                                    className="interview-input"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={handleSubmit} className="submit-button">
                Submit
            </button>
        </div>
    );
};

export default StudentList;
