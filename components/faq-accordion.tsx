import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/site";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="grid gap-3">
      {faqs.map((faq, index) => (
        <AccordionItem value={`faq-${index}`} key={faq.question}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
