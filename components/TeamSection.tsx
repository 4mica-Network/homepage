'use client';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former blockchain architect at Meta with 10+ years experience in distributed systems and AI infrastructure.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20Asian%20male%20tech%20executive%20in%20his%2030s%2C%20wearing%20dark%20business%20attire%2C%20clean%20modern%20office%20background%2C%20corporate%20photography%20style%2C%20professional%20lighting&width=300&height=400&seq=team-alex&orientation=portrait'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'PhD in Computer Science from Stanford, previously led AI research at Google DeepMind focusing on multi-agent systems.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20Hispanic%20female%20technology%20leader%20in%20her%20early%2030s%2C%20wearing%20professional%20blazer%2C%20clean%20modern%20background%2C%20corporate%20photography%20style%2C%20warm%20lighting&width=300&height=400&seq=team-sarah&orientation=portrait'
    },
    {
      name: 'Michael Thompson',
      role: 'Head of Engineering',
      bio: 'Full-stack engineer with expertise in Web3 protocols and smart contract development, former lead at Coinbase.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20Caucasian%20male%20software%20engineer%20in%20his%20late%2020s%2C%20wearing%20casual%20professional%20attire%2C%20modern%20tech%20office%20background%2C%20corporate%20photography%20style&width=300&height=400&seq=team-michael&orientation=portrait'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of Research',
      bio: 'AI researcher specializing in autonomous agent behavior and machine learning, published 50+ papers in top-tier journals.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20Indian%20female%20AI%20researcher%20in%20her%20early%2030s%2C%20wearing%20professional%20attire%2C%20clean%20academic%20background%2C%20corporate%20photography%20style%2C%20natural%20lighting&width=300&height=400&seq=team-priya&orientation=portrait'
    },
    {
      name: 'James Wilson',
      role: 'VP of Business Development',
      bio: 'Strategic partnerships expert with 15+ years in fintech and Web3, former executive at Stripe and ConsenSys.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20African%20American%20male%20business%20executive%20in%20his%2040s%2C%20wearing%20suit%20and%20tie%2C%20modern%20corporate%20office%20background%2C%20executive%20photography%20style&width=300&height=400&seq=team-james&orientation=portrait'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B1F3B] mb-6">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-[#1E4DD8] mx-auto mb-8"></div>
          <p className="text-lg text-[#1B1F3B] max-w-2xl mx-auto">
            Leading experts in AI, blockchain, and payment infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-[#F5F9FF] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B1F3B] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#1E4DD8] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-[#1B1F3B] text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}