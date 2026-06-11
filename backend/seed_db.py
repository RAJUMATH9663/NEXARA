import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'nexara_api.settings')
django.setup()

from apps.blog.models import BlogPost
from apps.portfolio.models import Project

def seed():
    print("Seeding database...")
    
    # 1. Seed Projects
    if not Project.objects.exists():
        projects = [
            {
                "title": "MediConnect Platform",
                "category": "web",
                "description": "A comprehensive telemedicine platform connecting patients with doctors for virtual consultations.",
                "tech_stack": "Next.js, Django, PostgreSQL, WebRTC",
                "image_url": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80",
                "demo": "https://mediconnect.nexara.in",
                "github": "https://github.com/nexara/mediconnect",
                "color": "from-blue-500 to-cyan-500"
            },
            {
                "title": "ShopEase Mobile App",
                "category": "mobile",
                "description": "Feature-rich e-commerce mobile app with AR try-on, AI recommendations, and seamless checkout.",
                "tech_stack": "React Native, Node.js, MongoDB, Stripe",
                "image_url": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
                "demo": "https://shopease.nexara.in",
                "github": "https://github.com/nexara/shopease",
                "color": "from-orange-500 to-pink-500"
            },
            {
                "title": "DataSense AI Dashboard",
                "category": "ai",
                "description": "Real-time business intelligence dashboard with ML-powered predictive analytics and insights.",
                "tech_stack": "Python, TensorFlow, React, FastAPI",
                "image_url": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
                "demo": "https://datasense.nexara.in",
                "github": "https://github.com/nexara/datasense",
                "color": "from-purple-500 to-violet-500"
            },
            {
                "title": "LuxeStore E-commerce",
                "category": "ecommerce",
                "description": "Premium fashion e-commerce store with virtual styling AI and personalized recommendations.",
                "tech_stack": "Next.js, Shopify, Tailwind, Prisma",
                "image_url": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
                "demo": "https://luxestore.nexara.in",
                "github": "https://github.com/nexara/luxestore",
                "color": "from-pink-500 to-rose-500"
            },
            {
                "title": "TaskFlow SaaS",
                "category": "saas",
                "description": "Team project management SaaS with AI task prioritization, time tracking, and collaboration tools.",
                "tech_stack": "Vue.js, Laravel, Redis, WebSockets",
                "image_url": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
                "demo": "https://taskflow.nexara.in",
                "github": "https://github.com/nexara/taskflow",
                "color": "from-green-500 to-emerald-500"
            },
            {
                "title": "EduLearn Mobile",
                "category": "mobile",
                "description": "Interactive e-learning app for K-12 students with gamification, video lessons, and progress tracking.",
                "tech_stack": "Flutter, Firebase, Node.js, OpenAI",
                "image_url": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
                "demo": "https://edulearn.nexara.in",
                "github": "https://github.com/nexara/edulearn",
                "color": "from-yellow-500 to-orange-500"
            }
        ]
        for proj in projects:
            Project.objects.create(**proj)
        print(f"Created {len(projects)} projects.")
    else:
        print("Projects already exist.")

    # 2. Seed Blog Posts
    if not BlogPost.objects.exists():
        blogs = [
            {
                "title": "10 Tech Trends to Watch in 2026",
                "excerpt": "Discover the top technologies shaping the future, from generative AI to quantum computing and edge intelligence.",
                "content": "<p>As we enter 2026, the tech landscape is evolving at a breakneck speed. Here are the 10 trends that will redefine industries:</p><ul><li>Generative AI Agent networks</li><li>Quantum-secured communication protocols</li><li>Edge intelligence in IoT</li><li>Next-gen spatial computing</li></ul>",
                "category": "ai",
                "author": "Kavya Nair",
                "image_url": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
                "is_published": True,
                "read_time": 6
            },
            {
                "title": "How AI is Transforming Modern Web Development",
                "excerpt": "A deep dive into how developer agents, AI-assisted design, and Copilots are revolutionizing how web interfaces are designed and developed.",
                "content": "<p>Artificial intelligence is no longer just a autocomplete tool. It is reshaping the entire software development lifecycle.</p><p>By leveraging agentic workflows and automated code synthesis, teams can build premium web experiences in hours instead of months.</p>",
                "category": "web",
                "author": "Meera Krishnan",
                "image_url": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
                "is_published": True,
                "read_time": 4
            },
            {
                "title": "Building Responsive and Dynamic UI with Tailwind CSS v4",
                "excerpt": "Learn how the latest updates in Tailwind CSS v4 can help you create highly performant, visually premium design systems with minimal styling footprint.",
                "content": "<p>Tailwind CSS v4 introduces native CSS nesting, faster compilation with Rust, and enhanced theme configuration.</p><p>In this guide, we explore how to configure custom themes and make layouts that feel incredibly premium and responsive.</p>",
                "category": "design",
                "author": "Rohit Desai",
                "image_url": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
                "is_published": True,
                "read_time": 5
            }
        ]
        for blog in blogs:
            BlogPost.objects.create(**blog)
        print(f"Created {len(blogs)} blog posts.")
    else:
        print("Blog posts already exist.")

    print("Seeding completed successfully!")

if __name__ == '__main__':
    seed()
