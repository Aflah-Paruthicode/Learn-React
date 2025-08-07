const ContactUs = () => {
    return (
        <div className="contactUs mt-32">
            <h1>Contact Us</h1>
            <div className="w-3xl m-auto pt-16 font-[poppins]">
            <input className="w-full border h-16 rounded-lg p-5 my-5" type="text" placeholder="name" />
            <input className="w-full border h-16 rounded-lg p-5" type="email" placeholder="Enter your email" />
            <input className="w-full border h-16 rounded-lg p-5 my-5" type="tel" placeholder="Enter your phone" />
            <input className="w-full border h-16 rounded-lg p-5 my-5 cursor-pointer bg-black text-white font-bold" type="submit" />
            </div>
        </div>
    )
}

export default ContactUs