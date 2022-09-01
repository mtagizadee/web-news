import React, {useEffect, useState} from 'react';

const ProfileIcon = ({fullName}) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const partition = fullName.split(' ');
        let content = '';
        for (let i = 0; i < partition.length && i < 2; i++) {
           content += partition[i][0];
        }
        setContent(content);
    },[])

    return (
        <p className='font-black text-gray-600'> {content} </p>
    );
};

export default ProfileIcon;