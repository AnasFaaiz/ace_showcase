import { BookOpen } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <section id="introduction" className="mb-16 scroll-mt-28">
      <div className="flex items-center gap-3 mb-4">
        <BookOpen size={28} className="text-[#94e2d5]" />
        <h2 className="text-3xl font-bold">Introduction</h2>
      </div>
      <p className="text-[#9399b2] leading-relaxed">
        A.C.E. (Automated Command Environment) is a personal assistant designed to help developers. It acts as a smart, centralized hub to automate your daily workflow, saving you from repetitive commands so you can focus on building what matters.
      </p>
    </section>
  );
};

export default IntroductionSection;

