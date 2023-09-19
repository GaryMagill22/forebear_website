import React from "react";
import { useState } from "react";
import axios from "axios";




function NewsLetterSignup() {

    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });


    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
    }




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/Signup', formData);
            setMessage(response.data.message);
            // clear formData after submitted
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
            });
        } catch (error) {
            setMessage(error.response.data.error);
        }
    };


    return (

        <div className="py-16 sm:py-24">
            <div className="mx-auto max-w-7.5xl sm:px-6 lg:px-10">
                <div className="relative isolate overflow-hidden bg-gray-900 px-8 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Get notified when we’re launching!
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
                        Sign up to receive updates on our launch and be the first to know when we’re live.
                    </p>
                    <form className="mx-auto mt-8 flex max-w-xxl gap-x-4" onSubmit={handleSubmit}>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input onChange={changeHandler}

                            value={formData.firstName}
                            name="firstName"
                            type="text"
                            required
                            className="min-w-3 flex-auto rounded-md border-3 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                            placeholder="First Name"
                        />
                        <input onChange={changeHandler}
                            value={formData.lastName}
                            name="lastName"
                            type="text"
                            required
                            className="min-w-3 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                            placeholder="Last Name"
                        />
                        <input onChange={changeHandler}
                            value={formData.email}
                            name="email"
                            type="email"
                            required
                            className="min-w-4 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                            placeholder="Email."
                        />
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Notify Me
                        </button>
                    </form>

                </div>
            </div>
            {message && <div className="mt-4 text-center text-white">{message}</div>}

        </div>
    )
}

export default NewsLetterSignup;


