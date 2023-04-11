import React from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const Statistics = () => {
    const assignmentMarks = [
        { "id": 1, "name": "Assignment 1", "marks": 60 },
        { "id": 2, "name": "Assignment 2", "marks": 60 },
        { "id": 3, "name": "Assignment 3", "marks": 60 },
        { "id": 4, "name": "Assignment 4", "marks": 60 },
        { "id": 5, "name": "Assignment 5", "marks": 60 },
        { "id": 6, "name": "Assignment 6", "marks": 60 },
        { "id": 7, "name": "Assignment 7", "marks": 60 }
    ]

    return (
        <div className='bg-gray-100 font-bold w-full h-screen flex justify-center items-center'>

            <ComposedChart
                width={1000}
                height={400}
                data={assignmentMarks}
            >
                <CartesianGrid stroke="#ddd" />
                <XAxis dataKey="name" scale="auto" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="marks" barSize={40} fill="#828CF8" />
                <Line type="monotone" dataKey="marks" stroke="#ff7300" />
            </ComposedChart>

        </div>
    );
};

export default Statistics;