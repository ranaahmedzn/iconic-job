import React from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
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
        <div className='my-container bg-gray-100 font-bold w-full h-[calc(100vh-120px)] flex flex-col gap-6 justify-start items-center'>
            <h2 className='title-text text-4xl'>Assignment Marks Analysis</h2>
            <ResponsiveContainer width="100%" height="80%">
                <ComposedChart
                    width={920}
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
            </ResponsiveContainer>

        </div>
    );
};

export default Statistics;