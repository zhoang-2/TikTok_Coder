import { faHouse, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';

export const navbar = [
    {
        name: 'Tất Cả Sản Phẩm',
        link: 'tat-ca-san-pham',
        icon: faHouse,
        parent: [],
    },
    {
        name: 'Đang Follow',
        link: 'dang-follow',
        icon: faUserGroup,
        parent: [],
    },
    {
        name: 'Khám phá',
        link: 'kham-pha',
        icon: faCompass,
        parent: [],
    },
    {
        name: 'LIVE',
        link: 'live',
        icon: faVideo,
        parent: [],
    },
];
