export default function Footer() {
    return (
        <footer className="bg-[#13100A] text-white text-center p-4 mt-6">
            <div className="mb-[26px]">
                <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 sm:gap-[40px]">
                    <p className="text-sm sm:text-base text-white cursor-pointer hover:underline">
                        Privacy Notice
                    </p>
                    <p className="text-sm sm:text-base text-white cursor-pointer hover:underline">
                        Terms of Service
                    </p>
                    <p className="text-sm sm:text-base text-white cursor-pointer hover:underline">
                        Cookie Policy
                    </p>
                    <p className="text-sm sm:text-base text-white cursor-pointer hover:underline">
                        Company Information
                    </p>
                    <p className="text-sm sm:text-base text-white cursor-pointer hover:underline">
                        Cookie Preferences
                    </p>
                </div>
            </div>
            <hr className="border-white mb-[26px]" />
            <div>
                <p className="text-xs sm:text-sm">
                    Copyright &copy; GameQuest, Inc. All rights reserved
                </p>
            </div>
        </footer>
    );
}
