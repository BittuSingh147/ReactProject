import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("Bittu");
  const [email, setEmail] = useState("https://www.linkedin.com/in/bittusingh14/");
  const [text, setText] = useState("Visit my linkdln profile");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.Container}>
      <div className={styles.Contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA Email Form"
          icon={<MdOutlineMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="Email">Email</label>
            <input type="Email" name="Email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="Text">Text</label>
            <textarea type="Text" name="Text" rows={8} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit Button" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>

      <div className={styles.Contact_image}>
        <img src="/images/Contact.svg" alt="contact us"></img>
      </div>
    </section>
  );
};

export default ContactForm;
