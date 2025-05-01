import { Button } from 'antd';
import { RocketFilled, TeamOutlined, BellFilled, DashboardFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/image.png';

const HomePage = () => {
  return (
    <div>
      {/* Navigation */}
    

      {/* Hero Section */}
      <section className="max-w-11/12  mx-auto rounded-2xl overflow-hidden bg-white  shadow-2xl flex flex-col mb-12 md:flex-row min-h-screen">
        <div className="w-full mx-auto   flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 lg:pl-16 md:pl-8 pl-4 md:mb-0">
            <h1 className="text-5xl font-bold text-[#333333] mb-6 leading-tight">
              Organize Your Work<br/>
              <span className="text-[#5E56E7]">Smarter</span> Way
            </h1>
            <p className="text-[#666666] text-lg mb-8">
              Transform your productivity with AI-powered task management. 
              Collaborate, track, and achieve more every day.
            </p>
            <div className="flex gap-4">
              <Button 
                type="primary" 
                size="large"
                className="bg-[#5E56E7] hover:bg-[#4d46cf] border-none h-12 px-8 rounded-lg font-semibold"
              >
                Start Free Trial
              </Button>
              <Button 
                size="large"
                className="h-12 px-8 rounded-lg font-semibold border-2 border-[#5E56E7] text-[#5E56E7] hover:bg-[#5E56E7]/10"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="md:w-1/2  border-l-8 rounded-l-2xl border-blue-700">
            <img 
              src={heroImage} 
              alt="Task Management Dashboard" 
              className="rounded-2xl w-full shadow-xl transform hover:scale-[1.02] transition-transform"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Powerful Features
            </h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              Everything you need to manage your team's tasks and boost productivity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <DashboardFilled className="text-4xl" />, title: "Smart Dashboard" },
              { icon: <TeamOutlined className="text-4xl" />, title: "Team Collaboration" },
              { icon: <BellFilled className="text-4xl" />, title: "Smart Reminders" },
            ].map((feature, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-[#F8F7FF] hover:bg-[#5E56E7] group transition-colors"
              >
                <div className="text-[#5E56E7] group-hover:text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#333333] group-hover:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#666666] group-hover:text-white/80">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#333333]">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '📝', title: 'Create Tasks', color: 'from-[#5E56E7] to-[#8179FF]' },
              { icon: '🤖', title: 'AI Optimization', color: 'from-[#FF8E4F] to-[#ffaa7f]' },
              { icon: '👥', title: 'Collaborate', color: 'from-[#4CAF50] to-[#66BB6A]' },
              { icon: '🚀', title: 'Launch', color: 'from-[#F44336] to-[#EF5350]' }
            ].map((step, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl bg-gradient-to-br ${step.color} text-white transform hover:-translate-y-3 transition-all`}
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 opacity-90">Lorem ipsum dolor sit amet consectetur</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Stats Grid */}
      <section className="py-20 bg-[#F8F7FF]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-[#333333]">
              Transform Your Productivity
            </h2>
            <p className="text-[#666666] text-lg">
              Join 50,000+ teams already revolutionizing their workflow
            </p>
            <div className="flex gap-4">
              <Button 
                size="large"
                className="h-14 px-8 bg-[#5E56E7] text-white rounded-xl border-none hover:bg-[#4d46cf]"
              >
                See Case Studies
              </Button>
            </div>
          </div>

          {/* Animated Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '85%', label: 'Faster Task Completion' },
              { value: '10x', label: 'Team Efficiency' },
              { value: '4.9/5', label: 'User Rating' },
              { value: '99.9%', label: 'Uptime' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl font-bold text-[#5E56E7]">{stat.value}</div>
                <div className="text-[#666666] mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Gradient CTA with Parallax Effect */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5E56E7] to-[#8179FF] transform -skew-y-3" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Team?
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Start your 14-day free trial today
          </p>
          <Button 
            size="large"
            className="h-16 px-12 bg-white text-[#5E56E7] text-xl rounded-2xl hover:bg-gray-100 border-none"
          >
            Get Started Now
          </Button>
        </div>
      </section>
      

      {/* CTA Section */}
    

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div>
            <div className="h-8 w-8 bg-[#5E56E7] rounded-lg flex items-center justify-center text-white font-bold mb-4">
              T
            </div>
            <p className="text-[#999999]">
              Making productivity simple and effective for teams worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-[#999999]">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-[#999999]">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-[#999999]">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;