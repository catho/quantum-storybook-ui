class Colors {
  static grey = {
    light: '#eceff1',
    medium: '#d1d8dc',
    harder: '#7b909c',
    strong: '#526977',
  };
  static blue = {
    light: '#03a9f4',
    sanjuan: '#294661',
    bayoux: '#546B81'
  };
  static black = '#000000';
  static white = '#FFFFFF';

  static hexToRgba(color, opacity) {
    const R = parseInt(color.substring(1, 3), 16);
    const G = parseInt(color.substring(3, 5), 16);
    const B = parseInt(color.substring(5, 7), 16);

    return `rgba(${R}, ${G}, ${B}, ${opacity})`;
  }
}

export default Colors;
