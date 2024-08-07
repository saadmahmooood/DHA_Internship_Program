import React from 'react';
import './FinalResult.css'; // Ensure you have the correct path to your CSS file

// Example student data
const students = [
    { name: 'John Doe', email: 'john@example.com', cnic: '12345-6789012-3', gpa: 3.8, itMarks: 85, mcqMarks: 90, interviewMarks: 88, finalAggregate: 87 },
    { name: 'Jane Smith', email: 'jane@example.com', cnic: '98765-4321098-7', gpa: 3.9, itMarks: 90, mcqMarks: 85, interviewMarks: 92, finalAggregate: 88 },
    { name: 'Alice Johnson', email: 'alice@example.com', cnic: '54321-6789012-3', gpa: 3.6, itMarks: 80, mcqMarks: 75, interviewMarks: 85, finalAggregate: 80 },
    { name: 'Bob Brown', email: 'bob@example.com', cnic: '67890-1234567-8', gpa: 3.7, itMarks: 78, mcqMarks: 82, interviewMarks: 80, finalAggregate: 79 },
    { name: 'Charlie Davis', email: 'charlie@example.com', cnic: '11223-4455667-8', gpa: 3.5, itMarks: 70, mcqMarks: 72, interviewMarks: 75, finalAggregate: 72 },
    { name: 'David Evans', email: 'david@example.com', cnic: '99887-6655443-2', gpa: 3.9, itMarks: 88, mcqMarks: 87, interviewMarks: 90, finalAggregate: 88 },
    { name: 'Eva Green', email: 'eva@example.com', cnic: '55443-2211009-4', gpa: 3.4, itMarks: 65, mcqMarks: 70, interviewMarks: 68, finalAggregate: 68 },
    { name: 'Frank Harris', email: 'frank@example.com', cnic: '77665-4433221-0', gpa: 3.7, itMarks: 78, mcqMarks: 80, interviewMarks: 82, finalAggregate: 80 },
    { name: 'Grace King', email: 'grace@example.com', cnic: '22334-5566778-9', gpa: 3.6, itMarks: 73, mcqMarks: 78, interviewMarks: 77, finalAggregate: 76 },
    { name: 'Hannah Lee', email: 'hannah@example.com', cnic: '99876-5544332-1', gpa: 3.8, itMarks: 85, mcqMarks: 89, interviewMarks: 84, finalAggregate: 86 },
    // Add more student data as needed
];

const FinalResult = () => {
    // Sort students by final aggregate score in descending order
    const sortedStudents = [...students].sort((a, b) => b.finalAggregate - a.finalAggregate);

    return (
        <div className="final-result">
            <h1>Final Results</h1>
            <table className="result-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>CNIC</th>
                        <th>GPA</th>
                        <th>IT Test Marks</th>
                        <th>MCQ Marks</th>
                        <th>Interview Marks</th>
                        <th>Final Aggregate</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedStudents.map((student, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.cnic}</td>
                            <td>{student.gpa}</td>
                            <td>{student.itMarks}</td>
                            <td>{student.mcqMarks}</td>
                            <td>{student.interviewMarks}</td>
                            <td>{student.finalAggregate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FinalResult;
