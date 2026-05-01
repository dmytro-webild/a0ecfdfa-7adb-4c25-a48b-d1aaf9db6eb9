"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, ShieldCheck, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="outline"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Roof Repair LLC"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "gradient-bars",
      }}
      title="Elite Roofing Services in Clarence Center"
      description="Your trusted partner for premium roof repairs, installations, and inspections. Luxury quality, lasting durability."
      tag="5★ Rated by Local Homeowners"
      buttons={[
        {
          text: "Get a Free Estimate",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-working-roof-with-drill_23-2148748775.jpg",
          imageAlt: "Luxury roof repair contractor",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-roof-with-drill-low-view_23-2148748772.jpg",
          imageAlt: "Asphalt shingle roof installation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-roof-house-made-wooden-tiles_169016-24989.jpg",
          imageAlt: "New roof architecture modern house",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-working-together_23-2149343665.jpg",
          imageAlt: "Medium shot men working together",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-roof-with-hammer-full-shot_23-2149343668.jpg",
          imageAlt: "Man working on roof with hammer full shot",
        },
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Decades of Roofing Excellence"
      metrics={[
        {
          icon: Award,
          label: "Years Served",
          value: "20+",
        },
        {
          icon: ShieldCheck,
          label: "Projects Completed",
          value: "1500+",
        },
        {
          icon: Star,
          label: "Customer Rating",
          value: "5.0",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      negativeCard={{
        items: [
          "Gutter Cleaning & Repair",
          "Attic Ventilation Solutions",
          "Emergency Leak Repair",
        ],
      }}
      positiveCard={{
        items: [
          "Roof Repair & Maintenance",
          "New Roof Installation",
          "Detailed Roof Inspection",
        ],
      }}
      title="Comprehensive Roofing Solutions"
      description="Tailored services to maintain the beauty and structural integrity of your home."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Excellent Service",
          quote: "Roof Repair LLC did a fantastic job on my roof installation. Professional and fast.",
          name: "Sarah J.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-smiley-woman-outdoors_23-2149901722.jpg",
        },
        {
          id: "2",
          title: "Highly Professional",
          quote: "The inspection process was transparent and detailed. Highly recommend them.",
          name: "Michael B.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-shirt-vest-hat-pointing-house-model-looking-confident-front-view_176474-30846.jpg",
        },
        {
          id: "3",
          title: "Gutter Repair Pro",
          quote: "Fixed our leaking gutters in record time. Excellent craftsmanship.",
          name: "Emily R.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-roofer-working-with-protection-helmet_23-2149343637.jpg",
        },
        {
          id: "4",
          title: "Quality Roofing",
          quote: "Great communication and fair pricing for our roof repair. Will call again.",
          name: "David K.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/worker-with-hard-hat-hammer-building-house_23-2148748857.jpg",
        },
        {
          id: "5",
          title: "Outstanding Result",
          quote: "Our attic ventilation issue was resolved perfectly. Expert service throughout.",
          name: "Lisa M.",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/mixed-race-family-couple-have-problems-have-frustrated-expressions-think-how-solve-problems_273609-18379.jpg",
        },
      ]}
      title="Client Success Stories"
      description="Hear why Clarence Center homeowners trust us for their roofing needs."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardThree
      animationType="scale-rotate"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Clarence Residential Roof",
          price: "Completed",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-modern-house-roof_23-2149343645.jpg",
        },
        {
          id: "p2",
          name: "Modern Shingle Upgrade",
          price: "Completed",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-15608.jpg",
        },
        {
          id: "p3",
          name: "Custom Venting Project",
          price: "Completed",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-beautiful-roof-wooden-house_23-2149343706.jpg",
        },
        {
          id: "p4",
          name: "Classic Roof Repair",
          price: "Completed",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-wooden-house-with-big-windows_23-2149343704.jpg",
        },
        {
          id: "p5",
          name: "Gutter Renovation",
          price: "Completed",
          imageSrc: "http://img.b2bpic.net/free-photo/rows-seats_1398-4403.jpg",
        },
        {
          id: "p6",
          name: "Luxury Installation",
          price: "Completed",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-wood-texture-pattern_58702-13093.jpg",
        },
      ]}
      title="Project Gallery"
      description="Take a look at some of our premium roofing transformations."
    />
  </div>

  <div id="process" data-section="process">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "1",
          title: "Free Consultation",
          items: [
            "Schedule online or by phone",
            "Discuss specific needs",
          ],
        },
        {
          id: "2",
          value: "2",
          title: "Transparent Quote",
          items: [
            "Clear, detailed estimate",
            "No hidden costs",
          ],
        },
        {
          id: "3",
          value: "3",
          title: "Expert Repair",
          items: [
            "Professional installation",
            "Top-tier quality",
          ],
        },
        {
          id: "4",
          value: "4",
          title: "Satisfaction",
          items: [
            "Guarantee of quality work",
            "Final inspection",
          ],
        },
      ]}
      title="Our Simple Process"
      description="We ensure a seamless experience from your first consultation to completion."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "How often should I inspect my roof?",
          content: "Generally, once a year, preferably in the spring or after severe storms.",
        },
        {
          id: "q2",
          title: "Do you offer financing?",
          content: "Yes, we work with various financing options to fit your budget.",
        },
        {
          id: "q3",
          title: "How long does a roof installation take?",
          content: "Most residential roofs are completed in 1-3 business days depending on size.",
        },
        {
          id: "q4",
          title: "What insurance do you carry?",
          content: "We carry full general liability and workers compensation insurance for your safety.",
        },
      ]}
      title="Common Roofing Questions"
      description="Quick answers to help you make informed decisions."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get Your Free Quote"
      description="Contact us today for a professional roofing assessment and estimate."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Details about your roofing project...",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/modern-buildings-new-york-usa_1268-14959.jpg"
      buttonText="Get Estimate"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Roof Repair LLC"
      copyrightText="© 2025 Roof Repair LLC. All rights reserved. Clarence Center, NY."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
