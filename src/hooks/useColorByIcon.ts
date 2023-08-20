interface IconColors {
  bg: string;
  color: string;
  cardColor: string;
  iconName: string,
}

export default function useColorByIcon(icon: string): IconColors {
  switch (icon) {
    case '1':
    case '2':
      return { bg: '#539eed', color: '#ffff', cardColor:'#6babed', iconName: 'sun'};
    case '1n':
    case '2n':
      return { bg: '#0c0317', color: '#ffffff', cardColor: '#20296b', iconName: 'sun'};
    case '3':
      return { bg: '#c2d4ed', color: '#ffffff', cardColor:'#d8e1ed', iconName: 'sun'};
    default:
      return { bg: '#ffffff', color: '#000000', cardColor:'#6babed', iconName: 'sun'};
  }
}

//return { bg: '#FADD7A', color: '#000000' }; amarelo lindo