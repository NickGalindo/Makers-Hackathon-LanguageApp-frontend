'use client';
export function ChooseLang({ setLang, setIsPlaying }) {
    return (
        <div class="w-full h-screen max-w-xl p-4 flex items-center  rounded-lg shadow sm:p-6 ">
            <div>
                <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                    Hi!, what do you want to learn today?
                </h5>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400"></p>
                <ul class="my-4 space-y-3">
                    <li>
                        <button href="#" class="flex w-full items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white" onClick={() => { setLang("English"); setIsPlaying(true) }}>

                            <span class="flex-1 ms-3 whitespace-nowrap">English</span>
                        </button>
                    </li>
                    <li>
                        <button href="#" class="flex w-full items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white" onClick={() => { setLang("French");; setIsPlaying(true) }}>

                            <span class="flex-1 ms-3 whitespace-nowrap">French</span>
                        </button>
                    </li>
                </ul>
                <div class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                    We are adding more languages soon!
                </div>
            </div>
        </div>
    );
}
