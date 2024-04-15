import React from 'react';

const Timeline = ({ education, experience }) => {

  const formatDate = (dateString) => {
    return dateString.replace("T00:00:00.000Z", " ");
};
    return (
        <section className="py-12 px-4 sm:px-8 bg-gradient-to-r from-gray-900 to-gray-600 pt-16">
            <div className="container mx-auto">
                <h2 className="text-white sm:text-4xl font-bold mb-4">Timeline</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-white sm:text-xl font-bold mb-4">Education</h3>
                        <ul className="space-y-4">
                            {education?.map((item) => (
                                <li key={item._id} className="border-l-4 border-blue-500 pl-4 py-2">
                                    <h4 className="text-white sm:text-xl font-bold">{item.jobTitle}</h4>
                                    <p className="text-white">{item.company_name}</p>
                                    <p className="text-white">{item.jobLocation}</p>
                                    <p className="text-white">{formatDate(item.startDate)} - {formatDate(item.endDate)}</p>
                                    <p className="text-white">{item.summary}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white sm:text-xl font-bold mb-4">Experience</h3>
                        <ul className="space-y-4">
                            {experience?.map((item) => (
                                <li key={item._id} className="border-l-4 border-green-500 pl-4 py-2">
                                    <h4 className="text-white sm:text-xl font-bold">{item.jobTitle}</h4>
                                    <p className="text-white">{item.company_name}</p>
                                    <p className="text-white">{item.jobLocation}</p>
                                    <p className="text-white">{formatDate(item.startDate)} - {formatDate(item.endDate)}</p>
                                    <p className="text-white">{item.summary}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

