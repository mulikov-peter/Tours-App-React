import {
  FaAddressCard,
  FaBriefcase,
  FaHandshake,
  FaUmbrellaBeach,
  FaMountain,
  FaCampground,
  FaBook,
  FaShoppingCart,
} from 'react-icons/fa';

const sublinks = [
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaAddressCard />, url: '/about' },
      { label: 'carries', icon: <FaBriefcase />, url: '/carries' },
      { label: 'partners', icon: <FaHandshake />, url: '/partners' },
    ],
  },
  {
    page: 'tours',
    links: [
      { label: 'sea rest', icon: <FaUmbrellaBeach />, url: '/sea rest' },
      { label: 'mountains', icon: <FaMountain />, url: '/mountains' },
      { label: 'agriturismo', icon: <FaCampground />, url: '/agriturismo' },
    ],
  },
  {
    page: 'stories',
    links: [{ label: 'stories', icon: <FaBook />, url: '/stories' }],
  },
  {
    page: 'contact',
    links: [{ label: 'contact', icon: <FaAddressCard />, url: '/contact' }],
  },
  {
    page: 'cart',
    links: [{ label: 'cart', icon: <FaShoppingCart />, url: '/cart' }],
  },
];

export default sublinks;
