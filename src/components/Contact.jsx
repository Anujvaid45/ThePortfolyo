import React from 'react';

const Contacts = ({ contacts }) => {
    return (
       
        <section className="py-12 px-4 sm:px-8 bg-gradient-to-r from-gray-900 to-black via-gray-700 pt-16">
            <div className="container mx-auto">
                <h2 className="text-white sm:text-4xl font-bold mb-8">Contacts</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contacts?.map((contact) => (
                        <li key={contact._id} className="bg-white shadow-lg rounded-lg p-4">
                            <h3 className="text-lg font-semibold mb-2">{contact.platform}</h3>
                            {contact.image && (
                                <img
                                    src={contact.image.url}
                                    alt={contact.platform}
                                    className="mt-4 mx-auto rounded-full h-32 w-32 sm:h-48 sm:w-48 object-cover"
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
        
    );
};

export default Contacts;
