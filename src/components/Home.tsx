import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MobileNav } from "@/components/MobileNav";
import {
  Wrench,
  Truck,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Zap,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = "/assets/nikola-logo.png";

/**
 * Design System: Professional Healthcare Minimalism
 * - Color Palette: Deep slate blue (#1e3a5f) primary, warm amber (#f59e0b) accents
 * - Typography: Poppins for headlines (bold, modern), Inter for body (readable, professional)
 * - Layout: Asymmetric sections with generous whitespace, card-based content
 * - Interactions: Smooth transitions (200-300ms), subtle hover effects, accessible focus states
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Nikola Medical Equipment, Inc. - Home">
            <Image
              src={LOGO_SRC}
              alt="Nikola Medical Equipment, Inc. - Dental equipment solutions"
              width={48}
              height={48}
              className="h-10 w-auto object-contain"
            />
            <span className="text-lg sm:text-xl font-bold text-primary">
              <span className="hidden sm:inline">Nikola Medical Equipment, Inc.</span>
              <span className="sm:hidden">Nikola Medical</span>
            </span>
          </Link>
          <nav className="hidden md:flex gap-8 items-center" aria-label="Main navigation">
            <Link href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <MobileNav />
            <Button asChild className="bg-accent hover:bg-amber-600 text-white shrink-0">
            <a href="tel:9255214542">Call: (925) 521-4542</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Asymmetric Layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={LOGO_SRC}
                    alt="Nikola Medical"
                    width={64}
                    height={64}
                    className="h-16 w-auto object-contain"
                  />
                  <p className="text-accent font-semibold text-lg">We Fix What Keeps You Running™</p>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                  Premium Medical Equipment Solutions
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Your trusted partner in elevating healthcare infrastructure through acquisition, refurbishment, and resale of top-quality used medical, dental, and lab equipment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild className="bg-accent hover:bg-amber-600 text-white px-8 py-6 text-lg flex items-center gap-2">
                  <Link href="#contact">Get Started <ArrowRight className="w-5 h-5" /></Link>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg">
                  <Link href="#about">Learn More</Link>
                </Button>
              </div>
              <div className="flex gap-8 pt-8 text-sm">
                <div>
                  <p className="font-semibold text-primary text-2xl">593+</p>
                  <p className="text-foreground/60">Items Sold</p>
                </div>
                <div>
                  <p className="font-semibold text-primary text-2xl">100%</p>
                  <p className="text-foreground/60">Positive Feedback</p>
                </div>
                <div>
                  <p className="font-semibold text-primary text-2xl">59</p>
                  <p className="text-foreground/60">Followers</p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-96 md:h-full">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/sRdhyO8uVwnaPSCDNlvDwg/sandbox/Wx7y3qX8zpW1RcsOEC2UbG-img-1_1771819861000_na1fn_aGVyby1tZWRpY2FsLWVxdWlwbWVudA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc1JkaHlPOHVWd25hUFNDRE5sdkR3Zy9zYW5kYm94L1d4N3kzcVg4enBXMVJjc09FQzJVYkctaW1nLTFfMTc3MTgxOTg2MTAwMF9uYTFmbl9hR1Z5YnkxdFpXUnBZMkZzTFdWeGRXbHdiV1Z1ZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=moUR1-vO7Z~j89-ML-AVI275C8DZUEj5ScNkASkUOJ7gCQ1e4ALPcC~cwvsONPYxvl0hRcqdeXeZnrDYmT8ynBDXhflRlP0G8hA-RszL6gj-77LCL40FSr5m2rB1uE05tIP8E7-QG590dtlCrCuLUYtZdZoZ1OvxJfvOKZjg026I-LvVAro3zz5bS5wKmDx3had-2capfadZJXRGQrqPe6wYfuGjeaZ30oMWlZeYl25f7~nL7onMKXBCzr5gtr-PH33C8avX0fV53mbBT1VciOFWTX2PfiGeuK42L32doNLaDvxnb~~iUEj4y2C9VjG3~bgiQS6mCaE3oBEO2nCTQw__"
                alt="Modern medical facility with advanced equipment"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Image
              src={LOGO_SRC}
              alt="Nikola Medical"
              width={56}
              height={56}
              className="mx-auto mb-4 h-14 w-auto object-contain"
            />
            <p className="text-accent font-semibold text-lg mb-2">Our Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Comprehensive Medical Equipment Solutions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From acquisition to installation, we handle every aspect of your medical equipment needs with professional expertise and dedication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Acquisition</h3>
              <p className="text-foreground/70 leading-relaxed">
                We source high-quality used medical and dental equipment from trusted suppliers, ensuring every piece meets our rigorous standards.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Refurbishment</h3>
              <p className="text-foreground/70 leading-relaxed">
                Our expert technicians restore equipment to exacting standards, ensuring performance and reliability you can depend on.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300 border-border">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Quality Assurance</h3>
              <p className="text-foreground/70 leading-relaxed">
                Every piece undergoes comprehensive testing and inspection to guarantee it meets healthcare standards and your expectations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/sRdhyO8uVwnaPSCDNlvDwg/sandbox/Wx7y3qX8zpW1RcsOEC2UbG-img-3_1771819867000_na1fn_bWVkaWNhbC1wcm9mZXNzaW9uYWxzLXRlYW0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc1JkaHlPOHVWd25hUFNDRE5sdkR3Zy9zYW5kYm94L1d4N3kzcVg4enBXMVJjc09FQzJVYkctaW1nLTNfMTc3MTgxOTg2NzAwMF9uYTFmbl9iV1ZrYVdOaGJDMXdjbTltWlhOemFXOXVZV3h6TFhSbFlXMC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Cj1f5~a719xqT3ncGvbzAlJUJ514uNLW04b0gHLPPhaFUDN7lPyzM~6z6WOZ5JArvpwhLc4qEhLMhvmr0eK-Sx240P1uLuCu8dEdcBJ0ixFygctRNjqvIMLBkllor9Vw0dPAJpFXtiBArE64DGzXghMG2SgmSu126b-v-tSyZcDHiX9zUELrUdeYPWZtykGEUhF3sTOK8DORk6Q8U2PTnZosqUyQzXttxgcsmsPIZrAWR8uSJq0i4aVC9EK71ApwDI79bCjNuIAgrNagH6tosr7BpmEGu7UqLQnZXzxwuxpFAP3In3CbeAhjlpMlzzOdE~jCwoq-2At0YgLuzY6FJg__"
                alt="Professional healthcare team"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-accent font-semibold text-lg mb-2">Why Partner With Us</p>
                <h2 className="text-4xl font-bold text-primary mb-4">Expert Guidance & Trusted Partnership</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  We&apos;re not just selling equipment—we&apos;re building relationships. Our team of experts is committed to helping you navigate the world of medical equipment with knowledge and experience.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Quality & Reliability</h4>
                    <p className="text-foreground/70">Every piece is tested and certified to meet healthcare standards.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Affordable Solutions</h4>
                    <p className="text-foreground/70">Get premium equipment at a fraction of the cost of new gear.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Expert Support</h4>
                    <p className="text-foreground/70">Our team provides guidance from selection through installation and maintenance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Image
              src={LOGO_SRC}
              alt="Nikola Medical"
              width={56}
              height={56}
              className="mx-auto mb-4 h-14 w-auto object-contain"
            />
            <p className="text-accent font-semibold text-lg mb-2">Our Inventory</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Featured Medical Equipment
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Browse our extensive selection of refurbished medical, dental, and lab equipment. Visit our eBay store for the complete inventory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/sRdhyO8uVwnaPSCDNlvDwg/sandbox/Wx7y3qX8zpW1RcsOEC2UbG-img-2_1771819857000_na1fn_ZGVudGFsLWVxdWlwbWVudC1zaG93Y2FzZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc1JkaHlPOHVWd25hUFNDRE5sdkR3Zy9zYW5kYm94L1d4N3kzcVg4enBXMVJjc09FQzJVYkctaW1nLTJfMTc3MTgxOTg1NzAwMF9uYTFmbl9aR1Z1ZEdGc0xXVnhkV2x3YldWdWRDMXphRzkzWTJGelpRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VGRVrsMX8362Q5whEnY8zewbZe0kqHmutP5wBnLVTDHDhEh18vQ~yW2pVN~zDvWS3zQ5Lrh1EJI95uuD5W4IQAAShhahAhq6G0FJVIFYslGQQlV-q9X0BEdsjsEnPHkqLdgs9GxeRJWec4KNBXFPk5akSWe6HXzyekJU00k2XcVw1VNEtzY-Mryyc0HlinqXbIIwrqrLIHwRgjQPnToa8pbw1BLpXZoN-MSNOrWAs5zUiCRIIa6VpNllt2-X4TgudAwtsPs7ZWiaQCO7TGisA~kPVT8krYgGTBOD9SahczzXy2-uVK8aC9SGUV0GyJ~GqaqzVVY7JNK7QwQOf1n8JQ__"
                alt="Dental equipment showcase"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-2">Dental Equipment</h3>
                <p className="text-foreground/70 mb-4">
                  Intraoral cameras, curing lights, handpieces, and surgical kits from leading manufacturers.
                </p>
                <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary/5">
                  <Link href="https://www.ebay.com/str/nikolamedicalequipmentinc">View Dental Equipment</Link>
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/sRdhyO8uVwnaPSCDNlvDwg/sandbox/Wx7y3qX8zpW1RcsOEC2UbG-img-4_1771819862000_na1fn_ZXF1aXBtZW50LXJlZnVyYmlzaG1lbnQtcHJvY2Vzcw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc1JkaHlPOHVWd25hUFNDRE5sdkR3Zy9zYW5kYm94L1d4N3kzcVg4enBXMVJjc09FQzJVYkctaW1nLTRfMTc3MTgxOTg2MjAwMF9uYTFmbl9aWEYxYVhCdFpXNTBMWEpsWm5WeVltbHphRzFsYm5RdGNISnZZMlZ6Y3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=iZ-4ZcMBZHapAUN7EBmXvEcqgFL1ztzBN9tqwcnHpgrrZfgL-avMpp4RyMOjhCLrP4f~5NmBAGD~XYjmtsqknU3sQgCYZYCECImGJFkGBwmkaG7OFp-2kGqxWE5pJNDZA9bM14tQm6jEuDUeHtZoozWqFnwOYcUGKk2F5Eln-1~WsJzJW9T9F4OleNkuQPp9JKiEKCeNfbruHJ8FYdZdwZCIqOtBEqvNcq5mVc2zxdE~bCrINno8h3NZyVPVKKpoq45kQOkpZY08V~S57Xsqw8je6GhYgnFwjZw8iLGkTmufYU5KhCQmLBJFrCqCNFeJmmPf3xKPxOAhd~Gm2Vb7OQ__"
                alt="Equipment refurbishment process"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-2">Medical Equipment</h3>
                <p className="text-foreground/70 mb-4">
                  Patient monitors, diagnostic equipment, surgical kits, and specialized medical devices.
                </p>
                <Button asChild variant="outline" className="text-primary border-primary hover:bg-primary/5">
                  <Link href="https://www.ebay.com/str/nikolamedicalequipmentinc">View Medical Equipment</Link>
                </Button>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild className="bg-accent hover:bg-amber-600 text-white px-8 py-6 text-lg">
              <Link href="https://www.ebay.com/str/nikolamedicalequipmentinc">Browse Full eBay Store</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Image
              src={LOGO_SRC}
              alt="Nikola Medical Equipment"
              width={80}
              height={80}
              className="mx-auto mb-4 h-20 w-auto object-contain"
            />
            <p className="text-accent font-semibold text-lg mb-2">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Your Trusted Healthcare Equipment Partner
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Nikola Medical Equipment Inc. is dedicated to elevating healthcare infrastructure through the acquisition, refurbishment, and resale of top-quality used medical, dental, and lab equipment. We believe in smart equipment choices that build a brighter future for healthcare practices of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-2">593+</div>
              <p className="text-foreground/70">Items Successfully Sold</p>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-foreground/70">Positive Customer Feedback</p>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-foreground/70">Years of Industry Experience</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Image
              src={LOGO_SRC}
              alt="Nikola Medical"
              width={56}
              height={56}
              className="mx-auto mb-4 h-14 w-auto object-contain"
            />
            <p className="text-accent font-semibold text-lg mb-2">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Contact Nikola Medical Equipment
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ready to elevate your healthcare infrastructure? Reach out to our team for expert guidance and solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
              <p className="text-foreground/70 mb-4">(925) 521-4542</p>
              <Button asChild variant="outline" className="text-accent border-accent hover:bg-accent/5 w-full">
                <a href="tel:9255214542">Call Now</a>
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
              <p className="text-foreground/70 mb-4">nikolamei858@gmail.com</p>
              <Button asChild variant="outline" className="text-accent border-accent hover:bg-accent/5 w-full">
                <a href="mailto:nikolamei858@gmail.com">Send Email</a>
              </Button>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Location</h3>
              <p className="text-foreground/70 mb-4">
                4873 Robertson Rd, Apt 101<br />
                Carlsbad, CA 92010
              </p>
              <Button asChild variant="outline" className="text-accent border-accent hover:bg-accent/5 w-full">
                <a href="https://maps.google.com/?q=4873+Robertson+Rd,+Carlsbad,+CA+92010" target="_blank" rel="noopener noreferrer">Get Directions</a>
              </Button>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-12 text-center text-white">
            <Image
              src={LOGO_SRC}
              alt="Nikola Medical"
              width={64}
              height={64}
              className="mx-auto mb-4 h-16 w-auto object-contain brightness-0 invert"
            />
            <h3 className="text-3xl font-bold mb-4">Ready to Upgrade Your Equipment?</h3>
            <p className="text-lg mb-8 opacity-90">
              Let our experts help you find the perfect medical equipment solution for your practice.
            </p>
            <Button asChild className="bg-accent hover:bg-amber-600 text-white px-8 py-6 text-lg">
              <a href="tel:9255214542">Schedule a Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={LOGO_SRC}
                  alt="Nikola Medical Equipment"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <h4 className="text-lg font-bold">Nikola Medical Equipment, Inc.</h4>
              </div>
              <p className="text-white/70">Your trusted partner in dental equipment solutions—helping practices thrive with reliable, affordable gear.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="#services" className="hover:text-white transition-colors">Acquisition</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Refurbishment</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Quality Assurance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="https://www.ebay.com/str/nikolamedicalequipmentinc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">eBay Store</a></li>
                <li><a href="https://www.linkedin.com/company/nikola-medical-equipment-inc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://www.facebook.com/p/Nikola-Medical-Equipment-Inc-100094618478377/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-white/70 text-sm">
              <p>&copy; 2026 Nikola Medical Equipment Inc. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
