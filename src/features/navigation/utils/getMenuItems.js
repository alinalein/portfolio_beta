import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MessageIcon from '@mui/icons-material/Message';

const getMenuItems = (language, Texts) => [
    { name: 'ABOUT', label: Texts[language].navigation.ABOUT, icon: <PersonOutlineIcon className='menu-icon' /> },
    { name: 'WORK', label: Texts[language].navigation.WORK, icon: <RemoveRedEyeIcon className='menu-icon' /> },
    { name: 'CONTACT', label: Texts[language].navigation.CONTACT, icon: <MessageIcon className='menu-icon' /> },
];

export default getMenuItems; 