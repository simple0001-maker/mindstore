"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Do I need to sign up?",
    answer: "No. RecallBox works right here for this demo."
  },
  {
    question: "Is my data private?",
    answer: "Yes. RecallBox is designed with a 'Privacy First' approach. The notes you save here are processed locally or ephemeral, ensuring your knowledge stays yours."
  },
  {
    question: "How does the search work?",
    answer: "You can ask natural questions like 'How do I restart the server?'. You don't need to remember specific keywords or titles."
  },
  {
    question: "Can I save images or files?",
    answer: "Currently, RecallBox helps you recall text-based knowledge—facts, procedures, and notes. Image support is on the roadmap."
  },
  {
    question: "Is it free?",
    answer: "Yes, RecallBox is currently free to use."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6 tracking-tight">
            Frequently Asked <span className="text-brand-500">Questions</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium font-sans">
            Everything you need to know about RecallBox.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-zinc-200 dark:border-zinc-800 rounded-2xl px-6 bg-zinc-50/50 dark:bg-zinc-900/10 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-6 text-lg font-bold text-zinc-900 dark:text-white text-left tracking-tight">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-600 dark:text-zinc-400 text-md font-medium leading-relaxed pb-6 font-sans">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
