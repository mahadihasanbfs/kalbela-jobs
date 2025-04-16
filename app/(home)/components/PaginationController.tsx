import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/Pagination';

interface PaginationComponentProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationController: React.FC<PaginationComponentProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center pb-6">
            <Pagination>
                <PaginationContent className='space-x-1'>
                    <PaginationItem>
                        <PaginationPrevious
                            className="bg-gray-200 duration-200 text-primary_blue hover:text-white border border-primary_blue/30 hover:bg-primary rounded"
                            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                        />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <PaginationItem
                            key={i}
                            className={`cursor-pointer px-3 border py-1 rounded ${currentPage === i + 1 ? 'bg-primary text-white border-transparent' : 'bg-gray-50 border-gray-300'
                                }`}
                            onClick={() => onPageChange(i + 1)}
                        >
                            {i + 1}
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            className='bg-gray-200 duration-200 text-primary_blue hover:text-white border border-primary_blue/30 hover:bg-primary rounded'
                            onClick={() =>
                                currentPage < totalPages && onPageChange(currentPage + 1)
                            }
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default PaginationController;
