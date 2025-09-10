export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-ftf-deeppurple to-ftf-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 text-ftf-gold" data-testid="about-title">
            WHY CHOOSE $FTF?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform" data-testid="feature-zero-yields">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="font-display text-2xl font-bold mb-4 text-ftf-gold">Zero Yields</h3>
              <p className="opacity-90">No farming, no staking, no harvest season. Just pure rebellious energy against agricultural metaphors in crypto.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform" data-testid="feature-anti-farming">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="font-display text-2xl font-bold mb-4 text-ftf-gold">Anti-Farming</h3>
              <p className="opacity-90">We're tired of crop references. Time to plant something different in the crypto landscape - pure chaos.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform" data-testid="feature-diamond-hands">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="font-display text-2xl font-bold mb-4 text-ftf-gold">Diamond Hands</h3>
              <p className="opacity-90">No weak hands allowed. We HODL against the agricultural establishment. To the moon, not the farm.</p>
            </div>
          </div>

          <div className="mt-16 p-8 glass-card rounded-2xl" data-testid="about-description">
            <p className="text-xl leading-relaxed">
              <span className="text-ftf-gold font-bold">FTF</span> is a community-powered meme coin that celebrates builders over farmers.
              No roadmap promises about harvest seasons. No yield farming bullshit.
              Just pure, unfiltered <span className="text-ftf-gold font-bold">VIBES</span> and middle fingers to agricultural metaphors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
