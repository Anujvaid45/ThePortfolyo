import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
//eslint-diable-next-line
import Modal from 'react-modal';
function Home() {
    const params = useParams();
    const navigate = useNavigate();
    const userId = '65b3a22c01d900e96c4219ae'; //John doe

    const BASE_URL = 'https://portfolio-backend-30mp.onrender.com/api/v1';

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);


    useEffect(() => {
        document.cookie = `portfolio-name=portfolio1`;
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/get/user/${params?.user ?? userId}`);

                const userData = await response.json();

                document.title = `${userData?.user?.about?.name + ' - ' + userData?.user?.about?.title}`;
                setUser(userData?.user);
                setIsLoading(false);
                document.body.classList.remove('loaded');
            } catch (error) {
                navigate('/');
                setIsLoading(true);
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [params?.user, userId, navigate]);
    console.log(user);


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsSending(true);

    //     const formData = Object.fromEntries(new FormData(e.target).entries());
    //     const body = {
    //         ...formData,
    //         toEmail: 'ayushbhardwaj5718@gmail.com',
    //         toName: user?.about?.name,
    //     };

    //     try {
    //         const response = await fetch(`${BASE_URL}/temp/user-email/contact`, {
    //             method: 'POST',
    //             body: JSON.stringify(body), // You may need to adjust the serialization based on your server's expectations
    //             headers: {
    //                 'Content-Type': 'application/json', // Set the appropriate content type
    //             },
    //         });

    //         if (response.ok) {
    //             alert('Message sent successfully!');
    //             e.target.reset();
    //             // Handle success, such as showing a success message to the user
    //         } else {
    //             alert('Something went wrong!');
    //             console.error('Error sending message:', response.statusText);
    //             // Handle error, such as displaying an error message to the user
    //         }
    //     } catch (error) {
    //         console.error('Error sending message:', error.message);
    //         // Handle error, such as displaying an error message to the user
    //     } finally {
    //         setIsSending(false);
    //     }
    // };
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
        document.body.classList.remove('modal-open');
    };


    const sortedFilteredSkills = user?.skills?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const sortedFilteredProject = user?.projects?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const filteredServices = user?.services?.filter((item) => item.enabled);
    const filteredTestimonials = user?.testimonials?.filter((item) => item.enabled);
    const filteredSocialHandles = user?.social_handles?.filter((item) => item.enabled);
    const filteredEducation = user?.timeline?.filter((item) => item.forEducation && item.enabled);
    const filteredExperience = user?.timeline?.filter((item) => !item.forEducation && item.enabled);

    if (isLoading) {
        return <div className="w-full h-screen bg-black flex items-center justify-center text-center">Loading..</div>;
    }
    return (
        <div className="bg-gray-100 font-sans">
            <Header />
            <div className="container mx-auto">
                <section id='hero'>
                    <Hero user={user} />
                </section>
                <section id='abouts'>
                    <About abouts={user.about} />
                </section>
                <section id='skills'>
                    <Skills skills={sortedFilteredSkills} />
                </section>
                <section id='projects'>
                    <Projects projects={sortedFilteredProject} onProjectClick={openModal} />
                </section>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-50 backdrop-filter backdrop-blur-sm"
                >
                    {selectedProject && (
                        <div className="bg-white rounded-2xl shadow-lg max-w-xl w-full relative overflow-hidden mt-16">
                            <div className="p-8">
                                <button
                                    className="absolute top-7 right-4 text-gray-600 hover:text-gray-800 focus:outline-none transition duration-300"
                                    onClick={closeModal}
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                                <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                                <label  className="text-xl font-semibold text-gray-800">Description:</label>
                                <p className="text-gray-700 mb-4">
                                     {selectedProject.description}
                                </p>
                                <img
                                    src={selectedProject.image.url}
                                    alt={selectedProject.title}
                                    className="rounded-lg h-64 w-full object-cover mb-4"
                                />
                                <label  className="text-xl font-semibold text-gray-800">Tech-Stack:</label>
                                <p className="text-gray-700 mb-4">
                                    {selectedProject.techStack}
                                </p>
                            </div>
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-4 px-8 text-white flex justify-between rounded-b-lg">
                                <a
                                    href={selectedProject.githuburl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    GitHub Repository
                                </a>
                                <a
                                    href={selectedProject.liveurl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    )}
                </Modal>


                <section id='services'>
                    <Services services={filteredServices} />
                </section>
                <section id='timeline'>
                    <Timeline education={filteredEducation} experience={filteredExperience} />
                </section>
                <section id='testimonial'>
                    <Testimonial testimonials={filteredTestimonials} />
                </section>
                <section id='contact'>
                    <Contact contacts={filteredSocialHandles} />
                </section>
            </div>
            <footer className="bg-gray-900 text-white py-4 text-center">
                <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
            </footer>
        </div>
    );


}

export default Home;
