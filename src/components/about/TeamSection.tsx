// components/about/TeamSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "John Adebayo",
    role: "CEO & Founder",
    bio: "Over 20 years of experience in construction and home improvement.",
    image: "/team/john-adebayo.jpg",
    linkedin: "#",
    email: "john@proknacks.com",
    phone: "801 234 5678",
  },
  {
    name: "Chioma Okonkwo",
    role: "Lead Designer",
    bio: "Specializes in modern interior design and space optimization.",
    image: "/team/chioma-okonkwo.jpg",
    linkedin: "#",
    email: "chioma@proknacks.com",
    phone: "802 345 6789",
  },
  {
    name: "Emeka Nwosu",
    role: "Project Manager",
    bio: "Ensures seamless project execution from start to finish.",
    image: "/team/emeka-nwosu.jpg",
    linkedin: "#",
    email: "emeka@proknacks.com",
    phone: "803 456 7890",
  },
  {
    name: "Amina Yusuf",
    role: "Quality Assurance",
    bio: "Maintains our high standards across all projects.",
    image: "/team/amina-yusuf.jpg",
    linkedin: "#",
    email: "amina@proknacks.com",
    phone: "804 567 8901",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-amber-400/10 to-orange-500/10 border border-amber-400/20 text-amber-400 text-sm font-semibold mb-4">
            Meet Our Experts
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-50 mb-6">
            The Minds Behind the Magic
          </h2>
          <p className="text-lg text-amber-50/70 leading-relaxed">
            Our diverse team of professionals brings together decades of
            experience, creativity, and passion for excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-amber-400/15 hover:border-amber-400/30 rounded-2xl overflow-hidden transition-all duration-300 h-full">
                {/* Team Member Image */}
                <div className="relative h-64 lg:h-72">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />

                  {/* Social Links */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.linkedin}
                      className="p-2 rounded-full bg-gray-900/80 backdrop-blur-sm hover:bg-amber-400 hover:text-gray-900 transition-colors"
                      aria-label={`Connect with ${member.name} on LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Team Member Info */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-amber-50 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-amber-50/70 text-sm mb-4">{member.bio}</p>

                  <div className="space-y-2 pt-4 border-t border-amber-400/10">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-amber-50/70 hover:text-amber-400 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-sm text-amber-50/70 hover:text-amber-400 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-amber-400/5 to-orange-500/5 border border-amber-400/20">
            <div className="text-left">
              <h3 className="text-xl font-bold text-amber-50 mb-2">
                Join Our Growing Team
              </h3>
              <p className="text-amber-50/70">
                We&apos;re always looking for talented professionals passionate
                about home improvement.
              </p>
            </div>
            <a
              href="/careers"
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              View Careers
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
