import React from 'react';
import { Card } from '../components/ui/Card';

export function Skills() {
    const skills = [
        {
            category: 'Frontend Development',
            items: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Redux / Context API', 'Next.js']
        },
        {
            category: 'Backend & Tools',
            items: ['Node.js', 'Firebase', 'Git / GitHub', 'REST APIs', 'VS Code', 'Webpack/Vite']
        },
        {
            category: 'Amazon VA & E-commerce',
            items: ['Seller Central Management', 'PPC Optimization', 'Product Research (Helium 10)', 'Listing Optimization', 'Keyword Research', 'Inventory Management']
        }
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Expertise</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolset for building successful digital businesses.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <Card key={index} className="h-full hover:border-blue-500/50 transition-colors">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-2">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-slate-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
