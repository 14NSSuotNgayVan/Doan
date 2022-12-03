import Home from "../assets/img/Group 1000002749.png"
const Sidebar = ()=>{
    return(
        <div className="w-[20%] border-solid border-r-[1px] border-[#E8E8E8] h-[100vh]">
            <div className="">
                <img className="w-[50px] h-[50px] mx-auto my-[8%]" src={Home} />
                <ul>
                    <li className="flex flex-row px-[10%]"><svg className="pr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3501 9.09412C14.8676 9.09412 16.0976 7.86412 16.0976 6.34662C16.0976 4.82995 14.8676 3.59912 13.3501 3.59912" stroke="#42526E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.6135 12.0801C15.0668 12.1109 15.5168 12.1759 15.961 12.2742C16.5768 12.3967 17.3185 12.6492 17.5818 13.2017C17.7502 13.5559 17.7502 13.9684 17.5818 14.3226C17.3193 14.8751 16.5768 15.1276 15.961 15.2542" stroke="#42526E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99283 12.6719C11.0678 12.6719 13.6945 13.1377 13.6945 14.9985C13.6945 16.8602 11.0845 17.3419 7.99283 17.3419C4.91783 17.3419 2.29199 16.8769 2.29199 15.0152C2.29199 13.1535 4.90116 12.6719 7.99283 12.6719Z" stroke="#42526E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99281 10.0155C5.96448 10.0155 4.33948 8.38967 4.33948 6.36134C4.33948 4.33384 5.96448 2.70801 7.99281 2.70801C10.0211 2.70801 11.647 4.33384 11.647 6.36134C11.647 8.38967 10.0211 10.0155 7.99281 10.0155Z" stroke="#42526E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>Quản trị thành viên</li>
                    <li>Danh mục
                        <ul>
                            <li>Ngành nghề</li>
                            <li>Khóa</li>
                            <li>Lớp</li>
                        </ul>
                    </li>
                    <li>Đồ án
                        <ul>
                            <li>Quản lí đợt</li>
                            <li>kho đề tài</li>
                        </ul>
                    </li>
                    
                    <li>Tổ chức</li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;