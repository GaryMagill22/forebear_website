import React from 'react';



function HeaderSection() {
    return (
        <div className="headerContainer" >
            <div className="relative isolate overflow-hidden bg-gray-900 h-screen">
                <img
                    src="Colorblock_Polo.png"
                    alt="ColorBlock Poloshirt"
                    className="absolute inset-0 -z-10 h-screen w-screen object-cover opacity-20"
                />
                <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-10"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 header-Container">
                        <h2 className=" tracking-tight text-white sm:text-6xl"><img className="bearImg" src="White_ForeBear_Bear.png" alt="white ForeBear Bear Logo" /> </h2>
                        <p className="  leading-8 text-gray-300 foreBearSummary ">
                            ForeBear was founded in 2021 by Gary Magill and Matthew Hickey. Introduced to one another after college, we bonded over a shared love of golf.  Admittedly, it’s our passion because golf is unique - a game like no other where your mind goes to battle with the course. Where no two courses are the same and your game is never perfected.  Addictive.
                            <br />

                            <br />
                            ForeBear is a clothing and lifestyle brand inspired by golf. We transform golf wear classics with a modern streetwear twist, combining comfort, design and personal style so you look and feel great wherever life takes you.
                            <br />

                            <br />


                            We do not claim to be designers. We are two guys who love golf and wanted to create clothing that we couldn’t find. We create an elevated casual wardrobe that’s as versatile as it is comfortable, created for life beyond the course.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeaderSection;