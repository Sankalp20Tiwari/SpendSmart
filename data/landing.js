
import { 
  Wallet, 
  DollarSign,
  PieChart, 
  CreditCard, 
  TrendingUp, 
  Bell, 
  Shield, 
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";



export const howItWorksData = [
  {
    icon: Wallet,
    title: "Connect Your Accounts",
    description: "Securely link your bank accounts, credit cards, and financial services to get a complete view of your finances."
  },
  {
    icon: DollarSign,
    title: "Set Up Your Budget",
    description: "Create custom budgets for different spending categories based on your income and financial goals."
  },
  {
    icon: TrendingUp,
    title: "Track and Optimize",
    description: "Monitor your spending habits, receive insights, and make adjustments to reach your financial goals."
  }
];



export const statsData = [
  {
    value: "10,000+",
    label: "Active Users"
  },
  {
    value: "$2.5M",
    label: "Monthly Budgets Managed"
  },
  {
    value: "85%",
    label: "Users Save More"
  },
  {
    value: "4.8/5",
    label: "App Store Rating"
  }
];


export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    quote: "SpendSmart completely changed how I manage both my personal and business expenses. The insights I get each month help me make better financial decisions.",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Michael Thompson",
    role: "Software Developer",
    quote: "As someone who's terrible with tracking expenses, this app is a lifesaver. The automatic categorization and budget alerts keep me on track.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    quote: "I've tried many finance apps, but SpendSmart is by far the most intuitive and comprehensive. I've saved over $3,000 since I started using it!",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "David Kim",
    role: "Freelance Designer",
    quote: "Managing irregular income used to be stressful. With SpendSmart, I can easily plan ahead and smooth out my cash flow. Love it!",
    image: "https://randomuser.me/api/portraits/men/28.jpg"
  },
  {
    name: "Jessica Lee",
    role: "Graduate Student",
    quote: "Tracking my student budget has never been easier. The spending insights help me avoid overspending each semester.",
    image: "https://randomuser.me/api/portraits/women/77.jpg"
  },
  {
    name: "Mark Davis",
    role: "Retired Engineer",
    quote: "I wish I had SpendSmart earlier in life. It’s helped me monitor retirement expenses and plan trips without worry.",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  }
];



export const pricingData = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for individuals starting their financial journey",
    features: [
      "Expense tracking",
      "Basic budget creation",
      "Connect up to 2 accounts",
      "Monthly summary reports"
    ]
  },
  {
    name: "Premium",
    price: "$9.99/month",
    description: "Ideal for those who want to take control of their finances",
    features: [
      "Everything in Basic",
      "Unlimited account connections",
      "Custom budget categories",
      "Bill reminders and predictions",
      "Detailed analytics and insights",
      "Goal tracking and recommendations"
    ],
    highlighted: true
  },
  {
    name: "Family",
    price: "$19.99/month",
    description: "Great for households managing shared finances",
    features: [
      "Everything in Premium",
      "Up to 5 user accounts",
      "Shared budget management",
      "Family spending insights",
      "Financial goal collaboration",
      "Priority customer support"
    ]
  }
];


export const faqData = [
  {
    question: "Is my financial data secure with SpendSmart?",
    answer: "Absolutely. We use bank-level 256-bit encryption to secure your data. We never store your account credentials, and our systems are regularly audited for security compliance."
  },
  {
    question: "How does SpendSmart connect to my bank accounts?",
    answer: "We use secure API connections through trusted financial data providers like Plaid and Yodlee. This allows us to securely access your transaction data without storing your banking credentials."
  },
  {
    question: "Can I use SpendSmart if I have accounts at multiple banks?",
    answer: "Yes! One of the key benefits of SpendSmart is the ability to connect accounts from different financial institutions to get a complete picture of your finances."
  },
  {
    question: "How accurate is the automatic categorization of expenses?",
    answer: "Our system uses machine learning to categorize transactions with high accuracy. As you use the app, it learns from any manual categorization adjustments you make and becomes even more accurate over time."
  },
  {
    question: "Can I export my financial data from SpendSmart?",
    answer: "Yes, you can export your data in various formats including CSV and PDF. This is useful for tax purposes or if you want to analyze your data in other tools."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, SpendSmart is available as a mobile app for both iOS and Android devices, as well as a web application accessible from any browser."
  }
];

export const enhancedFeaturesData = [
  {
    title: "Budget Tracking",
    description: "Set custom budgets and track spending in real-time with visual reports.",
    icon: PieChart,
    color: "from-teal-400 to-emerald-600",
    textColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    variant: "gradient",
    hoverEffect: "scale"
  },
      {
    title: "Smart Alerts",
    description: "Get timely notifications about unusual spending, upcoming bills, and opportunities to save.",
    icon: Bell,
    color: "from-orange-400 to-amber-500",
    textColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    size: "col-span-1 md:col-span-1 md:row-span-1",
    variant: "icon-left",
    hoverEffect: "glow"
  },
  {
    title: "Secure Transactions",
    description: "Bank-level encryption ensures your financial data stays private and protected.",
    icon: Shield,
    color: "from-indigo-500 to-blue-600",
    textColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    size: "col-span-2 md:col-span-2 md:row-span-1",
    image: "/secureTransactions.jpg",
    variant: "image-dominant",
    hoverEffect: "glow"
  },
  {
    title: "Investment Tracking",
    description: "Monitor investments, analyze performance, and receive personalized recommendations.",
    icon: TrendingUp,
    color: "from-neutral-200/30 via-zinc-400/30 to-transparent",
    textColor: "text-green-400",
    borderColor: "border-green-500/20",
    size: "col-span-2 md:col-span-1 md:row-span-2",
    image: "/investmentTracking.jpg",
    variant: "vertical",
    hoverEffect: "slide"
  },
  {
    title: "Mobile Access",
    description: "Manage your finances anytime, anywhere with our fully-featured mobile app.",
    icon: Smartphone,
    color: "from-pink-500 to-rose-600",
    textColor: "text-pink-400",
    borderColor: "border-pink-500/20",
    size: "col-span-2 md:col-span-1 md:row-span-1",
    image: "/mobileAccess.jpg",
    variant: "image-dominant",
    hoverEffect: "zoom"
  },
    {
    title: "AI Insights",
    description: "Get personalized financial advice powered by advanced AI algorithms.",
    icon: Sparkles,
    color: "from-cyan-400 to-blue-600",
    textColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    size: "col-span-2 md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1633158829799-56bdf8e56dbd?ixlib=rb-4.0.3",
    variant: "minimal",
    hoverEffect: "pulse"
  },
  {
    title: "Payment Management",
    description: "Schedule payments and never miss a due date with automated reminders.",
    icon: CreditCard,
    color: "from-purple-500 to-violet-600",
    textColor: "text-purple-400",
    borderColor: "border-purple-500/20",
    size: "col-span-1 md:col-span-1 md:row-span-2",
    image: "/paymentManagement.jpg",
    variant: "icon-prominent",
    hoverEffect: "slide"
  },
  
  {
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized platform.",
    icon: Zap,
    color: "from-amber-400 to-orange-600",
    textColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    size: "col-span-1 md:col-span-2 md:row-span-1",
    variant: "gradient-text",
    hoverEffect: "bounce"
  }
];