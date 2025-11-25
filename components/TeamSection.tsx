'use client';

import Image from 'next/image';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Akash Madhusudan',
      role: 'CEO & Co-Founder',
      image: '/assets/akash.jpg',
      bio: 'Spent a decade solving real problems across banking, AI, and cryptography to build 4Mica',
    },
    {
      name: 'Mairon Mahzoun',
      role: 'CTO & Co-Founder',
      image: '/assets/mairon.jpg',
      bio: 'Everyone talks about AI and web3. Few understand money. 4mica exists because I grew tired of watching the web3 community claiming it had solved payments. It didn’t. So I decided to.',
    },
    {
      name: 'Tomer Ashur',
      role: 'Co-Founder',
      image: '/assets/tomer.png',
      bio: 'Cryptography-savant, ex-professor, ex-captain, now leading the instant transaction layer for commerce 2.0'
    },
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
            Leading experts in Cryptography, blockchain, and payment infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-[#F5F9FF] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
                <div className="relative overflow-hidden h-[420px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center w-full h-full group-hover:scale-110 transition-transform duration-300"
                    quality={100}
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