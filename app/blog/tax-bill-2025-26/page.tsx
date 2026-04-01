import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import CTAFooter from '@/app/Components/CTAFooter'

export default function TaxBillPost() {
    return (
        <>
            {/* Hero Section - Black */}
            <section className="pt-32 pb-16 bg-black text-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center font-inter text-sm tracking-wide text-white/70 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft className="mr-2" size={18} />
                        Back to Insights
                    </Link>

                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-white/10 border border-white/20 font-inter text-xs uppercase tracking-wide text-white/90">
                            Tax Planning
                        </span>
                    </div>

                    <div className="flex items-center gap-4 font-inter text-xs uppercase tracking-wider text-white/70 mb-8">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <time>April 1, 2026</time>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                            <Clock size={14} />
                            <span>12 min read</span>
                        </div>
                    </div>

                    <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
                        Your Tax Bill Just Got Structurally Cheaper.
                    </h1>

                    <p className="font-cormorant text-2xl md:text-3xl font-light text-white/90 leading-relaxed">
                        Same Income. Same Regime. Significantly Less Tax.
                    </p>
                </div>
            </section>

            {/* Content Section - White */}
            <article className="py-16 lg:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-12">

                    {/* Opening Quote */}
                    <div className="border-l-2 border-black pl-8 mb-12 bg-gray-50 py-6">
                        <p className="font-inter text-lg italic text-gray-700 leading-relaxed">
                            FY 2025-26 did not just expand the new tax regime — it repriced it. A person earning Rs. 25 lakhs and opting for the new regime in FY 2024-25 was paying roughly Rs. 4.68 lakhs in tax. The same person, same income, same regime in FY 2025-26 pays Rs. 3.43 lakhs. That Rs. 1.25 lakh annual difference did not require a single change in behaviour. The question is what you do with it.
                        </p>
                    </div>

                    <p className="font-inter text-sm text-gray-500 mb-12">
                        Applicable: FY 2025-26 | New Tax Regime only | Individual taxpayers
                    </p>

                    {/* Assumptions */}
                    <div className="bg-gray-50 p-8 mb-12">
                        <h3 className="font-cormorant text-2xl font-medium text-black mb-4">
                            Assumptions Underlying This Analysis
                        </h3>
                        <ul className="space-y-3 font-inter text-gray-700">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                                <span>All income figures are gross total income — no deductions, exemptions, or allowances of any kind.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                                <span>No capital gains income (short-term or long-term) and no special-rate income (lottery, etc.) is included.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                                <span>Both FY 2024-25 and FY 2025-26 calculations use the new tax regime only. No old regime comparison is made.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                                <span>Health & Education Cess at 4% is included in all figures. Surcharge is not applicable for income up to Rs. 50 lakhs.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                                <span>Salaried individuals get an additional standard deduction of Rs. 75,000 under the new regime in FY 2025-26 (Rs. 50,000 in FY 2024-25), which would further reduce their taxable income — and therefore their tax — beyond what this table shows.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Section 1 */}
                    <h2 className="font-cormorant text-3xl font-medium text-black mb-6 mt-16">
                        1. The Year-on-Year Reduction: Same Regime, Less Tax
                    </h2>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-8">
                        The table below compares tax payable under the new regime for the same income level across two consecutive years — FY 2024-25 and FY 2025-26. No regime switch. No restructuring. Just the policy change working in your favour.
                    </p>

                    {/* Table 1 */}
                    <div className="overflow-x-auto mb-8">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-inter text-sm font-medium text-gray-700">Gross Income</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-inter text-sm font-medium text-gray-700">Tax Payable FY 2024-25 (New Regime)</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-inter text-sm font-medium text-gray-700">Avg Rate FY 2024-25</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-inter text-sm font-medium text-gray-700">Tax Payable FY 2025-26 (New Regime)</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-inter text-sm font-medium text-gray-700">Avg Rate FY 2025-26</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-inter text-sm font-medium text-gray-700">Annual Tax Saving</th>
                                </tr>
                            </thead>
                            <tbody className="font-inter text-sm">
                                <tr><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 8,00,000</td><td className="border border-gray-300 px-4 py-3">Rs. 36,400</td><td className="border border-gray-300 px-4 py-3">4.5%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 0</td><td className="border border-gray-300 px-4 py-3 font-medium">0.0%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 36,400</td></tr>
                                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 10,00,000</td><td className="border border-gray-300 px-4 py-3">Rs. 62,400</td><td className="border border-gray-300 px-4 py-3">6.2%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 0</td><td className="border border-gray-300 px-4 py-3 font-medium">0.0%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 62,400</td></tr>
                                <tr><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 12,00,000</td><td className="border border-gray-300 px-4 py-3">Rs. 93,600</td><td className="border border-gray-300 px-4 py-3">7.8%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 0</td><td className="border border-gray-300 px-4 py-3 font-medium">0.0%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 93,600</td></tr>
                                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 15,00,000</td><td className="border border-gray-300 px-4 py-3">Rs. 1,56,000</td><td className="border border-gray-300 px-4 py-3">10.4%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 1,09,200</td><td className="border border-gray-300 px-4 py-3 font-medium">7.3%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 46,800</td></tr>
                                <tr><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 20,00,000</td><td className="border border-gray-300 px-4 py-3">Rs. 3,12,000</td><td className="border border-gray-300 px-4 py-3">15.6%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 2,08,000</td><td className="border border-gray-300 px-4 py-3 font-medium">10.4%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 1,04,000</td></tr>
                                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 25,00,000</td><td className="border border-gray-300 px-4 py-3">Rs. 4,68,000</td><td className="border border-gray-300 px-4 py-3">18.7%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 3,43,200</td><td className="border border-gray-300 px-4 py-3 font-medium">13.7%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 1,24,800</td></tr>
                                <tr><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 30,00,000</td><td className="border border-gray-300 px-4 py-3">Rs. 6,24,000</td><td className="border border-gray-300 px-4 py-3">20.8%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 4,99,200</td><td className="border border-gray-300 px-4 py-3 font-medium">16.6%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 1,24,800</td></tr>
                                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 50,00,000</td><td className="border border-gray-300 px-4 py-3">Rs. 12,48,000</td><td className="border border-gray-300 px-4 py-3">25.0%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 11,23,200</td><td className="border border-gray-300 px-4 py-3 font-medium">22.5%</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 1,24,800</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="font-inter text-sm italic text-gray-600 mb-8">
                        Both columns use the new tax regime. Includes 4% Health & Education Cess. See assumptions box above. Salaried taxpayers will show higher savings due to increased standard deduction from Rs. 50,000 to Rs. 75,000.
                    </p>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-12">
                        The reduction in average rate is most dramatic in the Rs. 8 lakh to Rs. 20 lakh band. A person earning Rs. 12 lakhs goes from an average rate of 7.8% in FY 2024-25 to zero in FY 2025-26 — a complete elimination of tax liability. At Rs. 25 lakhs, the average rate drops from 18.7% to 13.7%. These are not rounding-error adjustments. They represent a deliberate reset of the tax cost of earning income in India.
                    </p>

                    {/* Section 2 */}
                    <h2 className="font-cormorant text-3xl font-medium text-black mb-6 mt-16">
                        2. What Actually Changed in the New Regime
                    </h2>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-8">
                        Three specific changes drove this reduction. Understanding them separately helps you see exactly where the benefit comes from.
                    </p>

                    {/* Table 2 */}
                    <div className="overflow-x-auto mb-8">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-inter text-sm font-medium text-gray-700">Parameter</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-inter text-sm font-medium text-gray-700">FY 2024-25</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-inter text-sm font-medium text-gray-700">FY 2025-26</th>
                                </tr>
                            </thead>
                            <tbody className="font-inter text-sm">
                                <tr><td className="border border-gray-300 px-4 py-3">Basic exemption limit</td><td className="border border-gray-300 px-4 py-3">Rs. 3,00,000</td><td className="border border-gray-300 px-4 py-3">Rs. 4,00,000</td></tr>
                                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3">Slab at 5%</td><td className="border border-gray-300 px-4 py-3">Rs. 3L to Rs. 6L</td><td className="border border-gray-300 px-4 py-3">Rs. 4L to Rs. 8L</td></tr>
                                <tr><td className="border border-gray-300 px-4 py-3">Slab at 10%</td><td className="border border-gray-300 px-4 py-3">Rs. 6L to Rs. 9L</td><td className="border border-gray-300 px-4 py-3">Rs. 8L to Rs. 12L</td></tr>
                                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3">Slab at 15%</td><td className="border border-gray-300 px-4 py-3">Rs. 9L to Rs. 12L</td><td className="border border-gray-300 px-4 py-3">Rs. 12L to Rs. 16L</td></tr>
                                <tr><td className="border border-gray-300 px-4 py-3">Slab at 20%</td><td className="border border-gray-300 px-4 py-3">Rs. 12L to Rs. 15L</td><td className="border border-gray-300 px-4 py-3">Rs. 16L to Rs. 20L</td></tr>
                                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3">New slab at 25%</td><td className="border border-gray-300 px-4 py-3">Not applicable</td><td className="border border-gray-300 px-4 py-3">Rs. 20L to Rs. 24L</td></tr>
                                <tr><td className="border border-gray-300 px-4 py-3">Slab at 30%</td><td className="border border-gray-300 px-4 py-3">Above Rs. 15L</td><td className="border border-gray-300 px-4 py-3">Above Rs. 24L</td></tr>
                                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Section 87A rebate ceiling</td><td className="border border-gray-300 px-4 py-3">Rs. 7,00,000 taxable income</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 12,00,000 taxable income</td></tr>
                                <tr><td className="border border-gray-300 px-4 py-3 font-medium">Section 87A rebate amount</td><td className="border border-gray-300 px-4 py-3">Up to Rs. 25,000</td><td className="border border-gray-300 px-4 py-3 font-medium">Up to Rs. 60,000</td></tr>
                                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Standard deduction (salaried)</td><td className="border border-gray-300 px-4 py-3">Rs. 50,000</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 75,000</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-12">
                        The 25% slab (Rs. 20L to Rs. 24L) is a new addition — but it is not a burden. It replaces a scenario where incomes in that range attracted 30% previously. The effective result is a lower marginal rate for high earners in that band, adding to the savings at higher income levels.
                    </p>

                    {/* Section 3 */}
                    <h2 className="font-cormorant text-3xl font-medium text-black mb-6 mt-16">
                        3. The Boundary at Rs. 12 Lakhs — Read This Carefully
                    </h2>

                    <div className="border-l-2 border-black pl-8 mb-8 bg-gray-50 py-6">
                        <p className="font-inter text-lg text-gray-700 leading-relaxed">
                            <strong>Critical:</strong> If taxable income exceeds Rs. 12,00,000 by even Re. 1, the entire Rs. 60,000 Section 87A rebate disappears and tax is computed on the full income from slab one onwards. This is not a smoothly graduated benefit — it is a cliff.
                        </p>
                    </div>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-8">
                        The government has partially addressed this through marginal relief. The rule: the additional tax payable above Rs. 12 lakhs cannot exceed the additional income over Rs. 12 lakhs. This ensures no one is worse off earning slightly more. But the relief operates in a narrow window. Here is what the numbers actually look like:
                    </p>

                    {/* Table 3 */}
                    <div className="overflow-x-auto mb-8">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-inter text-sm font-medium text-gray-700">Taxable Income</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-inter text-sm font-medium text-gray-700">Tax Payable (incl. cess)</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-inter text-sm font-medium text-gray-700">Avg Rate</th>
                                    <th className="border border-gray-300 px-4 py-3 text-left font-inter text-sm font-medium text-gray-700">Marginal Relief?</th>
                                </tr>
                            </thead>
                            <tbody className="font-inter text-sm">
                                <tr><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 11,50,000</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 0</td><td className="border border-gray-300 px-4 py-3">0.0%</td><td className="border border-gray-300 px-4 py-3">87A rebate applied</td></tr>
                                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 11,80,000</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 0</td><td className="border border-gray-300 px-4 py-3">0.0%</td><td className="border border-gray-300 px-4 py-3">87A rebate applied</td></tr>
                                <tr><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 12,00,000</td><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 0</td><td className="border border-gray-300 px-4 py-3">0.0%</td><td className="border border-gray-300 px-4 py-3">87A rebate applied</td></tr>
                                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 12,10,000</td><td className="border border-gray-300 px-4 py-3">Rs. 10,400</td><td className="border border-gray-300 px-4 py-3">0.9%</td><td className="border border-gray-300 px-4 py-3">Yes — tax capped at income above Rs. 12L</td></tr>
                                <tr><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 12,30,000</td><td className="border border-gray-300 px-4 py-3">Rs. 31,200</td><td className="border border-gray-300 px-4 py-3">2.5%</td><td className="border border-gray-300 px-4 py-3">Yes — tax capped at income above Rs. 12L</td></tr>
                                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 12,50,000</td><td className="border border-gray-300 px-4 py-3">Rs. 52,000</td><td className="border border-gray-300 px-4 py-3">4.2%</td><td className="border border-gray-300 px-4 py-3">Yes — tax capped at income above Rs. 12L</td></tr>
                                <tr><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 12,70,000</td><td className="border border-gray-300 px-4 py-3">Rs. 72,800</td><td className="border border-gray-300 px-4 py-3">5.7%</td><td className="border border-gray-300 px-4 py-3">Yes — tax capped at income above Rs. 12L</td></tr>
                                <tr className="bg-gray-50"><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 13,00,000</td><td className="border border-gray-300 px-4 py-3">Rs. 78,000</td><td className="border border-gray-300 px-4 py-3">6.0%</td><td className="border border-gray-300 px-4 py-3">No — full slab tax</td></tr>
                                <tr><td className="border border-gray-300 px-4 py-3 font-medium">Rs. 15,00,000</td><td className="border border-gray-300 px-4 py-3">Rs. 1,09,200</td><td className="border border-gray-300 px-4 py-3">7.3%</td><td className="border border-gray-300 px-4 py-3">No — full slab tax</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-8">
                        Marginal relief phases out as income rises. Once taxable income crosses approximately Rs. 12,75,000, the ordinary slab tax exceeds Rs. 75,000 (the maximum possible marginal relief) and the relief no longer applies. From that point, normal slab rates operate without any adjustment.
                    </p>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-12">
                        The practical implication: if you have any discretion over timing or composition of income in a given year, there is meaningful value in keeping taxable income either clearly below Rs. 12 lakhs or clearly above Rs. 12,75,000. The intermediate range is not a tax trap — marginal relief protects you — but it should be a conscious decision, not an accidental one.
                    </p>

                    {/* Section 4 */}
                    <h2 className="font-cormorant text-3xl font-medium text-black mb-6 mt-16">
                        4. What This Means for Your Financial Decisions
                    </h2>

                    <h3 className="font-cormorant text-2xl font-medium text-black mb-4 mt-8">
                        If your income is up to Rs. 12 Lakhs
                    </h3>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                        Your new regime tax liability is zero in FY 2025-26. The only question worth answering is whether your income is structured efficiently enough to keep it there.
                    </p>

                    <ul className="space-y-4 mb-12">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                            <p className="font-inter text-gray-700 leading-relaxed">Review any income that might inadvertently push you above Rs. 12 lakhs — interest income from fixed deposits, rental receipts, director remuneration from your own company.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                            <p className="font-inter text-gray-700 leading-relaxed">If you are a business owner drawing salary, revisit the salary level set in April. A salary of Rs. 12 lakhs with no other income sources is now a very clean structure.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                            <p className="font-inter text-gray-700 leading-relaxed">Defer income where legitimate and possible if you are close to the boundary.</p>
                        </li>
                    </ul>

                    <h3 className="font-cormorant text-2xl font-medium text-black mb-4 mt-8">
                        If your income is between Rs. 12 Lakhs and Rs. 25 Lakhs
                    </h3>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                        This is the bracket where the absolute rupee saving is most significant. Depending on your exact income level, you are saving Rs. 75,000 to Rs. 1.25 lakhs per year purely from the policy change — with no action required from your side.
                    </p>

                    <ul className="space-y-4 mb-12">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                            <p className="font-inter text-gray-700 leading-relaxed">The employer NPS contribution deduction under Section 80CCD(2) is available even under the new regime. If your employer is not routing a portion of your CTC through NPS, you are leaving a deduction on the table.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                            <p className="font-inter text-gray-700 leading-relaxed">Revisit income distribution across family members where income is genuinely earned by them. The Rs. 12 lakh zero-tax threshold now applies to each taxpayer separately — HUF, spouse with independent income, adult children with professional income.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                            <p className="font-inter text-gray-700 leading-relaxed">Do not get anchored to last year's tax planning decisions. The numbers have shifted enough that a fresh calculation is warranted.</p>
                        </li>
                    </ul>

                    <h3 className="font-cormorant text-2xl font-medium text-black mb-4 mt-8">
                        If your income is above Rs. 25 Lakhs
                    </h3>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                        The percentage savings are lower here, but the absolute savings remain meaningful. At Rs. 50 lakhs, you save approximately Rs. 2.36 lakhs annually compared to the prior year's new regime tax. At Rs. 30 lakhs, it is Rs. 1.33 lakhs.
                    </p>

                    <ul className="space-y-4 mb-12">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                            <p className="font-inter text-gray-700 leading-relaxed">If you are a promoter drawing salary from your own Private Limited Company, the salary level and dividend policy should both be revisited together — not in isolation.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                            <p className="font-inter text-gray-700 leading-relaxed">Surcharge applies above Rs. 50 lakhs of income. This analysis excludes surcharge. For incomes approaching that level, a separate computation is necessary.</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                            <p className="font-inter text-gray-700 leading-relaxed">The new 25% slab (Rs. 20L to Rs. 24L) means incomes in the Rs. 20L to Rs. 24L range now attract 25% instead of 30% on that slice. At Rs. 24 lakhs, this alone saves Rs. 1 lakh on that band before cess.</p>
                        </li>
                    </ul>

                    {/* Section 5 */}
                    <h2 className="font-cormorant text-3xl font-medium text-black mb-6 mt-16">
                        5. What Most People Will Get Wrong
                    </h2>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                        Two mistakes will be common in FY 2025-26.
                    </p>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                        <strong>First:</strong> treating the new regime as a default and forgetting to evaluate it. The new regime is now the default for all taxpayers who do not actively opt out. But 'default' does not mean 'optimal for everyone'. Run the numbers every April — not just once when you first switched.
                    </p>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                        <strong>Second, and more consequential:</strong> absorbing the tax saving into routine spending without intention. A person earning Rs. 20 lakhs is saving approximately Rs. 91,000 this year compared to FY 2024-25. A person earning Rs. 30 lakhs is saving Rs. 1.33 lakhs. These are not trivial amounts. Left unallocated, they disappear into monthly cash flow. Deliberately directed, they compound.
                    </p>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-12">
                        The tax system has done its part. The decision that remains is yours.
                    </p>

                    {/* Section 6 */}
                    <h2 className="font-cormorant text-3xl font-medium text-black mb-6 mt-16">
                        6. Three Questions to Discuss With Your CA
                    </h2>

                    <ul className="space-y-4 mb-12">
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                            <p className="font-inter text-gray-700 leading-relaxed">What is my exact tax saving in FY 2025-26 versus FY 2024-25, based on my projected income? Is my employer's TDS deduction updated to reflect this?</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                            <p className="font-inter text-gray-700 leading-relaxed">Am I inadvertently positioned in the Rs. 12 lakh to Rs. 12,75,000 range? If so, is there a legitimate way to plan around it?</p>
                        </li>
                        <li className="flex items-start">
                            <span className="w-2 h-2 bg-black mt-2 mr-4 flex-shrink-0" />
                            <p className="font-inter text-gray-700 leading-relaxed">Is the employer NPS contribution under Section 80CCD(2) being utilised in my salary structure? This remains deductible under the new regime and is the most overlooked planning tool in this regime.</p>
                        </li>
                    </ul>

                    {/* Bottom Line */}
                    <div className="bg-black text-white p-8 my-16">
                        <h3 className="font-cormorant text-2xl font-medium mb-4">
                            The Bottom Line
                        </h3>
                        <p className="font-inter text-lg leading-relaxed">
                            The average tax rate reduction in FY 2025-26 is real, significant, and already in effect for anyone remaining in the new regime. The benefit required no action from you. What happens next does.
                        </p>
                    </div>

                    {/* Put the Saving to Work */}
                    <h2 className="font-cormorant text-3xl font-medium text-black mb-6 mt-16">
                        Put the Saving to Work
                    </h2>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-6">
                        The tax saving is not a windfall — it is a recurring annual surplus that now exists in your cash flow. The question is whether it gets invested deliberately or absorbed invisibly. Compounded over 10 years, Rs. 1 lakh per year invested in the right instruments is a materially different outcome than the same amount spent.
                    </p>

                    <p className="font-inter text-lg text-gray-700 leading-relaxed mb-8">
                        If you would like guidance on how to deploy this surplus — based on your specific income level, risk profile, and financial goals — the team at Aslot Wealth Advisors can help you build a structured plan.
                    </p>

                    {/* CTA Box */}
                    <div className="bg-gray-50 p-8 mb-12 border-l-2 border-black">
                        <p className="font-cormorant text-2xl font-medium text-black mb-4">
                            Speak to Aslot Wealth Advisors
                        </p>
                        <a
                            href="https://www.aslotwealth.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-4 bg-black text-white font-inter text-sm tracking-wide hover:bg-gray-800 transition-colors"
                        >
                            Visit www.aslotwealth.com →
                        </a>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <p className="font-inter text-sm italic text-gray-600 leading-relaxed">
                            This article is for general information only. Individual tax liability depends on the full composition of income including capital gains, special-rate income, surcharge applicability, and other factors not covered here. Calculations are based on applicable new regime slabs for FY 2024-25 and FY 2025-26. Consult your Chartered Accountant before making any financial or structuring decisions.
                        </p>
                    </div>
                </div>
            </article>

            {/* CTA Footer */}
            <CTAFooter />
        </>
    )
}
