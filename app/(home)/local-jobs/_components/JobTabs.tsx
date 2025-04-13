'use client';

import { useState, useEffect } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import CategoryContent from './CategoryContent';
import Industries from './Industries';
import { useRouter } from 'next/navigation';

const tabItems = [
    { key: 'category', label: 'Jobs by Category', content: <CategoryContent /> },
    { key: 'industries', label: 'Industries', content: <Industries /> },
    { key: 'newly posted', label: 'Newly Posted', content: 'Latest jobs posted recently.' },
    { key: 'earlies_deadline', label: 'Earliest Deadline', content: 'Jobs sorted by earliest deadlines.' },
];

const JobTabs = () => {
    const [activeTab, setActiveTab] = useState('category');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Set to true once the component has mounted on the client
        setIsClient(true);
    }, []);

    if (!isClient) {
        // Return an empty div or loading indicator until the component is mounted on the client
        return <div />;
    }

    const router = useRouter();

    const clickHandler = (key: string) => {
        if (key === 'newly posted') {
            router.push('/newly-post/pbo-professional');
        } else if (key === 'earlies_deadline') {
            router.push('/earlies_deadline/pbo-professional');
        }
        else {
            setActiveTab(key);
        }
    };
    let test: any[] = [];



    return (
        <div className="w-full">
            {/* Tabs for medium and up */}
            <div className="border-gray-200 dark:border-neutral-700 hidden md:block">
                <nav className="flex gap-x-4 border-b" role="tablist" aria-orientation="horizontal">
                    {tabItems.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => clickHandler(tab.key)}
                            type="button"
                            className={`py-2 px-4 text-sm rounded-t-md transition-colors
                                   ${activeTab === tab.key
                                    ? 'bg-gray-100 border-t border-l border-r border-b-none text-primary_blue dark:text-blue-400'
                                    : 'text-primary hover:text-primary_blue dark:text-neutral-400 dark:hover:text-blue-500'
                                }`}
                            role="tab"
                            aria-selected={activeTab === tab.key}
                            aria-controls={`tab-${tab.key}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>

                <div className="mt-4">
                    {tabItems.map((tab) => (
                        <div
                            key={tab.key}
                            id={`tab-${tab.key}`}
                            role="tabpanel"
                            aria-labelledby={`tab-${tab.key}`}
                            className={activeTab === tab.key ? 'block' : 'hidden'}
                        >
                            <p className="mb-3 bg-primary_gray px-2 py-1.5 text-sm font-semibold">
                                {tab?.label}
                            </p>

                            {tab?.content}
                        </div>
                    ))}
                </div>
            </div>

            {/* Accordion for small devices */}
            <div className="block md:hidden mt-4">
                <h1 className="font-semibold text-lg">Chose Your Jobs</h1>
                <Accordion
                    type="single"
                    collapsible
                    defaultValue={tabItems[0].key} // This opens the first item by default
                    className="w-full"
                >
                    {tabItems.map((tab) => (
                        <AccordionItem key={tab.key} value={tab.key}>
                            <AccordionTrigger>{tab.label}</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600 dark:text-neutral-400">
                                    {tab.content}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default JobTabs;
