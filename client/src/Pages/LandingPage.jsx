import React from 'react'
import NewsLetterSignup from '../Components/NewsLetterSignup';



function LandingPage() {

    return (

        <div className="main-container h-screen" >

            <main className="relative isolate -z-10 h-screen">

                <img
                    src='ColorBlock_Polo.png'
                    className="absolute inset-0 -z-10 w-full h-full object-cover stroke-gray-200 [mask-image:radial-gradient(50rem_50rem_at_center,white,transparent)]"
                    aria-hidden="true"
                />


                {/* Hero section */}
                <div className="relative isolate -z-10"  >
                    <img id="forebearWhiteText" src="WhiteForeBearTextOnly.png" alt="White ForeBear" style={{ color: "white" }} />



                    <div
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">

                                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl summary-Container ">
                                    <p className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                                        <img className="bearImg" src="White_ForeBear_Bear.png" alt="white ForeBear Bear Logo" />
                                    </p>
                                    <p className="relative mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                                        ForeBear was founded in 2021 by Gary Magill and Matthew Hickey. Introduced to one another after college, we bonded over a shared love of golf.  Admittedly, it’s our passion because golf is unique - a game like no other where your mind goes to battle with the course. Where no two courses are the same and your game is never perfected.  Addictive.
                                        <br />

                                        <br />
                                        ForeBear is a clothing and lifestyle brand inspired by golf. We transform golf wear classics with a modern streetwear twist, combining comfort, design and personal style so you look and feel great wherever life takes you.
                                        <br />

                                        <br />


                                        We do not claim to be designers. We are two guys who love golf and wanted to create clothing that we couldn’t find. We create an elevated casual wardrobe that’s as versatile as it is comfortable, created for life beyond the course.
                                    </p>
                                </div>
                                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <div className="relative">
                                            <img
                                                src="ForeBear_Tags.png"
                                                alt="ForeBear tags"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <img
                                                src="ForeBear_Sweatshirts_Colorblock.png"
                                                alt="ForeBear Sweatshirts closeup"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                src="IMG_6360.png"
                                                alt="Hats with ForeBear Logo on them"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <img
                                                src="ForeBear_Rain_Jacket.png"
                                                alt="ForeBear Rain Jacket"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                        <div className="relative">
                                            <img
                                                src="ForeBear_Waffle_Closeup.png"
                                                alt="ForeBear Waffle 1/4 Zip"
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <NewsLetterSignup />
        </div>
    )
}

export default LandingPage;

