import {
  FaAddressCard,
  FaBriefcase,
  FaHandshake,
  FaBorderAll,
  FaUmbrellaBeach,
  FaTree,
  FaMountain,
  FaCampground,
  FaBook,
  FaShoppingCart,
} from 'react-icons/fa';

const sublinks = [
  {
    page: 'company',
    links: [
      { label: 'about us', icon: <FaAddressCard />, url: '/about us' },
      { label: 'carries', icon: <FaBriefcase />, url: '/carries' },
      { label: 'partners', icon: <FaHandshake />, url: '/partners' },
    ],
  },
  {
    page: 'tours',
    links: [
      { label: 'all tours', icon: <FaBorderAll />, url: '/all' },
      { label: 'forest', icon: <FaTree />, url: '/forest' },
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
