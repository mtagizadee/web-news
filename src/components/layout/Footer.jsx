import React from 'react';
import Logo from "../Logo";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className='mt-14 ml-6 sm:flex justify-evenly max-w-[1100px]'>
                <Logo clickable={false}/>
                <div className='mt-6 2sm:mt-0'>
                    <ul>
                        <li className='font-medium'> Quick links </li>
                        <li className='font-medium mt-2 mb-2'> <NavLink className='opacity-60' to='/'> Home </NavLink> </li>
                        <li className='font-medium mb-2'> <NavLink className='opacity-60' to='posts'> Posts </NavLink> </li>
                        <li className='font-medium mb-2'> <NavLink className='opacity-60' to='membership'> Become a member </NavLink> </li>
                    </ul>
                </div>
                <div className='mt-6 2sm:mt-0'>
                    <ul>
                        <li className='font-medium'> Contacts </li>
                        <li className='font-medium mt-2 mb-2 opacity-60'> info@roadmates.com </li>
                        <li className='font-medium opacity-60 mb-2'>  (555) 555-1234 </li>
                        <li className='font-medium opacity-60 mb-2'>  Random Address </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-center p-6'>
                <div className='flex justify-evenly w-36'>
                    <a href="https://www.facebook.com/">
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.241935 7.989H1.88618V14.7581C1.88618 14.8917 1.99447 15 2.12811 15H4.91598C5.04963 15 5.15792 14.8917 5.15792 14.7581V8.02089H7.04811C7.17102 8.02089 7.27442 7.92866 7.28845 7.80658L7.57553 5.31455C7.58342 5.24598 7.56169 5.17732 7.51582 5.12589C7.4699 5.0744 7.40419 5.04494 7.33524 5.04494H5.15802V3.48281C5.15802 3.0119 5.99299 2.77311 6.49312 2.77311C6.56439 2.77311 7.91667 2.77311 7.91667 2.77311C8.05031 2.77311 8.33333 2.6336 8.33333 2.5V0.416667C8.33333 0.283022 8.05031 0 7.91667 0L5.37339 0.00179032C5.35955 0.0011129 5.32882 0 5.28353 0C4.94313 0 3.75992 0.0668226 2.82527 0.926661C1.78969 1.8795 1.93365 3.02037 1.96805 3.21818V5.04489H0.241935C0.10829 5.04489 0 5.15318 0 5.28682V7.74702C0 7.88066 0.10829 7.989 0.241935 7.989Z" fill="#B2BAC2"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com/">
                        <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5694 2.6141C18.2709 2.74648 17.964 2.85822 17.6505 2.94892C18.0217 2.52909 18.3047 2.03509 18.4775 1.49451C18.5162 1.37334 18.4761 1.24071 18.3765 1.16146C18.277 1.08215 18.1388 1.07265 18.0293 1.13756C17.3634 1.53251 16.6449 1.81634 15.8916 1.98232C15.1328 1.24083 14.1021 0.818848 13.0367 0.818848C10.7876 0.818848 8.95787 2.64854 8.95787 4.89752C8.95787 5.07465 8.96909 5.2508 8.99127 5.42449C6.20043 5.17946 3.60583 3.80772 1.82413 1.62218C1.76063 1.54428 1.66281 1.50229 1.56267 1.51032C1.46246 1.51817 1.37242 1.57468 1.3218 1.66153C0.960429 2.2816 0.769388 2.99079 0.769388 3.71235C0.769388 4.69514 1.12027 5.62761 1.7401 6.35623C1.55163 6.29095 1.36874 6.20938 1.19419 6.11248C1.10048 6.06032 0.98611 6.06111 0.89301 6.1145C0.799849 6.16788 0.74144 6.26607 0.738988 6.37339C0.738559 6.39147 0.738559 6.40955 0.738559 6.42787C0.738559 7.89485 1.5281 9.21559 2.73521 9.93545C2.6315 9.92509 2.52786 9.91007 2.4249 9.8904C2.31874 9.87011 2.20958 9.90732 2.138 9.98828C2.06629 10.0692 2.04257 10.182 2.0756 10.2849C2.52241 11.6799 3.67276 12.7059 5.06344 13.0188C3.91002 13.7412 2.59099 14.1196 1.20633 14.1196C0.917404 14.1196 0.626827 14.1026 0.342441 14.069C0.201167 14.0522 0.0660838 14.1356 0.017971 14.2699C-0.0301417 14.4044 0.0208516 14.5542 0.141042 14.6313C1.91986 15.7718 3.9767 16.3747 6.08906 16.3747C10.2417 16.3747 12.8395 14.4164 14.2875 12.7737C16.0931 10.7253 17.1286 8.014 17.1286 5.33507C17.1286 5.22316 17.1269 5.11014 17.1235 4.99749C17.8359 4.46077 18.4492 3.81122 18.9483 3.06464C19.0241 2.95125 19.0159 2.8014 18.9281 2.69702C18.8404 2.59258 18.6942 2.55881 18.5694 2.6141Z" fill="#B2BAC2"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5314 0H4.46858C2.0046 0 0 2.0046 0 4.46858V10.5314C0 12.9954 2.0046 15 4.46858 15H10.5314C12.9954 15 15 12.9954 15 10.5314V4.46858C15 2.0046 12.9954 0 10.5314 0ZM13.491 10.5314C13.491 12.1659 12.1659 13.491 10.5314 13.491H4.46858C2.83406 13.491 1.509 12.1659 1.509 10.5314V4.46858C1.509 2.83404 2.83406 1.509 4.46858 1.509H10.5314C12.1659 1.509 13.491 2.83404 13.491 4.46858V10.5314Z" fill="#B2BAC2"/>
                            <path d="M7.49965 3.62048C5.36047 3.62048 3.62012 5.36084 3.62012 7.49999C3.62012 9.63914 5.36047 11.3795 7.49965 11.3795C9.63883 11.3795 11.3792 9.63917 11.3792 7.49999C11.3792 5.36081 9.63883 3.62048 7.49965 3.62048ZM7.49965 9.87055C6.19043 9.87055 5.12912 8.80924 5.12912 7.50002C5.12912 6.1908 6.19046 5.12948 7.49965 5.12948C8.80887 5.12948 9.87019 6.1908 9.87019 7.50002C9.87019 8.80921 8.80884 9.87055 7.49965 9.87055Z" fill="#B2BAC2"/>
                            <path d="M11.3847 4.57933C11.8981 4.57933 12.3143 4.16314 12.3143 3.64974C12.3143 3.13635 11.8981 2.72015 11.3847 2.72015C10.8713 2.72015 10.4551 3.13635 10.4551 3.64974C10.4551 4.16314 10.8713 4.57933 11.3847 4.57933Z" fill="#B2BAC2"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.519566 15.1828H2.59959C2.88656 15.1828 3.11916 14.9502 3.11916 14.6632V5.57145C3.11916 5.28445 2.88656 5.05188 2.59959 5.05188H0.519566C0.232574 5.05188 0 5.28445 0 5.57145V14.6632C0 14.9501 0.232574 15.1828 0.519566 15.1828Z" fill="#B2BAC2"/>
                            <path d="M0.519566 3.45359H2.59959C2.88656 3.45359 3.11916 3.22099 3.11916 2.93403V1.08695C3.11916 0.799986 2.88656 0.567383 2.59959 0.567383H0.519566C0.232574 0.567383 0 0.799986 0 1.08695V2.93403C0 3.22099 0.232574 3.45359 0.519566 3.45359Z" fill="#B2BAC2"/>
                            <path d="M15.2175 6.10637C14.9252 5.72163 14.4942 5.40523 13.9243 5.15723C13.3544 4.9094 12.7254 4.7854 12.0372 4.7854C10.64 4.7854 9.45619 5.3186 8.48563 6.3852C8.2925 6.59742 8.15209 6.55103 8.15209 6.26403V5.57141C8.15209 5.28441 7.91946 5.05184 7.6325 5.05184H5.77445C5.48746 5.05184 5.25488 5.28441 5.25488 5.57141V14.6632C5.25488 14.9501 5.48749 15.1828 5.77445 15.1828H7.85448C8.14147 15.1828 8.37404 14.9501 8.37404 14.6632V11.5013C8.37404 10.184 8.45358 9.28116 8.61267 8.79277C8.77169 8.30438 9.06595 7.9122 9.49515 7.61618C9.9244 7.32016 10.4091 7.17207 10.9494 7.17207C11.3711 7.17207 11.7319 7.2757 12.0317 7.48297C12.3314 7.69022 12.5479 7.98054 12.6811 8.35434C12.8144 8.72808 12.8809 9.55134 12.8809 10.8242V14.6631C12.8809 14.9501 13.1135 15.1827 13.4005 15.1827H15.4805C15.7675 15.1827 16 14.9501 16 14.6631V9.51432C16 8.60413 15.9427 7.90476 15.8281 7.41637C15.7135 6.92798 15.5099 6.49131 15.2175 6.10637Z" fill="#B2BAC2"/>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;