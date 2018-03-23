'use strict';

(function(){
  const root = this;
  const prev_module = root.transliterate;

  const library = {
    'A': 'A',
    'а': 'a',
    'Б': 'B',
    'б': 'b',
    'В':'V',
    'в':'v',
    'Г':'G',
    'г':'g',
    'Ґ':'Ģ',
    'ґ':'ģ',
    'Д':'D',
    'д':'d',
    'Е':'E',
    'е':'e',
    'Ё':'Yo',
    'ё':'yo',
    'Є':'È',
    'є':'ê',
    'Ж':'Ž',
    'ж':'ž',
    'З':'Z',
    'з':'z',
    'И':'I',
    'и':'i',
    'І':'Ì',
    'і':'ì',
    'Ї':'Ï',
    'ї':'ï',
    'Й':'J',
    'й':'j',
    'К':'K',
    'к':'k',
    'Л':'L',
    'л':'l',
    'М':'M',
    'м':'m',
    'Н':'N',
    'н':'n',
    'О':'O',
    'о':'o',
    'П':'P',
    'п':'p',
    'Р':'R',
    'р':'r',
    'С':'S',
    'с':'s',
    'Т':'T',
    'т':'t',
    'У':'U',
    'у':'u',
    'Ф':'F',
    'ф':'f',
    'Х':'H',
    'х':'h',
    'Ц':'C',
    'ц':'c',
    'Ч':'Č',
    'ч':'č',
    'Ш':'Ŝ',
    'ш':'ŝ',
    'Щ':'Ŝ',
    'щ':'ŝ',
    'Ъ':'',
    'ъ':'',
    'Ы':'Y',
    'ы':'y',
    'Ь':'',
    'ь':'',
    'Э':'È',
    'э':'è',
    'Ю':'Û',
    'ю':'û',
    'Я':'Â',
    'я':'â',
    '’':''
  };

  const transliterate = (string) => {
    string = string.replace(/зг/gi, 'zgh');
    let result = '';
    for(let i = 0; i < string.length; i++){
      result += library[string[i]] || library[string[i]] === '' ? library[string[i]] : string[i];
    }
    return result;
  };

  transliterate.noConflict = function(){
    root.transliterate = prev_module;
  };

  if( typeof exports !== 'undefined' ) {
    if( typeof module !== 'undefined' && module.exports ) {
      exports = module.exports = transliterate;
    }
    exports.transliterate = transliterate;
  }
  else {
    root.transliterate = transliterate;
  }

}).call(this);
