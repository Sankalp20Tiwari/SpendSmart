
import { 
  Wallet, 
  DollarSign,
  TrendingUp, 
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