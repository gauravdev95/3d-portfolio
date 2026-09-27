import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Bio } from "../../data/constants";
import SectionHeading from "../SectionHeading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 40px 0 30px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const ContactForm = styled(motion.form)`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: rgba(17, 25, 40, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 34px;
  border-radius: 20px;
  box-shadow: rgba(23, 92, 230, 0.12) 0px 8px 32px;
  margin-top: 8px;
  gap: 14px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #854ce6, #a855f7, #ffb703);
  }
`;

const ContactTitle = styled.div`
  font-size: 26px;
  margin-bottom: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactSub = styled.div`
  font-size: 14.5px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;
  line-height: 1.6;

  a {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px dashed ${({ theme }) => theme.primary}88;

    &:hover {
      color: #c084fc;
    }
  }
`;

const Row = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ theme }) => theme.text_secondary + "55"};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 13px 16px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}22;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary}aa;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid ${({ theme }) => theme.text_secondary + "55"};
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 13px 16px;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}22;
  }

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary}aa;
  }
`;

const ContactButton = styled(motion.button)`
  width: 100%;
  text-align: center;
  background: linear-gradient(135deg, #854ce6, #6d28d9);
  padding: 14px 16px;
  margin-top: 4px;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 10px 28px rgba(133, 76, 230, 0.4);
  transition: box-shadow 0.3s ease, filter 0.3s ease;

  &:hover {
    filter: brightness(1.12);
    box-shadow: 0 14px 36px rgba(133, 76, 230, 0.55);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const Toast = styled(motion.div)`
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1300;
  padding: 14px 26px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  background: ${({ $ok }) =>
    $ok ? "rgba(16, 122, 87, 0.95)" : "rgba(158, 42, 43, 0.95)"};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(8px);
  white-space: nowrap;
`;

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (ok, msg) => {
    setToast({ ok, msg });
    setTimeout(() => setToast(null), 3600);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_120p6k8",
        "template_w4bafkd",
        form.current,
        "vhibrKemRZZj9o8Wn"
      )
      .then(
        () => {
          showToast(true, "Message sent — I'll get back to you soon.");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          showToast(false, "Couldn't send. Try emailing me directly instead.");
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <SectionHeading
          kicker="Get in touch"
          title="Let's build <g>something</g>"
          subtitle="Have a role, a project, or just a good idea worth talking about? My inbox is open — I usually reply within a day."
        />

        <ContactForm
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <ContactTitle>Email me</ContactTitle>
            <ContactSub>
              Prefer email? Reach me directly at{" "}
              <a href={`mailto:${Bio.email}`}>{Bio.email}</a>
            </ContactSub>
          </div>
          <Row>
            <ContactInput
              placeholder="Your Name"
              name="from_name"
              required
              autoComplete="name"
            />
            <ContactInput
              type="email"
              placeholder="Your Email"
              name="from_email"
              required
              autoComplete="email"
            />
          </Row>
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage
            placeholder="Tell me what you're working on…"
            name="message"
            rows={5}
            required
          />
          <ContactButton
            type="submit"
            disabled={sending}
            whileTap={{ scale: 0.98 }}
          >
            {sending ? "Sending…" : "Send Message"}
          </ContactButton>
        </ContactForm>
      </Wrapper>

      <AnimatePresence>
        {toast && (
          <Toast
            $ok={toast.ok}
            initial={{ opacity: 0, y: 24, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 16, x: "-50%" }}
            transition={{ duration: 0.3 }}
          >
            {toast.ok ? "✓ " : "✕ "}
            {toast.msg}
          </Toast>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Contact;
