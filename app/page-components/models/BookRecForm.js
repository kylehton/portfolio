import { useState } from "react";
import emailjs from "@emailjs/browser";
import dotenv from "dotenv";

export default function BookForm() {

    dotenv.config();
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const apiKey = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;

    const [bookTitle, setBookTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = bookTitle.trim();
        if (!bookTitle) {
            alert("Please enter a book title.");
            return;
        }
        setBookTitle("");
        const templateParams = {
        book_title: title,
        };

        try {
        await emailjs.send(
            serviceID,     // emailjs service id
            templateID,    // emailjs template id
            templateParams,
            apiKey // my emailjs api key
        );
        alert("Thanks for the recommendation!");
        } catch (error) {
        console.error("Email send failed:", error);
        }
    };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="book title"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
        className="text-xs lg:text-sm border-b-2 px-4 py-2 w-1/2 focus:border-zinc-400 focus:outline-none"
        required
      />
      <button type="submit" className="ml-5 bg-zinc-400 text-xs lg:text-sm text-white px-3 py-1.5 rounded">
        submit
      </button>
    </form>
  );
}