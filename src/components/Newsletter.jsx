'use client'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'
import { useState, useRef } from 'react'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24"  {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Newsletter() {
     const [watchingAlone, setWatchingAlone] = useState(true);
     const [totalWatching, setTotalWatching] = useState(1);
     const [file, setFile] = useState(null);
     const fileInputRef = useRef(null)
     const [fileName, setFileName] = useState('');
   
     const handleFileChange = (e) => {
       const file = e.target.files[0];
       setFile(file);
       setFileName(file.name);
     };

  const handleWatchingAloneChange = (e) => {
               const value = e.target.value;
               // setTotalWatching(watchingAlone ? 1 : totalWatching);
              
              if (value === '1') {
    //                // If "Yes" is selected, set totalWatching to 1
           setTotalWatching(1);
           setWatchingAlone(true);
         } else if (value === '2') {
           // If "No" is selected, set totalWatching to 2
           setTotalWatching('');
           setWatchingAlone(false);
         }
      // if (value === 'yes' || (parseInt(value) > 1)) {
      //      setWatchingAlone(true);
      //    } else {
      //      setWatchingAlone(false);
      //    }
               
      //    setTotalWatching(value === 'yes' ? 1 : parseInt(value, 10));
    };
    
    const handleTotalWatchingChange = (e) => {
      const newValue = e.target.value;
      if (newValue === '' || !Number.isNaN(Number(newValue))) {
        setTotalWatching(newValue);
      } else {
        // Prevent the default behavior of the event
        e.preventDefault();
      }
    };
  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Stay up to date
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                Get updates on all of our events and be the first to get
                notified when tickets go on sale.
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-blue-900">
              VERIFICATION PROCESS <span aria-hidden="true">&darr;</span>
              </h3>
              <Button type="button" href="https://www.kingsforms.online/form/respond/LWF-VJ227763919402" >
                <span className="sr-only sm:not-sr-only">Get verified</span>
                <span className="sm:hidden">
                  <ArrowRightIcon className="h-6 w-6" />
                </span>
              </Button>
              <div className='relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y- xl:max-w-none xl:grid-cols-2'>
                  {/* <div className="mt-5 flex rounded-3xl  bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                    <input
                      type="name"
                      required
                      placeholder="Full name"
                      aria-label="Full name"
                      className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                    />
                    <Button type="submit">
                      <span className="sr-only sm:not-sr-only">Sign up today</span>
                      <span className="sm:hidden">
                        <ArrowRightIcon className="h-6 w-6" />
                      </span>
                    </Button>
                  </div> */}
                  {/* <div>
                    <div className="mt-5 flex rounded-3xl h-12 bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                      <input
                        type="name"
                        required
                        placeholder="Full name"
                        aria-label="Full name"
                        className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                    <div className="mt-5 flex rounded-3xl h-12 bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                      <input
                        type="phone"
                        required
                        placeholder="Phone number"
                        aria-label="Phone number"
                        className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                    <div className="mt-5 flex rounded-3xl h-12 bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                      <input
                        type="email"
                        required
                        placeholder="Email address"
                        aria-label="Email address"
                        className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                    <div className="mt-5 flex rounded-3xl h-12 bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                      <input
                        type="name"
                        required
                        placeholder="Business/Company name"
                        aria-label="Business/Company name"
                        className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                    <div className="mt-5 flex rounded-3xl h-12 bg-white py-2.5 pr-2 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                      <label htmlFor="date" className="my- flex-auto bg-transparent pl-6 text-sm text-slate-400 ">
                       When did your business start?
                      </label>
                      <input
                        type="date"
                        required
                        placeholder="When did your business start"
                        aria-label="When did your business start"
                        className="-my-2.5 flex-auto bg-transparent pl-3 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="mt-5 flex rounded-3xl h-12 bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                      
                      <div className=' relative flex space-x-8 w-full mb-10 font-main'>
                            <label htmlFor="alone" className='my- flex-auto bg-transparent pl-6 text-sm text-slate-400 '>Is your business registered?</label>
                            <div>
                            <input
                                type="radio"
                                id="yes"
                                name="alone"
                                value="1"
                                checked={watchingAlone}
                                onChange={handleWatchingAloneChange}
                            />
                            <label htmlFor="yes" className='text-black'>Yes</label>
                            </div>
                            <div>
                            <input
                                             
                                type="radio"
                                id="no"
                                name="alone"
                                value="2"
                                checked={!watchingAlone}
                                onChange={handleWatchingAloneChange}
                            />
                            <label className='text-black' htmlFor="no">No</label>
                            </div>
                      </div>
                    </div>
                    <div className="mt-5 flex rounded-3xl bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                      <label htmlFor="alone" className='my-2.5 flex-auto bg-transparent pl-6 text-sm text-slate-400 overflow-hidden truncate'> {!fileName ? "If yes, upload documents , if No, skip." : fileName}  </label>
                            
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        hidden
                        placeholder="If yes, upload documents , if No, skip."
                        aria-label="If yes, upload documents , if No, skip."
                        className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                      <Button type="button" onClick={() => fileInputRef.current?.click()}>
                        <span className="sr-only sm:not-sr-only">upload</span>
                        <span className="sm:hidden">
                          <ArrowUpIcon className="h-6 w-6" />
                        </span>
                      </Button> 
                    </div>
                    <div className="mt-5 flex rounded-3xl h-12 bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                      <input
                        type="email"
                        required
                        placeholder="If your business has a website, drop the URL"
                        aria-label="If your business has a website, drop the URL"
                        className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                    <div className="mt-5 flex rounded-3xl h-12 bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                      <input
                        type="email"
                        required
                        placeholder="Drop your portfolio/works in the drive  below (Google drive)"
                        aria-label="Drop your portfolio/works in the drive  below (Google drive)"
                        className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                    <div className="mt-5 flex rounded-3xl h-12 bg-white py-2.5 pr-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                      <input
                        type="text-area"
                        required
                        placeholder="Purpose of joining, NTYFW"
                        aria-label="Purpose of joining, NTYFW"
                        className="-my-2.5 flex-auto bg-transparent pl-6 pr-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
                      />
                    </div>
                  </div> */}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
