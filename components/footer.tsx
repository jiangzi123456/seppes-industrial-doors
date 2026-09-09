import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "./brand-logo";

export function Footer() {
  return <footer className="footer reference-footer">
    <div className="container footer-grid">
      <div><div className="brand brand-light"><BrandLogo light /></div><p>Industrial door and loading dock solutions for global projects, engineered in Suzhou, China.</p></div>
      <div><h3>Explore</h3><Link href="/products">Products</Link><Link href="/solutions">Solutions</Link><Link href="/project-support/rapid-doors-for-an-automated-assembly-workshop">Case Studies</Link><Link href="/project-support">Project Support</Link><Link href="/source/blog">Blog</Link><Link href="/about">About</Link></div>
      <div><h3>Contact</h3><p><MapPin size={17} /> Suzhou, Jiangsu, China</p><p><Phone size={17} /> <a href="https://wa.me/8617798578460" target="_blank" rel="noreferrer">+86 177 9857 8460</a></p><p><Mail size={17} /> <a href="mailto:huijia@seppes.com.cn">huijia@seppes.com.cn</a></p></div>
      <div><h3>Start a project</h3><p>Share your opening size, application and quantity. Our team will respond within one business day.</p><Link className="text-link light" href="/contact">Request a proposal →</Link></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} SEPPES. All rights reserved.</span><div className="footer-socials"><a href="https://www.facebook.com/profile.php?id=61580385533175" target="_blank" rel="noreferrer" aria-label="Facebook"><span>f</span></a><a href="https://www.youtube.com/@%E7%8E%8B%E6%9D%BE-o4j" target="_blank" rel="noreferrer" aria-label="YouTube"><span>▶</span></a><a href="https://www.tiktok.com/@seppes_george" target="_blank" rel="noreferrer" aria-label="TikTok"><span>♪</span></a></div><Link href="/privacy">Privacy Policy</Link></div>
  </footer>;
}
