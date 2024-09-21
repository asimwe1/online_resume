import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { HiMail, HiUser } from 'react-icons/hi';
import { BsChatTextFill } from 'react-icons/bs';
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';
import { Modal } from 'antd';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.status === 200) {
                setIsOpen(true); // Open success modal
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred while sending the message.');
        }
    };

    return (
        <BannerLayout>
            <div className="px-4 py-2">
                {/* Contact Information */}
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>Rwanda</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>Kigali</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Company:</span>
                                <span className='text-LightGray md:text-sm'>ApheZis LTD</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>landryasimwe@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>Asimwe Landry</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>+250 785 674 868</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://landryasimwe@gmail.com" target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/asimwe1" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/asimwe-landry/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://x.com/phantomG320339" target='_blank' rel="noreferrer"><FaTwitter /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href="https://www.fiverr.com/landry_sb" target='_blank' rel="noreferrer"><Fiverr_Icon /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1' href="https://www.upwork.com/freelancers/~01571316ba25f376a1" target='_blank' rel="noreferrer"><SiUpwork /></a>
                </div>

                {/* Get In Touch Form */}
                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <div className="flex flex-col w-full">
                            <div className="relative mb-6">
                                <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                    <HiUser />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    className="input_stylings"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <div className="relative mb-6">
                                <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                    <HiMail />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    className="input_stylings"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col w-full">
                            <div className="relative mb-6">
                                <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                    <BsChatTextFill />
                                </div>
                                <textarea
                                    rows={6}
                                    cols={50}
                                    name="message"
                                    className="input_stylings"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="my-4">
                            <button onClick={handleSubmit} className="button"> SEND MESSAGE </button>
                        </div>
                    </div>
                </div>

                {/* Success Modal */}
                <Modal
                    className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                    centered
                    open={isOpen}
                    footer={null}
                    closable={false}
                    onOk={() => setIsOpen(false)}
                    onCancel={() => setIsOpen(false)}
                >
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='text-Green font-bold text-2xl'>Message Sent!</h1>
                        <p className='text-Snow'>Thank you for getting in touch. I will respond shortly.</p>
                    </div>
                </Modal>
            </div>
            <Footer />
        </BannerLayout>
    );
};

export default Contact;
