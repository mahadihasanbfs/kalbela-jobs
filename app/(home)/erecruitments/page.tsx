import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';

const ErecruitmentsPage = () => {
    return (
        <div className='py-6'>
            <MaxWidthWrapper>
                <h1 className="font-semibold text-xl">eRecruitment System</h1>
                <p className="mt-2 text-gray-700">
                    <b className='text-black'>eRecruitment System </b>  is a fully customized solution by which a Corporate Human Resource Department can significantly automate its recruitment process. It is designed to suit the needs of the HR department in fulfilling the online recruitment procedure and to fit the corporate image. The solution enables the HR Department to make the Recruitment Process faster, easier and transparent. It also significantly cuts the recruitment cost and time.
                </p>

                <h5 className="text-lg mt-3">There are set of services offered as complimentary along with eRecruitment System:
                </h5>

                <ol className='my-3 list-decimal ml-4'>
                    <li>Banner Advertisement (Home Page)</li>
                    <li>Category Page Banner</li>
                    <li>Job Advertisement in Homepage and Category section</li>
                    <li>Online Promotion including Facebook, Google and LinkedIn</li>
                </ol>

                <h4 className="text-2xl mt-8">Head Hunting / Executive Search</h4>
                <p className="">Our Head Hunting Service is extremely detailed and client focused. We do not rely on a database of candidates; we have been identifying and attracting the very best talents. We guarantee to search the ideal candidate for the vacancy. We pride ourselves on our ability to effectively hunt down and attract the most talented candidates from across the market. Our process begins by better understanding client’s organization, corporate culture and recruitment requirements. Our commitment ensures that our reach is effective and our search efforts are fast and targeted.</p>

                <img
                    className='m-auto my-4'
                    src="https://www.nrbjobs.com/images/hunting_process.png"
                    alt="image-1" />

                <h4 className="text-2xl mt-6">Resume Delivery</h4>
                <p className="">We have a large database of resumes. Additionally, there are varieties of sources for resumes available to us. We could easily make a pool of suitable resumes depending on the job requirements. In the scope of this service, we will provide a number of short-listed resumes for every position. Following services are delivered as complementary -</p>

                <img
                    className='m-auto my-4'
                    src="https://www.nrbjobs.com/images/hunting_process.png"
                    alt="image-1" />

                <h3 className="text-2xl">HR Consultancy</h3>
                <p className="">Our team comes with a wealth of corporate experience that is diverse and broad. We map existing processes, assess gaps and ultimately bridge the gaps. However, our mapping techniques, tools deployed, business understanding, and recommendations are based on world-class best practices. Moreover, we get involved in the implementation, track development, and measure success criteria.</p>

                <h5 className="text-2xl mt-4">Areas of Expertise:</h5>
                <ul className='list-disc ml-4'>
                    <li> Recruitment & Selection</li>
                    <li>  Policies & Procedures</li>
                    <li> Job Evaluation</li>
                    <li>  Personnel</li>
                    <li>  Career Development</li>
                    <li>  Appraisal Systems</li>
                </ul>

                <h4 className="text-2xl mt-4">HR Process Outsourcing</h4>
                <p>We provide customized outsourcing solutions beyond time and geographies to manage the human resource operations of our clients. In this service bracket, our in-bound team takes responsibilities of entire HR operations of our client such as resume management, screening candidates, interview scheduling, on-boarding facilities etc. Teams are deployed both on-site and off-site to manage the client hiring needs as per their culture and structure. Being industry insiders we understand our client world and culture; giving us a leverage to support in recruiting and assessing the right kinds of candidatures. Our commitment towards building sustainable manpower structure has made us build long term relations with our clients.</p>
            </MaxWidthWrapper>
        </div>
    );
};

export default ErecruitmentsPage;