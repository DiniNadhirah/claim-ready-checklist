"use client";

import React, { useState } from "react";
import { Download, Share2, Check, Menu, X, ShieldCheck } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: "CLAIM READY",
        text: "A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
        url: window.location.href,
      }).catch(() => {});
    } else if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#363C47] antialiased flex flex-col font-sans selection:bg-[#DCF3EA] selection:text-[#065F43]">
      {/* 1. TICKER STRIP */}
      <div className="bg-[#EEFAF5] border-b border-[#B9E6D6] py-2.5 px-4 overflow-hidden relative z-40 select-none">
        <div className="max-w-[1180px] mx-auto flex items-center justify-between">
          <div className="overflow-hidden w-full whitespace-nowrap">
            <div className="animate-ticker flex items-center gap-10 font-mono text-[10px] uppercase tracking-[0.16em] text-[#065F43] font-medium">
              <span>CLAIM READY · A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM</span>
              <span>◆</span>
              <span>THE IDEA IN ONE LINE: A WARRANTY CLAIM IS DECIDED ON RECORDS. KEEP YOURS, AND ASK FOR THEIRS IN WRITING.</span>
              <span>◆</span>
              <span>1 RULE: IF IT IS NOT IN WRITING, IT DID NOT HAPPEN.</span>
              <span>◆</span>
              <span>CLAIM READY · A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM</span>
              <span>◆</span>
              <span>THE IDEA IN ONE LINE: A WARRANTY CLAIM IS DECIDED ON RECORDS. KEEP YOURS, AND ASK FOR THEIRS IN WRITING.</span>
              <span>◆</span>
              <span>1 RULE: IF IT IS NOT IN WRITING, IT DID NOT HAPPEN.</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STICKY HEADER */}
      <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] h-[72px] transition-all">
        <div className="max-w-[1180px] mx-auto h-full px-5 md:px-10 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center text-[#087A58] group-hover:bg-[#087A58] group-hover:text-white transition-all duration-200">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <span className="font-extrabold tracking-[-0.035em] text-[19px] text-[#0D1117] leading-none">
              CLAIM READY
            </span>
          </a>

          {/* Navigation Links directly using content.txt section names */}
          <nav className="hidden xl:flex items-center gap-6 text-[13.5px] font-medium text-[#5B6472]">
            <a href="#who-this-is-for" className="hover:text-[#0D1117] transition-colors">
              WHO THIS IS FOR
            </a>
            <a href="#before-anything-goes-wrong" className="hover:text-[#0D1117] transition-colors">
              BEFORE ANYTHING GOES WRONG
            </a>
            <a href="#when-the-fault-appears" className="hover:text-[#0D1117] transition-colors">
              WHEN THE FAULT APPEARS
            </a>
            <a href="#when-a-technician-visits" className="hover:text-[#0D1117] transition-colors">
              WHEN A TECHNICIAN VISITS
            </a>
            <a href="#if-the-claim-is-refused" className="hover:text-[#0D1117] transition-colors">
              IF THE CLAIM IS REFUSED
            </a>
            <a href="#key-numbers" className="hover:text-[#0D1117] transition-colors">
              KEY NUMBERS
            </a>
            <a href="#call-to-action" className="hover:text-[#0D1117] transition-colors">
              CALL TO ACTION
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="bg-[#0D1117] hover:bg-[#087A58] text-white text-[13.5px] font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download the checklist</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#0D1117] hover:bg-[#F2F4F7] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-[#E7EAEF] px-6 py-6 shadow-float transition-all">
            <nav className="flex flex-col gap-4 text-[14px] font-medium text-[#363C47]">
              <a
                href="#who-this-is-for"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#087A58]"
              >
                WHO THIS IS FOR
              </a>
              <a
                href="#the-idea-in-one-line"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#087A58]"
              >
                THE IDEA IN ONE LINE
              </a>
              <a
                href="#before-anything-goes-wrong"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#087A58]"
              >
                BEFORE ANYTHING GOES WRONG
              </a>
              <a
                href="#when-the-fault-appears"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#087A58]"
              >
                WHEN THE FAULT APPEARS
              </a>
              <a
                href="#when-a-technician-visits"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#087A58]"
              >
                WHEN A TECHNICIAN VISITS
              </a>
              <a
                href="#if-the-claim-is-refused"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#087A58]"
              >
                IF THE CLAIM IS REFUSED
              </a>
              <a
                href="#key-numbers"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#087A58]"
              >
                KEY NUMBERS FOR THE PAGE
              </a>
              <a
                href="#call-to-action"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-[#087A58]"
              >
                CALL TO ACTION
              </a>
              <div className="pt-3 border-t border-[#E7EAEF]">
                <button
                  onClick={() => {
                    handlePrint();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#087A58] text-white py-3 rounded-full text-center font-semibold text-[14px] flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download the checklist</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* 3. HEADLINE CARD (THE IDEA IN ONE LINE) */}
        <section id="the-idea-in-one-line" className="pt-8 md:pt-12 px-5 md:px-10">
          <div className="max-w-[1180px] mx-auto">
            <div className="bg-[#0D1117] text-white rounded-[26px] p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-raised scanline-pattern border border-white/10">
              <div className="flex flex-col gap-4 relative z-10">
                <div className="inline-flex items-center gap-2 w-fit bg-white/10 px-3.5 py-1 rounded-full border border-white/15">
                  <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                  <span className="font-mono text-[10px] md:text-[11px] tracking-[0.16em] uppercase text-[#34D399] font-medium">
                    THE IDEA IN ONE LINE
                  </span>
                </div>
                <p className="font-mono text-[20px] sm:text-[25px] md:text-[30px] font-bold leading-[1.3] tracking-[-0.02em] text-white/95 max-w-4xl">
                  A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. HERO SECTION */}
        <section className="py-16 md:py-24 px-5 md:px-10">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <h1 className="text-[44px] sm:text-[54px] md:text-[60px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                  CLAIM READY
                </h1>
                <p className="text-[22px] sm:text-[26px] md:text-[29px] font-extrabold text-[#087A58] tracking-[-0.03em] leading-[1.15]">
                  A free checklist for anyone about to file a warranty claim.
                </p>
              </div>

              {/* WHO THIS IS FOR */}
              <div id="who-this-is-for" className="bg-[#FBFCFD] border border-[#E7EAEF] rounded-[18px] p-6 md:p-8 shadow-sm">
                <div className="font-mono text-[11px] font-semibold tracking-[0.16em] text-[#065F43] uppercase mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                  WHO THIS IS FOR
                </div>
                <p className="text-[17px] sm:text-[19px] text-[#363C47] leading-[1.72]">
                  Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={handlePrint}
                  className="bg-[#087A58] hover:bg-[#066748] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full shadow-raised transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download the checklist and keep it with your invoices.</span>
                </button>

                <button
                  onClick={handleShare}
                  className="bg-white hover:bg-[#F7F8FA] text-[#0D1117] text-[15px] font-semibold px-7 py-3.5 rounded-full border border-[#E7EAEF] transition-all duration-200 flex items-center gap-2 shadow-sm"
                >
                  <Share2 className="w-4 h-4 text-[#5B6472]" />
                  <span>Share it with a friend who just bought something expensive.</span>
                </button>
              </div>
            </div>

            {/* Right Column (Document Callout Card) */}
            <div className="lg:col-span-5">
              <div className="bg-[#EEFAF5] border border-[#B9E6D6] rounded-[26px] p-7 sm:p-9 shadow-card flex flex-col gap-6">
                <div className="w-fit inline-flex items-center gap-2 bg-white border border-[#B9E6D6] px-3.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                  <span className="font-mono text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#065F43]">
                    THE IDEA IN ONE LINE
                  </span>
                </div>

                <div className="text-[20px] sm:text-[22px] font-bold text-[#065F43] leading-[1.5]">
                  A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
                </div>

                <div className="border-t border-[#B9E6D6] pt-5 flex flex-col gap-3">
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#065F43]">
                    KEY NUMBERS FOR THE PAGE
                  </div>
                  <ul className="flex flex-col gap-2 text-[15px] text-[#065F43] font-medium leading-[1.6]">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                      <span>15 steps in the checklist.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                      <span>4 records to keep before anything goes wrong.</span>
                    </li>
                    <li className="flex items-center gap-2 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                      <span>1 rule: if it is not in writing, it did not happen.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. KEY NUMBERS FOR THE PAGE */}
        <section id="key-numbers" className="py-20 md:py-28 px-5 md:px-10 bg-[#F7F8FA] border-y border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="w-fit inline-flex items-center gap-2 bg-[#EEFAF5] border border-[#B9E6D6] px-3.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span className="font-mono text-[10px] md:text-[11px] font-medium uppercase tracking-[0.16em] text-[#065F43]">
                  KEY NUMBERS FOR THE PAGE
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                KEY NUMBERS FOR THE PAGE
              </h2>
            </div>

            {/* Stat Grid */}
            <div className="rounded-[18px] overflow-hidden border border-[#E7EAEF] bg-[#E7EAEF] grid grid-cols-1 md:grid-cols-3 gap-[1px] shadow-card">
              {/* Stat 1 */}
              <div className="bg-white p-7 sm:p-9 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="font-extrabold text-[52px] md:text-[56px] text-[#0D1117] leading-none tracking-[-0.035em] tabular-nums">
                    15
                  </div>
                  <div className="text-[17px] sm:text-[18px] text-[#363C47] font-medium leading-[1.5]">
                    steps in the checklist.
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white p-7 sm:p-9 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="font-extrabold text-[52px] md:text-[56px] text-[#0D1117] leading-none tracking-[-0.035em] tabular-nums">
                    4
                  </div>
                  <div className="text-[17px] sm:text-[18px] text-[#363C47] font-medium leading-[1.5]">
                    records to keep before anything goes wrong.
                  </div>
                </div>
              </div>

              {/* Stat 3 (Hot cell in emerald #087A58) */}
              <div className="bg-white p-7 sm:p-9 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="font-extrabold text-[52px] md:text-[56px] text-[#087A58] leading-none tracking-[-0.035em] tabular-nums">
                    1
                  </div>
                  <div className="text-[17px] sm:text-[18px] text-[#065F43] font-bold leading-[1.5]">
                    rule: if it is not in writing, it did not happen.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. BEFORE ANYTHING GOES WRONG */}
        <section id="before-anything-goes-wrong" className="py-20 md:py-28 px-5 md:px-10">
          <div className="max-w-[1180px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="w-fit inline-flex items-center gap-2 bg-[#EEFAF5] border border-[#B9E6D6] px-3.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span className="font-mono text-[10px] md:text-[11px] font-medium uppercase tracking-[0.16em] text-[#065F43]">
                  BEFORE ANYTHING GOES WRONG
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                BEFORE ANYTHING GOES WRONG
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step 1 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  1
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">1. Keep the invoice.</strong> Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  2
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">2. Register the product.</strong> Many brands ask you to register on their website or app; some add extra warranty when you do.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  3
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">3. Read the warranty card once.</strong> Note how long it lasts, what it covers, and what it excludes.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  4
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">4. Record the condition.</strong> Take a few dated photos of the product once it is installed or unboxed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. WHEN THE FAULT APPEARS */}
        <section id="when-the-fault-appears" className="py-20 md:py-28 px-5 md:px-10 bg-[#F7F8FA] border-y border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="w-fit inline-flex items-center gap-2 bg-[#EEFAF5] border border-[#B9E6D6] px-3.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span className="font-mono text-[10px] md:text-[11px] font-medium uppercase tracking-[0.16em] text-[#065F43]">
                  WHEN THE FAULT APPEARS
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                WHEN THE FAULT APPEARS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 5 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  5
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">5. Record the fault.</strong> Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
                </p>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  6
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">6. Raise the complaint in writing.</strong> Use email, the brand's website or its app, not only a phone call, so there is a record.
                </p>
              </div>

              {/* Step 7 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  7
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">7. Note every reference number.</strong> Write down the complaint or ticket number, the date and the name of anyone you speak to.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. WHEN A TECHNICIAN VISITS */}
        <section id="when-a-technician-visits" className="py-20 md:py-28 px-5 md:px-10">
          <div className="max-w-[1180px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="w-fit inline-flex items-center gap-2 bg-[#EEFAF5] border border-[#B9E6D6] px-3.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span className="font-mono text-[10px] md:text-[11px] font-medium uppercase tracking-[0.16em] text-[#065F43]">
                  WHEN A TECHNICIAN VISITS
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                WHEN A TECHNICIAN VISITS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 8 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  8
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">8. Ask for the job sheet.</strong> Ask the technician for a copy of the visit report or job sheet before they leave.
                </p>
              </div>

              {/* Step 9 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  9
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">9. Ask what was tested.</strong> Ask which test or instrument was used to reach the diagnosis.
                </p>
              </div>

              {/* Step 10 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  10
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">10. Take your own photos.</strong> Photograph the product and anything the technician points to, during the visit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. IF THE CLAIM IS REFUSED */}
        <section id="if-the-claim-is-refused" className="py-20 md:py-28 px-5 md:px-10 bg-[#F7F8FA] border-y border-[#E7EAEF]">
          <div className="max-w-[1180px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="w-fit inline-flex items-center gap-2 bg-[#EEFAF5] border border-[#B9E6D6] px-3.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />
                <span className="font-mono text-[10px] md:text-[11px] font-medium uppercase tracking-[0.16em] text-[#065F43]">
                  IF THE CLAIM IS REFUSED
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[47px] font-extrabold text-[#0D1117] tracking-[-0.035em] leading-[1.06]">
                IF THE CLAIM IS REFUSED
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Step 11 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  11
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">11. Ask for the reason in writing.</strong> Request a written explanation that names the exact cause and the evidence for it.
                </p>
              </div>

              {/* Step 12 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  12
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">12. Ask for the technical report.</strong> If the refusal rests on an inspection, ask for that inspection report.
                </p>
              </div>

              {/* Step 13 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  13
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">13. Escalate inside the company.</strong> Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
                </p>
              </div>

              {/* Step 14 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  14
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">14. Keep it factual.</strong> Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
                </p>
              </div>

              {/* Step 15 */}
              <div className="bg-white rounded-[18px] p-7 md:p-8 border border-[#E7EAEF] shadow-card flex flex-col gap-2 md:col-span-2 lg:col-span-1">
                <div className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#F2F4F7] text-[#0D1117] w-fit mb-1">
                  15
                </div>
                <p className="text-[17px] text-[#363C47] leading-[1.72]">
                  <strong className="text-[#0D1117] font-bold">15. Know your consumer helpline.</strong> Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CALL TO ACTION (Dark Section) */}
        <section id="call-to-action" className="py-24 md:py-32 px-5 md:px-10 bg-[#0D1117] text-white">
          <div className="max-w-[1180px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-3 max-w-3xl">
              <div className="w-fit inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                <span className="font-mono text-[10px] md:text-[11px] font-medium uppercase tracking-[0.16em] text-[#34D399]">
                  CALL TO ACTION
                </span>
              </div>
              <h2 className="text-[34px] sm:text-[44px] md:text-[52px] font-extrabold text-white tracking-[-0.035em] leading-[1.06]">
                CALL TO ACTION
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Action 1 */}
              <div className="bg-white/5 border border-white/10 rounded-[26px] p-8 md:p-10 flex flex-col justify-between gap-6 hover:bg-white/[0.08] transition-all">
                <h3 className="text-[22px] sm:text-[26px] font-bold text-white tracking-[-0.02em] leading-snug">
                  Download the checklist and keep it with your invoices.
                </h3>
                <div>
                  <button
                    onClick={handlePrint}
                    className="w-full sm:w-auto bg-[#087A58] hover:bg-[#066748] text-white font-semibold text-[15px] px-8 py-4 rounded-full shadow-raised transition-all flex items-center justify-center gap-2.5"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download the checklist and keep it with your invoices.</span>
                  </button>
                </div>
              </div>

              {/* Action 2 */}
              <div className="bg-white/5 border border-white/10 rounded-[26px] p-8 md:p-10 flex flex-col justify-between gap-6 hover:bg-white/[0.08] transition-all">
                <h3 className="text-[22px] sm:text-[26px] font-bold text-white tracking-[-0.02em] leading-snug">
                  Share it with a friend who just bought something expensive.
                </h3>
                <div>
                  <button
                    onClick={handleShare}
                    className="w-full sm:w-auto bg-[#34D399] hover:bg-[#2fc48d] text-[#0D1117] font-semibold text-[15px] px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{copied ? "Share it with a friend who just bought something expensive." : "Share it with a friend who just bought something expensive."}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 11. FOOTER */}
      <footer className="bg-[#F7F8FA] border-t border-[#E7EAEF] py-16 px-5 md:px-10 text-[#5B6472]">
        <div className="max-w-[1180px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center text-[#087A58]">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <span className="font-extrabold tracking-[-0.035em] text-[18px] text-[#0D1117]">
                CLAIM READY
              </span>
            </div>

            <div className="flex flex-wrap gap-6 text-[13.5px] font-medium text-[#5B6472]">
              <a href="#who-this-is-for" className="hover:text-[#0D1117] transition-colors">
                WHO THIS IS FOR
              </a>
              <a href="#the-idea-in-one-line" className="hover:text-[#0D1117] transition-colors">
                THE IDEA IN ONE LINE
              </a>
              <a href="#before-anything-goes-wrong" className="hover:text-[#0D1117] transition-colors">
                BEFORE ANYTHING GOES WRONG
              </a>
              <a href="#when-the-fault-appears" className="hover:text-[#0D1117] transition-colors">
                WHEN THE FAULT APPEARS
              </a>
              <a href="#when-a-technician-visits" className="hover:text-[#0D1117] transition-colors">
                WHEN A TECHNICIAN VISITS
              </a>
              <a href="#if-the-claim-is-refused" className="hover:text-[#0D1117] transition-colors">
                IF THE CLAIM IS REFUSED
              </a>
              <a href="#key-numbers" className="hover:text-[#0D1117] transition-colors">
                KEY NUMBERS FOR THE PAGE
              </a>
              <a href="#call-to-action" className="hover:text-[#0D1117] transition-colors">
                CALL TO ACTION
              </a>
            </div>
          </div>

          {/* FOOTER NOTE */}
          <div className="pt-8 border-t border-[#E7EAEF] flex flex-col gap-2">
            <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0D1117]">
              FOOTER NOTE
            </div>
            <p className="text-[14px] leading-[1.72] text-[#5B6472]">
              Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
