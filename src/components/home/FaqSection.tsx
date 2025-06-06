import { motion } from "framer-motion";
import { fadeUp } from "../ui/Animation";
import Titles from "../utils/Titles";

const faqs = [
  {
    question: "What types of courses does Klassroom offer?",
    answer:
      "We offer practical, expert-led courses on soft skills, IELTS preparation, SPSS data analysis, and more.",
  },
  {
    question: "Are Klassroom courses live or pre-recorded?",
    answer:
      "We offer both! Some sessions are live workshops, while others are self-paced video modules.",
  },
  {
    question: "Is there a certificate after completing a course?",
    answer:
      "Yes! All participants receive a certificate of completion for each course or workshop.",
  },
  {
    question: "How can I get support if I have questions?",
    answer:
      "You can join our learner community or contact us directly via email or our support chat.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="my-20 lg:my-28 px-3 lg:px-12  bg-yellow-50 py-12"
    >
      <>
        <Titles title="FAQs" subTitle="Got questions? We’ve got answers!" />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="collapse collapse-arrow bg-emerald-50 border border-emerald-100"
            >
              <input type="checkbox" />
              <div className="collapse-title text-lg font-medium text-emerald-800">
                {faq.question}
              </div>
              <div className="collapse-content text-gray-700">
                <p>{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </>
    </section>
  );
}
