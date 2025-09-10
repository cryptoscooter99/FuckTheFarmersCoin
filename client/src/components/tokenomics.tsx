import Section from "@/components/section";

const rows = [
  { label: "Max Supply", value: "1,000,000,000 FTFC" },
  { label: "Taxes", value: "0% buy / 0% sell / 0% transfer" },
  { label: "Launch Model", value: "Fair launch. 100% of supply added to initial LP, LP tokens burned permanently in the launch tx." },
  { label: "Contract", value: "Trading enabled at launch. Ownership renounced or time‑lock documented (no privileged mint/blacklist)." },
  { label: "Team & Treasury", value: "None. No team allocation. No marketing wallet. Community‑funded initiatives only (donations/merch)." },
  { label: "CEX/Partnerships", value: "Sourced from community donations after launch. No new token mints." },
  { label: "Burn Mechanics", value: "LP tokens burned at launch. Optional future event burns only from donations or revenue (if any)." },
  { label: "Liquidity Policy", value: "Immutable: burned LP + no ability to withdraw ensures permanent on‑chain liquidity." },
];

export default function Tokenomics(){
  return (
    <Section id="tokenomics" title="Tokenomics" className="bg-ftf-purple">
      <div className="grid gap-4 md:grid-cols-2">
        {rows.map(r => (
          <div key={r.label} className="p-6 rounded-2xl bg-ftf-purple/40 border border-white/10 shadow-coin">
            <h3 className="font-display text-2xl mb-1 text-ftf-gold">{r.label}</h3>
            <p className="opacity-90">{r.value}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm opacity-80">
        Note: FTFC is a meme coin with no intrinsic value or expectation of financial return. This information is for entertainment, not financial advice.
      </p>
    </Section>
  );
}
