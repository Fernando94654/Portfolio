'use client';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import Title from '../_components/Title/Title';

interface contactData {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<contactData>({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const sendEmail: SubmitHandler<contactData> = (data) => {
        const templateParams = {
            name: data.name,
            email: data.email,
            message: data.message,
        };

        const service = process.env.NEXT_PUBLIC_SERVICE_ID ?? '';
        const template = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '';
        const publicKey = process.env.NEXT_PUBLIC_P_KEY ?? '';

        toast
            .promise(
                emailjs.send(service, template, templateParams, publicKey),
                {
                    loading: 'Sending...',
                    success: 'Email sent',
                    error: 'Error sending email',
                }
            )
            .then(() => {
                reset();
            })
            .catch(() => {
                console.log('Error sending email');
            });
    };
    return (
        <section id="Contact" className="w-full min-h-[20rem] my-6 font-code lg:px-28 px-3">
            <Title level={2} className="pt-20 pb-5">
                Contact
            </Title>
            <p className="text-center text-slate-300 mb-6 text-lg">
                I&apos;d love to hear from you, send a message and I&apos;ll get back to you soon.
            </p>

            <form
                onSubmit={handleSubmit(sendEmail)}
                autoComplete="off"
                className="flex flex-col lg:flex-row lg:items-start items-stretch gap-6"
            >
                <div className="flex flex-col m-0 w-full lg:w-1/3">
                    <div className=" p-4 rounded-md">
                        <Title level={4} center={false} gradient={false} >
                            Name
                        </Title>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: true })}
                            placeholder="Your name"
                            className="bg-slate-950 border border-slate-700 focus:ring-2 focus:ring-sky-400 focus:border-transparent rounded-md px-3 py-2 text-slate-100 transition-shadow outline-none w-full"
                        />

                        <Title level={4} center={false} gradient={false} className="pt-4 pb-2 text-base lg:text-lg font-semibold text-slate-200 uppercase tracking-wider">
                            Email
                        </Title>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: true })}
                            placeholder="you@example.com"
                            className="bg-slate-950 border border-slate-700 focus:ring-2 focus:ring-sky-400 focus:border-transparent rounded-md px-3 py-2 text-slate-100 transition-shadow outline-none w-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col m-0 w-full lg:w-2/3">
                    <div className="p-4 rounded-xl">
                        <Title level={4} center={false} gradient={false} className="pb-2 text-base lg:text-lg font-semibold text-slate-200 uppercase tracking-wider">
                            Message
                        </Title>
                        <textarea
                            id="message"
                            {...register('message', { required: true })}
                            placeholder="Write your message here..."
                            className="bg-slate-950 border border-slate-700 focus:ring-2 focus:ring-sky-400 focus:border-transparent h-56 w-full rounded-md p-4 text-slate-100 resize-none transition-shadow outline-none"
                        />

                        <div className="flex justify-end mt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-500 hover:to-indigo-600 text-white font-semibold rounded-full px-6 py-3 shadow-lg transform hover:scale-105 transition-transform"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Contact;
