interface ConfigurationByIcon {
  backgroundColor: string;
  textColor: string;
  cardColor: string;
  iconName: string,
}

export default function configureLayoutByIcon(icon: string): ConfigurationByIcon {
  switch (icon) {
    case '1':
    case '2':
      return { backgroundColor: '#539eed', textColor: '#ffff', cardColor:'#6babed', iconName: 'sun'};
    case '1n':
    case '2n':
      return { backgroundColor: '#0c0317', textColor: '#ffffff', cardColor: '#20296b', iconName: 'moon'};
    case '3':
      return { backgroundColor: '#c2d4ed', textColor: '#ffffff', cardColor:'#d8e1ed', iconName: 'cloud-drizzle'}; 
    case '3n':
      return { backgroundColor: '#c2d4ed', textColor: '#ffffff', cardColor:'#d8e1ed', iconName: 'cloud-drizzle'};
    case '3tm':
      return { backgroundColor: '#c2d4ed', textColor: '#ffffff', cardColor:'#d8e1ed', iconName: 'cloud'};
      //revisar
     case '4':
      return { backgroundColor: '#c2d4ed', textColor: '#ffffff', cardColor:'#d8e1ed', iconName: 'cloud-drizzle'};
     case '4n':
      return { backgroundColor: '#c2d4ed', textColor: '#ffffff', cardColor:'#d8e1ed', iconName: 'cloud-drizzle'};
    case '4r':
      return { backgroundColor: '#c2d4ed', textColor: '#ffffff', cardColor:'#d8e1ed', iconName: 'cloud-drizzle'};
    case '4rn':
      return { backgroundColor: '#c2d4ed', textColor: '#ffffff', cardColor:'#d8e1ed', iconName: 'cloud-drizzle'};
    case '5':
      return { backgroundColor: '#c2d4ed', textColor: '#ffffff', cardColor:'#d8e1ed', iconName: 'cloud-rain'};
    case '5n':
      return { backgroundColor: '#c2d4ed', textColor: '#ffffff', cardColor:'#d8e1ed', iconName: 'cloud-rain'};
    case '6':
        return { backgroundColor: '#c2d4ed', textColor: '#ffffff', cardColor:'#d8e1ed', iconName: 'cloud-lightning'};
    case '6n':
      return { backgroundColor: '#c2d4ed', textColor: '#ffffff', cardColor:'#d8e1ed', iconName: 'cloud-lightning'}; 
    case '5n':
      return { backgroundColor: '#c2d4ed', textColor: '#ffffff', cardColor:'#d8e1ed', iconName: 'cloud-lightning'};
      
    
      
    default:
      return { backgroundColor: '#ffffff', textColor: '#000000', cardColor:'#6babed', iconName: 'sun'};
  }
}

//cloud-lightning //raios e nuvem
//nuvem de garoa cloud-drizzle
//cloud-off // sem nuvem
// cloud-rain // mta chuva
//

//return { bg: '#FADD7A', color: '#000000' }; amarelo lindo