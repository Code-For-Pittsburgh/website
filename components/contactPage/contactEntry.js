import { useRef } from 'react';

export default function ContactEntry(){
    

    const nameRef = useRef();
    const emailRef = useRef();
    const organizationRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const organization = organizationRef.current.value;
        const message = messageRef.current.value;

        console.log(name  + ' ' + email + ' ' + organization + ' ' + message);
    };


    return(
    <>
        <section id='contact' className="relative py-36 bg-white overflow-hidden dark:bg-gray-900 dark:text-white">
        <img className="absolute bottom-0 right-0" src="flaro-assets/images/contact/gradient2.svg" alt="" />
        <div className="relative z-1 container px-4 mx-auto">
            <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 p-8">
                <div className="flex flex-col justify-between h-full">
                <div className="mb-6 md:max-w-md block">
                    <p className="mb-4 text-sm text-indigo-600 font-bold uppercase tracking-px">Contact us</p>
                    <h2 className="text-2xl; md:text-4xl xl:text-6xl font-bold font-heading tracking-px-n leading-none">It&apos;s time to let us work for you</h2>
                </div>
                <div className="block">
                    <p className="mb-2 text-sm text-gray-400 font-bold uppercase tracking-px">Email</p>
                    <ul className="mb-10">
                    <li className="text-xl font-semibold leading-normal">creator@bekdev.org</li>
                    <li className="text-xl font-semibold leading-normal">raphael@codeforpittsburgh.org</li>
                    </ul>
                    <p className="mb-2 text-sm text-gray-400 font-bold uppercase tracking-px">Phone</p>
                    <ul>
                    <li className="text-xl font-semibold leading-normal">+1 412 500 1001</li>
                    {/* <li className="text-xl font-semibold leading-normal">+1 848 4125 658</li> */}
                    </ul>
                </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
                <form className="px-11 pt-8 pb-12 bg-white dark:bg-gray-900 bg-opacity-80 md:max-w-xl ml-auto rounded-4xl shadow-12xl">
                <label className="block mb-4">
                    <p className="mb-2 text-gray-900 font-semibold leading-normal">Name</p>
                    <div className="relative">
                    <svg className="absolute left-4 top-1/2 transform -translate-y-1/2" width={20} height={26} viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3327 8.83358C13.3327 10.6745 11.8403 12.1669 9.99935 12.1669C8.1584 12.1669 6.66602 10.6745 6.66602 8.83358C6.66602 6.99263 8.1584 5.50024 9.99935 5.50024C11.8403 5.50024 13.3327 6.99263 13.3327 8.83358Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99935 14.6669C6.77769 14.6669 4.16602 17.2786 4.16602 20.5002H15.8327C15.8327 17.2786 13.221 14.6669 9.99935 14.6669Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input ref={nameRef} className="pl-12 pr-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="contactInput3-1" type="text" placeholder="Name" />
                    </div>
                </label>
                <label className="block mb-4">
                    <p className="mb-2 text-gray-900 font-semibold leading-normal">Organization</p>
                    <div className="relative">
                    <svg className="absolute left-4 top-1/2 transform -translate-y-1/2" width={20} height={26} viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3327 8.83358C13.3327 10.6745 11.8403 12.1669 9.99935 12.1669C8.1584 12.1669 6.66602 10.6745 6.66602 8.83358C6.66602 6.99263 8.1584 5.50024 9.99935 5.50024C11.8403 5.50024 13.3327 6.99263 13.3327 8.83358Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99935 14.6669C6.77769 14.6669 4.16602 17.2786 4.16602 20.5002H15.8327C15.8327 17.2786 13.221 14.6669 9.99935 14.6669Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input ref={organizationRef} className="pl-12 pr-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="contactInput3-1" type="text" placeholder="Organization" />
                    </div>
                </label>
                <label className="block mb-4">
                    <p className="mb-2 text-gray-900 font-semibold leading-normal">Email Address</p>
                    <div className="relative">
                    <svg className="absolute left-4 top-1/2 transform -translate-y-1/2" width={20} height={26} viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3327 8.83358C13.3327 10.6745 11.8403 12.1669 9.99935 12.1669C8.1584 12.1669 6.66602 10.6745 6.66602 8.83358C6.66602 6.99263 8.1584 5.50024 9.99935 5.50024C11.8403 5.50024 13.3327 6.99263 13.3327 8.83358Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99935 14.6669C6.77769 14.6669 4.16602 17.2786 4.16602 20.5002H15.8327C15.8327 17.2786 13.221 14.6669 9.99935 14.6669Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input ref={emailRef} className="pl-12 pr-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300" id="contactInput3-2" type="text" placeholder="Email address" />
                    </div>
                </label>
                <label className="block">
                    <p className="mb-2 text-gray-900 font-semibold leading-normal">Message</p>
                    <div className="relative">
                    <svg className="absolute left-4 top-4" width={20} height={26} viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3327 8.83358C13.3327 10.6745 11.8403 12.1669 9.99935 12.1669C8.1584 12.1669 6.66602 10.6745 6.66602 8.83358C6.66602 6.99263 8.1584 5.50024 9.99935 5.50024C11.8403 5.50024 13.3327 6.99263 13.3327 8.83358Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9.99935 14.6669C6.77769 14.6669 4.16602 17.2786 4.16602 20.5002H15.8327C15.8327 17.2786 13.221 14.6669 9.99935 14.6669Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <textarea ref={messageRef} className="mb-6 p-4 px-12 w-full h-48 font-medium text-gray-500 outline-none placeholder-gray-500 border border-gray-300 resize-none rounded-lg focus:ring focus:ring-indigo-300" id="contactInput3-3" placeholder="Who you are, what you do, and why you want to work together" defaultValue={""} />
                    <div className="md:inline-block">
                        <button className="py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200" onClick={handleSubmit} type="submit">Send Message</button>
                    </div>
                    </div>
                </label>
                </form>
            </div>
            </div>
        </div>
        </section>
    </>
    )
}


