import Image from "next/image";
import { SOCIALS } from "../data/socials";
import { SocialLink } from "@/components/social-link";
import React from "react";
import { LINKS } from "@/lib/constants";
// import { allBlogs } from "contentlayer/generated";
// import { BlogCard } from "@/components/blog-card";
// import Link from "next/link";

export default function Home() {
  // const blogs = allBlogs.slice(0, 2).sort((a, b) => {
  //   if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
  //     return -1;
  //   }
  //   return 1;
  // });

  return (
    <React.Fragment>
      <section className="mb-5">
        <Image
          src="/_static/me.jpg"
          width={100}
          height={100}
          alt="avatar"
          className="w-[15em] rounded-full cursor-pointer hover:grayscale mb-5"
          priority
        />
        <h1 className="text-2xl font-bold">Bryan Nonni</h1>

        <div className="text-gray-700 dark:text-gray-300">
          <p className="mt-4">
            I&apos;m a full stack software engineer specializing in building 
            intuitive web and mobile frontends, scalable and well desinged 
            API backends and seamless integrations between them. I have a strong 
            passion for fintech, decentralized identity and Web5. I&apos;m an 
            open source contributor and love to contribute to the Web5 community. 
            
            I&apos;m currently working on projects with TBD
            <ul>
              <li>
                <a href="https://dpm.software/" target="_blank" className="border-b inline-block">Decentralized Package Manager (DPM)</a>.
              </li>
              <li>
                <a href="https://dpm.software/" target="_blank" className="border-b inline-block">Decentralized Credential Exchange (DCX)</a>.
              </li>
            </ul>
          </p>
          <p className="mt-4 mb-4">
            Over the years, I&apos;ve worked for startups and large corporations
            building full stack applications, proof-of-concepts, internal tooling,
            and user-facing web + mobile apps across different verticals domains: retail,
            restaurant, banking, money services, and mortgage lending. I  actively contribute
            to various open source projects. Check out my GitHub to see which ones!
            Most recently, I was building an open source Web5 project intended for use
            in a decentralized credit lending exchange. My life goal is to build
            solutions that maximize human freedom and sovereignty, so users can take
            the control back over their data online.
            <a
              href="https://dcxprotocol.com/"
              target="_blank"
              className="border-b inline-block"
            >
              dcxprotocol.com
            </a>
            .
          </p>

          <p className="mb-4">
            If you&apos;d like to collaborate, please&nbsp;
            <a
              href="mailto:portfolio@nonni.dev"
              className="border-b inline-block"
            >
              send me an email
            </a>
          </p>
        </div>

        <div className="flex space-x-4 mb-2 mt-4">
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.label}
              aria-label={`Follow on ${social.label}`}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
        <p className="mt-4 border-b inline-block cursor-pointer">
          <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </p>
      </section>

      <div className="my-8 w-full border-t border-gray-200 dark:border-gray-800" />

      {/* <div>
        <h2 className="mb-6 text-2xl font-bold">Latest posts</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.slug} className="py-1">
              <Link href={`/blog/${blog.slug}`}>
                <BlogCard blog={blog} key={blog.slug} />
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </React.Fragment>
  );
}
