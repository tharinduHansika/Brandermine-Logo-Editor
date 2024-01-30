import DashboardLayout from "../../components/layout/dashboard"


function MessagesDashboard() {
    return <>
        <div>
            <div className="flex flex-col items-end justify-end py-4">
                <p className="chat-text bg-[#5022B8] py-6 px-6 rounded-t-2xl rounded-bl-2xl text-white max-w-[230px]">
                    Hi.. what’s up brother?
                </p>
                <p className="chat-time mt-3">Today 01:16 PM</p>
            </div>

            {/* chat left */}
            <div className="flex flex-row items-start justify-start py-4">
                <div className="mr-4">
                    <img
                        src="/images/sidebar/avatar.png"
                        className="h-16 object-cover"
                    />
                </div>
                <div>
                    <p className="chat-text bg-[#EFF5F5] py-6 px-6 rounded-t-2xl rounded-br-2xl text-[#25396F] max-w-[230px]">
                        i’m fine. you okay?
                    </p>
                    <p className="chat-time mt-3">Today 01:21 PM</p>
                </div>
            </div>

            {/* chat right */}
            <div className="flex flex-col items-end justify-end py-4">
                <p className="chat-text bg-[#5022B8] py-6 px-6 rounded-t-2xl rounded-bl-2xl text-white max-w-[230px]">
                    Don’t worry, i okay. How about your vacation?
                </p>
                <p className="chat-time mt-3">Today 01:36 PM</p>
            </div>

            {/* chat left with images*/}
            <div className="flex flex-row items-start justify-start py-4">
                <div className="mr-4">
                    <img
                        src="/images/sidebar/avatar.png"
                        className="h-16 object-cover"
                    />
                </div>
                <div>
                    <p className="chat-text bg-[#EFF5F5] py-6 px-6 rounded-t-2xl rounded-br-2xl text-[#25396F] max-w-[230px]">
                        Very fun. I've taken all my activities
                    </p>
                    <p className="chat-time mt-3">Today 01:21 PM</p>

                    <div className="flex flex-row mt-4 items-center">
                        <img
                            src="/images/sidebar/avatar.png"
                            className="h-16 object-cover mr-2"
                        />
                        <img
                            src="/images/sidebar/avatar.png"
                            className="h-16 object-cover mr-2"
                        />
                        <p className="chat-text bg-[#7AA3F5] p-3 text-white rounded-md">
                            +7
                        </p>
                    </div>
                </div>
            </div>

            {/* chat right */}
            <div className="flex flex-col items-end justify-end py-4">
                <p className="chat-text bg-[#5022B8] py-6 px-6 rounded-t-2xl rounded-bl-2xl text-white max-w-[230px]">
                    Wow... that great.
                </p>
                <p className="chat-time mt-3">Today 01:36 PM</p>
            </div>
        </div>

        <div className="h-[100px] p-4 sm:p-8 flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center items-center">
                <img
                    src="/images/sidebar/img.png"
                    className="h-[19px] mr-4 object-cover"
                />
                <img
                    src="/images/sidebar/smile.png"
                    className="h-[22px] object-cover mr-4 sm:mr-8"
                />
                <img
                    src="/images/sidebar/sep.png"
                    className="h-[22px] object-cover"
                />
            </div>

            <div className="flex-1">
                <input
                    className="chat-input px-8 focus:border-0 focus:ring-0"
                    id="textarea"
                    name="textarea"
                    placeholder="Message here"
                    type="text"
                />
            </div>

            <div className="block sm:hidden">
                <button
                    type="submit"
                    className="primary-btn w-auto flex items-center justify-center px-4 py-4 text-[16px] rounded-lg"
                >
                    <img src="/images/sidebar/send.png" className="w-[18px]" />
                </button>
            </div>

            <div className="hidden sm:block">
                <button
                    type="submit"
                    className="primary-btn w-auto flex items-center justify-center px-6 py-6 text-[16px] rounded-lg"
                >
                    Send
                    <img src="/images/sidebar/send.png" className="w-[18px] ml-6" />
                </button>
            </div>
        </div>
    </>
}

export default MessagesDashboard;
MessagesDashboard.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}