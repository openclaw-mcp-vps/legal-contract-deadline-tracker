export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Legal Compliance Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never miss contract renewals<br />and legal deadlines again
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your contracts. Our AI extracts every key date, tracks renewals, and sends you smart reminders — so you stay protected without the manual work.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking for $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to explore. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {['AI Date Extraction', 'Email Reminders', 'Renewal Tracking', 'PDF & DOCX Support', 'Secure Storage'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { step: '01', title: 'Upload Contract', desc: 'Drop in any PDF or Word document. We handle the rest.' },
            { step: '02', title: 'AI Extracts Dates', desc: 'OpenAI reads your contract and pulls every deadline and renewal date.' },
            { step: '03', title: 'Get Reminded', desc: 'Receive email alerts 30, 14, and 7 days before each deadline.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
              <div className="text-white font-semibold mb-2">{title}</div>
              <div className="text-[#8b949e] text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited contract uploads',
              'AI-powered date extraction',
              'Automated email reminders',
              'Renewal opportunity tracking',
              'Secure encrypted storage',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors text-center"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What types of documents are supported?',
              a: 'We support PDF and Microsoft Word (.docx) files. Most standard contracts, NDAs, service agreements, and leases work out of the box.'
            },
            {
              q: 'How accurate is the AI date extraction?',
              a: 'We use OpenAI GPT-4 to parse your documents, achieving high accuracy on standard legal language. You can always review and edit extracted dates in your dashboard.'
            },
            {
              q: 'Can I cancel my subscription anytime?',
              a: 'Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-[#6e7681] text-sm">
        <p>&copy; {new Date().getFullYear()} Legal Contract Deadline Tracker. All rights reserved.</p>
      </footer>
    </main>
  )
}
