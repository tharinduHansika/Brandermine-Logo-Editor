import DashboardLayout from "../../components/layout/dashboard"
import { hookstate, useHookstate } from '@hookstate/core';
import { authState } from "../../store/authstore";
import { useState } from "react";


function SettingsDashboard() {
    const auth = useHookstate(authState);
    const [formData, setFormData] = useState({...auth.get().authProfile})
    return <> 
        <div className="flex flex-col flex-1 sm:pl-12 pl-0">
            <div className="p-2 sm:p-8 flex-1">
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 flex items-center py-4">
                        <div className="bg-[#00B728] rounded-full h-32 w-32 flex items-center justify-center relative">
                            <p className="settings-avatar">{(authState.get().authProfile ? authState.get().authProfile['name'] : 'User').charAt(0)}</p>
                            <img
                                src="/images/edit.svg"
                                className="w-8 absolute right-0 bottom-0 bg-[#ED5252] rounded-full p-1"
                            />
                        </div>

                        <div className="flex flex-col ml-4">
                            <p className="settings-name">{auth.get().authProfile['name']}</p>
                            <p className="settings-name2 text-[#68768B]">{auth.get().authProfile['username']}</p>
                        </div>
                    </div>

                    <div className="col-span-12 mt-2">
                        <hr className="border-[#B1B1B1] border-1" />
                    </div>

                    <div className="col-span-12 mt-2">
                        <p className="settings-title">PERSONAL INFORMATION</p>
                    </div>

                    <div className="col-span-12 mt-2">
                        <div className="">
                            <p className="colors-title text-[#404145] mb-4">Name</p>

                            <input
                                className="input1 focus:ring-[#5022b8] focus:ring-2"
                                id="textarea"
                                name="textarea"
                                placeholder="samuel "
                                type="text"
                                value={formData['name']}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="col-span-12">
                        <div className="">
                            <p className="colors-title text-[#404145] mb-4">Email</p>

                            <input
                                className="input1 focus:ring-[#5022b8] focus:ring-2"
                                id="textarea"
                                name="textarea"
                                placeholder="luisandrew@gmail.com"
                                type="text"
                                value={formData['email']}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="col-span-12">
                        <div className="">
                            <p className="colors-title text-[#404145] mb-4">Password</p>

                            <input
                                className="input1 focus:ring-[#5022b8] focus:ring-2"
                                id="textarea"
                                name="textarea"
                                placeholder="Old password..."
                                type="text"
                                onChange={(e) => setFormData({ ...formData, old_pw: e.target.value })}
                            />
                            <br />

                            <input
                                className="input1 focus:ring-[#5022b8] focus:ring-2 mt-2"
                                id="textarea"
                                name="textarea"
                                placeholder="New password..."
                                type="text"
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                        </div>
                    </div>

                    <div className="col-span-12">
                        <div className="">
                            <p className="colors-title text-[#404145] mb-4">
                                Subscription
                            </p>

                            <select
                                name="cars"
                                id="cars"
                                className="select1 focus:ring-[#5022b8] focus:border-[#5022b8] focus:ring-2"
                            >
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-span-12 mt-2">
                        <hr className="border-[#B1B1B1] border-1" />
                    </div>

                    <div className="col-span-12 mt-2">
                        <button className="primary-btn float-right">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SettingsDashboard;
SettingsDashboard.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}