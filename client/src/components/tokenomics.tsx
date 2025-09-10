import { Coins, Percent, Droplets, Flame } from "lucide-react";

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-ftf-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-12 text-ftf-gold" data-testid="tokenomics-title">
            TOKENOMICS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 shadow-coin" data-testid="tokenomics-supply">
              <h3 className="font-display text-2xl font-bold mb-4 text-ftf-gold flex items-center">
                <Coins className="mr-2" size={24} />
                Supply
              </h3>
              <div className="text-3xl font-bold mb-2">1,000,000,000</div>
              <p className="opacity-80">Total supply capped. No farming new tokens.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 shadow-coin" data-testid="tokenomics-taxes">
              <h3 className="font-display text-2xl font-bold mb-4 text-ftf-gold flex items-center">
                <Percent className="mr-2" size={24} />
                Taxes
              </h3>
              <div className="text-3xl font-bold mb-2 text-ftf-teal">0%</div>
              <p className="opacity-80">No buy/sell taxes. Touch grass, not our tokens.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 shadow-coin" data-testid="tokenomics-liquidity">
              <h3 className="font-display text-2xl font-bold mb-4 text-ftf-gold flex items-center">
                <Droplets className="mr-2" size={24} />
                Liquidity
              </h3>
              <div className="text-3xl font-bold mb-2 text-ftf-lilac">Locked</div>
              <p className="opacity-80">LP tokens burned. No rug, only fuck farmers.</p>
            </div>

            <div className="glass-card rounded-2xl p-8 shadow-coin" data-testid="tokenomics-burns">
              <h3 className="font-display text-2xl font-bold mb-4 text-ftf-gold flex items-center">
                <Flame className="mr-2" size={24} />
                Burns
              </h3>
              <div className="text-3xl font-bold mb-2 text-red-400">Random</div>
              <p className="opacity-80">Burn events when we feel like it. Chaos over crops.</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-red-500/20 border border-red-500 rounded-2xl" data-testid="legal-notice">
            <p className="text-center text-lg">
              <span className="text-red-400 mr-2">⚠️</span>
              <strong>Legal Notice:</strong> FTFC is a meme coin with no intrinsic value or expectation of financial return.
              For entertainment only. Don't invest your farm on this.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
