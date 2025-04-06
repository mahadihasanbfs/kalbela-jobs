import { QnAccordion, QnAccordionContent, QnAccordionItem, QnAccordionTrigger } from '@/components/ui/QnAccordion';
import React from 'react';

interface QuestionProps {
    question: any;
}

const Question = ({ question }: QuestionProps) => {
    return (
        <div className='py-4'>
            <div className="text-center">
                <div className=" font-bold md:text-[1.8rem]  text-2xl">
                    Frequently Asked Questions
                    <div className="flex items-center justify-center gap-1 mt-3 ">
                        <span className="bg-primary_blue w-[30px] h-1 rounded-full"></span>
                        <span className="bg-gray-200 w-[50px] h-1 rounded-full"></span>
                    </div>
                </div>
            </div>

            <QnAccordion
                type="single" collapsible className="w-full py-8 space-y-3">
                {
                    question?.map((itm: any, index: number) => <QnAccordionItem key={index} value={`itm-${index}`}>
                        <QnAccordionTrigger>{itm?.question}</QnAccordionTrigger>
                        <QnAccordionContent className='text-md text-gray-500'>
                            {itm?.answer}
                        </QnAccordionContent>
                    </QnAccordionItem>)
                }
            </QnAccordion>
        </div>
    );
};

export default Question;