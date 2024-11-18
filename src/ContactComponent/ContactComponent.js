import "./ContactComponent.css";

const Contact = () => {
   return (
      <>
         <div className="contact-container">
            <div className="contact-body">
               <div className="contact-text">
                  <div className="contact-text-title">
                     <p>Let's Chat</p>
                  </div>
                  <div className="contact-text-body-up">
                     <div className="text-contact">
                        <p>Whether you have a question, want to start a project or simply want to connect.</p>
                     </div>
                  </div>
                  <div className="contact-text-body-down">
                     <div className="text-contact">
                        <p>Feel free to send me a message in the contact form</p>
                     </div>
                  </div>
               </div>
               <div className="contact-form">
                  <div className="sm-contact-form">
                     <div className="contact-title">
                        <p>Contact</p>
                     </div>

                     <div className="form-input">
                        <input
                           type="text"
                           name="name"
                           placeholder="Name *"
                           // value={formData.name}
                           // onChange={handleChange}
                           required
                        />
                        <input
                           type="email"
                           name="email"
                           placeholder="Email *"
                           // value={formData.email}
                           // onChange={handleChange}
                           required
                        />
                        
                        <input
                           type="tel"
                           name="phone"
                           placeholder="Phone"
                           // value={formData.phone}
                           // onChange={handleChange}
                        />
                        <textarea
                           name="message"
                           placeholder="Message"
                           // value={formData.message}
                           // onChange={handleChange}
                        />
                     </div>

                     <div className="submit">
                        <div className="submit-button">
                           <p>SUBMIT</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="map-container">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.145450980097!2d105.10610574260082!3d11.612978413903745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310bfedb05a161a7%3A0x9571e40776ff5756!2z4Z6b4Z-E4Z6A4Z6P4Z62IOGeiuGevuGemOGeluGfkuGemuGeuOGehCDhnpfhnrzhnpjhnrfhnoXhnrfhnpM!5e0!3m2!1sen!2skh!4v1731767027787!5m2!1sen!2skh"
               width="100%"
               height="550"
               style={{ border: 0 }}
               allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
         </div>
      </>   
   );
};

export default Contact;