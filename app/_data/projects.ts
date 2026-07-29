import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "NeuroLab",
    description:
      "An interactive, browser-based simulator for visualising classical neural network learning rules — Hebbian, Perceptron, and Delta — with a live network canvas, real-time loss curves, and step-by-step math logs.",
    problem:
      "Neural network theory is dense and abstract; students struggle to connect the math on paper to what actually happens inside a network during training.",
    solution:
      "Built a fully client-side React + TypeScript simulator where users configure architecture, learning rule, and hyperparameters, then watch every forward pass, weight update, and error propagation unfold frame-by-frame on an interactive pan-and-zoom canvas alongside a live MSE chart and detailed math log.",
    impact:
      "Makes three foundational learning algorithms tangible and explorable without any backend or installation, bridging the gap between theory and intuition for anyone learning neural networks.",
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Chart.js",
      "react-chartjs-2",
      "mathjs",
      "CSS Modules",
    ],
    isFinished: true,
    imageUrl: "/neuroLab.png",
    link: "https://neuroailab.netlify.app/",
    githubUrl: "https://github.com/MuhaymenRaed/neuro-lab",
    ar: {
      title: "نيورولاب",
      description:
        "محاكٍ تفاعلي يعمل في المتصفح لتصوير قواعد تعلم الشبكات العصبونية الكلاسيكية — هبيان وبيرسبترون ودلتا — مع لوحة شبكة حية ومنحنيات خسارة آنية وسجلات رياضية خطوة بخطوة.",
      problem:
        "نظرية الشبكات العصبونية كثيفة ومجردة؛ يواجه الطلاب صعوبة في ربط المعادلات على الورق بما يحدث فعليًا داخل الشبكة أثناء التدريب.",
      solution:
        "بناء محاكٍ React + TypeScript يعمل بالكامل من جانب العميل، حيث يكوّن المستخدمون البنية وقاعدة التعلم والمعاملات الفائقة، ثم يشاهدون كل تمرير أمامي وتحديث للأوزان وانتشار للخطأ إطارًا بإطار على لوحة قماشية تفاعلية بجانب مخطط MSE حي وسجل رياضي مفصّل.",
      impact:
        "يُجسّد ثلاثة خوارزميات تعلم أساسية ويجعلها قابلة للاستكشاف دون أي خادم أو تثبيت، مما يسد الفجوة بين النظرية والحدس لكل من يتعلم الشبكات العصبونية.",
    },
  },
  {
    title: "Sinaa Link",
    description:
      "A scalable store-of-stores platform allowing vendors to create and manage their own shops while buyers explore and purchase from multiple dealers in one place.",
    problem:
      "Small and medium dealers lacked an easy way to launch online stores, while buyers needed a unified platform to discover trusted sellers without switching between websites.",
    solution:
      "Built a multi-vendor marketplace where users can register as buyers or dealers, create individual stores with a fixed, consistent layout, publish products, and manage transactions through role-based dashboards. Admin controls ensure verification, moderation, and platform-wide management.",
    impact:
      "Enabled multiple vendors to launch stores on a single platform, improved product discoverability, and centralized buyer–seller interactions with advanced search and filtering.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Supabase",
      "Supabase Edge Functions",
      "Supabase Realtime",
      "Row-Level Security",
      "Motion",
      "shadcn/ui",
      "Radix UI",
      "Recharts",
      "next-themes",
      "Lucide React",
      "React Hot Toast",
      "Sonner",
      "Brevo API",
      "WhatsApp API",
      "date-fns",
      "Geolocation API",
      "Vercel",
      "ESLint 9",
      "Deno",
    ],
    isFinished: true,
    imageUrl: "/sinaaLink.png",
    link: "https://www.sinaal.ink",
    githubUrl: "https://github.com/MuhaymenRaed/Multi-Vendor-Store.git",
    figmaUrl:
      "https://www.figma.com/make/pdtkla92kXEF09U67useFP/Design-Multi-Vendor-Marketplace-UI?t=zAZIk4vKnjgh3JgD-1",
    ar: {
      title: "صناعة لنك",
      description:
        "منصة متعددة البائعين قابلة للتوسع تتيح للبائعين إنشاء متاجرهم الخاصة وإدارتها، بينما يتصفح المشترون المنتجات ويشترونها من بائعين متعددين في مكان واحد.",
      problem:
        "افتقر التجار الصغار والمتوسطون إلى طريقة سهلة لإطلاق متاجرهم الإلكترونية، بينما احتاج المشترون إلى منصة موحدة لاكتشاف البائعين الموثوقين دون التنقل بين المواقع.",
      solution:
        "بناء سوق متعدد البائعين حيث يمكن للمستخدمين التسجيل كمشترين أو تجار، وإنشاء متاجر فردية بتصميم ثابت ومتسق، ونشر المنتجات وإدارة المعاملات عبر لوحات تحكم محددة الأدوار. تضمن ضوابط الإدارة التحقق والإشراف والإدارة على مستوى المنصة.",
      impact:
        "مكّن بائعين متعددين من إطلاق متاجرهم على منصة واحدة، وحسّن إمكانية اكتشاف المنتجات، ومركز تفاعلات المشتري والبائع مع بحث وتصفية متقدمَين.",
    },
  },
  {
    title: "Orphanage Management System",
    description:
      "A secure, real-time ecosystem designed to streamline orphan care operations and sensitive data management of Sponsorships.",
    problem:
      "Inefficient manual tracking of resident data, leading to fragmented records and delayed administrative responses.",
    solution:
      "Architected a centralized dashboard using TypeScript and Supabase, featuring real-time synchronization, secure role-based access control, and an intuitive UI for complex data entry.",
    impact:
      "Drastic reduction in administrative overhead and improved data integrity for 100% of resident records.",
    techStack: [
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "React Query",
      "React Router",
      "React Hook Form",
      "React Context API",
      "React Hot Toast ",
      "Framer Motion",
    ],
    isFinished: true,
    imageUrl: "/orphanageManagmentSystem.png",
    link: "https://orphange-management-system.netlify.app/overview",
    githubUrl: "https://github.com/MuhaymenRaed/Orphan-Management-System.git",
    figmaUrl:
      "https://www.figma.com/design/ufogIJL2xzAWN0107jlfeR/Orphan-Management-System?node-id=1-55356&t=PNQwniU4zV4jqvuu-1",
    ar: {
      title: "نظام إدارة دور الأيتام",
      description:
        "نظام بيئي آمن وفوري مصمم لتبسيط عمليات رعاية الأيتام وإدارة البيانات الحساسة للكفالات.",
      problem:
        "التتبع اليدوي غير الكفء لبيانات المقيمين، مما يؤدي إلى سجلات متشتتة وتأخر في الاستجابات الإدارية.",
      solution:
        "تصميم لوحة تحكم مركزية باستخدام TypeScript وSupabase، تتميز بالمزامنة الفورية وضبط الوصول الآمن المستند إلى الأدوار وواجهة مستخدم بديهية لإدخال البيانات المعقدة.",
      impact:
        "خفض جذري في الأعباء الإدارية وتحسين سلامة البيانات لـ 100٪ من سجلات المقيمين.",
    },
  },
  {
    title: "Prayer Manager",
    description:
      "A cross-platform mobile application built with React Native and Expo that helps users manage, track, and elevate their daily prayer routines — with location-aware prayer times, smart notifications, streak tracking, and a fully personalized spiritual experience.",
    problem:
      "Most prayer apps are static and impersonal — they show times but fail to motivate consistency, adapt to individual spiritual journeys, or build meaningful long-term habits.",
    solution:
      "Built a feature-rich mobile app with GPS-precise prayer times, fully customizable notification sounds and vibration patterns, streak-based habit tracking with visual statistics, seamless multi-language switching, home screen widgets for quick logging, and customizable themes — all designed to make daily prayer a natural, personal ritual.",
    impact:
      "Transforms prayer management from a passive reminder into an active habit-building experience, giving users both the tools and the motivation to maintain lasting consistency.",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "React Context",
      "Device Notifications API",
      "i18n Localization",
      "Local Storage",
      "Haptic Feedback",
    ],
    isFinished: false,
    imageUrl: "/prayerManager.png",
    link: "/#projects",
    githubUrl: "https://github.com/MuhaymenRaed/Prayer_Manger",
    figmaUrl:
      "https://www.figma.com/make/iKuwZfVo8xr7U9BZE3K6mA/Islamic-Prayer-Manager-App",
    ar: {
      title: "مدير الصلاة",
      description:
        "تطبيق موبايل متعدد المنصات مبني بـ React Native وExpo، يساعد المستخدمين على إدارة وتتبع وتعزيز روتين صلواتهم اليومية — بأوقات صلاة دقيقة حسب الموقع الجغرافي، وإشعارات ذكية، وتتبع المواظبة، وتجربة روحية مخصصة بالكامل.",
      problem:
        "معظم تطبيقات الصلاة تعرض المواقيت فحسب ولا تحفّز على الاستمرارية — إنها أدوات ثابتة لا تتكيف مع الرحلة الروحية الفردية ولا تبني عادات راسخة على المدى البعيد.",
      solution:
        "بناء تطبيق موبايل متكامل بأوقات صلاة دقيقة تعتمد على GPS، مع أصوات إشعار وأنماط اهتزاز قابلة للتخصيص الكامل، وتتبع المواظبة بإحصاءات بصرية وسلاسل متعاقبة، ودعم متعدد اللغات مع تبديل سلس داخل التطبيق، وويدجت للشاشة الرئيسية، وثيمات قابلة للتخصيص — كل ذلك لجعل الصلاة اليومية طقسًا شخصيًا سلسًا.",
      impact:
        "يحوّل إدارة الصلاة من تذكير سلبي إلى تجربة فعّالة لبناء العادات، ويمنح المستخدمين الأدوات والدافع للحفاظ على الاستمرارية الدائمة.",
    },
  },
  {
    title: "Rofoof",
    description:
      "A full-featured e-commerce platform for handcrafted goods — stickers, brooches, 3D-printed products, and posters — with deep search, real-time order tracking, a powerful admin dashboard, dark/light mode, and bilingual support.",
    problem:
      "Independent creators selling handcrafted and 3D-printed merchandise lacked a tailored storefront capable of showcasing their products elegantly while managing orders, inventory, and the complete customer journey end-to-end.",
    solution:
      "Built a polished Next.js e-commerce experience with intuitive product discovery, deep search and filtering, real-time order tracking, a fully featured admin dashboard with complete store control, user wishlists, detailed profile preferences, and a bilingual (Arabic/English) interface with dark/light mode.",
    impact:
      "Provides independent creators with a production-grade digital storefront that elevates brand perception and delivers a seamless shopping experience from discovery to delivery.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "React Query",
      "shadcn/ui",
      "Framer Motion",
    ],
    isFinished: true,
    imageUrl: "/rofoof.png",
    link: "https://www.rofoof.net/",
    figmaUrl:
      "https://www.figma.com/make/Q5RhGkThghKUWSNRfjf9fl/E-Commerce-Platform-Design?t=BMA0BbPWRoQ4qOWF-1",
    ar: {
      title: "روفوف",
      description:
        "منصة تجارة إلكترونية متكاملة للمنتجات اليدوية — ملصقات وبروشات ومطبوعات ثلاثية الأبعاد وبوسترات — مع بحث عميق وتتبع طلبات حي ولوحة تحكم إدارية متكاملة ووضع فاتح/داكن ودعم ثنائي اللغة.",
      problem:
        "يفتقر المبدعون المستقلون الذين يبيعون منتجات يدوية ومطبوعة ثلاثية الأبعاد إلى متجر رقمي مخصص قادر على عرض منتجاتهم بأناقة مع إدارة الطلبات والمخزون وتجربة العميل الكاملة.",
      solution:
        "بناء تجربة تجارة إلكترونية متكاملة بـ Next.js مع واجهة اكتشاف منتجات سهلة، وبحث وتصفية عميقَين، وتتبع طلبات في الوقت الفعلي، ولوحة تحكم إدارية شاملة مع تحكم كامل في المتجر، وقوائم رغبات، وملفات مستخدم تفصيلية، وواجهة ثنائية اللغة مع وضع فاتح/داكن.",
      impact:
        "يمنح المبدعين المستقلين واجهة رقمية احترافية جاهزة للإنتاج، ترفع صورة العلامة التجارية وتقدم تجربة تسوق سلسة من الاكتشاف حتى التوصيل.",
    },
  },
];
