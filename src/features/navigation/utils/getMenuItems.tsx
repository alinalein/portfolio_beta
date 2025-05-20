import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MessageIcon from '@mui/icons-material/Message';
import Texts, { Language } from '../../../shared/utils/texts';

type MenuItem = {
    readonly name: string;
    readonly label: string;
    readonly icon: React.ReactNode;
}

const getMenuItems = (language: Language): readonly MenuItem[] => [
    { name: 'ABOUT', label: Texts[language].navigation.ABOUT, icon: <PersonOutlineIcon className='menu-icon' /> },
    { name: 'WORK', label: Texts[language].navigation.WORK, icon: <RemoveRedEyeIcon className='menu-icon' /> },
    { name: 'CONTACT', label: Texts[language].navigation.CONTACT, icon: <MessageIcon className='menu-icon' /> },
] as const;

export default getMenuItems; 