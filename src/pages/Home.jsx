import React, { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
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
            <section id='hero'>
            <Hero user={user} />
            </section>
            <div className="container mx-auto px-4 py-8">
                <About />
                <section id='skills'>
                <Skills skills={sortedFilteredSkills} />
                </section>
                <section id='projects'>
                <Projects projects = {sortedFilteredProject} onProjectClick={openModal} />
                </section>
                <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
    {selectedProject && (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <img
                src={selectedProject.image.url}
                alt={selectedProject.title}
                className="rounded-lg h-64 w-full object-cover mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedProject.techStack}</p>
            {/* Add more details or components as needed */}
            <button onClick={closeModal} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Close Modal</button>
        </div>
    )}
</Modal>
                <section id='services'>
                <Services services = {filteredServices} />
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
