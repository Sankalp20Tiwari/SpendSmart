import HeroSection from "@/components/hero";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    <div className="mt-40">
       <HeroSection />
       <section className="py-20 ">
          <div className="container mx-auto px-4 ">
            <div className="text-white grid grid-cols-2 md:grid-cols-4 gap-8">
              {statsData.map((stat,index) => (
                  <div key={index} className="text-center ">
                    <div className="text-4xl font-bold mb-2 gradient-title">{stat.value}</div>
                    <div className="text-white">{stat.label}</div>
                  </div>
              ))}
            </div>
          </div>
       </section>
       <section className="py-20 ">
              <div className="container mx-auto px-4 ">
                <h2 className="text-white text-4xl mb-12 text-center">Everything you need to manage your finances</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuresData.map((feature, index) => (
                          <Card className="bg-black  p-6" key={index}>
                          <CardContent className="space-y-4 pt-4 ">
                            <div className="text-blue-600">{feature.icon}</div>
                            <h3 className="text-white">{feature.title}</h3>
                            <p className="text-gray-100">{feature.description}</p>
                          </CardContent>
                        </Card>
                  ))}
                </div>
              </div>
       </section>
       <section className="py-20 bg-inherit">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl text-white font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 bg-inherit">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-inherit text-black">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-100">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-100">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-inherit">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with SpendSmart
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-blue-50 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
