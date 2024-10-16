import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, DollarSign, Globe, Lock, Phone, ShieldCheck, Star, User } from "lucide-react"


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-indigo-200">
        <Link className="flex items-center justify-center" href="#">
          <Image src="/6d0ee903-9b85-412f-8c25-0674d26c1ee0-removebg-preview.png" alt="GPR Logo" width={120} height={40} />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#products">
            Products
          </Link>
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#faqs">
            FAQs
          </Link>
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <div className="w-full py-12 md:py-24 lg:py-32 bg-indigo-900 text-white">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Global Partner & Resources Limited
                </h1>
                <p className="mx-auto max-w-[700px] text-indigo-200 md:text-xl">
                  Your trusted partner in gold bar trading. Secure transactions, competitive prices, and exceptional
                  service.
                </p>
              </div>
              <div className="space-x-4 mt-6">
                <Button className="bg-indigo-600 hover:bg-indigo-700">View Products</Button>
                <Button variant="outline" className="bg-white text-indigo-900 border-white hover:bg-indigo-100 hover:text-indigo-900">Learn More</Button>
              </div>
            </div>
            <div className="mt-8 md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Gold bars stacked neatly, representing the high-quality products offered by Global Partner & Resources Limited"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-900">
              Latest Gold Bar Offerings
            </h2>
            <div>
              <Tabs defaultValue="usd" className="w-full max-w-3xl mx-auto">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="usd">USD</TabsTrigger>
                  <TabsTrigger value="hkd">HKD</TabsTrigger>
                  <TabsTrigger value="cny">CNY</TabsTrigger>
                </TabsList>
                <TabsContent value="usd">
                  <Card>
                    <CardHeader>
                      <CardTitle>1KG Gold Bar</CardTitle>
                      <CardDescription>99.99% Pure Gold</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-2xl font-bold">$58,450 USD</p>
                      </div>
                      <div className="flex justify-end">
                        <Image
                          src="/placeholder.svg?height=150&width=250"
                          alt="1KG Gold Bar"
                          width={250}
                          height={150}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-start space-x-4">
                      <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Buy</Button>
                      <Button variant="outline" className="bg-red-500 text-white hover:bg-red-600">Sell</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="hkd">
                  <Card>
                    <CardHeader>
                      <CardTitle>1KG Gold Bar</CardTitle>
                      <CardDescription>99.99% Pure Gold</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-2xl font-bold">456,910 HKD</p>
                      </div>
                      <div className="flex justify-end">
                        <Image
                          src="/placeholder.svg?height=150&width=250"
                          alt="1KG Gold Bar"
                          width={250}
                          height={150}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-start space-x-4">
                      <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Buy</Button>
                      <Button variant="outline" className="bg-red-500 text-white hover:bg-red-600">Sell</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="cny">
                  <Card>
                    <CardHeader>
                      <CardTitle>1KG Gold Bar</CardTitle>
                      <CardDescription>99.99% Pure Gold</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-2xl font-bold">421,240 CNY</p>
                      </div>
                      <div className="flex justify-end">
                        <Image
                          src="/placeholder.svg?height=150&width=250"
                          alt="1KG Gold Bar"
                          width={250}
                          height={150}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-start space-x-4">
                      <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Buy</Button>
                      <Button variant="outline" className="bg-red-500 text-white hover:bg-red-600">Sell</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-900">
                Why Choose Us
              </h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col items-center space-y-2 border-indigo-200 p-4 rounded-lg">
                  <DollarSign className="h-8 w-8 text-indigo-600" />
                  <h3 className="text-xl font-bold text-indigo-900">Competitive Prices</h3>
                  <p className="text-sm text-indigo-600 text-center">
                    We offer the best rates in the market, ensuring you get the most value for your investment.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-indigo-200 p-4 rounded-lg">
                  <Lock className="h-8 w-8 text-indigo-600" />
                  <h3 className="text-xl font-bold text-indigo-900">Secure Transactions</h3>
                  <p className="text-sm text-indigo-600 text-center">
                    Your safety is our priority. We use state-of-the-art security measures for all transactions.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-indigo-200 p-4 rounded-lg">
                  <User className="h-8 w-8 text-indigo-600" />
                  <h3 className="text-xl font-bold text-indigo-900">Exceptional Service</h3>
                  <p className="text-sm text-indigo-600 text-center">
                    Our team of experts is always ready to assist you with any queries or concerns.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-indigo-200 p-4 rounded-lg">
                  <Globe className="h-8 w-8 text-indigo-600" />
                  <h3 className="text-xl font-bold text-indigo-900">International Reach</h3>
                  <p className="text-sm text-indigo-600 text-center">
                    With our global network, we facilitate seamless transactions across borders and currencies.
                  </p>
                </div>
              </div>
            </div>
          </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-indigo-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-900">
              Customer Testimonials
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>John Doe</CardTitle>
                  <CardDescription>Investor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">
                    "Global Partner & Resources Limited has been my go-to for gold trading. Their prices are unbeatable
                    and the service is top-notch."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Jane Smith</CardTitle>
                  <CardDescription>Financial Advisor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">
                    "I've been recommending Global Partner & Resources Limited to my clients for years. Their security
                    measures are second to none."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sarah Chen</CardTitle>
                  <CardDescription>International Trader</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">
                    "The multi-currency support and global reach of GPR have made my international gold trading seamless. Their expertise is unmatched."
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-indigo-900">
              Learn About Gold Trading
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Gold Trading Basics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">Learn the fundamentals of gold trading and investment.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Market Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">Stay updated with our expert analysis of the gold market.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Investment Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-indigo-600">Discover effective strategies for gold investment.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="text-indigo-600 border-indigo-600  hover:bg-indigo-50">Read More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-indigo-200">
        <p className="text-xs text-indigo-600">© 2024 Global Partner & Resources Limited. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-indigo-600" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-indigo-600" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}