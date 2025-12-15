import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ExternalLink, Github } from 'lucide-react';

export function Portfolio() {
    const projects = [
        {
            title: 'E-commerce Dashboard',
            category: 'React App',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&q=80',
            description: 'A comprehensive analytic dashboard for Amazon sellers to track sales, inventory, and PPC performance in real-time.',
            tags: ['React', 'Tailwind', 'Recharts', 'Firebase'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Smart Brand Store',
            category: 'Web Design',
            image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?fit=crop&w=800&q=80',
            description: 'Modern, high-converting brand website designed for a private label Amazon brand, featuring seamless checkout integration.',
            tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Inventory Tracker',
            category: 'Tool',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&q=80',
            description: 'Custom inventory management tool that predicts stock depletion and alerts for reordering based on sales velocity.',
            tags: ['React', 'Node.js', 'MongoDB'],
            demoLink: '#',
            codeLink: '#'
        }
    ];

    return (
        <section id="work" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Work</h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A selection of projects that demonstrate my skills in action.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index} className="group overflow-hidden p-0 border-0">
                            <div className="relative overflow-hidden h-48">
                                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    <Button variant="outline" className="flex-1 text-sm py-2" onClick={() => window.open(project.demoLink, '_blank')}>
                                        <ExternalLink size={16} className="mr-2" /> Demo
                                    </Button>
                                    <Button variant="secondary" className="flex-1 text-sm py-2" onClick={() => window.open(project.codeLink, '_blank')}>
                                        <Github size={16} className="mr-2" /> Code
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
