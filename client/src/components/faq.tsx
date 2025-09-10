import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What the fuck is FTF?",
      answer: "FTF (Fuck The Farmers) is a meme coin built on Solana that represents our collective exhaustion with agricultural metaphors in crypto. No more yield farming, crop harvesting, or seed planting. Just pure, unfiltered rebellion.",
    },
    {
      question: "Will I get rich from FTF?",
      answer: "Probably not, but you'll have fun losing money with other anti-farming degenerates. This is a meme coin with zero utility, zero promises, and maximum chaos. Invest only what you can afford to lose to the void.",
    },
    {
      question: "Is there a team behind this?",
      answer: "We're a collective of anonymous builders who are tired of farming metaphors. No doxxed team, no venture capital, no corporate farming. Just pure grassroots (but not the farming kind) community energy.",
    },
    {
      question: "Can I stake or farm FTF?",
      answer: "ABSOLUTELY FUCKING NOT. The entire point is that we don't farm. You can't stake it, farm it, or harvest it. You can only HODL it and spread the anti-farming revolution. No yields, no crops, just vibes.",
    },
    {
      question: "When will FTF moon?",
      answer: "It will moon when the farmers are defeated and agricultural metaphors are banned from crypto forever. Until then, we HODL with diamond hands and spread chaos. The moon is not a farm - it's our destination.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-ftf-deeppurple to-ftf-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-12 text-ftf-gold" data-testid="faq-title">
            FAQ
          </h2>

          <Accordion type="single" collapsible className="space-y-6" data-testid="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl overflow-hidden border-none"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="p-6 hover:bg-white/5 transition-colors text-left">
                  <h3 className="font-display text-xl font-bold text-ftf-gold">
                    {faq.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-lg opacity-90 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
