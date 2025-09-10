import { Check, Rocket, Crown } from "lucide-react";

export default function Roadmap() {
  const phases = [
    {
      number: 1,
      title: "Launch",
      status: "completed",
      icon: Check,
      items: [
        "✅ Coin launched with maximum chaos",
        "✅ Community formed around anti-farming sentiment",
        "✅ First \"Fuck The Farmers\" memes created",
        "✅ Liquidity locked (no farmers allowed)",
      ],
    },
    {
      number: 2,
      title: "Rebellion",
      status: "active",
      icon: Rocket,
      items: [
        "🚀 Major CEX listings (fuck the farm exchanges)",
        "🚀 Anti-farming NFT collection",
        "🚀 Partnerships with other non-agricultural projects",
        "🚀 \"Burn the Crops\" community events",
      ],
    },
    {
      number: 3,
      title: "Domination",
      status: "future",
      icon: Crown,
      items: [
        "👑 Global anti-farming movement",
        "👑 FTFC becomes the standard for non-agricultural memes",
        "👑 We'll do it live - whatever the community wants",
        "👑 Moon mission (but not farm moon)",
      ],
    },
  ];

  const getPhaseColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-ftf-gold text-ftf-deeppurple";
      case "active":
        return "bg-ftf-teal text-white";
      case "future":
        return "bg-ftf-lilac text-white";
      default:
        return "bg-ftf-gold text-ftf-deeppurple";
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-ftf-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-12 text-ftf-gold" data-testid="roadmap-title">
            ROADMAP TO NOWHERE
          </h2>

          <div className="space-y-8">
            {phases.map((phase) => {
              const IconComponent = phase.icon;
              return (
                <div
                  key={phase.number}
                  className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform"
                  data-testid={`roadmap-phase-${phase.number}`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getPhaseColor(phase.status)}`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-ftf-gold">
                      Phase {phase.number}: {phase.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-lg">
                    {phase.items.map((item, index) => (
                      <li key={index} className="opacity-90">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center" data-testid="roadmap-disclaimer">
            <p className="text-xl opacity-90">
              <span className="text-ftf-gold font-bold">Remember:</span> This roadmap is as real as our commitment to never farming.
              We promise nothing and deliver exactly that, plus some chaos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
