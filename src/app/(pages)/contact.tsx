'use client';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    const sendEmail: SubmitHandler<FieldValues> = (data) => {
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
                    success: 'Email send',
                    error: 'Error sending email',
                }
            )
            .then(() => {
                reset();
            });
    };
    return (
        <section id="Contact" className="w-full h-[50vh] my-44 font-code">
            <h2 className="text-center text-4xl pt-20 pb-5 font-main">
                Contact
            </h2>
            <form
                onSubmit={handleSubmit(sendEmail)}
                autoComplete="off"
                className="flex flex-col lg:flex-row items-center justify-center text-lg h-full"
            >
                <div className="flex flex-col m-2 w-3/4 lg:w-1/4 h-full">
                    <label htmlFor="name" className="pb-2 font-semibold">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: true })}
                        placeholder="Name"
                        className="border-2 border-gray-900 focus:outline-none focus:border-purple-500 bg-gray-900 rounded-md p-1"
                    ></input>
                    <label htmlFor="email" className="py-2 font-semibold">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        {...register('email', { required: true })}
                        placeholder="Email"
                        className="border-2 border-gray-900 focus:outline-none focus:border-purple-500 bg-gray-900 rounded-md p-1"
                    ></input>
                </div>
                <div className="flex flex-col m-2 w-3/4 lg:w-1/2 h-full items-end">
                    <label
                        htmlFor="message:"
                        className="w-full pb-2 font-semibold"
                    >
                        Message:
                    </label>
                    <textarea
                        id="message"
                        {...register('message', { required: true })}
                        placeholder="Message"
                        className="border-2 border-gray-900 focus:outline-none focus:border-purple-500 h-full w-full bg-gray-900 rounded-xl p-2 text-base lg:text-lg"
                    ></textarea>
                    <input
                        type="submit"
                        className="hover:bg-slate-950 h-12 w-20 bg-slate-600 rounded-xl m-3 text-base"
                    ></input>
                </div>
            </form>
        </section>
    );
};

export default Contact;
