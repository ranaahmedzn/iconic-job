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
        <div className='px-3 py-10 lg:py-0 lg:pb-12 bg-gray-100 font-bold w-full h-full flex flex-col justify-start items-center'>
            <h2 className='title-text text-4xl pb-6'>Assignment Analytics</h2>
            <div style={{width: "100%", maxWidth: "920px", height: "400px"}}>
                <ResponsiveContainer>
                    <ComposedChart
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
        </div>
    );
};

export default Statistics;